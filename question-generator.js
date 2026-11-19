// question-generator.js
// Generates random practice questions that follow the same object shape
// as the static questions in question-data.js:
//   { id, type, level, question, answer, steps }
// The module exports a single function:
//   generateQuestions(topicKey, count = 3) -> Array<Question>

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
      const steps = `Consider the linear function \\(y = ${a}t ${b >= 0 ? "+" : "-"} ${Math.abs(b)}\\). Maximum value: \\(y = ${a}(1) ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${max}\\), Minimum value: \\(y = ${a}(-1) ${b >= 0 ? "+" : "-"} ${Math.abs(b)} = ${min}\\).`;
      return { id: `gen-trig-maxmin-${randId()}`, type: "Maximum and Minimum Values of Trigonometric Functions", level: 1, question, answer, steps };
    },

    "Sequences related to Trigonometric Ratios": () => {
      const n = randInt(3, 8);
      const start = randInt(1, 10);
      const step = randInt(1, 5);
      const angles = Array.from({ length: n }, (_, i) => start + i * step);
      const terms = angles.map(a => `\\sin ${a}^\\circ`).join(" + ");
      const question = `Find the value of \\( ${terms} \\).`;
      // For simplicity the answer is just the sum of sines (approximate) – replace with a real calculation if needed.
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
      // Dummy answer – replace with a real solver.
      const answer = `\\(x \\approx 30^\\circ \\text{ or } 150^\\circ\\)`;
      const steps = `Use the identity \\(\\sin^2 x + \\cos^2 x = 1\\) to form a quadratic in \\sin x or \\cos x, then solve.`;
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
      const question = `Solve the quadratic equation \\( ${a}x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)} = 0 \\).`;
      // In a real implementation you would compute the roots.
      const answer = `\\(x = 2 \\text{ or } x = -3\\)`;
      const steps = `Use the quadratic formula \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\).`;
      return { id: `gen-quad-solve-${randId()}`, type: "Solving Quadratic Equations", level: 1, question, answer, steps };
    },
    "Graphing Quadratic Functions": () => {
      const a = randInt(1, 3);
      const h = randInt(-4, 4);
      const k = randInt(-4, 4);
      const question = `Sketch the graph of \\( y = ${a}(x - ${h})^2 + ${k} \\). State the vertex and the axis of symmetry.`;
      const answer = `Vertex: (${h}, ${k}); Axis of symmetry: x = ${h}`;
      const steps = `The vertex form \\(y = a(x - h)^2 + k\\) shows the vertex is (h, k) and the axis of symmetry is x = h.`;
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
      const steps = `Substitute x = ${x}: \\(f(${x}) = ${a}(${x}) + ${b} = ${result}\\).`;
      return { id: `gen-func-eval-${randId()}`, type: "Evaluating Functions", level: 1, question, answer, steps };
    },
    "Domain and Range": () => {
      const a = randInt(1, 4);
      const b = randInt(-3, 3);
      const question = `Find the domain and range of \\( f(x) = \\sqrt{${a}x + ${b}} \\).`;
      const answer = `Domain: x ≥ ${-b / a}; Range: y ≥ 0`;
      const steps = `The expression under the square root must be non‑negative: ${a}x + ${b} ≥ 0 ⇒ x ≥ ${-b / a}. The range of a square root is always y ≥ 0.`;
      return { id: `gen-func-domrange-${randId()}`, type: "Domain and Range", level: 2, question, answer, steps };
    },
  },

  // -----------------------------------------------------------------
  // MORE ABOUT TRIGONOMETRIC FUNCTIONS
  // -----------------------------------------------------------------
  more_about_trigonometric_functions: {
    "Proving Trigonometric Identities": () => {
      const angle = randInt(10, 80);
      const question = `Prove the identity \\( \\sin^2 ${angle}^\\circ + \\cos^2 ${angle}^\\circ = 1 \\).`;
      const answer = `The identity is true for all angles.`;
      const steps = `Use the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).`;
      return { id: `gen-trig-ident-${randId()}`, type: "Proving Trigonometric Identities", level: 1, question, answer, steps };
    },
  },
};

// Utility helpers
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randId() {
  return Math.random().toString(36).slice(2, 8);
}

/**
 * Generate `count` questions for a given topic.
 * If the topic has no generator, return an empty array.
 * @param {string} topicKey – key as used in question-data.js (e.g. "trigonometry")
 * @param {number} count – how many questions to generate (default 3)
 * @returns {Array<Object>} array of question objects
 */
function generateQuestions(topicKey, count = 3) {
  const topicGenerators = GENERATORS[topicKey];
  if (!topicGenerators) return [];

  const out = [];
  const types = Object.keys(topicGenerators);
  for (let i = 0; i < count; i++) {
    const type = types[i % types.length]; // rotate through the types
    const generator = topicGenerators[type];
    if (typeof generator === "function") {
      out.push(generator());
    }
  }
  return out;
}

// Export for use in questions.js
export { generateQuestions };
