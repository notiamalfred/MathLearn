(function (root) {
"use strict";
/* =====================================================================================
   MathLearn question generator
   -------------------------------------------------------------------------------------
   Generates fresh practice questions that follow the wording ("format") of the questions
   in question-data.js, for every syllabus / topic / question type.

   Every generated question has the same shape as an entry of QUESTIONS_DATA:
     { id, type, level?, question, answer, steps, generated: true }
   Maths is written with \( ... \) so MathJax can render it.  Every answer is computed by
   the program (exact fractions / surds / exhaustive search), never typed in by hand.

   Public API (window.QuestionGenerator):
     has(group, topic, type)            -> true if there is a generator
     formatNames(group, topic, type)    -> names of the question formats behind that type
     generate(group, topic, type, n, {seed}) -> array of n questions
        type = null/"" -> a mix of all the types of that topic
   ===================================================================================== */

// ---------- random numbers ------------------------------------------------------------
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function makeRng(seed) {
  const next = mulberry32(seed === undefined ? (Math.random() * 4294967296) >>> 0 : seed);
  const r = {};
  r.next = next;
  r.int = (a, b) => a + Math.floor(next() * (b - a + 1));
  r.pick = (arr) => arr[Math.floor(next() * arr.length)];
  r.chance = (p) => next() < p;
  r.sign = () => (next() < 0.5 ? -1 : 1);
  r.nonzero = (a, b) => { let v; do { v = r.int(a, b); } while (v === 0); return v; };
  r.shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  r.sample = (arr, k) => r.shuffle(arr).slice(0, k);
  return r;
}

// ---------- exact fractions -----------------------------------------------------------
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; }
function lcm(a, b) { return Math.abs(a * b) / (gcd(a, b) || 1); }
function F(n, d) {
  if (d === undefined) d = 1;
  if (d === 0) throw new Error("zero denominator");
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return { n: n / g, d: d / g };
}
const ZERO = F(0), ONE = F(1);
const fadd = (a, b) => F(a.n * b.d + b.n * a.d, a.d * b.d);
const fsub = (a, b) => F(a.n * b.d - b.n * a.d, a.d * b.d);
const fmul = (a, b) => F(a.n * b.n, a.d * b.d);
const fdiv = (a, b) => F(a.n * b.d, a.d * b.n);
const fneg = (a) => F(-a.n, a.d);
const fabs = (a) => F(Math.abs(a.n), a.d);
const fcmp = (a, b) => a.n * b.d - b.n * a.d;
const feq = (a, b) => a.n === b.n && a.d === b.d;
const fnum = (a) => a.n / a.d;
const fisInt = (a) => a.d === 1;
const fpow = (a, k) => { let r = ONE; for (let i = 0; i < k; i++) r = fmul(r, a); return r; };
const toF = (x) => (typeof x === "number" ? F(x) : x);
const fsq = (a) => fmul(a, a);

// LaTeX / plain text of a fraction
function ftex(f) {
  f = toF(f);
  if (f.d === 1) return String(f.n);
  return (f.n < 0 ? "-" : "") + "\\frac{" + Math.abs(f.n) + "}{" + f.d + "}";
}
function fplain(f) {
  f = toF(f);
  return f.d === 1 ? String(f.n) : f.n + "/" + f.d;
}
// decimal if it terminates within 4 places, otherwise a fraction
function fdec(f) {
  f = toF(f);
  if (f.d === 1) return String(f.n);
  let d = f.d;
  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;
  if (d === 1) {
    const s = String(Math.round(fnum(f) * 1e6) / 1e6);
    if (s.replace("-", "").split(".")[1] && s.replace("-", "").split(".")[1].length <= 4) return s;
  }
  return ftex(f);
}
// number in brackets if negative: used when substituting a value into an expression
const par = (x) => { const s = typeof x === "number" ? String(x) : ftex(x); return s[0] === "-" ? "(" + s + ")" : s; };

// a sum of terms: [[coef, "x^{2}"], [coef, "x"], [coef, ""]] -> "2x^{2} - 3x + 1"
function terms(list) {
  let out = "", first = true;
  for (const item of list) {
    const c = toF(item[0]), v = item[1];
    if (c.n === 0) continue;
    const neg = c.n < 0, a = fabs(c);
    let body;
    if (v === "") body = ftex(a);
    else if (a.n === 1 && a.d === 1) body = v;
    else if (a.d === 1) body = a.n + (/^\d/.test(v) ? "\\cdot " : "") + v;
    else body = "\\frac{" + a.n + "}{" + a.d + "}" + (/^\d/.test(v) ? "\\cdot " : "") + v;
    if (first) { out += (neg ? "-" : "") + body; first = false; }
    else out += (neg ? " - " : " + ") + body;
  }
  return out || "0";
}
const M = (s) => "\\(" + s + "\\)";           // inline maths
const deg = (n) => n + "^{\\circ}";
const sgnStr = (n) => (n < 0 ? "-" : "+");
function pickLetter(rng, avoid) { return rng.pick(["a", "b", "c", "h", "k", "m", "n", "p", "q"].filter((x) => x !== avoid)); }

// ---------- surds ---------------------------------------------------------------------
function sqrtSplit(n) { // sqrt(n) = k * sqrt(m), m square-free
  let k = 1, m = n;
  for (let f = 2; f * f <= m; f++) while (m % (f * f) === 0) { m /= f * f; k *= f; }
  return { k, m };
}
// c * sqrt(n) with c a fraction, simplified: returns {c, n}
function surd(c, n) { const s = sqrtSplit(n); return { c: fmul(toF(c), F(s.k)), n: s.m }; }
function surdTex(s) {
  const c = s.c;
  if (s.n === 1) return ftex(c);
  if (c.n === 0) return "0";
  const neg = c.n < 0 ? "-" : "", a = fabs(c);
  if (a.d === 1) return neg + (a.n === 1 ? "" : a.n) + "\\sqrt{" + s.n + "}";
  return neg + "\\frac{" + (a.n === 1 ? "" : a.n) + "\\sqrt{" + s.n + "}}{" + a.d + "}";
}
function isSquare(n) { if (n < 0) return false; const r = Math.round(Math.sqrt(n)); return r * r === n; }

// ---------- polynomials in one variable (coefficients are fractions, index = power) ----
const P = {
  make: (arr) => { const a = arr.map(toF); while (a.length > 1 && a[a.length - 1].n === 0) a.pop(); return a.length ? a : [ZERO]; },
  add: (p, q) => { const n = Math.max(p.length, q.length), r = []; for (let i = 0; i < n; i++) r.push(fadd(p[i] || ZERO, q[i] || ZERO)); return P.make(r); },
  sub: (p, q) => P.add(p, q.map(fneg)),
  mul: (p, q) => { const r = Array(p.length + q.length - 1).fill(ZERO); p.forEach((a, i) => q.forEach((b, j) => { r[i + j] = fadd(r[i + j], fmul(a, b)); })); return P.make(r); },
  scale: (p, c) => P.make(p.map((a) => fmul(a, toF(c)))),
  pow: (p, k) => { let r = [ONE]; for (let i = 0; i < k; i++) r = P.mul(r, p); return r; },
  compose: (p, q) => { let r = [ZERO]; for (let i = p.length - 1; i >= 0; i--) r = P.add(P.mul(r, q), [p[i]]); return P.make(r); }, // p(q(x))
  evalAt: (p, x) => { let r = ZERO; for (let i = p.length - 1; i >= 0; i--) r = fadd(fmul(r, toF(x)), p[i]); return r; },
  eq: (p, q) => { const a = P.make(p), b = P.make(q); return a.length === b.length && a.every((c, i) => feq(c, b[i])); },
  tex: (p, v) => { const list = []; for (let i = p.length - 1; i >= 0; i--) list.push([p[i], i === 0 ? "" : i === 1 ? v : v + "^{" + i + "}"]); return terms(list); },
};

// ---------- multiple choice -----------------------------------------------------------
// options are strings of maths (without the \( \)); returns { block, letter }
function mcBlock(rng, correct, wrongs, inline) {
  const seen = new Set([correct]), opts = [correct];
  for (const w of wrongs) { if (!seen.has(w)) { seen.add(w); opts.push(w); } if (opts.length === 4) break; }
  if (opts.length < 4) return null;
  const order = rng.shuffle(opts);
  const letters = ["A", "B", "C", "D"];
  const lines = order.map((o, i) => letters[i] + ". " + (inline ? o : M(o)));
  return { block: lines.join("\n"), letter: letters[order.indexOf(correct)] };
}
// "I only / II only / ..." options for statement questions
const STATEMENT_SETS = ["I only", "II only", "III only", "I and II only", "I and III only", "II and III only", "I, II and III"];
function statementOptions(rng, trueMask) { // trueMask: [bool,bool,bool]
  const names = ["I", "II", "III"];
  const idx = trueMask.map((t, i) => (t ? i : -1)).filter((i) => i >= 0);
  if (!idx.length) return null;
  const label = idx.length === 3 ? "I, II and III" : idx.length === 1 ? names[idx[0]] + " only" : names[idx[0]] + " and " + names[idx[1]] + " only";
  const others = rng.shuffle(STATEMENT_SETS.filter((s) => s !== label));
  return mcBlock(rng, label, others, true);
}

// ---------- results ---------------------------------------------------------------------
let ID_COUNTER = 0;
// last-minute clean-up of the maths text: "+ -3" -> "- 3", "1x" -> "x", "x^{1}" -> "x"
function tidy(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (let i = 0; i < 3; i++) {
    t = t.replace(/ \+ -(?=[\d\\a-zA-Z(])/g, " - ").replace(/ - -(?=[\d\\a-zA-Z(])/g, " + ");
    t = t.replace(/\^\{1\}(?![\d])/g, "");
    t = t.replace(/(^|[\s(\[{+\-=,|])1(?=(?:[a-zA-Z])|\\(?:alpha|beta|theta|sin|cos|tan|sec|csc|cot|sum|prod|left|log)\b)/g, "$1");
  }
  return t;
}
function makeQ(type, level, question, answer, steps, chk) {
  question = tidy(question); answer = tidy(answer); steps = tidy(steps);
  const q = { id: "gen-" + (++ID_COUNTER), type: type || undefined, question, answer, generated: true };
  if (level !== null && level !== undefined) q.level = level;
  if (steps) q.steps = steps;
  if (!q.type) delete q.type;
  // hidden machine-check data used only by the self-tests (not enumerable, never shown)
  if (chk) Object.defineProperty(q, "_chk", { value: chk, enumerable: false });
  return q;
}
const partLabel = (i) => "(" + String.fromCharCode(97 + i) + ")";
const bad = () => null; // a generator returns null to say "try again with other random numbers"

// ---------- registry --------------------------------------------------------------------
// REG["core/trigonometry/Trigonometric Equations"] = [ {name, w, fn}, ... ]   (fn(rng) -> question | null)
const REG = {};
const TOPIC_TYPES = {}; // "core/trigonometry" -> [type names, in order]
function reg(group, topic, type, formats) {
  const key = group + "/" + topic + "/" + (type || "*");
  REG[key] = formats.map((f) => ({ name: f[0], w: f[1], fn: f[2] }));
  const tk = group + "/" + topic;
  (TOPIC_TYPES[tk] = TOPIC_TYPES[tk] || []).push(type || "*");
}

/* ===================== CORE · TRIGONOMETRY ===================== */
const T_TOPIC = ["core", "trigonometry"];

// exact sin / cos at the angles whose values are rational
const SIN_T = { 0: ZERO, 30: F(1, 2), 90: ONE, 150: F(1, 2), 180: ZERO, 210: F(-1, 2), 270: F(-1), 330: F(-1, 2), 360: ZERO };
const COS_T = { 0: ONE, 60: F(1, 2), 90: ZERO, 120: F(-1, 2), 180: F(-1), 240: F(-1, 2), 270: ZERO, 300: F(1, 2), 360: ONE };
const TRIG_OK = { sin: Object.keys(SIN_T).map(Number), cos: Object.keys(COS_T).map(Number) };
const FN_TEX = { sin: "\\sin\\theta", cos: "\\cos\\theta" };
const FN2_TEX = { sin: "\\sin^2\\theta", cos: "\\cos^2\\theta" };
const FULL = { lo: 0, hi: 360 };

function trigRange(fn, lo, hi) {
  const table = fn === "sin" ? SIN_T : COS_T, crit = fn === "sin" ? [90, 270] : [0, 180, 360];
  const vals = [lo, hi].concat(crit.filter((c) => c > lo && c < hi)).map((d) => table[d]);
  let mn = vals[0], mx = vals[0];
  vals.forEach((v) => { if (fcmp(v, mn) < 0) mn = v; if (fcmp(v, mx) > 0) mx = v; });
  return { lo: mn, hi: mx };
}
function pickDomain(rng, fn) {
  for (let i = 0; i < 100; i++) {
    const ok = TRIG_OK[fn], lo = rng.pick(ok), hi = rng.pick(ok);
    if (hi - lo >= 60 && !(lo === 0 && hi === 360)) {
      const r = trigRange(fn, lo, hi);
      if (fcmp(r.hi, r.lo) > 0) return { lo, hi };
    }
  }
  return { lo: 90, hi: 180 };
}
const domTex = (d) => deg(d.lo) + " \\le \\theta \\le " + deg(d.hi);

// extreme values of A t^2 + B t + C on [lo, hi]
function quadExtremes(A, B, C, lo, hi) {
  const ev = (t) => fadd(fadd(fmul(A, fsq(t)), fmul(B, t)), C);
  const pts = [lo, hi];
  let h = null;
  if (A.n !== 0) { h = fdiv(fneg(B), fmul(F(2), A)); if (fcmp(h, lo) > 0 && fcmp(h, hi) < 0) pts.push(h); }
  const vals = pts.map((t) => ({ t, v: ev(t) }));
  let mx = vals[0], mn = vals[0];
  vals.forEach((x) => { if (fcmp(x.v, mx.v) > 0) mx = x; if (fcmp(x.v, mn.v) < 0) mn = x; });
  return { max: mx.v, min: mn.v, vals, ev, h };
}
function vertexForm(A, B, C, v) {
  const h0 = fdiv(fneg(B), fmul(F(2), A)), K = fsub(C, fdiv(fsq(B), fmul(F(4), A)));
  const inner = h0.n === 0 ? v : "(" + v + (h0.n < 0 ? " + " : " - ") + ftex(fabs(h0)) + ")";
  const coef = feq(A, ONE) ? "" : feq(A, F(-1)) ? "-" : ftex(A.d === 1 ? A : A);
  const sq = h0.n === 0 ? v + "^{2}" : inner + "^{2}";
  const k = K.n === 0 ? "" : (K.n < 0 ? " - " : " + ") + ftex(fabs(K));
  return (A.d === 1 || feq(A, ONE) ? coef : "\\frac{" + Math.abs(A.n) + "}{" + A.d + "}" ) + sq + k;
}
const mmAns = (mx, mn) => "Maximum = " + fplain(mx) + ", Minimum = " + fplain(mn);
const rangeTex = (lo, hi) => ftex(lo) + " \\le t \\le " + ftex(hi);

// one function to maximise / minimise; returns {expr, dom, ans, steps}
function mmPart(rng, kind, restricted) {
  const fn = rng.pick(["sin", "cos"]), f = FN_TEX[fn], f2 = FN2_TEX[fn];
  const dom = restricted ? pickDomain(rng, fn) : FULL;
  const tr = trigRange(fn, dom.lo, dom.hi);
  const tname = "t", tdef = "Let \\(t = " + f + "\\)" + (restricted ? ". For \\(" + domTex(dom) + "\\), \\(" + rangeTex(tr.lo, tr.hi) + "\\)." : ".");
  let expr, ans, steps, yfn, cmx = null, cmn = null;
  const S = (th) => (fn === "sin" ? Math.sin : Math.cos)(th * Math.PI / 180);
  if (kind === "linear") {
    const a = rng.nonzero(-5, 5), b = rng.nonzero(-6, 6);
    expr = rng.chance(0.5) ? terms([[a, f], [b, ""]]) : terms([[b, ""], [a, f]]);
    const e = quadExtremes(ZERO, F(a), F(b), tr.lo, tr.hi);
    const tAtMax = e.vals.find((x) => feq(x.v, e.max)).t, tAtMin = e.vals.find((x) => feq(x.v, e.min)).t;
    steps = (restricted ? tdef + " " : "") + "Consider the linear function \\(y = " + terms([[a, tname], [b, ""]]) + "\\). " +
      "Maximum value: \\(y = " + a + "(" + ftex(tAtMax) + ") " + sgnStr(b) + " " + Math.abs(b) + " = " + ftex(e.max) + "\\), " +
      "Minimum value: \\(y = " + a + "(" + ftex(tAtMin) + ") " + sgnStr(b) + " " + Math.abs(b) + " = " + ftex(e.min) + "\\).";
    ans = mmAns(e.max, e.min); yfn = (th) => a * S(th) + b; cmx = e.max; cmn = e.min;
  } else if (kind === "sq1") { // a f^2 + b  or  c + a sin^2 + b cos^2
    if (rng.chance(0.6)) {
      const a = rng.nonzero(-5, 5), b = rng.nonzero(-6, 6);
      expr = rng.chance(0.5) ? terms([[a, f2], [b, ""]]) : terms([[b, ""], [a, f2]]);
      const e = quadExtremes(ZERO, F(a), F(b), ZERO, ONE);
      steps = "Consider the quadratic function \\(y = " + terms([[a, "t^{2}"], [b, ""]]) + "\\) where \\(t = " + f + "\\). Since \\(0 \\le t^{2} \\le 1\\): " +
        "Maximum value: \\(y = " + ftex(e.max) + "\\), Minimum value: \\(y = " + ftex(e.min) + "\\).";
      ans = mmAns(e.max, e.min); yfn = (th) => a * S(th) ** 2 + b; cmx = e.max; cmn = e.min;
    } else {
      const a = rng.nonzero(-4, 4), b = rng.nonzero(-4, 4), c = rng.nonzero(-3, 3);
      if (a === b) return null;
      expr = terms([[c, ""], [a, "\\sin^2\\theta"], [b, "\\cos^2\\theta"]]);
      const A = a - b, Cc = b + c; // y = A u + Cc, u = sin^2 in [0,1]
      const e = quadExtremes(ZERO, F(A), F(Cc), ZERO, ONE);
      steps = "Note that \\(y = " + expr + " = " + terms([[c, ""], [a, "\\sin^{2}\\theta"]]) + " + " + b + "(1 - \\sin^{2}\\theta) = " + terms([[A, "\\sin^{2}\\theta"], [Cc, ""]]) + "\\). " +
        "Consider \\(y = " + terms([[A, "t^{2}"], [Cc, ""]]) + "\\) where \\(t = \\sin\\theta\\) and \\(0 \\le t^{2} \\le 1\\): Maximum value: \\(y = " + ftex(e.max) + "\\), Minimum value: \\(y = " + ftex(e.min) + "\\).";
      ans = mmAns(e.max, e.min); cmx = e.max; cmn = e.min;
      yfn = (th) => c + a * Math.sin(th * Math.PI / 180) ** 2 + b * Math.cos(th * Math.PI / 180) ** 2;
    }
  } else if (kind === "quad") {
    const style = rng.pick(["square", "expanded", "product"]);
    let A, B, C;
    if (style === "square") {
      const a = rng.nonzero(-4, 4), b = rng.nonzero(-5, 5), s = rng.sign();
      A = s * a * a; B = 2 * s * a * b; C = s * b * b;
      const inner = rng.chance(0.5) ? terms([[a, f], [b, ""]]) : terms([[b, ""], [a, f]]);
      expr = (s < 0 ? "-" : "") + "(" + inner + ")^{2}";
    } else if (style === "expanded") {
      A = rng.nonzero(-4, 4); B = rng.nonzero(-4, 4); C = rng.nonzero(-5, 5);
      expr = terms([[A, f2], [B, f], [C, ""]]);
    } else {
      const p = rng.pick([1, 2, 3]), q = rng.nonzero(-3, 3), r = rng.nonzero(-3, 3);
      A = p; B = -(p * r + q); C = q * r;
      expr = "(" + terms([[p, f], [-q, ""]]) + ")(" + terms([[1, f], [-r, ""]]) + ")";
    }
    const e = quadExtremes(F(A), F(B), F(C), tr.lo, tr.hi);
    const tail = e.vals.map((x) => "\\(t = " + ftex(x.t) + "\\): \\(y = " + ftex(e.ev(x.t)) + "\\)").join("; ");
    steps = tdef + " Then \\(y = " + terms([[A, "t^{2}"], [B, "t"], [C, ""]]) + " = " + vertexForm(F(A), F(B), F(C), "t") + "\\). " +
      (e.h ? "The vertex \\(t = " + ftex(e.h) + "\\) lies inside the range. " : "The vertex is not inside the range, so the extreme values occur at the end points. ") +
      "Values: " + tail + ". Hence the maximum value is \\(" + ftex(e.max) + "\\) and the minimum value is \\(" + ftex(e.min) + "\\).";
    ans = mmAns(e.max, e.min); cmx = e.max; cmn = e.min;
    yfn = (th) => { const t = S(th); return A * t * t + B * t + C; };
  } else if (kind === "rational") {
    const q = rng.pick([1, -1, 2, -2, 3]), s0 = rng.nonzero(-5, 5), p = rng.nonzero(-6, 6), r = rng.pick([0, 0, rng.nonzero(-6, 6)]);
    if (p * s0 - r * q === 0) return null;
    const pole = F(-s0, q), inside = rng.chance(0.3);
    const strictlyIn = fcmp(pole, tr.lo) > 0 && fcmp(pole, tr.hi) < 0;
    const out = fcmp(pole, tr.lo) < 0 || fcmp(pole, tr.hi) > 0;
    if (inside ? !strictlyIn : !out) return null;
    const num = terms([[p, f], [r, ""]]), den = rng.chance(0.5) ? terms([[q, f], [s0, ""]]) : terms([[s0, ""], [q, f]]);
    expr = "\\dfrac{" + num + "}{" + den + "}";
    const y = (t) => fdiv(fadd(fmul(F(p), t), F(r)), fadd(fmul(F(q), t), F(s0)));
    const yt = "\\frac{" + terms([[p, "t"], [r, ""]]) + "}{" + terms([[q, "t"], [s0, ""]]) + "}";
    if (inside) {
      ans = "No maximum or minimum"; yfn = (th) => { const t = S(th); return (p * t + r) / (q * t + s0); };
      steps = tdef + " Consider \\(y = " + yt + "\\). The denominator is zero at \\(t = " + ftex(pole) + "\\), which lies inside the range \\(" + rangeTex(tr.lo, tr.hi) + "\\). " +
        "So \\(y\\) takes arbitrarily large positive and negative values: there is no maximum or minimum value.";
    } else {
      const ylo = y(tr.lo), yhi = y(tr.hi);
      const mx = fcmp(ylo, yhi) > 0 ? ylo : yhi, mn = fcmp(ylo, yhi) > 0 ? yhi : ylo;
      ans = mmAns(mx, mn); cmx = mx; cmn = mn; yfn = (th) => { const t = S(th); return (p * t + r) / (q * t + s0); };
      steps = tdef + " Consider \\(y = " + yt + "\\). The denominator is zero only at \\(t = " + ftex(pole) + "\\), which is outside the range, so \\(y\\) is monotonic on \\(" + rangeTex(tr.lo, tr.hi) + "\\) and the extreme values occur at the end points. " +
        "At \\(t = " + ftex(tr.lo) + "\\): \\(y = " + ftex(ylo) + "\\). At \\(t = " + ftex(tr.hi) + "\\): \\(y = " + ftex(yhi) + "\\). " +
        "Maximum value \\(= " + ftex(mx) + "\\), Minimum value \\(= " + ftex(mn) + "\\).";
    }
  } else if (kind === "rsq") { // p cos^2 / (q +- sin^2)
    const p = rng.nonzero(-6, 6), eps = rng.sign(), q = eps > 0 ? rng.int(1, 3) : rng.int(2, 4);
    const [fa, fb] = fn === "sin" ? ["\\sin^2\\theta", "\\cos^2\\theta"] : ["\\cos^2\\theta", "\\sin^2\\theta"];
    expr = "\\dfrac{" + terms([[p, fb]]) + "}{" + terms([[q, ""], [eps, fa]]) + "}";
    const y0 = F(p, q), y1 = ZERO;
    const mx = fcmp(y0, y1) > 0 ? y0 : y1, mn = fcmp(y0, y1) > 0 ? y1 : y0;
    steps = "Let \\(u = " + fa + "\\), so \\(0 \\le u \\le 1\\) and \\(" + fb + " = 1 - u\\). Then \\(y = \\frac{" + terms([[p, ""], [-p, "u"]]) + "}{" + terms([[q, ""], [eps, "u"]]) + "}\\). " +
      "The denominator never vanishes on \\(0 \\le u \\le 1\\), so \\(y\\) is monotonic and the extreme values occur at the end points: \\(u = 0\\): \\(y = " + ftex(y0) + "\\); \\(u = 1\\): \\(y = 0\\).";
    ans = mmAns(mx, mn); cmx = mx; cmn = mn;
    yfn = (th) => { const a1 = Math.sin(th * Math.PI / 180) ** 2, a2 = Math.cos(th * Math.PI / 180) ** 2; const [x, y] = fn === "sin" ? [a1, a2] : [a2, a1]; return p * y / (q + eps * x); };
  }
  return { expr, dom, ans, steps, chk: { y: yfn, lo: dom.lo, hi: dom.hi, max: cmx && fnum(cmx), min: cmn && fnum(cmn) } };
}

function mmSingle(kind, restricted, level) {
  return (rng) => {
    const part = mmPart(rng, kind, restricted);
    if (!part) return null;
    const range = restricted ? "where" : "for";
    const q = "Find the maximum and minimum value of \\( y = " + part.expr + " \\) " + range + " \\( " + domTex(part.dom) + " \\).";
    return makeQ("Maximum and Minimum Values of Trigonometric Functions", level, q, part.ans, part.steps, { kind: "mm", parts: [part.chk] });
  };
}
function mmMulti(rng) {
  const n = rng.int(3, 4);
  const kinds = rng.shuffle(["linear", "sq1", "quad", "quad", "rational", "rsq"]).slice(0, n);
  const parts = kinds.map((k) => mmPart(rng, k, false));
  if (parts.some((p) => !p)) return null;
  const q = "[Level 2]\nFind the maximum/minimum value of these functions for \\(0^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\).\n" +
    parts.map((p, i) => partLabel(i) + " \\(y = " + p.expr + "\\)").join("\n");
  const a = parts.map((p, i) => partLabel(i) + " " + p.ans).join("\n");
  const s = parts.map((p, i) => partLabel(i) + " " + p.steps).join("\n");
  return makeQ("Maximum and Minimum Values of Trigonometric Functions", null, q, a, s, { kind: "mm", parts: parts.map((p) => p.chk) });
}
function mmUnknowns(rng) {
  // (a) a sin + b, (b) p cos - q, (c) (u sin + v)^2
  const A1 = rng.int(1, 6), b1 = rng.nonzero(-4, 4);
  const A2 = rng.int(1, 6), b2 = rng.nonzero(-4, 4); // y = p cos - q with -q = b2
  const u = rng.int(1, 3), v = rng.int(u + 1, u + 3);
  const M1 = A1 + b1, m1 = -A1 + b1, M2 = A2 + b2, m2 = -A2 + b2, M3 = (u + v) * (u + v), m3 = (v - u) * (v - u);
  const letters = rng.pick([["a", "b", "p", "q", "u", "v"], ["m", "n", "p", "q", "s", "t"], ["a", "b", "c", "d", "u", "v"]]);
  const [la, lb, lp, lq, lu, lv] = letters;
  const q = "[Level 3]\nFind the values of the unknown, which are non-zero integers, of the following functions:\n" +
    "(a) \\(y = " + la + "\\sin\\theta + " + lb + "\\), with maximum value \\(" + M1 + "\\) and minimum value \\(" + m1 + "\\).\n" +
    "(b) \\(y = " + lp + "\\cos\\theta - " + lq + "\\), with maximum value \\(" + M2 + "\\) and minimum value \\(" + m2 + "\\).\n" +
    "(c) \\(y = (" + lu + "\\sin\\theta + " + lv + ")^{2}\\), with maximum value \\(" + M3 + "\\) and minimum value \\(" + m3 + "\\).";
  const a = "(a) \\(" + la + " = " + A1 + "," + lb + " = " + b1 + "\\) or \\(" + la + " = " + (-A1) + "," + lb + " = " + b1 + "\\)\n" +
    "(b) \\(" + lp + " = " + A2 + "," + lq + " = " + (-b2) + "\\) or \\(" + lp + " = " + (-A2) + "," + lq + " = " + (-b2) + "\\)\n" +
    "(c) \\(" + lu + " = " + u + "," + lv + " = " + v + "\\); \\(" + lu + " = " + (-u) + "," + lv + " = " + v + "\\); \\(" + lu + " = " + u + "," + lv + " = " + (-v) + "\\); or \\(" + lu + " = " + (-u) + "," + lv + " = " + (-v) + "\\)";
  const s = "(a) The maximum value is \\(|" + la + "| + " + lb + "\\) and the minimum value is \\(-|" + la + "| + " + lb + "\\). So \\(" + lb + " = \\frac{" + M1 + " + (" + m1 + ")}{2} = " + b1 + "\\) and \\(|" + la + "| = \\frac{" + M1 + " - (" + m1 + ")}{2} = " + A1 + "\\).\n" +
    "(b) Similarly \\(-" + lq + " = \\frac{" + M2 + " + (" + m2 + ")}{2} = " + b2 + "\\), so \\(" + lq + " = " + (-b2) + "\\), and \\(|" + lp + "| = \\frac{" + M2 + " - (" + m2 + ")}{2} = " + A2 + "\\).\n" +
    "(c) Since the minimum value is positive, \\(" + lu + "\\sin\\theta + " + lv + "\\) never changes sign, so \\(|" + lv + "| > |" + lu + "|\\). Then \\((|" + lv + "| + |" + lu + "|)^{2} = " + M3 + "\\) and \\((|" + lv + "| - |" + lu + "|)^{2} = " + m3 + "\\), giving \\(|" + lv + "| + |" + lu + "| = " + (u + v) + "\\) and \\(|" + lv + "| - |" + lu + "| = " + (v - u) + "\\). Hence \\(|" + lu + "| = " + u + "\\), \\(|" + lv + "| = " + v + "\\).";
  return makeQ("Maximum and Minimum Values of Trigonometric Functions", null, q, a, s);
}
reg("core", "trigonometry", "Maximum and Minimum Values of Trigonometric Functions", [
  ["linear function a sin/cos + b", 3, mmSingle("linear", false, 1)],
  ["function of sin² / cos²", 2, mmSingle("sq1", false, 1)],
  ["quadratic in sin / cos (square, expanded, product)", 4, mmSingle("quad", false, 2)],
  ["rational function", 3, mmSingle("rational", false, 2)],
  ["rational function of sin² and cos²", 1, mmSingle("rsq", false, 2)],
  ["restricted range of θ (linear)", 1, mmSingle("linear", true, 2)],
  ["restricted range of θ (quadratic)", 2, mmSingle("quad", true, 2)],
  ["restricted range of θ (rational)", 1, mmSingle("rational", true, 2)],
  ["several functions in one question (a)-(d)", 2, mmMulti],
  ["find the unknown constants from the maximum and minimum", 2, mmUnknowns],
]);

/* ---------- Sequences related to Trigonometric Ratios ---------- */
const SEQ_TYPE = "Sequences related to Trigonometric Ratios";
const sin2Reduce = (x) => { let y = ((x % 180) + 180) % 180; if (y > 90) y = 180 - y; return y; };
const cos2Reduce = (x) => sin2Reduce(90 - x);
function pairCount(angles, red) { // group sin^2 terms into pairs summing to 1
  const cnt = {};
  angles.forEach((x) => { const r = red(x); cnt[r] = (cnt[r] || 0) + 1; });
  let pairs = 0, mid = 0;
  for (const k of Object.keys(cnt).map(Number)) {
    if (k < 45) { if ((cnt[90 - k] || 0) !== cnt[k]) return null; pairs += cnt[k]; }
    else if (k === 45) mid = cnt[k];
    else if (!cnt[90 - k]) return null;
  }
  return { pairs, mid, value: F(2 * pairs + mid, 2) };
}
function apAngles(a, d, n) { const out = []; for (let i = 0; i < n; i++) out.push(a + i * d); return out; }
function listShow(items, sep) { // first three, \ldots, last
  if (items.length <= 5) return items.join(sep);
  return items.slice(0, 3).join(sep) + sep + "\\ldots" + sep + items[items.length - 1];
}
const SEQ_HEAD = "Find the values of the following sequences.\n";
const decStr = (f) => (f.d === 1 ? String(f.n) : String(fnum(f)));

function seqSquares(which) { // sin^2 or cos^2 over an arithmetic progression of angles
  return (rng) => {
    const fnTex = which === "sin" ? "\\sin^{2}" : "\\cos^{2}", red = which === "sin" ? sin2Reduce : cos2Reduce;
    for (let t = 0; t < 4000; t++) {
      const d = rng.pick([1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30]), n = rng.int(6, 80), a = rng.int(1, 200);
      if (a + (n - 1) * d > 1000) continue;
      const angles = apAngles(a, d, n), pc = pairCount(angles, red);
      if (!pc) continue;
      const expr = listShow(angles.map((x) => fnTex + x + "^{\\circ}"), " + ");
      const steps = "Since \\(" + fnTex + "(180^{\\circ} \\pm \\theta) = " + fnTex + "\\theta\\), every angle can be reduced to an angle between \\(0^{\\circ}\\) and \\(90^{\\circ}\\). " +
        "Then use \\(\\sin^{2}\\theta + \\sin^{2}(90^{\\circ} - \\theta) = \\sin^{2}\\theta + \\cos^{2}\\theta = 1\\) to group the " + n + " terms into " + pc.pairs + " pairs each equal to \\(1\\)" +
        (pc.mid ? ", together with " + pc.mid + " term(s) equal to \\(" + fnTex + "45^{\\circ} = \\frac{1}{2}\\)" : "") +
        ". The sum is \\(" + decStr(pc.value) + "\\).";
      const num = angles.reduce((s, x) => s + (which === "sin" ? Math.sin : Math.cos)(x * Math.PI / 180) ** 2, 0);
      return makeQ(SEQ_TYPE, null, SEQ_HEAD + "[Level " + (d > 6 || n > 40 ? 2 : 1) + "] \\(" + expr + "\\)", "\\(" + decStr(pc.value) + "\\)", steps, { kind: "num", value: num, expect: fnum(pc.value) });
    }
    return null;
  };
}
function seqTanProduct(rng) {
  for (let t = 0; t < 4000; t++) {
    const d = rng.pick([1, 2, 3, 4, 5, 6, 9, 10, 15]), n = rng.int(6, 70), a = rng.int(1, 200);
    if (a + (n - 1) * d > 1000) continue;
    const angles = apAngles(a, d, n);
    let neg = 0, ok = true;
    const cnt = {};
    for (const x of angles) {
      const y = ((x % 180) + 180) % 180;
      if (y === 90 || y === 0) { ok = false; break; }
      let r = y; if (y > 90) { r = 180 - y; neg++; }
      cnt[r] = (cnt[r] || 0) + 1;
    }
    if (!ok) continue;
    for (const k of Object.keys(cnt).map(Number)) {
      if (k < 45 && (cnt[90 - k] || 0) !== cnt[k]) ok = false;
      if (k > 45 && !cnt[90 - k]) ok = false;
    }
    if (!ok) continue;
    const val = neg % 2 === 0 ? 1 : -1;
    const expr = listShow(angles.map((x) => "\\tan " + x + "^{\\circ}"), "");
    const steps = "Reduce each term using \\(\\tan(180^{\\circ} + \\theta) = \\tan\\theta\\) and \\(\\tan(180^{\\circ} - \\theta) = -\\tan\\theta\\), so \\(\\tan x = \\pm\\tan\\alpha\\) with \\(0^{\\circ} < \\alpha < 90^{\\circ}\\). " +
      "Terms with \\(\\alpha\\) and \\(90^{\\circ} - \\alpha\\) multiply to \\(\\tan\\alpha\\tan(90^{\\circ} - \\alpha) = \\tan\\alpha\\cot\\alpha = 1\\) (and \\(\\tan 45^{\\circ} = 1\\)). " +
      "Exactly " + neg + " of the " + n + " terms carry a minus sign, so the product is \\(" + val + "\\).";
    const num = angles.reduce((s, x) => s * Math.tan(x * Math.PI / 180), 1);
    return makeQ(SEQ_TYPE, null, SEQ_HEAD + "[Level 1] \\(" + expr + "\\)", "\\(" + val + "\\)", steps, { kind: "num", value: num, expect: val });
  }
  return null;
}
function seqCosPairs(rng) { // cos 1 - cos 2 + cos 3 ... + cos 179  (cos k + cos(180-k) = 0)
  const a = rng.pick([1, 1, 1, 2, 3, 5, 7, 10, 15]), alt = rng.chance(0.65);
  const first = rng.sign();
  const items = [];
  for (let k = a; k <= 180 - a; k++) {
    const s = alt ? (((k - a) % 2 === 0) ? first : -first) : first;
    items.push({ k, s });
  }
  const show = (it, i) => (i === 0 ? (it.s < 0 ? "-" : "") : it.s < 0 ? " - " : " + ") + "\\cos " + it.k + "^{\\circ}";
  const shown = items.length <= 5 ? items.map(show) : [show(items[0], 0), show(items[1], 1), show(items[2], 2), " + \\ldots", show(items[items.length - 1], 1)];
  // tidy the sign of the final shown term
  const expr = shown.join("");
  const steps = "Group the terms in pairs \\(\\cos k^{\\circ}\\) and \\(\\cos(180 - k)^{\\circ}\\). " + (alt ? "Because \\(k\\) and \\(180 - k\\) have the same parity, they carry the same sign, and " : "") +
    "\\(\\cos(180^{\\circ} - \\theta) = -\\cos\\theta\\), so each pair adds to \\(0\\). The middle term is \\(\\cos 90^{\\circ} = 0\\). Hence the sum is \\(0\\).";
  const num = items.reduce((s, it) => s + it.s * Math.cos(it.k * Math.PI / 180), 0);
  return makeQ(SEQ_TYPE, null, SEQ_HEAD + "[Level 1] \\(" + expr + "\\)", "\\(0\\)", steps, { kind: "num", value: num, expect: 0 });
}
function seqCosMultiples(rng) { // cos(t0) + cos(2 t0) + ... + cos(n t0)
  const t0 = rng.pick([60, 90, 120, 180]), cyc = 360 / t0;
  const n = rng.chance(0.55) ? cyc * rng.int(2, 12) : rng.int(7, 40);
  const val = (k) => { const x = (k * t0) % 360; return x === 0 ? ONE : x === 60 || x === 300 ? F(1, 2) : x === 90 || x === 270 ? ZERO : x === 120 || x === 240 ? F(-1, 2) : F(-1); };
  let s = ZERO; for (let k = 1; k <= n; k++) s = fadd(s, val(k));
  const expr = listShow(apAngles(t0, t0, n).map((x) => "\\cos " + x + "^{\\circ}"), " + ");
  const full = Math.floor(n / cyc), rem = n % cyc;
  const steps = "The values of \\(\\cos(k \\times " + t0 + "^{\\circ})\\) repeat every " + cyc + " terms and each block of " + cyc + " consecutive terms adds to \\(0\\). " +
    "There are " + full + " complete block(s)" + (rem ? " and " + rem + " remaining term(s), so the sum is the sum of those remaining terms, which is \\(" + ftex(s) + "\\)." : ", so the sum is \\(0\\).");
  let num = 0; for (let k = 1; k <= n; k++) num += Math.cos(k * t0 * Math.PI / 180);
  return makeQ(SEQ_TYPE, null, SEQ_HEAD + "[Level 2] \\(" + expr + "\\)", "\\(" + ftex(s) + "\\)", steps, { kind: "num", value: num, expect: fnum(s) });
}
function seqLogTan(rng) {
  const a = rng.pick([1, 1, 2, 3, 5, 6, 9, 10, 15]), d = rng.pick([1, 1, 1, 2, 3, 4, 5].filter((x) => (90 - 2 * a) % x === 0));
  const angles = []; for (let x = a; x <= 90 - a; x += d) angles.push(x);
  if (angles.length < 5) return null;
  const expr = listShow(angles.map((x) => "\\log_{10}(\\tan " + x + "^{\\circ})"), " + ");
  const steps = "Combine the logarithms: the sum is \\(\\log_{10}(\\tan " + angles[0] + "^{\\circ}\\tan " + angles[1] + "^{\\circ}\\cdots\\tan " + angles[angles.length - 1] + "^{\\circ})\\). " +
    "Since \\(\\tan\\theta\\tan(90^{\\circ} - \\theta) = 1\\), the " + angles.length + " factors pair up to give a product of \\(1\\) (the middle factor, if any, is \\(\\tan 45^{\\circ} = 1\\)). So the sum is \\(\\log_{10}1 = 0\\).";
  const num = angles.reduce((s, x) => s + Math.log10(Math.tan(x * Math.PI / 180)), 0);
  return makeQ(SEQ_TYPE, null, SEQ_HEAD + "[Level 2] \\(" + expr + "\\)", "\\(0\\)", steps, { kind: "num", value: num, expect: 0 });
}
reg("core", "trigonometry", SEQ_TYPE, [
  ["sum of sin² of angles in arithmetic progression", 3, seqSquares("sin")],
  ["sum of cos² of angles in arithmetic progression", 2, seqSquares("cos")],
  ["product of tangents", 2, seqTanProduct],
  ["alternating / plain sum of cosines cos1°+cos2°+…", 2, seqCosPairs],
  ["sum of cosines of multiples of 60°, 90°, 120°, 180°", 2, seqCosMultiples],
  ["sum of log10(tan)", 2, seqLogTan],
]);

/* ---------- Trigonometric Equations ---------- */
const EQ_TYPE = "Trigonometric Equations";
const RAD = Math.PI / 180;
function solveTrigDeg(fn, v, lo, hi, loInc, hiInc) {
  const eps = 1e-7, base = [];
  if (fn === "sin") { if (Math.abs(v) > 1 + 1e-12) return []; const a = Math.asin(Math.max(-1, Math.min(1, v))) / RAD; base.push([a, 360], [180 - a, 360]); }
  else if (fn === "cos") { if (Math.abs(v) > 1 + 1e-12) return []; const a = Math.acos(Math.max(-1, Math.min(1, v))) / RAD; base.push([a, 360], [-a, 360]); }
  else { base.push([Math.atan(v) / RAD, 180]); }
  const out = [];
  for (const [s, p] of base) for (let n = -8; n <= 12; n++) {
    const x = s + p * n;
    if ((loInc ? x >= lo - eps : x > lo + eps) && (hiInc ? x <= hi + eps : x < hi - eps)) out.push(x);
  }
  out.sort((a, b) => a - b);
  const res = []; out.forEach((x) => { if (!res.length || Math.abs(x - res[res.length - 1]) > 1e-6) res.push(x); });
  return res;
}
const f3 = (x) => String(Number(x.toPrecision(3)));
const fnArg = (fn, v) => "\\" + fn + (v === "x" ? " x" : v); // "\\sin x" or "\\sin\\theta"
const fixDeg = (x) => String(Math.round(x * 100) / 100);
function anglesAns(list, v) {
  if (!list.length) return "No solution.";
  const t = list.map((a) => a + "^{\\circ}");
  if (t.length === 1) return "\\(" + v + " = " + t[0] + "\\)";
  if (t.length === 2) return "\\(" + v + " = " + t[0] + "\\) or \\(" + t[1] + "\\)";
  return "\\(" + v + " = " + t.slice(0, -1).join(",") + "\\) or \\(" + t[t.length - 1] + "\\)";
}
const domEq = (v, lo, hi, loInc, hiInc) => deg(lo) + (loInc ? " \\leq " : " < ") + v + (hiInc ? " \\leq " : " < ") + deg(hi);
const VALS = {
  sin: [[30, "\\frac{1}{2}"], [60, "\\frac{\\sqrt{3}}{2}"], [45, "\\frac{\\sqrt{2}}{2}"], [-30, "-\\frac{1}{2}"], [-60, "-\\frac{\\sqrt{3}}{2}"], [-45, "-\\frac{\\sqrt{2}}{2}"], [0, "0"], [90, "1"], [-90, "-1"]],
  cos: [[60, "\\frac{1}{2}"], [30, "\\frac{\\sqrt{3}}{2}"], [45, "\\frac{\\sqrt{2}}{2}"], [120, "-\\frac{1}{2}"], [150, "-\\frac{\\sqrt{3}}{2}"], [135, "-\\frac{\\sqrt{2}}{2}"], [90, "0"], [0, "1"], [180, "-1"]],
  tan: [[45, "1"], [60, "\\sqrt{3}"], [30, "\\frac{1}{\\sqrt{3}}"], [-45, "-1"], [-60, "-\\sqrt{3}"], [-30, "-\\frac{1}{\\sqrt{3}}"], [0, "0"]],
};
const trigNum = (fn, a) => (fn === "sin" ? Math.sin : fn === "cos" ? Math.cos : Math.tan)(a * RAD);

// E1: solve sin/cos/tan(kx + c) = special value
function eqBasic(rng) {
  const fn = rng.pick(["sin", "cos", "tan"]), [p, vtex] = rng.pick(VALS[fn]);
  const k = rng.pick([1, 1, 2, 2, 3]), c = rng.pick([0, 15, -15, 30, -30, 45, -45, 60, -60]);
  const lo = rng.pick([0, 0, 0, 90]), hi = rng.pick([360, 360, 360, 270]);
  const bases = fn === "sin" ? [p, 180 - p] : fn === "cos" ? [p, -p] : [p], per = fn === "tan" ? 180 : 360;
  const ulo = k * lo + c, uhi = k * hi + c, us = [];
  for (const b of bases) for (let n = -20; n <= 20; n++) { const u = b + per * n; if (u >= ulo && u <= uhi) us.push(u); }
  us.sort((a, b) => a - b);
  const uu = us.filter((u, i) => i === 0 || u !== us[i - 1]);
  const xs = uu.map((u) => (u - c) / k);
  if (xs.some((x) => !Number.isInteger(x)) || xs.length < 1 || xs.length > 6) return null;
  const arg = (k === 1 ? "x" : k + "x") + (c === 0 ? "" : (c > 0 ? " + " : " - ") + Math.abs(c) + "^{\\circ}");
  const lhs = k === 1 && c === 0 ? "\\" + fn + " x" : "\\" + fn + "(" + arg + ")";
  const q = "[Level 1] Solve \\(" + lhs + " = " + vtex + "\\) for \\(" + domEq("x", lo, hi, true, true) + "\\).";
  const steps = (k === 1 && c === 0 ? "" : "Let \\(u = " + arg + "\\). For \\(" + domEq("x", lo, hi, true, true) + "\\), \\(" + domEq("u", ulo, uhi, true, true) + "\\). ") +
    "\\(\\" + fn + " u = " + vtex + "\\) gives \\(u = " + uu.map(deg).join(", ") + "\\)" + (k === 1 && c === 0 ? "." : ", so \\(x = " + xs.map(deg).join(", ") + "\\).");
  return makeQ(EQ_TYPE, null, q, anglesAns(xs.map(String), "x"), steps, { kind: "fn", run: (check, qq, H) => {
    const brute = []; for (let x = lo; x <= hi; x++) if (Math.abs(trigNum(fn, k * x + c) - trigNum(fn, p)) < 1e-9 && !(fn === "tan" && Math.abs(Math.cos((k * x + c) * RAD)) < 1e-9)) brute.push(x);
    check(JSON.stringify(brute) === JSON.stringify(xs), "E1 solutions " + xs + " vs brute " + brute, qq);
  } });
}

// E2: how many roots does a quartic in sin/cos have?
const T_CHOICES = [F(1, 4), F(1, 3), F(1, 2), F(2, 3), F(3, 4), F(1), F(1, 5), F(4, 5)];
function eqCount(rng) {
  const fn = rng.pick(["sin", "cos"]), ts = rng.sample(T_CHOICES, 2);
  const [t1, t2] = ts;
  const A = t1.d * t2.d, Bc = -(t1.n * t2.d + t2.n * t1.d), C = t1.n * t2.n; // (d1 t - n1)(d2 t - n2)
  if (A > 30) return null;
  const v = rng.pick(["x", "x", "\\theta"]), f2 = "\\" + fn + "^{2}" + v, f4 = "\\" + fn + "^{4}" + v;
  const lo = rng.pick([0, 0, 90]), hi = 360, hiInc = lo !== 0, loInc = true;
  const lhs = rng.chance(0.5) && C > 0 && Bc < 0 ? terms([[-Bc, f2], [-A, f4]]) + " = " + C : terms([[A, f4], [Bc, f2], [C, ""]]) + " = 0";
  const q = "[Level 1] For \\(" + domEq(v, lo, hi, loInc, hiInc) + "\\), how many roots does the equation \\(" + lhs + "\\) have?";
  const roots = []; let total = 0;
  const parts = ts.map((t) => {
    const s = t.n === 1 && t.d === 1 ? [1, -1] : [Math.sqrt(fnum(t)), -Math.sqrt(fnum(t))];
    let cnt = 0; s.forEach((val) => { cnt += solveTrigDeg(fn, val, lo, hi, loInc, hiInc).length; });
    total += cnt; roots.push(cnt);
    return "\\(" + f2 + " = " + ftex(t) + "\\)" + (feq(t, ONE) ? " gives \\(" + fnArg(fn, v) + " = \\pm 1\\)" : " gives \\(" + fnArg(fn, v) + " = \\pm\\sqrt{" + ftex(t) + "}\\)") + ": " + cnt + " root(s)";
  });
  const fac = "(" + terms([[t1.d, "t"], [-t1.n, ""]]) + ")(" + terms([[t2.d, "t"], [-t2.n, ""]]) + ") = 0";
  const steps = "Let \\(t = " + f2 + "\\). The equation becomes \\(" + terms([[A, "t^{2}"], [Bc, "t"], [C, ""]]) + " = 0\\), i.e. \\(" + fac + "\\), so \\(t = " + ftex(t1) + "\\) or \\(" + ftex(t2) + "\\). " +
    parts.join("; ") + ". Total: \\(" + roots.join(" + ") + " = " + total + "\\) roots.";
  return makeQ(EQ_TYPE, null, q, "\\(" + total + "\\) roots", steps, { kind: "fn", run: (check, qq, H) => {
    let n = 0;
    ts.forEach((t) => {
      const h = (x) => Math.pow(trigNum(fn, x), 2) - fnum(t);
      n += H.scanRoots(h, lo, hi, loInc, hiInc).length;
    });
    check(n === total, "E2 count " + total + " vs scan " + n, qq);
  } });
}

// E3: a sin^2 + b sin cos + c cos^2 = 0  ->  tan quadratic
function eqHomogeneous(rng) {
  const a = rng.nonzero(-6, 6), b = rng.nonzero(-6, 6), c = rng.nonzero(-6, 6), D = b * b - 4 * a * c;
  if (D <= 0) return null;
  const tr = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
  const sols = [];
  tr.forEach((t) => solveTrigDeg("tan", t, 0, 360, true, true).forEach((x) => sols.push(x)));
  sols.sort((x, y) => x - y);
  if (sols.some((x) => x < 1e-6 || x > 360 - 1e-6)) return null;
  const hint = isSquare(D) ? "" : " (Hint: You need to use the quadratic formula first)";
  const q = "[Level 1] Solve \\(" + terms([[a, "\\sin^{2}x"], [b, "\\sin x\\cos x"], [c, "\\cos^{2}x"]]) + " = 0\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\)." + hint + " Give your answers correct to 3 significant figures.";
  const steps = "Since \\(\\cos x = 0\\) is not a root, divide by \\(\\cos^{2}x\\): \\(" + terms([[a, "\\tan^{2}x"], [b, "\\tan x"], [c, ""]]) + " = 0\\). " +
    "By the quadratic formula, \\(\\tan x = \\frac{" + (-b) + " \\pm \\sqrt{" + D + "}}{" + 2 * a + "}\\), i.e. \\(\\tan x = " + f3(tr[0]) + "\\) or \\(" + f3(tr[1]) + "\\). Hence \\(x = " + sols.map((x) => f3(x) + "^{\\circ}").join(", ") + "\\).";
  return makeQ(EQ_TYPE, null, q, anglesAns(sols.map(f3), "x"), steps, { kind: "fn", run: (check, qq, H) => {
    const g = (x) => a * Math.sin(x * RAD) ** 2 + b * Math.sin(x * RAD) * Math.cos(x * RAD) + c * Math.cos(x * RAD) ** 2;
    H.matchRoots(check, qq, g, 0, 360, sols, 0.06);
  } });
}

// E4: a sin x + b cos x = c  (Pythagorean a, b)
const PYTH = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]];
function eqAsinBcos(rng) {
  const [p, q0, R] = rng.pick(PYTH), swap = rng.chance(0.5);
  const a = rng.sign() * (swap ? q0 : p), b = rng.sign() * (swap ? p : q0), c = rng.nonzero(-(R - 1), R - 1);
  const phi = Math.atan2(b, a) / RAD;
  const us = solveTrigDeg("sin", c / R, phi, 360 + phi, true, true).map((u) => u - phi);
  if (us.some((x) => x < 1e-6 || x > 360 - 1e-6) || us.length < 1) return null;
  const q = "[Level 2] Solve \\(" + terms([[a, "\\sin x"], [b, "\\cos x"], [-c, ""]]) + " = 0\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\). Give your answers correct to 3 significant figures.";
  const steps = "Write \\(" + terms([[a, "\\sin x"], [b, "\\cos x"]]) + " = R\\sin(x + \\alpha)\\) with \\(R = \\sqrt{" + a * a + " + " + b * b + "} = " + R + "\\) and \\(\\alpha = " + f3(phi) + "^{\\circ}\\). " +
    "Then \\(\\sin(x " + (phi < 0 ? "- " + f3(-phi) : "+ " + f3(phi)) + "^{\\circ}) = \\frac{" + c + "}{" + R + "}\\), which gives \\(x = " + us.map((x) => f3(x) + "^{\\circ}").join(", ") + "\\).";
  return makeQ(EQ_TYPE, null, q, anglesAns(us.map(f3), "x"), steps, { kind: "fn", run: (check, qq, H) => {
    H.matchRoots(check, qq, (x) => a * Math.sin(x * RAD) + b * Math.cos(x * RAD) - c, 0, 360, us, 0.06);
  } });
}

// E5: sin x = cos 166   (rewrite with the same function)
function eqCompare(rng) {
  const lf = rng.pick(["sin", "cos"]), g = rng.pick(["sin", "cos"]), s = rng.sign(), a = rng.int(100, 350);
  if (a % 90 === 0) return null;
  const v = s * trigNum(g, a);
  if (Math.abs(v) < 1e-6 || Math.abs(v) > 1 - 1e-6) return null;
  const sols = solveTrigDeg(lf, v, 0, 360, true, true).map((x) => Math.round(x));
  if (sols.some((x) => Math.abs(trigNum(lf, x) - v) > 1e-9)) return null;
  let t, b;
  if (lf === "sin") { t = g === "sin" ? a : 90 - a; b = s > 0 ? t : -t; }
  else { t = g === "cos" ? a : 90 - a; b = s > 0 ? t : 180 - t; }
  const rhs = (s < 0 ? "- " : "") + "\\" + g + " " + a + "^{\\circ}";
  const q = "[Level 2] Solve \\(\\" + lf + " x = " + rhs + "\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\).";
  const rewrite = (g === lf ? "" : "\\(\\" + g + " " + a + "^{\\circ} = \\" + lf + "(" + (lf === "sin" ? 90 : 90) + "^{\\circ} - " + a + "^{\\circ}) = \\" + lf + "(" + (90 - a) + "^{\\circ})\\). ") +
    (s < 0 ? "Using \\(" + (lf === "sin" ? "-\\sin\\theta = \\sin(-\\theta)" : "-\\cos\\theta = \\cos(180^{\\circ} - \\theta)") + "\\): " : "") +
    "\\(\\" + lf + " x = \\" + lf + "(" + b + "^{\\circ})\\). ";
  const gen = lf === "sin" ? "\\(x = " + b + "^{\\circ} + 360^{\\circ}n\\) or \\(x = 180^{\\circ} - (" + b + "^{\\circ}) + 360^{\\circ}n\\)" : "\\(x = \\pm(" + b + "^{\\circ}) + 360^{\\circ}n\\)";
  const steps = rewrite + "General solution: " + gen + ". For \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\): \\(x = " + sols.map(deg).join(", ") + "\\).";
  return makeQ(EQ_TYPE, null, q, anglesAns(sols.map(String), "x"), steps, { kind: "fn", run: (check, qq, H) => {
    H.matchRoots(check, qq, (x) => trigNum(lf, x) - v, 0, 360, sols, 0.02);
  } });
}

// E6: sin(theta), cos(theta) are the roots of a x^2 + b x +- m = 0
function eqRootsSinCos(rng) {
  const a = rng.pick([2, 3, 4, 5, 6, 8, 9, 10]), b = rng.nonzero(-Math.floor(1.4 * a), Math.floor(1.4 * a));
  if (b * b >= 2 * a * a) return null;
  const sgn = rng.pick([-1, 1]); // constant term is sgn*m
  const sum = F(-b, a), prod = fdiv(fsub(fsq(sum), ONE), F(2)); // (s+c)^2 = 1 + 2 sc
  const m = fmul(fmul(F(a), prod), F(sgn)); // prod = sgn*m/a
  const q = "[Level 2] If \\(\\sin\\theta\\) and \\(\\cos\\theta\\) are the roots of the quadratic equation \\(" + terms([[a, "x^{2}"], [b, "x"], [sgn, "m"]]) + " = 0\\), find the value of \\(m\\).";
  const steps = "\\(\\sin\\theta + \\cos\\theta = " + ftex(sum) + "\\) and \\(\\sin\\theta\\cos\\theta = " + ftex(fdiv(F(sgn, 1), F(a))) + "m\\). " +
    "Since \\((\\sin\\theta + \\cos\\theta)^{2} = 1 + 2\\sin\\theta\\cos\\theta\\), \\(" + ftex(fsq(sum)) + " = 1 + 2\\left(" + ftex(fdiv(F(sgn), F(a))) + "m\\right)\\), so \\(m = " + ftex(m) + "\\).";
  return makeQ(EQ_TYPE, null, q, "\\(m = " + ftex(m) + "\\)", steps, { kind: "fn", run: (check, qq) => {
    const mm = fnum(m), c0 = sgn * mm, D = b * b - 4 * a * c0;
    check(D >= -1e-9, "E6 discriminant", qq);
    const r1 = (-b + Math.sqrt(Math.max(D, 0))) / (2 * a), r2 = (-b - Math.sqrt(Math.max(D, 0))) / (2 * a);
    check(Math.abs(r1 * r1 + r2 * r2 - 1) < 1e-9, "E6 roots not sin/cos pair", qq);
  } });
}

// E7: factor theorem, then solve a cubic in sin / cos
const ROOT_VALID = [F(-1), F(-1, 2), ZERO, F(1, 2), F(1)], ROOT_INVALID = [F(-3), F(-2), F(2), F(3), F(-3, 2), F(3, 2)];
function substPoly(co, rt) { // co[i] coefficient of x^i
  const out = [];
  for (let i = co.length - 1; i >= 0; i--) {
    if (co[i].n === 0) continue;
    const pw = i === 0 ? "" : "\\left(" + rt + "\\right)" + (i > 1 ? "^{" + i + "}" : "");
    const c = co[i], neg = c.n < 0, a = fabs(c);
    const body = i === 0 ? ftex(a) : (feq(a, ONE) ? "" : ftex(a)) + pw;
    out.push((out.length ? (neg ? " - " : " + ") : (neg ? "-" : "")) + body);
  }
  return out.join("");
}
function eqFactor(rng) {
  const nV = rng.int(1, 2);
  const roots = rng.shuffle(rng.sample(ROOT_VALID, nV).concat(rng.sample(ROOT_INVALID, 3 - nV)));
  const nz = roots.filter((r) => r.n !== 0), r1 = rng.pick(nz);
  let poly = [ONE];
  roots.forEach((r) => { poly = P.mul(poly, [fneg(F(r.n)), F(r.d)]); }); // (d x - n)
  const co = poly; // ints
  const fn = rng.pick(["sin", "sin", "cos"]), other = fn === "sin" ? "cos" : "sin";
  const convert = rng.chance(0.4) && co[2].n !== 0;
  const dom = rng.pick([[0, 360, true, true], [0, 270, false, false], [90, 360, true, true], [0, 360, true, true]]);
  const [lo, hi, loInc, hiInc] = dom, v = convert ? "\\theta" : "x";
  const polyStr = terms([[co[3], "x^{3}"], [co[2], "x^{2"+"}"], [co[1], "x"], [co[0], ""]]);
  const fac = terms([[r1.d, "x"], [-r1.n, ""]]);
  const s1 = fnArg(fn, v), s2 = "\\" + fn + "^{2}" + v, s3 = "\\" + fn + "^{3}" + v, o2 = "\\" + other + "^{2}" + v;
  const eq = convert ? terms([[co[3], s3], [fadd(co[2], co[0]), ""]]) + " = " + terms([[co[2], o2], [fneg(co[1]), s1]]) : terms([[co[3], s3], [co[2], s2], [co[1], s1], [co[0], ""]]) + " = 0";
  const sols = []; const used = [];
  roots.forEach((r) => { if (Math.abs(fnum(r)) <= 1) { solveTrigDeg(fn, fnum(r), lo, hi, loInc, hiInc).forEach((x) => sols.push(Math.round(x))); used.push(r); } });
  sols.sort((a, b) => a - b);
  if (!sols.length) return null;
  const uniq = sols.filter((x, i) => i === 0 || x !== sols[i - 1]);
  const q = "[Level 2]\n(a) Prove that \\(" + fac + "\\) is a factor of \\(" + polyStr + "\\).\n(b) Hence, solve \\(" + eq + "\\) for \\(" + domEq(v, lo, hi, loInc, hiInc) + "\\).";
  const factored = roots.map((r) => "(" + terms([[r.d, "x"], [-r.n, ""]]) + ")").join("");
  const stepsB = (convert ? "Using \\(" + o2 + " = 1 - " + s2 + "\\), the equation becomes \\(" + terms([[co[3], s3], [co[2], s2], [co[1], s1], [co[0], ""]]) + " = 0\\). " : "") +
    "By (a), \\(" + polyStr + " = " + factored + "\\). So \\(" + s1 + " = " + roots.map(ftex).join("\\) or \\(") + "\\); the values outside \\([-1, 1]\\) are rejected. " +
    "Hence \\(" + v + " = " + uniq.map(deg).join(", ") + "\\).";
  const steps = "(a) Let \\(f(x) = " + polyStr + "\\). \\(f\\left(" + ftex(r1) + "\\right) = " + substPoly(co, ftex(r1)) + " = 0\\), so \\(" + fac + "\\) is a factor.\n(b) " + stepsB;
  const answer = "(a) \\(" + fac + "\\) is a factor.\n(b) " + anglesAns(uniq.map(String), v);
  return makeQ(EQ_TYPE, null, q, answer, steps, { kind: "fn", run: (check, qq, H) => {
    check(P.evalAt(co, r1).n === 0, "E7 factor", qq);
    const g = (x) => { const s = trigNum(fn, x), t = s; return fnum(co[3]) * t ** 3 + fnum(co[2]) * t ** 2 + fnum(co[1]) * t + fnum(co[0]); };
    H.matchRoots(check, qq, g, lo, hi, uniq, 0.02, loInc, hiInc);
  } });
}

// E8: g(x) = 0 and a claim about g(sin 2θ) = 0
const NAMES = ["Jason", "Amy", "Peter", "Mary", "Kelvin", "Sally", "Tom", "Ivy", "Ken", "Nora"];
const ROOTSQ = { "3/4": ["\\frac{\\sqrt{3}}{2}", Math.sqrt(3) / 2], "1/4": ["\\frac{1}{2}", 0.5], "1/2": ["\\frac{\\sqrt{2}}{2}", Math.SQRT1_2] };
function eqClaim(rng) {
  const [p, qq0] = rng.pick([[1, 1], [1, -1], [2, 1], [2, -1], [1, 0]]), [m, n] = rng.pick([[4, 3], [4, 1], [2, 1]]);
  const r1 = -qq0 / p, key = n + "/" + m, [rtex, rv] = ROOTSQ[key];
  if (Math.abs(Math.abs(r1) - rv) < 1e-9) return null;
  const poly = P.mul([F(qq0), F(p)], [F(-n), ZERO, F(m)]);
  const gtex = terms([[poly[3], "x^{3}"], [poly[2], "x^{2}"], [poly[1], "x"], [poly[0], ""]]);
  const rootsAll = [{ v: r1, t: ftex(F(Math.round(r1 * 2), 2)) }, { v: -rv, t: "-" + rtex }, { v: rv, t: rtex }].sort((a, b) => a.v - b.v);
  const thetas = [];
  rootsAll.forEach((r) => solveTrigDeg("sin", r.v, 0, 360, true, true).forEach((u) => thetas.push(u / 2)));
  thetas.sort((a, b) => a - b);
  const N = thetas.length;
  const claim = rng.chance(0.5) ? N : Math.max(1, N + rng.pick([-1, 1]));
  const agree = claim === N, name = rng.pick(NAMES);
  const q = "[Level 3] Let \\(g(x) = " + gtex + "\\).\n(a) Solve the equation \\(g(x) = 0\\).\n(b) " + name + " claims that the equation \\(g(\\sin 2\\theta) = 0\\) has \\(" + claim + "\\) roots, where \\(0^{\\circ} \\leq \\theta \\leq 180^{\\circ}\\). Do you agree? Explain your answer.";
  const ans = "(a) \\(x = " + rootsAll.map((r) => r.t).join("\\) or \\(") + "\\)\n(b) " + (agree ? "Agree. " : "Disagree. ") +
    "\\(\\theta = " + thetas.map((x) => fixDeg(x) + "^{\\circ}").join(",") + "\\), so there are \\(" + N + "\\) roots.";
  const steps = "(a) \\(g(x) = (" + terms([[p, "x"], [qq0, ""]]) + ")(" + terms([[m, "x^{2}"], [-n, ""]]) + ")\\), so \\(x = " + rootsAll.map((r) => r.t).join("\\) or \\(") + "\\).\n" +
    "(b) \\(g(\\sin 2\\theta) = 0\\) means \\(\\sin 2\\theta = " + rootsAll.map((r) => r.t).join("\\), \\(") + "\\) with \\(0^{\\circ} \\leq 2\\theta \\leq 360^{\\circ}\\). " +
    rootsAll.map((r) => { const us = solveTrigDeg("sin", r.v, 0, 360, true, true); return "\\(\\sin 2\\theta = " + r.t + "\\): " + us.length + " root(s)"; }).join("; ") +
    ". So \\(\\theta = " + thetas.map((x) => fixDeg(x) + "^{\\circ}").join(", ") + "\\), i.e. " + N + " roots.";
  return makeQ(EQ_TYPE, null, q, ans, steps, { kind: "fn", run: (check, qq, H) => {
    const gg = (x) => fnum(poly[3]) * x ** 3 + fnum(poly[2]) * x ** 2 + fnum(poly[1]) * x + fnum(poly[0]);
    const found = H.scanRoots((th) => gg(Math.sin(2 * th * RAD)), 0, 180, true, true);
    check(found.length === N, "E8 count " + N + " vs scan " + found.length, qq);
  } });
}

// E9: (p cos x - q)(r cos x + s sin x) = 0 written out and rearranged
function eqProduct(rng) {
  const [p, q0] = rng.pick([[2, 1], [2, -1]]), r = rng.int(1, 3), s = rng.int(1, 4);
  const exact = solveTrigDeg("cos", q0 / p, 0, 360, true, true).map((x) => Math.round(x));
  const tn = solveTrigDeg("tan", -r / s, 0, 360, true, true);
  const sols = exact.concat(tn).sort((a, b) => a - b);
  const q = "[Level 2] Solve \\(" + terms([[p * r, "\\cos^{2}x"], [-q0 * r, "\\cos x"]]) + " = " + terms([[q0 * s, "\\sin x"], [-p * s, "\\sin x\\cos x"]]) + "\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\). (Hint: You need to factorize the expression first) Give your answers correct to 3 significant figures where necessary.";
  const steps = "\\(" + terms([[p * r, "\\cos^{2}x"], [-q0 * r, "\\cos x"]]) + " - (" + terms([[q0 * s, "\\sin x"], [-p * s, "\\sin x\\cos x"]]) + ") = 0\\), so \\((" + terms([[p, "\\cos x"], [-q0, ""]]) + ")(" + terms([[r, "\\cos x"], [s, "\\sin x"]]) + ") = 0\\). " +
    "Hence \\(\\cos x = " + ftex(F(q0, p)) + "\\) giving \\(x = " + exact.map(deg).join(", ") + "\\), or \\(\\tan x = " + ftex(F(-r, s)) + "\\) giving \\(x = " + tn.map((x) => f3(x) + "^{\\circ}").join(", ") + "\\).";
  return makeQ(EQ_TYPE, null, q, anglesAns(sols.map(f3), "x"), steps, { kind: "fn", run: (check, qq, H) => {
    const g = (x) => { const c = Math.cos(x * RAD), sn = Math.sin(x * RAD); return p * r * c * c - q0 * r * c - (q0 * s * sn - p * s * sn * c); };
    H.matchRoots(check, qq, g, 0, 360, sols, 0.06);
  } });
}
reg("core", "trigonometry", EQ_TYPE, [
  ["solve sin/cos/tan(kx + c) = special value", 4, eqBasic],
  ["how many roots? (quartic in sin or cos)", 2, eqCount],
  ["homogeneous a sin² + b sin cos + c cos² = 0", 2, eqHomogeneous],
  ["a sin x + b cos x = c", 3, eqAsinBcos],
  ["sin x = cos a (rewrite with the same function)", 2, eqCompare],
  ["sinθ and cosθ are the roots of a quadratic equation", 2, eqRootsSinCos],
  ["factor theorem and 'hence solve' a cubic in sin/cos", 3, eqFactor],
  ["solve g(x)=0 and judge a claim about g(sin 2θ)=0", 2, eqClaim],
  ["factorise a mixed sin/cos equation", 2, eqProduct],
]);

/* ===================== CORE · QUADRATIC EQUATION ===================== */
const jn = (arr, sep) => arr.join(sep === undefined ? "\n" : sep);
const polyIn = (v, a, b, c) => terms([[a, v + "^{2}"], [b, v], [c, ""]]);
const rootsAnsLine = (v, rs) => {
  rs = rs.slice().sort((x, y) => fcmp(x, y));
  if (rs.length === 2 && feq(rs[0], rs[1])) rs = [rs[0]];
  return rs.map((r) => M(v + " = " + ftex(r))).join(" or ");
};
const randFrac = (rng, dens, lim) => F(rng.nonzero(-lim, lim), rng.pick(dens));
const letterCoef = (a, v) => (a === 1 ? v : a === -1 ? "-" + v : a + v);

/* ---------- Solving Quadratic Equations ---------- */
const SQE = "Solving Quadratic Equations";
function qeParts(rng) {
  const out = [];
  const nice = (L, k) => { // search roots so that L(r1+r2) and k-dependent integrality hold
    for (let t = 0; t < 80; t++) {
      const r1 = randFrac(rng, [1, 1, 2, 3, 4, 5], 8), r2 = randFrac(rng, [1, 1, 2, 3, 4, 5], 8);
      if (feq(r1, r2)) continue;
      const b = fmul(F(-L), fadd(r1, r2)), d = fmul(F(-L), fmul(r1, r2));
      if (b.d === 1 && d.d === 1 && b.n !== 0 && d.n !== 0) return { r1, r2, b: b.n, d: d.n };
    }
    return null;
  };
  const kinds = rng.shuffle(["p1", "p1", "p2", "p2", "p3", "p3"]).slice(0, rng.int(3, 4));
  for (const kd of kinds) {
    if (kd === "p1") { // x(ax+b) = cx^2 + d
      const a = rng.int(1, 9), c = rng.int(1, 9); if (a === c) return null;
      const L = a - c, s = nice(L); if (!s) return null;
      out.push({ eq: "x(" + terms([[a, "x"], [s.b, ""]]) + ") = " + terms([[c, "x^{2}"], [s.d, ""]]), roots: [s.r1, s.r2], g: (x) => x * (a * x + s.b) - (c * x * x + s.d),
        how: "Rearrange: \\(" + polyIn("x", L, s.b, -s.d) + " = 0\\), then factorize (or use the quadratic formula)." });
    } else if (kd === "p2") { // (ax+b)^2 = (cx+d)^2
      const a = rng.int(1, 5), c = rng.int(1, 5), b = rng.nonzero(-6, 6), d = rng.chance(0.6) ? 0 : rng.nonzero(-6, 6);
      if (a === c || a * d === b * c) return null;
      const r1 = F(d - b, a - c), r2 = F(-(b + d), a + c);
      out.push({ eq: "(" + terms([[a, "x"], [b, ""]]) + ")^{2} = " + (d === 0 ? c * c + "x^{2}" : "(" + terms([[c, "x"], [d, ""]]) + ")^{2}"),
        roots: [r1, r2], g: (x) => (a * x + b) ** 2 - (c * x + d) ** 2,
        how: "Difference of two squares: \\(" + terms([[a, "x"], [b, ""]]) + " = \\pm(" + terms([[c, "x"], [d, ""]]) + ")\\)." });
    } else { // x(ax+b) = -k(x^2 - m)
      const k = rng.int(1, 5), L = rng.int(k + 1, k + 8), a = L - k, s = (() => {
        for (let t = 0; t < 80; t++) {
          const r1 = randFrac(rng, [1, 1, 2, 3, 5], 8), r2 = randFrac(rng, [1, 1, 2, 3, 5], 8);
          if (feq(r1, r2)) continue;
          const b = fmul(F(-L), fadd(r1, r2)), m = fdiv(fmul(F(-L), fmul(r1, r2)), F(k));
          if (b.d === 1 && m.d === 1 && b.n !== 0 && m.n !== 0) return { r1, r2, b: b.n, m: m.n };
        }
        return null;
      })();
      if (!s) return null;
      out.push({ eq: "x(" + terms([[a, "x"], [s.b, ""]]) + ") = -" + k + "(" + terms([[1, "x^{2}"], [-s.m, ""]]) + ")", roots: [s.r1, s.r2],
        g: (x) => x * (a * x + s.b) + k * (x * x - s.m), how: "Expand and collect: \\(" + polyIn("x", L, s.b, -k * s.m) + " = 0\\), then factorize." });
    }
  }
  return out;
}
function qeBest(rng) {
  const parts = qeParts(rng); if (!parts) return null;
  const chal = rng.chance(0.35); let ch = null;
  if (chal) {
    const A = pickLetter(rng, "x"), p = rng.nonzero(-5, 5), q = rng.nonzero(-5, 5);
    if (p + q === 0) return null;
    ch = { eq: "(" + terms([[1, "x"], [-p, ""]]) + ")(" + terms([[1, "x"], [-q, ""]]) + ") = (" + terms([[1, A], [-p, ""]]) + ")(" + terms([[1, A], [-q, ""]]) + ")", A, p, q };
  }
  const lines = parts.map((p, i) => partLabel(i) + " \\(" + p.eq + "\\)");
  if (ch) lines.push(partLabel(parts.length) + " [Challenging] \\(" + ch.eq + "\\)");
  const ans = parts.map((p, i) => partLabel(i) + " " + rootsAnsLine("x", p.roots));
  if (ch) ans.push(partLabel(parts.length) + " \\(x = " + ch.A + "\\) or \\(x = " + terms([[-1, ch.A], [ch.p + ch.q, ""]]) + "\\)");
  const steps = parts.map((p, i) => partLabel(i) + " " + p.how + " Roots: " + rootsAnsLine("x", p.roots) + ".");
  if (ch) { const sp = ch.p + ch.q; steps.push(partLabel(parts.length) + " Clearly \\(x = " + ch.A + "\\) is a root. Expanding, \\(" + terms([[1, "x^{2}"], [-sp, "x"]]) + " = " + terms([[1, ch.A + "^{2}"], [-sp, ch.A]]) + "\\), so \\((x - " + ch.A + ")(" + terms([[1, "x"], [1, ch.A], [-sp, ""]]) + ") = 0\\), giving \\(x = " + terms([[-1, ch.A], [sp, ""]]) + "\\)."); }
  const q = "Solve the following quadratic equations with the best method. Circle the method you use.\n" + lines.join("\n");
  return makeQ(SQE, null, q, ans.join("\n"), steps.join("\n"), { kind: "fn", run: (check, qq) => {
    parts.forEach((p, i) => { p.roots.forEach((r) => check(Math.abs(p.g(fnum(r))) < 1e-9, "SQE root fails part " + i, qq)); check(!feq(p.roots[0], p.roots[1]), "SQE roots equal", qq); });
  } });
}
function qeAlpha(rng) { // alpha is a root of ax^2+bx+c=0; k a alpha^2 + k b alpha + r = ?
  const a = rng.pick([1, 2, 3]), r1 = rng.nonzero(-6, 6), r2 = rng.nonzero(-6, 6), b = -a * (r1 + r2), c = a * r1 * r2;
  const k = rng.pick([2, 3, 4, 5, -2, -3]), V = rng.nonzero(-6, 6), r = V + k * c;
  const al = pickLetter(rng) && "\\alpha";
  const expr = terms([[k * a, al + "^{2}"], [k * b, al], [r, ""]]);
  const opt = mcBlock(rng, String(V), [String(k * c + r), String(-V), String(r), String(V + k), String(V - 1), String(V + 1)]);
  if (!opt) return null;
  const q = "If \\(\\alpha\\) is a root of \\(" + polyIn("x", a, b, c) + " = 0\\), then \\(" + expr + " =\\)\n" + opt.block;
  const steps = "Since \\(\\alpha\\) is a root, \\(" + polyIn("\\alpha", a, b, c) + " = 0\\), so \\(" + terms([[a, "\\alpha^{2}"], [b, "\\alpha"]]) + " = " + (-c) + "\\). " +
    "Hence \\(" + expr + " = " + k + "(" + terms([[a, "\\alpha^{2}"], [b, "\\alpha"]]) + ")" + (r === 0 ? "" : " " + sgnStr(r) + " " + Math.abs(r)) + " = " + k + "(" + (-c) + ")" + (r === 0 ? "" : " " + sgnStr(r) + " " + Math.abs(r)) + " = " + V + "\\) (" + opt.letter + ").";
  return makeQ(SQE, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => {
    [r1, r2].forEach((x) => check(k * a * x * x + k * b * x + r === V, "SQE alpha value", qq));
  } });
}
function qeOtherRoot(rng) { // x^2 - kx - m k^2 = 0, one root given, k > 0
  const t1 = rng.pick([-1, -2, -3]), t2 = 1 - t1, m = -t1 * t2, k = rng.int(1, 4), swap = rng.chance(0.4);
  const given = swap ? k * t2 : k * t1, other = swap ? k * t1 : k * t2, kk = pickLetter(rng) === "k" ? "k" : "k";
  const opts = mcBlock(rng, String(other), [String(-other), String(other + 2), String(other - 2), String(given * -1), String(other + k)]);
  if (!opts) return null;
  const q = "It is given that \\(" + given + "\\) is a root of the equation \\(x^{2} - kx - " + m + "k^{2} = 0\\), where \\(k > 0\\). Find the other root of the equation \\(x^{2} - kx - " + m + "k^{2} = 0\\).\n" + opts.block;
  const steps = "Substitute \\(x = " + given + "\\): \\(" + given * given + " - " + par(given) + "k - " + m + "k^{2} = 0\\), i.e. \\(" + m + "k^{2} + " + par(given) + "k - " + given * given + " = 0\\). Since \\(k > 0\\), \\(k = " + k + "\\). " +
    "The sum of the roots is \\(k = " + k + "\\), so the other root is \\(" + k + " - " + par(given) + " = " + other + "\\) (" + opts.letter + ").";
  return makeQ(SQE, null, q, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    check(given * given - k * given - m * k * k === 0 && other * other - k * other - m * k * k === 0 && given + other === k, "SQE other root", qq);
  } });
}
function qeSharedFactor(rng) { // (x-p)(x-q) = (s-x)(x-q)
  const v = rng.pick(["c", "k", "m", "a"]);
  const a1 = rng.nonzero(-3, 4), j = rng.nonzero(-3, 3), a3 = a1 + 2 * j, a2 = rng.nonzero(-5, 6), mid = a1 + j;
  if (a3 === 0 || mid === 0 || a2 === mid) return null;
  const ct = (n) => (n === 1 ? v : n === -1 ? "-" + v : n + v);
  const fac = (n) => "(" + terms([[1, "x"], [-n, v]]) + ")";
  const ans = [mid, a2].sort((x, y) => x - y).map((n) => "x = " + ct(n)).join(" \\text{ or } ");
  const opts = mcBlock(rng, ans, ["x = " + ct(mid), "x = " + ct(a3), [a1, a3].sort((x, y) => x - y).map((n) => "x = " + ct(n)).join(" \\text{ or } "), "x = " + ct(a2)]);
  if (!opts) return null;
  const q = "Let \\(" + v + "\\) be a constant. Solve the equation \\(" + fac(a1) + fac(a2) + " = (" + terms([[a3, v], [-1, "x"]]) + ")" + fac(a2) + "\\).\n" + opts.block;
  const steps = "Move everything to one side and take out the common factor \\(" + fac(a2) + "\\): \\(" + fac(a2) + "[(" + terms([[1, "x"], [-a1, v]]) + ") - (" + terms([[a3, v], [-1, "x"]]) + ")] = 0\\), i.e. \\(" + fac(a2) + "(" + terms([[2, "x"], [-(a1 + a3), v]]) + ") = 0\\). So \\(" + ans + "\\) (" + opts.letter + ").";
  return makeQ(SQE, null, q, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    for (const cv of [2, 3, -1.5]) { const g = (x) => (x - a1 * cv) * (x - a2 * cv) - (a3 * cv - x) * (x - a2 * cv); check(Math.abs(g(mid * cv)) < 1e-9 && Math.abs(g(a2 * cv)) < 1e-9, "SQE shared factor roots", qq); }
  } });
}
function qeSymbolic(rng) { // (x-p)(x-q) = (a-p)(a-q)
  const A = pickLetter(rng, "x"), p = rng.nonzero(-5, 5), q = rng.nonzero(-5, 5);
  if (p === q || p + q === 0) return null;
  const right = terms([[1, A], [p + q, ""]]);
  const second = terms([[-1, A], [p + q, ""]]);
  const lhs = "(" + terms([[1, "x"], [-p, ""]]) + ")(" + terms([[1, "x"], [-q, ""]]) + ")", rhs = "(" + terms([[1, A], [-p, ""]]) + ")(" + terms([[1, A], [-q, ""]]) + ")";
  const correct = "x = " + A + " \\text{ or } x = " + second;
  const opts = mcBlock(rng, correct, ["x = " + p + " \\text{ or } x = " + q, "x = " + A, "x = " + A + " \\text{ or } x = " + terms([[-1, A]]), "x = " + A + " \\text{ or } x = " + terms([[1, A], [p + q, ""]])]);
  if (!opts) return null;
  const q0 = "Solve the equation \\(" + lhs + " = " + rhs + "\\).\n" + opts.block;
  const sp2 = p + q, steps = "\\(x = " + A + "\\) is clearly a root. Expanding: \\(" + terms([[1, "x^{2}"], [-sp2, "x"], [p * q, ""]]) + " = " + terms([[1, A + "^{2}"], [-sp2, A], [p * q, ""]]) + "\\), so \\(" + terms([[1, "x^{2}"], [-1, A + "^{2}"]]) + " - " + par(sp2) + "(x - " + A + ") = 0\\), i.e. \\((x - " + A + ")(" + terms([[1, "x"], [1, A], [-sp2, ""]]) + ") = 0\\). Hence \\(" + correct + "\\) (" + opts.letter + ").";
  return makeQ(SQE, null, q0, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    const av = 3.7, g = (x) => (x - p) * (x - q) - (av - p) * (av - q);
    check(Math.abs(g(av)) < 1e-9 && Math.abs(g(p + q - av)) < 1e-9, "SQE symbolic roots", qq);
  } });
}
reg("core", "quadratic_equation", SQE, [
  ["solve several equations with the best method", 4, qeBest],
  ["MC: value of an expression when α is a root", 2, qeAlpha],
  ["MC: other root when one root is given", 2, qeOtherRoot],
  ["MC: equation with a common factor and a constant", 2, qeSharedFactor],
  ["MC: (x-p)(x-q) = (a-p)(a-q)", 2, qeSymbolic],
]);

