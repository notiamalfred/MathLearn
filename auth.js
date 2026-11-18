/* Shared Supabase client and auth helpers (same design as LinguaLearn's auth.js).
   Load order: supabase-js -> supabase-config.js -> auth.js -> page script. */
(function () {
  "use strict";

  const cfg = window.MATHLEARN_CONFIG || {};
  if (!window.supabase || !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY || /YOUR-/.test(cfg.SUPABASE_URL + cfg.SUPABASE_ANON_KEY)) {
    console.error("MathLearn: Supabase isn't configured. Check supabase-config.js and the supabase-js <script> tag.");
    window.ML = null;
    return;
  }

  const db = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: {
      flowType: "pkce",          // no tokens in the URL
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,  // completes email-confirmation links
    },
  });

  // Absolute URL of a page next to the current one (works on GitHub Pages and on localhost).
  function pageUrl(name) {
    return new URL(name, location.href).href;
  }

  // Asks the server who the user is, so a stale or revoked session is caught.
  // Redirects to the login page if nobody is signed in.
  async function requireUser() {
    const { data, error } = await db.auth.getUser();
    if (error || !data || !data.user) {
      location.replace("login.html");
      return null;
    }
    return data.user;
  }

  async function signOut() {
    await db.auth.signOut();
    location.replace("login.html");
  }

  window.ML = { db, pageUrl, requireUser, signOut };
})();
