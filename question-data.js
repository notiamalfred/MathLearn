// questions-data.js
const QUESTIONS_DATA = {
  core: {
    trigonometry: [
      // Exercise 1 – Level 1
      {
        id: "trig-1a",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 2\\sin\\theta - 5 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = -3, Minimum = -7"
      },
      {
        id: "trig-1b",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\cos\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 7, Minimum = -1"
      },
      // Exercise 2 – Level 1
      {
        id: "trig-2a",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 2\\cos^2\\theta - 5 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = -3, Minimum = -5"
      },
      {
        id: "trig-2b",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\sin^2\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 3, Minimum = -1"
      },
      {
        id: "trig-2c",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 1 - 2\\sin^2\\theta + 3\\cos^2\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 4, Minimum = -1"
      },
      // Exercise 3 – Level 2
      {
        id: "trig-3a",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (1 - 4\\sin\\theta)^2 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 25, Minimum = 0"
      },
      {
        id: "trig-3b",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = -(4\\cos\\theta - 3)^2 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 0, Minimum = -49"
      },
      {
        id: "trig-3c",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 4\\sin^2\\theta + 4\\sin\\theta + 1 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 9, Minimum = 1"
      },
      // Exercise 4 – Level 2 (from image 3)
      {
        id: "trig-4a",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 2\\sin^2\\theta - 2\\sin\\theta - 4 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 0, Minimum = -4.5"
      },
      {
        id: "trig-4b",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (2\\cos\\theta - 1)(\\cos\\theta - 2) \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 9, Minimum = -1"
      },
      // Exercise 5 – Level 2 (from image 2 – rational forms, no max/min in some cases)
      {
        id: "trig-5a",
        level: 2,
        question: "Find the maximum/minimum value (if any) of \\( y = \\dfrac{-6\\sin\\theta}{3\\sin\\theta - 1} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "No maximum or minimum"
      },
      {
        id: "trig-5b",
        level: 2,
        question: "Find the maximum/minimum value of \\( y = \\dfrac{4\\cos\\theta}{2 - \\cos\\theta} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 4, Minimum = -4/3"
      },
      {
        id: "trig-5c",
        level: 2,
        question: "Find the maximum/minimum value of \\( y = \\dfrac{2\\cos^2\\theta}{2 + \\sin^2\\theta} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 1, Minimum = 0"
      },
      // Exercise 6 – Level 2 (from image 1 – restricted domains)
      {
        id: "trig-6a",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\cos\\theta \\) where \\( 90^\\circ \\le \\theta \\le 180^\\circ \\).",
        answer: "Maximum = 7, Minimum = 3"
      },
      {
        id: "trig-6b",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (1 - 4\\sin\\theta)^2 \\) where \\( 90^\\circ \\le \\theta \\le 150^\\circ \\).",
        answer: "Maximum = 9, Minimum = 1"
      },
      {
        id: "trig-6c",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 2\\sin^2\\theta - 2\\sin\\theta - 4 \\) where \\( 90^\\circ \\le \\theta \\le 150^\\circ \\).",
        answer: "Maximum = -4, Minimum = -9/2"
      }
    ],

    // ===== S.4 Quadratic Equation (S4_Math_1_Quadratic_Equation.docx) =====
    // Sections still to add, in worksheet order:
    //   Ch1 A) Solving Quadratic Equations   Ch1 B) Completing Square
    //   Ch2 A) Use of Discriminant           Ch2 B) Sum and Product of Roots   Ch2 C) Complex Numbers
    // id pattern: qe-<chapter><section>-ex<number><part>   e.g. qe-1a-ex1a, qe-2c-ex4b  (every id must be unique)
    quadratic_equation: [
      // Ch1 A) Exercise 1
      {
        id: "qe-1a-ex1a",
        question: "Solve the quadratic equation \\( x(3x+4) = 9x^{2} - 16 \\).",
        answer: "\\( x = -\\dfrac{4}{3} \\) or \\( x = 2 \\)"
      },
      {
        id: "qe-1a-ex1b",
        question: "Solve the quadratic equation \\( x(3x+4) = 2(x^{2}+6) \\).",
        answer: "\\( x = -6 \\) or \\( x = 2 \\)"
      },
      {
        id: "qe-1a-ex1c",
        question: "Solve the quadratic equation \\( (3x-4)^{2} = 4x^{2} \\).",
        answer: "\\( x = \\dfrac{4}{5} \\) or \\( x = 4 \\)"
      },
      {
        id: "qe-1a-ex1d",
        question: "Solve the quadratic equation \\( x(3x-4) = -2(x^{2}-6) \\).",
        answer: "\\( x = -\\dfrac{6}{5} \\) or \\( x = 2 \\)"
      },
      {
        id: "qe-1a-ex1e",
        question: "[Challenging] Solve \\( (x-2)(x-3) = (a-2)(a-3) \\) for \\( x \\), where \\( a \\) is a constant.",
        answer: "\\( x = a \\) or \\( x = 5 - a \\)"
      }
    ],

    // ===== S.4 Functions and Graphs (S4_Math_2_Functions_and_Graphs.docx) =====
    // Sections still to add, in worksheet order:
    //   A) Quadratic Function (Practice 1-4 & Exercises 1-17)   B) MC Questions related to Functions
    //   C) Applications of Completing Square                    D) Coordinate Geometry & Special Lines and Centers
    // id pattern: fg-<section>-ex<number><part>   e.g. fg-a-ex4, fg-c-ex2b
    // For a question with a graph, crop the figure into images/ and add  image: "images/<name>.png"  (+ imageAlt).
    // In a multiple-choice question put each option on its own line with \n.
    functions_and_graphs: [
      // A) Exercise 4
      {
        id: "fg-a-ex4",
        question: "Refer to the graph of \\( y = (ax+4)^{2} + b \\). Which of the following is true?\nA. \\( a < 0 \\) and \\( b < 0 \\)\nB. \\( a < 0 \\) and \\( b > 0 \\)\nC. \\( a > 0 \\) and \\( b < 0 \\)\nD. \\( a > 0 \\) and \\( b > 0 \\)",
        image: "images/fg-a-ex4.png",
        imageAlt: "An upward-opening parabola whose vertex lies above the x-axis and to the right of the y-axis.",
        answer: "B. The vertex is \\( \\left(-\\dfrac{4}{a}, b\\right) \\). Its x-coordinate is positive, so \\( -\\dfrac{4}{a} > 0 \\) and \\( a < 0 \\). Its y-coordinate is positive, so \\( b > 0 \\)."
      },
      // A) Exercise 5
      {
        id: "fg-a-ex5",
        question: "The figure shows the graph of \\( y = (ax-h)^{2} + k \\), where \\( a \\), \\( h \\) and \\( k \\) are constants. Which of the following must be true?\nI. \\( ah < 0 \\)\nII. \\( k < 0 \\)\nIII. \\( h^{2} = k \\)\nA. I only\nB. III only\nC. I and II only\nD. II and III only",
        image: "images/fg-a-ex5.png",
        imageAlt: "An upward-opening parabola passing through the origin, with its vertex to the left of the y-axis and below the x-axis.",
        answer: "C. The vertex is \\( \\left(\\dfrac{h}{a}, k\\right) \\), with negative x- and y-coordinates, so \\( h \\) and \\( a \\) have different signs (I is true) and \\( k < 0 \\) (II is true). The graph passes through \\( (0,0) \\), so \\( h^{2} + k = 0 \\), i.e. \\( h^{2} = -k \\), not \\( k \\) (III is false)."
      }
    ]
  },
  m2: {
    // Placeholder – add M2 topics and questions here later.
  }
};