/* ---------- Completing Square ---------- */
const CST = "Completing Square";
function csPart(rng, kind) {
  const v = rng.pick(["x", "x", "x", "a", "b", "u", "p", "t"]);
  let a, b, c, expr, extraStar = "";
  if (kind === "monic") { a = 1; b = rng.pick([rng.nonzero(-12, 12), rng.nonzero(-9, 9) * 1, rng.nonzero(-9, 9)]); c = rng.int(-12, 12); }
  else if (kind === "int") { a = rng.pick([-1, -2, -3, 2, 3, 4]); b = rng.nonzero(-18, 18); c = rng.int(-30, 30); }
  else if (kind === "frac") { a = rng.pick([F(1, 2), F(-1, 2), F(1, 3), F(-1, 3), F(1, 4)]); b = rng.nonzero(-10, 10); c = rng.int(-20, 20); }
  else { // parameter k
    const aa = rng.pick([-3, -2, -1, 2, 3]), mm = rng.nonzero(-3, 3), cc = rng.nonzero(-9, 9), dd = rng.nonzero(-5, 5);
    const k = "k";
    expr = terms([[aa, v + "^{2}"], [2 * aa * mm, k + v], [cc, k + "^{2}"], [dd, ""]]);
    const Kc = cc - aa * mm * mm;
    const form = (feq(F(aa), ONE) ? "" : feq(F(aa), F(-1)) ? "-" : aa) + "(" + v + " " + (mm < 0 ? "-" : "+") + " " + (Math.abs(mm) === 1 ? "" : Math.abs(mm)) + k + ")^{2} " + terms([[Kc, k + "^{2}"], [dd, ""]]).replace(/^-/, "- ").replace(/^(?!- )/, "+ ");
    return { text: "y = " + expr + "\\), where \\(k\\) is a constant.", ans: "y = " + form, steps: "\\(y = " + coefStr(aa) + "(" + terms([[1, v + "^{2}"], [2 * mm, "k" + v]]) + ")" + joinSigned(terms([[cc, "k^{2}"], [dd, ""]])) + " = " + form + "\\)", star: true,
      chk: (kv, xv) => { const orig = aa * xv * xv + 2 * aa * mm * kv * xv + cc * kv * kv + dd; const res = aa * (xv + mm * kv) ** 2 + Kc * kv * kv + dd; return Math.abs(orig - res) < 1e-9; } };
  }
  const A = toF(a), B = F(b), C = F(c);
  const h = fdiv(fneg(B), fmul(F(2), A)), K = fsub(C, fmul(A, fsq(h)));
  expr = terms([[A, v + "^{2}"], [B, v], [C, ""]]);
  const coef = feq(A, ONE) ? "" : feq(A, F(-1)) ? "-" : (A.d === 1 ? String(A.n) : ftex(A));
  const inner = h.n === 0 ? v : "(" + v + (h.n < 0 ? " + " : " - ") + fdec(fabs(h)) + ")";
  const form = coef + inner + "^{2}" + (h.n === 0 ? "" : "") + (K.n === 0 ? "" : (K.n < 0 ? " - " : " + ") + fdec(fabs(K)));
  const sg = (f) => (f.n === 0 ? "" : (f.n < 0 ? " - " : " + ") + ftex(fabs(f)));
  const bA = fdiv(B, A), Ah2 = fmul(A, fsq(h));
  const hTxt = h.n === 0 ? "" : (h.n < 0 ? " + " : " - ") + ftex(fabs(h));
  const step = feq(A, ONE) ? "y = " + expr + " = (" + v + (h.n < 0 ? " + " : " - ") + ftex(fabs(h)) + ")^{2} - (" + ftex(h) + ")^{2}" + sg(C) + " = " + form
    : "y = " + coef + "\\left[" + v + "^{2}" + (bA.n < 0 ? " - " : " + ") + (feq(fabs(bA), ONE) ? "" : ftex(fabs(bA))) + v + "\\right]" + sg(C) + " = " + coef + "(" + v + hTxt + ")^{2}" + sg(fneg(Ah2)) + sg(C) + " = " + form;
  return { text: "y = " + expr, ans: "y = " + form, steps: "\\(" + step + "\\)", chk: (xv) => Math.abs((fnum(A) * xv * xv + b * xv + c) - (fnum(A) * (xv - fnum(h)) ** 2 + fnum(K))) < 1e-9 };
}
function csGen(kinds) {
  return (rng) => {
    const parts = kinds(rng).map((k) => csPart(rng, k));
    let lab = 0;
    const lines = parts.map((p) => (p.star ? "* " : "") + partLabel(lab++) + " \\(" + p.text + (p.text.includes("\\)") ? "" : "\\)"));
    lab = 0;
    const ans = parts.map((p) => partLabel(lab++) + " \\(" + p.ans + "\\)");
    lab = 0;
    const steps = parts.map((p) => partLabel(lab++) + " " + p.steps);
    return makeQ(CST, null, "Complete squares for the following expressions.\n" + lines.join("\n"), ans.join("\n"), steps.join("\n"), { kind: "fn", run: (check, qq) => {
      parts.forEach((p) => [0, 1, -2.5, 3.3].forEach((xv) => check(p.star ? p.chk(1.7, xv) : p.chk(xv), "CS identity", qq)));
    } });
  };
}
reg("core", "quadratic_equation", CST, [
  ["monic expressions x² + bx + c", 3, csGen((rng) => ["monic", "monic", "monic", "monic", "monic", "monic"].slice(0, rng.int(4, 6)))],
  ["leading coefficient other than 1 (and one with a constant k)", 3, csGen((rng) => ["int", "int", "frac", "int", "frac", "param"].slice(0, rng.int(4, 6)).concat(["param"]).slice(0, 6))],
]);

