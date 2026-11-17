// auth.js
(function () {
  "use strict";

  const cfg = window.MATHLEARN_CONFIG || {};
  if (!window.supabase || !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    console.error("MathLearn: Supabase is not configured.");
    window.ML = null;
    return;
  }

  const db = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: {
      flowType: "pkce",
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });

  function pageUrl(name) {
    return new URL(name, location.href).href;
  }

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
