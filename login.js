/* Sign in / create account on one page (same flow as LinguaLearn's login.js). */
(function () {
  "use strict";

  const NEXT_PAGE = "questions.html"; // where users land after signing in

  const $ = (id) => document.getElementById(id);
  const form = $("auth-form");
  const title = $("auth-title");
  const subtitle = $("auth-subtitle");
  const emailInput = $("email");
  const pwInput = $("password");
  const pwHint = $("password-hint");
  const showPw = $("show-password");
  const submit = $("auth-submit");
  const message = $("auth-message");
  const toSignup = $("to-signup");
  const toSignin = $("to-signin");

  function say(text, kind) {
    message.textContent = text;
    message.className = "ml-message" + (kind ? " ml-message--" + kind : "");
  }

  if (!window.ML) {
    form.hidden = true;
    say("Accounts aren't set up on this site yet.", "error");
    return;
  }
  const db = window.ML.db;

  // --- hCaptcha helpers ---
  function getCaptchaToken() {
    const el = document.querySelector('[name="h-captcha-response"]');
    return el ? el.value : "";
  }

  function resetCaptcha() {
    if (window.hcaptcha && window.hcaptcha.reset) {
      window.hcaptcha.reset();
    }
  }

  const MODES = {
    signin: { title: "Sign in", subtitle: "Sign in to practise Core and M2 questions.", submit: "Sign in", autocomplete: "current-password" },
    signup: { title: "Create an account", subtitle: "Create an account to unlock the practice questions.", submit: "Create account", autocomplete: "new-password" },
  };

  let mode = "signin";
  let busy = false;

  function setMode(next) {
    mode = next;
    resetCaptcha();
    const m = MODES[next];
    title.textContent = m.title;
    subtitle.textContent = m.subtitle;
    submit.textContent = m.submit;
    pwInput.autocomplete = m.autocomplete;
    pwHint.hidden = next !== "signup";
    pwInput.value = "";
    pwInput.type = "password";
    showPw.checked = false;
    toSignup.hidden = next !== "signin";
    toSignin.hidden = next === "signin";
    say("");
  }

  function setBusy(state) {
    busy = state;
    submit.disabled = state;
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function passwordProblem(email, pw) {
    if (pw.length < 12) return "Use at least 12 characters.";
    if (new TextEncoder().encode(pw).length > 72) return "That password is too long (72 bytes maximum).";
    const local = email.split("@")[0].toLowerCase();
    if (local.length >= 4 && pw.toLowerCase().includes(local)) return "Don't include your email name in your password.";
    return "";
  }

  async function signIn(email, password) {
    const captchaToken = getCaptchaToken();
    if (!captchaToken) {
      say("Please complete the human verification first.", "error");
      return;
    }
    const { error } = await db.auth.signInWithPassword({
      email,
      password,
      options: { captchaToken },
    });
    resetCaptcha(); // a captcha token can only be used once

    if (error) {
      pwInput.value = "";
      if (error.name === "AuthRetryableFetchError") {
        say("We couldn't reach the server. Check your connection and try again.", "error");
        return;
      }
      // Deliberately vague: don't reveal whether the email exists.
      say("We couldn't sign you in. Check your email and password, and make sure you've confirmed your email address.", "error");
      await sleep(1000);
      return;
    }
    location.replace(NEXT_PAGE);
  }

  async function signUp(email, password) {
    const captchaToken = getCaptchaToken();
    if (!captchaToken) {
      say("Please complete the human verification first.", "error");
      return;
    }
    const { data, error } = await db.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.ML.pageUrl("login.html"),
        captchaToken,
      },
    });
    resetCaptcha();

    if (error) {
      if (error.code === "weak_password" || error.status === 429) say(error.message, "error");
      else say("We couldn't create the account. Please try again in a moment.", "error");
      return;
    }
    if (data.session) {
      location.replace(NEXT_PAGE);
      return;
    }
    setMode("signin");
    emailInput.value = email;
    say("If that address can be used for a new account, a confirmation link is on its way. Open it, then sign in here.", "success");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;

    const email = emailInput.value.trim();
    const password = pwInput.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      say("Enter a valid email address.", "error");
      return;
    }
    if (mode === "signin" && !password) {
      say("Enter your password.", "error");
      return;
    }
    if (mode === "signup") {
      const problem = passwordProblem(email, password);
      if (problem) {
        say(problem, "error");
        return;
      }
    }

    setBusy(true);
    say("");
    try {
      if (mode === "signin") await signIn(email, password);
      else await signUp(email, password);
    } catch (err) {
      console.error(err);
      say("Something went wrong. Please try again.", "error");
    } finally {
      setBusy(false);
    }
  });

  toSignup.addEventListener("click", () => setMode("signup"));
  toSignin.addEventListener("click", () => setMode("signin"));
  showPw.addEventListener("change", () => {
    pwInput.type = showPw.checked ? "text" : "password";
  });

  // Already signed in (or just confirmed their email via the link)? Go straight to the questions.
  db.auth.onAuthStateChange((event, session) => {
    if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) {
      location.replace(NEXT_PAGE);
    }
  });

  // Expired or already-used email links come back with an error in the URL.
  if (/error_code=otp_expired|error=access_denied/.test(location.hash)) {
    say("That link has expired or was already used. Sign in again, or create the account again to get a new link.", "error");
  }
})();