/* ---------- Use of Discriminant ---------- */
const DIS = "Use of Discriminant";
function joinSigned(s) { return s[0] === "-" ? " - " + s.slice(1) : " + " + s; }
function discBuild(rng, kind) {
  // returns {eqTex, deltaTex, conclusion, chk}
  if (kind === "real") {
    const m1 = rng.pick([1, 2, 3]), m2 = rng.pick([1, 2, 3]), al1 = rng.int(-3, 3), al2 = rng.int(-3, 3), be1 = rng.int(-4, 4), be2 = rng.int(-4, 4);
    const u = m1 * al2 - m2 * al1, w = m1 * be2 - m2 * be1;
    if (u === 0) return null;
    const a = m1 * m2, b1 = -(m1 * al2 + m2 * al1), b0 = -(m1 * be2 + m2 * be1), c2 = al1 * al2, c1 = al1 * be2 + al2 * be1, c0 = be1 * be2;
    if (b1 === 0 && b0 === 0) return null;
    const eq = terms([[a, "x^{2}"]]) + " + (" + terms([[b1, "k"], [b0, ""]]) + ")x" + joinSigned(terms([[c2, "k^{2}"], [c1, "k"], [c0, ""]])) + " = 0";
    const d = "\\Delta = (" + terms([[b1, "k"], [b0, ""]]) + ")^{2} - 4(" + a + ")(" + terms([[c2, "k^{2}"], [c1, "k"], [c0, ""]]) + ") = (" + terms([[u, "k"], [w, ""]]) + ")^{2} \\geq 0";
    return { eq, d, word: "real roots", concl: "so the equation has real roots for any real values of \\(k\\).", chk: (k) => { const D = (b1 * k + b0) ** 2 - 4 * a * (c2 * k * k + c1 * k + c0); return Math.abs(D - (u * k + w) ** 2) < 1e-6; } };
  }
  for (let t = 0; t < 400; t++) {
    const p = rng.int(-4, 4), q = rng.int(-8, 8), A = rng.int(1, 6), u = rng.int(-4, 4), B = rng.int(1, 16);
    if (kind === "none") {
      const r = (p * p + A) / 4, s = (2 * p * q + 2 * A * u) / 4, tt = (q * q + A * u * u + B) / 4;
      if (![r, s, tt].every(Number.isInteger) || (p === 0 && q === 0)) continue;
      const eq = "x^{2} + (" + terms([[p, "k"], [q, ""]]) + ")x" + joinSigned(terms([[r, "k^{2}"], [s, "k"], [tt, ""]])) + " = 0";
      const dd = "\\Delta = (" + terms([[p, "k"], [q, ""]]) + ")^{2} - 4(" + terms([[r, "k^{2}"], [s, "k"], [tt, ""]]) + ") = -" + (A === 1 ? "" : A) + (u === 0 ? "k^{2}" : "(k " + (u < 0 ? "-" : "+") + " " + Math.abs(u) + ")^{2}")+" - " + B + " \\leq -" + B + " < 0";
      return { eq, d: dd, word: "no real roots", concl: "so the equation has no real roots for any real values of \\(k\\).", chk: (k) => { const D = (p * k + q) ** 2 - 4 * (r * k * k + s * k + tt); return Math.abs(D - (-A * (k + u) ** 2 - B)) < 1e-6; } };
    } else {
      const r = (p * p - A) / 4, s = (2 * p * q - 2 * A * u) / 4, tt = (q * q - A * u * u - B) / 4;
      if (![r, s, tt].every(Number.isInteger) || (p === 0 && q === 0)) continue;
      const eq = "x^{2} + (" + terms([[p, "k"], [q, ""]]) + ")x" + joinSigned(terms([[r, "k^{2}"], [s, "k"], [tt, ""]])) + " = 0";
      const dd = "\\Delta = (" + terms([[p, "k"], [q, ""]]) + ")^{2} - 4(" + terms([[r, "k^{2}"], [s, "k"], [tt, ""]]) + ") = " + (A === 1 ? "" : A) + (u === 0 ? "k^{2}" : "(k " + (u < 0 ? "-" : "+") + " " + Math.abs(u) + ")^{2}")+" + " + B + " \\geq " + B + " > 0";
      return { eq, d: dd, word: "two distinct real roots", concl: "so the equation has two distinct real roots for any real values of \\(k\\).", chk: (k) => { const D = (p * k + q) ** 2 - 4 * (r * k * k + s * k + tt); return Math.abs(D - (A * (k + u) ** 2 + B)) < 1e-6; } };
    }
  }
  return null;
}
function discProof(kind) {
  return (rng) => {
    const o = discBuild(rng, kind); if (!o) return null;
    const q = "[Level 1]\nFor the equation \\(" + o.eq + "\\), prove that it has " + o.word + " for any real values of \\(k\\).";
    return makeQ(DIS, null, q, "\\(" + o.d + "\\), " + o.concl, "Compare with \\(ax^{2} + bx + c = 0\\) and compute \\(\\Delta = b^{2} - 4ac\\): \\(" + o.d + "\\), " + o.concl, { kind: "fn", run: (check, qq) => [-3, -1, 0, 0.5, 2, 7].forEach((k) => check(o.chk(k), "disc identity at k=" + k, qq)) });
  };
}
function discRange(rng) {
  const p = rng.pick([2, 4]), k1 = rng.int(-6, 4), k2 = k1 + rng.int(1, 8);
  const qc = p * p * (k1 + k2) / 4, rc = -p * p * k1 * k2 / 4;
  const mode = rng.pick(["distinct", "real", "none", "equal"]);
  const f1 = terms([[1, "k"], [-k1, ""]]), f2 = terms([[1, "k"], [-k2, ""]]);
  const word = { distinct: "two distinct real roots", real: "real roots", none: "no real roots", equal: "two equal real roots" }[mode];
  const ans = { distinct: "k < " + k1 + " \\text{ or } k > " + k2, real: "k \\leq " + k1 + " \\text{ or } k \\geq " + k2, none: k1 + " < k < " + k2, equal: "k = " + k1 + " \\text{ or } k = " + k2 }[mode];
  const q = "Find the range of values of \\(k\\) (or the values of \\(k\\)) such that the equation \\(" + terms([[1, "x^{2}"], [p, "kx"], [qc, "k"], [rc, ""]]) + " = 0\\) has " + word + ".";
  const cond = { distinct: "\\Delta > 0", real: "\\Delta \\geq 0", none: "\\Delta < 0", equal: "\\Delta = 0" }[mode];
  const steps = "\\(\\Delta = (" + p + "k)^{2} - 4(" + terms([[qc, "k"], [rc, ""]]) + ") = " + terms([[p * p, "k^{2}"], [-4 * qc, "k"], [-4 * rc, ""]]) + " = " + p * p + "(" + f1 + ")(" + f2 + ")\\). For " + word + ", \\(" + cond + "\\), so \\(" + ans + "\\).";
  return makeQ(DIS, null, q, "\\(" + ans + "\\)", steps, { kind: "fn", run: (check, qq) => {
    [k1 - 1.5, k1, (k1 + k2) / 2, k2, k2 + 2].forEach((k) => {
      const D = p * p * k * k - 4 * (qc * k + rc), tol = 1e-9;
      const holds = mode === "distinct" ? D > tol : mode === "real" ? D > -tol : mode === "none" ? D < -tol : Math.abs(D) < tol;
      const inAns = mode === "distinct" ? (k < k1 || k > k2) : mode === "real" ? (k <= k1 || k >= k2) : mode === "none" ? (k > k1 && k < k2) : (k === k1 || k === k2);
      check(holds === inAns, "disc range at k=" + k, qq);
    });
  } });
}
function discTangent(rng) {
  const aa = rng.pick([F(1, 2), F(3, 8), F(1, 4), F(3, 4), F(2, 3), F(1, 3), F(3, 2), F(1, 6), F(5, 8), F(1, 8)]);
  for (let t = 0; t < 50; t++) {
    const x0 = rng.int(2, 12), b = fmul(F(-2 * x0), aa), k = fmul(aa, F(x0 * x0));
    if (b.d !== 1 || k.d !== 1 || b.n === 0) continue;
    const area = fmul(F(1, 2), fmul(F(x0), k));
    const eq = terms([[aa, "x^{2}"], [b, "x"], [1, "k"]]);
    const q = "[Level 1]\nThe graph of \\(y = " + eq + "\\) touches the \\(x\\)-axis at one point \\(R\\), and cuts the \\(y\\)-axis at \\(P\\).\n(a) (i) Find the value of \\(k\\).\n(a) (ii) Find the coordinates of \\(P\\) and \\(R\\).\n(b) Find the area of \\(\\bigtriangleup OPR\\), where \\(O\\) is the origin.";
    const ans = "(a)(i) \\(k = " + k.n + "\\)\n(a)(ii) \\(P = (0," + k.n + ")\\), \\(R = (" + x0 + ",0)\\)\n(b) \\(" + ftex(area) + "\\ sq.\\ units\\)";
    const steps = "(a)(i) The graph touches the \\(x\\)-axis, so \\(\\Delta = 0\\): \\((" + b.n + ")^{2} - 4(" + ftex(aa) + ")k = 0\\), so \\(k = " + k.n + "\\). (ii) The \\(y\\)-intercept is \\(k\\), so \\(P = (0," + k.n + ")\\). The graph touches the \\(x\\)-axis at \\(x = -\\frac{b}{2a} = " + x0 + "\\), so \\(R = (" + x0 + ",0)\\).\n(b) Area \\(= \\frac{1}{2} \\times " + x0 + " \\times " + k.n + " = " + ftex(area) + "\\)";
    return makeQ(DIS, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
      const aN = fnum(aa); check(Math.abs(b.n * b.n - 4 * aN * k.n) < 1e-9 && Math.abs(aN * x0 * x0 + b.n * x0 + k.n) < 1e-9, "tangent graph", qq);
    } });
  }
  return null;
}
reg("core", "quadratic_equation", DIS, [
  ["prove real roots for any k (Δ is a perfect square)", 2, discProof("real")],
  ["prove no real roots for any k", 2, discProof("none")],
  ["prove two distinct real roots for any k", 2, discProof("distinct")],
  ["range of k for a given type of roots", 3, discRange],
  ["graph touching the x-axis: k, P, R and area", 2, discTangent],
]);

/* ---------- Sum and Product of Roots ---------- */
const SPR = "Sum and Product of Roots";
function baseEquation(rng, v) {
  for (let t = 0; t < 200; t++) {
    let a, b, c, tex;
    if (rng.chance(0.5)) { a = rng.int(1, 4); b = rng.nonzero(-8, 8); c = rng.nonzero(-9, 9); tex = polyIn(v, a, b, c) + " = 0"; }
    else {
      const k = rng.int(2, 5), m = rng.int(1, 5), p = rng.nonzero(-4, 4), q = rng.nonzero(-9, 9), r = rng.nonzero(-4, 4);
      a = k; b = -m * r; c = -k * p - m * q;
      tex = k + "(" + terms([[1, v + "^{2}"], [-p, ""]]) + ") = " + m + "(" + terms([[q, ""], [r, v]]) + ")";
    }
    if (c === 0 || b * b - 4 * a * c <= 0) continue;
    return { a, b, c, tex, S: F(-b, a), P: F(c, a) };
  }
  return null;
}
function eqFromSP(S2, P2, v) {
  const D = lcm(S2.d, P2.d);
  let A = D, B = -S2.n * (D / S2.d), C = P2.n * (D / P2.d);
  const g = gcd(gcd(A, B), C); A /= g; B /= g; C /= g;
  return { A, B, C, tex: polyIn(v, A, B, C) + " = 0" };
}
function sprForm(variant) {
  return (rng) => {
    const v = rng.pick(["x", "x", "t"]), be = baseEquation(rng, "x"); if (!be) return null;
    const { S, P } = be;
    let S2, P2, phrase, trans, how;
    if (variant === "linear") {
      const m = rng.pick([2, 3, 4]), n = rng.nonzero(-3, 3), word = { 2: "twice", 3: "three times", 4: "four times" }[m];
      S2 = fadd(fmul(F(m), S), F(2 * n)); P2 = fadd(fadd(fmul(F(m * m), P), fmul(F(m * n), S)), F(n * n));
      phrase = "whose roots are \\(" + Math.abs(n) + "\\) " + (n > 0 ? "larger" : "smaller") + " than " + word + " the roots of the equation \\(" + be.tex + "\\)";
      trans = (al) => m * al + n;
      how = "New roots \\(" + terms([[m, "\\alpha"], [n, ""]]) + "\\) and \\(" + terms([[m, "\\beta"], [n, ""]]) + "\\). Sum \\(= " + m + "(\\alpha + \\beta) " + sgnStr(2 * n) + " " + Math.abs(2 * n) + "\\), product \\(= " + m * m + "\\alpha\\beta " + sgnStr(m * n) + " " + Math.abs(m * n) + "(\\alpha + \\beta) + " + n * n + "\\).";
    } else if (variant === "squares") {
      S2 = fsub(fsq(S), fmul(F(2), P)); P2 = fsq(P);
      phrase = "whose roots are the squares of the roots of the equation \\(" + be.tex + "\\)"; trans = (al) => al * al;
      how = "New roots \\(\\alpha^{2}, \\beta^{2}\\). Sum \\(= (\\alpha + \\beta)^{2} - 2\\alpha\\beta\\), product \\(= (\\alpha\\beta)^{2}\\).";
    } else if (variant === "reciprocals") {
      S2 = fdiv(S, P); P2 = fdiv(ONE, P);
      phrase = "whose roots are the reciprocals of the roots of the equation \\(" + be.tex + "\\)"; trans = (al) => 1 / al;
      how = "New roots \\(\\frac{1}{\\alpha}, \\frac{1}{\\beta}\\). Sum \\(= \\frac{\\alpha + \\beta}{\\alpha\\beta}\\), product \\(= \\frac{1}{\\alpha\\beta}\\).";
    } else if (variant === "ratio") {
      S2 = fdiv(fsub(fsq(S), fmul(F(2), P)), P); P2 = ONE;
      phrase = "whose roots are \\(\\frac{\\alpha}{\\beta}\\) and \\(\\frac{\\beta}{\\alpha}\\), where \\(\\alpha\\) and \\(\\beta\\) are the roots of the equation \\(" + be.tex + "\\)"; trans = null;
      how = "Sum \\(= \\frac{\\alpha^{2} + \\beta^{2}}{\\alpha\\beta} = \\frac{(\\alpha + \\beta)^{2} - 2\\alpha\\beta}{\\alpha\\beta}\\), product \\(= 1\\).";
    } else {
      S2 = fmul(F(3), S); P2 = fadd(fmul(F(2), fsq(S)), P);
      phrase = "whose roots are \\(2\\alpha + \\beta\\) and \\(2\\beta + \\alpha\\), where \\(\\alpha\\) and \\(\\beta\\) are the roots of the equation \\(" + be.tex + "\\)"; trans = null;
      how = "Sum \\(= 3(\\alpha + \\beta)\\), product \\(= (2\\alpha + \\beta)(2\\beta + \\alpha) = 2(\\alpha + \\beta)^{2} + \\alpha\\beta\\).";
    }
    const ne = eqFromSP(S2, P2, v);
    const q = (rng.chance(0.5) ? "[Level 1] " : "") + "Form a quadratic equation in \\(" + v + "\\) " + phrase + ".";
    const steps = "\\(\\alpha + \\beta = " + ftex(S) + "\\), \\(\\alpha\\beta = " + ftex(P) + "\\). " + how + " So the sum of the new roots is \\(" + ftex(S2) + "\\) and the product is \\(" + ftex(P2) + "\\). " +
      "The equation is \\(" + v + "^{2} - (" + ftex(S2) + ")" + v + " + (" + ftex(P2) + ") = 0\\), i.e. \\(" + ne.tex + "\\).";
    return makeQ(SPR, null, q, "\\(" + ne.tex + "\\)", steps, { kind: "fn", run: (check, qq) => {
      const D = be.b * be.b - 4 * be.a * be.c, al = (-be.b + Math.sqrt(D)) / (2 * be.a), bt = (-be.b - Math.sqrt(D)) / (2 * be.a);
      const rts = variant === "ratio" ? [al / bt, bt / al] : variant === "mixed" ? [2 * al + bt, 2 * bt + al] : [trans(al), trans(bt)];
      rts.forEach((y) => check(Math.abs(ne.A * y * y + ne.B * y + ne.C) < 1e-6 * (1 + Math.abs(y) ** 2 * Math.abs(ne.A)), "SPR new root fails", qq));
    } });
  };
}
function sprAlphaMinusBeta(rng) {
  const a = rng.pick([1, 1, 2, 3]), b = rng.nonzero(-8, 8), c = rng.nonzero(-8, 8), D = b * b - 4 * a * c;
  if (D <= 0 || isSquare(D)) return null;
  const amb = surd(F(-1, a), D), a2b2 = surd(F(b, a * a), D);
  const q = "[Level 1]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the quadratic equation \\(" + polyIn("x", a, b, c) + " = 0\\), where \\(\\alpha < \\beta\\).\n(a) Without solving the equation, find the values of \\(\\alpha + \\beta\\), \\(\\alpha\\beta\\) and \\(\\alpha - \\beta\\).\n(b) Hence, find the value of \\(\\alpha^{2} - \\beta^{2}\\).";
  const ans = "(a) \\(\\alpha + \\beta = " + ftex(F(-b, a)) + "\\), \\(\\alpha\\beta = " + ftex(F(c, a)) + "\\), \\(\\alpha - \\beta = " + surdTex(amb) + "\\)\n(b) \\(" + surdTex(a2b2) + "\\)";
  const steps = "(a) \\(\\alpha + \\beta = -\\frac{b}{a} = " + ftex(F(-b, a)) + "\\), \\(\\alpha\\beta = " + ftex(F(c, a)) + "\\). Since \\(\\alpha < \\beta\\), \\(\\alpha - \\beta < 0\\) and \\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = " + ftex(fsub(fsq(F(-b, a)), F(4 * c, a))) + "\\), so \\(\\alpha - \\beta = -\\sqrt{" + ftex(fsub(fsq(F(-b, a)), F(4 * c, a))) + "} = " + surdTex(amb) + "\\).\n(b) \\(\\alpha^{2} - \\beta^{2} = (\\alpha + \\beta)(\\alpha - \\beta) = " + surdTex(a2b2) + "\\)";
  return makeQ(SPR, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    const al = (-b - Math.sqrt(D)) / (2 * a), bt = (-b + Math.sqrt(D)) / (2 * a);
    const val = (s) => fnum(s.c) * Math.sqrt(s.n);
    check(Math.abs(al - bt - val(amb)) < 1e-9 && Math.abs(al * al - bt * bt - val(a2b2)) < 1e-9, "SPR alpha-beta values", qq);
  } });
}
function sprEvaluate(rng) {
  if (rng.chance(0.5)) { // x^2 + bx + c = 0 : beta^3 + b beta^2 - c alpha = bc
    const b = rng.nonzero(-6, 6), c = rng.nonzero(-9, 9);
    if (b * b - 4 * c <= 0) return null;
    const expr = terms([[1, "\\beta^{3}"], [b, "\\beta^{2}"], [-c, "\\alpha"]]);
    const q = "[Level 3]\nIf \\(\\alpha\\) and \\(\\beta\\) are the roots of the equation \\(" + polyIn("x", 1, b, c) + " = 0\\), find the value of \\(" + expr + "\\).";
    const steps = "Since \\(\\beta\\) is a root, \\(\\beta^{2} = " + terms([[-b, "\\beta"], [-c, ""]]) + "\\). So \\(\\beta^{3} + " + par(b) + "\\beta^{2} = \\beta(\\beta^{2} + " + par(b) + "\\beta) = \\beta(" + (-c) + ") = " + terms([[-c, "\\beta"]]) + "\\). " +
      "Then the expression \\(= " + terms([[-c, "\\beta"], [-c, "\\alpha"]]) + " = " + (-c) + "(\\alpha + \\beta) = " + (-c) + "(" + (-b) + ") = " + b * c + "\\).";
    return makeQ(SPR, null, q, "\\(" + b * c + "\\)", steps, { kind: "fn", run: (check, qq) => {
      const D = b * b - 4 * c, al = (-b + Math.sqrt(D)) / 2, bt = (-b - Math.sqrt(D)) / 2;
      [[al, bt], [bt, al]].forEach(([x, y]) => check(Math.abs(y ** 3 + b * y ** 2 - c * x - b * c) < 1e-6, "SPR evaluate trick", qq));
    } });
  }
  const a = rng.int(1, 4), b = rng.nonzero(-8, 8), c = rng.nonzero(-8, 8);
  if (b * b - 4 * a * c <= 0) return null;
  const S = F(-b, a), Pp = F(c, a), s2 = fsub(fsq(S), fmul(F(2), Pp)), s3 = fsub(fmul(S, fsq(S)), fmul(F(3), fmul(S, Pp))), rs = fdiv(S, Pp);
  const q = "[Level 1]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the quadratic equation \\(" + polyIn("x", a, b, c) + " = 0\\). Without solving the equation, find\n(a) \\(\\alpha^{2} + \\beta^{2}\\), (b) \\(\\alpha^{3} + \\beta^{3}\\), (c) \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\).";
  const ans = "(a) \\(" + ftex(s2) + "\\)\n(b) \\(" + ftex(s3) + "\\)\n(c) \\(" + ftex(rs) + "\\)";
  const steps = "\\(\\alpha + \\beta = " + ftex(S) + "\\), \\(\\alpha\\beta = " + ftex(Pp) + "\\).\n(a) \\(\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta = " + ftex(s2) + "\\)\n(b) \\(\\alpha^{3} + \\beta^{3} = (\\alpha + \\beta)^{3} - 3\\alpha\\beta(\\alpha + \\beta) = " + ftex(s3) + "\\)\n(c) \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = " + ftex(rs) + "\\)";
  return makeQ(SPR, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    const D = b * b - 4 * a * c, al = (-b + Math.sqrt(D)) / (2 * a), bt = (-b - Math.sqrt(D)) / (2 * a);
    check(Math.abs(al * al + bt * bt - fnum(s2)) < 1e-6 && Math.abs(al ** 3 + bt ** 3 - fnum(s3)) < 1e-6 && Math.abs(1 / al + 1 / bt - fnum(rs)) < 1e-6, "SPR symmetric values", qq);
  } });
}
function sprMinDiff(rng) {
  const u = rng.pick([1, 1, 2, 3]), v = rng.nonzero(-4, 4), w = rng.int(1, 5), b = rng.int(1, 4);
  const minV = fsub(F(b * b + 4 * w), fdiv(F(v * v), F(u))), mAt = F(-v, 2 * u);
  const q = "[Level 2]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the equation \\(x^{2} - " + (b === 1 ? "" : b) + "x - (" + terms([[u, "m^{2}"], [v, "m"], [w, ""]]) + ") = 0\\), where \\(m\\) is a real number. By expressing \\((\\alpha - \\beta)^{2}\\) in terms of \\(m\\), find the minimum value of \\((\\alpha - \\beta)^{2}\\).";
  const steps = "\\(\\alpha + \\beta = " + b + "\\), \\(\\alpha\\beta = -(" + terms([[u, "m^{2}"], [v, "m"], [w, ""]]) + ")\\). \\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = " + b * b + " + 4(" + terms([[u, "m^{2}"], [v, "m"], [w, ""]]) + ") = " + terms([[4 * u, "m^{2}"], [4 * v, "m"], [b * b + 4 * w, ""]]) + " = " + vertexForm(F(4 * u), F(4 * v), F(b * b + 4 * w), "m") + "\\). The minimum value is \\(" + ftex(minV) + "\\) when \\(m = " + ftex(mAt) + "\\).";
  return makeQ(SPR, null, q, "Minimum value \\(= " + ftex(minV) + "\\)", steps, { kind: "fn", run: (check, qq) => {
    let mn = Infinity; for (let m = -10; m <= 10; m += 0.005) mn = Math.min(mn, b * b + 4 * (u * m * m + v * m + w));
    check(Math.abs(mn - fnum(minV)) < 1e-3, "SPR min value", qq);
  } });
}
function sprSystemMC(rng) {
  const p = rng.int(1, 6), q0 = rng.int(1, 6), D = p * p + 4 * p * q0;
  const correct = surdTex(surd(F(-p), D)), wrong1 = surdTex(surd(F(p), D));
  const q = "If \\(m > n\\) and \\(\\left\\{ \\begin{array}{r} m^{2} = " + p + "(" + q0 + " - m) \\\\ n^{2} = " + p + "(" + q0 + " - n) \\end{array} \\right.\\), then \\(m^{2} - n^{2} =\\)";
  const opts = mcBlock(rng, correct, [String(D), wrong1, "\\pm" + wrong1.replace(/^-/, ""), "-" + String(D)]);
  if (!opts) return null;
  const steps = "\\(m\\) and \\(n\\) are the two roots of \\(" + terms([[1, "x^{2}"], [p, "x"], [-p * q0, ""]]) + " = 0\\), so \\(m + n = -" + p + "\\) and \\((m - n)^{2} = (m + n)^{2} - 4mn = " + p * p + " + " + 4 * p * q0 + " = " + D + "\\). Since \\(m > n\\), \\(m - n = \\sqrt{" + D + "}\\). Hence \\(m^{2} - n^{2} = (m + n)(m - n) = " + correct + "\\) (" + opts.letter + ").";
  return makeQ(SPR, null, q + "\n" + opts.block, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    const m = (-p + Math.sqrt(D)) / 2, n = (-p - Math.sqrt(D)) / 2, s = surd(F(-p), D);
    check(Math.abs(m * m - n * n - fnum(s.c) * Math.sqrt(s.n)) < 1e-9 && Math.abs(m * m - p * (q0 - m)) < 1e-9, "SPR system", qq);
  } });
}
reg("core", "quadratic_equation", SPR, [
  ["form an equation: roots n larger than m times the roots", 3, sprForm("linear")],
  ["form an equation: squares of the roots", 2, sprForm("squares")],
  ["form an equation: reciprocals of the roots", 2, sprForm("reciprocals")],
  ["form an equation: roots α/β and β/α", 1, sprForm("ratio")],
  ["form an equation: roots 2α+β and 2β+α", 1, sprForm("mixed")],
  ["α+β, αβ, α−β without solving, then α²−β²", 3, sprAlphaMinusBeta],
  ["evaluate symmetric expressions in α and β", 3, sprEvaluate],
  ["minimum value of (α−β)² in terms of a parameter", 2, sprMinDiff],
  ["MC: m² − n² from a pair of equations", 2, sprSystemMC],
]);

