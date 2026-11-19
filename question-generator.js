// question-generator.js
// Mutation-based generator: picks a random static question of the requested
// type and topic, mutates its equation coefficients, and recomputes the answer.
//
// Exposed as window.__ML_GENERATOR__(groupKey, topicKey, count, type).
// The static bank must already be on window.__ML_QUESTIONS.

/* ------------------------------------------------------------------------- */
/* utilities                                                                 */
/* ------------------------------------------------------------------------- */

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randId() {
  return Math.random().toString(36).slice(2, 8);
}
function cloneQuestion(q, overrides) {
  return Object.assign({}, q, overrides || {}, { id: "gen-" + (q.id || "q") + "-" + randId() });
}

/* ------------------------------------------------------------------------- */
/* numeric helpers                                                           */
/* ------------------------------------------------------------------------- */

// Solve a*sin(x) + b*cos(x) + c = 0 on [0, 360) and return sorted degrees.
function solveLinearTrig(a, b, c) {
  const R = Math.sqrt(a * a + b * b);
  if (R === 0) return [];
  const ratio = -c / R;
  if (ratio < -1 || ratio > 1) return [];
  const phi = Math.atan2(b, a); // a sin x + b cos x = R sin(x + phi)
  const base = Math.asin(ratio); // in [-pi/2, pi/2]
  const solutions = [];
  for (let k = 0; k < 4; k++) {
    const t1 = base + 2 * Math.PI * k - phi;
    const t2 = Math.PI - base + 2 * Math.PI * k - phi;
    [t1, t2].forEach((t) => {
      let deg = (t * 180) / Math.PI;
      deg = ((deg % 360) + 360) % 360;
      if (deg >= 0 && deg < 360 && !solutions.some((s) => Math.abs(s - deg) < 0.05)) {
        solutions.push(deg);
      }
    });
  }
  return solutions.sort((x, y) => x - y);
}

function fmtDeg(d) {
  const r = Math.round(d * 10) / 10;
  return (Number.isInteger(r) ? r.toString() : r.toFixed(1)) + "^{\\circ}";
}

function fmtNumber(n) {
  if (Number.isInteger(n)) return n.toString();
  const frac = n.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  return frac;
}

/* ------------------------------------------------------------------------- */
/* mutators — one per question type that supports safe mutation              */
/* ------------------------------------------------------------------------- */

const MUTATORS = {};

/* ---- Maximum / minimum of a linear trig expression ---------------------- */
// Seed shape:  y = a\sin\theta + b   or   y = a\cos\theta + b
MUTATORS["Maximum and Minimum Values of Trigonometric Functions"] = function (q) {
  const text = q.question;
  // Try linear sin / cos form first.
  const lin = text.match(/y\s*=\s*(-?\d*)\s*\\\\(sin|cos)\\\\theta\s*([+-]\s*\d+)/);
  if (lin) {
    const op = lin[2];
    let a = lin[1] === "" || lin[1] === "-" ? (lin[1] === "-" ? -1 : 1) : parseInt(lin[1], 10);
    const b = parseInt(lin[3].replace(/\s+/g, ""), 10);
    // Randomise a (non-zero, 2..6) and b (-9..9).
    a = pick([-1, 1]) * randInt(2, 6);
    const nb = randInt(-9, 9);
    const max = a + nb;
    const min = -a + nb;
    const newQ = text.replace(lin[0], `y = ${a}\\\\${op}\\\\theta ${nb >= 0 ? "+" : "-"} ${Math.abs(nb)}`);
    return cloneQuestion(q, {
      question: newQ,
      answer: `Maximum = ${max}, Minimum = ${min}`,
      steps: `Consider the linear function \\(y = ${a}t ${nb >= 0 ? "+" : "-"} ${Math.abs(nb)}\\). ` +
             `Maximum: \\(y = ${a}(1) ${nb >= 0 ? "+" : "-"} ${Math.abs(nb)} = ${max}\\), ` +
             `Minimum: \\(y = ${a}(-1) ${nb >= 0 ? "+" : "-"} ${Math.abs(nb)} = ${min}\\).`,
    });
  }
  // Unsupported shape -> return unchanged (but with a fresh id).
  return cloneQuestion(q);
};

