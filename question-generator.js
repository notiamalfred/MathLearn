// question-generator.js
// Generates randomized practice questions that follow the same object shape
// as the static questions in question-data.js:
//   { id, type, level, question, answer, steps }
//
// Exports:
//   generateQuestions(topicKey, count = 3, type = null) -> Array<Question>
//     - If type is given, returns `count` questions of that type only.
//     - Otherwise, rotates through the topic's available types.

const GENERATORS = {
  // -----------------------------------------------------------------
  // TRIGONOMETRY
  // -----------------------------------------------------------------
  trigonometry: {
    "Maximum and Minimum Values of Trigonometric Functions": () => {
      const a = randInt(2, 5);
      const b = randInt(-5, 5);
      const op = Math.random() > 0.5 ? "sin" : "cos";
      const question = `Find the maximum and minimum value of \\( y = ${a}\\${op}\\theta ${b >= 0 ? "+" : "-"} ${Math.abs(b)} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).`;
      const max = a + b;
      const min = -a + b;
      const answer = `Maximum = ${max}, Minimum = ${min}`;
      const steps = `Consider the linear function \\(y = ${a}t ${b >= 0 ? "+" : "-"} ${Math.abs(b)}\\). Maximum: \\(y = ${a}(1) ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${max}\\), Minimum: \\(y = ${a}(-1) ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${min}\\).`;
      return { id: `gen-trig-maxmin-${randId()}`, type: "Maximum and Minimum Values of Trigonometric Functions", level: 1, question, answer, steps };
    },

    "Sequences related to Trigonometric Ratios": () => {
      const n = randInt(3, 8);
      const start = randInt(1, 10);
      const step = randInt(1, 5);
      const angles = Array.from({ length: n }, (_, i) => start + i * step);
      const terms = angles.map(a => `\\sin ${a}^\\circ`).join(" + ");
      const question = `Find the value of \\( ${terms} \\).`;
      const sum = angles.reduce((s, a) => s + Math.sin((a * Math.PI) / 180), 0);
      const answer = `\\( ${sum.toFixed(3)} \\)`;
      const steps = `Compute each sine value and add them.`;
      return { id: `gen-trig-seq-${randId()}`, type: "Sequences related to Trigonometric Ratios", level: 2, question, answer, steps };
    },

    "Trigonometric Equations": () => {
      const a = randInt(1, 3);
      const b = randInt(-3, 3);
      const c = randInt(-3, 3);
      const question = `Solve \\( ${a}\\sin x ${b >= 0 ? "+" : "-"} ${Math.abs(b)}\\cos x ${c >= 0 ? "+" : "-"} ${Math.abs(c)} = 0 \\) for \\(0 \\le x \\le 360^\\circ\\).`;
      const answer = `\\(x \\approx 30^\\circ \\text{ or } 150^\\circ\\)`;
      const steps = `Use \\(\\sin^2 x + \\cos^2 x = 1\\) to form a quadratic, then solve.`;
      return { id: `gen-trig-eq-${randId()}`, type: "Trigonometric Equations", level: 2, question, answer, steps };
    },
  },

  // -----------------------------------------------------------------
  // QUADRATIC EQUATIONS
  // -----------------------------------------------------------------
  quadratic_equation: {
    "Solving Quadratic Equations": () => {
      const a = randInt(1, 4);
      const b = randInt(-5, 5);
      const c = randInt(-6, 6);
      const question = `Solve \\( ${a}x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)} = 0 \\).`;
      const answer = `\\(x = 2 \\text{ or } x = -3\\)`;
      const steps = `Use the quadratic formula \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\).`;
      return { id: `gen-quad-solve-${randId()}`, type: "Solving Quadratic Equations", level: 1, question, answer, steps };
    },
    "Graphing Quadratic Functions": () => {
      const a = randInt(1, 3);
      const h = randInt(-4, 4);
      const k = randInt(-4, 4);
      const question = `Sketch \\( y = ${a}(x - ${h})^2 + ${k} \\). State the vertex and axis of symmetry.`;
      const answer = `Vertex: (${h}, ${k}); Axis: x = ${h}`;
      const steps = `Vertex form \\(y = a(x - h)^2 + k\\) gives vertex (h, k) and axis x = h.`;
      return { id: `gen-quad-graph-${randId()}`, type: "Graphing Quadratic Functions", level: 1, question, answer, steps };
    },
  },

  // -----------------------------------------------------------------
  // FUNCTIONS AND GRAPHS
  // -----------------------------------------------------------------
  functions_and_graphs: {
    "Evaluating Functions": () => {
      const a = randInt(1, 5);
      const b = randInt(-3, 3);
      const x = randInt(-2, 4);
      const question = `Given \\( f(x) = ${a}x + ${b} \\), find \\( f(${x}) \\).`;
      const result = a * x + b;
      const answer = `\\( ${result} \\)`;
      const steps = `\\(f(${x}) = ${a}(${x}) + ${b} = ${result}\\).`;
      return { id: `gen-func-eval-${randId()}`, type: "Evaluating Functions", level: 1, question, answer, steps };
    },
    "Domain and Range": () => {
      const a = randInt(1, 4);
      const b = randInt(-3, 3);
      const question = `Find domain and range of \\( f(x) = \\sqrt{${a}x + ${b}} \\).`;
      const answer = `Domain: x ≥ ${-b / a}; Range: y ≥ 0`;
      const steps = `${a}x + ${b} ≥ 0 ⇒ x ≥ ${-b / a}. Range of a square root is y ≥ 0.`;
      return { id: `gen-func-domrange-${randId()}`, type: "Domain and Range", level: 2, question, answer, steps };
    },
  },

  // -----------------------------------------------------------------
  // MORE ABOUT TRIGONOMETRIC FUNCTIONS
  // -----------------------------------------------------------------
  more_about_trigonometric_functions: {
    "Proving Trigonometric Identities": () => {
      const angle = randInt(10, 80);
      const question = `Prove \\( \\sin^2 ${angle}^\\circ + \\cos^2 ${angle}^\\circ = 1 \\).`;
      const answer = `True for all angles.`;
      const steps = `Use the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).`;
      return { id: `gen-trig-ident-${randId()}`, type: "Proving Trigonometric Identities", level: 1, question, answer, steps };
    },
  },
};

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randId() {
  return Math.random().toString(36).slice(2, 8);
}

/**
 * Generate questions for a topic.
 * @param {string} topicKey
 * @param {number} count
 * @param {string|null} type  – if provided, only this question type is generated
 */
function generateQuestions(topicKey, count = 3, type = null) {
  const topicGenerators = GENERATORS[topicKey];
  if (!topicGenerators) return [];

  const out = [];

  // Explicit type requested
  if (type) {
    const gen = topicGenerators[type];
    if (typeof gen !== "function") return [];
    for (let i = 0; i < count; i++) out.push(gen());
    return out;
  }

  // Rotate through all types
  const types = Object.keys(topicGenerators);
  for (let i = 0; i < count; i++) {
    const t = types[i % types.length];
    const generator = topicGenerators[t];
    if (typeof generator === "function") out.push(generator());
  }
  return out;
}

window.__ML_GENERATOR__ = generateQuestions;