/* ---------- Complex Numbers ---------- */
const CPX = "Complex Numbers";
const cx = (re, im) => ({ re: toF(re), im: toF(im) });
const cmul = (a, b) => cx(fsub(fmul(a.re, b.re), fmul(a.im, b.im)), fadd(fmul(a.re, b.im), fmul(a.im, b.re)));
const cadd = (a, b) => cx(fadd(a.re, b.re), fadd(a.im, b.im));
const cconj = (a) => cx(a.re, fneg(a.im));
const cdiv = (a, b) => { const n = cmul(a, cconj(b)), d = fadd(fsq(b.re), fsq(b.im)); return cx(fdiv(n.re, d), fdiv(n.im, d)); };
const ctex = (z) => terms([[z.re, ""], [z.im, "i"]]);
const ceq = (a, b) => feq(a.re, b.re) && feq(a.im, b.im);
const I_POW = [cx(1, 0), cx(0, 1), cx(-1, 0), cx(0, -1)];
const ipow = (k) => I_POW[((k % 4) + 4) % 4];

function cxRatio(rng) { // (a + pi)/(a - qi): simplify; then sum of real and imaginary parts = S
  const p = rng.int(1, 8), q = rng.int(1, 8), a1 = rng.int(-12, 12), den = a1 * a1 + q * q;
  const S = F(a1 * a1 - p * q + (p + q) * a1, den);
  if (feq(S, ONE)) return null;
  const sigma = fdiv(F(-(p + q)), fsub(ONE, S)), a2 = fsub(sigma, F(a1));
  const roots = [F(a1), a2].sort((x, y) => fcmp(x, y));
  const rootsStr = feq(roots[0], roots[1]) ? M("a = " + ftex(roots[0])) : roots.map((r) => M("a = " + ftex(r))).join(" or ");
  const q0 = "[Level 1]\nLet \\(a\\) be a real number.\n(a) Simplify \\(\\frac{" + terms([[1, "a"], [p, "i"]]) + "}{" + terms([[1, "a"], [-q, "i"]]) + "}\\) and express it in the form \\(c + di\\), where \\(c\\) and \\(d\\) are real numbers.\n(b) If the sum of the real part and imaginary part of \\(\\frac{" + terms([[1, "a"], [p, "i"]]) + "}{" + terms([[1, "a"], [-q, "i"]]) + "}\\) is \\(" + ftex(S) + "\\), find the values of \\(a\\).";
  const simp = "\\frac{a^{2} - " + p * q + "}{a^{2} + " + q * q + "} + \\frac{" + (p + q === 1 ? "" : p + q) + "a}{a^{2} + " + q * q + "}i";
  const ans = "(a) \\(" + simp + "\\)\n(b) " + rootsStr;
  const steps = "(a) Multiply the numerator and denominator by \\(" + terms([[1, "a"], [q, "i"]]) + "\\): \\(\\frac{(" + terms([[1, "a"], [p, "i"]]) + ")(" + terms([[1, "a"], [q, "i"]]) + ")}{a^{2} + " + q * q + "} = " + simp + "\\).\n(b) \\(\\frac{a^{2} - " + p * q + " + " + (p + q) + "a}{a^{2} + " + q * q + "} = " + ftex(S) + "\\), which simplifies to \\(" + terms([[fsub(ONE, S), "a^{2}"], [F(p + q), "a"], [fsub(F(-p * q), fmul(S, F(q * q))), ""]]) + " = 0\\). Hence " + rootsStr + ".";
  return makeQ(CPX, null, q0, ans, steps, { kind: "fn", run: (check, qq) => {
    roots.forEach((r) => { const a = fnum(r); check(Math.abs((a * a - p * q + (p + q) * a) / (a * a + q * q) - fnum(S)) < 1e-9, "CPX ratio root", qq); });
    [2, -3.5].forEach((a) => { const d = a * a + q * q; const re = (a * a - p * q) / d, im = (p + q) * a / d; const n = { re: a * a - p * q, im: (p + q) * a }; check(Math.abs(re * d - n.re) < 1e-9 && Math.abs(im * d - n.im) < 1e-9, "CPX simplify", qq); });
  } });
}
function cxRootPair(rng) {
  const p = rng.nonzero(-5, 5), q = rng.nonzero(-4, 4), b = -2 * p, c = p * p + q * q;
  const z = terms([[p, ""], [q, "i"]]), fmt = (bb, cc) => "b = " + bb + " \\text{ and } c = " + cc;
  const opts = mcBlock(rng, fmt(b, c), [fmt(-b, c), fmt(b, p * p - q * q), fmt(-b, -c), fmt(p, c), fmt(b, -c), fmt(-b, p * p - q * q)]);
  if (!opts) return null;
  const q0 = "If \\(" + z + "\\) is a root of \\(x^{2} + bx + c = 0\\), where \\(b\\) and \\(c\\) are real numbers, then\n" + opts.block;
  const steps = "Since the coefficients are real, the other root is the conjugate \\(" + terms([[p, ""], [-q, "i"]]) + "\\). Sum of roots \\(= " + 2 * p + " = -b\\), so \\(b = " + b + "\\). Product of roots \\(= (" + z + ")(" + terms([[p, ""], [-q, "i"]]) + ") = " + c + " = c\\) (" + opts.letter + ").";
  return makeQ(CPX, null, q0, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    const z1 = cx(p, q), z2 = cconj(z1), sum = cadd(z1, z2), prod = cmul(z1, z2);
    check(fnum(sum.re) === -b && fnum(prod.re) === c && fnum(prod.im) === 0, "CPX root pair", qq);
  } });
}
function cxFindAB(rng) { // z1 / (a - bi) = w
  const a0 = rng.nonzero(-4, 4), b0 = rng.nonzero(-4, 4), w = cx(rng.nonzero(-3, 3), rng.nonzero(-3, 3));
  const z1 = cmul(w, cx(a0, -b0));
  const fmt = (x, y) => "a = " + x + ", b = " + y;
  const opts = mcBlock(rng, fmt(a0, b0), [fmt(a0, -b0), fmt(-a0, b0), fmt(b0, a0), fmt(-a0, -b0), fmt(b0, -a0)]);
  if (!opts) return null;
  const q0 = "Find the values of the real numbers \\(a\\) and \\(b\\) if \\(\\frac{" + ctex(z1) + "}{" + terms([[1, "a"], [-1, "bi"]]).replace("a - bi", "a - bi") + "} = " + ctex(w) + "\\).\n" + opts.block;
  const steps = "\\(a - bi = \\frac{" + ctex(z1) + "}{" + ctex(w) + "} = " + ctex(cx(a0, -b0)) + "\\), so \\(a = " + a0 + "\\) and \\(b = " + b0 + "\\) (" + opts.letter + ").";
  return makeQ(CPX, null, q0, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    check(ceq(cdiv(z1, cx(a0, -b0)), w), "CPX find a,b", qq);
  } });
}
function cxLinearConditions(rng) {
  const p = rng.nonzero(-5, 5), q = rng.nonzero(-9, 9), r = rng.nonzero(-9, 9), s = rng.nonzero(-3, 3);
  const cc = rng.pick([1, 2, 3]), dd = rng.pick([1, -1, 2]);
  const kinds = rng.sample(["zi_real", "zi_imag", "div_real", "div_imag"], 2);
  const R = (x) => p * x + q, Im = (x) => r - s * x; // z = R + Im i
  const ztex = "(" + terms([[p, "x"], [q, ""]]) + ") + (" + terms([[-s, "x"], [r, ""]]) + ")i";
  const divTex = "\\frac{z}{" + terms([[cc, ""], [dd, "i"]]) + "}";
  const sol = (k) => {
    if (k === "zi_real") return fdiv(F(-q), F(p));
    if (k === "zi_imag") return fdiv(F(-r), F(-s));
    if (k === "div_real") { const den = s * cc + p * dd; return den === 0 ? null : F(r * cc - q * dd, den); }
    const den = p * cc - s * dd; return den === 0 ? null : F(-(q * cc + r * dd), den);
  };
  const word = { zi_real: "\\(zi\\) is a real number", zi_imag: "\\(zi\\) is a purely imaginary number", div_real: "\\(" + divTex + "\\) is a real number", div_imag: "\\(" + divTex + "\\) is a purely imaginary number" };
  const how = { zi_real: "\\(zi = -(" + terms([[-s, "x"], [r, ""]]) + ") + (" + terms([[p, "x"], [q, ""]]) + ")i\\) is real, so \\(" + terms([[p, "x"], [q, ""]]) + " = 0\\).",
    zi_imag: "\\(zi\\) is purely imaginary when its real part \\(-(" + terms([[-s, "x"], [r, ""]]) + ") = 0\\).",
    div_real: "\\(" + divTex + " = \\frac{z(" + terms([[cc, ""], [-dd, "i"]]) + ")}{" + (cc * cc + dd * dd) + "}\\) is real when its imaginary part is zero: \\(" + cc + "(" + terms([[-s, "x"], [r, ""]]) + ") - " + par(dd) + "(" + terms([[p, "x"], [q, ""]]) + ") = 0\\).",
    div_imag: "\\(" + divTex + " = \\frac{z(" + terms([[cc, ""], [-dd, "i"]]) + ")}{" + (cc * cc + dd * dd) + "}\\) is purely imaginary when its real part is zero: \\(" + cc + "(" + terms([[p, "x"], [q, ""]]) + ") + " + par(dd) + "(" + terms([[-s, "x"], [r, ""]]) + ") = 0\\)." };
  const xs = kinds.map(sol); if (xs.some((x) => !x)) return null;
  const q0 = "[Level 2]\nLet \\(z = " + ztex + "\\) be a complex number, where \\(x\\) is a real number. Find the value of \\(x\\) such that\n(a) " + word[kinds[0]] + ",\n(b) " + word[kinds[1]] + ".";
  const ans = xs.map((x, i) => partLabel(i) + " \\(x = " + ftex(x) + "\\)").join("\n");
  const steps = kinds.map((k, i) => partLabel(i) + " " + how[k] + " So \\(x = " + ftex(xs[i]) + "\\).").join("\n");
  return makeQ(CPX, null, q0, ans, steps, { kind: "fn", run: (check, qq) => {
    kinds.forEach((k, i) => {
      const xv = fnum(xs[i]), Rv = p * xv + q, Iv = r - s * xv, den = cc * cc + dd * dd;
      const target = { zi_real: Rv, zi_imag: -Iv, div_real: (Iv * cc - Rv * dd) / den, div_imag: (Rv * cc + Iv * dd) / den }[k];
      check(Math.abs(target) < 1e-9, "CPX linear condition " + k, qq);
    });
  } });
}
function cxPowerSum(rng) {
  const a = rng.int(0, 20), n = rng.int(30, 1200), b = a + n;
  let s = cx(0, 0); for (let k = a; k <= b; k++) s = cadd(s, ipow(k));
  const pool = [cx(-1, 0), cx(0, 0), cx(1, 0), cx(0, 1), cx(0, -1), cx(1, 1), cx(-1, 1)];
  const strOf = (z) => ctex(z).replace(/^(-?)1i$/, "$1i") + ".";
  const correct = strOf(s), wrongs = pool.filter((z) => !ceq(z, s)).map(strOf);
  const opts = mcBlock(rng, correct, rng.shuffle(wrongs).slice(0, 3));
  if (!opts) return null;
  const rem = (b - a + 1) % 4;
  const q0 = "\\(" + (a === 0 ? "1 + i + i^{2} + \\ldots" : "i^{" + a + "} + i^{" + (a + 1) + "} + i^{" + (a + 2) + "} + \\ldots") + " + i^{" + b + "} =\\)\n" + opts.block;
  const steps = "\\(i^{k} + i^{k+1} + i^{k+2} + i^{k+3} = 0\\), so every block of 4 consecutive powers adds to \\(0\\). There are \\(" + (b - a + 1) + "\\) terms, i.e. \\(" + Math.floor((b - a + 1) / 4) + "\\) blocks and \\(" + rem + "\\) remaining term(s)" + (rem ? " \\(i^{" + (b - rem + 1) + "}" + (rem > 1 ? " + \\ldots + i^{" + b + "}" : "") + "\\)" : "") + ". The sum is \\(" + ctex(s) + "\\) (" + opts.letter + ").";
  return makeQ(CPX, null, q0, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    let re = 0, im = 0; for (let k = a; k <= b; k++) { const z = I_POW[k % 4]; re += fnum(z.re); im += fnum(z.im); }
    check(re === fnum(s.re) && im === fnum(s.im), "CPX power sum", qq);
  } });
}
function cxWeightedSum(rng) {
  const n = rng.int(200, 2100), part = rng.pick(["real", "imaginary"]);
  let s = cx(0, 0); for (let k = 1; k <= n; k++) s = cadd(s, cmul(cx(k, 0), ipow(k - 1)));
  const val = part === "real" ? s.re : s.im, v = val.n;
  const cands = [v, -v, v + 1, v - 1, v + 2, -v + 1, v * 2, Math.floor(v / 2)].map(String);
  const opts = mcBlock(rng, String(v), rng.shuffle(cands.slice(1)));
  if (!opts) return null;
  const q0 = "[Challenging] The " + part + " part of \\(1 + 2i + 3i^{2} + \\ldots + " + n + "i^{" + (n - 1) + "}\\) is\n" + opts.block;
  const steps = "Group the terms in blocks of 4: \\((4j + 1) + (4j + 2)i - (4j + 3) - (4j + 4)i = -2 - 2i\\). There are " + Math.floor(n / 4) + " complete blocks" + (n % 4 ? " and " + (n % 4) + " leftover term(s) at the end" : "") + ". Adding them gives \\(" + ctex(s) + "\\), so the " + part + " part is \\(" + v + "\\) (" + opts.letter + ").";
  return makeQ(CPX, null, q0, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    let re = 0, im = 0; for (let k = 1; k <= n; k++) { const z = I_POW[(k - 1) % 4]; re += k * fnum(z.re); im += k * fnum(z.im); }
    check((part === "real" ? re : im) === v, "CPX weighted sum", qq);
  } });
}
// roots of unity: base angle (degrees) and exact value of cos + i sin at multiples of 30 and 45 degrees
const CS_TEX = { 0: ["1", "0"], 30: ["\\frac{\\sqrt{3}}{2}", "\\frac{1}{2}"], 45: ["\\frac{\\sqrt{2}}{2}", "\\frac{\\sqrt{2}}{2}"], 60: ["\\frac{1}{2}", "\\frac{\\sqrt{3}}{2}"], 90: ["0", "1"], 120: ["-\\frac{1}{2}", "\\frac{\\sqrt{3}}{2}"], 135: ["-\\frac{\\sqrt{2}}{2}", "\\frac{\\sqrt{2}}{2}"], 150: ["-\\frac{\\sqrt{3}}{2}", "\\frac{1}{2}"], 180: ["-1", "0"] };
function unitTex(ang) {
  ang = ((ang % 360) + 360) % 360;
  let sc = 1, base = ang;
  if (ang > 180) { base = 360 - ang; sc = -1; }
  const [c, s] = CS_TEX[base];
  const sTex = sc < 0 ? (s === "0" ? "0" : "-" + s) : s;
  const re = c, im = sTex;
  const parts = [];
  if (re !== "0") parts.push(re);
  if (im !== "0") parts.push((im[0] === "-" ? (parts.length ? " - " : "-") : (parts.length ? " + " : "")) + (im.replace(/^-/, "") === "1" ? "" : im.replace(/^-/, "")) + "i");
  return parts.length ? parts.join("") : "0";
}
const UNIT_BASES = { 30: "\\frac{\\sqrt{3} + i}{2}", [-30]: "\\frac{\\sqrt{3} - i}{2}", 45: "\\frac{1 + i}{\\sqrt{2}}", [-45]: "\\frac{1 - i}{\\sqrt{2}}", 60: "\\frac{1 + \\sqrt{3}i}{2}", [-60]: "\\frac{1 - \\sqrt{3}i}{2}", 90: "\\frac{1 + i}{1 - i}", [-90]: "\\frac{1 - i}{1 + i}", 120: "\\frac{-1 + \\sqrt{3}i}{2}", [-120]: "\\frac{-1 - \\sqrt{3}i}{2}" };
function cxUnitPower(rng) {
  const ang = rng.pick(Object.keys(UNIT_BASES).map(Number)), N = rng.int(25, 2100), expo = rng.chance(0.4) ? "12n - 1" : String(N);
  let useN = N, nTxt = String(N), qNote = "";
  const res = (((ang * useN) % 360) + 360) % 360;
  if (res % 30 !== 0 && res % 45 !== 0) return null;
  const q0 = "Express \\(\\left(" + UNIT_BASES[ang] + "\\right)^{" + nTxt + "}\\) in the form of \\(a + bi\\), where \\(a\\) and \\(b\\) are real numbers.";
  const steps = "The number \\(" + UNIT_BASES[ang] + " = \\cos(" + ang + "^{\\circ}) + i\\sin(" + ang + "^{\\circ})\\). By De Moivre's theorem, its \\(" + nTxt + "\\)th power is \\(\\cos(" + ang * useN + "^{\\circ}) + i\\sin(" + ang * useN + "^{\\circ})\\). Since \\(" + ang * useN + "^{\\circ} = " + res + "^{\\circ}\\) (mod \\(360^{\\circ}\\)), the value is \\(" + unitTex(res) + "\\).";
  return makeQ(CPX, null, q0, "\\(" + unitTex(res) + "\\)", steps, { kind: "fn", run: (check, qq) => {
    const th = ang * RAD, re = Math.cos(th), im = Math.sin(th);
    let zr = 1, zi = 0; for (let k = 0; k < useN; k++) { const nr = zr * re - zi * im, ni = zr * im + zi * re; zr = nr; zi = ni; }
    check(Math.abs(zr - Math.cos(res * RAD)) < 1e-6 && Math.abs(zi - Math.sin(res * RAD)) < 1e-6, "CPX unit power", qq);
  } });
}
function cxSqrt(rng) {
  const m = rng.int(2, 7), n = rng.int(1, m - 1);
  if (m === n) return null;
  const re = m * m - n * n, im = 2 * m * n;
  const ask = rng.pick(["a", "b"]), correct = ask === "a" ? m * m : n * n;
  const opts = mcBlock(rng, String(correct), [String(m * m + n * n), String(m * n), String(re), String(ask === "a" ? n * n : m * m), String(im), String(m + n)]);
  if (!opts) return null;
  const q0 = "Let \\(a\\) and \\(b\\) be positive real numbers. If \\(\\sqrt{" + terms([[re, ""], [im, "i"]]) + "} = \\sqrt{a} + \\sqrt{b}i\\), then \\(" + ask + " =\\)\n" + opts.block;
  const steps = "Square both sides: \\(" + terms([[re, ""], [im, "i"]]) + " = a - b + 2\\sqrt{ab}\\,i\\). So \\(a - b = " + re + "\\) and \\(\\sqrt{ab} = " + m * n + "\\), i.e. \\(ab = " + m * m * n * n + "\\). Solving, \\(a = " + m * m + "\\) and \\(b = " + n * n + "\\), so \\(" + ask + " = " + correct + "\\) (" + opts.letter + ").";
  return makeQ(CPX, null, q0, opts.letter, steps, { kind: "fn", run: (check, qq) => {
    const a = m * m, b = n * n; check(Math.abs((Math.sqrt(a) ** 2 - Math.sqrt(b) ** 2) - re) < 1e-9 && Math.abs(2 * Math.sqrt(a) * Math.sqrt(b) - im) < 1e-9, "CPX sqrt", qq);
  } });
}
reg("core", "quadratic_equation", CPX, [
  ["simplify (a+pi)/(a−qi), then use its real and imaginary parts", 3, cxRatio],
  ["MC: a complex root of x² + bx + c = 0", 2, cxRootPair],
  ["MC: find real a and b from an equation", 2, cxFindAB],
  ["real / purely imaginary conditions on z", 2, cxLinearConditions],
  ["MC: sum of consecutive powers of i", 2, cxPowerSum],
  ["MC: real or imaginary part of 1 + 2i + 3i² + …", 1, cxWeightedSum],
  ["power of a complex number of modulus 1 (De Moivre)", 3, cxUnitPower],
  ["MC: square root of a complex number", 2, cxSqrt],
]);

/* ===================== CORE · FUNCTIONS AND GRAPHS ===================== */
const coefStr = (a) => { a = toF(a); return feq(a, ONE) ? "" : feq(a, F(-1)) ? "-" : (a.d === 1 ? String(a.n) : ftex(a)); };
const ptTex = (x, y) => "(" + ftex(x) + "," + ftex(y) + ")";
const ptTexL = (x, y) => "\\left(" + ftex(x) + "," + ftex(y) + "\\right)";
function vertexOf(a, b, c) { const h = fdiv(fneg(b), fmul(F(2), a)); return { h, k: fsub(c, fmul(a, fsq(h))) }; }
// vertex form text: a(x - h)^2 + k
function vForm(a, h, k, v) {
  v = v || "x";
  const inner = h.n === 0 ? v : "(" + v + (h.n < 0 ? " + " : " - ") + ftex(fabs(h)) + ")";
  return coefStr(a) + inner + "^{2}" + (k.n === 0 ? "" : (k.n < 0 ? " - " : " + ") + ftex(fabs(k)));
}
function fForm(a, p, q) { // a(x - p)(x - q)
  return coefStr(a) + "(" + terms([[1, "x"], [fneg(p), ""]]) + ")(" + terms([[1, "x"], [fneg(q), ""]]) + ")";
}
function qfForm(rng) {
  const kind = rng.pick(["std", "std", "fact", "vertex", "nested"]);
  if (kind === "std") { const a = rng.nonzero(-3, 3), b = rng.nonzero(-9, 9), c = rng.nonzero(-9, 9); return { tex: polyIn("x", a, b, c), a: F(a), b: F(b), c: F(c), f: (x) => a * x * x + b * x + c }; }
  if (kind === "fact") { const a = rng.nonzero(-4, 4), p = rng.nonzero(-4, 4), q = rng.nonzero(-4, 4); return { tex: coefStr(a) + "(" + terms([[1, "x"], [-p, ""]]) + ")(" + terms([[1, "x"], [-q, ""]]) + ")", a: F(a), b: F(-a * (p + q)), c: F(a * p * q), f: (x) => a * (x - p) * (x - q) }; }
  if (kind === "vertex") {
    const a = rng.pick([F(1), F(2), F(3), F(-1), F(-2), F(-1, 2), F(1, 2), F(-1, 3)]), h = rng.nonzero(-5, 5), k = rng.int(-9, 9);
    return { tex: vForm(a, F(h), F(k)), a, b: fmul(fmul(F(-2), a), F(h)), c: fadd(fmul(a, F(h * h)), F(k)), f: (x) => fnum(a) * (x - h) ** 2 + k };
  }
  const c0 = rng.nonzero(-9, 9), m = rng.nonzero(-5, 5);
  return { tex: c0 + " - x(" + terms([[1, "x"], [m, ""]]) + ")", a: F(-1), b: F(-m), c: F(c0), f: (x) => c0 - x * (x + m) };
}
const QF = "Quadratic Function";
function chkForm(check, qq, fm) { [-3, -1, 0, 1, 2.5, 4].forEach((x) => check(Math.abs(fm.f(x) - (fnum(fm.a) * x * x + fnum(fm.b) * x + fnum(fm.c))) < 1e-9, "QF expansion mismatch", qq)); }
function qfDirection(rng) {
  const forms = Array.from({ length: rng.int(4, 5) }, () => qfForm(rng));
  const q = "Find the direction of opening, \\(y\\)-intercept and the axis of symmetry of the following functions.\n" + forms.map((f, i) => partLabel(i) + " \\(y = " + f.tex + "\\)").join("\n");
  const aos = (f) => fdiv(fneg(f.b), fmul(F(2), f.a));
  const ans = forms.map((f, i) => partLabel(i) + " " + (f.a.n > 0 ? "Opens upwards." : "Opens downwards.") + " \\(y\\)-intercept: \\(" + ftex(f.c) + "\\). AOS: \\(x = " + ftex(aos(f)) + "\\).").join("\n");
  const steps = forms.map((f, i) => partLabel(i) + " Expanding, \\(y = " + terms([[f.a, "x^{2}"], [f.b, "x"], [f.c, ""]]) + "\\). Since \\(a " + (f.a.n > 0 ? ">" : "<") + " 0\\) the graph opens " + (f.a.n > 0 ? "upwards" : "downwards") + "; \\(y\\)-intercept \\(= c = " + ftex(f.c) + "\\); axis of symmetry \\(x = -\\frac{b}{2a} = " + ftex(aos(f)) + "\\).").join("\n");
  return makeQ(QF, null, q, ans, steps, { kind: "fn", run: (check, qq) => forms.forEach((f) => { chkForm(check, qq, f); const h = fnum(aos(f)); [0.5, 2, 3.7].forEach((t) => check(Math.abs(f.f(h + t) - f.f(h - t)) < 1e-9, "AOS symmetry", qq)); check(Math.abs(f.f(0) - fnum(f.c)) < 1e-9, "y-int", qq); }) });
}
function qfVertex(rng) {
  const forms = Array.from({ length: rng.int(4, 5) }, () => qfForm(rng));
  const q = "Find the maximum/minimum point of the following functions by either completing square or substitution method.\n" + forms.map((f, i) => partLabel(i) + " \\(y = " + f.tex + "\\)").join("\n");
  const vt = forms.map((f) => vertexOf(f.a, f.b, f.c));
  const ans = forms.map((f, i) => partLabel(i) + " " + (f.a.n > 0 ? "Minimum" : "Maximum") + " point: \\(" + ptTexL(vt[i].h, vt[i].k) + "\\)").join("\n");
  const steps = forms.map((f, i) => partLabel(i) + " \\(y = " + terms([[f.a, "x^{2}"], [f.b, "x"], [f.c, ""]]) + " = " + vForm(f.a, vt[i].h, vt[i].k) + "\\), so the " + (f.a.n > 0 ? "minimum" : "maximum") + " point is \\(" + ptTexL(vt[i].h, vt[i].k) + "\\).").join("\n");
  return makeQ(QF, null, q, ans, steps, { kind: "fn", run: (check, qq) => forms.forEach((f, i) => {
    chkForm(check, qq, f); const h = fnum(vt[i].h), k = fnum(vt[i].k);
    let ext = f.f(h); const s = f.a.n > 0 ? 1 : -1;
    for (let x = h - 6; x <= h + 6; x += 0.01) if (s * f.f(x) < s * ext - 1e-9) ext = f.f(x);
    check(Math.abs(ext - k) < 1e-9 && Math.abs(f.f(h) - k) < 1e-9, "QF extreme point", qq);
  }) });
}
// build a function from information, returns {text, ans, steps, check}
function infoPart(rng, kind) {
  const nz = rng.nonzero;
  if (kind === "points3") {
    const a = nz(-3, 3), b = nz(-5, 5), c = nz(-6, 6), xs = rng.sample([-2, -1, 0, 1, 2, 3], 3), f = (x) => a * x * x + b * x + c;
    const pts = xs.map((x) => "(" + x + "," + f(x) + ")");
    return { text: "Passing through points \\(" + pts[0] + "," + pts[1] + "\\) and \\(" + pts[2] + "\\).", ans: "y = " + polyIn("x", a, b, c), steps: "Let \\(y = ax^{2} + bx + c\\) and substitute the three points to get three equations. Solving gives \\(a = " + a + "\\), \\(b = " + b + "\\), \\(c = " + c + "\\).", ok: (g) => xs.every((x) => Math.abs(g(x) - f(x)) < 1e-9), g: [a, b, c] };
  }
  if (kind === "aos_ext_yint") {
    const a = nz(-3, 3), h = nz(-4, 4), k = rng.int(-6, 6), c = a * h * h + k;
    return { text: "Axis of symmetry \\(x = " + h + "\\). " + (a < 0 ? "Maximum" : "Minimum") + " value \\(" + k + "\\). \\(y\\)-intercept \\(" + c + "\\).", ans: "y = " + vForm(F(a), F(h), F(k)), steps: "The vertex is \\((" + h + "," + k + ")\\), so \\(y = a(x " + (h < 0 ? "+" : "-") + " " + Math.abs(h) + ")^{2}" + (k === 0 ? "" : (k < 0 ? " - " : " + ") + Math.abs(k)) + "\\). Substituting \\((0," + c + ")\\): \\(" + c + " = " + terms([[h * h, "a"], [k, ""]]) + "\\), so \\(a = " + a + "\\).", ok: (g) => Math.abs(g(0) - c) < 1e-9, g: [a, -2 * a * h, a * h * h + k] };
  }
  if (kind === "xint_point") {
    const a = nz(-3, 3), p = nz(-4, 4); let q = nz(-4, 4), x0 = rng.int(-5, 5);
    if (p === q || x0 === p || x0 === q) return null;
    const y0 = a * (x0 - p) * (x0 - q);
    return { text: "\\(x\\)-intercepts \\(" + p + "\\) and \\(" + q + "\\). Passing through point \\((" + x0 + "," + y0 + ")\\).", ans: "y = " + fForm(F(a), F(p), F(q)), steps: "Let \\(y = a(x " + (p < 0 ? "+" : "-") + " " + Math.abs(p) + ")(x " + (q < 0 ? "+" : "-") + " " + Math.abs(q) + ")\\). Substituting \\((" + x0 + "," + y0 + ")\\): \\(" + y0 + " = a(" + (x0 - p) + ")(" + (x0 - q) + ")\\), so \\(a = " + a + "\\).", ok: (g) => Math.abs(g(x0) - y0) < 1e-9 && Math.abs(g(p)) < 1e-9 && Math.abs(g(q)) < 1e-9, g: [a, -a * (p + q), a * p * q] };
  }
  if (kind === "aos_two_points") {
    const a = nz(-4, 4), h = rng.int(-3, 4), k = rng.int(-8, 8), x1 = rng.int(-4, 6), x2 = rng.int(-4, 6);
    if (x1 === x2 || Math.abs(x1 - h) === Math.abs(x2 - h)) return null;
    const f = (x) => a * (x - h) ** 2 + k, y1 = f(x1), y2 = f(x2);
    return { text: "Axis of symmetry \\(x = " + h + "\\). Passing through points \\((" + x1 + "," + y1 + ")\\) and \\((" + x2 + "," + y2 + ")\\).", ans: "y = " + vForm(F(a), F(h), F(k)), steps: "Let \\(y = a(x - " + par(h) + ")^{2} + k\\). Substituting the two points: \\(" + y1 + " = " + terms([[(x1 - h) ** 2, "a"], [1, "k"]]) + "\\) and \\(" + y2 + " = " + terms([[(x2 - h) ** 2, "a"], [1, "k"]]) + "\\). Subtracting gives \\(a = " + a + "\\), then \\(k = " + k + "\\).", ok: (g) => Math.abs(g(x1) - y1) < 1e-9 && Math.abs(g(x2) - y2) < 1e-9, g: [a, -2 * a * h, a * h * h + k] };
  }
  if (kind === "symmetric_points") {
    const a = nz(-3, 3), d = rng.int(1, 4), h = rng.int(-2, 6), k = rng.int(-8, 8), y = a * d * d + k;
    return { text: "Passing through points \\((" + (h - d) + "," + y + ")\\) and \\((" + (h + d) + "," + y + ")\\). " + (a < 0 ? "Maximum" : "Minimum") + " value \\(= " + k + "\\).", ans: "y = " + vForm(F(a), F(h), F(k)), steps: "The two points have the same \\(y\\)-coordinate, so the axis of symmetry is \\(x = \\frac{" + (h - d) + " + " + (h + d) + "}{2} = " + h + "\\). The vertex is \\((" + h + "," + k + ")\\). Substituting \\((" + (h + d) + "," + y + ")\\) into \\(y = a(x - " + par(h) + ")^{2} + " + par(k) + "\\) gives \\(a = " + a + "\\).", ok: (g) => Math.abs(g(h - d) - y) < 1e-9 && Math.abs(g(h + d) - y) < 1e-9, g: [a, -2 * a * h, a * h * h + k] };
  }
  // vertex and distance between x-intercepts
  const a = nz(-3, 3), d = rng.int(1, 4), h = rng.int(-4, 5), k = -a * d * d;
  return { text: "Vertex \\((" + h + "," + k + ")\\). Distance between \\(x\\)-intercepts \\(= " + 2 * d + "\\).", ans: "y = " + vForm(F(a), F(h), F(k)), steps: "The \\(x\\)-intercepts are \\(" + d + "\\) units on each side of the axis \\(x = " + h + "\\), i.e. \\(x = " + (h - d) + "\\) and \\(x = " + (h + d) + "\\). So \\(y = a(x - " + par(h - d) + ")(x - " + par(h + d) + ")\\) and the vertex gives \\(" + k + " = a(" + d + ")(" + (-d) + ")\\), \\(a = " + a + "\\).", ok: (g) => Math.abs(g(h - d)) < 1e-9 && Math.abs(g(h + d)) < 1e-9 && Math.abs(g(h) - k) < 1e-9, g: [a, -2 * a * h, a * h * h + k] };
}
function qfFromInfo(rng) {
  const kinds = rng.shuffle(["points3", "aos_ext_yint", "xint_point", "aos_two_points", "symmetric_points", "vertex_distance"]).slice(0, rng.int(4, 6));
  const parts = kinds.map((k) => infoPart(rng, k)); if (parts.some((p) => !p)) return null;
  const q = "Find the quadratic functions based on the given information.\n" + parts.map((p, i) => partLabel(i) + " " + p.text).join("\n");
  const ans = parts.map((p, i) => partLabel(i) + " \\(" + p.ans + "\\)").join("\n");
  const steps = parts.map((p, i) => partLabel(i) + " " + p.steps).join("\n");
  return makeQ(QF, null, q, ans, steps, { kind: "fn", run: (check, qq) => parts.forEach((p, i) => {
    const [a, b, c] = p.g; check(p.ok((x) => a * x * x + b * x + c), "QF info part " + i, qq);
  }) });
}
function qfSketch(rng) {
  const n = rng.int(3, 4), parts = [];
  for (let i = 0; i < n; i++) {
    const a = rng.pick([1, 1, -1, -1, 2, -2]), b = rng.nonzero(-10, 10), c = rng.nonzero(-12, 12);
    parts.push({ a, b, c });
  }
  const q = parts.map((p, i) => partLabel(i) + " Sketch the quadratic function \\(y = " + polyIn("x", p.a, p.b, p.c) + "\\).").join("\n");
  const info = parts.map((p) => {
    const A = F(p.a), B = F(p.b), C = F(p.c), vt = vertexOf(A, B, C), D = p.b * p.b - 4 * p.a * p.c;
    let xint;
    if (D > 0) {
      const s = surd(F(1, 2 * Math.abs(p.a)), D);
      xint = isSquare(D) ? "\\(x = " + ftex(F(-p.b - Math.sqrt(D), 2 * p.a)) + "\\) and \\(x = " + ftex(F(-p.b + Math.sqrt(D), 2 * p.a)) + "\\)" : "\\(x = " + (vt.h.n === 0 ? "" : ftex(vt.h) + " ") + "\\pm " + surdTex(s) + "\\)";
    } else if (D === 0) xint = "\\(x = " + ftex(vt.h) + "\\) (touches the \\(x\\)-axis)"; else xint = "none (\\(\\Delta = " + D + " < 0\\))";
    return { vt, xint, D, text: (p.a > 0 ? "Opens upwards" : "Opens downwards") + "; vertex \\(" + ptTexL(vt.h, vt.k) + "\\); AOS \\(x = " + ftex(vt.h) + "\\); \\(y\\)-intercept \\(" + p.c + "\\); \\(x\\)-intercepts: " + xint };
  });
  const ans = info.map((x, i) => partLabel(i) + " " + x.text).join("\n");
  const steps = parts.map((p, i) => partLabel(i) + " \\(y = " + vForm(F(p.a), info[i].vt.h, info[i].vt.k) + "\\). \\(\\Delta = " + p.b + "^{2} - 4(" + p.a + ")(" + p.c + ") = " + info[i].D + "\\). Plot the vertex, the intercepts and use the axis of symmetry to draw the parabola.").join("\n");
  return makeQ(QF, null, q, ans, steps, { kind: "fn", run: (check, qq) => parts.forEach((p, i) => {
    const f = (x) => p.a * x * x + p.b * x + p.c, v = info[i].vt; check(Math.abs(f(fnum(v.h)) - fnum(v.k)) < 1e-9, "sketch vertex", qq);
    const roots = info[i].D >= 0 ? [(-p.b + Math.sqrt(info[i].D)) / (2 * p.a), (-p.b - Math.sqrt(info[i].D)) / (2 * p.a)] : [];
    roots.forEach((r) => check(Math.abs(f(r)) < 1e-9, "sketch root", qq));
  }) });
}
// sign-analysis statements about y = m(x-h)(x-k)
function qfSignStatements(rng) {
  const sa = rng.sign(), mag = rng.pick([1, 1, 2, 3]), cls = rng.pick(["opp", "pos", "neg"]);
  const STM = [
    { t: "The graph opens upwards.", v: () => sa > 0, n: (a) => a > 0 },
    { t: "The graph opens downwards.", v: () => sa < 0, n: (a) => a < 0 },
    { t: "The \\(y\\)-intercept of the graph is positive.", v: () => sa * (cls === "opp" ? -1 : 1) > 0, n: (a, h, k) => a * h * k > 0 },
    { t: "The \\(y\\)-intercept of the graph is negative.", v: () => sa * (cls === "opp" ? -1 : 1) < 0, n: (a, h, k) => a * h * k < 0 },
    { t: "The graph has two distinct \\(x\\)-intercepts.", v: () => true, n: (a, h, k) => h !== k },
    { t: "Both \\(x\\)-intercepts of the graph are positive.", v: () => cls === "pos", n: (a, h, k) => h > 0 && k > 0 },
    { t: "Both \\(x\\)-intercepts of the graph are negative.", v: () => cls === "neg", n: (a, h, k) => h < 0 && k < 0 },
    { t: "The two \\(x\\)-intercepts lie on opposite sides of the \\(y\\)-axis.", v: () => cls === "opp", n: (a, h, k) => h * k < 0 },
    { t: "The vertex of the graph lies above the \\(x\\)-axis.", v: () => sa < 0, n: (a, h, k) => -a * (h - k) ** 2 / 4 > 0 },
    { t: "The vertex of the graph lies below the \\(x\\)-axis.", v: () => sa > 0, n: (a, h, k) => -a * (h - k) ** 2 / 4 < 0 },
  ];
  if (cls !== "opp") { STM.push({ t: "The axis of symmetry lies on the right of the \\(y\\)-axis.", v: () => cls === "pos", n: (a, h, k) => (h + k) / 2 > 0 }, { t: "The axis of symmetry lies on the left of the \\(y\\)-axis.", v: () => cls === "neg", n: (a, h, k) => (h + k) / 2 < 0 }); }
  const trues = STM.filter((s) => s.v()), falses = STM.filter((s) => !s.v());
  const nTrue = rng.pick([1, 1, 2]);
  const pick = rng.shuffle(rng.sample(trues, Math.min(nTrue, trues.length)).concat(rng.sample(falses, 3 - Math.min(nTrue, trues.length))));
  if (pick.length !== 3) return null;
  const mask = pick.map((s) => s.v()), opt = statementOptions(rng, mask); if (!opt) return null;
  const cons = { opp: "\\(hk < 0\\)", pos: "\\(h > 0\\), \\(k > 0\\) and \\(h \\neq k\\)", neg: "\\(h < 0\\), \\(k < 0\\) and \\(h \\neq k\\)" }[cls];
  const eq = (sa < 0 ? "-" : "") + (mag === 1 ? "" : mag) + "(x - h)(x - k)";
  const q = "Let \\(h\\) and \\(k\\) be real constants such that " + cons + ". Which of the following statements about the graph of \\(y = " + eq + "\\) are true?\n" + ["I", "II", "III"].map((r, i) => r + ". " + pick[i].t).join("\n") + "\n" + opt.block;
  const steps = "The graph is \\(y = " + eq + "\\): the sign of the leading coefficient is " + (sa > 0 ? "positive" : "negative") + ", the \\(x\\)-intercepts are \\(h\\) and \\(k\\), and the \\(y\\)-intercept is \\(" + (sa < 0 ? "-" : "") + (mag === 1 ? "" : mag) + "hk\\)" + (cls === "opp" ? " (\\(hk < 0\\))" : " (\\(hk > 0\\))") + ". Checking the statements: " + pick.map((s, i) => ["I", "II", "III"][i] + " is " + (mask[i] ? "true" : "false")).join(", ") + " (" + opt.letter + ").";
  return makeQ(QF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => {
    const r = makeRng(7);
    for (let t = 0; t < 400; t++) {
      let h, k;
      if (cls === "opp") { h = (r.next() * 9 + 0.1) * (r.next() < 0.5 ? 1 : -1); k = -Math.sign(h) * (r.next() * 9 + 0.1); }
      else { const sg = cls === "pos" ? 1 : -1; h = sg * (r.next() * 9 + 0.1); k = sg * (r.next() * 9 + 0.1); if (Math.abs(h - k) < 1e-6) continue; }
      pick.forEach((s, i) => check(s.n(sa * mag, h, k) === mask[i], "QF sign statement " + i, qq));
    }
  } });
}
reg("core", "functions_and_graphs", QF, [
  ["direction of opening, y-intercept and axis of symmetry", 3, qfDirection],
  ["maximum / minimum point", 3, qfVertex],
  ["find the quadratic function from given information", 4, qfFromInfo],
  ["sketch a quadratic function (key features)", 2, qfSketch],
  ["MC: which statements about the graph are true (signs of constants)", 3, qfSignStatements],
]);