/* ---- Trigonometric equations of the form a sin x + b cos x + c = 0 ----- */
MUTATORS["Trigonometric Equations"] = function (q) {
  const text = q.question;
  const m = text.match(/(-?\d*)\s*\\\\sin\s*(\w+)\s*([+-]\s*\d*)\s*\\\\cos\s*\2\s*([+-]\s*\d+)\s*=\s*0/);
  if (!m) return cloneQuestion(q); // unsupported -> unchanged
  const v = m[2]; // variable, usually x or \theta
  const a0 = m[1] === "" || m[1] === "-" ? (m[1] === "-" ? -1 : 1) : parseInt(m[1], 10);
  const b0 = m[3].replace(/\s+/g, "") === "+" ? 1 : parseInt(m[3].replace(/\s+/g, ""), 10);
  const c0 = parseInt(m[4], 10);

  // Randomise coefficients, keeping them small and non-zero where needed.
  let a = pick([-1, 1]) * randInt(1, 6);
  let b = pick([-1, 1]) * randInt(1, 6);
  let c = randInt(-6, 6);
  if (a === 0 && b === 0) a = 2;

  const sols = solveLinearTrig(a, b, c);
  if (!sols.length) return cloneQuestion(q); // degenerate -> fall back

  const answer = sols.map((d) => `x = ${fmtDeg(d)}`).join(" or ");
  const newQ = text.replace(m[0], `${a}\\\\sin ${v} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}\\\\cos ${v} ${c >= 0 ? "+" : "-"} ${Math.abs(c)} = 0`);
  return cloneQuestion(q, {
    question: newQ,
    answer: `\\(${answer}\\)`,
    steps: `Rewrite \\(${a}\\sin ${v} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}\\cos ${v} = ${-c}\\). ` +
           `Solving on \\(0 \\le ${v} \\le 360^\\circ\\) gives ${answer}.`,
  });
};

/* ---- Quadratic equations: a x^2 + b x + c = 0 (single equation only) --- */
MUTATORS["Solving Quadratic Equations"] = function (q) {
  const text = q.question;
  // Only mutate a question that contains exactly one quadratic equation and no (a)/(b) parts.
  if (/\([a-e]\)/.test(text)) return cloneQuestion(q);
  const m = text.match(/(-?\d*)x\^2\s*([+-]\s*\d*)x\s*([+-]\s*\d+)\s*=\s*0/);
  if (!m) return cloneQuestion(q);
  let a = m[1] === "" || m[1] === "-" ? (m[1] === "-" ? -1 : 1) : parseInt(m[1], 10);
  let b = m[2].replace(/\s+/g, "") === "+" ? 1 : parseInt(m[2].replace(/\s+/g, ""), 10);
  let c = parseInt(m[3], 10);

  // Randomise while keeping the discriminant manageable.
  a = pick([-1, 1]) * randInt(1, 4);
  b = randInt(-8, 8);
  c = randInt(-10, 10);
  const disc = b * b - 4 * a * c;
  if (disc < 0) return cloneQuestion(q); // avoid complex roots in mutation

  const sqrt = Math.sqrt(disc);
  const r1 = (-b + sqrt) / (2 * a);
  const r2 = (-b - sqrt) / (2 * a);
  const roots = [r1, r2].sort((x, y) => x - y).map(fmtNumber);
  const answer = `x = ${roots[0]} or x = ${roots[1]}`;
  const newQ = text.replace(m[0], `${a}x^{2} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)} = 0`);
  return cloneQuestion(q, {
    question: newQ,
    answer: `\\(${answer}\\)`,
    steps: `Use the quadratic formula with \\(a=${a}, b=${b}, c=${c}\\). Discriminant \\(= ${disc}\\), so ${answer}.`,
  });
};

/* ------------------------------------------------------------------------- */
/* public API                                                                 */
/* ------------------------------------------------------------------------- */

function getStaticQuestions(groupKey, topicKey, type) {
  const group = (window.__ML_QUESTIONS || {})[groupKey] || {};
  let qs = group[topicKey] || [];
  if (type) qs = qs.filter((q) => (q.type || "Other") === type);
  return qs;
}

/**
 * Generate `count` questions for a group/topic/type by mutating random seeds.
 * @param {string} groupKey  e.g. "core"
 * @param {string} topicKey  e.g. "trigonometry"
 * @param {number} count
 * @param {string|null} type  question type string, or null for all types
 */
function generateQuestions(groupKey, topicKey, count, type) {
  const seeds = getStaticQuestions(groupKey, topicKey, type);
  if (!seeds.length) return [];

  const out = [];
  for (let i = 0; i < count; i++) {
    const seed = pick(seeds);
    const mutator = MUTATORS[seed.type];
    const mutated = mutator ? mutator(seed) : cloneQuestion(seed);
    out.push(mutated);
  }
  return out;
}

window.__ML_GENERATOR__ = generateQuestions;