/* ---------- MC Questions related to Functions ---------- */
const MCF = "MC Questions related to Functions";
const polyTex = (p, v) => P.tex(p, v);
function perturb(rng, p) { // different polynomial with the same shape
  const q = p.map((c) => c);
  const i = rng.int(0, q.length - 1), d = rng.pick([1, -1, 2, -2, 3]);
  q[i] = fadd(q[i], F(d));
  if (rng.chance(0.4)) { const j = rng.int(0, q.length - 1); if (j !== i) q[j] = fneg(q[j]); }
  return P.make(q);
}
function polyOptions(rng, correct, v) {
  const wrongs = []; for (let i = 0; i < 12; i++) wrongs.push(polyTex(perturb(rng, correct), v));
  return mcBlock(rng, polyTex(correct, v), wrongs);
}
function mcfShift(rng) {
  const v = rng.pick(["m", "k", "\\beta", "t"]), a = rng.int(1, 4), b = rng.nonzero(-5, 5), c = rng.nonzero(-5, 5);
  const f = P.make([F(c), F(b), F(a)]);
  const s1 = rng.nonzero(-3, 3);
  let s2 = rng.nonzero(-3, 3); if (s2 === s1) s2 = -s1;
  const plus = rng.chance(0.4);
  const arg = (s) => terms([[1, v], [s, ""]]);
  const f1 = P.compose(f, P.make([F(s1), ONE])), f2 = P.compose(f, P.make([F(s2), ONE]));
  const res = plus ? P.add(f1, f2) : P.sub(f1, f2);
  if (res.length === 1 && res[0].n === 0) return null;
  const opt = polyOptions(rng, res, v); if (!opt) return null;
  const q = "Let \\(f(x) = " + polyIn("x", a, b, c) + "\\). If \\(" + v + "\\) is a constant, then \\(f(" + arg(s1) + ") " + (plus ? "+" : "-") + " f(" + arg(s2) + ") =\\)\n" + opt.block;
  const steps = "\\(f(" + arg(s1) + ") = " + polyTex(f1, v) + "\\) and \\(f(" + arg(s2) + ") = " + polyTex(f2, v) + "\\). Hence \\(f(" + arg(s1) + ") " + (plus ? "+" : "-") + " f(" + arg(s2) + ") = " + polyTex(res, v) + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => [-2, 0.5, 3].forEach((x) => { const F0 = (t) => a * t * t + b * t + c; const lhs = plus ? F0(x + s1) + F0(x + s2) : F0(x + s1) - F0(x + s2); check(Math.abs(lhs - fnum(P.evalAt(res, x))) < 1e-9, "MCF shift value", qq); }) });
}
function mcfSymmetricInC(rng) {
  const cubic = rng.chance(0.5), plus = rng.chance(0.7);
  // f(x) = x^3 + c x^2 + c   or   x^2 + c x + c ; evaluate at c and -c
  const cc = [ZERO, ONE]; // polynomial "c"
  const ev = (xp) => cubic ? P.add(P.add(P.pow(xp, 3), P.mul(cc, P.pow(xp, 2))), cc) : P.add(P.add(P.pow(xp, 2), P.mul(cc, xp)), cc);
  const a = ev(cc), b = ev(P.make([ZERO, F(-1)])), res = plus ? P.add(a, b) : P.sub(a, b);
  if (res.length === 1 && res[0].n === 0) return null;
  const opt = polyOptions(rng, res, "c"); if (!opt) return null;
  const q = "Let \\(f(x) = " + (cubic ? "x^{3} + cx^{2} + c" : "x^{2} + cx + c") + "\\). If \\(c\\) is a constant, then \\(f(c) " + (plus ? "+" : "-") + " f(-c) =\\)\n" + opt.block;
  const steps = "\\(f(c) = " + polyTex(a, "c") + "\\) and \\(f(-c) = " + polyTex(b, "c") + "\\), so \\(f(c) " + (plus ? "+" : "-") + " f(-c) = " + polyTex(res, "c") + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => [-2, 1.5, 3].forEach((c) => { const f = (x) => cubic ? x ** 3 + c * x * x + c : x * x + c * x + c; check(Math.abs((plus ? f(c) + f(-c) : f(c) - f(-c)) - fnum(P.evalAt(res, c))) < 1e-9, "MCF c value", qq); }) });
}
function mcfFindConstant(rng) {
  const a = rng.pick([1, 1, 2, 3]), b = rng.nonzero(-9, 9), k = rng.nonzero(-9, 9), p = rng.int(2, 6), S = 2 * a * p * p + 2 * k;
  const opt = mcBlock(rng, String(k), [String(-k), String(k + 1), String(k - 1), String(k + 3), String(S / 2), String(2 * k)].map(String));
  if (!opt) return null;
  const q = "Let \\(f(x) = " + terms([[a, "x^{2}"], [b, "x"], [1, "k"]]) + "\\) where \\(k\\) is a constant. If \\(f(" + p + ") + f(" + (-p) + ") = " + S + "\\), find \\(k\\).\n" + opt.block;
  const steps = "\\(f(" + p + ") + f(" + (-p) + ") = 2(" + a + ")(" + p + ")^{2} + 2k = " + (2 * a * p * p) + " + 2k = " + S + "\\), so \\(k = " + k + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => { const f = (x) => a * x * x + b * x + k; check(f(p) + f(-p) === S, "MCF find k", qq); } });
}
function mcfRelabel(rng) {
  if (rng.chance(0.5)) { // f(x+p) = g(x) -> f(x+q)
    const p = rng.nonzero(-3, 3); let q0 = rng.nonzero(-3, 3); if (q0 === p) q0 = p + 1;
    const g = P.make([F(rng.nonzero(-4, 4)), F(rng.nonzero(-5, 5)), F(rng.nonzero(-4, 4))]);
    const res = P.compose(g, P.make([F(q0 - p), ONE]));
    const opt = polyOptions(rng, res, "x"); if (!opt) return null;
    const arg = (s) => terms([[1, "x"], [s, ""]]);
    const q = "If \\(f(" + arg(p) + ") = " + polyTex(g, "x") + "\\), then \\(f(" + arg(q0) + ") =\\)\n" + opt.block;
    const steps = "Replace \\(x\\) by \\(x + " + par(q0 - p) + "\\): \\(f(" + arg(q0) + ") = f((x + " + par(q0 - p) + ") + " + par(p) + ") = " + polyTex(res, "x") + "\\) (" + opt.letter + ").";
    return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => { [-1, 2, 0.5].forEach((x) => { const fU = (u) => fnum(P.evalAt(g, u - p)); check(Math.abs(fU(x + q0) - fnum(P.evalAt(res, x))) < 1e-9, "MCF relabel", qq); }); } });
  }
  const a = rng.pick([2, 3, 4, -2]), b = rng.nonzero(-5, 5), c = rng.nonzero(-6, 6), d = rng.nonzero(-9, 9), x0 = rng.nonzero(-4, 6), v = a * x0 + b, val = c * x0 + d;
  const opt = mcBlock(rng, String(val), [String(c * v + d), String(v), String(val + c), String(val - c), String(-val)]);
  if (!opt) return null;
  const q = "If \\(f(" + terms([[a, "x"], [b, ""]]) + ") = " + terms([[c, "x"], [d, ""]]) + "\\), find \\(f(" + v + ")\\).\n" + opt.block;
  const steps = "Let \\(" + terms([[a, "x"], [b, ""]]) + " = " + v + "\\), so \\(x = " + x0 + "\\). Then \\(f(" + v + ") = " + c + "(" + x0 + ") " + sgnStr(d) + " " + Math.abs(d) + " = " + val + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => { check(a * x0 + b === v && c * x0 + d === val, "MCF f(ax+b)", qq); } });
}
function mcfOddPolynomial(rng) {
  const sets = [[7, 5, 1], [5, 3, 1], [3, 1], [5, 1], [7, 3]], pw = rng.pick(sets), letters = ["a", "b", "c"].slice(0, pw.length);
  const K = rng.nonzero(-12, 12), s = rng.int(2, 5), Vv = rng.nonzero(-60, 60);
  // f(x) = odd(x) - K  =>  f(s) + f(-s) = -2K  =>  f(s) = -2K - V
  const target = -2 * K - Vv;
  const text = terms(letters.map((l, i) => [1, l + (pw[i] === 1 ? "x" : "x^{" + pw[i] + "}")]).concat([[-K, ""]]));
  const opt = mcBlock(rng, String(target), [String(-target), String(Vv), String(-Vv), String(target + K), String(target - 2 * K), String(2 * K - Vv)]);
  if (!opt) return null;
  const q = "Let \\(f(x) = " + text + "\\), where \\(" + letters.join(", ") + "\\) are constants. If \\(f(" + (-s) + ") = " + Vv + "\\), find \\(f(" + s + ")\\).\n" + opt.block;
  const steps = "Let \\(g(x) = " + terms(letters.map((l, i) => [1, l + (pw[i] === 1 ? "x" : "x^{" + pw[i] + "}")])) + "\\), an odd function, so \\(g(-x) = -g(x)\\). Then \\(f(" + s + ") + f(" + (-s) + ") = g(" + s + ") + g(" + (-s) + ") - " + 2 * K + " = " + (-2 * K) + "\\), so \\(f(" + s + ") = " + (-2 * K) + " - " + par(Vv) + " = " + target + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => {
    const co = [3, -2, 5].slice(0, pw.length), g = (x) => co.reduce((sum, c, i) => sum + c * x ** pw[i], 0), f = (x) => g(x) - K;
    check(Math.abs(f(s) + f(-s) - (-2 * K)) < 1e-9, "MCF odd identity", qq);
  } });
}
function mcfFunctionalEq(rng) {
  const kind = rng.pick(["add", "mul", "mulx"]), b = rng.int(2, 5);
  let eq, given, ask, val, steps;
  if (kind === "add") { const n = rng.int(3, 7); eq = "f(x + y) = f(x) + f(y)"; given = "f(1) = " + b; ask = "f(" + n + ")"; val = n * b; steps = "\\(f(2) = f(1) + f(1) = " + 2 * b + "\\), and in general \\(f(n) = nf(1)\\), so \\(f(" + n + ") = " + val + "\\)."; }
  else if (kind === "mul") { const n = rng.int(3, 5); eq = "f(x + y) = f(x)f(y)"; given = "f(1) = " + b; ask = "f(" + n + ")"; val = Math.pow(b, n); steps = "\\(f(n) = [f(1)]^{n}\\), so \\(f(" + n + ") = " + b + "^{" + n + "} = " + val + "\\)."; }
  else { const j = rng.int(2, 4); eq = "f(xy) = f(x)f(y)"; given = "f(2) = " + b; ask = "f(" + Math.pow(2, j) + ")"; val = Math.pow(b, j); steps = "\\(f(2^{" + j + "}) = [f(2)]^{" + j + "} = " + b + "^{" + j + "} = " + val + "\\)."; }
  const opt = mcBlock(rng, String(val), [String(val + b), String(b * b), String(2 * val), String(val - 1), String(b + (ask.match(/\d+/)[0] | 0)), String(val + 2)]);
  if (!opt) return null;
  return makeQ(MCF, null, "[Challenging] Let \\(f(x)\\) be a function such that \\(" + eq + "\\) for all real numbers \\(x\\) and \\(y\\). If \\(" + given + "\\), find the value of \\(" + ask + "\\).\n" + opt.block, opt.letter, steps + " (" + opt.letter + ")");
}
function mcfProductForm(rng) { // g(x) = (x+p)(x+a), g(u) = g(v), find g(a)
  const p = rng.nonzero(-3, 3), u = rng.int(0, 4), v = rng.int(u + 1, u + 3), a = -(u + v + p), g = (x) => (x + p) * (x + a), val = g(a);
  const opt = mcBlock(rng, String(val), [String(g(-a)), String(g(0)), String(g(p)), String(g(-p)), String(g(u)), String(-val)]);
  if (!opt) return null;
  const q = "Let \\(g(x) = (" + terms([[1, "x"], [p, ""]]) + ")(x + a)\\), where \\(a\\) is a constant. If \\(g(" + u + ") = g(" + v + ")\\), then \\(g(a) =\\)\n" + opt.block;
  const steps = "\\(g(" + u + ") = g(" + v + ")\\) means the axis of symmetry is \\(x = \\frac{" + u + " + " + v + "}{2}\\), and the axis is also \\(x = -\\frac{" + p + " + a}{2}\\), so \\(a = " + a + "\\). Then \\(g(a) = g(" + a + ") = (" + (a + p) + ")(" + 2 * a + ") = " + val + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => { check(g(u) === g(v) && g(a) === val, "MCF g(a)", qq); } });
}
function mcfIdentityStatement(rng) {
  const a = rng.pick([1, 1, 2, 3]), s = rng.int(-3, 4), b = rng.chance(0.25) ? 0 : -a * s, c = rng.int(-4, 5);
  const f = P.make([F(c), F(b), F(a)]), k = P.make([ZERO, ONE]);
  const at = (lin) => P.compose(f, lin);
  const fk = at(k), f1 = P.evalAt(f, ONE);
  const fnn = (x) => a * x * x + b * x + c;
  const stm = [
    { t: "f(k) = f(-k)", ok: P.eq(fk, at(P.make([ZERO, F(-1)]))), l: (kv) => fnn(kv), r: (kv) => fnn(-kv) },
    { t: "f(k) = f(" + (s === 0 ? "" : s + " - ") + (s === 0 ? "-k" : "k") + ")", ok: P.eq(fk, at(P.make([F(s), F(-1)]))), l: (kv) => fnn(kv), r: (kv) => fnn(s - kv) },
    { t: "f(k) = f(" + (s + 1) + " - k)", ok: P.eq(fk, at(P.make([F(s + 1), F(-1)]))), l: (kv) => fnn(kv), r: (kv) => fnn(s + 1 - kv) },
    { t: "f(k + 1) = f(k) + f(1)", ok: P.eq(at(P.make([ONE, ONE])), P.add(fk, [f1])), l: (kv) => fnn(kv + 1), r: (kv) => fnn(kv) + fnn(1) },
    { t: "f(k - 1) = f(k) - f(1)", ok: P.eq(at(P.make([F(-1), ONE])), P.sub(fk, [f1])), l: (kv) => fnn(kv - 1), r: (kv) => fnn(kv) - fnn(1) },
    { t: "f(2k) = 2f(k)", ok: P.eq(at(P.make([ZERO, F(2)])), P.scale(fk, 2)), l: (kv) => fnn(2 * kv), r: (kv) => 2 * fnn(kv) },
    { t: "f(k) = f(-k) + f(0)", ok: P.eq(fk, P.add(at(P.make([ZERO, F(-1)])), [c === 0 ? ZERO : F(c)])), l: (kv) => fnn(kv), r: (kv) => fnn(-kv) + fnn(0) },
  ];
  const uniq = []; stm.forEach((x) => { if (!uniq.some((y) => y.t === x.t)) uniq.push(x); });
  const trues = uniq.filter((x) => x.ok), falses = uniq.filter((x) => !x.ok);
  if (trues.length < 1 || falses.length < 3) return null;
  const T = rng.pick(trues), chosen = rng.shuffle([T].concat(rng.sample(falses, 3)));
  const letters = ["A", "B", "C", "D"];
  const q = "Let \\(f(x) = " + polyIn("x", a, b, c) + "\\). If \\(k\\) is a constant, which of the following must be true?\n" + chosen.map((x, i) => letters[i] + ". \\(" + x.t + "\\)").join("\n");
  const L = letters[chosen.indexOf(T)];
  const steps = "Test each statement by substituting into \\(f(x) = " + polyIn("x", a, b, c) + "\\). \\(f(k) = " + polyTex(fk, "k") + "\\). The graph has axis of symmetry \\(x = " + ftex(F(-b, 2 * a)) + "\\), so only \\(" + T.t + "\\) holds for all \\(k\\) (" + L + ").";
  return makeQ(MCF, null, q, L, steps, { kind: "fn", run: (check, qq) => {
    check(chosen.filter((x) => x.ok).length === 1, "MCF exactly one true", qq);
    chosen.forEach((x) => { const num = [-2.5, -1, 0.5, 3, 7].every((kv) => Math.abs(x.l(kv) - x.r(kv)) < 1e-9); check(num === x.ok, "MCF statement truth " + x.t, qq); });
  } });
}
function mcfSymmetryParam(rng) { // f(x) = a x^2 - b x + c, f(x) = f(s - x) -> b
  const a = rng.int(2, 6), s = rng.int(1, 6), c = rng.int(1, 9), b = a * s;
  const opt = mcBlock(rng, String(b), [String(-b), String(2 * b), String(s), String(b / 2), String(b + a), String(a * s * s)].map((x) => String(x)));
  if (!opt) return null;
  const q = "Let \\(f(x) = " + terms([[a, "x^{2}"], [-1, "bx"], [c, ""]]) + "\\), where \\(b\\) is a constant. If \\(f(x) = f(" + s + " - x)\\), then \\(b =\\)\n" + opt.block;
  const steps = "\\(f(x) = f(" + s + " - x)\\) means the graph is symmetric about \\(x = \\frac{" + s + "}{2}\\). The axis of symmetry of \\(f\\) is \\(x = \\frac{b}{" + 2 * a + "}\\), so \\(\\frac{b}{" + 2 * a + "} = \\frac{" + s + "}{2}\\) and \\(b = " + b + "\\) (" + opt.letter + ").";
  return makeQ(MCF, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => { [-1.5, 0.3, 2].forEach((x) => check(Math.abs((a * x * x - b * x + c) - (a * (s - x) ** 2 - b * (s - x) + c)) < 1e-9, "MCF symmetry", qq)); } });
}
reg("core", "functions_and_graphs", MCF, [
  ["MC: f(m+p) ± f(m+q)", 3, mcfShift],
  ["MC: f(c) ± f(−c) with a parameter in f", 2, mcfSymmetricInC],
  ["MC: find a constant from f(p) + f(−p)", 2, mcfFindConstant],
  ["MC: f(x+p) = g(x) → f(x+q), and f(ax+b) = cx+d → f(v)", 3, mcfRelabel],
  ["MC: odd polynomial plus a constant", 2, mcfOddPolynomial],
  ["MC: functional equation f(x+y) = f(x)f(y) etc.", 2, mcfFunctionalEq],
  ["MC: g(u) = g(v) for g(x) = (x+p)(x+a)", 2, mcfProductForm],
  ["MC: which identity must be true", 2, mcfIdentityStatement],
  ["MC: f(x) = f(s − x) gives a constant", 2, mcfSymmetryParam],
]);

/* ---------- Applications of Completing Square ---------- */
const ACS = "Applications of Completing Square";
function acsOptimise(rng) {
  const v = rng.int(1, 5); let q, ans, steps, f, lo, hi, ext, sgn;
  if (v === 1) { // fencing against a wall
    const m = rng.int(5, 30), L = 4 * m;
    q = "A farmer has \\(" + L + "\\ m\\) of fencing to enclose a rectangular field. One side of the field lies along a straight wall, so no fencing is needed along the wall. Let the length of each of the two sides perpendicular to the wall be \\(x\\ m\\) and the area of the field be \\(A\\ m^{2}\\).\n(a) Express \\(A\\) in terms of \\(x\\).\n(b) Find the maximum area of the field and the value of \\(x\\) at which it occurs.";
    ans = "(a) \\(A = " + terms([[-2, "x^{2}"], [L, "x"]]) + "\\)\n(b) Maximum area \\(= " + 2 * m * m + "\\ m^{2}\\), when \\(x = " + m + "\\)";
    steps = "(a) The side parallel to the wall is \\(" + L + " - 2x\\), so \\(A = x(" + L + " - 2x) = " + terms([[-2, "x^{2}"], [L, "x"]]) + "\\).\n(b) \\(A = -2(x^{2} - " + 2 * m + "x) = -2(x - " + m + ")^{2} + " + 2 * m * m + "\\). The maximum area is \\(" + 2 * m * m + "\\ m^{2}\\) when \\(x = " + m + "\\).";
    f = (x) => -2 * x * x + L * x; lo = 0; hi = L / 2; ext = 2 * m * m; sgn = 1;
  } else if (v === 2) { // rectangle with fixed perimeter
    const m = rng.int(4, 25), Pm = 4 * m;
    q = "A rectangle has a perimeter of \\(" + Pm + "\\ cm\\). One of its sides is \\(x\\ cm\\) long and its area is \\(A\\ cm^{2}\\).\n(a) Express \\(A\\) in terms of \\(x\\).\n(b) Find the maximum area of the rectangle and the value of \\(x\\) at which it occurs.";
    ans = "(a) \\(A = " + terms([[-1, "x^{2}"], [2 * m, "x"]]) + "\\)\n(b) Maximum area \\(= " + m * m + "\\ cm^{2}\\), when \\(x = " + m + "\\)";
    steps = "(a) The other side is \\(" + 2 * m + " - x\\), so \\(A = x(" + 2 * m + " - x) = " + terms([[-1, "x^{2}"], [2 * m, "x"]]) + "\\).\n(b) \\(A = -(x - " + m + ")^{2} + " + m * m + "\\). The maximum area is \\(" + m * m + "\\ cm^{2}\\) when \\(x = " + m + "\\) (a square).";
    f = (x) => -x * x + 2 * m * x; lo = 0; hi = 2 * m; ext = m * m; sgn = 1;
  } else if (v === 3) { // revenue
    const b = rng.int(1, 5), ps = rng.int(5, 40), a = 2 * b * ps;
    q = "A shop sells \\(q\\) items per day when the price of each item is \\(\\$p\\), where \\(q = " + terms([[1, "" + a], [-b, "p"]]).replace(/^1/, a) + "\\). The daily revenue is \\(\\$R\\).\n(a) Express \\(R\\) in terms of \\(p\\).\n(b) Find the price that gives the maximum daily revenue, and the maximum daily revenue.";
    ans = "(a) \\(R = " + terms([[-b, "p^{2}"], [a, "p"]]) + "\\)\n(b) Price \\(= \\$" + ps + "\\), maximum revenue \\(= \\$" + b * ps * ps + "\\)";
    steps = "(a) \\(R = pq = p(" + a + " - " + (b === 1 ? "" : b) + "p) = " + terms([[-b, "p^{2}"], [a, "p"]]) + "\\).\n(b) \\(R = " + (b === 1 ? "-" : "-" + b) + "(p - " + ps + ")^{2} + " + b * ps * ps + "\\). The maximum revenue is \\(\\$" + b * ps * ps + "\\) when \\(p = " + ps + "\\).";
    f = (x) => -b * x * x + a * x; lo = 0; hi = a / b; ext = b * ps * ps; sgn = 1;
  } else if (v === 4) { // projectile
    const w = rng.int(1, 6), h0 = rng.int(0, 20), vv = 10 * w;
    q = "A ball is thrown upward from a point \\(" + h0 + "\\ m\\) above the ground. Its height above the ground after \\(t\\) seconds is \\(h\\ m\\), where \\(h = " + terms([[h0, ""], [vv, "t"], [-5, "t^{2}"]]) + "\\).\n(a) Express \\(h\\) in the form \\(a(t - p)^{2} + q\\).\n(b) Find the maximum height of the ball and the time at which it is reached.";
    ans = "(a) \\(h = -5(t - " + w + ")^{2} + " + (h0 + 5 * w * w) + "\\)\n(b) Maximum height \\(= " + (h0 + 5 * w * w) + "\\ m\\), after \\(" + w + "\\) seconds";
    steps = "(a) \\(h = -5(t^{2} - " + 2 * w + "t)" + (h0 ? " + " + h0 : "") + " = -5(t - " + w + ")^{2} + 5(" + w + ")^{2}" + (h0 ? " + " + h0 : "") + " = -5(t - " + w + ")^{2} + " + (h0 + 5 * w * w) + "\\).\n(b) The maximum height is \\(" + (h0 + 5 * w * w) + "\\ m\\) when \\(t = " + w + "\\).";
    f = (x) => h0 + vv * x - 5 * x * x; lo = 0; hi = 2 * w; ext = h0 + 5 * w * w; sgn = 1;
  } else { // two squares from a wire
    const s = rng.int(2, 8), L = 8 * s;
    q = "A wire of length \\(" + L + "\\ cm\\) is cut into two pieces. Each piece is bent to form a square. Let the length of one piece be \\(x\\ cm\\) and the total area of the two squares be \\(S\\ cm^{2}\\).\n(a) Express \\(S\\) in terms of \\(x\\).\n(b) Find the minimum value of \\(S\\) and the value of \\(x\\) at which it occurs.";
    ans = "(a) \\(S = " + terms([[F(1, 8), "x^{2}"], [-s, "x"], [4 * s * s, ""]]) + "\\)\n(b) Minimum \\(S = " + 2 * s * s + "\\ cm^{2}\\), when \\(x = " + 4 * s + "\\)";
    steps = "(a) The squares have sides \\(\\frac{x}{4}\\) and \\(\\frac{" + L + " - x}{4}\\), so \\(S = \\frac{x^{2} + (" + L + " - x)^{2}}{16} = " + terms([[F(1, 8), "x^{2}"], [-s, "x"], [4 * s * s, ""]]) + "\\).\n(b) \\(S = \\frac{1}{8}(x - " + 4 * s + ")^{2} + " + 2 * s * s + "\\). The minimum value of \\(S\\) is \\(" + 2 * s * s + "\\ cm^{2}\\) when \\(x = " + 4 * s + "\\).";
    f = (x) => (x * x + (L - x) ** 2) / 16; lo = 0; hi = L; ext = 2 * s * s; sgn = -1;
  }
  return makeQ(ACS, null, "[Level 1]\n" + q, ans, steps, { kind: "fn", run: (check, qq) => {
    let best = sgn > 0 ? -Infinity : Infinity; for (let x = lo; x <= hi + 1e-9; x += (hi - lo) / 4000) best = sgn > 0 ? Math.max(best, f(x)) : Math.min(best, f(x));
    check(Math.abs(best - ext) < 1e-3 * (1 + Math.abs(ext)), "ACS extreme " + best + " vs " + ext, qq);
  } });
}
function acsVertexLocus(rng) {
  const aa = rng.pick([-3, -2, -1, 1, 2, 3]), mm = rng.nonzero(-3, 3), cc = rng.nonzero(-9, 9), dd = rng.nonzero(-9, 9), Kc = cc - aa * mm * mm;
  if (Kc === 0) return null;
  const fx = terms([[aa, "x^{2}"], [2 * aa * mm, "kx"], [cc, "k^{2}"], [dd, ""]]);
  const vy = terms([[Kc, "k^{2}"], [dd, ""]]), vx = terms([[-mm, "k"]]);
  const locus = terms([[F(Kc, mm * mm), "x^{2}"], [dd, ""]]);
  const q = "[Level 2]\nLet \\(f(x) = " + fx + "\\), where \\(k\\) is a real constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(V\\).\n(a) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(b) As \\(k\\) varies, \\(V\\) moves along a curve. Find the equation of this curve.";
  const ans = "(a) \\(V = (" + vx + "," + vy + ")\\)\n(b) \\(y = " + locus + "\\)";
  const steps = "(a) \\(f(x) = " + coefStr(aa) + "\\left[(x " + (mm < 0 ? "-" : "+") + " " + (Math.abs(mm) === 1 ? "" : Math.abs(mm)) + "k)^{2} - " + mm * mm + "k^{2}\\right]" + joinSigned(terms([[cc, "k^{2}"], [dd, ""]])) + " = " + coefStr(aa) + "(x " + (mm < 0 ? "-" : "+") + " " + (Math.abs(mm) === 1 ? "" : Math.abs(mm)) + "k)^{2}" + joinSigned(vy) + "\\). So \\(V = (" + vx + "," + vy + ")\\).\n(b) Let \\(x = " + vx + "\\), then \\(k = " + ftex(F(-1, mm)) + "x\\) and \\(y = " + Kc + "k^{2} + " + par(dd) + " = " + locus + "\\).";
  return makeQ(ACS, null, q, ans, steps, { kind: "fn", run: (check, qq) => [-2, 0.7, 3].forEach((k) => {
    const f = (x) => aa * x * x + 2 * aa * mm * k * x + cc * k * k + dd, vxN = -mm * k, vyN = Kc * k * k + dd;
    check(Math.abs(f(vxN) - vyN) < 1e-9 && Math.abs(f(vxN + 0.01) - f(vxN - 0.01)) < 1e-9, "ACS vertex", qq);
    check(Math.abs(vyN - ((Kc / (mm * mm)) * vxN * vxN + dd)) < 1e-9, "ACS locus", qq);
  }) });
}
function acsVertexIntercept(rng) {
  const a = rng.nonzero(-3, 3), al = rng.int(-6, 4), be = al + 2 * rng.int(1, 4), h = (al + be) / 2, d = (be - al) / 2, k = -a * d * d, c = a * al * be;
  if (h === 0 || al === 0 || be === 0) return null;
  const area = fmul(F(1, 2), fabs(fadd(fadd(fmul(F(h), F(-c)), fmul(F(0), F(0))), fadd(fmul(F(0 - be), F(k)), fmul(F(be), F(c)))))) ;
  // shoelace for V(h,k), A(0,c), C(be,0): 1/2 |h(c-0) + 0(0-k) + be(k-c)|
  const sh = fmul(F(1, 2), fabs(F(h * c + be * (k - c))));
  const q = "[Level 2]\nThe vertex of the parabola \\(y = f(x)\\) is \\(V(" + h + "," + k + ")\\) and \\(y = f(x)\\) cuts the \\(y\\)-axis at \\(A(0," + c + ")\\). The parabola cuts the \\(x\\)-axis at two points \\(B(\\alpha,0)\\) and \\(C(\\beta,0)\\), where \\(\\alpha < \\beta\\).\n(a) Find \\(f(x)\\).\n(b) Find the values of \\(\\alpha\\) and \\(\\beta\\).\n(c) Find the area of \\(\\bigtriangleup VAC\\).";
  const ans = "(a) \\(f(x) = " + vForm(F(a), F(h), F(k)) + "\\)\n(b) \\(\\alpha = " + al + "\\), \\(\\beta = " + be + "\\)\n(c) \\(" + ftex(sh) + "\\) square units";
  const steps = "(a) Let \\(f(x) = a(x " + (h < 0 ? "+" : "-") + " " + Math.abs(h) + ")^{2} + " + par(k) + "\\). Substituting \\((0," + c + ")\\): \\(" + c + " = " + terms([[h * h, "a"], [k, ""]]) + "\\), so \\(a = " + a + "\\).\n(b) \\(f(x) = 0\\): \\((x " + (h < 0 ? "+" : "-") + " " + Math.abs(h) + ")^{2} = " + d * d + "\\), so \\(x = " + al + "\\) or \\(" + be + "\\).\n(c) \\(V(" + h + "," + k + ")\\), \\(A(0," + c + ")\\), \\(C(" + be + ",0)\\). Area \\(= \\frac{1}{2}|" + par(h) + "(" + par(c) + " - 0) + 0(0 - " + par(k) + ") + " + par(be) + "(" + par(k) + " - " + par(c) + ")| = " + ftex(sh) + "\\).";
  return makeQ(ACS, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    const f = (x) => a * (x - h) ** 2 + k; check(f(0) === c && f(al) === 0 && f(be) === 0, "ACS vertex/intercept", qq);
    const tri = Math.abs((0 - h) * (0 - k) - (be - h) * (c - k)) / 2; check(Math.abs(tri - fnum(sh)) < 1e-9, "ACS area", qq);
  } });
}
function acsAxisIntercept(rng) {
  const a = rng.nonzero(-3, 3), al = rng.nonzero(-6, 6), be = rng.nonzero(-6, 6);
  if (al === be) return null;
  const h = F(al + be, 2), c = a * al * be, vk = a * (fnum(h) - al) * (fnum(h) - be), vkF = fmul(F(a), fmul(fsub(h, F(al)), fsub(h, F(be))));
  const q = "[Level 1]\nThe graph of a quadratic function \\(y = f(x)\\) cuts the \\(x\\)-axis at \\(A(" + al + ",0)\\) and \\(B\\). It is given that \\(x = " + fdec(h) + "\\) is the axis of symmetry of the graph.\n(a) Find the coordinates of \\(B\\).\n(b) If the \\(y\\)-intercept of the graph is \\(" + c + "\\), find \\(f(x)\\).\n(c) Find the coordinates of the vertex of the graph.";
  const ans = "(a) \\(B = (" + be + ",0)\\)\n(b) \\(f(x) = " + fForm(F(a), F(al), F(be)) + "\\)\n(c) Vertex \\(= " + ptTexL(h, vkF) + "\\)";
  const steps = "(a) \\(A\\) and \\(B\\) are symmetric about \\(x = " + fdec(h) + "\\), so the \\(x\\)-coordinate of \\(B\\) is \\(2(" + fdec(h) + ") - " + par(al) + " = " + be + "\\).\n(b) Let \\(f(x) = a(x " + (al < 0 ? "+" : "-") + " " + Math.abs(al) + ")(x " + (be < 0 ? "+" : "-") + " " + Math.abs(be) + ")\\). Substituting \\((0," + c + ")\\): \\(" + c + " = a(" + -al + ")(" + -be + ")\\), so \\(a = " + a + "\\).\n(c) At \\(x = " + fdec(h) + "\\): \\(f = " + ftex(vkF) + "\\), so the vertex is \\(" + ptTexL(h, vkF) + "\\).";
  return makeQ(ACS, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    const f = (x) => a * (x - al) * (x - be); check(f(0) === c && Math.abs(f(fnum(h)) - fnum(vkF)) < 1e-9 && Math.abs(f(fnum(h) + 1) - f(fnum(h) - 1)) < 1e-9, "ACS axis intercept", qq);
  } });
}
reg("core", "functions_and_graphs", ACS, [
  ["optimisation word problem: express in x, then complete the square", 5, acsOptimise],
  ["vertex in terms of k and the curve traced by the vertex", 3, acsVertexLocus],
  ["vertex and y-intercept: f(x), x-intercepts, area of a triangle", 3, acsVertexIntercept],
  ["axis of symmetry, one x-intercept and the y-intercept", 3, acsAxisIntercept],
]);

/* ---------- triangle centres ---------- */
const mkpt = (x, y) => ({ x: toF(x), y: toF(y) });
const ptS = (p) => "(" + ftex(p.x) + "," + ftex(p.y) + ")";
const ptDec = (p) => "(" + fdec(p.x) + "," + fdec(p.y) + ")";
function triCentroid(A, B, C) { return mkpt(fdiv(fadd(fadd(A.x, B.x), C.x), F(3)), fdiv(fadd(fadd(A.y, B.y), C.y), F(3))); }
function triCircum(A, B, C) {
  const sq = (p) => fadd(fsq(p.x), fsq(p.y));
  const D = fmul(F(2), fadd(fadd(fmul(A.x, fsub(B.y, C.y)), fmul(B.x, fsub(C.y, A.y))), fmul(C.x, fsub(A.y, B.y))));
  if (D.n === 0) return null;
  const ux = fdiv(fadd(fadd(fmul(sq(A), fsub(B.y, C.y)), fmul(sq(B), fsub(C.y, A.y))), fmul(sq(C), fsub(A.y, B.y))), D);
  const uy = fdiv(fadd(fadd(fmul(sq(A), fsub(C.x, B.x)), fmul(sq(B), fsub(A.x, C.x))), fmul(sq(C), fsub(B.x, A.x))), D);
  return mkpt(ux, uy);
}
function triOrtho(A, B, C) { const U = triCircum(A, B, C); if (!U) return null; return mkpt(fsub(fadd(fadd(A.x, B.x), C.x), fmul(F(2), U.x)), fsub(fadd(fadd(A.y, B.y), C.y), fmul(F(2), U.y))); }
const CTT = "Centers of Triangle", CGT = "Coordinate Geometry & Special Lines and Centers";
const lin2 = (a, b, r) => terms([[a, "x"], [b, "y"]]) + " = " + ftex(r);

function ctParabolaCentroid(rng) {
  const a = rng.pick([1, 2, 3]), m = rng.pick([1, 2, 3]);
  let s, t, k0, G = null;
  for (let tries = 0; tries < 60 && !G; tries++) {
    s = rng.nonzero(-3, 3); t = rng.nonzero(-5, 5); k0 = rng.int(2, 7);
    const g = F((2 * s + 1) * k0 + 2 * t, 3); if (fisInt(g) && g.n > 0) G = g;
  }
  if (!G) return null;
  const fx = terms([[a, "x^{2}"], [2 * a * m, "kx"], [a * m * m, "k^{2}"], [s, "k"], [t, ""]]);
  const Py = (k) => s * k + t, Qy = (k) => s * k + t + k;
  const Px = -m * k0, Qx = m * k0, yP = Py(k0), yQ = Qy(k0);
  const area = fmul(F(1, 2), fabs(F(Px * yQ - Qx * yP)));
  const q = "[Level 2 – Centroid]\nLet \\(f(x) = " + fx + "\\), where \\(k > 0\\). Denote the coordinates of the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(b) In a rectangular coordinate system, the point \\(Q\\) is formed by reflecting \\(P\\) in the \\(y\\)-axis and then translating upward by \\(k\\) units. Denote the origin by \\(O\\). (i) Write down the coordinates of \\(Q\\). (ii) It is given that the \\(y\\)-coordinate of the centroid of \\(\\bigtriangleup OPQ\\) is \\(" + G.n + "\\). Find the area of \\(\\bigtriangleup OPQ\\).";
  const Pt = "(" + terms([[-m, "k"]]) + "," + terms([[s, "k"], [t, ""]]) + ")", Qt = "(" + terms([[m, "k"]]) + "," + terms([[s + 1, "k"], [t, ""]]) + ")";
  const ans = "(a) \\(P = " + Pt + "\\)\n(b)(i) \\(Q = " + Qt + "\\)\n(b)(ii) Area of \\(\\bigtriangleup OPQ = " + ftex(area) + "\\)";
  const steps = "(a) \\(f(x) = " + coefStr(a) + "(x + " + (m === 1 ? "" : m) + "k)^{2}" + joinSigned(terms([[s, "k"], [t, ""]])) + "\\). So \\(P = " + Pt + "\\).\n(b) (i) \\(Q = " + Qt + "\\). (ii) \\(\\frac{0 + (" + terms([[s, "k"], [t, ""]]) + ") + (" + terms([[s + 1, "k"], [t, ""]]) + ")}{3} = " + G.n + "\\Rightarrow " + terms([[2 * s + 1, "k"], [2 * t, ""]]) + " = " + 3 * G.n + "\\Rightarrow k = " + k0 + "\\). " +
    "\\(P(" + Px + "," + yP + ")\\), \\(Q(" + Qx + "," + yQ + ")\\). Area \\(= \\frac{1}{2}|(" + Px + ")(" + yQ + ") - (" + Qx + ")(" + yP + ")| = " + ftex(area) + "\\).";
  return makeQ(CTT, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    const f = (x) => a * x * x + 2 * a * m * k0 * x + a * m * m * k0 * k0 + s * k0 + t;
    check(Math.abs(f(Px) - yP) < 1e-9 && Math.abs(f(Px + 0.1) - f(Px - 0.1)) < 1e-9, "CT parabola vertex", qq);
    check(Math.abs((0 + yP + yQ) / 3 - G.n) < 1e-9, "CT centroid", qq);
  } });
}
function ctSpecialPoints(rng) {
  for (let t = 0; t < 200; t++) {
    const A = mkpt(rng.int(-6, 6), rng.int(-6, 6)), B = mkpt(rng.int(-6, 6), rng.int(-6, 6)), C = mkpt(rng.int(-6, 6), rng.int(-6, 6));
    const U = triCircum(A, B, C); if (!U) continue;
    const G = triCentroid(A, B, C), H = triOrtho(A, B, C);
    const euler = rng.chance(0.4) && !(feq(U.x, G.x) && feq(U.y, G.y));
    const sq = (p) => fadd(fsq(p.x), fsq(p.y));
    const l1 = [fmul(F(2), fsub(B.x, A.x)), fmul(F(2), fsub(B.y, A.y)), fsub(sq(B), sq(A))], l2 = [fmul(F(2), fsub(C.x, A.x)), fmul(F(2), fsub(C.y, A.y)), fsub(sq(C), sq(A))];
    const al1 = [fsub(C.x, B.x), fsub(C.y, B.y), fadd(fmul(fsub(C.x, B.x), A.x), fmul(fsub(C.y, B.y), A.y))], al2 = [fsub(C.x, A.x), fsub(C.y, A.y), fadd(fmul(fsub(C.x, A.x), B.x), fmul(fsub(C.y, A.y), B.y))];
    const q = "[Level 2]\nThe vertices of \\(\\bigtriangleup ABC\\) are \\(A" + ptS(A) + "\\), \\(B" + ptS(B) + "\\) and \\(C" + ptS(C) + "\\).\n(a) Find the coordinates of the centroid of \\(\\bigtriangleup ABC\\).\n(b) Find the coordinates of the orthocentre of \\(\\bigtriangleup ABC\\).\n(c) Find the coordinates of the circumcentre of \\(\\bigtriangleup ABC\\)." + (euler ? "\n(d) Show that the centroid, the orthocentre and the circumcentre are collinear, and find the ratio of the distance from the circumcentre to the centroid to the distance from the centroid to the orthocentre." : "");
    const ans = "(a) \\(" + ptS(G) + "\\)\n(b) \\(" + ptS(H) + "\\)\n(c) \\(" + ptS(U) + "\\)" + (euler ? "\n(d) The three points lie on a straight line; circumcentre to centroid : centroid to orthocentre \\(= 1 : 2\\)." : "");
    const steps = "(a) Centroid \\(= \\left(\\frac{x_{1} + x_{2} + x_{3}}{3},\\frac{y_{1} + y_{2} + y_{3}}{3}\\right) = " + ptS(G) + "\\).\n" +
      "(b) The altitude from \\(A\\) is perpendicular to \\(BC\\): \\(" + lin2(al1[0], al1[1], al1[2]) + "\\). The altitude from \\(B\\) is perpendicular to \\(AC\\): \\(" + lin2(al2[0], al2[1], al2[2]) + "\\). Solving, the orthocentre is \\(" + ptS(H) + "\\).\n" +
      "(c) The circumcentre is equidistant from the vertices: from \\(OA = OB\\), \\(" + lin2(l1[0], l1[1], l1[2]) + "\\); from \\(OA = OC\\), \\(" + lin2(l2[0], l2[1], l2[2]) + "\\). Solving, the circumcentre is \\(" + ptS(U) + "\\)." +
      (euler ? "\n(d) Circumcentre \\(" + ptS(U) + "\\), centroid \\(" + ptS(G) + "\\), orthocentre \\(" + ptS(H) + "\\). The vector from the circumcentre to the centroid is \\((" + ftex(fsub(G.x, U.x)) + "," + ftex(fsub(G.y, U.y)) + ")\\) and from the centroid to the orthocentre is \\((" + ftex(fsub(H.x, G.x)) + "," + ftex(fsub(H.y, G.y)) + ")\\), which is twice as long and in the same direction, so the points are collinear and the ratio is \\(1 : 2\\)." : "");
    return makeQ(CTT, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
      const N = (p) => [fnum(p.x), fnum(p.y)], [ax, ay] = N(A), [bx, by] = N(B), [cx0, cy0] = N(C), [ux, uy] = N(U), [hx, hy] = N(H), [gx, gy] = N(G);
      const d = (x1, y1, x2, y2) => Math.hypot(x1 - x2, y1 - y2);
      check(Math.abs(d(ux, uy, ax, ay) - d(ux, uy, bx, by)) < 1e-9 && Math.abs(d(ux, uy, ax, ay) - d(ux, uy, cx0, cy0)) < 1e-9, "CT circumcentre equidistant", qq);
      check(Math.abs((hx - ax) * (cx0 - bx) + (hy - ay) * (cy0 - by)) < 1e-9 && Math.abs((hx - bx) * (cx0 - ax) + (hy - by) * (cy0 - ay)) < 1e-9, "CT orthocentre perpendicular", qq);
      check(Math.abs(gx - (ax + bx + cx0) / 3) < 1e-12 && Math.abs((hx - gx) - 2 * (gx - ux)) < 1e-9 && Math.abs((hy - gy) - 2 * (gy - uy)) < 1e-9, "CT centroid/Euler", qq);
    } });
  }
  return null;
}
function ctRightTriangle(rng) {
  const [p0, q0, h] = rng.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [9, 12, 15], [12, 16, 20], [10, 24, 26]]), sw = rng.chance(0.5), p = sw ? q0 : p0, qv = sw ? p0 : q0, r = (p + qv - h) / 2;
  const q = "[Level 2]\nLet \\(O\\) be the origin. The coordinates of the points \\(P\\) and \\(Q\\) are \\((" + p + ",0)\\) and \\((0," + qv + ")\\) respectively. Find the coordinates of the\n(a) centroid, (b) orthocentre, (c) circumcentre, (d) in-centre\nof \\(\\bigtriangleup OPQ\\).";
  const ans = "(a) \\(" + ptDec(triCentroid(mkpt(0, 0), mkpt(p, 0), mkpt(0, qv))) + "\\)\n(b) \\((0,0)\\)\n(c) \\((" + fdec(F(p, 2)) + "," + fdec(F(qv, 2)) + ")\\)\n(d) \\((" + r + "," + r + ")\\)";
  const steps = "(a) Centroid \\(= \\left(\\frac{0 + " + p + " + 0}{3},\\frac{0 + 0 + " + qv + "}{3}\\right)\\).\n(b) The triangle is right-angled at \\(O\\), so the orthocentre is \\(O(0,0)\\).\n(c) The circumcentre of a right-angled triangle is the mid-point of the hypotenuse \\(PQ\\): \\((" + fdec(F(p, 2)) + "," + fdec(F(qv, 2)) + ")\\).\n(d) \\(PQ = \\sqrt{" + p + "^{2} + " + qv + "^{2}} = " + h + "\\). The in-radius is \\(r = \\frac{" + p + " + " + qv + " - " + h + "}{2} = " + r + "\\), so the in-centre is \\((" + r + "," + r + ")\\).";
  return makeQ(CTT, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    check(h * h === p * p + qv * qv, "CT right triangle", qq);
    // in-centre = (|PQ|*O + |OQ|*P + |OP|*Q) / perimeter
    const per = p + qv + h, incx = (qv * p) / per, incy = (p * qv) / per;
    check(Math.abs(incx - r) < 1e-9 && Math.abs(incy - r) < 1e-9, "CT incentre", qq);
  } });
}
reg("core", "functions_and_graphs", CTT, [
  ["parabola vertex with k, then centroid and area", 3, ctParabolaCentroid],
  ["centroid, orthocentre and circumcentre of a given triangle", 4, ctSpecialPoints],
  ["right-angled triangle OPQ: four centres (including in-centre)", 3, ctRightTriangle],
]);

/* ---------- Coordinate Geometry & Special Lines and Centers ---------- */
function cgDistanceEtc(rng) {
  const n = rng.int(2, 3), ratios = [[3, 1], [1, 3], [2, 1], [1, 2], [3, 2], [2, 3], [4, 1], [1, 4]], [m1, n1] = rng.pick(ratios), parts = [];
  while (parts.length < n) {
    const A = mkpt(rng.int(-9, 9), rng.int(-9, 9)), B = mkpt(rng.int(-9, 9), rng.int(-9, 9));
    if (feq(A.x, B.x) || feq(A.y, B.y)) continue; // keep the slope defined and non-zero
    parts.push({ A, B });
  }
  const lines = parts.map((p, i) => String.fromCharCode(97 + i) + ") \\(A = " + ptS(p.A) + ";B = " + ptS(p.B) + "\\)");
  const res = parts.map((p) => {
    const dx = fsub(p.B.x, p.A.x), dy = fsub(p.B.y, p.A.y), d2 = fadd(fsq(dx), fsq(dy)).n, dist = surd(ONE, d2), slope = fdiv(dy, dx);
    const mid = mkpt(fdiv(fadd(p.A.x, p.B.x), F(2)), fdiv(fadd(p.A.y, p.B.y), F(2)));
    const div = mkpt(fdiv(fadd(fmul(F(n1), p.A.x), fmul(F(m1), p.B.x)), F(m1 + n1)), fdiv(fadd(fmul(F(n1), p.A.y), fmul(F(m1), p.B.y)), F(m1 + n1)));
    return { d2, dist, slope, mid, div };
  });
  const q = "Find the distance, slope, coordinates of mid-point and coordinates of the point which divides \\(AB\\) into ratio of \\(" + m1 + ":" + n1 + "\\) of the following coordinates \\(A\\) and \\(B\\).\n" + lines.join("\n");
  const ans = res.map((r, i) => partLabel(i) + " Distance \\(= " + surdTex(r.dist) + "\\), slope \\(= " + ftex(r.slope) + "\\), mid-point \\(= " + ptDec(r.mid) + "\\), dividing point \\(= " + ptDec(r.div) + "\\)").join("\n");
  const steps = parts.map((p, i) => { const r = res[i]; return partLabel(i) + " Distance \\(= \\sqrt{(" + ftex(p.B.x) + " - " + par(p.A.x) + ")^{2} + (" + ftex(p.B.y) + " - " + par(p.A.y) + ")^{2}} = \\sqrt{" + r.d2 + "} = " + surdTex(r.dist) + "\\); slope \\(= \\frac{" + ftex(p.B.y) + " - " + par(p.A.y) + "}{" + ftex(p.B.x) + " - " + par(p.A.x) + "} = " + ftex(r.slope) + "\\); mid-point \\(= \\left(\\frac{" + ftex(p.A.x) + " + " + par(p.B.x) + "}{2},\\frac{" + ftex(p.A.y) + " + " + par(p.B.y) + "}{2}\\right) = " + ptDec(r.mid) + "\\); the point dividing \\(AB\\) in the ratio \\(" + m1 + ":" + n1 + "\\) \\(= \\left(\\frac{" + n1 + "(" + ftex(p.A.x) + ") + " + m1 + "(" + ftex(p.B.x) + ")}{" + (m1 + n1) + "},\\frac{" + n1 + "(" + ftex(p.A.y) + ") + " + m1 + "(" + ftex(p.B.y) + ")}{" + (m1 + n1) + "}\\right) = " + ptDec(r.div) + "\\)."; }).join("\n");
  return makeQ(CGT, null, q, ans, steps, { kind: "fn", run: (check, qq) => parts.forEach((p, i) => {
    const a = [fnum(p.A.x), fnum(p.A.y)], b = [fnum(p.B.x), fnum(p.B.y)], r = res[i];
    check(Math.abs(Math.hypot(b[0] - a[0], b[1] - a[1]) - fnum(r.dist.c) * Math.sqrt(r.dist.n)) < 1e-9, "CG distance", qq);
    check(Math.abs((b[1] - a[1]) / (b[0] - a[0]) - fnum(r.slope)) < 1e-12, "CG slope", qq);
    const t = m1 / (m1 + n1); check(Math.abs(a[0] + t * (b[0] - a[0]) - fnum(r.div.x)) < 1e-9 && Math.abs(a[1] + t * (b[1] - a[1]) - fnum(r.div.y)) < 1e-9, "CG dividing point", qq);
    check(Math.abs((a[0] + b[0]) / 2 - fnum(r.mid.x)) < 1e-12, "CG midpoint", qq);
  }) });
}
function cgCentroidMC(rng) {
  const A = mkpt(rng.int(-9, 9), rng.int(-9, 9)), B = mkpt(rng.int(-9, 9), rng.int(-9, 9)), G = mkpt(rng.int(-9, 9), rng.int(-9, 9));
  const C = mkpt(3 * G.x.n - A.x.n - B.x.n, 3 * G.y.n - A.y.n - B.y.n);
  if (triCircum(A, B, C) === null) return null;
  const P3 = (x, y) => "(" + x + "," + y + ")", gx = G.x.n, gy = G.y.n;
  const correct = P3(C.x.n, C.y.n);
  const opt = mcBlock(rng, correct, [P3(3 * gx - A.x.n + B.x.n, 3 * gy - A.y.n + B.y.n), P3(gx - A.x.n - B.x.n, gy - A.y.n - B.y.n), P3(3 * gx + A.x.n + B.x.n, 3 * gy + A.y.n + B.y.n), P3(3 * gx - A.x.n - B.x.n + 1, 3 * gy - A.y.n - B.y.n), P3(C.y.n, C.x.n), P3(-C.x.n, -C.y.n)]);
  if (!opt) return null;
  const q = "The vertices of \\(\\bigtriangleup ABC\\) are \\(A" + ptS(A) + "\\), \\(B" + ptS(B) + "\\) and \\(C(a,b)\\). If the centroid of \\(\\bigtriangleup ABC\\) is \\(P(" + gx + "," + gy + ")\\), find the coordinates of \\(C\\).\n" + opt.block;
  const steps = "\\(\\frac{" + ftex(A.x) + " + " + par(B.x) + " + a}{3} = " + gx + "\\Rightarrow a = " + C.x.n + "\\); \\(\\frac{" + ftex(A.y) + " + " + par(B.y) + " + b}{3} = " + gy + "\\Rightarrow b = " + C.y.n + "\\) (" + opt.letter + ").";
  return makeQ(CGT, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => { check(Math.abs((A.x.n + B.x.n + C.x.n) / 3 - gx) < 1e-9 && Math.abs((A.y.n + B.y.n + C.y.n) / 3 - gy) < 1e-9, "CG centroid C", qq); } });
}
function cgOrthoMC(rng) {
  for (let t = 0; t < 4000; t++) {
    const P0 = mkpt(rng.int(-30, 30), rng.int(-30, 30)), Q0 = mkpt(rng.int(-30, 30), rng.int(-30, 30)), O = mkpt(0, 0);
    const H = triOrtho(O, P0, Q0); if (!H || !fisInt(H.x) || !fisInt(H.y)) continue;
    const same = (a, b) => feq(a.x, b.x) && feq(a.y, b.y);
    if (same(H, O) || same(H, P0) || same(H, Q0) || P0.x.n === 0 || P0.y.n === 0 || Q0.x.n === 0 || Q0.y.n === 0) continue;
    const ask = rng.pick(["x", "y"]), val = Q0[ask].n;
    const opt = mcBlock(rng, String(val), [String(-val), String(Q0[ask === "x" ? "y" : "x"].n), String(H[ask].n), String(P0[ask].n), String(val + 10), String(val - 10), String(2 * val)]);
    if (!opt) continue;
    const d = P0.x.n * H.x.n + P0.y.n * H.y.n;
    const q = "Let \\(O\\) be the origin. The coordinates of the point \\(P\\) are \\(" + ptS(P0) + "\\). If the coordinates of the orthocentre of \\(\\bigtriangleup OPQ\\) are \\(" + ptS(H) + "\\), then the \\(" + ask + "\\)-coordinate of \\(Q\\) is\n" + opt.block;
    const steps = "\\(Q\\) is the orthocentre of \\(O\\), \\(P\\) and \\(H" + ptS(H) + "\\). The altitude from \\(P\\) is perpendicular to \\(OH\\): \\(" + lin2(H.x.n, H.y.n, F(d)) + "\\). The altitude from \\(H\\) is perpendicular to \\(OP\\): \\(" + lin2(P0.x.n, P0.y.n, F(d)) + "\\). Solving gives \\(Q" + ptS(Q0) + "\\), so the \\(" + ask + "\\)-coordinate is \\(" + val + "\\) (" + opt.letter + ").";
    return makeQ(CGT, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => {
      const h = triOrtho(O, P0, Q0); check(feq(h.x, H.x) && feq(h.y, H.y), "CG orthocentre", qq);
      check(H.x.n * Q0.x.n + H.y.n * Q0.y.n === d && P0.x.n * Q0.x.n + P0.y.n * Q0.y.n === d, "CG Q lies on both lines", qq);
    } });
  }
  return null;
}
function cgLineCircumMC(rng) {
  for (let t = 0; t < 600; t++) {
    const p = rng.int(2, 6), q0 = rng.int(2, 8), k0 = rng.int(4, 60);
    const s = F(k0 * (p + q0 * q0), 2 * p * q0), h = F(k0 * (p + 1), 2 * p);
    if (!fisInt(s) || !fisInt(h) || s.n <= 0) continue;
    const correct = String(h.n), cands = [k0, s.n, h.n + 4, h.n - 4, 2 * h.n, k0 + h.n, h.n + 8].map(String);
    const opt = mcBlock(rng, correct, cands.filter((x) => x !== correct));
    if (!opt) continue;
    const q = "It is given that \\(k\\) is a positive constant. The straight line \\(" + terms([[p, "x"], [q0, "y"]]) + " = k\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(A\\) and \\(B\\) respectively. Denote the point \\((k,0)\\) by \\(C\\). If the coordinates of the circumcentre of \\(\\bigtriangleup ABC\\) are \\((h," + s.n + ")\\), then \\(h =\\)\n" + opt.block;
    const steps = "\\(A\\left(\\frac{k}{" + p + "},0\\right)\\), \\(B\\left(0,\\frac{k}{" + q0 + "}\\right)\\), \\(C(k,0)\\). The circumcentre \\(K\\) lies on the perpendicular bisector of \\(AC\\): \\(h = \\frac{1}{2}\\left(\\frac{k}{" + p + "} + k\\right) = \\frac{" + (p + 1) + "k}{" + 2 * p + "}\\). " +
      "\\(KA = KB\\Rightarrow \\left(h - \\frac{k}{" + p + "}\\right)^{2} + " + s.n * s.n + " = h^{2} + \\left(" + s.n + " - \\frac{k}{" + q0 + "}\\right)^{2}\\Rightarrow k = " + k0 + "\\). Hence \\(h = \\frac{" + (p + 1) + "(" + k0 + ")}{" + 2 * p + "} = " + h.n + "\\) (" + opt.letter + ").";
    return makeQ(CGT, null, q, opt.letter, steps, { kind: "fn", run: (check, qq) => {
      const A = mkpt(F(k0, p), 0), B = mkpt(0, F(k0, q0)), C = mkpt(k0, 0), U = triCircum(A, B, C);
      check(feq(U.x, h) && feq(U.y, s), "CG circumcentre of ABC", qq);
    } });
  }
  return null;
}
reg("core", "functions_and_graphs", CGT, [
  ["distance, slope, mid-point and dividing point of AB", 4, cgDistanceEtc],
  ["MC: third vertex from the centroid", 2, cgCentroidMC],
  ["MC: a coordinate of Q from the orthocentre of OPQ", 3, cgOrthoMC],
  ["MC: circumcentre of the triangle formed by a line and the axes", 2, cgLineCircumMC],
]);

/* ===================== M2 ===================== */
/* ---------- Summation and Product Notation ---------- */
const SPN = "Summation and Product Notation";
const SUM_HEAD = "Expand and evaluate the following sums.\n";
const SUM_FORMS = [
  { tex: (v) => v + "^{2}", f: (r) => F(r * r) }, { tex: (v) => v + "^{3}", f: (r) => F(r ** 3) },
  { tex: (v) => v + "(" + v + " + 1)", f: (r) => F(r * (r + 1)) }, { tex: (v) => "(-1)^{" + v + "}(" + mv(2, v) + " + 1)", f: (r) => F((r % 2 ? -1 : 1) * (2 * r + 1)) },
  { tex: (v) => "2^{" + v + "}", f: (r) => F(2 ** r) }, { tex: (v) => mv(3, v) + " - 2", f: (r) => F(3 * r - 2) },
  { tex: (v) => "\\frac{1}{" + v + "(" + v + " + 1)}", f: (r) => F(1, r * (r + 1)), min: 1 }, { tex: (v) => "(-1)^{" + v + "}" + v, f: (r) => F((r % 2 ? -1 : 1) * r) },
  { tex: (v) => v + "^{2} - " + v, f: (r) => F(r * r - r) }, { tex: (v) => "\\frac{" + v + "}{2}", f: (r) => F(r, 2) },
];
const PROD_FORMS = [
  { tex: (v) => "2^{" + v + "}", f: (r) => F(2 ** r) }, { tex: (v) => "\\frac{" + v + " + 1}{" + v + "}", f: (r) => F(r + 1, r), min: 1 },
  { tex: (v) => "\\left( 1 - \\frac{1}{" + v + "} \\right)", f: (r) => F(r - 1, r), min: 2 }, { tex: (v) => "\\frac{" + v + "}{" + v + " + 2}", f: (r) => F(r, r + 2), min: 1 },
  { tex: (v) => "(" + mv(2, v) + " - 1)", f: (r) => F(2 * r - 1), min: 1 }, { tex: (v) => v + "^{2}", f: (r) => F(r * r), min: 1 },
  { tex: (v) => "\\left( 1 + \\frac{1}{" + v + "} \\right)", f: (r) => F(r + 1, r), min: 1 },
];
const subV = (tex, v) => tex(String(v));
const mv = (k, v) => (/^\d+$/.test(v) ? k + " \\times " + v : k + v); // "2 \\times 4" for numbers, "2r" for symbols
function sumEvalPart(rng, kind) {
  const idx = rng.pick(["r", "k", "i", "n"]);
  if (kind === "sum") {
    const fm = rng.pick(SUM_FORMS), a = fm.min !== undefined ? fm.min : rng.int(0, 2), b = a + rng.int(3, 8);
    let s = ZERO; const ts = []; for (let r = a; r <= b; r++) { s = fadd(s, fm.f(r)); ts.push(r); }
    const shown = (ts.length > 6 ? ts.slice(0, 3).concat([null], [ts[ts.length - 1]]) : ts).map((r) => (r === null ? "\\ldots" : fm.tex(String(r))));
    const tex = "\\sum_{" + idx + " = " + a + "}^{" + b + "}{" + fm.tex(idx) + "}";
    return { tex, val: s, steps: "\\(" + tex + " = " + shown.join(" + ") + " = " + ftex(s) + "\\)", num: () => { let t = 0; for (let r = a; r <= b; r++) t += fnum(fm.f(r)); return t; } };
  }
  const fm = rng.pick(PROD_FORMS), a = fm.min !== undefined ? Math.max(fm.min, rng.int(0, 2)) : rng.int(0, 2), b = a + rng.int(3, 9);
  let p = ONE; for (let r = a; r <= b; r++) p = fmul(p, fm.f(r));
  if (Math.abs(p.n) > 1e9 || p.d > 1e9) return null;
  const tex = "\\prod_{" + idx + " = " + a + "}^{" + b + "}{" + fm.tex(idx) + "}";
  const ts = []; for (let r = a; r <= b; r++) ts.push(r);
  const shown = (ts.length > 5 ? ts.slice(0, 3).concat([null], [ts[ts.length - 1]]) : ts).map((r) => (r === null ? "\\ldots" : fm.tex(String(r))));
  return { tex, val: p, steps: "\\(" + tex + " = " + shown.map((s) => (s === "\\ldots" ? s : "(" + s + ")")).join("\\times") + " = " + ftex(p) + "\\)", num: () => { let t = 1; for (let r = a; r <= b; r++) t *= fnum(fm.f(r)); return t; } };
}
function spnEvaluate(rng) {
  const p = sumEvalPart(rng, rng.chance(0.55) ? "sum" : "prod"); if (!p) return null;
  return makeQ(SPN, null, SUM_HEAD + "\\(" + p.tex + "\\)", "\\(" + ftex(p.val) + "\\)", p.steps, { kind: "num", value: p.num(), expect: fnum(p.val) });
}
function spnNested(rng) {
  const a = 1, b = rng.int(5, 12), m = rng.int(3, 5), pw = rng.pick([1, 2]);
  let inner = 1; for (let i = 1; i <= m; i++) inner *= i ** pw;
  const total = (b * (b + 1)) / 2 + b * inner;
  const tex = "\\sum_{k = 1}^{" + b + "}\\left( k + \\prod_{i = 1}^{" + m + "}i" + (pw === 2 ? "^{2}" : "") + " \\right)";
  return makeQ(SPN, null, SUM_HEAD + "\\(" + tex + "\\)", "\\(" + total + "\\)", "The product does not depend on \\(k\\): \\(\\prod_{i = 1}^{" + m + "}i" + (pw === 2 ? "^{2}" : "") + " = " + inner + "\\). So the sum is \\(\\sum_{k = 1}^{" + b + "}k + " + b + " \\times " + inner + " = " + (b * (b + 1)) / 2 + " + " + b * inner + " = " + total + "\\).", { kind: "num", value: (() => { let t = 0; for (let k = 1; k <= b; k++) { let pr = 1; for (let i = 1; i <= m; i++) pr *= i ** pw; t += k + pr; } return t; })(), expect: total });
}
function spnExpress(rng) {
  const v = rng.int(1, 6); let q, ans, vals, f, lo, hi, prod = false, steps;
  if (v === 1) { const p = rng.int(2, 4), a = rng.int(1, 3), b = a + rng.int(4, 9); q = "Express \\(" + [a, a + 1, a + 2].map((x) => x + "^{" + p + "}").join(" + ") + " + \\ldots + " + b + "^{" + p + "}\\) using \\(\\sum_{}^{}\\ \\) notation."; ans = "\\(\\sum_{r = " + a + "}^{" + b + "}r^{" + p + "}\\)"; f = (r) => r ** p; lo = a; hi = b; vals = []; for (let r = a; r <= b; r++) vals.push(r ** p); steps = "The terms are \\(r^{" + p + "}\\) for \\(r = " + a + ", " + (a + 1) + ", \\ldots, " + b + "\\)."; }
  else if (v === 2) { const qq = rng.int(2, 4), n = rng.int(4, 6), sg = rng.chance(0.6) ? -1 : 1; const terms0 = []; for (let r = 1; r <= n; r++) terms0.push((sg * qq) ** r); q = "Express \\(" + terms0.map((t, i) => (i === 0 ? String(t) : t < 0 ? " - " + Math.abs(t) : " + " + t)).join("") + "\\) using \\(\\sum_{}^{}\\ \\) notation."; ans = "\\(\\sum_{r = 1}^{" + n + "}{(" + (sg * qq) + ")^{r}}\\)"; f = (r) => (sg * qq) ** r; lo = 1; hi = n; vals = terms0; steps = "The terms form a geometric progression with first term \\(" + sg * qq + "\\) and common ratio \\(" + sg * qq + "\\), so the \\(r\\)th term is \\((" + sg * qq + ")^{r}\\)."; }
  else if (v === 3) { const n = rng.int(10, 60); const odd = rng.chance(0.6); q = "Express \\(" + (odd ? "1 \\times 3 \\times 5 \\times \\cdots \\times " + (2 * n - 1) : "2 \\times 4 \\times 6 \\times \\cdots \\times " + 2 * n) + "\\) using \\(\\prod_{}^{}\\ \\) notation."; ans = "\\(\\prod_{r = 1}^{" + n + "}{(" + (odd ? "2r - 1" : "2r") + ")}\\)"; prod = true; f = (r) => (odd ? 2 * r - 1 : 2 * r); lo = 1; hi = n; vals = []; for (let r = 1; r <= Math.min(n, 8); r++) vals.push(f(r)); steps = "The \\(r\\)th factor is \\(" + (odd ? "2r - 1" : "2r") + "\\), and the last factor \\(" + (odd ? 2 * n - 1 : 2 * n) + "\\) occurs when \\(r = " + n + "\\)."; }
  else if (v === 4) { const c = rng.int(2, 4), num = rng.int(1, 3), den = num + rng.int(1, 3), sg = rng.pick([1, -1]), n0 = rng.int(4, 8); const rho = F(sg * num, den); const t = (r) => fmul(F(c), fpow(rho, r)); q = "Express the sum to \\(n\\) terms of \\(" + [1, 2, 3].map((r, i) => (i === 0 ? ftex(t(r)) : t(r).n < 0 ? " - " + ftex(fabs(t(r))) : " + " + ftex(t(r)))).join("") + " + \\ldots\\) using the \\(\\sum_{}^{}\\ \\) notation."; ans = "\\(" + c + "\\sum_{r = 1}^{n}{\\left( " + ftex(rho) + " \\right)^{r}}\\)"; f = (r) => fnum(t(r)); lo = 1; hi = n0; vals = []; for (let r = 1; r <= 4; r++) vals.push(fnum(t(r))); steps = "The terms form a geometric progression with first term \\(" + ftex(t(1)) + "\\) and common ratio \\(" + ftex(rho) + "\\), so the \\(r\\)th term is \\(" + c + "\\left( " + ftex(rho) + " \\right)^{r}\\) (equivalent forms are also correct)."; }
  else if (v === 5) { const n = rng.int(5, 20), a = rng.int(2, 7), d = rng.int(2, 6); const last = a + (n - 1) * d; q = "Express \\(" + [a, a + d, a + 2 * d].join(" + ") + " + \\ldots + " + last + "\\) using \\(\\sum_{}^{}\\ \\) notation."; ans = "\\(\\sum_{r = 1}^{" + n + "}{(" + terms([[d, "r"], [a - d, ""]]) + ")}\\)"; f = (r) => d * r + a - d; lo = 1; hi = n; vals = [a, a + d, a + 2 * d]; steps = "An arithmetic progression with first term \\(" + a + "\\) and common difference \\(" + d + "\\): the \\(r\\)th term is \\(" + a + " + (r - 1)(" + d + ") = " + terms([[d, "r"], [a - d, ""]]) + "\\). The last term \\(" + last + "\\) is the \\(" + n + "\\)th."; }
  else { const n = rng.int(4, 12); q = "Express \\(1^{2} + 3^{2} + 5^{2} + \\ldots + " + (2 * n - 1) + "^{2}\\) using \\(\\sum_{}^{}\\ \\) notation."; ans = "\\(\\sum_{r = 1}^{" + n + "}{(2r - 1)^{2}}\\)"; f = (r) => (2 * r - 1) ** 2; lo = 1; hi = n; vals = [1, 9, 25]; steps = "The \\(r\\)th term is \\((2r - 1)^{2}\\), and \\(2r - 1 = " + (2 * n - 1) + "\\) when \\(r = " + n + "\\)."; }
  return makeQ(SPN, null, q, ans, steps, { kind: "fn", run: (check, qq) => { vals.forEach((val, i) => check(Math.abs(f(lo + i) - val) < 1e-9, "SPN express term " + i, qq)); } });
}
function spnGiven(rng) {
  const n = rng.int(5, 20), A = rng.int(-20, 30), B = rng.int(-20, 30), p = rng.nonzero(-4, 4), q = rng.nonzero(-4, 4), c = rng.int(-3, 3);
  const val = p * A + q * B + n * c;
  const inner = terms([[p, "X_{i}"], [q, "Y_{i}"], [c, ""]]);
  const qs = "Given that \\(\\sum_{i = 1}^{" + n + "}X_{i} = " + A + "\\) and \\(\\sum_{i = 1}^{" + n + "}Y_{i} = " + B + "\\), find the value of \\(\\sum_{i = 1}^{" + n + "}{(" + inner + ")}\\).";
  const steps = "\\(\\sum_{i = 1}^{" + n + "}{(" + inner + ")} = " + terms([[p, "\\sum X_{i}"], [q, "\\sum Y_{i}"], [c * n, ""]]) + " = " + p + "(" + A + ")" + (q < 0 ? " - " : " + ") + Math.abs(q) + "(" + B + ")" + (c * n === 0 ? "" : c * n < 0 ? " - " + Math.abs(c * n) : " + " + c * n) + " = " + val + "\\)";
  return makeQ(SPN, null, qs, "\\(" + val + "\\)", steps, { kind: "num", value: p * A + q * B + c * n, expect: val });
}
function spnWithFormula(rng) {
  const S = (n) => (n * (n + 1) * (2 * n + 1)) / 6;
  const c = rng.pick([2, 3, 4, 5]), a = rng.int(20, 1500), b = a + rng.int(200, 900), m = rng.int(100, 2500), d = rng.pick([1, 2, 3]);
  const v1 = c * c * (S(b) - S(a - 1)), v2 = S(m + d) - S(d);
  const q = "Given that \\(\\sum_{k = 1}^{n}k^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\) for all \\(n \\in \\mathbf{N}\\). Evaluate\n(a) \\(\\sum_{k = " + a + "}^{" + b + "}{(" + c + "k)^{2}}\\) and (b) \\(\\sum_{k = 1}^{" + m + "}{(k + " + d + ")^{2}}\\).";
  const ans = "(a) \\(" + v1 + "\\)\n(b) \\(" + v2 + "\\)";
  const steps = "(a) \\(\\sum_{k = " + a + "}^{" + b + "}{(" + c + "k)^{2}} = " + c * c + "\\left[\\sum_{k = 1}^{" + b + "}k^{2} - \\sum_{k = 1}^{" + (a - 1) + "}k^{2}\\right] = " + c * c + "\\left[" + S(b) + " - " + S(a - 1) + "\\right] = " + v1 + "\\).\n(b) \\(\\sum_{k = 1}^{" + m + "}{(k + " + d + ")^{2}} = \\sum_{j = " + (1 + d) + "}^{" + (m + d) + "}j^{2} = " + S(m + d) + " - " + S(d) + " = " + v2 + "\\).";
  return makeQ(SPN, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    let t1 = 0; for (let k = a; k <= b; k++) t1 += (c * k) ** 2; let t2 = 0; for (let k = 1; k <= m; k++) t2 += (k + d) ** 2;
    check(t1 === v1 && t2 === v2, "SPN with formula", qq);
  } });
}
reg("m2", "basic_knowledge", SPN, [
  ["expand and evaluate a sum or a product", 5, spnEvaluate],
  ["a sum containing a product", 1, spnNested],
  ["express a series with Σ or Π notation", 4, spnExpress],
  ["use given values of ΣX and ΣY", 2, spnGiven],
  ["evaluate sums using the formula for Σk²", 2, spnWithFormula],
]);

/* ---------- Odd and Even Functions ---------- */
const OEF = "Odd and Even Functions";
// each factor: tex, parity (+1 even, -1 odd, 0 neither), f
const sinPow = (p) => ({ tex: p === 1 ? "\\sin x" : "\\sin^{" + p + "}x", par: p % 2 ? -1 : 1, f: (x) => Math.sin(x) ** p, name: "\\sin^{" + p + "}x" });
const cosPow = (p) => ({ tex: p === 1 ? "\\cos x" : "\\cos^{" + p + "}x", par: 1, f: (x) => Math.cos(x) ** p });
const tanPow = (p) => ({ tex: p === 1 ? "\\tan x" : "\\tan^{" + p + "}x", par: p % 2 ? -1 : 1, f: (x) => Math.tan(x) ** p });
const xPow = (n) => ({ tex: n === 1 ? "x" : "x^{" + n + "}", par: n % 2 ? -1 : 1, f: (x) => x ** n });
const sinK = (k) => ({ tex: "\\sin " + k + "x", par: -1, f: (x) => Math.sin(k * x) });
const cosK = (k) => ({ tex: "\\cos " + k + "x", par: 1, f: (x) => Math.cos(k * x) });
const absF = () => ({ tex: "|x|", par: 1, f: (x) => Math.abs(x) });
function pureFactor(rng) {
  return rng.pick([() => xPow(rng.int(1, 6)), () => xPow(rng.int(1, 6)), () => sinPow(rng.int(1, 5)), () => cosPow(rng.int(1, 4)), () => tanPow(rng.int(1, 3)), () => sinK(rng.int(2, 4)), () => cosK(rng.int(2, 4)), absF])();
}
const parityWord = (p) => (p === 1 ? "even" : p === -1 ? "odd" : "neither");
function oefExpr(rng, target) {
  for (let t = 0; t < 300; t++) {
    const shape = rng.pick(["product", "product", "ratio", "ratio", "sum", "const", "shifted"]);
    if (shape === "const") { if (target !== 1) continue; const c = rng.nonzero(-9, 9); return { tex: String(c), par: 1, f: () => c, facts: ["a constant function is even"] }; }
    if (shape === "product") {
      const fs = Array.from({ length: rng.int(2, 3) }, () => pureFactor(rng));
      if (new Set(fs.map((x) => x.tex)).size !== fs.length) continue;
      const par0 = fs.reduce((p, x) => p * x.par, 1); if (par0 !== target) continue;
      return { tex: fs.map((x) => x.tex).join(""), par: par0, f: (x) => fs.reduce((p, g) => p * g.f(x), 1), facts: fs.map((x) => "\\(" + x.tex + "\\) is " + parityWord(x.par)) };
    }
    if (shape === "ratio") {
      const nf = Array.from({ length: rng.int(1, 2) }, () => pureFactor(rng));
      const dens = [() => ({ tex: "|x| + " + rng.int(1, 5), par: 1, f0: (c) => (x) => Math.abs(x) + c }), () => ({ tex: "x^{2} + " + rng.int(1, 9), par: 1 }), () => ({ tex: "x^{4} + " + rng.int(2, 9), par: 1 }), () => ({ tex: "\\cos x + 2", par: 1 }), () => ({ tex: "x^{3}", par: -1 }), () => ({ tex: "\\sin 2x", par: -1 })];
      const den = rng.pick(dens)(), dtxt = den.tex;
      const dfn = ((s) => { const m = s.match(/^\|x\| \+ (\d+)$/); if (m) return (x) => Math.abs(x) + +m[1]; const m2 = s.match(/^x\^\{(\d)\} \+ (\d+)$/); if (m2) return (x) => x ** +m2[1] + +m2[2]; if (s === "\\cos x + 2") return (x) => Math.cos(x) + 2; if (s === "x^{3}") return (x) => x ** 3; return (x) => Math.sin(2 * x); })(dtxt);
      const par0 = nf.reduce((p, x) => p * x.par, 1) * den.par; if (par0 !== target) continue;
      const neg = rng.chance(0.2) ? -1 : 1;
      return { tex: (neg < 0 ? "-" : "") + "\\frac{" + nf.map((x) => x.tex).join("") + "}{" + dtxt + "}", par: par0, f: (x) => neg * nf.reduce((p, g) => p * g.f(x), 1) / dfn(x), facts: nf.map((x) => "\\(" + x.tex + "\\) is " + parityWord(x.par)).concat(["\\(" + dtxt + "\\) is " + parityWord(den.par)]) };
    }
    if (shape === "sum") {
      const a = pureFactor(rng), b = pureFactor(rng); if (a.tex === b.tex) continue;
      const c = rng.chance(0.4) ? rng.nonzero(-5, 5) : 0, pc = c === 0 ? null : 1;
      const parts = [a, b].concat(c ? [{ tex: String(Math.abs(c)), par: 1, f: () => c }] : []);
      const pars = new Set(parts.map((x) => x.par)); const par0 = pars.size === 1 ? [...pars][0] : 0; if (par0 !== target) continue;
      return { tex: parts.map((x, i) => (i === 0 ? "" : c < 0 && i === 2 ? " - " : " + ") + x.tex).join(""), par: par0, f: (x) => a.f(x) + b.f(x) + c, facts: parts.map((x) => "\\(" + x.tex + "\\) is " + parityWord(x.par)) };
    }
    // shifted: neither
    if (target !== 0) continue;
    const kind = rng.int(1, 3);
    if (kind === 1) { const c = rng.int(1, 5), n = rng.pick([3, 5]), d = rng.pick([4, 6]), e = rng.int(2, 9); return { tex: "-\\frac{x^{" + n + "} + " + c + "}{x^{" + d + "} + " + e + "}", par: 0, f: (x) => -(x ** n + c) / (x ** d + e), facts: ["the numerator \\(x^{" + n + "} + " + c + "\\) is neither odd nor even", "\\(x^{" + d + "} + " + e + "\\) is even"] }; }
    if (kind === 2) { const a = rng.pick([2, 4, 6]), c = rng.int(1, 4); return { tex: "x^{" + a + "} + x", par: 0, f: (x) => x ** a + x, facts: ["\\(x^{" + a + "}\\) is even but \\(x\\) is odd"] }; }
    const c = rng.int(2, 6); return { tex: "(x + " + c + ")\\sin x", par: 0, f: (x) => (x + c) * Math.sin(x), facts: ["\\(\\sin x\\) is odd", "\\(x + " + c + "\\) is neither odd nor even"] };
  }
  return null;
}
function oefClassify(rng) {
  const target = rng.pick([1, -1, 0, 1, -1]);
  const e = oefExpr(rng, target); if (!e) return null;
  const ans = target === 1 ? "Even function." : target === -1 ? "Odd function." : "Neither an odd function nor an even function.";
  let steps = "Replace \\(x\\) by \\(-x\\). " + e.facts.join("; ") + ". ";
  if (target === 1) steps += "Hence \\(f(-x) = f(x)\\) and \\(f\\) is an even function.";
  else if (target === -1) steps += "Hence \\(f(-x) = -f(x)\\) and \\(f\\) is an odd function.";
  else { let xv = 1; for (const cand of [1, 2, 0.5, 1.3]) { const a = e.f(cand), b = e.f(-cand); if (isFinite(a) && isFinite(b) && Math.abs(a - b) > 1e-6 && Math.abs(a + b) > 1e-6) { xv = cand; break; } } steps += "For example, \\(f(" + xv + ") \\approx " + Number(e.f(xv).toFixed(4)) + "\\) and \\(f(" + (-xv) + ") \\approx " + Number(e.f(-xv).toFixed(4)) + "\\), so \\(f(-x) \\neq f(x)\\) and \\(f(-x) \\neq -f(x)\\). \\(f\\) is neither odd nor even."; }
  const q = "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = " + e.tex + "\\)";
  return makeQ(OEF, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    const pts = [0.37, 0.9, 1.3, 2.2, 0.61, 1.7].filter((x) => isFinite(e.f(x)) && isFinite(e.f(-x)));
    const isEven = pts.every((x) => Math.abs(e.f(x) - e.f(-x)) < 1e-9 * (1 + Math.abs(e.f(x)))), isOdd = pts.every((x) => Math.abs(e.f(x) + e.f(-x)) < 1e-9 * (1 + Math.abs(e.f(x))));
    const actual = isEven && !isOdd ? 1 : isOdd && !isEven ? -1 : 0;
    check(actual === target && pts.length >= 4, "OEF parity numeric " + actual + " vs " + target, qq);
  } });
}
reg("m2", "basic_knowledge", OEF, [["odd, even or neither?", 1, oefClassify]]);

/* ---------- Mathematical Induction ---------- */
const factorial = (n) => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
function miIdentity(rng) {
  const kind = rng.pick(["A", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O"]);
  const nstr = (n) => n; // placeholder to keep the shape readable
  switch (kind) {
    case "A": { const p = rng.int(1, 3); return { lvl: 1, prod: false, termTex: (v) => v + "(" + v + " + " + p + ")", show: (r) => r + " \\times " + (r + p), term: (r) => F(r * (r + p)), S: (n) => F(n * (n + 1) * (2 * n + 1 + 3 * p), 6), closed: (n) => "\\frac{" + n + "(" + n + " + 1)(2" + n + " + " + (1 + 3 * p) + ")}{6}" }; }
    case "B": return { lvl: 2, prod: false, termTex: (v) => "\\frac{1}{" + v + "(" + v + " + 1)}", show: (r) => "\\frac{1}{" + r + " \\times " + (r + 1) + "}", term: (r) => F(1, r * (r + 1)), S: (n) => F(n, n + 1), closed: (n) => "\\frac{" + n + "}{" + n + " + 1}" };
    case "C": return { lvl: 3, prod: false, termTex: (v) => "\\frac{1}{" + v + "(" + v + " + 1)(" + v + " + 2)}", show: (r) => "\\frac{1}{" + r + " \\times " + (r + 1) + " \\times " + (r + 2) + "}", term: (r) => F(1, r * (r + 1) * (r + 2)), S: (n) => F(n * (n + 3), 4 * (n + 1) * (n + 2)), closed: (n) => "\\frac{" + n + "(" + n + " + 3)}{4(" + n + " + 1)(" + n + " + 2)}" };
    case "D": { const q = rng.pick([2, 3]); return { lvl: 3, prod: false, termTex: (v) => v + " \\times " + q + "^{" + v + "}", show: (r) => r + " \\times " + q + "^{" + r + "}", term: (r) => F(r * q ** r), S: (n) => (q === 2 ? F((n - 1) * 2 ** (n + 1) + 2) : F((2 * n - 1) * 3 ** (n + 1) + 3, 4)), closed: (n) => (q === 2 ? "(" + n + " - 1)2^{" + n + " + 1} + 2" : "\\frac{(2" + n + " - 1)3^{" + n + " + 1} + 3}{4}") }; }
    case "E": { const q = rng.pick([2, 3, 4]); return { lvl: 3, prod: false, sigma: true, termTex: (v) => "(-1)^{" + v + " + 1}" + q + "^{" + v + "}", show: (r) => "(-1)^{" + r + " + 1}" + q + "^{" + r + "}", term: (r) => F((r % 2 ? 1 : -1) * q ** r), S: (n) => F(q * (1 - (-q) ** n), 1 + q), closed: (n) => "\\frac{" + q + " + (-1)^{" + n + " + 1}" + q + "^{" + n + " + 1}}{" + (q + 1) + "}" }; }
    case "F": return { lvl: 1, prod: false, termTex: (v) => v + "^{3}", show: (r) => r + "^{3}", term: (r) => F(r ** 3), S: (n) => F(n * n * (n + 1) * (n + 1), 4), closed: (n) => "\\frac{" + n + "^{2}(" + n + " + 1)^{2}}{4}" };
    case "G": return { lvl: 2, prod: false, termTex: (v) => "(2" + v + " - 1)^{2}", show: (r) => (2 * r - 1) + "^{2}", term: (r) => F((2 * r - 1) ** 2), S: (n) => F(n * (2 * n - 1) * (2 * n + 1), 3), closed: (n) => "\\frac{" + n + "(2" + n + " - 1)(2" + n + " + 1)}{3}" };
    case "H": return { lvl: 3, prod: false, termTex: (v) => v + " \\times " + v + "!", show: (r) => r + " \\times " + r + "!", term: (r) => F(r * factorial(r)), S: (n) => F(factorial(n + 1) - 1), closed: (n) => "(" + n + " + 1)! - 1", maxB: 9 };
    case "I": return { lvl: 1, prod: false, termTex: (v) => v + "^{2}", show: (r) => r + "^{2}", term: (r) => F(r * r), S: (n) => F(n * (n + 1) * (2 * n + 1), 6), closed: (n) => "\\frac{" + n + "(" + n + " + 1)(2" + n + " + 1)}{6}" };
    case "J": return { lvl: 2, prod: false, termTex: (v) => v + "(" + v + " + 1)(" + v + " + 2)", show: (r) => r + " \\times " + (r + 1) + " \\times " + (r + 2), term: (r) => F(r * (r + 1) * (r + 2)), S: (n) => F(n * (n + 1) * (n + 2) * (n + 3), 4), closed: (n) => "\\frac{" + n + "(" + n + " + 1)(" + n + " + 2)(" + n + " + 3)}{4}" };
    case "K": return { lvl: 2, prod: false, termTex: (v) => v + "(3" + v + " - 1)", show: (r) => r + " \\times " + (3 * r - 1), term: (r) => F(r * (3 * r - 1)), S: (n) => F(n * n * (n + 1)), closed: (n) => n + "^{2}(" + n + " + 1)" };
    case "M": return { lvl: 2, prod: true, start: 1, termTex: (v) => "\\left(1 + \\frac{1}{" + v + " + 1}\\right)", term: (r) => F(r + 2, r + 1), S: (n) => F(n + 2, 2), closed: (n) => "\\frac{" + n + " + 2}{2}" };
    case "N": return { lvl: 3, prod: true, start: 2, termTex: (v) => "\\left(1 - \\frac{1}{" + v + "^{2}}\\right)", term: (r) => F(r * r - 1, r * r), S: (n) => (n < 2 ? ONE : F(n + 1, 2 * n)), closed: (n) => "\\frac{" + n + " + 1}{2" + n + "}" };
    default: return { lvl: 1, prod: true, start: 1, termTex: (v) => "\\left(1 + \\frac{1}{" + v + "}\\right)", term: (r) => F(r + 1, r), S: (n) => F(n + 1), closed: (n) => n + " + 1" };
  }
}
const MI_HEAD = "Prove, by mathematical induction, that for all positive integers \\(n\\), ";
function miSumQ(rng) {
  const id = miIdentity(rng), start = id.start || 1;
  // sanity: the closed form must satisfy S(n) = S(n-1) * / + term(n)
  for (let n = start + 1; n <= start + 10; n++) {
    const ok = id.prod ? feq(id.S(n), fmul(id.S(n - 1), id.term(n))) : feq(id.S(n), fadd(id.S(n - 1), id.term(n)));
    if (!ok) return null;
  }
  if (!id.prod && !feq(id.S(1), id.term(1))) return null;
  if (id.prod && !feq(id.S(start), id.term(start))) return null;
  const sym = id.prod ? "\\prod" : "\\sum";
  const lhs = (nTxt) => id.prod || id.sigma ? sym + "_{r = " + start + "}^{" + nTxt + "}{" + id.termTex("r") + "}" : id.show("1") + " + " + id.show("2") + " + " + id.show("3") + " + \\ldots + " + id.termTex(nTxt === "n" ? "n" : nTxt);
  const lhsK = (nTxt) => (id.prod || id.sigma ? sym + "_{r = " + start + "}^{" + nTxt + "}{" + id.termTex("r") + "}" : "\\sum_{r = 1}^{" + nTxt + "}{" + id.termTex("r") + "}");
  const hence = rng.chance(0.55);
  let hq = "", hans = "", hsteps = "";
  if (hence) {
    const a = start + rng.int(1, 4), b = a + rng.int(3, Math.min(8, (id.maxB || 12) - a));
    if (b <= a + 1) return null;
    const val = id.prod ? fdiv(id.S(b), id.S(a - 1)) : fsub(id.S(b), id.S(a - 1));
    if (Math.abs(val.n) > 1e12 || val.d > 1e12) return null;
    const sh = (r) => (id.prod ? "\\left(" + (id.termTex(String(r))) + "\\right)" : id.show(String(r)));
    const exp = id.prod || id.sigma ? sym + "_{r = " + a + "}^{" + b + "}{" + id.termTex("r") + "}" : id.show(String(a)) + " + " + id.show(String(a + 1)) + " + " + id.show(String(a + 2)) + " + \\ldots + " + id.show(String(b));
    hq = "\n(b) Hence, find the value of \\(" + (id.prod ? exp : exp) + "\\).";
    hans = "\n(b) \\(" + ftex(val) + "\\)";
    hsteps = "\n(b) The expression equals " + (id.prod ? "\\(\\frac{P(" + b + ")}{P(" + (a - 1) + ")}\\)" : "\\(S(" + b + ") - S(" + (a - 1) + ")\\)") + " where \\(" + (id.prod ? "P" : "S") + "(n) = " + id.closed("n") + "\\). So it is \\(" + (id.prod ? ftex(id.S(b)) + " \\div " + ftex(id.S(a - 1)) : ftex(id.S(b)) + " - " + ftex(id.S(a - 1))) + " = " + ftex(val) + "\\).";
  }
  const stmt = lhs("n") + " = " + id.closed("n");
  const q = "[Level " + id.lvl + "]\n" + (hence ? "(a) " : "") + MI_HEAD + "\\(" + stmt + "\\)." + hq;
  const t1 = id.term(start), r1 = id.S(start);
  const startTxt = start === 1 ? "1" : String(start);
  const stepsA = "Let \\(P(n)\\) be the statement \\(" + stmt + "\\).\nStep 1: When \\(n = " + startTxt + "\\), LHS \\(= " + ftex(t1) + "\\) and RHS \\(= " + ftex(r1) + "\\). So \\(P(" + startTxt + ")\\) is true.\nStep 2: Assume \\(P(k)\\) is true for some positive integer \\(k" + (start > 1 ? " \\geq " + start : "") + "\\), i.e. \\(" + lhsK("k") + " = " + id.closed("k") + "\\).\n" +
    "Step 3: When \\(n = k + 1\\), LHS \\(= " + (id.prod ? id.closed("k") + " \\times " + id.termTex("(k + 1)") : id.closed("k") + " + " + id.termTex("(k + 1)")) + "\\). Simplifying (common denominator / factorising) gives \\(" + id.closed("(k + 1)") + "\\) = RHS. So \\(P(k + 1)\\) is true.\nBy the principle of mathematical induction, \\(P(n)\\) is true for all positive integers \\(n\\).";
  return makeQ(null, null, q, (hence ? "(a) " : "") + "Proved by mathematical induction." + hans, (hence ? "(a) " : "") + stepsA + hsteps, { kind: "fn", run: (check, qq) => {
    for (let n = start; n <= start + 8; n++) { let acc = id.prod ? ONE : ZERO; for (let r = start; r <= n; r++) acc = id.prod ? fmul(acc, id.term(r)) : fadd(acc, id.term(r)); check(feq(acc, id.S(n)), "MI identity n=" + n, qq); }
  } });
}
function miRecurrence(rng) {
  const p = rng.pick([2, 3, 4]), A = rng.nonzero(-2, 3), B = rng.nonzero(-3, 3), C = rng.int(-4, 4);
  const q0 = B * (1 - p), s0 = B + C * (1 - p), a1 = A * p + B + C;
  const a = (n) => A * p ** n + B * n + C;
  const form = terms([[A, p + "^{n}"], [B, "n"], [C, ""]]), formK = (n) => terms([[A, n === "1" ? String(p) : p + "^{" + n + "}"], [B, n], [C, ""]]);
  const rec = terms([[p, "a_{k}"], [q0, "k"], [s0, ""]]);
  const q = "[Level 3]\nLet \\(a_{1} = " + a1 + "\\) and \\(a_{k + 1} = " + rec + "\\) for all positive integers \\(k\\).\n(a) Prove, by mathematical induction, that \\(a_{n} = " + form + "\\) for all positive integers \\(n\\).\n(b) Hence, find the value of \\(a_{" + 8 + "}\\).";
  const steps = "(a) Let \\(P(n)\\) be the statement \\(a_{n} = " + form + "\\).\nStep 1: \\(n = 1\\): \\(a_{1} = " + a1 + "\\) and \\(" + formK("1") + " = " + a1 + "\\). So \\(P(1)\\) is true.\nStep 2: Assume \\(a_{k} = " + formK("k") + "\\).\nStep 3: \\(a_{k + 1} = " + p + "a_{k} + " + par(q0) + "k + " + par(s0) + " = " + p + "(" + formK("k") + ") + " + par(q0) + "k + " + par(s0) + " = " + terms([[A, p + "^{k + 1}"], [p * B + q0, "k"], [p * C + s0, ""]]) + " = " + formK("(k + 1)") + "\\), so \\(P(k + 1)\\) is true. By mathematical induction, \\(P(n)\\) is true for all positive integers \\(n\\).\n(b) \\(a_{8} = " + coefStr(A) + "(" + p + ")^{8}" + (B < 0 ? " - " : " + ") + Math.abs(B) + "(8)" + (C === 0 ? "" : (C < 0 ? " - " : " + ") + Math.abs(C)) + " = " + a(8) + "\\).";
  return makeQ(null, null, q, "(a) Proved by mathematical induction.\n(b) \\(a_{8} = " + a(8) + "\\)", steps, { kind: "fn", run: (check, qq) => {
    let x = a1; for (let k = 1; k < 8; k++) { check(x === a(k), "MI recurrence a_" + k, qq); x = p * x + q0 * k + s0; } check(x === a(8), "MI recurrence a_8", qq);
  } });
}
reg("m2", "mathematical_induction", null, [
  ["prove a sum or product identity by induction (with 'hence find')", 8, miSumQ],
  ["prove a closed form for a recurrence relation by induction", 2, miRecurrence],
]);

/* ---------- Binomial Theorem ---------- */
const BINT = null;
function binom(n, r) { if (r < 0 || r > n) return 0n; r = Math.min(r, n - r); let res = 1n; for (let i = 1; i <= r; i++) res = (res * BigInt(n - r + i)) / BigInt(i); return res; }
const lmul = (A, B) => { const R = new Map(); for (const [e1, c1] of A) for (const [e2, c2] of B) R.set(e1 + e2, (R.get(e1 + e2) || 0n) + c1 * c2); for (const [e, c] of [...R]) if (c === 0n) R.delete(e); return R; };
const lpow = (A, k) => { let R = new Map([[0, 1n]]); for (let i = 0; i < k; i++) R = lmul(R, A); return R; };
const lterm = (c, e, v) => { v = v || "x"; const neg = c < 0n, a = neg ? -c : c; const xs = e === 0 ? "" : e === 1 ? v : v + "^{" + e + "}"; const cs = a === 1n && e !== 0 ? "" : String(a); return { neg, text: cs + xs }; };
function ltex(M0, v) {
  const es = [...M0.keys()].sort((a, b) => b - a); if (!es.length) return "0";
  return es.map((e, i) => { const t = lterm(M0.get(e), e, v); return (i === 0 ? (t.neg ? "-" : "") : t.neg ? " - " : " + ") + t.text; }).join("");
}
const base2 = (p, q, c) => { // x^p + c x^q as a Laurent map and as tex
  const m = new Map(); m.set(p, 1n); m.set(q, (m.get(q) || 0n) + BigInt(c));
  const first = p === 1 ? "x" : "x^{" + p + "}", ac = Math.abs(c);
  const second = q < 0 ? "\\frac{" + ac + "}{" + (q === -1 ? "x" : "x^{" + (-q) + "}") + "}" : (ac === 1 ? "" : ac) + (q === 1 ? "x" : "x^{" + q + "}");
  return { m, tex: first + (c < 0 ? " - " : " + ") + second };
};
function binFindN(rng) {
  for (let t = 0; t < 400; t++) {
    const n0 = rng.int(3, 12), a = rng.int(2, 6), b = rng.int(1, a - 1), C2 = (n) => (n * (n - 1)) / 2;
    const num = C2(n0 + a) + C2(n0 + b), den = C2(n0); if (num % den !== 0) continue; const k = num / den;
    if (k < 2 || k > 30) continue;
    const sols = []; for (let n = 2; n <= 300; n++) if (C2(n + a) + C2(n + b) === k * C2(n)) sols.push(n);
    if (sols.length !== 1) continue;
    const q = "[Level 1] Find \\(n\\) if \\(C_{2}^{n + " + a + "} + C_{2}^{n + " + b + "} = " + k + "C_{2}^{n}\\).";
    const steps = "\\(\\frac{(n + " + a + ")(" + terms([[1, "n"], [a - 1, ""]]) + ")}{2} + \\frac{(n + " + b + ")(" + terms([[1, "n"], [b - 1, ""]]) + ")}{2} = " + k + "\\cdot\\frac{n(n - 1)}{2}\\). Expanding and simplifying gives a quadratic in \\(n\\); rejecting any root that is not an integer with \\(n \\geq 2\\), we get \\(n = " + n0 + "\\).";
    return makeQ(null, null, q, "\\(n = " + n0 + "\\)", steps, { kind: "fn", run: (check, qq) => { check(sols[0] === n0, "Bin find n", qq); } });
  }
  return null;
}
function binTerms(rng) {
  const p = rng.int(1, 3), q = rng.pick([-1, -2, -3, -4, 2, 3]), c = rng.nonzero(-4, 4), n = rng.int(4, 12);
  if (p === q) return null;
  const b = base2(p, q, c), exps = []; for (let r = 0; r <= n; r++) exps.push(p * (n - r) + q * r);
  const coef = (r) => binom(n, r) * BigInt(c) ** BigInt(r);
  const ex = (e) => exps.indexOf(e);
  const qs = [];
  const kinds = rng.sample(["const", "xm", "asc"], 2);
  const parts = [];
  const gen = `\\(T_{r + 1} = C_{r}^{${n}}(${p === 1 ? "x" : "x^{" + p + "}"})^{${n} - r}(${(c < 0 ? "-" : "") + (Math.abs(c) === 1 ? "" : Math.abs(c))}x^{${q}})^{r} = C_{r}^{${n}}(${c})^{r}x^{${p * n + (q - p)}r ${p * n >= 0 ? "+" : "-"} ${Math.abs(p * n)}}\\)`.replace(/\{(-?\d+)r \+ (-?\d+)\}/, (m, a, b2) => "{" + terms([[+a, "r"], [+b2, ""]]) + "}").replace(/\{(-?\d+)r - (\d+)\}/, (m, a, b2) => "{" + terms([[+a, "r"], [-b2, ""]]) + "}");
  for (const k of kinds) {
    if (k === "const") { const r = ex(0); parts.push({ q: "the constant term", a: r >= 0 ? "\\(" + coef(r) + "\\)" : "There is no constant term.", s: r >= 0 ? "The constant term needs \\(" + terms([[q - p, "r"], [p * n, ""]]) + " = 0\\), so \\(r = " + r + "\\) and the term is \\(C_{" + r + "}^{" + n + "}(" + c + ")^{" + r + "} = " + coef(r) + "\\)." : "The constant term needs \\(" + terms([[q - p, "r"], [p * n, ""]]) + " = 0\\), which has no integer solution \\(0 \\leq r \\leq " + n + "\\). So there is no constant term." }); }
    else if (k === "xm") {
      const m = rng.chance(0.7) ? rng.pick(exps) : rng.int(-12, 12), r = ex(m);
      parts.push({ q: "the coefficient of \\(x^{" + m + "}\\)", a: r >= 0 ? "\\(" + coef(r) + "\\)" : "There is no \\(x^{" + m + "}\\) term (the coefficient is \\(0\\)).", s: r >= 0 ? "Set \\(" + terms([[q - p, "r"], [p * n, ""]]) + " = " + m + "\\): \\(r = " + r + "\\). The coefficient is \\(C_{" + r + "}^{" + n + "}(" + c + ")^{" + r + "} = " + coef(r) + "\\)." : "\\(" + terms([[q - p, "r"], [p * n, ""]]) + " = " + m + "\\) has no integer solution with \\(0 \\leq r \\leq " + n + "\\), so there is no \\(x^{" + m + "}\\) term." });
    } else {
      const j = rng.int(2, Math.min(7, n)), order = exps.map((e, r) => ({ e, r })).sort((a, b) => a.e - b.e), pick = order[j - 1], t = lterm(coef(pick.r), pick.e);
      parts.push({ q: "the " + j + (j === 2 ? "nd" : j === 3 ? "rd" : "th") + " term in ascending powers of \\(x\\)", a: "\\(" + (t.neg ? "-" : "") + t.text + "\\)", s: "In ascending powers of \\(x\\) the " + j + (j === 2 ? "nd" : j === 3 ? "rd" : "th") + " term has \\(r = " + pick.r + "\\), giving \\(C_{" + pick.r + "}^{" + n + "}(" + c + ")^{" + pick.r + "}x^{" + pick.e + "} = " + (t.neg ? "-" : "") + t.text + "\\)." });
    }
  }
  const q0 = "[Level 2] In the expansion of \\(\\left(" + b.tex + "\\right)^{" + n + "}\\), find\n(a) " + parts[0].q + ",\n(b) " + parts[1].q + ".";
  const ans = "(a) " + parts[0].a + "\n(b) " + parts[1].a;
  const steps = "General term: " + gen + "\n(a) " + parts[0].s + "\n(b) " + parts[1].s;
  return makeQ(null, null, q0, ans, steps, { kind: "fn", run: (check, qq) => {
    const E = lpow(b.m, n); const find = (e) => (E.get(e) || 0n);
    kinds.forEach((k, i) => {
      if (k === "const") check(parts[i].a === (find(0) === 0n ? "There is no constant term." : "\\(" + find(0) + "\\)"), "Bin constant term", qq);
      if (k === "xm") { const m = +parts[i].q.match(/x\^\{(-?\d+)\}/)[1]; check(parts[i].a === (find(m) === 0n ? "There is no \\(x^{" + m + "}\\) term (the coefficient is \\(0\\))." : "\\(" + find(m) + "\\)"), "Bin x^m term", qq); }
      if (k === "asc") { const j = +parts[i].q.match(/the (\d+)/)[1], es = [...E.keys()].sort((a, b2) => a - b2), e = es[j - 1], t = lterm(E.get(e), e); check(parts[i].a === "\\(" + (t.neg ? "-" : "") + t.text + "\\)", "Bin ascending term", qq); }
    });
  } });
}
function binUnknownCoeffs(rng) {
  const n = rng.int(3, 12), sym = rng.chance(0.4);
  const C2 = Number(binom(n, 2));
  if (!sym) {
    const b = rng.nonzero(-9, 9), A = n * b, B = C2 * b * b, c3 = binom(n, 3) * BigInt(b) ** 3n;
    const q = "[Level 2] Let \\(n\\) be an integer greater than \\(1\\). Given that \\((1 + bx)^{n} = 1 " + (A < 0 ? "-" : "+") + " " + Math.abs(A) + "x + " + B + "x^{2} + \\ldots\\).\n(a) Find the values of \\(b\\) and \\(n\\).\n(b) Find the coefficient of \\(x^{3}\\) in the expansion.";
    const steps = "(a) \\(nb = " + A + "\\) and \\(C_{2}^{n}b^{2} = " + B + "\\). Dividing \\(\\frac{C_{2}^{n}b^{2}}{(nb)^{2}} = \\frac{n - 1}{2n} = \\frac{" + B + "}{" + A * A + "}\\), so \\(n = " + n + "\\) and \\(b = " + b + "\\).\n(b) The coefficient of \\(x^{3}\\) is \\(C_{3}^{" + n + "}(" + b + ")^{3} = " + c3 + "\\).";
    return makeQ(null, null, q, "(a) \\(b = " + b + "\\), \\(n = " + n + "\\)\n(b) \\(" + c3 + "\\)", steps, { kind: "fn", run: (check, qq) => {
      let found = []; for (let nn = 2; nn <= 60; nn++) { const bb = A / nn; if (Number.isInteger(bb) && Number(binom(nn, 2)) * bb * bb === B) found.push([nn, bb]); }
      check(found.length === 1 && found[0][0] === n && found[0][1] === b, "Bin unknown n,b unique", qq);
    } });
  }
  const L = rng.pick(["p", "a", "k", "m"]), Lv = rng.int(1, 6), A = n * Lv, B = C2, sgn = rng.pick([-1, 1]);
  const form = sgn < 0 ? "1 - " + L + "x" : "1 + " + L + "x";
  const rhs = (sgn < 0 ? "1 - " : "1 + ") + A + "x + " + B + L + "^{2}x^{2} + \\ldots";
  const q = "[Level 2] Let \\(n\\) be an integer greater than \\(1\\). Given that \\((" + form + ")^{" + "n" + "} = " + rhs + "\\), find the values of \\(n\\) and \\(" + L + "\\) (where \\(" + L + " > 0\\)).";
  const steps = "Comparing the coefficients of \\(x^{2}\\): \\(C_{2}^{n}" + L + "^{2} = " + B + L + "^{2}\\), so \\(C_{2}^{n} = " + B + "\\), i.e. \\(\\frac{n(n - 1)}{2} = " + B + "\\) and \\(n = " + n + "\\). Comparing the coefficients of \\(x\\): \\(" + (sgn < 0 ? "-" : "") + n + L + " = " + (sgn < 0 ? "-" : "") + A + "\\), so \\(" + L + " = " + Lv + "\\).";
  return makeQ(null, null, q, "\\(n = " + n + "\\), \\(" + L + " = " + Lv + "\\)", steps, { kind: "fn", run: (check, qq) => {
    const s = sgn * Lv; check(Number(binom(n, 1)) * s === sgn * A && Number(binom(n, 2)) * s * s === B * Lv * Lv, "Bin symbolic coefficients", qq);
  } });
}
function binProductUnknowns(rng) {
  for (let t = 0; t < 300; t++) {
    const n0 = rng.int(3, 14), m0 = rng.nonzero(-6, 9), q = rng.pick([2, 3, 4, 5, -2, -3]);
    const a1 = q * n0 + m0, a2 = q * q * Number(binom(n0, 2)) + q * n0 * m0;
    const sols = []; for (let n = 1; n <= 60; n++) { const m = a1 - q * n; if (q * q * Number(binom(n, 2)) + q * n * m === a2) sols.push([m, n]); }
    if (sols.length !== 1) continue;
    const mS = rng.pick(["m", "a", "p"]);
    const qs = "[Level 3] Let \\(n\\) be a positive integer. It is given that \\((1 + " + mS + "x)(1 " + (q < 0 ? "-" : "+") + " " + Math.abs(q) + "x)^{n} = \\sum_{k = 0}^{n + 1}a_{k}x^{k}\\). If \\(a_{1} = " + a1 + "\\) and \\(a_{2} = " + a2 + "\\), find the values of \\(" + mS + "\\) and \\(n\\).";
    const steps = "\\(a_{1} = C_{1}^{n}(" + q + ") + " + mS + " = " + q + "n + " + mS + " = " + a1 + "\\) and \\(a_{2} = C_{2}^{n}(" + q + ")^{2} + " + mS + "\\cdot C_{1}^{n}(" + q + ") = " + q * q + "\\cdot\\frac{n(n - 1)}{2} + " + q + "n" + mS + " = " + a2 + "\\). Substituting \\(" + mS + " = " + a1 + " - " + par(q) + "n\\) gives an equation in \\(n\\) whose positive integer solution is \\(n = " + n0 + "\\), so \\(" + mS + " = " + m0 + "\\).";
    return makeQ(null, null, qs, "\\(" + mS + " = " + m0 + "\\), \\(n = " + n0 + "\\)", steps, { kind: "fn", run: (check, qq) => {
      const E = lpow(new Map([[0, 1n], [1, BigInt(q)]]), n0), P2 = lmul(new Map([[0, 1n], [1, BigInt(m0)]]), E);
      check((P2.get(1) || 0n) === BigInt(a1) && (P2.get(2) || 0n) === BigInt(a2) && sols[0][0] === m0 && sols[0][1] === n0, "Bin product unknowns", qq);
    } });
  }
  return null;
}
function binTwoSums(rng) {
  for (let t = 0; t < 300; t++) {
    const a = rng.int(2, 5), b = rng.int(2, 5), m0 = rng.int(2, 9), n0 = rng.int(2, 9); if (a === b) continue;
    const S = a * m0 + b * n0, sols = []; for (let m = 2; m <= 30; m++) for (let n = 2; n <= 30; n++) if (a * m + b * n === S) sols.push([m, n]);
    if (sols.length !== 1) continue;
    const c2 = a * a * Number(binom(m0, 2)) + b * b * Number(binom(n0, 2));
    const q = "[Level 2] Let \\(m\\) and \\(n\\) be integers greater than \\(1\\). In the expansion of \\((1 + " + a + "x)^{m} + (1 + " + b + "x)^{n}\\), the coefficient of \\(x\\) is \\(" + S + "\\). Find the coefficient of \\(x^{2}\\).";
    const steps = "The coefficient of \\(x\\) is \\(" + a + "m + " + b + "n = " + S + "\\). Since \\(m, n \\geq 2\\) are integers, the only solution is \\(m = " + m0 + "\\), \\(n = " + n0 + "\\). The coefficient of \\(x^{2}\\) is \\(" + a * a + "C_{2}^{" + m0 + "} + " + b * b + "C_{2}^{" + n0 + "} = " + a * a * Number(binom(m0, 2)) + " + " + b * b * Number(binom(n0, 2)) + " = " + c2 + "\\).";
    return makeQ(null, null, q, "\\(" + c2 + "\\)", steps, { kind: "fn", run: (check, qq) => { check(sols[0][0] === m0 && sols[0][1] === n0, "Bin two sums unique", qq); } });
  }
  return null;
}
function binLaurentProduct(rng) {
  for (let t = 0; t < 200; t++) {
    const n0 = rng.int(3, 9), c = rng.pick([2, 3, -2, -3]), m = rng.int(3, 5);
    const first = new Map([[0, 1n], [-1, BigInt(c)]]), second = new Map([[0, 1n], [2, 1n]]);
    const prod = (n) => lmul(lpow(first, n), lpow(second, m));
    const E0 = prod(n0), exps = [...E0.keys()].filter((e) => E0.get(e) !== 0n); const s = rng.pick(exps), T = E0.get(s);
    const sols = []; for (let n = 1; n <= 25; n++) { const E = prod(n); if ((E.get(s) || 0n) === T) sols.push(n); }
    if (sols.length !== 1) continue;
    const tcands = exps.filter((e) => e !== s && E0.get(e) !== 0n && e < 0); if (!tcands.length) continue;
    const tt = rng.pick(tcands), ans = E0.get(tt);
    const baseTex = "1 " + (c < 0 ? "-" : "+") + " \\frac{" + Math.abs(c) + "}{x}";
    const q = "[Level 3] Let \\(n\\) be a positive integer. It is given that the coefficient of \\(x^{" + s + "}\\) in the expansion of \\(\\left(" + baseTex + "\\right)^{n}(1 + x^{2})^{" + m + "}\\) is \\(" + T + "\\).\n(a) Find the value of \\(n\\).\n(b) Find the coefficient of \\(x^{" + tt + "}\\) in the expansion.";
    const pairs = []; for (let j = 0; j <= m; j++) { const i = 2 * j - s; if (i >= 0 && i <= n0) pairs.push("\\(C_{" + i + "}^{" + n0 + "}(" + c + ")^{" + i + "} \\times C_{" + j + "}^{" + m + "} = " + binom(n0, i) * BigInt(c) ** BigInt(i) * binom(m, j) + "\\)"); }
    const pairsB = []; for (let j = 0; j <= m; j++) { const i = 2 * j - tt; if (i >= 0 && i <= n0) pairsB.push("\\(C_{" + i + "}^{" + n0 + "}(" + c + ")^{" + i + "} \\times C_{" + j + "}^{" + m + "}\\)"); }
    const steps = "A term \\(x^{" + s + "}\\) arises from \\(x^{-i}\\) in the first factor and \\(x^{2j}\\) in the second with \\(2j - i = " + s + "\\). The coefficient of \\(x^{" + s + "}\\) is the sum over such pairs \\((i, j)\\): " + pairs.join(" + ") + ". Setting this equal to \\(" + T + "\\) and testing positive integers \\(n\\) gives \\(n = " + n0 + "\\).\n(b) For \\(x^{" + tt + "}\\) we need \\(2j - i = " + tt + "\\): the coefficient is " + pairsB.join(" + ") + " \\(= " + ans + "\\).";
    return makeQ(null, null, q, "(a) \\(n = " + n0 + "\\)\n(b) \\(" + ans + "\\)", steps, { kind: "fn", run: (check, qq) => { check(sols.length === 1 && sols[0] === n0 && prod(n0).get(tt) === ans, "Bin Laurent product", qq); } });
  }
  return null;
}
function binRatio(rng) {
  for (let t = 0; t < 300; t++) {
    const n0 = rng.int(5, 20), j0 = rng.int(1, n0 - 3);
    const tri = [binom(n0, j0), binom(n0, j0 + 1), binom(n0, j0 + 2)], g = (a, b) => { while (b) { [a, b] = [b, a % b]; } return a; };
    const gg = g(g(tri[0], tri[1]), tri[2]), red = tri.map((x) => x / gg);
    const sols = []; for (let n = 3; n <= 40; n++) for (let j = 0; j + 2 <= n; j++) { const tt = [binom(n, j), binom(n, j + 1), binom(n, j + 2)], g2 = g(g(tt[0], tt[1]), tt[2]); if (tt.every((x, i) => x / g2 === red[i])) sols.push([n, j + 1]); }
    if (sols.length !== 1) continue;
    const k0 = j0 + 1;
    const q = "[Level 3] Let \\(T_{k}\\) be the coefficient of the \\(k\\)th term in the expansion of \\((x + 1)^{n}\\). If \\(T_{k} : T_{k + 1} : T_{k + 2} = " + red.join(" : ") + "\\), find the values of \\(n\\) and \\(k\\).";
    const steps = "\\(T_{k} = C_{k - 1}^{n}\\). \\(\\frac{T_{k + 1}}{T_{k}} = \\frac{n - k + 1}{k} = " + ftex(F(Number(red[1]), Number(red[0]))) + "\\) and \\(\\frac{T_{k + 2}}{T_{k + 1}} = \\frac{n - k}{k + 1} = " + ftex(F(Number(red[2]), Number(red[1]))) + "\\). Solving these two equations gives \\(n = " + n0 + "\\) and \\(k = " + k0 + "\\).";
    return makeQ(null, null, q, "\\(n = " + n0 + "\\), \\(k = " + k0 + "\\)", steps, { kind: "fn", run: (check, qq) => { check(sols[0][0] === n0 && sols[0][1] === k0, "Bin ratio unique", qq); } });
  }
  return null;
}
function binExpand(rng) {
  if (rng.chance(0.5)) {
    const a = rng.int(1, 2), p = rng.int(1, 3), n = rng.int(2, 4);
    const xa = a === 1 ? "x" : "x^{" + a + "}", inv = xa, x2a = "x^{" + 2 * a + "}";
    const fm = (s) => "\\left(" + xa + " " + s + " \\frac{" + p + "}{" + inv + "}\\right)^{" + n + "}";
    const A = new Map([[a, 1n], [-a, BigInt(p)]]), B = new Map([[a, 1n], [-a, BigInt(-p)]]);
    const R = lmul(lpow(A, n), lpow(B, n));
    const q = "[Level 2] Expand \\(" + fm("+") + fm("-") + "\\).";
    const steps = "\\(" + fm("+") + fm("-") + " = \\left(" + x2a + " - \\frac{" + p * p + "}{" + x2a + "}\\right)^{" + n + "}\\), then use the binomial theorem: \\(" + ltex(R) + "\\).";
    return makeQ(null, null, q, "\\(" + ltex(R) + "\\)", steps, { kind: "fn", run: (check, qq) => { [1.3, 2, 0.7].forEach((x) => { let lhs = 1; lhs = (x ** a + p / x ** a) ** n * (x ** a - p / x ** a) ** n; let rhs = 0; for (const [e, c] of R) rhs += Number(c) * x ** e; check(Math.abs(lhs - rhs) < 1e-6 * (1 + Math.abs(lhs)), "Bin expand value", qq); }); } });
  }
  const c = rng.int(2, 4), n = rng.int(2, 3), e = rng.int(1, 2);
  const xe = e === 1 ? "x" : "x^{" + e + "}", x2e = "x^{" + 2 * e + "}";
  const R = lpow(new Map([[e, 1n], [-e, BigInt(-c)]]), 2 * n);
  const q = "[Level 2] Expand \\(\\left(" + x2e + " - " + 2 * c + " + \\frac{" + c * c + "}{" + x2e + "}\\right)^{" + n + "}\\).";
  const steps = "\\(" + x2e + " - " + 2 * c + " + \\frac{" + c * c + "}{" + x2e + "} = \\left(" + xe + " - \\frac{" + c + "}{" + xe + "}\\right)^{2}\\), so the expression is \\(\\left(" + xe + " - \\frac{" + c + "}{" + xe + "}\\right)^{" + 2 * n + "} = " + ltex(R) + "\\).";
  return makeQ(null, null, q, "\\(" + ltex(R) + "\\)", steps, { kind: "fn", run: (check, qq) => { [1.4, 2.2].forEach((x) => { const lhs = (x ** (2 * e) - 2 * c + c * c / x ** (2 * e)) ** n; let rhs = 0; for (const [ex, cf] of R) rhs += Number(cf) * x ** ex; check(Math.abs(lhs - rhs) < 1e-6 * (1 + Math.abs(lhs)), "Bin expand square value", qq); }); } });
}
function binConjugate(rng) {
  const p = rng.int(1, 3), s = rng.pick([2, 3, 5]), q0 = rng.int(1, 3), n = rng.pick([4, 6]);
  let tot = ZERO;
  for (let j = 0; j <= n; j += 2) tot = fadd(tot, fmul(F(Number(binom(n, j))), fmul(fpow(F(p * p * s), (n - j) / 2), fpow(F(q0 * q0, s), j / 2))));
  tot = fmul(F(2), tot);
  const bq = "\\left(" + (p === 1 ? "" : p) + "\\sqrt{" + s + "} + \\frac{" + q0 + "}{\\sqrt{" + s + "}}\\right)^{" + n + "}", bm = "\\left(" + (p === 1 ? "" : p) + "\\sqrt{" + s + "} - \\frac{" + q0 + "}{\\sqrt{" + s + "}}\\right)^{" + n + "}";
  const q = "[Level 3] Evaluate \\(" + bq + " + " + bm + "\\).";
  const steps = "The odd-power terms cancel, so the sum is \\(2\\left[C_{0}^{" + n + "}(" + (p === 1 ? "" : p) + "\\sqrt{" + s + "})^{" + n + "} + C_{2}^{" + n + "}(" + (p === 1 ? "" : p) + "\\sqrt{" + s + "})^{" + (n - 2) + "}\\left(\\frac{" + q0 + "}{\\sqrt{" + s + "}}\\right)^{2} + \\ldots\\right] = " + ftex(tot) + "\\).";
  return makeQ(null, null, q, "\\(" + ftex(tot) + "\\)", steps, { kind: "num", value: (p * Math.sqrt(s) + q0 / Math.sqrt(s)) ** n + (p * Math.sqrt(s) - q0 / Math.sqrt(s)) ** n, expect: fnum(tot) });
}
function binGreatest(rng) {
  for (let t = 0; t < 100; t++) {
    const p = rng.int(1, 9), q = rng.int(1, 9), n = rng.int(10, 30); if (p === q) continue;
    if (((n + 1) * q) % (p + q) === 0) continue;
    let best = -1n, idx = -1; for (let r = 0; r <= n; r++) { const v = binom(n, r) * BigInt(p) ** BigInt(n - r) * BigInt(q) ** BigInt(r); if (v > best) { best = v; idx = r; } }
    const q0 = "[Level 3] Let \\(a_{k}\\) be the coefficient of \\(x^{k}\\) in the expansion of \\((" + p + " + " + q + "x)^{" + n + "}\\). Find the value of \\(k\\) for which \\(a_{k}\\) is the greatest.";
    const steps = "\\(a_{k} = C_{k}^{" + n + "}" + p + "^{" + n + " - k}" + q + "^{k}\\). \\(\\frac{a_{k}}{a_{k - 1}} = \\frac{(" + (n + 1) + " - k)" + q + "}{k \\cdot " + p + "} \\geq 1\\) when \\(k \\leq \\frac{" + (n + 1) + " \\times " + q + "}{" + p + " + " + q + "} = " + ftex(F((n + 1) * q, p + q)) + "\\). So \\(a_{k}\\) increases up to \\(k = " + idx + "\\) and then decreases: the greatest coefficient is \\(a_{" + idx + "}\\).";
    return makeQ(null, null, q0, "\\(k = " + idx + "\\)", steps, { kind: "fn", run: (check, qq) => { check(idx === Math.floor(((n + 1) * q) / (p + q)), "Bin greatest index", qq); } });
  }
  return null;
}
function binTrinomial(rng) {
  const n = rng.int(4, 10), a = rng.nonzero(-3, 3), b = rng.nonzero(-3, 3), m = rng.int(2, 2 * n - 1);
  const base = new Map([[0, 1n], [1, BigInt(a)], [2, BigInt(b)]]);
  const E = lpow(base, n), ans = E.get(m) || 0n;
  const rows = []; let check0 = 0n;
  for (let l = 0; l <= Math.floor(m / 2); l++) { const j = m - 2 * l; if (j + l > n || j < 0) continue; const mult = binom(n, j + l) * binom(j + l, l); const v = mult * BigInt(a) ** BigInt(j) * BigInt(b) ** BigInt(l); rows.push("\\(j = " + j + ", l = " + l + "\\): \\(" + mult + "(" + a + ")^{" + j + "}(" + b + ")^{" + l + "} = " + v + "\\)"); check0 += v; }
  const q = "[Level 3] Find the coefficient of \\(x^{" + m + "}\\) in the expansion of \\((" + terms([[1, ""], [a, "x"], [b, "x^{2}"]]) + ")^{" + n + "}\\).";
  const steps = "Choose \\(j\\) factors contributing \\(" + terms([[a, "x"]]) + "\\) and \\(l\\) factors contributing \\(" + terms([[b, "x^{2}"]]) + "\\) with \\(j + 2l = " + m + "\\) (and \\(j + l \\leq " + n + "\\)); each choice contributes \\(\\frac{" + n + "!}{(" + n + " - j - l)!\\,j!\\,l!}(" + a + ")^{j}(" + b + ")^{l}\\). " + rows.join("; ") + ". The coefficient is \\(" + ans + "\\).";
  return makeQ(null, null, q, "\\(" + ans + "\\)", steps, { kind: "fn", run: (check, qq) => { check(check0 === ans, "Bin trinomial rows sum", qq); } });
}
reg("m2", "binomial_theorem", null, [
  ["find n from an equation of binomial coefficients", 2, binFindN],
  ["constant term / coefficient / rth term of (x^p + c x^q)^n", 4, binTerms],
  ["find n and b from the first terms of an expansion", 3, binUnknownCoeffs],
  ["find m and n from a_1 and a_2 of a product", 2, binProductUnknowns],
  ["two binomials whose x-coefficients add up to a given value", 2, binTwoSums],
  ["coefficient in a product with 1/x and x² factors", 2, binLaurentProduct],
  ["ratio of three consecutive coefficients", 2, binRatio],
  ["expand a product of conjugate binomials / a perfect square", 2, binExpand],
  ["value of (a + b)^n + (a − b)^n", 1, binConjugate],
  ["greatest coefficient of an expansion", 2, binGreatest],
  ["coefficient in a trinomial expansion", 2, binTrinomial],
]);

/* ---------- More about Trigonometric Functions ---------- */
const piTex = (deg0) => { // deg0 is a multiple of 7.5 degrees
  const f = F(Math.round(deg0 * 2), 360); // fraction of pi: deg/180 = (2deg)/360
  if (f.n === 0) return "0";
  return "\\frac{" + (f.n === 1 ? "" : f.n) + "\\pi}{" + f.d + "}";
};
function tfSecTan(rng) {
  const kind = rng.pick(["sec", "csc"]), p = rng.int(1, 7), q = rng.int(1, 5), sg = rng.sign();
  const k = F(sg * p, q);
  if (feq(fabs(k), ONE) || k.n === 0) return null;
  const kk = fdiv(ONE, k), a = fdiv(fsub(k, kk), F(2)), b = fdiv(fadd(k, kk), F(2)), c = fdiv(b, a); // a = tan or cot, b = sec or csc, c = csc or sec
  const e1 = kind === "sec" ? ["\\tan\\theta", "\\sec\\theta", "\\csc\\theta", "\\sec\\theta - \\tan\\theta"] : ["\\cot\\theta", "\\csc\\theta", "\\sec\\theta", "\\csc\\theta - \\cot\\theta"];
  const eqn = kind === "sec" ? "\\tan\\theta + \\sec\\theta = " + ftex(k) : "\\cot\\theta + \\csc\\theta = " + ftex(k);
  const q0 = "[Level 2] Given that \\(" + eqn + "\\), by considering \\(" + e1[3] + "\\), find the values of \\(" + e1[0] + "\\) and \\(" + e1[2] + "\\).";
  const ident = kind === "sec" ? "\\sec^{2}\\theta - \\tan^{2}\\theta = 1" : "\\csc^{2}\\theta - \\cot^{2}\\theta = 1";
  const steps = "Since \\(" + ident + "\\), \\((" + e1[1] + " + " + e1[0] + ")(" + e1[3] + ") = 1\\), so \\(" + e1[3] + " = \\frac{1}{" + ftex(k) + "} = " + ftex(kk) + "\\). Adding and subtracting: \\(" + e1[0] + " = \\frac{1}{2}\\left(" + ftex(k) + " - " + par(kk) + "\\right) = " + ftex(a) + "\\) and \\(" + e1[1] + " = \\frac{1}{2}\\left(" + ftex(k) + " + " + par(kk) + "\\right) = " + ftex(b) + "\\). " +
    "Hence \\(" + e1[2] + " = \\frac{" + e1[1] + "}{" + e1[0] + "} = " + ftex(c) + "\\).";
  return makeQ(null, null, q0, "\\(" + e1[0] + " = " + ftex(a) + "\\), \\(" + e1[2] + " = " + ftex(c) + "\\)", steps, { kind: "fn", run: (check, qq) => {
    const A = fnum(a), B = fnum(b), C = fnum(c); check(Math.abs(B * B - A * A - 1) < 1e-9 && Math.abs(A + B - fnum(k)) < 1e-9 && Math.abs(B / A - C) < 1e-9, "TF sec+tan", qq);
  } });
}
function tfPyth(rng) {
  const [a0, b0, c0] = rng.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]]);
  const prod = F(a0 * b0, c0 * c0), s1 = F(a0 + b0, c0), s2 = F(b0 - a0, c0), st = F(c0 + b0, a0);
  const q = "[Level 2] Given that \\(\\sin x\\cos x = " + ftex(prod) + "\\), where \\(\\sin x > \\cos x > 0\\), find the values of\n(a) \\(\\sin x + \\cos x\\),\n(b) \\(\\sin x - \\cos x\\),\n(c) \\(\\sec x + \\tan x\\).";
  const steps = "(a) \\((\\sin x + \\cos x)^{2} = 1 + 2\\sin x\\cos x = " + ftex(fadd(ONE, fmul(F(2), prod))) + "\\). Since \\(\\sin x + \\cos x > 0\\), \\(\\sin x + \\cos x = " + ftex(s1) + "\\).\n(b) \\((\\sin x - \\cos x)^{2} = 1 - 2\\sin x\\cos x = " + ftex(fsub(ONE, fmul(F(2), prod))) + "\\). Since \\(\\sin x > \\cos x\\), \\(\\sin x - \\cos x = " + ftex(s2) + "\\).\n(c) Adding and subtracting: \\(\\sin x = " + ftex(F(b0, c0)) + "\\), \\(\\cos x = " + ftex(F(a0, c0)) + "\\). \\(\\sec x + \\tan x = \\frac{1 + \\sin x}{\\cos x} = " + ftex(st) + "\\).";
  return makeQ(null, null, q, "(a) \\(" + ftex(s1) + "\\)\n(b) \\(" + ftex(s2) + "\\)\n(c) \\(" + ftex(st) + "\\)", steps, { kind: "fn", run: (check, qq) => {
    const s = b0 / c0, c = a0 / c0; check(Math.abs(s * c - fnum(prod)) < 1e-12 && Math.abs(s * s + c * c - 1) < 1e-12 && Math.abs(s + c - fnum(s1)) < 1e-12 && Math.abs(s - c - fnum(s2)) < 1e-12 && Math.abs(1 / c + s / c - fnum(st)) < 1e-12, "TF pythagorean", qq);
  } });
}
const TF_ID = [
  { rhs: (x) => Math.tan(x), id: "\\csc 2x - \\cot 2x = \\tan x", proof: "\\csc 2x - \\cot 2x = \\frac{1 - \\cos 2x}{\\sin 2x} = \\frac{2\\sin^{2}x}{2\\sin x\\cos x} = \\frac{\\sin x}{\\cos x} = \\tan x", lhs: (x) => 1 / Math.sin(2 * x) - Math.cos(2 * x) / Math.sin(2 * x), dom: [0, 180], tvals: [[1 / Math.sqrt(3), "\\frac{1}{\\sqrt{3}}", 30], [1, "1", 45], [Math.sqrt(3), "\\sqrt{3}", 60], [-1 / Math.sqrt(3), "-\\frac{1}{\\sqrt{3}}", 150], [-1, "-1", 135], [-Math.sqrt(3), "-\\sqrt{3}", 120]], dtex: "0 < x < \\pi", lo: 0, hi: 180 },
  { rhs: (x) => 1 / Math.tan(x), id: "\\csc 2x + \\cot 2x = \\cot x", proof: "\\csc 2x + \\cot 2x = \\frac{1 + \\cos 2x}{\\sin 2x} = \\frac{2\\cos^{2}x}{2\\sin x\\cos x} = \\frac{\\cos x}{\\sin x} = \\cot x", lhs: (x) => 1 / Math.sin(2 * x) + Math.cos(2 * x) / Math.sin(2 * x), tvals: [[Math.sqrt(3), "\\sqrt{3}", 30], [1, "1", 45], [1 / Math.sqrt(3), "\\frac{1}{\\sqrt{3}}", 60], [-Math.sqrt(3), "-\\sqrt{3}", 150], [-1, "-1", 135], [-1 / Math.sqrt(3), "-\\frac{1}{\\sqrt{3}}", 120]], dtex: "0 < x < \\pi", lo: 0, hi: 180 },
  { rhs: (x) => Math.tan(Math.PI / 4 + x), id: "\\sec 2x + \\tan 2x = \\tan\\left(\\frac{\\pi}{4} + x\\right)", proof: "\\sec 2x + \\tan 2x = \\frac{1 + \\sin 2x}{\\cos 2x} = \\frac{(\\cos x + \\sin x)^{2}}{(\\cos x - \\sin x)(\\cos x + \\sin x)} = \\frac{\\cos x + \\sin x}{\\cos x - \\sin x} = \\frac{1 + \\tan x}{1 - \\tan x} = \\tan\\left(\\frac{\\pi}{4} + x\\right)", lhs: (x) => 1 / Math.cos(2 * x) + Math.tan(2 * x), tvals: [[Math.sqrt(3), "\\sqrt{3}", 15], [2 + Math.sqrt(3), "2 + \\sqrt{3}", 30], [-Math.sqrt(3), "-\\sqrt{3}", 75], [-(2 + Math.sqrt(3)), "-(2 + \\sqrt{3})", 60]], dtex: "0 < x < \\frac{\\pi}{2}", lo: 0, hi: 90, lhsTex: "\\sec 2x + \\tan 2x" },
  { rhs: (x) => Math.tan(Math.PI / 4 - x), id: "\\sec 2x - \\tan 2x = \\tan\\left(\\frac{\\pi}{4} - x\\right)", proof: "\\sec 2x - \\tan 2x = \\frac{1 - \\sin 2x}{\\cos 2x} = \\frac{(\\cos x - \\sin x)^{2}}{(\\cos x - \\sin x)(\\cos x + \\sin x)} = \\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = \\frac{1 - \\tan x}{1 + \\tan x} = \\tan\\left(\\frac{\\pi}{4} - x\\right)", lhs: (x) => 1 / Math.cos(2 * x) - Math.tan(2 * x), tvals: [[1 / Math.sqrt(3), "\\frac{1}{\\sqrt{3}}", 15], [-1 / Math.sqrt(3), "-\\frac{1}{\\sqrt{3}}", 75], [2 - Math.sqrt(3), "2 - \\sqrt{3}", 30], [-(2 - Math.sqrt(3)), "-(2 - \\sqrt{3})", 60]], dtex: "0 < x < \\frac{\\pi}{2}", lo: 0, hi: 90, lhsTex: "\\sec 2x - \\tan 2x" },
  { rhs: (x) => 2 / Math.tan(2 * x), id: "\\cot x - \\tan x = 2\\cot 2x", proof: "\\cot x - \\tan x = \\frac{\\cos^{2}x - \\sin^{2}x}{\\sin x\\cos x} = \\frac{\\cos 2x}{\\frac{1}{2}\\sin 2x} = 2\\cot 2x", lhs: (x) => 1 / Math.tan(x) - Math.tan(x), tvals: [[2 * Math.sqrt(3), "2\\sqrt{3}", 15], [2, "2", 22.5], [2 / Math.sqrt(3), "\\frac{2}{\\sqrt{3}}", 30], [-2, "-2", 67.5], [-2 * Math.sqrt(3), "-2\\sqrt{3}", 75], [-2 / Math.sqrt(3), "-\\frac{2}{\\sqrt{3}}", 60]], dtex: "0 < x < \\frac{\\pi}{2}", lo: 0, hi: 90, lhsTex: "\\cot x - \\tan x" },
];
function tfIdentity(rng) {
  const d = rng.pick(TF_ID), [tv, ttex, sol] = rng.pick(d.tvals);
  const lhsTex = d.lhsTex || d.id.split(" = ")[0];
  const q = "[Level 2]\n(a) Prove that \\(" + d.id + "\\).\n(b) Hence, solve \\(" + lhsTex + " = " + ttex + "\\) for \\(" + d.dtex + "\\).";
  const solTex = piTex(sol);
  const steps = "(a) \\(" + d.proof + "\\).\n(b) By (a), \\(" + d.id.split(" = ")[1] + " = " + ttex + "\\), which gives \\(x = " + solTex + "\\) in the given range.";
  return makeQ(null, null, q, "(a) Proved.\n(b) \\(x = " + solTex + "\\)", steps, { kind: "fn", run: (check, qq) => {
    const x = sol * RAD; check(Math.abs(d.lhs(x) - tv) < 1e-9, "TF identity solution " + sol, qq);
    [0.3, 0.55, 1.1].forEach((xx) => { const l = d.lhs(xx); const rhsFn = d.rhs(xx); if (isFinite(l)) check(Math.abs(l - rhsFn) < 1e-8 * (1 + Math.abs(l)), "TF identity holds", qq); });
    const sols = []; for (let xd = d.lo + 0.01; xd < d.hi - 1e-9; xd += 0.01) { const a = d.lhs(xd * RAD) - tv, b = d.lhs((xd + 0.01) * RAD) - tv; if (isFinite(a) && isFinite(b) && a * b <= 0 && Math.abs(a - b) < 5) sols.push(xd); }
    check(sols.length === 1 && Math.abs(sols[0] - sol) < 0.02, "TF identity unique solution " + sols, qq);
  } });
}
function tfRForm(rng) {
  const [p, q0, R] = rng.pick(PYTH), swap = rng.chance(0.5), a = swap ? q0 : p, b = swap ? p : q0, c = rng.nonzero(-(R - 1), R - 1);
  const alpha = Math.atan2(b, a), us = [Math.asin(c / R), Math.PI - Math.asin(c / R)].map((u) => u - alpha);
  const norm = us.map((x) => { let y = x; while (y < 0) y += 2 * Math.PI; while (y > 2 * Math.PI) y -= 2 * Math.PI; return y; }).sort((x, y) => x - y);
  if (norm.some((x) => x < 1e-6 || x > 2 * Math.PI - 1e-6)) return null;
  const f3r = (x) => String(Number(x.toPrecision(3)));
  const q = "[Level 2]\n(a) Express \\(" + terms([[a, "\\sin x"], [b, "\\cos x"]]) + "\\) in the form \\(R\\sin(x + \\alpha)\\), where \\(R > 0\\) and \\(0 < \\alpha < \\frac{\\pi}{2}\\).\n(b) Hence, solve \\(" + terms([[a, "\\sin x"], [b, "\\cos x"]]) + " = " + c + "\\) for \\(0 \\leq x \\leq 2\\pi\\). Give your answers correct to 3 significant figures.";
  const ans = "(a) \\(" + R + "\\sin(x + " + f3r(alpha) + ")\\)\n(b) \\(x = " + norm.map(f3r).join("\\) or \\(") + "\\)";
  const steps = "(a) \\(R\\sin(x + \\alpha) = R\\sin x\\cos\\alpha + R\\cos x\\sin\\alpha\\), so \\(R\\cos\\alpha = " + a + "\\), \\(R\\sin\\alpha = " + b + "\\). \\(R = \\sqrt{" + a + "^{2} + " + b + "^{2}} = " + R + "\\) and \\(\\tan\\alpha = \\frac{" + b + "}{" + a + "}\\), \\(\\alpha = " + f3r(alpha) + "\\).\n(b) \\(" + R + "\\sin(x + " + f3r(alpha) + ") = " + c + "\\), so \\(\\sin(x + " + f3r(alpha) + ") = \\frac{" + c + "}{" + R + "}\\). For \\(0 \\leq x \\leq 2\\pi\\) this gives \\(x = " + norm.map(f3r).join(", ") + "\\).";
  return makeQ(null, null, q, ans, steps, { kind: "fn", run: (check, qq) => {
    norm.forEach((x) => check(Math.abs(a * Math.sin(x) + b * Math.cos(x) - c) < 1e-9, "TF R-form solution", qq));
    [0.4, 1.9, 4.2].forEach((x) => check(Math.abs(a * Math.sin(x) + b * Math.cos(x) - R * Math.sin(x + alpha)) < 1e-9, "TF R-form identity", qq));
    let cnt = 0; for (let x = 0; x < 2 * Math.PI; x += 0.0005) { const g1 = a * Math.sin(x) + b * Math.cos(x) - c, g2 = a * Math.sin(x + 0.0005) + b * Math.cos(x + 0.0005) - c; if (g1 * g2 <= 0) cnt++; }
    check(cnt === norm.length, "TF R-form root count " + cnt, qq);
  } });
}
reg("m2", "more_about_trigonometric_functions", null, [
  ["given tanθ + secθ (or cscθ + cotθ), find tanθ and cscθ", 3, tfSecTan],
  ["given sin x cos x, find sin x ± cos x and sec x + tan x", 3, tfPyth],
  ["prove a double-angle identity, then solve an equation with it", 4, tfIdentity],
  ["express a sin x + b cos x as R sin(x + α), then solve", 3, tfRForm],
]);


/* ===================== public API ===================== */
const regKey = (g, t, ty) => g + "/" + t + "/" + (ty || "*");
function weightedPick(rng, list) {
  let total = 0; list.forEach((f) => { total += f.w; });
  let x = rng.next() * total;
  for (const f of list) { x -= f.w; if (x < 0) return f; }
  return list[list.length - 1];
}
// has(group, topic, type): is there a generator? (type may be empty for "all types of this topic")
function has(group, topic, type) {
  if (type) return !!REG[regKey(group, topic, type)];
  return !!TOPIC_TYPES[group + "/" + topic];
}
function formatNames(group, topic, type) {
  const f = REG[regKey(group, topic, type)];
  return f ? f.map((x) => x.name) : [];
}
function generate(group, topic, type, count, opts) {
  opts = opts || {};
  const rng = makeRng(opts.seed);
  count = Math.max(1, Math.min(200, parseInt(count, 10) || 10));
  const all = TOPIC_TYPES[group + "/" + topic] || [];
  let keys;
  if (all.length === 1 && all[0] === "*") keys = ["*"];            // topic without question types
  else if (type && all.indexOf(type) >= 0) keys = [type];
  else keys = all.slice();                                         // every type of the topic
  const out = [], seen = new Set();
  let order = [], attempts = 0;
  while (out.length < count && attempts++ < count * 80 && keys.length) {
    if (!order.length) order = rng.shuffle(keys);
    const tk = order.pop(), fmts = REG[regKey(group, topic, tk === "*" ? null : tk)];
    if (!fmts) continue;
    let q = null;
    try { q = weightedPick(rng, fmts).fn(rng); } catch (e) { q = null; }
    if (!q || seen.has(q.question)) continue;
    seen.add(q.question);
    out.push(q);
  }
  return out;
}
const QuestionGeneratorAPI = { has, formatNames, generate };

if (typeof module !== "undefined" && module.exports) module.exports = Object.assign({ _internals: { REG, TOPIC_TYPES, makeRng } }, QuestionGeneratorAPI);
root.QuestionGenerator = QuestionGeneratorAPI;
})(typeof window !== "undefined" ? window : globalThis);
