// questions-data.js
const QUESTIONS_DATA = {
  core: {
    trigonometry: [
      // Exercise 1 – Level 1
      {
        id: "trig-1a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 2\\sin\\theta - 5 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = -3, Minimum = -7",
        steps: "Consider the linear function \\(y = 2t - 5\\), Maximum value: \\(y = 2(1) - 5 = - 3\\), Minimum value: \\(y = 2( - 1) - 5 = - 7\\)"
      },
      {
        id: "trig-1b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\cos\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 7, Minimum = -1",
        steps: "Consider the linear function \\(y = 3 - 4t\\), Maximum value: \\(y = 3 - 4( - 1) = 7\\), Minimum value: \\(y = 3 - 4(1) = - 1\\)"
      },
      // Exercise 2 – Level 1
      {
        id: "trig-2a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 2\\cos^2\\theta - 5 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = -3, Minimum = -5",
        steps: "Consider the quadratic function \\(y = 2t^{2} - 5\\), Maximum value: \\(y = 2(1) - 5 = - 3\\), Minimum value: \\(y = 2(0) - 5 = - 5\\)"
      },
      {
        id: "trig-2b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\sin^2\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 3, Minimum = -1",
        steps: "Consider the quadratic function \\(y = 3 - 4t^{2}\\), Maximum value: \\(y = 3 - 4(0) = 3\\), Minimum value: \\(y = 3 - 4(1) = - 1\\)"
      },
      {
        id: "trig-2c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 1 - 2\\sin^2\\theta + 3\\cos^2\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 4, Minimum = -1",
        steps: "Note that \\(y = 1 - 2\\sin^{2}\\theta + 3\\cos^{2}\\theta = 1 - 2\\sin^{2}\\theta + 3(1 - \\sin^{2}\\theta) = 4 - 5\\sin^{2}\\theta\\). Consider \\(y = 4 - 5t^{2}\\), Maximum value: \\(y = 4 - 5(0) = 4\\), Minimum value: \\(y = 4 - 5(1) = - 1\\)\nFigure 1: Graph of \\(y = 1 - 2\\sin^{2}\\theta + 3\\cos^{2}\\theta\\): it keeps the shape of sine graphs with wider ranges.",
        stepsImages: [{ src: "images/trig-2c-sol.png", width: 518 }]
      },
      // Exercise 3 – Level 2
      {
        id: "trig-3a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (1 - 4\\sin\\theta)^2 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 25, Minimum = 0",
        steps: "Consider \\(y = (1 - 4t)^{2}\\). By substituting \\(t = 1\\) and \\(- 1\\) to \\(1 - 4t\\), values are \\(- 3\\) and \\(5\\) (\\(0\\) is inside range). Maximum value: \\(y = (5)^{2} = 25\\), Minimum value: \\(y = (0)^{2} = 0\\)."
      },
      {
        id: "trig-3b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = -(4\\cos\\theta - 3)^2 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 0, Minimum = -49",
        steps: "Consider \\(y = - (4t - 3)^{2}\\). For \\(4t - 3\\), the values at \\(t = 1, - 1\\) are \\(1\\) and \\(- 7\\) (\\(0\\) is inside the range). Hence \\((4t - 3)^{2}\\) has maximum value \\(49\\) and minimum value \\(0\\), so \\(y = - (4t - 3)^{2}\\) has maximum value \\(0\\) and minimum value \\(- 49\\)."
      },
      {
        id: "trig-3c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 4\\sin^2\\theta + 4\\sin\\theta + 1 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 9, Minimum = 0",
        steps: "\\(y = 4\\sin^{2}\\theta + 4\\sin\\theta + 1 = (2\\sin\\theta + 1)^{2}\\). Consider \\(y = (2t + 1)^{2}\\). The values of \\(2t + 1\\) at \\(t = 1, - 1\\) are \\(3\\) and \\(- 1\\) (\\(0\\) is inside the range). Maximum value: \\(y = 3^{2} = 9\\), Minimum value: \\(y = 0^{2} = 0\\)."
      },
      // Exercise 4 – Level 2 (from image 3)
      {
        id: "trig-4a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 2\\sin^2\\theta - 2\\sin\\theta - 4 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 0, Minimum = -4.5",
        steps: "\\(y = 2\\left( \\sin\\theta - \\frac{1}{2} \\right)^{2} - \\frac{9}{2}\\). Substituting \\(t = 1,\\frac{1}{2}, - 1\\) into \\(2\\left( t - \\frac{1}{2} \\right)^{2} - \\frac{9}{2}\\) gives \\(- 4, - \\frac{9}{2},0\\). Maximum value \\(= 0\\), Minimum value \\(= - \\frac{9}{2}\\)."
      },
      {
        id: "trig-4b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (2\\cos\\theta - 1)(\\cos\\theta - 2) \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 9, Minimum = -1",
        steps: "\\(y = 2\\cos^{2}\\theta - 5\\cos\\theta + 2 = 2\\left( \\cos\\theta - \\frac{5}{4} \\right)^{2} - \\frac{9}{8}\\). Substituting \\(t = 1\\) and \\(- 1\\) gives \\(- 1\\) and \\(9\\). Maximum value \\(= 9\\), Minimum value \\(= - 1\\)."
      },
      // Exercise 5 – Level 2 (from image 2 – rational forms, no max/min in some cases)
      {
        id: "trig-5a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum/minimum value (if any) of \\( y = \\dfrac{-6\\sin\\theta}{3\\sin\\theta - 1} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "No maximum or minimum",
        steps: "\\(y = - 2 - \\frac{2}{3\\sin\\theta - 1}\\). Since \\(t = \\frac{1}{3}\\) is in \\(\\lbrack - 1,1\\rbrack\\), denominator can be \\(0\\Rightarrow \\) there is no maximum nor minimum."
      },
      {
        id: "trig-5b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum/minimum value of \\( y = \\dfrac{4\\cos\\theta}{2 - \\cos\\theta} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 4, Minimum = -4/3",
        steps: "\\(y = - 4 + \\frac{8}{2 - \\cos\\theta}\\). For \\(- 1 \\leq t \\leq 1\\), Maximum value \\(= - 4 + \\frac{8}{2 - 1} = 4\\), Minimum value \\(= - 4 + \\frac{8}{2 - ( - 1)} = - \\frac{4}{3}\\)."
      },
      {
        id: "trig-5c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum/minimum value of \\( y = \\dfrac{2\\cos^2\\theta}{2 + \\sin^2\\theta} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 1, Minimum = 0",
        steps: "\\(y = \\frac{2 - 2\\sin^{2}\\theta}{2 + \\sin^{2}\\theta} = - 2 + \\frac{6}{2 + \\sin^{2}\\theta}\\). For \\(0 \\leq t^{2} \\leq 1\\), Maximum value \\(= - 2 + \\frac{6}{2 + 0} = 1\\), Minimum value \\(= - 2 + \\frac{6}{2 + 1} = 0\\)."
      },
      // Exercise 6 – Level 2 (from image 1 – restricted domains)
      {
        id: "trig-6a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\cos\\theta \\) where \\( 90^\\circ \\le \\theta \\le 180^\\circ \\).",
        answer: "Maximum = 7, Minimum = 3",
        steps: "For \\(90^{\\circ} \\leq \\theta \\leq 180^{\\circ}\\), \\(- 1 \\leq \\cos\\theta \\leq 0\\). Maximum value \\(= 3 - 4( - 1) = 7\\), minimum value \\(= 3 - 4(0) = 3\\)."
      },
      {
        id: "trig-6b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (1 - 4\\sin\\theta)^2 \\) where \\( 90^\\circ \\le \\theta \\le 150^\\circ \\).",
        answer: "Maximum = 9, Minimum = 1",
        steps: "For \\(90^{\\circ} \\leq \\theta \\leq 150^{\\circ}\\), \\(\\frac{1}{2} \\leq \\sin\\theta \\leq 1\\). Maximum value \\(= (1 - 4 \\times 1)^{2} = 9\\), minimum value \\(= \\left( 1 - 4 \\times \\frac{1}{2} \\right)^{2} = 1\\)."
      },
      {
        id: "trig-6c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 2\\sin^2\\theta - 2\\sin\\theta - 4 \\) where \\( 90^\\circ \\le \\theta \\le 150^\\circ \\).",
        answer: "Maximum = -4, Minimum = -9/2",
        steps: "\\(y = 2\\left( \\sin\\theta - \\frac{1}{2} \\right)^{2} - \\frac{9}{2}\\) for \\(\\frac{1}{2} \\leq \\sin\\theta \\leq 1\\). Maximum value \\(= 2\\left( 1 - \\frac{1}{2} \\right)^{2} - \\frac{9}{2} = - 4\\), Minimum value \\(= - \\frac{9}{2}\\)."
      },

      // ---- Chapter 10 A) Maximum and Minimum Values of Trigonometric Functions: Summarizing Exercises 7-9 ----
      {
        id: "trig-7",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        question: "[Level 2]\nFind the maximum/minimum value of these functions for \\(0^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\).\n(a) \\(y = 5 - 3\\cos\\theta\\)\n(b) \\(y = \\frac{48}{3\\cos^{2}\\theta + 4\\sin^{2}\\theta}\\) (2526-WYK-S4-Final-II-Q42)\n(c) \\(y = \\cos^{2}\\theta - 2\\cos\\theta + 2\\)\n(d) \\(y = \\frac{6 + 6\\sin\\theta}{3 + 2\\sin\\theta}\\)\n(e) \\(y = (\\sin\\theta + 1)^{2}(\\sin\\theta - 1)^{2}\\)\n(f) \\(y = \\frac{2(\\sin\\theta - 2)^{2}}{\\sin^{2}\\theta - 4\\sin\\theta + 3}\\) (Challenging)\n(g) \\(y = \\frac{4\\sin^{2}\\theta - 4\\sin\\theta - 7}{(2\\sin\\theta - 1)^{2}}\\) (Challenging) (2425-WYK-S4-Final-II-Q44)\n(h) \\(y = - \\tan^{2}\\theta - 2\\tan\\theta\\)",
        answer: "(a) Maximum = \\(8\\), Minimum = \\(2\\)\n(b) Maximum = \\(16\\), Minimum = \\(12\\)\n(c) Maximum = \\(5\\), Minimum = \\(1\\)\n(d) Maximum = \\(\\frac{12}{5}\\), Minimum = \\(0\\)\n(e) Maximum = \\(1\\), Minimum = \\(0\\)\n(f) No maximum value; Minimum = \\(\\frac{9}{4}\\)\n(g) Maximum = \\(\\frac{1}{9}\\); no minimum value\n(h) Maximum = \\(1\\); no minimum value",
        steps: "(a) Maximum value: \\(5 - 3( - 1) = 8\\), Minimum value: \\(5 - 3(1) = 2\\)\n(b) \\(y = \\frac{48}{3 + \\sin^{2}\\theta}\\Rightarrow \\) Maximum value: \\(\\frac{48}{3 + 0} = 16\\), Minimum value: \\(\\frac{48}{3 + 1} = 12\\)\n(c) \\(y = (\\cos\\theta - 1)^{2} + 1\\Rightarrow \\) Maximum value: \\(( - 2)^{2} + 1 = 5\\), Minimum value: \\(0^{2} + 1 = 1\\)\n(d) \\(y = 3 - \\frac{3}{3 + 2\\sin\\theta}\\Rightarrow \\) Maximum value: \\(3 - \\frac{3}{3 + 2(1)} = \\frac{12}{5}\\), Minimum value: \\(3 - \\frac{3}{3 + 2( - 1)} = 0\\)\n(e) \\(y = (\\sin^{2}\\theta - 1)^{2} = \\cos^{4}\\theta \\Rightarrow \\) Maximum value: \\(1^{4} = 1\\), Minimum value: \\(0^{4} = 0\\)\n(f) \\(y = 2 + \\frac{2}{(\\sin\\theta - 2)^{2} - 1}\\). When \\(\\sin\\theta = 1\\), denominator \\(= 0\\Rightarrow \\) no maximum value. Minimum value \\(= 2 + \\frac{2}{( - 1 - 2)^{2} - 1} = \\frac{9}{4}\\).\n(g) \\(y = 1 - \\frac{8}{(2\\sin\\theta - 1)^{2}}\\). When \\(\\sin\\theta = \\frac{1}{2}\\), denominator \\(= 0\\Rightarrow \\) no minimum value. Maximum value: \\(1 - \\frac{8}{\\lbrack 2( - 1) - 1\\rbrack^{2}} = \\frac{1}{9}\\).\n(h) \\(y = - (\\tan\\theta + 1)^{2} + 1\\Rightarrow \\) Maximum value: \\(- (0)^{2} + 1 = 1\\). No minimum value."
      },
      {
        id: "trig-8",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        question: "[Level 2]\nFind the maximum/minimum value of these functions.\n(a) \\(y = \\frac{5 - \\sin\\theta}{4 + \\sin\\theta}\\) where \\(0^{\\circ} \\leq \\theta \\leq 90^{\\circ}\\) (2005-CE-MATH-II-Q20)\n(b) \\(y = \\frac{1}{(3 - 2\\sin\\theta)^{3}}\\) where \\(180^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\)\n(c) \\(y = 2\\tan^{2}\\theta - 4\\sqrt{3}\\tan\\theta + 1\\) where \\(180^{\\circ} \\leq \\theta \\leq 270^{\\circ}\\)",
        answer: "(a) Maximum = \\(\\frac{5}{4}\\), Minimum = \\(\\frac{4}{5}\\)\n(b) Maximum = \\(\\frac{1}{27}\\), Minimum = \\(\\frac{1}{125}\\)\n(c) No maximum value; Minimum = \\(- 5\\)",
        steps: "(a) For \\(0^{\\circ} \\leq \\theta \\leq 90^{\\circ},0 \\leq \\sin\\theta \\leq 1\\). \\(y = - 1 + \\frac{9}{4 + \\sin\\theta}\\Rightarrow \\) Maximum value \\(= - 1 + \\frac{9}{4 + 0} = \\frac{5}{4}\\), minimum value \\(= - 1 + \\frac{9}{4 + 1} = \\frac{4}{5}\\).\n(b) For \\(180^{\\circ} \\leq \\theta \\leq 360^{\\circ}, - 1 \\leq \\sin\\theta \\leq 0\\). Maximum value \\(= \\frac{1}{\\lbrack 3 - 2(0)\\rbrack^{3}} = \\frac{1}{27}\\), minimum value \\(= \\frac{1}{\\lbrack 3 - 2( - 1)\\rbrack^{3}} = \\frac{1}{125}\\).\n(c) For \\(180^{\\circ} \\leq \\theta \\leq 270^{\\circ},\\tan\\theta \\geq 0\\). \\(y = 2(\\tan\\theta - \\sqrt{3})^{2} - 5\\Rightarrow \\) There is no maximum value. Minimum value: \\(2(0)^{2} - 5 = - 5\\)."
      },
      {
        id: "trig-9",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        question: "[Level 3]\nFind the values of the unknown, which are non-zero integers, of the following functions:\n(a) \\(y = a\\sin\\theta + b\\), with maximum value \\(6\\) and minimum value \\(- 2\\).\n(b) \\(y = p\\cos\\theta - q\\), with maximum value \\(7\\) and minimum value \\(- 3\\).\n(c) \\(y = (u\\sin\\theta + v)^{2}\\), with maximum value \\(9\\) and minimum value \\(1\\).",
        answer: "(a) \\(a = 4,b = 2\\) or \\(a = - 4,b = 2\\)\n(b) \\(p = 5,q = - 2\\) or \\(p = - 5,q = - 2\\)\n(c) \\(u = 1,v = 2\\); \\(u = - 1,v = 2\\); \\(u = 1,v = - 2\\); or \\(u = - 1,v = - 2\\)",
        steps: "(a) Case 1 (\\(a > 0\\)): \\(a + b = 6, - a + b = - 2\\Rightarrow a = 4,b = 2\\). Case 2 (\\(a < 0\\)): \\(- a + b = 6,a + b = - 2\\Rightarrow a = - 4,b = 2\\).\n(b) Case 1 (\\(p > 0\\)): \\(p - q = 7, - p - q = - 3\\Rightarrow p = 5,q = - 2\\). Case 2 (\\(p < 0\\)): \\(- p - q = 7,p - q = - 3\\Rightarrow p = - 5,q = - 2\\).\n(c) Case 1 (\\(u\\sin\\theta + v \\in \\lbrack 1,3\\rbrack,u > 0\\)): \\(u = 1,v = 2\\). Case 2 (\\(u < 0\\)): \\(u = - 1,v = 2\\). Case 3 (\\(u\\sin\\theta + v \\in \\lbrack - 3, - 1\\rbrack,u > 0\\)): \\(u = 1,v = - 2\\). Case 4 (\\(u < 0\\)): \\(u = - 1,v = - 2\\)."
      },
      // ---- Chapter 10 B) Sequences related to Trigonometric Ratios ----
      {
        id: "trig-b1",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\sin^{2}185^{\\circ} + \\sin^{2}189^{\\circ} + \\sin^{2}193^{\\circ} + \\ldots + \\sin^{2}265^{\\circ}\\)",
        answer: "\\(10.5\\)",
        steps: "\\(= \\sin^{2}5^{\\circ} + \\sin^{2}9^{\\circ} + \\sin^{2}13^{\\circ} + \\ldots + \\sin^{2}85^{\\circ} = (\\sin^{2}5^{\\circ} + \\cos^{2}5^{\\circ}) + \\ldots + (\\sin^{2}41^{\\circ} + \\cos^{2}41^{\\circ}) + \\sin^{2}45^{\\circ} = 1 \\times 10 + 0.5 = 10.5\\)\nRemarks: Sum \\(=\\) Number of terms \\(\\times \\frac{1}{2} = 21 \\times \\frac{1}{2} = 10.5\\)."
      },
      {
        id: "trig-b2",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\sin^{2}1^{\\circ} + \\sin^{2}2^{\\circ} + \\sin^{2}3^{\\circ} + \\ldots + \\sin^{2}359^{\\circ} + \\sin^{2}360^{\\circ}\\)",
        answer: "\\(180\\)",
        steps: "\\(= 4(\\sin^{2}1^{\\circ} + \\sin^{2}2^{\\circ} + \\ldots + \\sin^{2}89^{\\circ}) + 1 + 0 + 1 + 0 = 4(44 + 0.5) + 2 = 180\\)"
      },
      {
        id: "trig-b3",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] [2425-WYK-S4-Final-II-Q43] \\(\\sin^{2}1^{\\circ} + \\sin^{2}3^{\\circ} + \\sin^{2}5^{\\circ} + \\ldots + \\sin^{2}179^{\\circ}\\)",
        answer: "\\(45\\)",
        steps: "\\(= 2\\lbrack(\\sin^{2}1^{\\circ} + \\sin^{2}89^{\\circ}) + \\ldots + (\\sin^{2}43^{\\circ} + \\sin^{2}47^{\\circ}) + \\sin^{2}45^{\\circ}\\rbrack = 2(1 \\times 22 + 0.5) = 45\\)"
      },
      {
        id: "trig-b4",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\tan 91^{\\circ}\\tan 93^{\\circ}\\tan 95^{\\circ}\\ldots\\tan 177^{\\circ}\\tan 179^{\\circ}\\)",
        answer: "\\(- 1\\)",
        steps: "\\(= ( - \\tan 1^{\\circ})( - \\tan 3^{\\circ})\\ldots( - \\tan 45^{\\circ})\\left( - \\frac{1}{\\tan 43^{\\circ}} \\right)\\ldots\\left( - \\frac{1}{\\tan 1^{\\circ}} \\right) = - \\tan 45^{\\circ} = - 1\\)"
      },
      {
        id: "trig-b5",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\cos 1^{\\circ} - \\cos 2^{\\circ} + \\cos 3^{\\circ} - \\cos 4^{\\circ} + \\ldots + \\cos 179^{\\circ}\\)",
        answer: "\\(0\\)",
        steps: "\\(= (\\cos 1^{\\circ} + \\cos 179^{\\circ}) - (\\cos 2^{\\circ} + \\cos 178^{\\circ}) + \\ldots + (\\cos 89^{\\circ} + \\cos 91^{\\circ}) - \\cos 90^{\\circ} = - \\cos 90^{\\circ} = 0\\)"
      },
      {
        id: "trig-b6",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 2] [1991-CE-Math-II-Q47] \\(\\cos 90^{\\circ} + \\cos 180^{\\circ} + \\cos 270^{\\circ} + \\cos 360^{\\circ} + \\ldots + \\cos 1800^{\\circ}\\)",
        answer: "\\(0\\)",
        steps: "\\(= (\\cos 90^{\\circ} + \\cos 180^{\\circ} + \\cos 270^{\\circ} + \\cos 360^{\\circ}) \\times \\frac{1800}{360} = (0 - 1 + 0 + 1) \\times 5 = 0\\)"
      },
      {
        id: "trig-b7",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 2] \\(\\cos^{2}275^{\\circ} - \\cos^{2}280^{\\circ} + \\cos^{2}285^{\\circ} - \\cos^{2}290^{\\circ} + \\ldots - \\cos^{2}450^{\\circ}\\)",
        answer: "\\(0\\)",
        steps: "\\(= 2\\lbrack(\\cos^{2}85^{\\circ} + \\cos^{2}5^{\\circ}) + \\ldots + (\\cos^{2}55^{\\circ} + \\cos^{2}35^{\\circ}) + \\cos^{2}45^{\\circ}\\rbrack - 2\\lbrack(\\cos^{2}80^{\\circ} + \\cos^{2}10^{\\circ}) + \\ldots + (\\cos^{2}50^{\\circ} + \\cos^{2}40^{\\circ})\\rbrack - \\cos^{2}0^{\\circ} = 2(4 + 0.5) - 2(4) - 1 = 0\\)"
      },
      {
        id: "trig-b8",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 2] [2526-WYK-S5-Midyear-II-Q32] \\(\\log_{10}(\\tan 1^{\\circ}) + \\log_{10}(\\tan 2^{\\circ}) + \\log_{10}(\\tan 3^{\\circ}) + \\ldots + \\log_{10}(\\tan 89^{\\circ})\\)",
        answer: "\\(0\\)",
        steps: "\\(= \\log_{10}\\lbrack(\\tan 1^{\\circ})(\\tan 2^{\\circ})(\\tan 3^{\\circ})\\ldots(\\tan 89^{\\circ})\\rbrack = \\log_{10}\\lbrack 1\\rbrack = 0\\)"
      },
      // ---- Chapter 10 C) Trigonometric Equations ----
      {
        id: "trig-c1",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(\\sin(x + 45^{\\circ}) = \\frac{1}{2}\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 105^{\\circ}\\) or \\(345^{\\circ}\\)",
        steps: "\\(45^{\\circ} \\leq x + 45^{\\circ} \\leq 405^{\\circ}\\Rightarrow x + 45^{\\circ} = 150^{\\circ}\\ or\\ 390^{\\circ}\\Rightarrow x = 105^{\\circ}\\ or\\ 345^{\\circ}\\)"
      },
      {
        id: "trig-c2",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(\\cos(2x + 30^{\\circ}) = \\frac{1}{2}\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 15^{\\circ},135^{\\circ},195^{\\circ}\\) or \\(315^{\\circ}\\)",
        steps: "\\(30^{\\circ} \\leq 2x + 30^{\\circ} \\leq 750^{\\circ}\\Rightarrow 2x + 30^{\\circ} = 60^{\\circ},300^{\\circ},420^{\\circ}\\ or\\ 660^{\\circ}\\Rightarrow x = 15^{\\circ},135^{\\circ},195^{\\circ}\\ or\\ 315^{\\circ}\\)"
      },
      {
        id: "trig-c3",
        type: "Trigonometric Equations",
        question: "[Level 1] [2223-WYK-S4-MATH-II-Q28] For \\(0 \\leq x < 360^{\\circ}\\), how many roots does the equation \\(4\\cos^{2}x - 3\\cos^{4}x = 1\\) have?",
        answer: "\\(6\\) roots",
        steps: "\\((3\\cos^{2}x - 1)(\\cos^{2}x - 1) = 0\\Rightarrow \\cos x = \\pm \\frac{1}{\\sqrt{3}}\\ or\\ \\pm 1\\). \\(4\\) roots for \\(\\pm \\frac{1}{\\sqrt{3}}\\) plus \\(0^{\\circ}\\) and \\(180^{\\circ}\\) (\\(360^{\\circ}\\) excluded) \\(\\Rightarrow 6\\) roots in total."
      },
      {
        id: "trig-c4",
        type: "Trigonometric Equations",
        question: "[Level 1] [2026-DSE-Math-II-Q41] For \\(90^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\), how many roots does the equation \\(6\\sin^{4}\\theta - 5\\sin^{2}\\theta + 1 = 0\\) have?",
        answer: "\\(6\\) roots",
        steps: "\\((3\\sin^{2}\\theta - 1)(2\\sin^{2}\\theta - 1) = 0\\Rightarrow \\sin\\theta = \\pm \\frac{1}{\\sqrt{3}}\\) or \\(\\pm \\frac{1}{\\sqrt{2}}\\). On \\(\\lbrack 90^{\\circ},360^{\\circ}\\rbrack\\), \\(2\\) roots in QII and \\(4\\) roots in QIII/QIV \\(\\Rightarrow 6\\) roots in total."
      },
      {
        id: "trig-c5",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(2\\sin^{2}x - \\sin x\\cos x - 5\\cos^{2}x = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\). (Hint: You need to use the quadratic formula first)",
        answer: "\\(x = 61.6^{\\circ},127^{\\circ},242^{\\circ}\\) or \\(307^{\\circ}\\)",
        steps: "\\(2\\tan^{2}x - \\tan x - 5 = 0\\Rightarrow \\tan x = \\frac{1 \\pm \\sqrt{41}}{4}\\Rightarrow x = 61.6^{\\circ},127^{\\circ},242^{\\circ}\\ or\\ 307^{\\circ}\\)"
      },
      {
        id: "trig-c6",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(2 - 5\\cos x\\sin x = 0\\) for \\(90^{\\circ} \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 207^{\\circ}\\) or \\(243^{\\circ}\\)",
        steps: "\\(2\\tan^{2}x - 5\\tan x + 2 = 0\\Rightarrow (2\\tan x - 1)(\\tan x - 2) = 0\\Rightarrow \\tan x = \\frac{1}{2}\\ or\\ 2\\Rightarrow x = 207^{\\circ}\\ or\\ 243^{\\circ}\\)"
      },
      {
        id: "trig-c7",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(2\\cos^{2}x - \\cos x = 3\\sin x - 6\\sin x\\cos x\\) for \\(0 \\leq x \\leq 360^{\\circ}\\). (Hint: You need to factorize the expression first)",
        answer: "\\(x = 60^{\\circ},162^{\\circ},300^{\\circ}\\) or \\(342^{\\circ}\\)",
        steps: "\\((2\\cos x - 1)(\\cos x + 3\\sin x) = 0\\Rightarrow \\cos x = \\frac{1}{2}\\ or\\ \\tan x = - \\frac{1}{3}\\Rightarrow x = 60^{\\circ},162^{\\circ},300^{\\circ}\\ or\\ 342^{\\circ}\\)"
      },
      {
        id: "trig-c8",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(5\\tan^{2}x - 3\\cos x - 3\\tan x + 5\\tan x\\cos x = 0\\) for \\(90^{\\circ} \\leq x \\leq 270^{\\circ}\\).",
        answer: "\\(x = 211^{\\circ}\\) or \\(218^{\\circ}\\)",
        steps: "\\((\\tan x + \\cos x)(5\\tan x - 3) = 0\\Rightarrow \\sin^{2}x - \\sin x - 1 = 0\\ or\\ \\tan x = \\frac{3}{5}\\Rightarrow \\sin x = \\frac{1 - \\sqrt{5}}{2}\\ or\\ \\tan x = \\frac{3}{5}\\Rightarrow x = 211^{\\circ}\\ or\\ 218^{\\circ}\\)"
      },
      {
        id: "trig-c9",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(\\sin x = \\cos 166^{\\circ}\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 256^{\\circ}\\) or \\(284^{\\circ}\\)",
        steps: "\\(\\sin x = - \\cos 14^{\\circ}\\Rightarrow \\sin x = \\sin(270^{\\circ} \\pm 14^{\\circ})\\Rightarrow x = 256^{\\circ}\\ or\\ 284^{\\circ}\\)"
      },
      {
        id: "trig-c10",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(\\sin x = - \\sin 205^{\\circ}\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 25^{\\circ}\\) or \\(155^{\\circ}\\)",
        steps: "\\(- \\sin 205^{\\circ} = \\sin 25^{\\circ}\\Rightarrow x = 25^{\\circ}\\ or\\ 155^{\\circ}\\)"
      },
      {
        id: "trig-c11",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(4\\sin x - 3\\cos x - 3 = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 73.7^{\\circ}\\) or \\(180^{\\circ}\\)",
        steps: "\\(16 - 16\\cos^{2}x = 9 + 18\\cos x + 9\\cos^{2}x\\Rightarrow (25\\cos x - 7)(\\cos x + 1) = 0\\Rightarrow x = 73.7^{\\circ}\\ or\\ 180^{\\circ}\\) (\\(286^{\\circ}\\) rej.)"
      },
      {
        id: "trig-c12",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(25\\sin x - 15\\cos x - 3 = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 36.9^{\\circ}\\) or \\(205^{\\circ}\\)",
        steps: "\\(850\\cos^{2}x + 90\\cos x - 616 = 0\\Rightarrow (5\\cos x - 4)(85\\cos x + 77) = 0\\Rightarrow x = 36.9^{\\circ}\\ or\\ 205^{\\circ}\\) (\\(155^{\\circ},323^{\\circ}\\) rej.)"
      },
      {
        id: "trig-c13",
        type: "Trigonometric Equations",
        question: "[Level 2] If \\(\\sin\\theta\\) and \\(\\cos\\theta\\) are the roots of the quadratic equation \\(3x^{2} + x - m = 0\\), find the value of \\(m\\).",
        answer: "\\(m = \\frac{4}{3}\\)",
        steps: "\\(\\sin\\theta + \\cos\\theta = - \\frac{1}{3}\\Rightarrow 1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{9}\\Rightarrow 2\\left( - \\frac{m}{3} \\right) = - \\frac{8}{9}\\Rightarrow m = \\frac{4}{3}\\)"
      },
      {
        id: "trig-c14",
        type: "Trigonometric Equations",
        question: "[Level 2]\n(a) Prove that \\(2x + 1\\) is a factor of \\(2x^{3} + 5x^{2} - 4x - 3\\).\n(b) Hence, solve \\(2\\sin^{3}x + 5\\sin^{2}x - 4\\sin x - 3 = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "(a) \\(2x + 1\\) is a factor.\n(b) \\(x = 90^{\\circ},210^{\\circ}\\) or \\(330^{\\circ}\\)",
        steps: "(a) \\(2\\left( - \\frac{1}{2} \\right)^{3} + 5\\left( - \\frac{1}{2} \\right)^{2} - 4\\left( - \\frac{1}{2} \\right) - 3 = 0\\therefore 2x + 1\\) is a factor.\n(b) \\((2\\sin x + 1)(\\sin x - 1)(\\sin x + 3) = 0\\Rightarrow \\sin x = - \\frac{1}{2}\\ or\\ 1\\Rightarrow x = 90^{\\circ},210^{\\circ}\\ or\\ 330^{\\circ}\\)."
      },
      {
        id: "trig-c15",
        type: "Trigonometric Equations",
        question: "[Level 2]\n(a) Prove that \\(x + 1\\) is a factor of \\(2x^{3} + 2x^{2} - x - 1\\).\n(b) Hence, solve \\(2\\sin^{3}\\theta + 1 = 2\\cos^{2}\\theta + \\sin\\theta\\) for \\(0^{\\circ} < \\theta < 270^{\\circ}\\).",
        answer: "(a) \\(x + 1\\) is a factor.\n(b) \\(\\theta = 45^{\\circ},135^{\\circ}\\) or \\(225^{\\circ}\\)",
        steps: "(a) \\(2( - 1)^{3} + 2( - 1)^{2} - ( - 1) - 1 = 0\\therefore x + 1\\) is a factor.\n(b) \\((\\sin\\theta + 1)(2\\sin^{2}\\theta - 1) = 0\\Rightarrow \\sin\\theta = - 1\\ or\\ \\pm \\frac{1}{\\sqrt{2}}\\Rightarrow \\theta = 45^{\\circ},135^{\\circ}\\ or\\ 225^{\\circ}\\)."
      },
      {
        id: "trig-c16",
        type: "Trigonometric Equations",
        question: "[Level 3] Let \\(g(x) = 4x^{3} + 4x^{2} - 3x - 3\\).\n(a) Solve the equation \\(g(x) = 0\\).\n(b) Jason claims that the equation \\(g(\\sin 2\\theta) = 0\\) has \\(6\\) roots, where \\(0^{\\circ} \\leq \\theta \\leq 180^{\\circ}\\). Do you agree? Explain your answer.",
        answer: "(a) \\(x = - 1\\) or \\(- \\frac{\\sqrt{3}}{2}\\) or \\(\\frac{\\sqrt{3}}{2}\\)\n(b) Disagree. \\(\\theta = 30^{\\circ},60^{\\circ},120^{\\circ},135^{\\circ},150^{\\circ}\\), so there are \\(5\\) roots.",
        steps: "(a) \\((x + 1)(2x + \\sqrt{3})(2x - \\sqrt{3}) = 0\\Rightarrow x =\\) \\(- 1\\) or \\(- \\frac{\\sqrt{3}}{2}\\) or \\(\\frac{\\sqrt{3}}{2}\\).\n(b) \\(0^{\\circ} \\leq 2\\theta \\leq 360^{\\circ}\\). \\(\\sin 2\\theta = - 1\\Rightarrow \\theta = 135^{\\circ}\\); \\(\\sin 2\\theta = - \\frac{\\sqrt{3}}{2}\\Rightarrow \\theta = 120^{\\circ},150^{\\circ}\\); \\(\\sin 2\\theta = \\frac{\\sqrt{3}}{2}\\Rightarrow \\theta = 30^{\\circ},60^{\\circ}\\). Thus \\(\\theta = 30^{\\circ},60^{\\circ},120^{\\circ},135^{\\circ},150^{\\circ}\\) (\\(5\\) roots). Disagree."
      }
    ],

    // Practice questions for S.4 (Wah Yan College, Kowloon 2026-2027), converted from the two "Editable" Word files.
    // Fields:  id (unique - never change it once students may have saved progress), question, answer,
    //          type (optional: the question type shown after choosing a topic, e.g. "Centers of Triangle"),
    //          steps (optional: worked solution, "\n" = new line), images / stepsImages (optional figures, see images/).
    // Maths is written inside \( ... \) .
    // ===== S.4 Quadratic Equation (S4_Math_1_Quadratic_Equation_Editable.docx) =====
    quadratic_equation: [
      // ---- Chapter 1 A) Solving Quadratic Equations ----
      {
        id: "qe-1a-ex1",
        type: "Solving Quadratic Equations",
        question: "Solve the following quadratic equations with the best method. Circle the method you use.\n(a) \\(x(3x + 4) = 9x^{2} - 16\\)\n(b) \\(x(3x + 4) = 2(x^{2} + 6)\\)\n(c) \\((3x - 4)^{2} = 4x^{2}\\)\n(d) \\(x(3x - 4) = - 2(x^{2} - 6)\\)\n(e) [Challenging] \\((x - 2)(x - 3) = (a - 2)(a - 3)\\)",
        answer: "(a) \\(x = - \\frac{4}{3}\\) or \\(x = 2\\)\n(b) \\(x = - 6\\) or \\(x = 2\\)\n(c) \\(x = 4\\) or \\(x = \\frac{4}{5}\\)\n(d) \\(x = 2\\) or \\(x = - \\frac{6}{5}\\)\n(e) \\(x = a\\) or \\(x = 5 - a\\)",
        steps: "(a) Method 1 / [Method 2] / Method 3 / Method 4.\n\\(x(3x + 4) = 9x^{2} - 16\\)\n\\(x(3x + 4) = (3x + 4)(3x - 4)\\)\n\\((3x + 4)(x - 3x + 4) = 0\\)\n\\((3x + 4)( - 2x + 4) = 0\\)\n\\(x = - \\frac{4}{3}\\) or \\(x = 2\\)\n(b) [Method 1] / Method 2 / Method 3 / Method 4.\n\\(x(3x + 4) = 2(x^{2} + 6)\\)\n\\(x^{2} + 4x - 12 = 0\\)\n\\((x + 6)(x - 2) = 0\\)\n\\(x = - 6\\) or \\(x = 2\\)\n(c) Method 1 / Method 2 / [Method 3] / Method 4.\n\\((3x - 4)^{2} = 4x^{2}\\)\n\\(3x - 4 = 2x\\) or \\(3x - 4 = - 2x\\)\n\\(x = 4\\) or \\(x = \\frac{4}{5}\\)\n(d) [Method 1] / Method 2 / Method 3 / Method 4.\n\\(x(3x - 4) = - 2(x^{2} - 6)\\)\n\\(5x^{2} - 4x - 12 = 0\\)\n\\(x = 2\\) or \\(x = - \\frac{6}{5}\\)\n(e) Method 1 / [Method 2] / Method 3 / Method 4.\n\\((x - 2)(x - 3) = (a - 2)(a - 3)\\)\n\\(x^{2} - 5x + 6 = a^{2} - 5a + 6\\)\n\\(x^{2} - a^{2} - 5x + 5a = 0\\)\n\\((x + a)(x - a) - 5(x - a) = 0\\)\n\\((x - a)(x + a - 5) = 0\\)\n\\(x = a\\) or \\(x = 5 - a\\)"
      },
      {
        id: "qe-1a-ex2",
        type: "Solving Quadratic Equations",
        question: "If \\(\\alpha\\) is a root of \\(2x^{2} - x - 28 = 0\\), then \\(6\\alpha^{2} - 3\\alpha - 88 =\\)\nA. \\(- 4.\\)\nB. \\(- 3.5.\\)\nC. \\(0.\\)\nD. \\(4.\\)",
        answer: "A",
        steps: "\\(2\\alpha^{2} - \\alpha - 28 = 0\\)\n\\(2\\alpha^{2} - \\alpha = 28\\) (A)\n\\(6\\alpha^{2} - 3\\alpha = 84\\)\n\\(6\\alpha^{2} - 3\\alpha - 88 = - 4\\)"
      },
      {
        id: "qe-1a-ex3",
        type: "Solving Quadratic Equations",
        question: "If \\(\\left\\{ \\begin{array}{r}\n8(a - 3) = 3a - a^{2} \\\\\n8(b - 3) = 3b - b^{2}\n\\end{array} \\right.\\ \\), where \\(a < b\\), find the values of \\(a - b\\).\nA. \\(- 11\\)\nB. \\(- 5\\)\nC. \\(5.\\)\nD. \\(11.\\)",
        answer: "A",
        steps: "Consider the expression as a quadratic equation:\n\\(8(x - 3) = 3x - x^{2}\\), where \\(a\\) and \\(b\\) are the roots of the equation.\nSimplifying,\n\\(x^{2} + 5x - 24 = 0\\)\n\\(x = - 8\\) or \\(x = 3\\)\n\\(\\therefore a = - 8,b = 3\\)\n\\(a - b = - 8 - 3 = - 11\\) (A)"
      },
      {
        id: "qe-1a-ex4",
        type: "Solving Quadratic Equations",
        question: "It is given that \\(- 4\\) is a root of the equation \\(x^{2} - kx - 6k^{2} = 0\\), where \\(k > 0\\). Find the other root of the equation \\(x^{2} - kx - 6k^{2} = 0\\).\nA. \\(2\\)\nB. \\(4\\)\nC. \\(6\\)\nD. \\(8\\)",
        answer: "C",
        steps: "\\(( - 4)^{2} - k( - 4) - 6k^{2} = 0\\)\n\\(16 + 4k - 6k^{2} = 0\\)\n\\(k = - \\frac{4}{3}\\) (rej.) or \\(k = 2\\) (C)\n\\(x^{2} - 2x - 24 = 0\\)\n\\(x = 6\\) or \\(x = - 4\\) (rej.)"
      },
      {
        id: "qe-1a-ex5",
        type: "Solving Quadratic Equations",
        question: "It is given that \\(p\\) is a non-zero root of the quadratic equation \\(x^{2} - px + q = 0\\). Which of the following is/are true?\nI. \\(q > 0\\)\nII. \\(q = 0\\)\nIII. Zero is the other root of the given quadratic equation.\nA. I only\nB. II only\nC. I and III only\nD. II and III only",
        answer: "D",
        steps: "\\(x^{2} - px + q = 0\\)\n\\((p)^{2} - p(p) + q = 0\\)\n\\(q = 0\\)\n\\(x^{2} - px + (0) = 0\\)\n\\(x(x - p) = 0\\) (D)\n\\(x = 0\\) or \\(x = p\\)"
      },
      {
        id: "qe-1a-ex6",
        type: "Solving Quadratic Equations",
        question: "Let \\(b\\) be a real number. If the equations \\(x^{2} - 2bx + 3 = 0\\) and \\(3x^{2} - bx - 21 = 0\\) have a common root \\(\\alpha\\), then \\(b =\\)\nA. \\(- 1\\) or \\(1.\\)\nB. \\(- 2\\) or \\(2.\\)\nC. \\(- 3\\) or \\(3.\\)\nD. \\(- 6\\) or \\(6.\\)",
        answer: "B",
        steps: "\\(\\alpha^{2} - 2b\\alpha + 3 = 0\\) and \\(3\\alpha^{2} - b\\alpha - 21 = 0\\)\n\\(3\\alpha^{2} - 6b\\alpha + 9 = 3\\alpha^{2} - b\\alpha - 21 = 0\\)\n\\(5b\\alpha = 30\\)\n\\(\\alpha b = 6\\)\n\\(b = \\frac{6}{\\alpha}\\)\n\\(\\alpha^{2} - 2\\left( \\frac{6}{\\alpha} \\right)\\alpha + 3 = 0\\)\n\\(\\alpha^{2} - 9 = 0\\)\n\\(\\alpha = 3\\) or \\(\\alpha = - 3\\)\n\\(b = 2\\) or \\(b = - 2\\) (B)"
      },
      {
        id: "qe-1a-ex7",
        type: "Solving Quadratic Equations",
        question: "[Challenging] It is given that \\(b\\) is a root of the equation \\(2b^{2} + cx - x^{2} = 0\\), where \\(b > 0\\). Find the other root of the equation \\(2b^{2} + cx - x^{2} = 0\\).\nA. \\(0\\)\nB. \\(- b\\)\nC. \\(2b\\)\nD. \\(- 2b\\)",
        answer: "D",
        steps: "\\(2b^{2} + cx - x^{2} = 0\\)\n\\(2b^{2} + bc - b^{2} = 0\\)\n\\(b^{2} + bc = 0\\)\n\\(b(b + c) = 0\\)\n\\(b = 0\\) (rej.) or \\(b = - c\\) (D)\n\\(2b^{2} + cx - x^{2} = 0\\)\n\\(2b^{2} + ( - b)x - x^{2} = 0\\)\n\\(x^{2} + bx - 2b^{2} = 0\\)\n\\((x - b)(x + 2b) = 0\\)\n\\(x = - 2b\\)"
      },
      {
        id: "qe-1a-ex8",
        type: "Solving Quadratic Equations",
        question: "[Challenging]\nIt is given that the equation \\(a^{2}x^{2} - 9ax + (20 - 3a - 9a^{2}) = 0\\) (where \\(a < 0\\)) has at least one integral root. Find the sum of all possible integral values of \\(a\\).\nA. \\(- 1\\)\nB. \\(- 11\\)\nC. \\(- 12\\)\nD. \\(- 16\\)",
        answer: "C",
        steps: "\\(x = \\frac{- ( - 9a) \\pm \\sqrt{( - 9a)^{2} - 4a^{2}(20 - 3a - 9a^{2})}}{2a^{2}}\\)\n\\(= \\frac{9a \\pm \\sqrt{a^{2} + 12a^{3} + 36a^{4}}}{2a^{2}}\\)\n\\(= \\frac{9a \\pm (a + 6a^{2})}{2a^{2}}\\)\n\\(= \\frac{5}{a} + 3\\) or \\(\\frac{4}{a} - 3\\)\nThe equation \\(a^{2}x^{2} - 9ax + (20 - 3a - 9a^{2}) = 0\\) (where \\(a < 0\\)) has at least one integral root.\nThe possible integral values of \\(a = - 1, - 2, - 4\\) or \\(- 5\\)\nSum of all possible integral values of \\(a = - 1 - 2 - 4 - 5 =\\) \\(- 12\\) (C)"
      },
      {
        id: "qe-1a-ex9",
        type: "Solving Quadratic Equations",
        question: "[DSE-2022-II-Q4]\nLet \\(c\\) be a constant. Solve the equation \\((x - c)(x - 4c) = (3c - x)(x - 4c)\\).\nA. \\(x = 2c\\) B. \\(x = 3c\\)\nC. \\(x = c\\) or \\(x = 3c\\) D. \\(x = 2c\\) or \\(x = 4c\\)",
        answer: "D",
        steps: "\\((x - c)(x - 4c) = (3c - x)(x - 4c)\\)\n\\((x - 4c)(x - c - 3c + x) = 0\\)\n\\((x - 4c)(2x - 4c) = 0\\)\n\\(x = 4c\\) or \\(x = 2c\\) (D)"
      },
      {
        id: "qe-1a-ex10",
        type: "Solving Quadratic Equations",
        question: "If \\((x - a)(a - 2x) = - a^{2}\\), where \\(a\\) is a constant, then\nA. \\(x = 0\\) or \\(x = \\frac{3a}{2}.\\)\nB. \\(x = 3a\\) or \\(x = - \\frac{a}{2}.\\)\nC. \\(x = 0\\) or \\(x = 2a.\\)\nD. \\(x = - \\frac{3a}{2}\\) or \\(x = \\frac{a}{2}.\\)",
        answer: "A",
        steps: "Method 1 (LQ):\n\\((x - a)(a - 2x) = - a^{2}\\)\n\\(xa - 2x^{2} - a^{2} + 2ax = - a^{2}\\)\n\\(- 2x^{2} + 3ax = 0\\)\n\\(x( - 2x + 3a) = 0\\)\n\\(x = 0\\) or \\(x = \\frac{3a}{2}\\)\nMethod 2 (MC):\nSubstitute \\(a = 2\\), the equation becomes \\((x - 2)(2 - 2x) = - 2^{2}\\),\nsolution becomes \\(x = 3\\) or \\(x = 0\\).\nBy checking the options, option A matches the substitution. (A)"
      },
      {
        id: "qe-1a-ex11",
        type: "Solving Quadratic Equations",
        question: "Solve the equation \\((x + 1)(x - 2) = (a + 1)(a - 2)\\).\nA. \\(x = - 1\\) or \\(x = 2\\)\nB. \\(x = a\\)\nC. \\(x = a\\) or \\(x = - a\\)\nD. \\(x = a\\) or \\(x = - a + 1\\)",
        answer: "D",
        steps: "Method 1 (LQ):\n\\(x^{2} - x - 2 = a^{2} - a - 2\\)\n\\(x^{2} - a^{2} - x + a = 0\\)\n\\((x + a)(x - a) - (x - a) = 0\\)\n\\((x - a)(x + a - 1) = 0\\)\n\\(x = a\\) or \\(x = 1 - a\\)\nMethod 2 (MC):\nSubstitute \\(a = 3\\), the equation becomes \\((x + 1)(x - 2) = 4\\),\nsolution becomes \\(x = - 2\\) or \\(x = 3\\).\nBy checking the options, option D matches the substitution. (D)"
      },
      {
        id: "qe-1a-ex12",
        type: "Solving Quadratic Equations",
        question: "[DSE-2024-II-Q7]\nLet \\(m\\) be a constant. Solve the equation \\(x^{2} - 3x = (m - 1)^{2} - 3(m - 1)\\).\nA. \\(x = m - 1\\) or \\(x = m - 4\\) B. \\(x = m - 1\\) or \\(x = 4 - m\\)\nC. \\(x = 1 - m\\) or \\(x = m - 4\\) D. \\(x = 1 - m\\) or \\(x = 4 - m\\)",
        answer: "B",
        steps: "Method 1 (LQ):\n\\(x^{2} - 3x = (m - 1)^{2} - 3(m - 1)\\)\n\\(x^{2} - (m - 1)^{2} - 3x + 3(m - 1) = 0\\)\n\\((x + m - 1)(x - m + 1) - 3(x - m + 1) = 0\\)\n\\((x - m + 1)(x + m - 4) = 0\\)\n\\(x = m - 1\\) or \\(x = 4 - m\\)\nMethod 2 (MC):\nWhen \\(m = 0\\), \\(x^{2} - 3x = 4 \\rightarrow x = 4\\) or \\(x = - 1\\)\nBy checking the options, Option B matches the substitution. (B)"
      },
      {
        id: "qe-1a-ex13",
        type: "Solving Quadratic Equations",
        question: "[WYK-2324-S6-Mock-II-Q9]\nLet \\(k\\) be a constant. Solve the equation \\((x + k)^{2} = 4k^{2} - 4k + 1\\).\nA. \\(x = 3k - 1\\) or \\(x = - k + 1\\) B. \\(x = 3k + 1\\) or \\(x = k + 1\\)\nC. \\(x = - 3k + 1\\) or \\(x = k - 1\\) D. \\(x = - 3k - 1\\) or \\(x = k + 1\\)",
        answer: "C",
        steps: "\\((x + k)^{2} = (2k - 1)^{2}\\)\n\\(x + k = 2k - 1\\) or \\(x + k = - (2k - 1)\\)\n\\(x = k - 1\\) or \\(x = - 3k + 1\\) (C)"
      },
      {
        id: "qe-1a-ex14",
        type: "Solving Quadratic Equations",
        question: "Let \\(h\\) and \\(k\\) be distinct real numbers. If \\((kx - h)^{2} = (hx - k)^{2}\\), then \\(x =\\)\nA. \\(1.\\) B. \\(- 1\\) or \\(1.\\)\nC. \\(h\\) or \\(- h.\\) D. \\(k\\) or \\(- k.\\)",
        answer: "B",
        steps: "\\(kx - h = hx - k\\) or \\(kx - h = - hx + k\\)\n\\(x(k - h) = h - k\\) or \\(x(k + h) = h + k\\)\n\\(x = - 1\\) or \\(x = 1\\) (B)"
      },
      {
        id: "qe-1a-ex15",
        type: "Solving Quadratic Equations",
        question: "[Challenging]\nLet \\(a,b\\) and \\(c\\) be real numbers. Solve the equation \\((x - b)(x - c) = (a - b)(a - c)\\).\nA. \\(x = a\\) B. \\(x = a\\) or \\(b + c.\\)\nC. \\(x = a\\) or \\(b + c - a.\\) D. \\(x = a\\) or \\(b + c + a.\\)",
        answer: "C",
        steps: "By substituting the options to the questions, C is the answer. (C)"
      },
      // ---- Chapter 1 B) Completing Square ----
      {
        id: "qe-1b-ex1",
        type: "Completing Square",
        question: "Complete squares for the following expressions.\n(a) \\(y = x^{2} - 6x + 8\\)\n(b) \\(y = b^{2} + 8b - 12\\)\n(c) \\(y = u^{2} - 20u\\)\n(d) \\(y = x^{2} - x + 2\\)\n(e) \\(y = x^{2} + 5x + 4\\)\n(f) \\(y = k^{2} - \\frac{2}{3}k + 1\\)",
        answer: "(a) \\(y = (x - 3)^{2} - 1\\)\n(b) \\(y = (b + 4)^{2} - 28\\)\n(c) \\(y = (u - 10)^{2} - 100\\)\n(d) \\(y = (x - 0.5)^{2} + 1.75\\)\n(e) \\(y = (x + 2.5)^{2} - 2.25\\)\n(f) \\(y = \\left( k - \\frac{1}{3} \\right)^{2} + \\frac{8}{9}\\)",
        steps: "(a) \\(y = x^{2} - 6x + 8 = x^{2} - 6x + 3^{2} - 3^{2} + 8 = (x - 3)^{2} - 1\\)\n(b) \\(y = b^{2} + 8b - 12 = b^{2} + 8b + 4^{2} - 4^{2} - 12 = (b + 4)^{2} - 28\\)\n(c) \\(y = u^{2} - 20u = u^{2} - 20u + 10^{2} - 10^{2} = (u - 10)^{2} - 100\\)\n(d) \\(y = x^{2} - x + 2 = x^{2} - x + 0.5^{2} - 0.5^{2} + 2 = (x - 0.5)^{2} + 1.75\\)\n(e) \\(y = x^{2} + 5x + 4 = x^{2} + 5x + 2.5^{2} - 2.5^{2} + 4 = (x + 2.5)^{2} - 2.25\\)\n(f) \\(y = k^{2} - \\frac{2}{3}k + 1 = k^{2} - \\frac{2}{3}k + \\left( \\frac{1}{3} \\right)^{2} - \\left( \\frac{1}{3} \\right)^{2} + 1 = \\left( k - \\frac{1}{3} \\right)^{2} + \\frac{8}{9}\\)"
      },
      {
        id: "qe-1b-ex2",
        type: "Completing Square",
        question: "Complete squares for the following expressions.\n(g) \\(y = - (2x + x^{2})\\)\n(h) \\(y = - a^{2} - 5a + 6\\)\n(i) \\(y = 3a^{2} - 18a + 28\\)\n(j) \\(y = - \\frac{1}{2}a^{2} - 4a - 30\\)\n(k) \\(y = \\frac{1}{3}p^{2} - 2p - 6\\)\n* (l) \\(y = - 3x^{2} + 6kx - 9k^{2} - 1\\), where \\(k\\) is a constant.\n** (m) \\(y = 2x^{2} - (4k + 4)x + (2 - 3k)\\), where \\(k\\) is a constant.",
        answer: "(g) \\(y = - (x + 1)^{2} + 1\\)\n(h) \\(y = - (a + 2.5)^{2} + 12.25\\)\n(i) \\(y = 3(a - 3)^{2} + 1\\)\n(j) \\(y = - \\frac{1}{2}(a + 4)^{2} - 22\\)\n(k) \\(y = \\frac{1}{3}(p - 3)^{2} - 9\\)\n(l) \\(y = - 3(x - k)^{2} - 6k^{2} - 1\\)\n(m) \\(y = 2(x - k - 1)^{2} - 2k^{2} - 7k\\)",
        steps: "(g) \\(y = - (2x + x^{2}) = - (x^{2} + 2x + 1 - 1) = - (x + 1)^{2} + 1\\)\n(h) \\(y = - a^{2} - 5a + 6 = - (a^{2} + 5a) + 6 = - (a^{2} + 5a + 2.5^{2} - 2.5^{2}) + 6 = - (a + 2.5)^{2} + 2.5^{2} + 6 = - (a + 2.5)^{2} + 12.25\\)\n(i) \\(y = 3a^{2} - 18a + 28 = 3(a^{2} - 6a) + 28 = 3(a^{2} - 6a + 3^{2} - 3^{2}) + 28 = 3(a - 3)^{2} - 27 + 28 = 3(a - 3)^{2} + 1\\)\n(j) \\(y = - \\frac{1}{2}a^{2} - 4a - 30 = - \\frac{1}{2}(a^{2} + 8a) - 30 = - \\frac{1}{2}(a^{2} + 8a + 4^{2} - 4^{2}) - 30 = - \\frac{1}{2}(a + 4)^{2} + 8 - 30 = - \\frac{1}{2}(a + 4)^{2} - 22\\)\n(k) \\(y = \\frac{1}{3}p^{2} - 2p - 6 = \\frac{1}{3}(p^{2} - 6p) - 6 = \\frac{1}{3}(p^{2} - 6p + 3^{2} - 3^{2}) - 6 = \\frac{1}{3}(p - 3)^{2} - 3 - 6 = \\frac{1}{3}(p - 3)^{2} - 9\\)\n(l) \\(y = - 3x^{2} + 6kx - 9k^{2} - 1 = - 3(x^{2} - 2kx) - 9k^{2} - 1 = - 3(x^{2} - 2kx + k^{2} - k^{2}) - 9k^{2} - 1 = - 3(x - k)^{2} + 3k^{2} - 9k^{2} - 1 = - 3(x - k)^{2} - 6k^{2} - 1\\)\n(m) \\(y = 2x^{2} - (4k + 4)x + (2 - 3k) = 2\\lbrack x^{2} - (2k + 2)x\\rbrack + (2 - 3k) = 2\\lbrack x^{2} - (2k + 2)x + (k + 1)^{2} - (k + 1)^{2}\\rbrack + (2 - 3k) = 2(x - k - 1)^{2} - 2(k + 1)^{2} + (2 - 3k) = 2(x - k - 1)^{2} - 2k^{2} - 7k\\)"
      },
      // ---- Chapter 2 A) Use of Discriminant ----
      {
        id: "qe-2a-ex1",
        type: "Use of Discriminant",
        question: "[Level 1]\nFor the equation \\(3x^{2} + (5k + 1)x + (k + 2k^{2}) = 0\\), prove that it has real roots for any real values of \\(k\\).",
        answer: "\\(\\Delta = (k - 1)^{2} \\geq 0\\), so the equation has real roots for any real values of \\(k\\).",
        steps: "\\(\\Delta = (5k + 1)^{2} - 4(3)(k + 2k^{2})\\)\n\\(= 25k^{2} + 10k + 1 - 12k - 24k^{2}\\)\n\\(= k^{2} - 2k + 1\\)\n\\(= (k - 1)^{2} \\geq 0\\)\n\\(\\therefore\\) The equation has real roots for any real values of \\(k\\)."
      },
      {
        id: "qe-2a-ex2",
        type: "Use of Discriminant",
        question: "[Level 1]\nFor the equation \\(x^{2} + (k - 6)x + k^{2} + 15 = 0\\), prove that it has no real roots for any real values of \\(k\\).",
        answer: "\\(\\Delta = - 3(k + 2)^{2} - 12 \\leq - 12 < 0\\), so the equation has no real roots for any real values of \\(k\\).",
        steps: "\\(\\Delta = (k - 6)^{2} - 4(1)(k^{2} + 15)\\)\n\\(= k^{2} - 12k + 36 - 4k^{2} - 60\\)\n\\(= - 3k^{2} - 12k - 24\\)\n\\(= - 3(k^{2} + 4k + 2^{2} - 2^{2}) - 24\\)\n\\(= - 3(k + 2)^{2} - 12 \\leq - 12 < 0\\)\n\\(\\therefore\\) The equation has no real roots for any real values of \\(k\\)."
      },
      {
        id: "qe-2a-ex3",
        type: "Use of Discriminant",
        question: "[Level 1]\nFor the equation \\(4kx^{2} + 7kx - 10x + 3k - 8 = 0\\), prove that it has two real roots for any real values of \\(k \\neq 0\\).",
        answer: "\\(\\Delta = (k - 6)^{2} + 64 \\geq 64 > 0\\), so the equation has real roots for any real values of \\(k \\neq 0\\).",
        steps: "\\(\\Delta = (7k - 10)^{2} - 4(4k)(3k - 8)\\)\n\\(= 49k^{2} - 140k + 100 - 48k^{2} + 128k\\)\n\\(= k^{2} - 12k + 100\\)\n\\(= k^{2} - 12k + 6^{2} - 6^{2} + 100\\)\n\\(= (k - 6)^{2} + 64 \\geq 64 > 0\\)\n\\(\\therefore\\) The equation has real roots for any real values of \\(k \\neq 0\\)."
      },
      {
        id: "qe-2a-ex4",
        type: "Use of Discriminant",
        question: "Quadratic equation \\((2x + 3)(kx - 2) = - 3\\) has two unequal real roots, which of the following is true?\nA. \\(k\\) can be any real number.\nB. \\(k\\) can be any real number greater than or equal to \\(0\\).\nC. \\(k\\) can be any real number except \\(0\\).\nD. \\(k\\) can be any real number except \\(\\frac{1}{2}\\).",
        answer: "C",
        steps: "Equation: \\(2kx^{2} + (3k - 4)x - 3 = 0\\)\n\\(\\Delta = (3k - 4)^{2} - 4(2k)( - 3)\\)\n\\(= 9k^{2} - 24k + 16 + 24k\\)\n\\(= 9k^{2} + 16 \\geq 16 > 0\\)\n\\(\\therefore\\) For any real number \\(k\\) except \\(0\\), the equation has \\(2\\) unequal real roots. (C)\n(Note that if \\(k = 0\\), the equation is no longer quadratic anymore.)"
      },
      {
        id: "qe-2a-ex5",
        type: "Use of Discriminant",
        question: "If \\(0 < p < 6\\), which of the following quadratic equations has/have two distinct real roots?\nI. \\((p^{2} + 1)x^{2} + (2p - 1)x + 1 = 0\\)\nII. \\(px^{2} - (p + 7)x + 7 = 0\\)\nIII. \\(\\frac{1}{2}x^{2} - 3px + 4p^{2} + 18 = 0\\)\nA. I only B. II only C. I and III only D. II and III only",
        answer: "B",
        steps: "For I, \\((p^{2} + 1)x^{2} + (2p - 1)x + 1 = 0\\): \\(\\Delta = (2p - 1)^{2} - 4(p^{2} + 1)(1) = - 4p - 3\\). \\(\\because 0 < p < 6\\therefore\\Delta < 0\\therefore\\) no real roots.\nFor II, \\(px^{2} - (p + 7)x + 7 = 0\\): \\(\\Delta = \\lbrack - (p + 7)\\rbrack^{2} - 4(p)(7) = p^{2} - 14p + 49 = (p - 7)^{2}\\). \\(\\because 0 < p < 6\\therefore\\Delta > 0\\therefore\\) two distinct real roots.\nFor III, \\(\\frac{1}{2}x^{2} - 3px + 4p^{2} + 18 = 0\\): \\(\\Delta = ( - 3p)^{2} - 4(\\frac{1}{2})(4p^{2} + 18) = p^{2} - 36\\). \\(\\because 0 < p < 6\\therefore\\Delta < 0\\therefore\\) no real roots.\n\\(\\therefore\\) Only II has two distinct real roots. (B)"
      },
      {
        id: "qe-2a-ex6",
        type: "Use of Discriminant",
        question: "Consider the equation \\(hx^{2} + h(k + 1)x + hk = 0\\), where \\(h < 0\\) and \\(k > 0\\). Which of the following must be true?\nI. The equation has unequal real roots.\nII. The equation has negative real root(s).\nIII. The equation has irrational root(s).\nA. I only B. II only C. I and III only D. II and III only",
        answer: "B",
        steps: "For I: \\(hx^{2} + h(k + 1)x + hk = 0\\Rightarrow x^{2} + (k + 1)x + k = 0\\ \\ \\cdots(*)\\). \\(\\Delta\\) of \\((*) = (k + 1)^{2} - 4(1)(k) = (k - 1)^{2}\\). When \\(k = 1,\\Delta = 0\\) (equal real roots). \\(\\therefore\\) I may not be true.\nFor II: \\((x + 1)(x + k) = 0\\Rightarrow x = - 1\\) or \\(x = - k < 0\\). \\(\\therefore\\) The equation has negative real root(s). \\(\\therefore\\) II must be true.\nFor III: \\(\\because k\\) can be rational or irrational. \\(\\therefore\\) III may not be true.\n\\(\\therefore\\) The answer is B. (B)"
      },
      {
        id: "qe-2a-ex7",
        type: "Use of Discriminant",
        question: "[Level 1]\n(a) Does the graph of \\(y = 2x^{2} + (2k - 5)x + k - 3\\) intersects the \\(x\\)-axis for any values of \\(k\\)? Explain your answer.\n(b) Hence, find the \\(x\\)-intercept(s) of the graph. Express your answers in terms of \\(k\\) when necessary.",
        answer: "(a) Yes. \\(\\Delta = (2k - 7)^{2} \\geq 0\\), so the graph always intersects the \\(x\\)-axis for any values of \\(k\\).\n(b) The \\(x\\)-intercepts are \\(- 0.5\\) and \\(3 - k\\).",
        steps: "(a) For the equation \\(2x^{2} + (2k - 5)x + k - 3 = 0\\),\n\\(\\Delta = (2k - 5)^{2} - 4(2)(k - 3) = 4k^{2} - 20k + 25 - 8k + 24 = 4k^{2} - 28k + 49 = (2k - 7)^{2} \\geq 0\\)\nThe graph always intersects the \\(x\\)-axis for any values of \\(k\\).\n(b) When \\(2x^{2} + (2k - 5)x + k - 3 = 0\\), \\(x = \\frac{- (2k - 5) \\pm \\sqrt{\\Delta}}{2(2)} = \\frac{5 - 2k + (2k - 7)}{2(2)}\\) or \\(\\frac{5 - 2k - (2k - 7)}{2(2)}\\)\n\\(x = - 0.5\\) or \\(3 - k\\). \\(x\\)-intercepts are \\(- 0.5\\) and \\(3 - k\\)."
      },
      {
        id: "qe-2a-ex8",
        type: "Use of Discriminant",
        question: "[Level 1]\nThe figure shows the graph of \\(y = \\frac{3}{8}x^{2} - 3x + k\\) which touches the \\(x\\)-axis at one point \\(R\\), and cuts the \\(y\\)-axis at \\(P\\).\n(a) (i) Find the value of \\(k\\).\n(a) (ii) Find the coordinates of \\(P\\) and \\(R\\).\n(b) Find the area of \\(\\bigtriangleup OPR\\).",
        images: [{ src: "images/qe-2a-ex8.png", width: 168 }],
        answer: "(a)(i) \\(k = 6\\)\n(a)(ii) \\(P = (0,6)\\), \\(R = (4,0)\\)\n(b) \\(12\\ sq.\\ units\\)",
        steps: "(a) (i) \\(\\because\\) The graph of \\(y = \\frac{3}{8}x^{2} - 3x + k\\) touches the \\(x\\)-axis at one point.\n\\(\\therefore\\) For the equation \\(\\frac{3}{8}x^{2} - 3x + k = 0\\), \\(\\Delta = 0\\)\ni.e. \\(( - 3)^{2} - 4\\left( \\frac{3}{8} \\right)(k) = 0\\Rightarrow 9 - \\frac{3}{2}k = 0\\Rightarrow k =\\) \\(6\\)\n(ii) Coordinates of \\(P =\\) \\((0,6)\\)\nBy substituting \\(k = 6\\) into \\(\\frac{3}{8}x^{2} - 3x + k = 0\\), we have \\(\\frac{3}{8}x^{2} - 3x + 6 = 0\\Rightarrow x^{2} - 8x + 16 = 0\\Rightarrow (x - 4)^{2} = 0\\Rightarrow x = 4\\). \\(\\therefore\\) Coordinates of \\(R =\\) \\((4,0)\\)\n(b) Area of \\(\\bigtriangleup OPR = \\frac{1}{2} \\times OP \\times OR = \\frac{1}{2} \\times (6 - 0) \\times (4 - 0)\\ sq.\\ units =\\) \\(12\\ sq.\\ units\\)"
      },
      {
        id: "qe-2a-ex9",
        type: "Use of Discriminant",
        question: "[Level 2]\nThe figure shows the graph of \\(y = x^{2} - 2mx + (k + 1)\\), where \\(m > 0\\). The graph touches the \\(x\\)-axis at the point \\(P\\), and it cuts the \\(y\\)-axis at the point \\(Q\\).\n(a) Express \\(k\\) in terms of \\(m\\).\n(b) Find, in terms of \\(m\\), the coordinates of (i) \\(Q\\), (ii) \\(P\\).\n(c) Find the values of \\(m\\) and \\(k\\) if\n(i) the area of \\(\\bigtriangleup OPQ\\) is \\(\\frac{27}{2}\\) square units,\n(ii) the length of \\(OQ\\) is \\(3\\) units longer than that of \\(OP\\). (Leave your answers in surd form.)",
        images: [{ src: "images/qe-2a-ex9.png", width: 168 }],
        answer: "(a) \\(k = m^{2} - 1\\)\n(b)(i) \\(Q = (0,m^{2})\\)\n(b)(ii) \\(P = (m,0)\\)\n(c)(i) \\(m = 3\\), \\(k = 8\\)\n(c)(ii) \\(m = \\frac{1 + \\sqrt{13}}{2}\\), \\(k = \\frac{5 + \\sqrt{13}}{2}\\)",
        steps: "(a) \\(\\Delta = 0\\Rightarrow ( - 2m)^{2} - 4(1)(k + 1) = 0\\Rightarrow m^{2} - (k + 1) = 0\\Rightarrow k =\\) \\(m^{2} - 1\\)\n(b) (i) \\(y = 0^{2} - 2m(0) + (k + 1) = k + 1 = m^{2}\\Rightarrow \\) Coordinates of \\(Q =\\) \\((0,m^{2})\\)\n(ii) \\(x\\)-coordinate of \\(P = \\frac{- ( - 2m)}{2(1)} = m\\Rightarrow \\) Coordinates of \\(P =\\) \\((m,0)\\)\n(c) (i) \\(\\frac{1}{2} \\times OP \\times OQ = \\frac{27}{2}\\Rightarrow \\frac{1}{2} \\times m \\times m^{2} = \\frac{27}{2}\\Rightarrow m^{3} = 27\\Rightarrow m =\\) \\(3\\), \\(k = 3^{2} - 1 =\\) \\(8\\)\n(ii) \\(m^{2} = m + 3\\Rightarrow m^{2} - m - 3 = 0\\Rightarrow m = \\frac{- ( - 1) \\pm \\sqrt{( - 1)^{2} - 4(1)( - 3)}}{2(1)} =\\) \\(\\frac{1 + \\sqrt{13}}{2}\\) or \\(\\frac{1 - \\sqrt{13}}{2}\\) (rej.)\n\\(k = \\left( \\frac{1 + \\sqrt{13}}{2} \\right)^{2} - 1 = \\frac{1 + 13 + 2\\sqrt{13} - 4}{4} =\\) \\(\\frac{5 + \\sqrt{13}}{2}\\)"
      },
      {
        id: "qe-2a-ex10",
        type: "Use of Discriminant",
        question: "Which of the following about the graph of \\(y = kx^{2} - 5x - k\\) (where \\(k \\neq 0\\)) must be true?\nI. The graph does not pass through the origin.\nII. The \\(y\\)-intercept of the graph is negative.\nIII. The graph has two \\(x\\)-intercepts.\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "B",
        steps: "For I: By substituting \\(x = 0\\) into \\(y = kx^{2} - 5x - k\\), we have \\(y = k(0)^{2} - 5(0) - k = - k \\neq 0\\). \\(\\therefore\\) The graph does not pass through the origin. \\(\\therefore\\) I must be true.\nFor II: \\(\\because y - intercept = - k\\). \\(\\therefore\\) The \\(y\\)-intercept of the graph may be positive or negative. \\(\\therefore\\) II may not be true.\nFor III: For the equation \\(kx^{2} - 5x - k = 0\\), \\(\\Delta = ( - 5)^{2} - 4(k)( - k) = 25 + 4k^{2} > 0\\). \\(\\therefore\\) The graph of \\(y = kx^{2} - 5x - k\\) has two \\(x\\)-intercepts. \\(\\therefore\\) III must be true. (B)"
      },
      // ---- Chapter 2 B) Sum and Product of Roots ----
      {
        id: "qe-2b-ex1",
        type: "Sum and Product of Roots",
        question: "[Level 1]\nForm a quadratic equation in \\(x\\) whose roots are \\(1\\) larger than twice the roots of the equation \\(4(x^{2} - 2) = 2(8 + 3x)\\).",
        answer: "\\(x^{2} - 5x - 20 = 0\\)",
        steps: "\\(2x^{2} - 3x - 12 = 0\\). Let \\(\\alpha\\) and \\(\\beta\\) be the roots of \\(2x^{2} - 3x - 12 = 0\\). New roots: \\(2\\alpha + 1\\) and \\(2\\beta + 1\\).\n\\(\\alpha + \\beta = - \\frac{( - 3)}{2} = \\frac{3}{2}\\), \\(\\alpha\\beta = \\frac{- 12}{2} = - 6\\)\n\\((2\\alpha + 1) + (2\\beta + 1) = 2(\\alpha + \\beta) + 2 = 2\\left( \\frac{3}{2} \\right) + 2 = 5\\)\n\\((2\\alpha + 1)(2\\beta + 1) = 4\\alpha\\beta + 2(\\alpha + \\beta) + 1 = 4( - 6) + 2\\left( \\frac{3}{2} \\right) + 1 = - 20\\)\n\\(\\therefore\\) The required quadratic equation: \\(x^{2} - 5x + ( - 20) = 0\\Rightarrow x^{2} - 5x - 20 = 0\\)"
      },
      {
        id: "qe-2b-ex2",
        type: "Sum and Product of Roots",
        question: "[Level 1] [2023-WYK-S4-Midyear-P1-Q11]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the quadratic equation \\(x^{2} - 5x - 2 = 0\\), where \\(\\alpha < \\beta\\).\n(a) Without solving the equation, find the values of \\(\\alpha + \\beta\\), \\(\\alpha\\beta\\) and \\(\\alpha - \\beta\\).\n(b) Hence, form a quadratic equation in \\(t\\) with roots \\(\\alpha^{2}\\) and \\(- \\beta^{2}\\).",
        answer: "(a) \\(\\alpha + \\beta = 5\\), \\(\\alpha\\beta = - 2\\), \\(\\alpha - \\beta = - \\sqrt{33}\\)\n(b) \\(t^{2} + 5\\sqrt{33}t - 4 = 0\\)",
        steps: "(a) \\(\\alpha + \\beta = 5,\\alpha\\beta = - 2\\); \\(\\alpha - \\beta = - \\sqrt{(\\alpha + \\beta)^{2} - 4\\alpha\\beta} = - \\sqrt{(5)^{2} - 4( - 2)} = - \\sqrt{33}\\)\n(b) \\(\\alpha^{2} + ( - \\beta^{2}) = \\alpha^{2} - \\beta^{2} = (\\alpha + \\beta)(\\alpha - \\beta) = - 5\\sqrt{33}\\); \\(\\alpha^{2}( - \\beta^{2}) = - \\alpha^{2}\\beta^{2} = - ( - 2)^{2} = - 4\\)\nThe required equation: \\(t^{2} + 5\\sqrt{33}t - 4 = 0\\)."
      },
      {
        id: "qe-2b-ex3",
        type: "Sum and Product of Roots",
        question: "It is given that \\(x^{2} + mx + k^{2} = 0\\) has two distinct positive roots \\(\\alpha\\) and \\(\\beta\\) where \\(m\\) is a real number and \\(k\\) is a positive real number. Form a quadratic equation in \\(x\\) with roots \\(\\sqrt{\\alpha}\\) and \\(\\sqrt{\\beta}\\).",
        answer: "\\(x^{2} - x\\sqrt{2k - m} + k = 0\\)",
        steps: "\\(\\alpha + \\beta = - m,\\alpha\\beta = k^{2}\\)\n\\((\\sqrt{\\alpha} + \\sqrt{\\beta})^{2} = \\alpha + 2\\sqrt{\\alpha\\beta} + \\beta = - m + 2k\\Rightarrow \\sqrt{\\alpha} + \\sqrt{\\beta} = \\sqrt{2k - m}\\), and \\(\\sqrt{\\alpha}\\sqrt{\\beta} = k\\).\nThe required equation: \\(x^{2} - x\\sqrt{2k - m} + k = 0\\)."
      },
      {
        id: "qe-2b-ex4",
        type: "Sum and Product of Roots",
        question: "[Level 2] [2022-WYK-S4-Midyear-P1-Q14]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the equation \\(x^{2} - 10x + p = 0\\), where \\(p\\) is a non-zero constant. It is given that \\(\\frac{\\alpha}{\\beta} + \\frac{10}{\\alpha} = \\frac{23}{2}\\).\n(a) Find the value of \\(p\\).\n(b) Using the identity \\(x^{3} + y^{3} = (x + y)(x^{2} - xy + y^{2})\\), find the value of \\(\\alpha^{3} + \\beta^{3}\\).",
        answer: "(a) \\(p = 8\\)\n(b) \\(\\alpha^{3} + \\beta^{3} = 760\\)",
        steps: "(a) \\(\\alpha + \\beta = 10,\\alpha\\beta = p\\), \\(\\alpha^{2} - 10\\alpha + p = 0 \\Rightarrow \\alpha^{2} = 10\\alpha - p\\)\n\\(\\frac{\\alpha}{\\beta} + \\frac{10}{\\alpha} = \\frac{23}{2}\\Rightarrow \\frac{\\alpha^{2} + 10\\beta}{\\alpha\\beta} = \\frac{23}{2}\\Rightarrow \\frac{10\\alpha - p + 10\\beta}{p} = \\frac{23}{2}\\Rightarrow \\frac{10(10) - p}{p} = \\frac{23}{2}\\Rightarrow 200 - 2p = 23p\\Rightarrow p = 8\\)\n(b) \\(\\alpha^{3} + \\beta^{3} = (\\alpha + \\beta)(\\alpha^{2} - \\alpha\\beta + \\beta^{2}) = (10)\\lbrack(\\alpha + \\beta)^{2} - 3\\alpha\\beta\\rbrack = 10\\lbrack 10^{2} - 3(8)\\rbrack = 760\\)"
      },
      {
        id: "qe-2b-ex5",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the equation \\(x^{2} - 2x - (m^{2} - m + 1) = 0\\), where \\(m\\) is a real number. By expressing \\((\\alpha - \\beta)^{2}\\) in terms of \\(m\\), find the minimum value of \\((\\alpha - \\beta)^{2}\\).",
        answer: "Minimum value \\(= 7\\)",
        steps: "\\(\\alpha + \\beta = 2,\\alpha\\beta = - (m^{2} - m + 1)\\)\n\\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = 2^{2} - 4(1)\\lbrack - (m^{2} - m + 1)\\rbrack = 4m^{2} + 4m + 8\\)\n\\(= 4\\left( m^{2} + m + \\left( \\frac{1}{2} \\right)^{2} \\right) - 4\\left( \\frac{1}{2} \\right)^{2} + 8 = 4\\left( m + \\frac{1}{2} \\right)^{2} + 7 \\geq 7\\). Minimum value \\(= 7\\)."
      },
      {
        id: "qe-2b-ex6",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nConsider the quadratic equation \\(x^{2} - (2h - 3)x + (h^{2} - 3k + 1) = 0\\), where \\(h < 0 < k\\).\n(a) Express the discriminant of the equation in terms of \\(h\\) and \\(k\\). Hence, prove that the equation has two distinct real roots.\n(b) Let \\(\\alpha,\\beta\\) be the roots of the equation. (i) Express \\(\\alpha^{2} + \\beta^{2}\\) in terms of \\(h\\) and \\(k\\). (ii) If, in addition that \\(\\alpha^{2} + \\beta^{2} = 39 + 6k\\), find the value of \\(h\\).",
        answer: "(a) \\(\\Delta = 12k - 12h + 5\\). Since \\(k > h\\), \\(\\Delta > 0\\), so the equation has two distinct real roots.\n(b)(i) \\(\\alpha^{2} + \\beta^{2} = 2h^{2} - 12h + 6k + 7\\)\n(b)(ii) \\(h = - 2\\)",
        steps: "(a) \\(\\Delta = \\lbrack - (2h - 3)\\rbrack^{2} - 4(1)(h^{2} - 3k + 1) = 4h^{2} - 12h + 9 - 4h^{2} + 12k - 4 =\\) \\(12k - 12h + 5\\). \\(\\because k > h\\therefore\\Delta = 12k - 12h + 5 > 0\\). \\(\\therefore\\) The equation has two distinct real roots.\n(b) (i) \\(\\alpha + \\beta = 2h - 3,\\alpha\\beta = h^{2} - 3k + 1\\). \\(\\therefore\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta = (2h - 3)^{2} - 2(h^{2} - 3k + 1) =\\) \\(2h^{2} - 12h + 6k + 7\\)\n(ii) \\(2h^{2} - 12h + 6k + 7 = 39 + 6k\\Rightarrow 2h^{2} - 12h - 32 = 0\\Rightarrow h =\\) \\(- 2\\) or \\(h = 8\\) (rejected)"
      },
      {
        id: "qe-2b-ex7",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nIf \\(\\alpha\\) and \\(\\beta\\) are the roots of the quadratic equation \\(x^{2} - 6x - k = 0\\) and \\(\\beta^{2} + 5\\alpha\\beta + 6\\alpha = 4\\), find the value of \\(k\\).",
        answer: "\\(k = 8\\)",
        steps: "\\(\\alpha + \\beta = 6,\\alpha\\beta = - k\\). \\(\\because\\beta\\) is the root of \\(x^{2} - 6x - k = 0\\therefore\\beta^{2} = 6\\beta + k\\).\n\\((6\\beta + k) + 5\\alpha\\beta + 6\\alpha = 4\\Rightarrow 6(\\alpha + \\beta) + 5\\alpha\\beta + k = 4\\Rightarrow 6(6) + 5( - k) + k = 4\\Rightarrow k =\\) \\(8\\)"
      },
      {
        id: "qe-2b-ex8",
        type: "Sum and Product of Roots",
        question: "[Level 3]\nIf \\(\\alpha\\) and \\(\\beta\\) are the roots of the equation of \\(x^{2} + 3x - 8 = 0\\), find the value of \\(\\beta^{3} + 3\\beta^{2} + 8\\alpha\\).",
        answer: "\\(- 24\\)",
        steps: "\\(x^{2} + 3x - 8 = 0\\Rightarrow \\beta^{2} + 3\\beta = 8\\therefore\\beta^{3} + 3\\beta^{2} = 8\\beta\\).\n\\(\\beta^{3} + 3\\beta^{2} + 8\\alpha = 8\\beta + 8\\alpha = 8( - 3) = - 24\\)"
      },
      {
        id: "qe-2b-ex9",
        type: "Sum and Product of Roots",
        question: "If \\(k < 0\\), then the quadratic equation \\(x^{2} - x + 6k = 0\\) has\nA. a double real root. B. no real roots.\nC. two negative roots. D. a positive root and a negative root.",
        answer: "D",
        steps: "For \\(x^{2} - x + 6k = 0\\), \\(\\Delta = ( - 1)^{2} - 4(1)(6k) = 1 - 24k > 0\\) (since \\(k < 0\\)), so two distinct real roots. Also \\(\\alpha\\beta = 6k < 0\\therefore\\) one positive and one negative root. (D)"
      },
      {
        id: "qe-2b-ex10",
        type: "Sum and Product of Roots",
        question: "If \\(m > n\\) and \\(\\left\\{ \\begin{array}{r}\nm^{2} = 2(2 - m) \\\\\nn^{2} = 2(2 - n)\n\\end{array} \\right.\\ \\), then \\(m^{2} - n^{2} =\\)\nA. \\(20.\\) B. \\(4\\sqrt{5}\\) C. \\(- 4\\sqrt{5}\\) D. \\(- 4\\sqrt{5}\\) or \\(4\\sqrt{5}\\)",
        answer: "C",
        steps: "Rewrite the equation: \\(x^{2} + 2x - 4 = 0\\), where roots are \\(m\\) and \\(n\\). \\(m + n = - 2,mn = - 4\\).\n\\(m^{2} - n^{2} = (m + n)(m - n) = ( - 2)\\sqrt{(m + n)^{2} - 4mn} = - 2\\sqrt{( - 2)^{2} - 4( - 4)} = - 4\\sqrt{5}\\) (C)"
      },
      {
        id: "qe-2b-ex11",
        type: "Sum and Product of Roots",
        question: "[2526-WYK-S4-Final-P2-Q36]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the quadratic equation \\(x^{2} + mx - 35 = 0\\), where \\(m\\) is a constant. If \\(\\alpha^{2} - m\\beta = 39\\), then \\(m =\\)\nA. \\(2.\\) B. \\(4.\\) C. \\(- 2\\) or \\(2.\\) D. \\(- 4\\) or \\(4.\\)",
        answer: "C",
        steps: "\\(\\alpha + \\beta = - m,\\alpha\\beta = - 35\\). \\(\\because\\alpha^{2} + m\\alpha - 35 = 0\\therefore\\alpha^{2} = 35 - m\\alpha\\).\n\\(35 - m\\alpha - m\\beta = 39\\Rightarrow - m(\\alpha + \\beta) = 4\\Rightarrow - m( - m) = 4\\Rightarrow m = 2\\) or \\(m = - 2\\) (C)\nAlternative: By substituting each option: when \\(m = 2\\), roots are \\(5\\) and \\(- 7\\), \\(5^{2} - 2( - 7) = 39\\). Test \\(m = - 2\\) to identify C."
      },
      {
        id: "qe-2b-ex12",
        type: "Sum and Product of Roots",
        question: "If the roots of the equation \\(4x^{2} + 7x - b = 0\\) are \\(\\alpha\\) and \\(\\beta\\), where \\(b \\neq 0\\), then \\(- \\frac{8\\alpha}{4\\beta + 7} =\\)\nA. \\(1.\\) B. \\(2.\\) C. \\(- 1.\\) D. \\(- 2.\\)",
        answer: "B",
        steps: "\\(\\alpha\\beta = - \\frac{b}{4} \\neq 0\\). \\(\\because 4\\beta^{2} + 7\\beta - b = 0\\Rightarrow 4\\beta + 7 = \\frac{b}{\\beta}\\).\n\\(- \\frac{8\\alpha}{4\\beta + 7} = - \\frac{8\\alpha}{\\frac{b}{\\beta}} = - \\frac{8\\alpha\\beta}{b} = - \\frac{8\\left( - \\frac{b}{4} \\right)}{b} = 2\\) (B)\nAlternative: Substitute \\(b = 2,\\alpha = 0.25,\\beta = - 2\\): \\(- \\frac{8(0.25)}{4( - 2) + 7} = 2\\)."
      },
      {
        id: "qe-2b-ex13",
        type: "Sum and Product of Roots",
        question: "[Challenging]\nIf \\(\\left\\{ \\begin{array}{r}\n\\alpha^{2} + 5\\alpha - k = 0 \\\\\n\\beta^{2} - 5\\beta - k = 0\n\\end{array} \\right.\\ \\) where \\(\\alpha > \\beta > 0\\), find the value of \\(\\alpha^{2} - \\beta^{2}\\).\nA. \\(5\\sqrt{25 - 4k}\\) B. \\(5\\sqrt{25 + 4k}\\) C. \\(- 5\\sqrt{25 - 4k}\\) D. \\(- 5\\sqrt{25 + 4k}\\)",
        answer: "B",
        steps: "\\(x^{2} + 5x - k = 0\\) with roots \\(\\alpha\\) and \\(- \\beta\\). \\(\\alpha + ( - \\beta) = 5,\\alpha( - \\beta) = - k\\).\n\\(\\therefore\\alpha + \\beta = \\sqrt{(\\alpha - \\beta)^{2} + 4\\alpha\\beta} = \\sqrt{5^{2} + 4k}\\). \\(\\alpha^{2} - \\beta^{2} = (\\alpha + \\beta)(\\alpha - \\beta) = 5\\sqrt{25 + 4k}\\) (B)"
      },
      {
        id: "qe-2b-ex14",
        type: "Sum and Product of Roots",
        question: "[2526-WYK-S4-Midyear-P2-Q45-Challenging]\nLet \\(a,b,c\\) and \\(d\\) be \\(4\\) distinct real numbers. It is given that \\(a\\) and \\(b\\) are the roots of the quadratic equation \\(x^{2} - 10cx - 11d = 0\\), and \\(c\\) and \\(d\\) are the roots of the quadratic equation \\(x^{2} - 10ax - 11b = 0\\). Find the value of \\(a + b + c + d\\).\nA. \\(11.\\) B. \\(- 11.\\) C. \\(121\\) D. \\(1210.\\)",
        answer: "D",
        steps: "\\(a + b = 10c,c + d = 10a,ab = - 11d,cd = - 11b\\). We have \\(a + b + c + d = 10(a + c)\\) and \\(ac = 121\\).\n\\(a^{2} - 10ac - 11d = 0\\) and \\(c^{2} - 10ac - 11b = 0\\Rightarrow a^{2} - c^{2} = 11(d - b)\\Rightarrow (a + c)(a - c) = 11\\lbrack(10a - c) - (10c - a)\\rbrack = 121(a - c)\\)\n\\((a - c)(a + c - 121) = 0\\Rightarrow a + c = 121\\) (since \\(a,b,c,d\\) are distinct). \\(a + b + c + d = 10 \\times 121 = 1210\\) (D)"
      },
      {
        id: "qe-2b-ex15",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nThe figure shows the graph of \\(y = - x^{2} + (k + 3)x + (k + 10)\\), where \\(k > 0\\). It cuts the \\(x\\)-axis at the points \\(A(\\alpha,0)\\) and \\(B(\\beta,0)\\), and cuts the \\(y\\)-axis at the point \\(C\\). \\(M\\) is the mid-point of \\(AB\\).\n(a) Find the coordinates of \\(C\\) in terms of \\(k\\).\n(b) Find, in terms of \\(k\\), \\(\\alpha + \\beta\\), \\(\\alpha\\beta\\) and \\((\\alpha - \\beta)^{2}\\).\n(c) Find the coordinates of \\(M\\) in terms of \\(k\\).\n(d) If \\(OC = 3OM\\), find the value of \\(k\\). Hence, using the result of (b), find the area of \\(\\bigtriangleup ABC\\) and leave your answer in surd form.",
        images: [{ src: "images/qe-2b-ex15.png", width: 168 }],
        answer: "(a) \\(C = (0,k + 10)\\)\n(b) \\(\\alpha + \\beta = k + 3\\), \\(\\alpha\\beta = - k - 10\\), \\((\\alpha - \\beta)^{2} = k^{2} + 10k + 49\\)\n(c) \\(M = \\left( \\frac{k + 3}{2},0 \\right)\\)\n(d) \\(k = 11\\); area of \\(\\bigtriangleup ABC = 21\\sqrt{70}\\ sq.\\ units\\)",
        steps: "(a) Coordinates of \\(C = (0,k + 10)\\)\n(b) Consider \\(- x^{2} + (k + 3)x + (k + 10) = 0\\): \\(\\alpha + \\beta =\\) \\(k + 3\\); \\(\\alpha\\beta =\\) \\(- k - 10\\)\n\\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = (k + 3)^{2} - 4( - k - 10) =\\) \\(k^{2} + 10k + 49\\)\n(c) Coordinates of \\(M = \\left( \\frac{\\alpha + \\beta}{2},0 \\right) =\\) \\(\\left( \\frac{k + 3}{2},0 \\right)\\)\n(d) \\(\\because OC = 3OM\\Rightarrow k + 10 = 3\\left( \\frac{k + 3}{2} \\right)\\Rightarrow k =\\) \\(11\\)\nArea of \\(\\bigtriangleup ABC = \\frac{1}{2} \\times AB \\times OC = \\frac{1}{2} \\times (\\beta - \\alpha) \\times (11 + 10) = \\frac{1}{2} \\times \\sqrt{11^{2} + 10(11) + 49} \\times 21 =\\) \\(21\\sqrt{70}\\ sq.\\ units\\)"
      },
      {
        id: "qe-2b-ex16",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nIn the figure, the graph of \\(y = - x^{2} + (k - 3)x + (k + 2)\\), where \\(k > 0\\), cuts the \\(y\\)-axis at the point \\(S\\), and it cuts the \\(x\\)-axis at the points \\(P(\\alpha,0)\\) and \\(Q(\\beta,0)\\)\n(a) Find the coordinates of \\(S\\) in terms of \\(k\\).\n(b) Express \\(\\alpha + \\beta\\) and \\(\\alpha\\beta\\) in terms of \\(k\\). Hence, express \\((\\alpha - \\beta)^{2}\\) in terms of \\(k\\).\n(c) It is given that \\(RST\\) is a straight line and \\(PQRT\\) is a square. (i) Using the results of (a) and (b), or otherwise, find the value of \\(k\\). (ii) Hence, find the values of \\(\\alpha\\) and \\(\\beta\\).",
        images: [{ src: "images/qe-2b-ex16.png", width: 173 }],
        answer: "(a) \\(S = (0,k + 2)\\)\n(b) \\(\\alpha + \\beta = k - 3\\), \\(\\alpha\\beta = - k - 2\\), \\((\\alpha - \\beta)^{2} = k^{2} - 2k + 17\\)\n(c)(i) \\(k = \\frac{13}{6}\\)\n(c)(ii) \\(\\alpha = - \\frac{5}{2}\\), \\(\\beta = \\frac{5}{3}\\)",
        steps: "(a) When \\(x = 0,y = k + 2\\therefore\\) Coordinates of \\(S = (0,k + 2)\\)\n(b) Consider \\(- x^{2} + (k - 3)x + (k + 2) = 0\\): \\(\\alpha + \\beta =\\) \\(k - 3\\), \\(\\alpha\\beta =\\) \\(- k - 2\\)\n\\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = (k - 3)^{2} - 4( - k - 2) =\\) \\(k^{2} - 2k + 17\\)\n(c) (i) \\(\\because PQRT\\) is a square \\(\\therefore PQ = OS\\Rightarrow PQ^{2} = OS^{2}\\Rightarrow (\\beta - \\alpha)^{2} = (k + 2)^{2}\\Rightarrow k^{2} - 2k + 17 = k^{2} + 4k + 4\\Rightarrow 13 = 6k\\Rightarrow k =\\) \\(\\frac{13}{6}\\)\n(ii) \\(- x^{2} + \\left( \\frac{13}{6} - 3 \\right)x + \\left( \\frac{13}{6} + 2 \\right) = 0\\Rightarrow 6x^{2} + 5x - 25 = 0\\Rightarrow x = - \\frac{5}{2}\\) or \\(x = \\frac{5}{3}\\therefore\\alpha =\\) \\(- \\frac{5}{2}\\)\\(,\\beta =\\) \\(\\frac{5}{3}\\)"
      },
      {
        id: "qe-2b-ex17",
        type: "Sum and Product of Roots",
        question: "It is given that the graph of \\(y = ax^{2} + bx + c\\) has one negative \\(x\\)-intercept and one positive \\(x\\)-intercept. Which of the following must be true?\nI. \\(b^{2} - 4ac > 0\\) II. \\(\\frac{b}{a} > 0\\) III. \\(\\frac{c}{a} < 0\\)\nA. I only B. II only C. I and III only D. II and III only",
        answer: "C",
        steps: "When \\(ax^{2} + bx + c = 0\\), I: Since the equation has two different roots, I is true. II: The sum of a positive and negative number can be positive or negative (undetermined). III: The product of a positive and negative number must be negative (\\(\\frac{c}{a} < 0\\)). (C)"
      },
      // ---- Chapter 2 C) Complex Numbers ----
      {
        id: "qe-2c-ex1",
        type: "Complex Numbers",
        question: "[Level 1] [2425-WYK-S4-Mid-year-I-Q13]\nLet \\(a\\) be a real number.\n(a) Simplify and express \\(\\frac{a + 5i}{a - 3i}\\) in the form \\(c + di\\), where \\(c\\) and \\(d\\) are real numbers.\n(b) If the sum of the real part and imaginary part of \\(\\frac{a + 5i}{a - 3i}\\) is \\(- \\frac{3}{5}\\), find the values of \\(a\\).",
        answer: "(a) \\(\\frac{a^{2} - 15}{a^{2} + 9} + \\frac{8a}{a^{2} + 9}i\\)\n(b) \\(a = - 6\\) or \\(a = 1\\)",
        steps: "(a) \\(\\frac{a + 5i}{a - 3i} = \\frac{a + 5i}{a - 3i} \\times \\frac{a + 3i}{a + 3i} = \\frac{a^{2} + 3ai + 5ai + 15i^{2}}{a^{2} - 9i^{2}} = \\frac{a^{2} - 15}{a^{2} + 9} + \\frac{8a}{a^{2} + 9}i\\)\n(b) \\(\\frac{a^{2} - 15}{a^{2} + 9} + \\frac{8a}{a^{2} + 9} = - \\frac{3}{5}\\Rightarrow 5(a^{2} - 15 + 8a) = - 3(a^{2} + 9)\\Rightarrow 8a^{2} + 40a - 48 = 0\\Rightarrow a = - 6\\) or \\(a = 1\\)"
      },
      {
        id: "qe-2c-ex2",
        type: "Complex Numbers",
        question: "[Level 2]\nLet \\(n\\) be a non-negative real number.\n(a) Simplify \\(\\frac{1}{\\sqrt{- (n + 1)} - \\sqrt{- n}}\\) for non-negative \\(n\\).\n(b) Using the results of (a), simplify \\(\\frac{2}{\\sqrt{- 2} - \\sqrt{- 1}} - \\frac{2}{\\sqrt{- 3} - \\sqrt{- 2}} + \\frac{2}{\\sqrt{- 4} - \\sqrt{- 3}}\\cdots + \\frac{2}{\\sqrt{- 24} - \\sqrt{- 23}} - \\frac{2}{\\sqrt{- 25} - \\sqrt{- 24}}\\).",
        answer: "(a) \\(( - \\sqrt{n + 1} - \\sqrt{n})i\\)\n(b) \\(8i\\)",
        steps: "(a) \\(\\frac{1}{\\sqrt{- (n + 1)} - \\sqrt{- n}} \\times \\frac{\\sqrt{- (n + 1)} + \\sqrt{- n}}{\\sqrt{- (n + 1)} + \\sqrt{- n}} = \\frac{(\\sqrt{n + 1} + \\sqrt{n})i}{- 1} = ( - \\sqrt{n + 1} - \\sqrt{n})i\\)\n(b) \\(= 2\\lbrack( - \\sqrt{2} - \\sqrt{1})i - ( - \\sqrt{3} - \\sqrt{2})i + ( - \\sqrt{4} - \\sqrt{3})i + \\ldots + ( - \\sqrt{24} - \\sqrt{23})i - ( - \\sqrt{25} - \\sqrt{24})i\\rbrack = 2( - i + \\sqrt{25}i) = 8i\\)"
      },
      {
        id: "qe-2c-ex3",
        type: "Complex Numbers",
        question: "If \\(3 - i\\) is a root of \\(x^{2} + bx + c = 0\\), then\nA. \\(b = 3\\) and \\(c = - 19.\\) B. \\(b = - 3\\) and \\(c = 17.\\) C. \\(b = - 6\\) and \\(c = - 26.\\) D. \\(b = - 6\\) and \\(c = 10.\\)",
        answer: "D",
        steps: "\\(3 + i\\) is another root of \\(x^{2} + bx + c = 0\\). \\(- b = (3 + i) + (3 - i)\\Rightarrow b = - 6\\); \\(c = (3 + i)(3 - i) = 10\\). (D)"
      },
      {
        id: "qe-2c-ex4",
        type: "Complex Numbers",
        question: "[2020-DSE-II-Q37]\nDefine \\(z_{1} = \\frac{2 + ki}{1 + i}\\) and \\(z_{2} = \\frac{k + 5i}{2 - i}\\), where \\(k\\) is a real number. If the imaginary part of \\(z_{1}\\) is equal to the imaginary part of \\(z_{2}\\), then \\(z_{1} - z_{2} =\\)\nA. \\(- 20\\) B. \\(0\\) C. \\(3\\) D. \\(10\\)",
        answer: "D",
        steps: "\\(z_{1} = \\frac{(2 + ki)(1 - i)}{2} = \\frac{2 + k}{2} + \\frac{k - 2}{2}i\\); \\(z_{2} = \\frac{(k + 5i)(2 + i)}{5} = \\frac{2k - 5}{5} + \\frac{k + 10}{5}i\\).\n\\(\\frac{k - 2}{2} = \\frac{k + 10}{5}\\Rightarrow 5k - 10 = 2k + 20\\Rightarrow k = 10\\). Then \\(z_{1} = 6 + 4i,z_{2} = - 4 + 4i\\Rightarrow z_{1} - z_{2} = 10\\). (D)"
      },
      {
        id: "qe-2c-ex5",
        type: "Complex Numbers",
        question: "[Level 2]\nLet \\(z_{1} = \\frac{1}{2} - \\frac{1}{6}i\\) and \\(z_{2} = - \\frac{1}{6} + \\frac{1}{2}i\\).\n(a) Evaluate \\((z_{1} - z_{2})^{2}\\).\n(b) If \\(p(z_{1} - z_{2})^{4} + \\frac{q}{z_{1}z_{2}} = - 64 - 576i\\), where \\(p\\) and \\(q\\) are real numbers, find \\(p\\) and \\(q\\).",
        answer: "(a) \\((z_{1} - z_{2})^{2} = - \\frac{8}{9}i\\)\n(b) \\(p = 81\\), \\(q = 160\\)",
        steps: "(a) \\((z_{1} - z_{2})^{2} = \\left( \\frac{1}{2} - \\frac{1}{6}i + \\frac{1}{6} - \\frac{1}{2}i \\right)^{2} = \\left( \\frac{2}{3} - \\frac{2}{3}i \\right)^{2} = \\frac{4}{9}( - 2i) = - \\frac{8}{9}i\\)\n(b) \\(p(z_{1} - z_{2})^{4} = p\\left( - \\frac{8}{9}i \\right)^{2} = - \\frac{64}{81}p\\); \\(\\frac{q}{z_{1}z_{2}} = \\frac{q}{\\frac{5}{18}i} = - \\frac{18q}{5}i\\).\n\\(- \\frac{64}{81}p - \\frac{18q}{5}i = - 64 - 576i\\Rightarrow p = 81,q = 160\\)."
      },
      {
        id: "qe-2c-ex6",
        type: "Complex Numbers",
        question: "[Level 2]\nLet \\(z = (4x + 7) + (9 - x)i\\) be a complex number, where \\(x\\) is a real number. Find the value of \\(x\\) that\n(a) \\(zi\\) is a real number,\n(b) \\(\\frac{z}{1 + i}\\) is a purely imaginary number.",
        answer: "(a) \\(x = - \\frac{7}{4}\\)\n(b) \\(x = - \\frac{16}{3}\\)",
        steps: "(a) \\(zi = \\lbrack(4x + 7) + (9 - x)i\\rbrack i = (x - 9) + (4x + 7)i\\). Since \\(zi\\) is real, \\(4x + 7 = 0\\Rightarrow x =\\) \\(- \\frac{7}{4}\\)\n(b) \\(\\frac{z}{1 + i} = \\frac{(4x + 7) + (9 - x)i}{1 + i} \\times \\frac{1 - i}{1 - i} = \\frac{3x + 16}{2} + \\frac{2 - 5x}{2}i\\).\nFor purely imaginary, \\(\\frac{3x + 16}{2} = 0\\) and \\(\\frac{2 - 5x}{2} \\neq 0\\Rightarrow x =\\) \\(- \\frac{16}{3}\\)"
      },
      {
        id: "qe-2c-ex7",
        type: "Complex Numbers",
        question: "[Level 3]\nLet \\(z = a + bi\\), where \\(a\\) and \\(b\\) are real numbers. Denote the conjugate of \\(z\\) by \\(\\overline{z}\\).\n(a) Express \\(\\overline{z}\\) in terms of \\(a\\) and \\(b\\).\n(b) Suppose \\(\\alpha\\) and \\(\\beta\\) are two fixed complex numbers such that \\(\\alpha z + \\beta\\overline{z}\\) is a real number. Is \\(\\alpha + \\beta\\) a real number, a purely imaginary number, or a complex number? Explain your answer.",
        answer: "(a) \\(\\overline{z} = a - bi\\)\n(b) \\(\\alpha + \\beta\\) is a real number.",
        steps: "(a) \\(\\overline{z} = a - bi\\)\n(b) Let \\(\\alpha = c + di\\) and \\(\\beta = p + qi\\) (\\(c,d,p,q \\in \\mathbf{R}\\)). \\(\\alpha z + \\beta\\overline{z} = (ac + ap - bd + bq) + (ad + bc + aq - bp)i\\).\nSince \\(\\alpha z + \\beta\\overline{z}\\) is real for any \\(z\\), \\(a(d + q) + b(c - p) = 0\\Rightarrow d + q = 0\\) and \\(c - p = 0\\Rightarrow c = p,d = - q\\).\nWe have \\(\\alpha + \\beta = (c + di) + (p + qi) = 2c\\), which is a real number."
      },
      {
        id: "qe-2c-ex8",
        type: "Complex Numbers",
        question: "Find the values of the real numbers \\(a\\) and \\(b\\) if \\(\\frac{1 - 3i}{a - bi} = - 1 - i\\).\nA. \\(a = 1,b = - 2\\) B. \\(a = 1,b = 2\\) C. \\(a = 2,b = - 1\\) D. \\(a = 2,b = 1\\)",
        answer: "A",
        steps: "\\(1 - 3i = (a - bi)( - 1 - i) = ( - a - b) + (b - a)i\\Rightarrow \\left\\{ \\begin{array}{r}\n - a - b = 1 \\\\\nb - a = - 3\n\\end{array} \\right.\\ \\Rightarrow a =\\) \\(1\\) and \\(b =\\) \\(- 2\\) (A)"
      },
      {
        id: "qe-2c-ex9",
        type: "Complex Numbers",
        question: "If \\(x\\) and \\((x + 7)i - \\frac{xi}{3 + i}\\) are real numbers, then \\(x =\\)\nA. \\(10.\\) B. \\(7.\\) C. \\(- 7.\\) D. \\(- 10.\\)",
        answer: "D",
        steps: "\\((x + 7)i - \\frac{xi}{3 + i} \\times \\frac{3 - i}{3 - i} = - \\frac{x}{10} + \\left( \\frac{7x}{10} + 7 \\right)i\\). \\(\\frac{7x}{10} + 7 = 0\\Rightarrow x =\\) \\(- 10\\) (D)\nAlternative: Substitute each option into \\((x + 7)i - \\frac{xi}{3 + i}\\) to see if there is any imaginary part."
      },
      {
        id: "qe-2c-ex10",
        type: "Complex Numbers",
        question: "[Challenging]\nLet \\(a\\) and \\(b\\) be positive real numbers. If \\(\\sqrt{7 + 24i} = \\sqrt{a} + \\sqrt{b}i\\), then \\(b =\\)\nA. \\(9.\\) B. \\(12.\\) C. \\(16.\\) D. \\(22.\\)",
        answer: "A",
        steps: "\\(7 + 24i = (\\sqrt{a} + \\sqrt{b}i)^{2} = (a - b) + 2\\sqrt{ab}i\\Rightarrow a - b = 7\\) and \\(2\\sqrt{ab} = 24\\Rightarrow a = b + 7\\) and \\(ab = 144\\).\n\\((b + 7)b = 144\\Rightarrow (b - 9)(b + 16) = 0\\Rightarrow b =\\) \\(9\\) or \\(b = - 16\\) (rej.) (A)"
      },
      {
        id: "qe-2c-ex11",
        type: "Complex Numbers",
        question: "[Level 1] [2324-WYK-S6-Mock-I-Q15]\n(a) Express \\(\\frac{k^{2} - 1 - ki}{k + (k^{2} - 1)i}\\) in the form of \\(a + bi\\), where \\(a,b\\) and \\(k\\) are real numbers.\n(b) Hence simplify \\((2 - 5i)\\left\\lbrack \\frac{k^{2} - 1 - ki}{k + (k^{2} - 1)i} \\right\\rbrack^{2023}\\).",
        answer: "(a) \\(- i\\)\n(b) \\(5 + 2i\\)",
        steps: "(a) \\(\\frac{(k^{2} - 1) - ki}{k + (k^{2} - 1)i} = \\frac{a - bi}{b + ai} = \\frac{- i(b + ai)}{b + ai} = - i\\)\n(b) \\((2 - 5i)( - i)^{2023} = (2 - 5i)(i) = 5 + 2i\\)"
      },
      {
        id: "qe-2c-ex12",
        type: "Complex Numbers",
        question: "[Level 2] [2324-WYK-S4-Mid-year-I-Q12]\n(a) Simplify \\(\\frac{a - bi}{b + ai}\\), where \\(a\\) and \\(b\\) are real constants.\n(b) Find the values of \\(x\\) and \\(y\\) if \\((x + y)(2 - i) - y = \\left( \\frac{a - bi}{b + ai} \\right)^{2023}\\), where \\(x\\) and \\(y\\) are real constants.",
        answer: "(a) \\(- i\\)\n(b) \\(x = 1\\), \\(y = - 2\\)",
        steps: "(a) \\(\\frac{a - bi}{b + ai} \\times \\frac{b - ai}{b - ai} = \\frac{ab - a^{2}i - b^{2}i - ab}{b^{2} + a^{2}} = - i\\)\n(b) L.H.S. \\(= (2x + y) + ( - x - y)i\\), R.H.S. \\(= ( - i)^{2023} = i\\Rightarrow \\left\\{ \\begin{array}{r}\n2x + y = 0 \\\\\nx + y = - 1\n\\end{array} \\right.\\ \\Rightarrow x = 1,y = - 2\\)"
      },
      {
        id: "qe-2c-ex13",
        type: "Complex Numbers",
        question: "[Level 3]\nExpress the following in the form of \\(a + bi\\), where \\(a\\) and \\(b\\) are real numbers.\n(a) \\(\\left( \\frac{\\sqrt{3} + i}{2} \\right)^{12n - 1}\\)\n(b) \\(\\frac{(1 - i)^{n}}{(1 + i)^{n - 6}}\\), where \\(n\\) is a natural number.\n(c) \\((\\sqrt{3} + i)^{419} \\cdot \\frac{(1 - i)^{10} \\cdot (1 - i)^{11} \\cdot (1 - i)^{12}\\cdots(1 - i)^{30}}{(2 + 2i)^{414}}\\).\nHint: You may make use of the identity \\(1 + 2 + 3 + \\ldots + n = \\frac{n(n + 1)}{2}\\).",
        answer: "(a) \\(\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i\\)\n(b) \\(8( - i)^{n + 1}\\)\n(c) \\(- 128 - 128\\sqrt{3}i\\)",
        steps: "(a) \\(\\left( \\frac{\\sqrt{3} + i}{2} \\right)^{3} = i\\Rightarrow \\left( \\frac{\\sqrt{3} + i}{2} \\right)^{12n - 1} = \\left\\lbrack \\left( \\frac{\\sqrt{3} + i}{2} \\right)^{3} \\right\\rbrack^{4n} \\times \\frac{2}{\\sqrt{3} + i} = i^{4n} \\times \\frac{2(\\sqrt{3} - i)}{4} = \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i\\)\n(b) \\(\\frac{(1 - i)^{n}}{(1 + i)^{n - 6}} = \\left( \\frac{1 - i}{1 + i} \\right)^{n}(1 + i)^{6} = ( - i)^{n}(2i)^{3} = 8( - i)^{n + 1}\\)\n(c) \\(= 2^{5}\\left( \\frac{\\sqrt{3} + i}{2} \\right)^{419} \\cdot \\frac{(1 - i)^{\\frac{(10 + 30)21}{2}}}{(1 + i)^{414}} = 32\\left( \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i \\right) \\cdot \\frac{(1 - i)^{420}}{(1 + i)^{420 - 6}} = 32\\left( \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i \\right)( - 8i) = - 128 - 128\\sqrt{3}i\\)"
      },
      {
        id: "qe-2c-ex14",
        type: "Complex Numbers",
        question: "[2025-DSE-II-Q35]\n\\(i^{9} + i^{10} + i^{11} + \\ldots + i^{999} =\\)\nA. \\(- 1.\\) B. \\(0.\\) C. \\(1.\\) D. \\(i.\\)",
        answer: "A",
        steps: "\\(i^{9} + i^{10} + i^{11} + \\ldots + i^{999} = (i^{9} + i^{10} + i^{11} + i^{12}) + \\ldots + (i^{997} + i^{998} + i^{999}) = (0) + \\ldots + (i - 1 - i) = - 1\\) (A)"
      },
      {
        id: "qe-2c-ex15",
        type: "Complex Numbers",
        question: "Let \\(z = \\frac{(2i^{2026} + a)^{2}}{i^{2024} - 2i^{2025}} - 10i\\). If \\(a\\) and \\(z\\) are real, then \\(z =\\)\nA. \\(- 3\\) or \\(7.\\) B. \\(- 7\\) or \\(3.\\) C. \\(5.\\) D. \\(- 5.\\)",
        answer: "C",
        steps: "\\(\\frac{( - 2 + a)^{2}}{1 - 2i} - 10i = \\frac{(a - 2)^{2} + (a - 2)^{2}(2i) - 50i}{5}\\). For \\(z\\) to be real, \\((a - 2)^{2}(2i) - 50i = 0\\Rightarrow a = - 3\\) or \\(a = 7\\Rightarrow z = \\frac{(a - 2)^{2}}{5} = 5\\) (C)\nAlternative: Substitute each option into \\(\\frac{( - 2 + a)^{2}}{1 - 2i} - 10i\\) to see if there is any imaginary part."
      },
      {
        id: "qe-2c-ex16",
        type: "Complex Numbers",
        question: "[Challenging] The real part of \\(1 + 2i + 3i^{2} + \\ldots + 2025i^{2024}\\) is\nA. \\(- 2024.\\) B. \\(- 1012.\\) C. \\(1013.\\) D. \\(2026.\\)",
        answer: "C",
        steps: "The real part \\(= 1 - 3 + 5 - \\ldots + 2025\\) (\\(1013\\) terms) \\(= (1 - 3) + (5 - 7) + \\ldots + (2021 - 2023) + 2025 = 506( - 2) + 2025 =\\) \\(1013\\) (C)"
      }
    ],

    // ===== S.4 Functions and Graphs (S4_Math_2_Functions_and_Graphs_Editable.docx) =====
    functions_and_graphs: [
      // ---- A) Quadratic Function ----
      {
        id: "fg-a-p1",
        type: "Quadratic Function",
        question: "Find the direction of opening, \\(y\\)-intercept and the axis of symmetry of the following functions.\n(a) \\(y = 2x^{2} - 8x + 5\\)\n(b) \\(y = - x^{2} - 5x + 6\\)\n(c) \\(y = 3(x - 2)(x + 4)\\)\n(d) \\(y = 4 - x(x + 3)\\)\n(e) \\(y = - \\frac{1}{2}(x + 4)^{2} + 8\\)\n(f) \\(y = kx^{2} - 6kx + 7\\), where \\(k < 0\\).",
        answer: "(a) Opens upwards. \\(y\\)-intercept: \\(5\\). AOS: \\(x = 2\\).\n(b) Opens downwards. \\(y\\)-intercept: \\(6\\). AOS: \\(x = - 2.5\\).\n(c) Opens upwards. \\(y\\)-intercept: \\(- 24\\). AOS: \\(x = - 1\\).\n(d) Opens downwards. \\(y\\)-intercept: \\(4\\). AOS: \\(x = - 1.5\\).\n(e) Opens downwards. \\(y\\)-intercept: \\(0\\). AOS: \\(x = - 4\\).\n(f) Opens downwards. \\(y\\)-intercept: \\(7\\). AOS: \\(x = 3\\).",
        steps: "(a) \\(y = 2x^{2} - 8x + 5\\): Direction of opening: opens upwards. \\(y\\)-intercept: \\(5\\). AOS: \\(x = 2\\).\n(b) \\(y = - x^{2} - 5x + 6\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(6\\). AOS: \\(x = - 2.5\\).\n(c) \\(3x^{2} + 6x - 24\\): Direction of opening: opens upwards. \\(y\\)-intercept: \\(- 24\\). AOS: \\(x = - 1\\).\n(d) \\(- x^{2} - 3x + 4\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(4\\). AOS: \\(x = - 1.5\\).\n(e) \\(- \\frac{1}{2}x^{2} - 4x\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(0\\). AOS: \\(x = - 4\\).\n(f) \\(y = kx^{2} - 6kx + 7\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(7\\). AOS: \\(x = 3\\)."
      },
      {
        id: "fg-a-p2",
        type: "Quadratic Function",
        question: "Find the maximum/minimum point of the following functions by either completing square or substitution method.\n(a) \\(y = 2x^{2} - 8x + 5\\)\n(b) \\(y = - x^{2} - 5x + 6\\)\n(c) \\(y = 3(x - 2)(x + 4)\\)\n(d) \\(y = 4 - x(x + 3)\\)\n(e) \\(y = - \\frac{1}{2}(x + 4)^{2} + 8\\)\n(f) \\(y = mx^{2} - 6mx + 7\\), where \\(m < 0\\).",
        answer: "(a) Minimum point: \\((2, - 3)\\)\n(b) Maximum point: \\(\\left( - \\frac{5}{2},\\frac{49}{4} \\right)\\)\n(c) Minimum point: \\(( - 1, - 27)\\)\n(d) Maximum point: \\(\\left( - \\frac{3}{2},\\frac{25}{4} \\right)\\)\n(e) Maximum point: \\(( - 4,8)\\)\n(f) Maximum point: \\((3, - 9m + 7)\\)",
        steps: "(a) \\(y = 2(x - 2)^{2} - 3\\Rightarrow \\) Minimum point: \\((2, - 3)\\). Alternative: \\(h = - \\frac{- 8}{2(2)} = 2,k = 2(2)^{2} - 8(2) + 5 = - 3\\).\n(b) \\(y = - \\left( x + \\frac{5}{2} \\right)^{2} + \\frac{49}{4}\\Rightarrow \\) Maximum point: \\(\\left( - \\frac{5}{2},\\frac{49}{4} \\right)\\). Alternative: \\(h = - \\frac{- 5}{2( - 1)} = - \\frac{5}{2},k = - \\left( - \\frac{5}{2} \\right)^{2} - 5\\left( - \\frac{5}{2} \\right) + 6 = \\frac{49}{4}\\).\n(c) \\(y = 3(x + 1)^{2} - 27\\Rightarrow \\) Minimum point: \\(( - 1, - 27)\\). Alternative: \\(h = - \\frac{6}{2(3)} = - 1,k = 3( - 1)^{2} + 6( - 1) - 24 = - 27\\).\n(d) \\(y = - \\left( x + \\frac{3}{2} \\right)^{2} + \\frac{25}{4}\\Rightarrow \\) Maximum point: \\(\\left( - \\frac{3}{2},\\frac{25}{4} \\right)\\). Alternative: \\(h = - \\frac{- 3}{2( - 1)} = - \\frac{3}{2},k = - \\left( - \\frac{3}{2} \\right)^{2} - 3\\left( - \\frac{3}{2} \\right) + 4 = \\frac{25}{4}\\).\n(e) \\(y = - \\frac{1}{2}(x + 4)^{2} + 8\\Rightarrow \\) Maximum point: \\(( - 4,8)\\).\n(f) \\(y = m(x - 3)^{2} - 9m + 7\\Rightarrow \\) Maximum point: \\((3, - 9m + 7)\\). Alternative: \\(h = - \\frac{- 6m}{2m} = 3,k = m(3)^{2} - 6m(3) + 7 = 7 - 9m\\)."
      },
      {
        id: "fg-a-p3",
        type: "Quadratic Function",
        question: "Find the quadratic functions based on the given information.\n(a) Passing through points \\((0,4),(1,3)\\) and \\(( - 1,9)\\).\n(b) Axis of symmetry \\(x = - 1\\). Maximum value \\(4\\). \\(y\\)-intercept \\(2\\).\n(c) \\(x\\)-intercepts \\(- 3\\) and \\(1\\). Passing through point \\((2,10)\\).\n(d) Axis of symmetry \\(x = 3\\). Passing through points \\((1,10)\\) and \\((4, - 2)\\).\n(e) Passing through points \\((1,11)\\) and \\((5,11)\\). Maximum value \\(= 15\\).\n(f) Vertex \\((2, - 9)\\). Distance between \\(x\\)-intercepts \\(= 6\\).",
        answer: "(a) \\(y = 2x^{2} - 3x + 4\\)\n(b) \\(y = - 2(x + 1)^{2} + 4\\)\n(c) \\(y = 2(x + 3)(x - 1)\\)\n(d) \\(y = 4(x - 3)^{2} - 6\\)\n(e) \\(y = - (x - 3)^{2} + 15\\)\n(f) \\(y = (x - 5)(x + 1)\\)",
        steps: "(a) Let \\(y = ax^{2} + bx + c\\). By \\(y\\)-intercept, \\(c = 4\\). Solving \\(\\left\\{ \\begin{array}{r}\n3 = a(1)^{2} + b(1) + 4 \\\\\n9 = a( - 1)^{2} + b( - 1) + 4\n\\end{array} \\right.\\ \\), we have \\(a = 2,b = - 3\\Rightarrow y = 2x^{2} - 3x + 4\\).\n(b) Let \\(y = a(x + 1)^{2} + 4\\). By \\(2 = a(0 + 1)^{2} + 4\\), \\(a = - 2\\Rightarrow y = - 2(x + 1)^{2} + 4\\).\n(c) Let \\(y = a(x + 3)(x - 1)\\). By \\(10 = a(2 + 3)(2 - 1)\\), \\(a = 2\\Rightarrow y = 2(x + 3)(x - 1)\\).\n(d) Let \\(y = a(x - 3)^{2} + b\\). Solving \\(\\left\\{ \\begin{array}{r}\n10 = a(1 - 3)^{2} + b \\\\\n - 2 = a(4 - 3)^{2} + b\n\\end{array} \\right.\\ \\), we have \\(a = 4,b = - 6\\Rightarrow y = 4(x - 3)^{2} - 6\\).\n(e) Axis of symmetry: \\(x = \\frac{1 + 5}{2} = 3\\). Let \\(y = a(x - 3)^{2} + 15\\). By \\(11 = a(1 - 3)^{2} + 15\\), \\(a = - 1\\Rightarrow y = - (x - 3)^{2} + 15\\).\n(f) The \\(x\\)-intercepts: \\(5\\) and \\(- 1\\). Let \\(y = a(x - 5)(x + 1)\\). By \\(- 9 = a(2 - 5)(2 + 1)\\), \\(a = 1\\Rightarrow y = (x - 5)(x + 1)\\)."
      },
      {
        id: "fg-a-p4",
        type: "Quadratic Function",
        question: "a) Sketch the quadratic function \\(y = x^{2} - 4x + 3\\).\nb) Sketch the quadratic function \\(y = - x^{2} - 8x + 20\\).\nc) Sketch the quadratic function \\(y = x^{2} - 2x + 4\\).\nd) Sketch the quadratic function \\(y = - x^{2} - 2x - 5\\).",
        answer: "(a) Vertex \\((2, - 1)\\), AOS \\(x = 2\\)\n(b) Vertex \\(( - 4,36)\\), AOS \\(x = - 4\\)\n(c) Vertex \\((1,3)\\), AOS \\(x = 1\\)\n(d) Vertex \\(( - 1, - 4)\\), AOS \\(x = - 1\\)\n(The four sketches are shown below.)",
        steps: "(a) \\(y = x^{2} - 4x + 3\\) (Vertex \\((2, - 1)\\), AOS \\(x = 2\\)) and (b) \\(y = - x^{2} - 8x + 20\\) (Vertex \\(( - 4,36)\\), AOS \\(x = - 4\\)):\n(c) \\(y = x^{2} - 2x + 4\\) (Vertex \\((1,3)\\), AOS \\(x = 1\\)) and (d) \\(y = - x^{2} - 2x - 5\\) (Vertex \\(( - 1, - 4)\\), AOS \\(x = - 1\\)):",
        stepsImages: [{ src: "images/fg-a-p4-sol-1.png", width: 298 }, { src: "images/fg-a-p4-sol-2.png", width: 298 }, { src: "images/fg-a-p4-sol-3.png", width: 298 }, { src: "images/fg-a-p4-sol-4.png", width: 298 }]
      },
      {
        id: "fg-a-ex1",
        type: "Quadratic Function",
        question: "The figure shows the graph of the quadratic function \\(y = f(x)\\). Find \\(f(x)\\).\nA. \\(f(x) = x^{2} - 5x + 4\\)\nB. \\(f(x) = x^{2} + 5x + 4\\)\nC. \\(f(x) = \\frac{1}{2}x^{2} - \\frac{5}{2}x + 2\\)\nD. \\(f(x) = \\frac{1}{2}x^{2} + \\frac{5}{2}x + 2\\)",
        images: [{ src: "images/fg-a-ex1.png", width: 163 }],
        answer: "C",
        steps: "Let the quadratic function be \\(y = a(x - 1)(x - 4)\\)\n\\(2 = a(0 - 1)(0 - 4)\\Rightarrow a = \\frac{1}{2}\\)\n\\(y = \\frac{1}{2}(x - 1)(x - 4) = \\frac{1}{2}x^{2} - \\frac{5}{2}x + 2\\) (C)"
      },
      {
        id: "fg-a-ex2",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = \\frac{- 1}{3}(x + 6)(x - a)\\) and the equation of the axis of symmetry of the graph is \\(x = \\frac{- 5}{2}\\). Find the \\(y\\)-intercept of the graph.\nA. \\(2\\) B. \\(\\frac{3}{2}\\) C. \\(1\\) D. \\(\\frac{1}{2}\\)",
        images: [{ src: "images/fg-a-ex2.png", width: 163 }],
        answer: "A",
        steps: "\\(\\frac{( - 6) + a}{2} = \\frac{- 5}{2}\\Rightarrow a = 1\\)\n\\(y = \\frac{- 1}{3}(x + 6)(x - 1) = - \\frac{1}{3}x^{2} - \\frac{5}{3}x + 2\\) (A)"
      },
      {
        id: "fg-a-ex3",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = - bx^{2} - cx + 1\\), where \\(b\\) and \\(c\\) are constants. Which of the following is true?\nA. \\(b > 0\\) and \\(c > 0\\) B. \\(b > 0\\) and \\(c < 0\\)\nC. \\(b < 0\\) and \\(c > 0\\) D. \\(b < 0\\) and \\(c < 0\\)",
        images: [{ src: "images/fg-a-ex3.png", width: 168 }],
        answer: "C",
        steps: "\\(- b > 0\\) which implies \\(b < 0\\).\nAOS: \\(\\frac{- ( - c)}{2( - b)} > 0\\) and \\(b < 0\\), implies that \\(c > 0\\). (C)"
      },
      {
        id: "fg-a-ex4",
        type: "Quadratic Function",
        question: "Refer to the graph of \\(y = (ax + 4)^{2} + b\\). Which of the following is true?\nA. \\(a < 0\\) and \\(b < 0\\) B. \\(a < 0\\) and \\(b > 0\\)\nC. \\(a > 0\\) and \\(b < 0\\) D. \\(a > 0\\) and \\(b > 0\\)",
        images: [{ src: "images/fg-a-ex4.png", width: 163 }],
        answer: "B",
        steps: "\\(\\therefore\\) The vertex of the graph of \\(y = (ax + 4)^{2} + b\\) is \\(\\left( - \\frac{4}{a},b \\right)\\).\nFrom the given graph, the \\(x\\)-coordinate of the vertex is positive: \\(\\therefore - \\frac{4}{a} > 0\\Rightarrow a < 0\\).\nFrom the given graph, the \\(y\\)-coordinate of the vertex is positive: \\(\\therefore b > 0\\). (B)"
      },
      {
        id: "fg-a-ex5",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = (ax - h)^{2} + k\\), where \\(a,h\\) and \\(k\\) are constants. Which of the following must be true?\nI. \\(ah < 0\\) II. \\(k < 0\\) III. \\(h^{2} = k\\)\nA. I only B. III only C. I and II only D. II and III only",
        images: [{ src: "images/fg-a-ex5.png", width: 163 }],
        answer: "C",
        steps: "The vertex of the graph of \\(y = (ax - h)^{2} + k\\) is \\(\\left( \\frac{h}{a},k \\right)\\).\nI: From the given graph, the \\(x\\)-coordinate of the vertex is negative \\(\\Rightarrow h\\) and \\(a\\) are in different signs (\u2713).\nII: From the given graph, the \\(y\\)-coordinate of the vertex is negative \\(\\Rightarrow k < 0\\) (\u2713).\nIII: \\(\\because\\) The graph passes through \\((0,0)\\Rightarrow \\lbrack a(0) - h\\rbrack^{2} + k = 0\\Rightarrow h^{2} = - k\\) (\\(\\times\\)). (C)"
      },
      {
        id: "fg-a-ex6",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = ax(b - x) - c\\), where \\(a,b\\) and \\(c\\) are constants. Which of the following are true?\nI. \\(a < 0\\) II. \\(c > 0\\) III. \\(b^{2} < \\frac{4c}{a}\\)\nA. I only. B. II only. C. I and III only. D. II and III only.",
        images: [{ src: "images/fg-a-ex6.png", width: 163 }],
        answer: "C",
        steps: "\\(y = - ax^{2} + abx - c\\). I: Open upwards \\(\\rightarrow - a > 0 \\rightarrow a < 0\\) (\u2713). II: \\(y\\)-intercept \\(\\rightarrow - c > 0 \\rightarrow c < 0\\) (\\(\\times\\)).\nIII: From the graph, there is no \\(x\\)-intercept, so \\(\\Delta < 0\\): \\((ab)^{2} - 4( - a)( - c) < 0\\Rightarrow a^{2}b^{2} - 4ac < 0\\Rightarrow a(ab^{2} - 4c) < 0\\). Since \\(a < 0\\), dividing both sides by \\(a\\) reverses the inequality: \\(ab^{2} - 4c > 0\\Rightarrow ab^{2} > 4c\\). Dividing both sides by \\(a < 0\\) reverses the inequality again: \\(b^{2} < \\frac{4c}{a}\\) (\u2713). (C)"
      },
      {
        id: "fg-a-ex7",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = ax^{2} + bx - 3b\\), where \\(a\\) and \\(b\\) are constants. Which of the following is/are true?\nI. \\(a > 0\\) II. \\(b < 0\\) III. \\(12a + b < 0\\)\nA. I only B. I and II only C. II and III only D. I, II and III",
        images: [{ src: "images/fg-a-ex7.png", width: 163 }],
        answer: "D",
        steps: "I: Open upwards (\u2713). II: For \\(y\\)-intercept, \\(- 3b > 0\\Rightarrow b < 0\\) (\u2713).\nIII: \\(b^{2} - 4a( - 3b) > 0\\Rightarrow b^{2} + 12ab > 0\\Rightarrow b(b + 12a) > 0\\Rightarrow 12a + b < 0\\) (\\(\\because b < 0\\)) (\u2713). (D)"
      },
      {
        id: "fg-a-ex8",
        type: "Quadratic Function",
        question: "If \\(0 < m < 16\\), which of the following may represent the graph of \\(y = (4 - mx)^{2} - m\\)?",
        images: [{ src: "images/fg-a-ex8.png", width: 422 }],
        answer: "C",
        steps: "Vertex \\(= \\left( \\frac{4}{m}, - m \\right) \\rightarrow x\\) is positive and \\(y\\) is negative (A or C).\n\\(y\\)-intercept \\(= 4^{2} - m = 16 - m > 0\\) (Ans: C)"
      },
      {
        id: "fg-a-ex9",
        type: "Quadratic Function",
        question: "Let \\(- 1 < a < 0\\). Which of the following can best represent the graph of \\(y = a(1 - ax)^{2} + a\\)?",
        images: [{ src: "images/fg-a-ex9.png", width: 422 }],
        answer: "A",
        steps: "Opens downwards \\(\\rightarrow\\) (A or B).\nVertex \\(= \\left( \\frac{1}{a},a \\right) \\rightarrow\\) A (A)"
      },
      {
        id: "fg-a-ex10",
        type: "Quadratic Function",
        question: "[WYK-2425-S4-Final-II-Q8]\nThe figure shows the graph of \\(y = (x - a)(x + 1) + b\\), where \\(a\\) and \\(b\\) are constants. Which of the following is true?\nA. \\(1 < a < b\\) B. \\(1 < b < a\\) C. \\(a < 1 < b\\) D. \\(b < 1 < a\\)",
        images: [{ src: "images/fg-a-ex10.png", width: 163 }],
        answer: "A",
        steps: "\\(y\\)-intercept \\(= - a + b > 0\\Rightarrow b > a\\). Axis of Symmetry \\(= \\frac{a - 1}{2} > 0\\Rightarrow a - 1 > 0\\Rightarrow a > 1\\therefore b > a > 1\\) (A)"
      },
      {
        id: "fg-a-ex11",
        type: "Quadratic Function",
        question: "[WYK-2526-S5-Final-II-Q12]\nLet \\(h\\) and \\(k\\) be real constants such that \\(hk < 0\\). Which of the following statements about the graph of \\(y = (x - h)(k - x)\\) are true?\nI. The graph opens downwards. II. The \\(y\\)-intercept of the graph is positive. III. The graph cuts the negative \\(x\\)-axis at two distinct points.\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "A",
        steps: "I: Coefficient of \\(x^{2} = - 1 < 0\\) (\u2713). II: \\(y\\)-intercept \\(= - hk > 0\\) (\u2713). III: \\(x\\)-intercepts \\(= h\\) and \\(k\\) (\\(\\times\\)). (A)"
      },
      {
        id: "fg-a-ex12",
        type: "Quadratic Function",
        question: "[WYK-2526-S6-Mock-II-Q23]\nLet \\(a > 0 > b > c\\), where \\(a,b,c\\) are constants. Which of the following statements about the graph of \\(y = ( - ax - b)^{2} - c\\) are true?\nI. The graph opens downwards. II. The axis of symmetry of the graph is on the right of the \\(y\\)-axis. III. The graph does not cut the \\(x\\)-axis.\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "C",
        steps: "I: (\\(\\times\\)). II: Vertex \\(\\left( - \\frac{b}{a}, - c \\right)\\). Note that \\(- \\frac{b}{a} > 0\\) (\u2713). III: Opens upwards with minimum value \\(= - c > 0\\) (\u2713). (C)"
      },
      {
        id: "fg-a-ex13",
        type: "Quadratic Function",
        question: "\\(f(x)\\) is a quadratic function. The vertex of the graph \\(y = f(x)\\) is \\((k,2k^{2} - 8)\\) and the \\(y\\)-intercept of the graph of \\(y = f(x)\\) is \\(- 8\\), where \\(k\\) is a non-zero constant. Which of the following about the function \\(f(x)\\) must be correct?\nI. The graph of the function \\(y = f(x)\\) opens upwards. II. The maximum value of \\(f(x)\\) is greater than \\(- 8\\). III. The graph of the function \\(y = f(x)\\) intersects the \\(x\\)-axis at two distinct points.\nA. I only B. I and III only C. II only D. II and III only",
        answer: "C",
        steps: "\\(f(x) = a(x - k)^{2} + 2k^{2} - 8\\Rightarrow - 8 = a(0 - k)^{2} + 2k^{2} - 8\\Rightarrow a = - 2\\Rightarrow f(x) = - 2(x - k)^{2} + 2k^{2} - 8\\).\nI: (\\(\\times\\)). II: Maximum value \\(= 2k^{2} - 8 > - 8\\) (\u2713). III: Opens downwards with maximum value that may be smaller than \\(0 \\rightarrow\\) no real roots (\\(\\times\\)). (C)"
      },
      {
        id: "fg-a-ex14",
        type: "Quadratic Function",
        question: "[Challenging]\nThe figure shows the graph of \\(y = ax^{2} + bx + c\\), where \\(a,b\\) and \\(c\\) are constants. If the graph passes through \\(( - 3, - 2)\\), which of the following is/are true?\nI. \\(abc < 0\\) II. \\(\\frac{b^{2}}{ac} > 4\\) III. \\(9a - 3b + c < 0\\)\nA. I only B. II only C. I and III only D. II and III only",
        images: [{ src: "images/fg-a-ex14.png", width: 163 }],
        answer: "C",
        steps: "I: Open upwards \\(\\rightarrow a > 0\\), \\(y\\)-intercept negative \\(\\rightarrow c < 0\\), Sign test on \\(b \\rightarrow b > 0\\therefore abc < 0\\) (\u2713).\nII: \\(b^{2} - 4ac > 0\\Rightarrow b^{2} > 4ac\\Rightarrow \\frac{b^{2}}{ac} < 4\\) (\\(\\because ac < 0\\)) (\\(\\times\\)).\nIII: Substitute \\(( - 3, - 2)\\): \\(- 2 = 9a - 3b + c\\therefore 9a - 3b + c < 0\\) (\u2713). (C)"
      },
      {
        id: "fg-a-ex15",
        type: "Quadratic Function",
        question: "[Challenging]\nThe figure shows the graph of \\(y = ax^{2} + bx + c\\), where \\(a,b\\) and \\(c\\) are constants. Which of the following is/are true?\nI. \\(2a + b > 0\\) II. \\(bc < ba\\) III. \\(a + b + c < 0\\)\nA. I and II only B. I and III only C. II and III only D. I, II and III.",
        images: [{ src: "images/fg-a-ex15.png", width: 163 }],
        answer: "D",
        steps: "I: AOS: \\(\\frac{- b}{2a} > 1\\Rightarrow - b < 2a\\) (\\(a\\) is negative) \\(\\Rightarrow 2a + b > 0\\) (\u2713).\nII: Product of roots \\(= \\frac{c}{a} > 1\\) (Since both roots \\(> 1\\)) \\(\\Rightarrow c < a\\Rightarrow bc < ba\\) (\\(b\\) is positive) (\u2713).\nIII: At \\(x = 1\\), \\(a(1)^{2} + b(1) + c < 0\\Rightarrow a + b + c < 0\\) (\u2713). (D)"
      },
      {
        id: "fg-a-ex16",
        type: "Quadratic Function",
        question: "[Challenging]\nThe figure shows the graph of \\(y = (x - m)^{2} - n^{2}\\). Which of the following must be true?\nI. \\(n > 0\\) II. \\(m > n\\) III. \\(m + n > 0\\)\nA. II only B. III only C. I and III only D. II and III only",
        images: [{ src: "images/fg-a-ex16.png", width: 163 }],
        answer: "D",
        steps: "Vertex \\(= (m, - n^{2})\\). I: \\(- n^{2} < 0\\Rightarrow n^{2} > 0\\); unable to determine the sign of \\(n\\) (\\(\\times\\)).\nII: For the \\(y\\)-intercept, \\(m^{2} - n^{2} > 0\\Rightarrow m^{2} > n^{2}\\). Note that \\(m > 0\\), so \\(m > n\\) (\u2713).\nIII: From II, \\(m > - n\\Rightarrow m + n > 0\\) (\u2713). (D)"
      },
      {
        id: "fg-a-ex17",
        type: "Quadratic Function",
        question: "[Challenging]\nLet \\(f(x) = hx^{2} + kx + m\\), where \\(h,k\\) and \\(m\\) are constants. The graph of \\(y = f(x)\\) cuts the \\(x\\)-axis at two points \\(A\\) and \\(B\\) such that \\(AB = 6\\) units, and it cuts the line \\(y = 16\\) at two points \\(C\\) and \\(D\\) such that \\(CD = 10\\) units. Find the value of \\(h\\).\nA. \\(1\\) B. \\(- 1\\) C. \\(2\\) D. \\(- 2\\)",
        answer: "A",
        steps: "Let \\(x = a\\) be the axis of symmetry. The \\(x\\)-intercepts: \\(a - \\frac{6}{2} = a - 3\\) and \\(a + \\frac{6}{2} = a + 3\\).\nLet \\(f(x) = h(x - a + 3)(x - a - 3)\\). Coordinates of \\(C\\): \\(\\left( a - \\frac{10}{2},16 \\right) = (a - 5,16)\\).\nPutting \\(C\\) into \\(f(x)\\): \\(16 = h(a - 5 - a + 3)(a - 5 - a - 3)\\Rightarrow h = 1\\) (A)"
      },
      // ---- B) MC Questions related to Functions ----
      {
        id: "fg-b-ex1",
        type: "MC Questions related to Functions",
        question: "[DSE-2019-II-Q8] Let \\(f(x) = x^{3} + cx^{2} + c\\). If \\(c\\) is a constant, then \\(f(c) + f( - c) =\\)\nA. \\(0\\) B. \\(2c\\) C. \\(2c^{3} + 2c\\) D. \\(- 2c^{3} + 2c\\)",
        answer: "C",
        steps: "\\(\\lbrack(c)^{3} + c(c)^{2} + c\\rbrack + \\lbrack( - c)^{3} + c(c)^{2} + c\\rbrack = 2c^{3} + 2c\\) (C)"
      },
      {
        id: "fg-b-ex2",
        type: "MC Questions related to Functions",
        question: "[DSE-2025-II-Q8] Let \\(f(x) = x^{2} + 7x + k\\) where \\(k\\) is a constant. If \\(f(4) + f( - 4) = 38\\), find \\(k\\).\nA. \\(- 6\\) B. \\(- 3\\) C. \\(3\\) D. \\(6\\)",
        answer: "C",
        steps: "\\(\\lbrack(4)^{2} + 7(4) + k\\rbrack + \\lbrack( - 4)^{2} + 7( - 4) + k\\rbrack = 2(4)^{2} + 2k = 38\\Rightarrow k = 3\\) (C)"
      },
      {
        id: "fg-b-ex3",
        type: "MC Questions related to Functions",
        question: "[DSE-2020-P2-Q5] Let \\(f(x) = 3x^{2} - x - 2\\). If \\(\\beta\\) is a constant, then \\(f(1 + \\beta) - f(1 - \\beta) =\\)\nA. \\(2\\beta\\) B. \\(10\\beta\\) C. \\(6\\beta^{2} - 2\\) D. \\(6\\beta^{2} - 2\\beta\\)",
        answer: "B",
        steps: "Method 1: \\(f(1 + \\beta) = 3\\beta^{2} + 5\\beta,f(1 - \\beta) = 3\\beta^{2} - 5\\beta \\Rightarrow (3\\beta^{2} + 5\\beta) - (3\\beta^{2} - 5\\beta) = 10\\beta\\).\nMethod 2: Sub \\(\\beta = 10\\), \\(f(1 + \\beta) - f(1 - \\beta) = f(11) - f( - 9) = 100\\) (Option A: \\(20\\), Option B: 100, Option C: \\(598\\), Option D: \\(580\\)). (B)"
      },
      {
        id: "fg-b-ex4",
        type: "MC Questions related to Functions",
        question: "If \\(f(x + 1) = - 3x^{2} + 2x\\), then \\(f(x - 1) =\\)\nA. \\(- 3x^{2} + 2x\\) B. \\(- 3x^{2} + 8x - 5\\) C. \\(- 3x^{2} + 14x - 16\\) D. \\(- 3x^{2} - 4x - 1\\)",
        answer: "C",
        steps: "Let \\(u = x + 1,x = u - 1\\): \\(f(u) = - 3(u - 1)^{2} + 2(u - 1) = - 3u^{2} + 8u - 5\\Rightarrow f(x - 1) = - 3(x - 1)^{2} + 8(x - 1) - 5 = - 3x^{2} + 14x - 16\\) (C)\nAlternative 1: Note \\(x - 1 = (x + 1) - 2\\Rightarrow f(x - 1) = - 3(x - 2)^{2} + 2(x - 2) = - 3x^{2} + 14x - 16\\).\nAlternative 2: Sub \\(x = - 2\\Rightarrow f( - 1) = - 16\\). Sub \\(x = 0\\) into options: Option A: \\(0\\), Option B: \\(- 5\\), Option C: \\(- 16\\), Option D: \\(- 1\\)."
      },
      {
        id: "fg-b-ex5",
        type: "MC Questions related to Functions",
        question: "[2526-WYK-S5-Final-P2-Q7] If \\(f(x) = 2x^{2} - 3x + 4\\), if \\(m\\) is a constant, then \\(f(m + 2) - f(m - 1) =\\)\nA. \\(- 2m - 15\\) B. \\(- 2m + 15\\) C. \\(12m - 3\\) D. \\(12m + 3\\)",
        answer: "C",
        steps: "Method 1: \\(f(m + 2) = 2m^{2} + 5m + 6,f(m - 1) = 2m^{2} - 7m + 9\\Rightarrow (2m^{2} + 5m + 6) - (2m^{2} - 7m + 9) = 12m - 3\\).\nMethod 2: Sub \\(m = 0\\), \\(f(2) - f( - 1) = - 3\\). Only option C matches. (C)"
      },
      {
        id: "fg-b-ex6",
        type: "MC Questions related to Functions",
        question: "If \\(f(3x + 1) = 6x + 5\\), find \\(f(7)\\).\nA. \\(7\\) B. \\(17\\) C. \\(47\\) D. \\(137\\)",
        answer: "B",
        steps: "Sub \\(x = 2,f(7) = 6(2) + 5 = 17\\). (B)"
      },
      {
        id: "fg-b-ex7",
        type: "MC Questions related to Functions",
        question: "Let \\(f(x) = ax^{7} + bx^{5} + cx - 11\\), where \\(a,b\\) and \\(c\\) are constants. If \\(f( - 4) = 28\\), find \\(f(4)\\).\nA. \\(- 50\\) B. \\(- 28\\) C. \\(28\\) D. \\(50\\)",
        answer: "A",
        steps: "\\(a( - 4)^{7} + b( - 4)^{5} + c( - 4) - 11 = 28\\Rightarrow a(4)^{7} + b(4)^{5} + c(4) = - 39\\Rightarrow f(4) = - 39 - 11 =\\) \\(- 50\\) (A)"
      },
      {
        id: "fg-b-ex8",
        type: "MC Questions related to Functions",
        question: "[Challenging] Let \\(f(x)\\) be a function such that \\(f(x + y) = f(x)f(y)\\) for all real numbers \\(x\\) and \\(y\\). If \\(f(1) = 3\\), find the value of \\(f(4)\\).\nA. \\(12\\) B. \\(27\\) C. \\(81\\) D. \\(243\\)",
        answer: "C",
        steps: "\\(f(2) = f(1 + 1) = f(1)f(1) = 3 \\times 3 = 9\\); \\(f(4) = f(2 + 2) = f(2)f(2) = 9 \\times 9 = 81\\) (C)"
      },
      {
        id: "fg-b-ex9",
        type: "MC Questions related to Functions",
        question: "[2024-DSE-II-Q8] Let \\(g(x) = (x + 1)(x + a)\\), where \\(a\\) is a constant. If \\(g(1) = g(2)\\), then \\(g(a) =\\)\nA. \\(- 4\\) B. \\(0\\) C. \\(12\\) D. \\(24\\)",
        answer: "D",
        steps: "Since it is a quadratic function, the axis of symmetry: \\(x = 1.5\\). \\(\\frac{- 1 - a}{2} = 1.5 \\rightarrow a = - 4\\). \\(g(a) = ( - 4 + 1)( - 4 - 4) = 24\\) (D)"
      },
      {
        id: "fg-b-ex10",
        type: "MC Questions related to Functions",
        question: "[2022-DSE-II-Q8] Let \\(f(x) = x^{2} - x + 1\\). If \\(k\\) is a constant, which of the following must be true?\nA. \\(f(k) = f( - k)\\) B. \\(f(k) = f(1 - k)\\) C. \\(f(k + 1) = f(k) + f(1)\\) D. \\(f(k - 1) = f(k) - f(1)\\)",
        answer: "B",
        steps: "Axis of symmetry: \\(x = \\frac{1}{2}\\). Option B has an axis of symmetry of \\(x = \\frac{k + (1 - k)}{2} = \\frac{1}{2}\\). (B)"
      },
      {
        id: "fg-b-ex11",
        type: "MC Questions related to Functions",
        question: "[2425-WYK-S4-Final-II-Q7] Let \\(f(x) = x^{2} - 2mx\\). \\(f(m + 1) - f(m - 1) =\\)\nA. \\(0\\) B. \\(4m\\) C. \\(8m\\) D. \\(- 8m\\)",
        answer: "A",
        steps: "Note that the function is symmetric about \\(x = m\\). At the same time, \\(f(m + 1) = f(m - 1)\\) since the mid-point of \\(m + 1\\) and \\(m - 1\\) is \\(m\\). (A)"
      },
      {
        id: "fg-b-ex12",
        type: "MC Questions related to Functions",
        question: "Let \\(g(x) = 2x^{2} - 1\\). If \\(h\\) and \\(k\\) are constants, which of the following must be true?\nI. \\(g(h) = g( - h)\\) II. \\(g(1 - k) = g(k - 1)\\) III. \\(g(h + k) = g(h) + g(k) + 1\\)\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "A",
        steps: "Axis of symmetry: \\(x = 0\\). I has AOS \\(x = \\frac{h + ( - h)}{2} = 0\\), II has AOS \\(x = \\frac{1 - k + (k - 1)}{2} = 0\\). Statement III: \\(g(h + k) = 2h^{2} + 4hk + 2k^{2} - 1 \\neq g(h) + g(k) + 1\\). (A)"
      },
      {
        id: "fg-b-ex13",
        type: "MC Questions related to Functions",
        question: "Let \\(f(x) = 3x^{2} - bx + 4\\), where \\(b\\) is a constant. If \\(f(x) = f(2 - x)\\), then \\(b =\\)\nA. \\(- 6\\) B. \\(2\\) C. \\(6\\) D. \\(16\\)",
        answer: "C",
        steps: "Axis of symmetry: \\(x = \\frac{x + 2 - x}{2} = 1\\Rightarrow \\frac{b}{2(3)} = 1 \\rightarrow b = 6\\) (C)"
      },
      // ---- C) Applications of Completing Square ----
      {
        id: "fg-c-ex1",
        type: "Applications of Completing Square",
        question: "[Level 1]\nA wire of length \\(72\\ cm\\) is cut into two pieces. One piece is bent to form a rectangle with area \\(A{\\ cm}^{2}\\). The other piece of length \\(x\\ cm\\) is used to divide the rectangle into two rectangular parts as shown in the figure.\n(a) Express \\(A\\) in terms of \\(x\\).\n(b) Find the maximum area of the rectangle and the corresponding value of \\(x\\).",
        images: [{ src: "images/fg-c-ex1.png", width: 115 }],
        answer: "(a) \\(A = 36x - \\frac{3}{2}x^{2}\\)\n(b) Maximum area \\(= 216{\\ cm}^{2}\\), when \\(x = 12\\)",
        steps: "(a) \\(A = x\\left( \\frac{72 - 3x}{2} \\right) =\\) \\(36x - \\frac{3}{2}x^{2}\\)\n(b) \\(A = 36x - \\frac{3}{2}x^{2} = - \\frac{3}{2}(x^{2} - 24x + 12^{2} - 12^{2}) = - \\frac{3}{2}(x - 12)^{2} + 216\\). \\(\\therefore\\) The maximum area of the rectangle is \\(216{\\ cm}^{2}\\) and the corresponding value of \\(x\\) is \\(12\\)."
      },
      {
        id: "fg-c-ex2",
        type: "Applications of Completing Square",
        question: "[Level 1]\nThe figure shows a square \\(ABCD\\) of side \\(40\\ cm\\). \\(E\\) and \\(F\\) are points lying on \\(AB\\) and \\(AD\\) respectively. Let \\(AE = \\sqrt{x}\\ cm\\) and \\(AF = \\sqrt{900 - x}\\ cm\\).\n(a) Find the maximum/minimum area of \\(\\bigtriangleup AEF\\).\n(b) Will the area of the pentagon \\(BCDFE\\) be less than \\(1300{\\ cm}^{2}\\)? Explain your answer.",
        images: [{ src: "images/fg-c-ex2.png", width: 139 }],
        answer: "(a) Maximum area of \\(\\bigtriangleup AEF = 225{\\ cm}^{2}\\)\n(b) No. The minimum area of the pentagon \\(BCDFE = 1375{\\ cm}^{2} > 1300{\\ cm}^{2}\\).",
        steps: "(a) Area of \\(\\bigtriangleup AEF = \\frac{\\sqrt{x}\\sqrt{900 - x}}{2} = \\frac{\\sqrt{900x - x^{2}}}{2} = \\frac{\\sqrt{- (x - 450)^{2} + 202500}}{2}\\). When \\(x = 450\\), maximum area of \\(\\bigtriangleup AEF = \\frac{\\sqrt{202500}}{2} = 225{\\ cm}^{2}\\).\n(b) Minimum area of the pentagon \\(BCDFE = 40 \\times 40 - 225 = 1375{\\ cm}^{2} > 1300{\\ cm}^{2}\\). \\(\\therefore\\) The area of the pentagon \\(BCDFE\\) will not be less than \\(1300{\\ cm}^{2}\\)."
      },
      {
        id: "fg-c-ex3",
        type: "Applications of Completing Square",
        question: "[Level 1]\nThe graph of a quadratic function \\(y = f(x)\\) cuts the \\(x\\)-axis at \\(A(1,0)\\) and \\(B\\). It is given that \\(x = 4\\) is the axis of symmetry of the graph.\n(a) Find the coordinates of \\(B\\).\n(b) If the \\(y\\)-intercept of the graph is \\(- 7\\), find \\(f(x)\\).\n(c) Find the coordinates of the vertex of the graph.",
        answer: "(a) \\(B = (7,0)\\)\n(b) \\(f(x) = - (x - 1)(x - 7)\\)\n(c) Vertex \\(= (4,9)\\)",
        steps: "(a) Let \\((b,0)\\) be the coordinates of \\(B\\). \\(\\frac{1 + b}{2} = 4\\Rightarrow b = 7\\therefore\\) The coordinates of \\(B\\) are \\((7,0)\\).\n(b) Let \\(f(x) = a(x - 1)(x - 7)\\). \\(a(0 - 1)(0 - 7) = - 7\\Rightarrow a = - 1\\Rightarrow f(x) = - (x - 1)(x - 7)\\).\n(c) \\(f(4) = - 4^{2} + 8(4) - 7 = 9\\therefore\\) The coordinates of the vertex of the graph are \\((4,9)\\)."
      },
      {
        id: "fg-c-ex4",
        type: "Applications of Completing Square",
        question: "[Level 1]\nIt is given that the graph of \\(y = g(x) = 2x^{2} + 10x + b\\) cuts the \\(x\\)-axis at two points \\(A(\\alpha,0)\\) and \\(B(\\beta,0)\\). It satisfies \\(\\frac{3}{\\alpha} + \\frac{3}{\\beta} = 10\\).\n(a) Find the value of \\(b\\).\n(b) Let \\(V\\) be the vertex of the graph of \\(y = g(x)\\). Using the method of completing square, find the coordinates of \\(V\\).",
        answer: "(a) \\(b = - 3\\)\n(b) \\(V\\left( \\frac{- 5}{2},\\frac{- 31}{2} \\right)\\)",
        steps: "(a) \\(\\alpha + \\beta = - 5,\\alpha\\beta = \\frac{b}{2}\\). \\(\\frac{3(\\alpha + \\beta)}{\\alpha\\beta} = 10\\Rightarrow \\frac{3( - 5)}{\\frac{b}{2}} = 10\\Rightarrow b = - 3\\).\n(b) \\(y = 2x^{2} + 10x - 3 = 2\\left\\lbrack x^{2} + 5x + \\left( \\frac{5}{2} \\right)^{2} - \\left( \\frac{5}{2} \\right)^{2} \\right\\rbrack - 3 = 2\\left( x + \\frac{5}{2} \\right)^{2} - \\frac{31}{2}\\). The vertex: \\(V\\left( \\frac{- 5}{2},\\frac{- 31}{2} \\right)\\)."
      },
      {
        id: "fg-c-ex5",
        type: "Applications of Completing Square",
        question: "[Level 2]\nThe vertex of the parabola \\(y = f(x)\\) is \\(V\\left( 3,\\frac{96}{7} \\right)\\) and \\(y = f(x)\\) cuts \\(y\\)-axis at \\(A(0,6)\\). The parabola cuts the \\(x\\)-axis at two points \\(B(\\alpha,0)\\) and \\(C(\\beta,0)\\), where \\(\\alpha < \\beta\\).\n(a) Find \\(f(x)\\).\n(b) Find the area of \\(\\bigtriangleup VAC\\).",
        answer: "(a) \\(f(x) = - \\frac{6}{7}(x - 3)^{2} + \\frac{96}{7}\\)\n(b) Area of \\(\\bigtriangleup VAC = 36\\)",
        steps: "(a) \\(f(x) = a(x - 3)^{2} + \\frac{96}{7}\\). Put \\(A(0,6)\\): \\(6 = a(0 - 3)^{2} + \\frac{96}{7}\\Rightarrow - \\frac{54}{7} = 9a\\Rightarrow a = - \\frac{6}{7}\\Rightarrow f(x) = - \\frac{6}{7}(x - 3)^{2} + \\frac{96}{7}\\).\n(b) \\(0 = - \\frac{6}{7}(x - 3)^{2} + \\frac{96}{7}\\Rightarrow (x - 3)^{2} = 16\\Rightarrow x = 7\\) or \\(x = - 1\\Rightarrow C(7,0)\\). Area of \\(\\bigtriangleup VAC = Area\\ of\\ OVAC - Area\\ of\\ \\bigtriangleup OAC = \\left\\{ \\frac{1}{2}\\left( 6 + \\frac{96}{7} \\right)(3) + \\frac{1}{2}(7 - 3)\\left( \\frac{96}{7} \\right) \\right\\} - \\frac{1}{2}(6)(7) = \\frac{207}{7} + \\frac{192}{7} - 21 = 36\\)."
      },
      {
        id: "fg-c-ex6",
        type: "Applications of Completing Square",
        question: "[Level 2] [2526-WYK-S4-Final-I-Q14]\nLet \\(f(x) = 4x^{2} - 8kx + 6k^{2} + 3\\), where \\(k\\) is a non-zero real constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(b) Suppose that the coordinates of \\(Q\\) is \\(( - k, - 10k^{2} - 15)\\), and \\(M\\) is a point lying on \\(PQ\\) such that the area of \\(\\bigtriangleup OMP\\) is half of the area of \\(\\bigtriangleup OMQ\\), where \\(O\\) is the origin. Express the coordinates of \\(M\\) in terms of \\(k\\).",
        answer: "(a) \\(P = (k,2k^{2} + 3)\\)\n(b) \\(M = \\left( \\frac{k}{3}, - 2k^{2} - 3 \\right)\\)",
        steps: "(a) \\(y = 4(x^{2} - 2kx + k^{2} - k^{2}) + 6k^{2} + 3 = 4(x - k)^{2} + 2k^{2} + 3\\). The coordinates of \\(P\\) are \\((k,2k^{2} + 3)\\).\n(b) \\(\\frac{Area\\ of\\ \\bigtriangleup OMP}{Area\\ of\\ \\bigtriangleup OMQ} = \\frac{MP}{MQ} = \\frac{1}{2}\\Rightarrow M = \\left( \\frac{2(k) + 1( - k)}{1 + 2},\\frac{2(2k^{2} + 3) + 1( - 10k^{2} - 15)}{1 + 2} \\right) = \\left( \\frac{k}{3}, - 2k^{2} - 3 \\right)\\)."
      },
      {
        id: "fg-c-ex7",
        type: "Applications of Completing Square",
        question: "[Level 2] [2022-DSE-I-Q16]\nLet \\(g(x) = 3x^{2} + 12kx + 16k^{2} + 8\\), where \\(k\\) is a non-zero real constant.\n(a) Using the method of completing the square, express the coordinates of the vertex of the graph of \\(y = g(x)\\) in terms of \\(k\\).\n(b) On the same rectangular coordinate system, denote the vertex of the graph of \\(y = g(x)\\) and the vertex of the graph of \\(y = 2g( - x)\\) by \\(A\\) and \\(B\\) respectively. Let \\(M\\) be a point lying on \\(AB\\) such that the area of \\(\\bigtriangleup OBM\\) is the triple of the area of \\(\\bigtriangleup OAM\\), where \\(O\\) is the origin. Express the coordinates of \\(M\\) in terms of \\(k\\).",
        answer: "(a) \\(( - 2k,4k^{2} + 8)\\)\n(b) \\(M = ( - k,5k^{2} + 10)\\)",
        steps: "(a) \\(g(x) = 3(x^{2} + 4kx + 4k^{2}) + 4k^{2} + 8 = 3(x + 2k)^{2} + 4k^{2} + 8\\). The coordinates of \\(A\\) are \\(( - 2k,4k^{2} + 8)\\).\n(b) The coordinates of \\(B\\) are \\((2k,8k^{2} + 16)\\). Note that \\(AM:MB = 1:3\\Rightarrow M = \\left( \\frac{3( - 2k) + (2k)}{1 + 3},\\frac{3(4k^{2} + 8) + (8k^{2} + 16)}{1 + 3} \\right) = ( - k,5k^{2} + 10)\\)."
      },
      {
        id: "fg-c-ex8",
        type: "Applications of Completing Square",
        question: "[Level 2]\nThe coordinates of the vertex \\(P\\) of the graph of the quadratic function \\(y = f(x)\\) are \\((p,16)\\). The graph cuts the \\(x\\)-axis at the origin \\(O\\) and \\(Q(8,0)\\). The points \\(A\\) and \\(B\\) are two distinct points lying on the graph, and their \\(y\\)-coordinates are both \\(7\\).\n(a) Find the value of \\(p\\). (b) Find \\(f(x)\\). (c) Find the distance between \\(A\\) and \\(B\\).\n(d) (i) Find the area of \\(\\bigtriangleup APB\\). (ii) If \\(C(c,0)\\) and \\(D(d,0)\\) are two points lying on the \\(x\\)-axis, where \\(d - c = 4\\), find the area of the pentagon \\(APBDC\\).",
        answer: "(a) \\(p = 4\\)\n(b) \\(f(x) = - (x - 4)^{2} + 16\\)\n(c) \\(6\\)\n(d)(i) \\(27\\)\n(d)(ii) \\(62\\)",
        steps: "(a) \\(p = \\frac{0 + 8}{2} = 4\\)\n(b) \\(f(x) = a(x - 4)^{2} + 16\\). Put \\((0,0)\\): \\(0 = 16a + 16\\Rightarrow a = - 1\\therefore\\) \\(f(x) = - (x - 4)^{2} + 16\\)\n(c) When \\(y = 7\\), \\(7 = - (x - 4)^{2} + 16\\Rightarrow (x - 4)^{2} = 9\\Rightarrow x = 1\\) or \\(x = 7\\therefore\\) Distance between \\(A\\) and \\(B = 7 - 1 =\\) \\(6\\)\n(d) (i) Area of \\(\\bigtriangleup APB = \\frac{6(16 - 7)}{2} =\\) \\(27\\). (ii) Area of trapezium \\(ABDC = \\frac{(6 + 4)(7)}{2} = 35\\therefore\\) Area of pentagon \\(APBDC = 27 + 35 =\\) \\(62\\)."
      },
      {
        id: "fg-c-ex9",
        type: "Applications of Completing Square",
        question: "[Level 2] [2526-WYK-S4-Midyear-I-Q10]\nLet \\(p(x) = x^{2} - 6x + k + 15\\), where \\(k\\) is a constant. Denote the vertex of the graph of \\(y = p(x)\\) by \\(V\\).\n(a) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(b) Let \\(U\\) be the vertex of the graph of \\(y = - p(x - k)\\). (i) Write down the coordinates of \\(U\\) in terms of \\(k\\). (ii) The coordinates of the point \\(W\\) are \\((2,0)\\). Is it possible that \\(\\angle UWV\\) is a right angle? Explain your answer.",
        answer: "(a) \\(V = (3,k + 6)\\)\n(b)(i) \\(U = (k + 3, - k - 6)\\)\n(b)(ii) No. \\(\\angle UWV\\) cannot be a right angle.",
        steps: "(a) \\(p(x) = (x^{2} - 6x + 3^{2}) - 3^{2} + k + 15 = (x - 3)^{2} + k + 6\\). The coordinates of \\(V\\) are \\((3,k + 6)\\).\n(b) (i) The coordinates of \\(U\\) are \\((k + 3, - k - 6)\\).\n(ii) Slope of \\(WU \\times\\) Slope of \\(WV = - 1\\Rightarrow \\frac{- k - 6 - 0}{k + 3 - 2} \\times \\frac{k + 6 - 0}{3 - 2} = - 1\\Rightarrow (k + 6)^{2} = k + 1\\Rightarrow k^{2} + 11k + 35 = 0\\). \\(\\Delta = 11^{2} - 4(1)(35) = - 19 < 0\\). When \\(k = - 1\\), \\(WU\\) is vertical while \\(WV\\) is not horizontal. \\(\\therefore\\angle UWV\\) cannot be a right angle."
      },
      {
        id: "fg-c-ex10",
        type: "Applications of Completing Square",
        question: "[Level 3]\nLet \\(f(x) = 3x^{2} - kx - 4x + k\\), where \\(k\\) is a positive constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(V\\).\n(a) Prove that the graph of \\(y = f(x)\\) cuts the \\(x\\)-axis at two distinct points.\n(b) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(c) It is given that \\(R(r,8)\\) and \\(S(s,8)\\) are two points lying on the graph of \\(y = f(x)\\). (i) Show that \\(9(r - s)^{2} = k^{2} - 4k + 112\\). (ii) If the distance between \\(V\\) and the line segment \\(RS\\) is \\(12\\), find the equation of the axis of symmetry of the graph of \\(y = f(x)\\).",
        answer: "(a) \\(\\Delta = (k - 2)^{2} + 12 \\geq 12 > 0\\), so the graph cuts the \\(x\\)-axis at two distinct points.\n(b) \\(V\\left( \\frac{k + 4}{6},\\frac{- k^{2} + 4k - 16}{12} \\right)\\)\n(c)(i) \\(9(r - s)^{2} = k^{2} - 4k + 112\\) (shown)\n(c)(ii) The axis of symmetry is \\(x = 2\\).",
        steps: "(a) \\(\\Delta = ( - (k + 4))^{2} - 4(3)(k) = k^{2} - 4k + 16 = (k - 2)^{2} + 12 \\geq 12 > 0\\). \\(y = f(x)\\) cuts the \\(x\\)-axis at two distinct points.\n(b) \\(f(x) = 3\\left( x - \\frac{k + 4}{6} \\right)^{2} + \\frac{- k^{2} + 4k - 16}{12}\\). Coordinates of \\(V\\): \\(\\left( \\frac{k + 4}{6},\\frac{- k^{2} + 4k - 16}{12} \\right)\\).\n(c) (i) \\(r,s\\) are roots of \\(3x^{2} - (k + 4)x + (k - 8) = 0\\). \\(9(r - s)^{2} = 9\\lbrack(r + s)^{2} - 4rs\\rbrack = 9\\left\\lbrack \\left( \\frac{k + 4}{3} \\right)^{2} - 4\\left( \\frac{k - 8}{3} \\right) \\right\\rbrack = k^{2} - 4k + 112\\).\n(ii) \\(8 - \\frac{- k^{2} + 4k - 16}{12} = 12\\Rightarrow k^{2} - 4k - 32 = 0\\Rightarrow k = 8\\) or \\(k = - 4\\) (rej.). AOS: \\(x = \\frac{k + 4}{6}\\), i.e. \\(x = 2\\)."
      },
      {
        id: "fg-c-ex11",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Centroid]\nLet \\(f(x) = 2x^{2} + 8kx + 8k^{2} + 2k - 1\\), where \\(k > 1\\). Denote the coordinates of the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(b) In a rectangular coordinate system, the point \\(Q\\) is formed by reflecting \\(P\\) in the \\(y\\)-axis and then translating upward by \\(k\\) units. Denote the origin by \\(O\\). (i) Write down the coordinates of \\(Q\\). (ii) It is given that the \\(y\\)-coordinate of the centroid of \\(\\bigtriangleup OPQ\\) is \\(6\\). Find the area of \\(\\bigtriangleup OPQ\\).",
        answer: "(a) \\(P = ( - 2k,2k - 1)\\)\n(b)(i) \\(Q = (2k,3k - 1)\\)\n(b)(ii) Area of \\(\\bigtriangleup OPQ = 72\\)",
        steps: "(a) \\(f(x) = 2(x^{2} + 4kx + 4k^{2} - 4k^{2}) + 8k^{2} + 2k - 1 = 2(x + 2k)^{2} + 2k - 1\\). Coordinates of \\(P\\): \\(( - 2k,2k - 1)\\).\n(b) (i) Coordinates of \\(Q\\): \\((2k,3k - 1)\\). (ii) \\(\\frac{0 + (2k - 1) + (3k - 1)}{3} = 6\\Rightarrow 5k = 20\\Rightarrow k = 4\\).\n\\(P( - 8,7),Q(8,11)\\), centroid \\(G(0,6)\\). \\(PQ\\) cuts \\(y\\)-axis at \\(T(0,9)\\). Area of \\(\\bigtriangleup OPQ = \\frac{1}{2}(9 - 0)\\lbrack 8 - ( - 8)\\rbrack = 72\\).\nAlternative: Area of \\(\\bigtriangleup OGP = \\frac{1}{2}(6)(8) = 24\\Rightarrow \\) Area of \\(\\bigtriangleup OPQ = 24 \\times \\frac{2 + 1}{2} \\times 2 = 72\\)."
      },
      {
        id: "fg-c-ex12",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Circumcenter] [2020-DSE-I-Q17]\nLet \\(g(x) = x^{2} - 2kx + 2k^{2} + 4\\), where \\(k\\) is a real constant.\n(a) Using the method of completing the square, express the coordinates of the vertex of the graph of \\(y = g(x)\\) in terms of \\(k\\).\n(b) On the same rectangular coordinate system, let \\(D\\) and \\(E\\) be the vertex of the graph of \\(y = g(x + 2)\\) and the vertex of the graph of \\(y = - g(x - 2)\\) respectively. Is there a point \\(F\\) on this rectangular coordinate system such that the coordinates of the circumcenter of \\(\\bigtriangleup DEF\\) are \\((0,3)\\)? Explain your answer.",
        answer: "(a) \\((k,k^{2} + 4)\\)\n(b) No. There is no such point \\(F\\).",
        steps: "(a) \\(g(x) = (x - k)^{2} + k^{2} + 4\\). Coordinates of vertex: \\((k,k^{2} + 4)\\).\n(b) \\(D(k - 2,k^{2} + 4)\\) and \\(E(k + 2, - k^{2} - 4)\\). Let \\(C(0,3)\\): \\(CD^{2} = ((k - 2) - 0)^{2} + ((k^{2} + 4) - 3)^{2} = k^{4} + 3k^{2} - 4k + 5\\), \\(CE^{2} = (k + 2)^{2} + ( - k^{2} - 7)^{2} = k^{4} + 15k^{2} + 4k + 53\\).\n\\(CD^{2} = CE^{2}\\Rightarrow 3k^{2} + 2k + 12 = 0\\), \\(\\Delta = 2^{2} - 4(3)(12) = - 140 < 0\\). No real root for \\(k\\), so there is no such point \\(F\\)."
      },
      {
        id: "fg-c-ex13",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Orthocenter + Centroid] [2526-WYK-S5-Midyear-I-Q19]\nLet \\(f(x) = - \\frac{1}{2}x^{2} + 10kx - 51k^{2}\\), where \\(k\\) is a positive real constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Does the graph of \\(y = f(x)\\) cuts the \\(x\\)-axis? Explain your answer.\n(b) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(c) \\(P\\) is translated upwards to the point \\(Q\\). Denote the origin by \\(O\\). It is given that the orthocentre of \\(\\bigtriangleup OPQ\\) is \\(O\\) and the centroid of \\(\\bigtriangleup OPQ\\) lies on the \\(x\\)-axis. (i) Find the coordinates of \\(Q\\). (ii) The coordinates of the points \\(R\\) and \\(S\\) are \\((t,2t)\\) and \\((t - 100,t - 30)\\) respectively, where \\(t\\) is a real number. Is it possible that \\(OQRS\\) is a parallelogram? Explain your answer.",
        answer: "(a) No. \\(\\Delta = - 2k^{2} < 0\\), so the graph does not cut the \\(x\\)-axis.\n(b) \\(P = (10k, - k^{2})\\)\n(c)(i) \\(Q = (100,100)\\)\n(c)(ii) Yes, it is possible that \\(OQRS\\) is a parallelogram (when \\(t = 70\\)).",
        steps: "(a) \\(\\Delta = (10k)^{2} - 4\\left( - \\frac{1}{2} \\right)( - 51k^{2}) = - 2k^{2} < 0\\). The graph of \\(y = f(x)\\) does not cut the \\(x\\)-axis.\n(b) \\(f(x) = - \\frac{1}{2}(x - 10k)^{2} - k^{2}\\). Coordinates of \\(P\\): \\((10k, - k^{2})\\).\n(c) (i) Centroid on \\(x\\)-axis \\(\\Rightarrow Q(10k,k^{2})\\). Orthocentre is \\(O\\Rightarrow OP\\bot OQ\\Rightarrow \\frac{- k^{2}}{10k} \\times \\frac{k^{2}}{10k} = - 1\\Rightarrow k = 10\\Rightarrow Q(100,100)\\).\n(ii) Slope of \\(OQ = 1\\), Slope of \\(SR = \\frac{t + 30}{100} = 1\\Rightarrow t = 70\\). When \\(t = 70\\), \\(SR = \\sqrt{100^{2} + 100^{2}} = \\sqrt{20000} = OQ\\) and \\(OQ \\parallel SR\\therefore\\) It is possible that \\(OQRS\\) is a parallelogram."
      },
      {
        id: "fg-c-ex14",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Circumcenter]\nLet \\(g(x) = \\frac{1}{k}x^{2} - 2x + 3k - 1\\), where \\(k\\) is a positive integer. Denote the vertex of \\(y = g(x)\\) be \\(V\\). It is given that the coordinates of \\(R\\) are \\(( - 2,2)\\).\n(a) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(b) \\(V\\) is first translated to the left \\(2\\) units and then reflected about the \\(x\\)-axis to \\(P\\). The coordinates of \\(Q\\) are \\((8 - k,2k - 1)\\). It is given that the coordinates of the circumcentre of \\(\\bigtriangleup PQR\\) are \\((3,0)\\). (i) Find \\(k\\). (ii) Show that \\(\\bigtriangleup PQR\\) is a right-angled triangle. Hence, find the area of \\(\\bigtriangleup PQR\\).",
        answer: "(a) \\(V = (k,2k - 1)\\)\n(b)(i) \\(k = 3\\)\n(b)(ii) \\(\\bigtriangleup PQR\\) is right-angled at \\(R\\). Area of \\(\\bigtriangleup PQR = 29\\).",
        steps: "(a) \\(g(x) = \\frac{1}{k}(x - k)^{2} + 2k - 1\\Rightarrow V(k,2k - 1)\\).\n(b) (i) \\(P(k - 2,1 - 2k),Q(8 - k,2k - 1),R( - 2,2)\\). Let \\(S(3,0)\\): \\(PS = RS\\Rightarrow \\sqrt{(k - 5)^{2} + (1 - 2k)^{2}} = \\sqrt{( - 2 - 3)^{2} + (2 - 0)^{2}}\\Rightarrow 5k^{2} - 14k - 3 = 0\\Rightarrow k = 3\\) or \\(k = \\frac{1}{5}\\) (rej.).\n(ii) \\(P(1, - 5),Q(5,5)\\). Mid-point of \\(PQ = (3,0) = S\\) (circumcentre), so \\(\\bigtriangleup PQR\\) is right-angled at \\(R\\) (\\(PR\\bot QR\\)). Area of \\(\\bigtriangleup PQR = \\frac{1}{2}\\sqrt{7^{2} + 3^{2}} \\times \\sqrt{3^{2} + ( - 7)^{2}} = 29\\).\nAlternative: Slope of \\(PR \\times\\) Slope of \\(QR = \\frac{- 7}{3} \\times \\frac{3}{7} = - 1\\therefore PR\\bot QR\\)."
      },
      {
        id: "fg-c-ex15",
        type: "Centers of Triangle",
        question: "[Level 3 \u2013 Orthocenter + Circumcenter]\nLet \\(f(x) = 2x^{2} + 4(k - 4)x + 8k - 37\\) for real constants \\(k\\). Denote the point \\(( - 2,3)\\) by \\(P\\). \\(Q\\) is the vertex of the graph of \\(y = f(x)\\).\n(a) Prove that the graph of \\(y = f(x)\\) always passes through \\(P\\).\n(b) Using the method of completing the square, express the coordinates of \\(Q\\) in terms of \\(k\\).\n(c) \\(P\\) is translated rightwards by \\(27\\) units and is then translated downwards by \\(9\\) units to the point \\(R\\). It is given that the orthocentre of \\(\\bigtriangleup PQR\\) is \\(H(9, - 8)\\). (i) Write down the coordinates of \\(R\\). (ii) Find \\(k\\). (iii) \\(QH\\) is produced to meet \\(PR\\) at \\(T\\). Andy claims that \\(T\\) is possible to the circumcenter of a triangle where two of the vertices are \\(P\\) and \\(R\\). Is his claim correct? Explain your answer.",
        answer: "(a) \\(f( - 2) = 3\\), so the graph always passes through \\(P\\).\n(b) \\(Q = (4 - k, - 2k^{2} + 24k - 69)\\)\n(c)(i) \\(R = (25, - 6)\\)\n(c)(ii) \\(k = 2\\)\n(c)(iii) Andy\\'s claim is incorrect.",
        steps: "(a) \\(f( - 2) = 2( - 2)^{2} + 4(k - 4)( - 2) + 8k - 37 = 8 - 8k + 32 + 8k - 37 = 3\\). Always passes through \\(P\\).\n(b) \\(f(x) = 2(x + k - 4)^{2} - 2k^{2} + 24k - 69\\Rightarrow Q(4 - k, - 2k^{2} + 24k - 69)\\).\n(c) (i) \\(R(25, - 6)\\). (ii) Slope of \\(PR \\times\\) Slope of \\(QH = - 1\\Rightarrow \\frac{9}{- 27} \\times \\frac{- 2k^{2} + 24k - 61}{- k - 5} = - 1\\Rightarrow 2k^{2} - 27k + 46 = 0\\Rightarrow k = 2\\) or \\(\\frac{23}{2}\\). Checking \\(PH\\bot QR\\) rejects \\(k = \\frac{23}{2}\\therefore k = 2\\).\n(iii) \\(HP = \\sqrt{11^{2} + ( - 11)^{2}} = 11\\sqrt{2}\\), \\(HR = \\sqrt{( - 16)^{2} + ( - 2)^{2}} = \\sqrt{260} \\neq HP\\). Since \\(PR\\bot QH\\), \\(T\\) does not lie on the perpendicular bisector of \\(PR\\), so \\(PT \\neq RT\\). The claim is incorrect."
      },
      {
        id: "fg-c-ex16",
        type: "Centers of Triangle",
        question: "[Level 3 \u2013 Incenter + Circumcenter]\nLet \\(f(x) = x^{2} + 6kx + 10k^{2} + 5\\), where \\(k\\) is a constant. On the rectangular coordinate plane, let \\(P,Q\\) and \\(R\\) be the vertex of the graph of \\(y = f(x - 6)\\), the vertex of the graph of \\(y = f(6 - x)\\) and the vertex of \\(y = 6 - f(x)\\) respectively.\n(a) (i) Using the method of completing the square, express the coordinates of the vertex of \\(y = f(x)\\) in terms of \\(k\\). (ii) Hence, express the coordinates of \\(P,Q\\) and \\(R\\) in terms of \\(k\\).\n(b) A student claims that there is a point \\(T\\) on the rectangular coordinate plane such that the origin \\(O\\) is the circumcentre of \\(\\bigtriangleup QRT\\). Do you agree? Explain your answer.\n(c) The coordinates of \\(S\\) are \\((6,k^{2} - 4k + 5)\\). Denote the inscribed circle of \\(\\bigtriangleup PQS\\) by \\(C\\) and the incentre of \\(\\bigtriangleup PQS\\) by \\(G\\). It is given that the circle \\(C\\) touches \\(PS\\) and \\(PQ\\) at \\(A\\) and \\(B\\) respectively. \\(SGB\\) is a straight line and \\(GA\\) is perpendicular to \\(PS\\). (i) Prove that \\(\\bigtriangleup SGA \\sim \\bigtriangleup SPB\\). (ii) Express the coordinates of \\(G\\) in terms of \\(k\\).",
        answer: "(a)(i) \\(( - 3k,k^{2} + 5)\\)\n(a)(ii) \\(P(6 - 3k,k^{2} + 5)\\), \\(Q(6 + 3k,k^{2} + 5)\\), \\(R( - 3k, - k^{2} + 1)\\)\n(b) Disagree. There is no such point \\(T\\).\n(c)(i) \\(\\bigtriangleup SGA \\sim \\bigtriangleup SPB\\) (proved)\n(c)(ii) \\(G = \\left( 6,k^{2} - \\frac{3}{2}k + 5 \\right)\\)",
        steps: "(a) (i) \\(f(x) = (x + 3k)^{2} + k^{2} + 5\\Rightarrow ( - 3k,k^{2} + 5)\\). (ii) \\(P(6 - 3k,k^{2} + 5),Q(6 + 3k,k^{2} + 5),R( - 3k, - k^{2} + 1)\\).\n(b) \\(OR = OQ\\Rightarrow ( - 3k)^{2} + ( - k^{2} + 1)^{2} = (3k + 6)^{2} + (k^{2} + 5)^{2}\\Rightarrow k^{2} + 3k + 5 = 0\\), \\(\\Delta = - 11 < 0\\). Point \\(T\\) does not exist (disagree).\n(c) (i) \\(PS^{2} = (3k)^{2} + (4k)^{2} = 25k^{2} = QS^{2}\\Rightarrow \\bigtriangleup PQS\\) is isosceles, so \\(SGB\\bot PQ\\). \\(\\angle SBP = \\angle SAG = 90^{\\circ}\\) and \\(\\angle BSP = \\angle ASG\\Rightarrow \\bigtriangleup SBP \\sim \\bigtriangleup SAG\\) (A.A.).\n(ii) Let \\(r\\) be radius of \\(C\\), \\(G(6,k^{2} + 5 - r)\\). \\(\\frac{SP}{SG} = \\frac{BP}{AG}\\Rightarrow \\frac{5k}{4k - r} = \\frac{3k}{r}\\Rightarrow r = \\frac{3}{2}k\\Rightarrow G\\left( 6,k^{2} - \\frac{3}{2}k + 5 \\right)\\)."
      },
      // ---- D) Coordinate Geometry & Special Lines and Centers ----
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg1",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "Find the distance, slope, coordinates of mid-point and coordinates of the point which divides \\(AB\\) into ratio of \\(3:1\\) of the following coordinates \\(A\\) and \\(B\\).\na) \\(A = (3,5);B = (9,13)\\)\nb) \\(A = ( - 3,4);B = ( - 8, - 1)\\)",
        answer: "(a) Distance \\(= 10\\), slope \\(= \\frac{4}{3}\\), mid-point \\(= (6,9)\\), dividing point \\(= (7.5,11)\\)\n(b) Distance \\(= 5\\sqrt{2}\\), slope \\(= 1\\), mid-point \\(= ( - 5.5,1.5)\\), dividing point \\(= ( - 6.75,0.25)\\)",
        steps: "(a) Distance \\(= \\sqrt{(9 - 3)^{2} + (13 - 5)^{2}} = \\sqrt{100} = 10\\); slope \\(= \\frac{13 - 5}{9 - 3} = \\frac{4}{3}\\); mid-point \\(= \\left( \\frac{3 + 9}{2},\\frac{5 + 13}{2} \\right) = (6,9)\\); point dividing \\(AB\\) in the ratio \\(3:1\\) \\(= \\left( \\frac{1(3) + 3(9)}{4},\\frac{1(5) + 3(13)}{4} \\right) = (7.5,11)\\).\n(b) Distance \\(= \\sqrt{( - 8 + 3)^{2} + ( - 1 - 4)^{2}} = \\sqrt{50} = 5\\sqrt{2}\\); slope \\(= \\frac{- 1 - 4}{- 8 + 3} = 1\\); mid-point \\(= \\left( \\frac{- 3 - 8}{2},\\frac{4 - 1}{2} \\right) = ( - 5.5,1.5)\\); point dividing \\(AB\\) in the ratio \\(3:1\\) \\(= \\left( \\frac{1( - 3) + 3( - 8)}{4},\\frac{1(4) + 3( - 1)}{4} \\right) = ( - 6.75,0.25)\\)."
      },
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg2",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "In the figure, \\(G\\) is the centroid of \\(\\bigtriangleup ABC\\). \\(D\\) and \\(E\\) are points lying on \\(BC\\) and \\(AC\\) respectively such that \\(AD\\) and \\(BE\\) intersect at point \\(G\\). If \\(AD\\bot BC\\), \\(BC = 10\\ cm\\) and \\(AE = 6.5\\ cm\\), find \\(DG\\).",
        images: [{ src: "images/fg-d-eg2.png", width: 154 }],
        answer: "\\(DG = 4\\ cm\\)",
        steps: "\\(G\\) is the centroid, so \\(AD\\) and \\(BE\\) are medians: \\(D\\) is the mid-point of \\(BC\\) and \\(E\\) is the mid-point of \\(AC\\).\n\\(BD = \\frac{10}{2} = 5\\ cm\\) and \\(AC = 2 \\times 6.5 = 13\\ cm\\).\n\\(AD\\bot BC\\) and \\(D\\) is the mid-point of \\(BC\\), so \\(AB = AC = 13\\ cm\\).\n\\(AD = \\sqrt{13^{2} - 5^{2}} = 12\\ cm\\), and \\(DG = \\frac{1}{3}AD = 4\\ cm\\)."
      },
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg3",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "In the figure, \\(H\\) is the orthocentre of \\(\\bigtriangleup ABC\\). If \\(\\angle HAC = 25^{\\circ}\\) and \\(\\angle HCA = 35^{\\circ}\\), find \\(\\angle ABC\\).",
        images: [{ src: "images/fg-d-eg3.png", width: 154 }],
        answer: "\\(\\angle ABC = 60^{\\circ}\\)",
        steps: "\\(AH\\) is perpendicular to \\(BC\\), so \\(\\angle ACB = 90^{\\circ} - \\angle HAC = 90^{\\circ} - 25^{\\circ} = 65^{\\circ}\\).\n\\(CH\\) is perpendicular to \\(AB\\), so \\(\\angle BAC = 90^{\\circ} - \\angle HCA = 90^{\\circ} - 35^{\\circ} = 55^{\\circ}\\).\n\\(\\angle ABC = 180^{\\circ} - 65^{\\circ} - 55^{\\circ} = 60^{\\circ}\\)."
      },
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg4",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "In the figure, \\(H\\) is the orthocentre of \\(\\bigtriangleup PQR\\). \\(PH\\) and \\(RH\\) are produced to meet \\(QR\\) and \\(PQ\\) at \\(S\\) and \\(T\\) respectively. Find \\(RT\\).",
        images: [{ src: "images/fg-d-eg4.png", width: 173 }],
        answer: "\\(RT = 15\\ cm\\)",
        steps: "From the figure, \\(PS = 15\\ cm\\), \\(QS = 8\\ cm\\) and \\(SR = 9\\ cm\\), so \\(QR = 17\\ cm\\).\n\\(PQ = \\sqrt{15^{2} + 8^{2}} = 17\\ cm\\).\nArea of \\(\\bigtriangleup PQR = \\frac{1}{2} \\times QR \\times PS = \\frac{1}{2} \\times 17 \\times 15 = 127.5\\ cm^{2}\\).\n\\(RT\\bot PQ\\), so area of \\(\\bigtriangleup PQR = \\frac{1}{2} \\times PQ \\times RT\\Rightarrow RT = \\frac{2 \\times 127.5}{17} = 15\\ cm\\)."
      },
      {
        id: "fg-d-ex1",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "The figure shows \\(\\bigtriangleup ABC\\), where \\(P\\) is the centroid. Find the coordinates of \\(C\\).\nA. \\((10, - 1)\\) B. \\((10,7)\\) C. \\((20,4)\\) D. \\((20,7)\\)",
        images: [{ src: "images/fg-d-ex1.png", width: 173 }],
        answer: "D",
        steps: "Let \\(C\\) be \\((a,b)\\). \\(\\frac{7 + 0 + a}{3} = 9 \\rightarrow a = 20\\); \\(\\frac{8 - 9 + b}{3} = 2 \\rightarrow b = 7\\) (D)"
      },
      {
        id: "fg-d-ex2",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2017-DSE-II-Q41]\nLet \\(O\\) be the origin. The coordinates of the points \\(P\\) and \\(Q\\) are \\((p,0)\\) and \\((0,q)\\) respectively, where \\(p\\) and \\(q\\) are positive numbers. If the in-centre of \\(\\bigtriangleup OPQ\\) lies on the straight line \\(3x + 4y = 3p\\), then \\(p:q =\\)\nA. \\(2:3\\) B. \\(4:3\\) C. \\(4:9\\) D. \\(7:24\\)",
        answer: "D",
        steps: "\\(\\bigtriangleup OPQ\\) is a right-angled triangle. Let the in-center be \\(I(r,r)\\). \\(3(r) + 4(r) = 3p\\Rightarrow r = \\frac{3}{7}p\\).\n\\((p + q + \\sqrt{p^{2} + q^{2}})\\left( \\frac{3}{7}p \\right) = pq\\Rightarrow 3\\sqrt{p^{2} + q^{2}} = 4q - 3p\\Rightarrow 7q^{2} = 24pq\\Rightarrow \\frac{p}{q} = \\frac{7}{24}\\) (D)\nNote: S5 Chapter 2 \"Tangent Properties\" help you finish this question quicker."
      },
      {
        id: "fg-d-ex3",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2018-DSE-II-Q40]\nIt is given that \\(a\\) is a positive constant. The straight line \\(2x + 5y = a\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(P\\) and \\(Q\\) respectively. Let \\(R\\) be a point lying on the \\(y\\)-axis such that the \\(x\\)-coordinate of the orthocentre of \\(\\bigtriangleup PQR\\) is \\(10\\). Find the \\(y\\)-coordinate of \\(R\\).\nA. \\(- 25\\) B. \\(- 4\\) C. \\(4\\) D. \\(25\\)",
        answer: "A",
        steps: "\\(P\\left( \\frac{a}{2},0 \\right),Q\\left( 0,\\frac{a}{5} \\right),R(0,k)\\). Since \\(QR\\) is vertical, altitude from \\(P\\) is horizontal \\(\\Rightarrow H(10,0)\\).\n\\(m_{PQ} = - \\frac{2}{5}\\Rightarrow \\) slope of altitude from \\(R\\) to \\(PQ = \\frac{5}{2}\\Rightarrow \\frac{0 - k}{10 - 0} = \\frac{5}{2}\\Rightarrow k = - 25\\) (A)"
      },
      {
        id: "fg-d-ex4",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2020-DSE-II-Q41]\nThe equations of the three sides of a triangle are \\(4x - 3y = 24\\), \\(4x + 3y = 24\\) and \\(x = a\\), where \\(a\\) is a constant. If the \\(x\\)-coordinate of the incentre of the triangle is \\(31\\), then \\(a =\\)\n[This question is suggested to be finished after Chapter 4]\nA. \\(15\\) B. \\(31\\) C. \\(45\\) D. \\(51\\)",
        answer: "D",
        steps: "Intersection of the two sides: \\((6,0)\\). Note that \\(x\\)-axis is one of the angle bisectors. Let acute angle between \\(L_{1}\\) and \\(x\\)-axis be \\(\\theta\\), inscribed radius \\(= r\\). \\(\\tan\\theta = \\frac{4}{3} \\rightarrow \\sin\\theta = \\frac{4}{5}\\). \\(\\sin\\theta = \\frac{r}{31 - 6}\\Rightarrow r = 20\\Rightarrow a = 31 + 20 = 51\\) (D)",
        stepsImages: [{ src: "images/fg-d-ex4-sol.png", width: 173 }]
      },
      {
        id: "fg-d-ex5",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2021-DSE-II-Q41]\nLet \\(O\\) be the origin. The coordinates of the point \\(P\\) are \\((26, - 18)\\). If the coordinates of the orthocentre of \\(\\bigtriangleup OPQ\\) are \\((21, - 3)\\), then the \\(y\\)-coordinate of \\(Q\\) is\nA. \\(- 30\\) B. \\(- 10\\) C. \\(10\\) D. \\(30\\)",
        answer: "C",
        steps: "Note that \\(Q\\) is the orthocenter of \\(O,P\\) and \\(H(21, - 3)\\).\nAltitude from \\(P\\) to \\(OH\\): \\(y = 7x - 200\\); Altitude from \\(H\\) to \\(OP\\): \\(y = \\frac{13}{9}x - \\frac{100}{3}\\). Solving gives \\(x = 30,y = 10\\) (C)"
      },
      {
        id: "fg-d-ex6",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2022-DSE-II-Q41]\nLet \\(O\\) be the origin. The coordinates of the points \\(A\\) and \\(B\\) are \\((a,0)\\) and \\((0,b)\\) respectively, where \\(a\\) and \\(b\\) are positive numbers. If the circumcentre of \\(\\bigtriangleup OAB\\) lies on the graph of the equation \\(4x + 16y = 17a\\), then \\(a:b =\\)\nA. \\(8:15\\) B. \\(15:8\\) C. \\(16:47\\) D. \\(47:16\\)",
        answer: "A",
        steps: "Note that \\(\\bigtriangleup OAB\\) is a right-angled triangle. Circumcentre \\(= \\left( \\frac{a}{2},\\frac{b}{2} \\right)\\).\n\\(4\\left( \\frac{a}{2} \\right) + 16\\left( \\frac{b}{2} \\right) = 17a\\Rightarrow 8b = 15a\\Rightarrow \\frac{a}{b} = \\frac{8}{15}\\) (A)",
        stepsImages: [{ src: "images/fg-d-ex6-sol.png", width: 154 }]
      },
      {
        id: "fg-d-ex7",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2023-DSE-II-Q41]\nThe equations of the straight lines \\(L_{1}\\) and \\(L_{2}\\) are \\(3x - 4y + k = 0\\), \\(4x + 3y - k = 0\\) respectively, where \\(k\\) is a positive constant. It is given that \\(L_{1}\\) cuts the \\(x\\)-axis at the point \\(P\\). Denote the point of intersection of \\(L_{1}\\) and \\(L_{2}\\) by \\(Q\\). If \\(R\\) is a point lying on \\(L_{2}\\) such that the in-centre of \\(\\angle PQR\\) lies on the \\(x\\)-axis, then the \\(x\\)-coordinate of \\(R\\) is [This question is suggested to be finished after Chapter 4]\nA. \\(- 7k\\) B. \\(- k\\) C. \\(k\\) D. \\(7k\\)",
        answer: "C",
        steps: "Note that \\(L_{1}\\bot L_{2}\\) and \\(P\\left( - \\frac{k}{3},0 \\right)\\). Since \\(x\\)-axis is an angle bisector, slope of \\(L_{3} = -\\) slope of \\(L_{1} = - \\frac{3}{4}\\Rightarrow 3x + 4y + k = 0\\). Joining \\(L_{2}\\) and \\(L_{3}\\), we have \\(R(k, - k)\\) (C)",
        stepsImages: [{ src: "images/fg-d-ex7-sol.png", width: 178 }]
      },
      {
        id: "fg-d-ex8",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2025-DSE-II-Q41]\nDenote the origin by \\(O\\). The coordinates of the point \\(U\\) are \\((20,0)\\). Let \\(V\\) be a point lying on the positive \\(y\\)-axis such that the \\(x\\)-coordinate of the in-centre of \\(\\bigtriangleup OUV\\) is \\(6\\). Find the area of \\(\\bigtriangleup OUV\\).\nA. \\(70\\) B. \\(87\\) C. \\(210\\) D. \\(250\\)",
        answer: "C",
        steps: "Let \\(V(0,b)\\), radius of inscribed circle \\(= 6\\). \\((20 + b + \\sqrt{400 + b^{2}})(6) = 2(10b)\\Rightarrow 40b^{2} - 840b = 0\\Rightarrow b = 21\\Rightarrow \\) Area \\(= 10(21) = 210\\) (C)\nNote: S5 Chapter 2 \"Tangent Properties\" help you finish this question quicker."
      },
      {
        id: "fg-d-ex9",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "It is given that \\(k\\) is a positive constant. The straight line \\(3x + 4y = k\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(A\\) and \\(B\\) respectively. Denote the point \\((k,0)\\) by \\(C\\). If the coordinates of the circumcentre of \\(\\bigtriangleup ABC\\) is \\((h,38)\\), then \\(h =\\)\nA. \\(28\\) B. \\(32\\) C. \\(36\\) D. \\(48\\)",
        answer: "B",
        steps: "\\(A\\left( \\frac{k}{3},0 \\right),B\\left( 0,\\frac{k}{4} \\right)\\). Perpendicular bisector of \\(AC\\) has \\(x = \\frac{2k}{3}\\). \\(KA = KB\\Rightarrow \\left( \\frac{k}{3} \\right)^{2} + 38^{2} = \\left( \\frac{2k}{3} \\right)^{2} + \\left( 38 - \\frac{k}{4} \\right)^{2}\\Rightarrow k = 48\\Rightarrow h = \\frac{2}{3}(48) = 32\\) (B)"
      },
      {
        id: "fg-d-ex10",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "It is given that \\(k\\) is a positive constant. The straight line \\(4x + 3y = k\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(A\\) and \\(B\\) respectively. If the coordinates of the point \\(C\\) are \\((0, - 12)\\), then the \\(x\\)-coordinate of the orthocentre of \\(\\bigtriangleup ABC\\) is\nA. \\(- 16\\) B. \\(- 9\\) C. \\(9\\) D. \\(16\\)",
        answer: "D",
        steps: "\\(A\\left( \\frac{k}{4},0 \\right),B\\left( 0,\\frac{k}{3} \\right)\\). Let orthocenter \\(H(h,0)\\). \\(CH\\bot AB\\Rightarrow \\frac{0 - ( - 12)}{h - 0} \\times \\left( - \\frac{4}{3} \\right) = - 1\\Rightarrow h = 16\\) (D)"
      },
      {
        id: "fg-d-ex11",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "A straight line cuts the \\(x\\)-axis and the \\(y\\)-axis the points \\(M\\) and \\(N\\) at \\(- \\frac{k}{3}\\) and \\(\\frac{k}{5}\\) respectively, where \\(k\\) is a positive constant. Let \\(P\\) be a point lying on the \\(y\\)-axis such that the \\(x\\)-coordinate of the orthocenter of \\(\\bigtriangleup PMN\\) is \\(- 3\\). Find the \\(y\\)-coordinate of \\(P\\).\nA. \\(- \\frac{9}{5}\\) B. \\(- 5\\) C. \\(5\\) D. \\(\\frac{9}{5}\\)",
        answer: "B",
        steps: "Let \\(P(0,p)\\), orthocenter \\(H( - 3,0)\\). \\(PH\\bot MN\\Rightarrow \\frac{p - 0}{0 - ( - 3)} \\times \\left( \\frac{\\frac{k}{5} - 0}{0 + \\frac{k}{3}} \\right) = - 1\\Rightarrow \\frac{p}{3}\\left( \\frac{3}{5} \\right) = - 1\\Rightarrow p = - 5\\) (B)"
      },
      {
        id: "fg-d-ex12",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[Challenging]\nThe equations of the three sides of a triangle are \\(5x - 2y - 28 = 0\\), \\(2x + 5y - 17 = 0\\) and \\(3x - 7y + k = 0\\), where \\(k\\) is a constant. It is given that orthocenter, the incenter and circumcenter of the triangle are collinear. If the \\(x\\)-coordinate of the circumcenter is same as the \\(y\\)-coordinate, then \\(k =\\) [This question is suggested to be finished after Chapter 4]\nA. \\(\\frac{9}{2}\\) B. \\(18\\) C. \\(45\\) D. \\(\\frac{225}{2}\\)",
        answer: "B",
        steps: "Intersection of \\(L_{1}\\) and \\(L_{2}\\) is \\(A(6,1)\\) with \\(L_{1}\\bot L_{2}\\). Let circumcenter be \\(B(b,b)\\) on \\(L_{3}\\): \\(3b - 7b + k = 0\\Rightarrow b = \\frac{k}{4}\\).\nSince isosceles right triangle, altitude from \\(A\\) to \\(L_{3}\\) passes through \\(B\\): \\(\\frac{\\frac{k}{4} - 1}{\\frac{k}{4} - 6} = - \\frac{7}{3}\\Rightarrow k = 18\\) (B)"
      }
    ],
    // Public Exam MC – original multiple-choice practice questions, one question type per topic
    public_exam_mc: [
      // Subject of Formulas
      {
        id: "a1-sf-1",
        type: "Subject of Formulas",
        question: "If \\(y = \\frac{3x + 2}{x - 4}\\), then \\(x =\\)\nA. \\(\\frac{4y - 2}{y - 3}\\)\nB. \\(\\frac{-4y - 2}{y + 3}\\)\nC. \\(\\frac{-4y + 2}{y - 3}\\)\nD. \\(\\frac{4y + 2}{y - 3}\\)",
        answer: "D",
        steps: "\\(y(x - 4) = 3x + 2\\)\n\\(xy - 4y = 3x + 2\\)\nCollect the terms in \\(x\\): \\(xy - 3x = 4y + 2\\), i.e. \\(x(y - 3) = 4y + 2\\)\n\\(x = \\frac{4y + 2}{y - 3}\\) (D)"
      },
      {
        id: "a1-sf-2",
        type: "Subject of Formulas",
        question: "If \\(y = \\frac{5x - 1}{2x + 3}\\), then \\(x =\\)\nA. \\(\\frac{-3y - 1}{2y - 5}\\)\nB. \\(\\frac{3y - 1}{2y - 5}\\)\nC. \\(\\frac{-3y + 1}{2y - 5}\\)\nD. \\(\\frac{3y + 1}{2y + 5}\\)",
        answer: "A",
        steps: "\\(y(2x + 3) = 5x - 1\\)\n\\(2xy + 3y = 5x - 1\\)\nCollect the terms in \\(x\\): \\(2xy - 5x = -3y - 1\\), i.e. \\(x(2y - 5) = -3y - 1\\)\n\\(x = \\frac{-3y - 1}{2y - 5}\\) (A)"
      },
      {
        id: "a1-sf-3",
        type: "Subject of Formulas",
        question: "If \\(\\frac{4}{x} - \\frac{3}{y} = 2\\), then \\(y =\\)\nA. \\(\\frac{4 - 2x}{3x}\\)\nB. \\(\\frac{3x}{4 + 2x}\\)\nC. \\(\\frac{3x}{4 - 2x}\\)\nD. \\(\\frac{3x}{-4 + 2x}\\)",
        answer: "C",
        steps: "\\(\\frac{3}{y} = \\frac{4}{x} - 2\\)\n\\(\\frac{3}{y} = \\frac{4 - 2x}{x}\\)\nTake the reciprocal of both sides and multiply by \\(3\\): \\(y = \\frac{3x}{4 - 2x}\\) (C)"
      },
      {
        id: "a1-sf-4",
        type: "Subject of Formulas",
        question: "If \\(\\frac{7}{x} - \\frac{5}{y} = 3\\), then \\(y =\\)\nA. \\(\\frac{5x}{7 + 3x}\\)\nB. \\(\\frac{5x}{7 - 3x}\\)\nC. \\(\\frac{7 - 3x}{5x}\\)\nD. \\(\\frac{5x}{-7 + 3x}\\)",
        answer: "B",
        steps: "\\(\\frac{5}{y} = \\frac{7}{x} - 3\\)\n\\(\\frac{5}{y} = \\frac{7 - 3x}{x}\\)\nTake the reciprocal of both sides and multiply by \\(5\\): \\(y = \\frac{5x}{7 - 3x}\\) (B)"
      },
      {
        id: "a1-sf-5",
        type: "Subject of Formulas",
        question: "If \\(v = \\sqrt{u^{2} + 2as}\\), then \\(s =\\)\nA. \\(\\frac{v^{2} + u^{2}}{2a}\\)\nB. \\(\\frac{(v - u)^{2}}{2a}\\)\nC. \\(v^{2} - \\frac{u^{2}}{2a}\\)\nD. \\(\\frac{v^{2} - u^{2}}{2a}\\)",
        answer: "D",
        steps: "Square both sides: \\(v^{2} = u^{2} + 2as\\)\n\\(2as = v^{2} - u^{2}\\)\n\\(s = \\frac{v^{2} - u^{2}}{2a}\\) (D)"
      },
      {
        id: "a1-sf-6",
        type: "Subject of Formulas",
        question: "If \\(T = 2\\pi\\sqrt{\\frac{l}{g}}\\), then \\(l =\\)\nA. \\(\\frac{gT^{2}}{4\\pi^{2}}\\)\nB. \\(\\frac{gT^{2}}{2\\pi}\\)\nC. \\(\\frac{T^{2}}{4\\pi^{2}g}\\)\nD. \\(\\frac{4\\pi^{2}g}{T^{2}}\\)",
        answer: "A",
        steps: "\\(\\frac{T}{2\\pi} = \\sqrt{\\frac{l}{g}}\\)\nSquare both sides: \\(\\frac{T^{2}}{4\\pi^{2}} = \\frac{l}{g}\\)\n\\(l = \\frac{gT^{2}}{4\\pi^{2}}\\) (A)"
      },
      {
        id: "a1-sf-7",
        type: "Subject of Formulas",
        question: "If \\((2c + 3)(d - 1) = 3d(c - 2)\\), then \\(c =\\)\nA. \\(\\frac{9d - 3}{d - 2}\\)\nB. \\(\\frac{9d - 3}{d + 2}\\)\nC. \\(\\frac{9d + 3}{d + 2}\\)\nD. \\(\\frac{-9d - 3}{d + 2}\\)",
        answer: "B",
        steps: "Expand both sides: \\(2cd - 2c + 3d - 3 = 3cd - 6d\\)\nCollect the terms in \\(c\\) on the left: \\(2cd - 2c - 3cd = -6d - 3d + 3\\)\nFactorize: \\(c(-d - 2) = -9d + 3\\)\n\\(c = \\frac{9d - 3}{d + 2}\\) (B)"
      },
      {
        id: "a1-sf-8",
        type: "Subject of Formulas",
        question: "If \\((4c - 1)(d - 2) = 2d(3c - 1)\\), then \\(c =\\)\nA. \\(\\frac{d - 2}{2d + 8}\\)\nB. \\(\\frac{d + 2}{2d - 8}\\)\nC. \\(\\frac{d + 2}{2d + 8}\\)\nD. \\(\\frac{-d + 2}{2d + 8}\\)",
        answer: "C",
        steps: "Expand both sides: \\(4cd - 8c - d + 2 = 6cd - 2d\\)\nCollect the terms in \\(c\\) on the left: \\(4cd - 8c - 6cd = -2d + d - 2\\)\nFactorize: \\(c(-2d - 8) = -d - 2\\)\n\\(c = \\frac{d + 2}{2d + 8}\\) (C)"
      },
      // Expansion, Factorization and Algebraic Fractions
      {
        id: "a1-ef-1",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((2x - 3)(x^{2} + 4x - 5) =\\)\nA. \\(2x^{3} + 5x^{2} - 22x + 45\\)\nB. \\(2x^{3} + 5x^{2} - 22x + 15\\)\nC. \\(2x^{3} + 5x^{2} + 22x + 15\\)\nD. \\(2x^{3} + 15x^{2} - 22x + 15\\)",
        answer: "B",
        steps: "\\(= 2x(x^{2} + 4x - 5) + (-3)(x^{2} + 4x - 5)\\)\n\\(= 2x^{3} + 8x^{2} - 10x - 3(x^{2} + 4x - 5)\\)\n\\(= 2x^{3} + 5x^{2} - 22x + 15\\) (B)"
      },
      {
        id: "a1-ef-2",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((3x + 2)(-x^{2} + 2x + 6) =\\)\nA. \\(-3x^{3} + 4x^{2} - 22x + 12\\)\nB. \\(-3x^{3} + 12x^{2} + 22x + 12\\)\nC. \\(-3x^{3} + 4x^{2} + 22x + 12\\)\nD. \\(-3x^{3} + 4x^{2} + 22x + 36\\)",
        answer: "C",
        steps: "\\(= 3x(-x^{2} + 2x + 6) + 2(-x^{2} + 2x + 6)\\)\n\\(= -3x^{3} + 6x^{2} + 18x + 2(-x^{2} + 2x + 6)\\)\n\\(= -3x^{3} + 4x^{2} + 22x + 12\\) (C)"
      },
      {
        id: "a1-ef-3",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(2ac - 4ad + 3bc - 6bd =\\)\nA. \\((2a + 3b)(c - 2d)\\)\nB. \\((2a + 3b)(c + 2d)\\)\nC. \\((2a - 3b)(c - 2d)\\)\nD. \\((2a - 3b)(c + 2d)\\)",
        answer: "A",
        steps: "Group the terms: \\((2ac - 4ad) + (3bc - 6bd)\\)\nTake out the common factors: \\(2a(c - 2d) + 3b(c - 2d)\\)\n\\(= (2a + 3b)(c - 2d)\\) (A)"
      },
      {
        id: "a1-ef-4",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(6pr + 15ps - 2qr - 5qs =\\)\nA. \\((3p + q)(2r + 5s)\\)\nB. \\((3p - q)(2r - 5s)\\)\nC. \\((3p + q)(2r - 5s)\\)\nD. \\((3p - q)(2r + 5s)\\)",
        answer: "D",
        steps: "Group the terms: \\((6pr + 15ps) + (-2qr - 5qs)\\)\nTake out the common factors: \\(3p(2r + 5s) - q(2r + 5s)\\)\n\\(= (3p - q)(2r + 5s)\\) (D)"
      },
      {
        id: "a1-ef-5",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{3}{x + 1} + \\frac{2}{x - 4} =\\)\nA. \\(\\frac{x - 10}{(x + 1)(x - 4)}\\)\nB. \\(\\frac{5x + 14}{(x + 1)(x - 4)}\\)\nC. \\(\\frac{5x + 10}{(x + 1)(x - 4)}\\)\nD. \\(\\frac{5x - 10}{(x + 1)(x - 4)}\\)",
        answer: "D",
        steps: "The common denominator is \\((x + 1)(x - 4)\\)\n\\(= \\frac{3(x - 4) + 2(x + 1)}{(x + 1)(x - 4)}\\)\n\\(= \\frac{5x - 10}{(x + 1)(x - 4)}\\) (D)"
      },
      {
        id: "a1-ef-6",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{5}{x + 3} - \\frac{2}{x - 2} =\\)\nA. \\(\\frac{3x - 16}{(x + 3)(x - 2)}\\)\nB. \\(\\frac{3x + 4}{(x + 3)(x - 2)}\\)\nC. \\(\\frac{7x - 16}{(x + 3)(x - 2)}\\)\nD. \\(\\frac{3x + 16}{(x + 3)(x - 2)}\\)",
        answer: "A",
        steps: "The common denominator is \\((x + 3)(x - 2)\\)\n\\(= \\frac{5(x - 2) - 2(x + 3)}{(x + 3)(x - 2)}\\)\n\\(= \\frac{3x - 16}{(x + 3)(x - 2)}\\) (A)"
      },
      {
        id: "a1-ef-7",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(h^{2} - 9k^{2} - 6h - 18k =\\)\nA. \\((h + 3k)(h - 3k + 6)\\)\nB. \\((h + 3k)(h - 3k - 6)\\)\nC. \\((h + 3k)(h + 3k - 6)\\)\nD. \\((h - 3k)(h + 3k - 6)\\)",
        answer: "B",
        steps: "Group: \\((h^{2} - 9k^{2}) - 6(h + 3k)\\)\nDifference of two squares: \\((h + 3k)(h - 3k) - 6(h + 3k)\\)\nTake out \\((h + 3k)\\): \\(= (h + 3k)(h - 3k - 6)\\) (B)"
      },
      {
        id: "a1-ef-8",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(h^{2} - 4k^{2} - 5h - 10k =\\)\nA. \\((h - 2k)(h + 2k - 5)\\)\nB. \\((h + 2k)(h - 2k + 5)\\)\nC. \\((h + 2k)(h - 2k - 5)\\)\nD. \\((h + 2k)(h + 2k - 5)\\)",
        answer: "C",
        steps: "Group: \\((h^{2} - 4k^{2}) - 5(h + 2k)\\)\nDifference of two squares: \\((h + 2k)(h - 2k) - 5(h + 2k)\\)\nTake out \\((h + 2k)\\): \\(= (h + 2k)(h - 2k - 5)\\) (C)"
      },
      // Functions
      {
        id: "a1-fn-1",
        type: "Functions",
        question: "Let \\(f(x) = 3x^{2} - 5x + 2\\). Then \\(f(x + 2) - f(x) =\\)\nA. \\(12x + 2\\)\nB. \\(12x - 10\\)\nC. \\(6x + 2\\)\nD. \\(12x + 12\\)",
        answer: "A",
        steps: "\\(f(x + 2) = 3(x + 2)^{2} - 5(x + 2) + 2\\)\n\\(= 3x^{2} + 7x + 4\\)\n\\(f(x + 2) - f(x) = 12x + 2\\) (A)"
      },
      {
        id: "a1-fn-2",
        type: "Functions",
        question: "Let \\(f(x) = -2x^{2} + 4x - 7\\). Then \\(f(x - 1) - f(x) =\\)\nA. \\(4x - 4\\)\nB. \\(4x - 6\\)\nC. \\(4x - 2\\)\nD. \\(2x - 6\\)",
        answer: "B",
        steps: "\\(f(x - 1) = -2(x - 1)^{2} + 4(x - 1) - 7\\)\n\\(= -2x^{2} + 8x - 13\\)\n\\(f(x - 1) - f(x) = 4x - 6\\) (B)"
      },
      {
        id: "a1-fn-3",
        type: "Functions",
        question: "Let \\(f(x) = 2x^{2} + kx - 5\\), where \\(k\\) is a constant. If \\(f(3) = f(-5)\\), then \\(k =\\)\nA. \\(-4\\)\nB. \\(16\\)\nC. \\(-16\\)\nD. \\(4\\)",
        answer: "D",
        steps: "\\(f(3) = 18 + 3k - 5\\) and \\(f(-5) = 50 - 5k - 5\\)\n\\(18 + 3k = 50 - 5k\\)\n\\(8k = 32\\)\n\\(k = 4\\) (D)"
      },
      {
        id: "a1-fn-4",
        type: "Functions",
        question: "Let \\(f(x) = 3x^{2} + kx + 1\\), where \\(k\\) is a constant. If \\(f(-2) = f(6)\\), then \\(k =\\)\nA. \\(24\\)\nB. \\(-24\\)\nC. \\(-12\\)\nD. \\(12\\)",
        answer: "C",
        steps: "\\(f(-2) = 12 - 2k + 1\\) and \\(f(6) = 108 + 6k + 1\\)\n\\(12 - 2k = 108 + 6k\\)\n\\(-8k = 96\\)\n\\(k = -12\\) (C)"
      },
      {
        id: "a1-fn-5",
        type: "Functions",
        question: "Let \\(f\\) be a function such that \\(f(2x) = 8x^{3} + 6x\\). Then \\(f(3a) =\\)\nA. \\(27a^{3} + 9a\\)\nB. \\(27a^{3} + 18a\\)\nC. \\(27a^{3} + 6a\\)\nD. \\(8a^{3} + 9a\\)",
        answer: "A",
        steps: "\\(f(2x) = 8x^{3} + 6x\\), so write \\(u = 2x\\), i.e. \\(x = \\frac{u}{2}\\)\n\\(f(u) = 8\\left(\\frac{u}{2}\\right)^{3} + 6\\left(\\frac{u}{2}\\right) = u^{3} + 3u\\)\n\\(f(3a) = 27a^{3} + 9a\\) (A)"
      },
      {
        id: "a1-fn-6",
        type: "Functions",
        question: "Let \\(f\\) be a function such that \\(f(3x) = 27x^{3} + 6x\\). Then \\(f(2a) =\\)\nA. \\(27a^{3} + 4a\\)\nB. \\(8a^{3} + 4a\\)\nC. \\(8a^{3} + 6a\\)\nD. \\(8a^{3} + 12a\\)",
        answer: "B",
        steps: "\\(f(3x) = 27x^{3} + 6x\\), so write \\(u = 3x\\), i.e. \\(x = \\frac{u}{3}\\)\n\\(f(u) = 27\\left(\\frac{u}{3}\\right)^{3} + 6\\left(\\frac{u}{3}\\right) = u^{3} + 2u\\)\n\\(f(2a) = 8a^{3} + 4a\\) (B)"
      },
      {
        id: "a1-fn-7",
        type: "Functions",
        question: "Let \\(f(x) = \\frac{x}{x - 3}\\). Then \\(f\\left(\\frac{1}{x}\\right) =\\)\nA. \\(\\frac{1}{3x - 1}\\)\nB. \\(\\frac{x}{1 - 3x}\\)\nC. \\(\\frac{1}{x - 3}\\)\nD. \\(\\frac{1}{1 - 3x}\\)",
        answer: "D",
        steps: "\\(f\\left(\\frac{1}{x}\\right) = \\frac{\\frac{1}{x}}{\\frac{1}{x} - 3}\\)\nMultiply the numerator and the denominator by \\(x\\): \\(= \\frac{1}{1 - 3x}\\) (D)"
      },
      {
        id: "a1-fn-8",
        type: "Functions",
        question: "Let \\(f(x) = \\frac{x}{x - 2}\\). Then \\(f\\left(\\frac{1}{x}\\right) =\\)\nA. \\(\\frac{x}{1 - 2x}\\)\nB. \\(\\frac{1}{x - 2}\\)\nC. \\(\\frac{1}{1 - 2x}\\)\nD. \\(\\frac{1}{2x - 1}\\)",
        answer: "C",
        steps: "\\(f\\left(\\frac{1}{x}\\right) = \\frac{\\frac{1}{x}}{\\frac{1}{x} - 2}\\)\nMultiply the numerator and the denominator by \\(x\\): \\(= \\frac{1}{1 - 2x}\\) (C)"
      },
      // Percentage
      {
        id: "a1-pc-1",
        type: "Percentage",
        question: "The price of a souvenir is first increased by 60% and then decreased by 25%. Find the percentage change in the price of the souvenir.\nA. \\(20\\%\\)\nB. \\(35\\%\\)\nC. \\(-20\\%\\)\nD. \\(30\\%\\)",
        answer: "A",
        steps: "Let the original price be \\(\\$100\\).\nAfter the first change: \\(100 \\times 1.6 = 160\\)\nAfter the second change: \\(160 \\times 0.75 = 120\\)\nPercentage change \\(= \\frac{120 - 100}{100} \\times 100\\% = 20\\%\\) (A)"
      },
      {
        id: "a1-pc-2",
        type: "Percentage",
        question: "The price of a souvenir is first decreased by 40% and then increased by 50%. Find the percentage change in the price of the souvenir.\nA. \\(10\\%\\)\nB. \\(0\\%\\)\nC. \\(-90\\%\\)\nD. \\(-10\\%\\)",
        answer: "D",
        steps: "Let the original price be \\(\\$100\\).\nAfter the first change: \\(100 \\times 0.6 = 60\\)\nAfter the second change: \\(60 \\times 1.5 = 90\\)\nPercentage change \\(= \\frac{90 - 100}{100} \\times 100\\% = -10\\%\\) (D)"
      },
      {
        id: "a1-pc-3",
        type: "Percentage",
        question: "The marked price of a jacket is 40% above its cost. If the jacket is sold at a discount of 25% on its marked price, then the percentage profit is\nA. \\(-5\\%\\)\nB. \\(5\\%\\)\nC. \\(15\\%\\)\nD. \\(10\\%\\)",
        answer: "B",
        steps: "Let the cost be \\(\\$100\\).\nMarked price \\(= 100 \\times 1.4 = 140\\)\nSelling price \\(= 140 \\times 0.75 = 105\\)\nPercentage profit \\(= \\frac{105 - 100}{100} \\times 100\\% = 5\\%\\) (B)"
      },
      {
        id: "a1-pc-4",
        type: "Percentage",
        question: "The marked price of a jacket is 60% above its cost. If the jacket is sold at a discount of 30% on its marked price, then the percentage profit is\nA. \\(30\\%\\)\nB. \\(22\\%\\)\nC. \\(12\\%\\)\nD. \\(-12\\%\\)",
        answer: "C",
        steps: "Let the cost be \\(\\$100\\).\nMarked price \\(= 100 \\times 1.6 = 160\\)\nSelling price \\(= 160 \\times 0.7 = 112\\)\nPercentage profit \\(= \\frac{112 - 100}{100} \\times 100\\% = 12\\%\\) (C)"
      },
      {
        id: "a1-pc-5",
        type: "Percentage",
        question: "A sum of \\(\\$36\\,000\\) is deposited at an interest rate of \\(5\\%\\) per annum for 2 years, compounded monthly. Find the interest correct to the nearest dollar.\nA. \\(\\$3\\,690\\)\nB. \\(\\$3\\,600\\)\nC. \\(\\$39\\,778\\)\nD. \\(\\$3\\,778\\)",
        answer: "D",
        steps: "Interest rate per period \\(= \\frac{5\\%}{12}\\), number of periods \\(= 2 \\times 12 = 24\\)\nAmount \\(= 36000\\left(1 + \\frac{5\\%}{12}\\right)^{24} \\approx \\$39\\,778\\)\nInterest \\(= \\$39\\,778 - \\$36\\,000 = \\$3\\,778\\)\nThe other options come from compounding yearly, from simple interest, or from giving the amount instead of the interest. (D)"
      },
      {
        id: "a1-pc-6",
        type: "Percentage",
        question: "A sum of \\(\\$48\\,000\\) is deposited at an interest rate of \\(6\\%\\) per annum for 3 years, compounded half-yearly. Find the interest correct to the nearest dollar.\nA. \\(\\$57\\,315\\)\nB. \\(\\$8\\,640\\)\nC. \\(\\$9\\,315\\)\nD. \\(\\$9\\,169\\)",
        answer: "C",
        steps: "Interest rate per period \\(= \\frac{6\\%}{2}\\), number of periods \\(= 3 \\times 2 = 6\\)\nAmount \\(= 48000\\left(1 + \\frac{6\\%}{2}\\right)^{6} \\approx \\$57\\,315\\)\nInterest \\(= \\$57\\,315 - \\$48\\,000 = \\$9\\,315\\)\nThe other options come from compounding yearly, from simple interest, or from giving the amount instead of the interest. (C)"
      },
      {
        id: "a1-pc-7",
        type: "Percentage",
        question: "Peter sold two bicycles for $240 each. He gained 20% on one and lost 20% on the other. After the two transactions, Peter\nA. \\(\\text{lost \\$20}\\)\nB. \\(\\text{gained \\$20}\\)\nC. \\(\\text{lost \\$48}\\)\nD. \\(\\text{had no gain and no loss}\\)",
        answer: "A",
        steps: "Bicycle sold at a gain: cost \\(= \\frac{240}{1.2} = 200\\)\nBicycle sold at a loss: cost \\(= \\frac{240}{0.8} = 300\\)\nTotal cost \\(= 500\\), total selling price \\(= 480\\)\nLoss \\(= 20\\)\nThe 20% gain and 20% loss are taken on different costs, so they do not cancel. (A)"
      },
      {
        id: "a1-pc-8",
        type: "Percentage",
        question: "Peter sold two bicycles for $910 each. He gained 30% on one and lost 30% on the other. After the two transactions, Peter\nA. \\(\\text{lost \\$273}\\)\nB. \\(\\text{lost \\$180}\\)\nC. \\(\\text{gained \\$180}\\)\nD. \\(\\text{had no gain and no loss}\\)",
        answer: "B",
        steps: "Bicycle sold at a gain: cost \\(= \\frac{910}{1.3} = 700\\)\nBicycle sold at a loss: cost \\(= \\frac{910}{0.7} = 1300\\)\nTotal cost \\(= 2000\\), total selling price \\(= 1820\\)\nLoss \\(= 180\\)\nThe 30% gain and 30% loss are taken on different costs, so they do not cancel. (B)"
      },
      // Estimation and Numbers
      {
        id: "a1-en-1",
        type: "Estimation and Numbers",
        question: "\\(0.0047396 =\\)\nA. \\(0.00474\\text{ (correct to 3 significant figures)}\\)\nB. \\(0.0047\\text{ (correct to 2 decimal places)}\\)\nC. \\(0.00474\\text{ (correct to 3 decimal places)}\\)\nD. \\(0.005\\text{ (correct to 3 significant figures)}\\)",
        answer: "A",
        steps: "Count the significant figures from the first non-zero digit, and the decimal places from the decimal point.\n0.0047396 \\(\\approx\\) 0.00474 (correct to 3 significant figures).\nIn the other options the figure given does not match the stated accuracy (for example, the decimal places and the significant figures have been confused, or the last digit has been rounded the wrong way). (A)"
      },
      {
        id: "a1-en-2",
        type: "Estimation and Numbers",
        question: "\\(5.036284 =\\)\nA. \\(5.04\\text{ (correct to 3 decimal places)}\\)\nB. \\(5.04\\text{ (correct to 2 significant figures)}\\)\nC. \\(5.036\\text{ (correct to 3 decimal places)}\\)\nD. \\(5.036\\text{ (correct to 4 decimal places)}\\)",
        answer: "C",
        steps: "Count the significant figures from the first non-zero digit, and the decimal places from the decimal point.\n5.036284 \\(\\approx\\) 5.036 (correct to 3 decimal places).\nIn the other options the figure given does not match the stated accuracy (for example, the decimal places and the significant figures have been confused, or the last digit has been rounded the wrong way). (C)"
      },
      {
        id: "a1-en-3",
        type: "Estimation and Numbers",
        question: "The length and the width of a rectangle are measured as \\(12\\text{ cm}\\) and \\(9\\text{ cm}\\) respectively, both correct to the nearest cm. The least possible area of the rectangle is\nA. \\(118.75 \\text{ cm}^{2}\\)\nB. \\(108 \\text{ cm}^{2}\\)\nC. \\(88 \\text{ cm}^{2}\\)\nD. \\(97.75 \\text{ cm}^{2}\\)",
        answer: "D",
        steps: "Each measurement can be as small as \\(0.5\\text{ cm}\\) below the measured value.\nLeast length \\(= 11.5\\text{ cm}\\), least width \\(= 8.5\\text{ cm}\\)\nLeast area \\(= 11.5 \\times 8.5 = 97.75\\text{ cm}^{2}\\) (D)"
      },
      {
        id: "a1-en-4",
        type: "Estimation and Numbers",
        question: "The length and the width of a rectangular garden are measured as \\(25\\text{ m}\\) and \\(18\\text{ m}\\) respectively, both correct to the nearest m. The greatest possible perimeter of the garden is\nA. \\(90 \\text{ m}\\)\nB. \\(88 \\text{ m}\\)\nC. \\(84 \\text{ m}\\)\nD. \\(86 \\text{ m}\\)",
        answer: "B",
        steps: "Each measurement can be as large as \\(0.5\\text{ m}\\) above the measured value (but not reaching it).\nGreatest length \\(= 25.5\\text{ m}\\), greatest width \\(= 18.5\\text{ m}\\)\nGreatest perimeter \\(= 2(25.5 + 18.5) = 88\\text{ m}\\) (B)"
      },
      {
        id: "a1-en-5",
        type: "Estimation and Numbers",
        question: "The real part of \\(i + 2i^{2} + 3i^{3} + \\ldots + 10i^{10}\\) is\nA. \\(-6\\)\nB. \\(5\\)\nC. \\(-4\\)\nD. \\(6\\)",
        answer: "A",
        steps: "The powers of \\(i\\) repeat every 4 terms: \\(i, -1, -i, 1, \\ldots\\)\nSo the terms are \\(i, -2, -3i, 4, 5i, -6, -7i, 8, \\ldots\\)\nReal part \\(= -2 + 4 - 6 + 8 - 10 = -6\\)\nImaginary part \\(= 1 - 3 + 5 - 7 + 9 = 5\\) (A)"
      },
      {
        id: "a1-en-6",
        type: "Estimation and Numbers",
        question: "The imaginary part of \\(i + 2i^{2} + 3i^{3} + \\ldots + 14i^{14}\\) is\nA. \\(-8\\)\nB. \\(9\\)\nC. \\(-7\\)\nD. \\(7\\)",
        answer: "D",
        steps: "The powers of \\(i\\) repeat every 4 terms: \\(i, -1, -i, 1, \\ldots\\)\nSo the terms are \\(i, -2, -3i, 4, 5i, -6, -7i, 8, \\ldots\\)\nReal part \\(= -2 + 4 - 6 + 8 - 10 + 12 - 14 = -8\\)\nImaginary part \\(= 1 - 3 + 5 - 7 + 9 - 11 + 13 = 7\\) (D)"
      },
      {
        id: "a1-en-7",
        type: "Estimation and Numbers",
        question: "If \\(x\\) is a real number, then the real part of \\((x + 4i)(2 + 3i)\\) is\nA. \\(-2x - 12\\)\nB. \\(2x + 12\\)\nC. \\(2x - 12\\)\nD. \\(3x + 8\\)",
        answer: "C",
        steps: "\\((x + 4i)(2 + 3i) = 2x + 3xi + 8i + 12i^{2}\\)\nUse \\(i^{2} = -1\\): \\(= (2x - 12) + (3x + 8)i\\)\nThe real part is \\(2x - 12\\) (C)"
      },
      {
        id: "a1-en-8",
        type: "Estimation and Numbers",
        question: "If \\(x\\) is a real number, then the imaginary part of \\((x - 2i)(5 + 2i)\\) is\nA. \\(2x + 10\\)\nB. \\(2x - 10\\)\nC. \\(-2x - 10\\)\nD. \\(5x + 4\\)",
        answer: "B",
        steps: "\\((x - 2i)(5 + 2i) = 5x + 2xi - 10i - 4i^{2}\\)\nUse \\(i^{2} = -1\\): \\(= (5x + 4) + (2x - 10)i\\)\nThe imaginary part is \\(2x - 10\\) (B)"
      },
      // Basic Trigonometry
      {
        id: "a1-tr-1",
        type: "Basic Trigonometry",
        question: "For \\(0^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\), how many roots does the equation \\(2\\sin^{2}\\theta + 3\\sin\\theta - 2 = 0\\) have?\nA. \\(2\\)\nB. \\(1\\)\nC. \\(4\\)\nD. \\(3\\)",
        answer: "A",
        steps: "Factorize: \\((2\\sin\\theta - 1)(\\sin\\theta + 2) = 0\\)\n\\(\\sin\\theta = \\frac{1}{2}\\) gives 2 roots in the given range.\n\\(\\sin\\theta = -2\\) has no solution because \\(-1 \\leq \\sin\\theta \\leq 1\\).\nTotal number of roots \\(= 2\\) (A)"
      },
      {
        id: "a1-tr-2",
        type: "Basic Trigonometry",
        question: "For \\(0^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\), how many roots does the equation \\(6\\cos^{2}\\theta + \\cos\\theta - 1 = 0\\) have?\nA. \\(6\\)\nB. \\(3\\)\nC. \\(4\\)\nD. \\(5\\)",
        answer: "C",
        steps: "Factorize: \\((3\\cos\\theta - 1)(2\\cos\\theta + 1) = 0\\)\n\\(\\cos\\theta = \\frac{1}{3}\\) gives 2 roots in the given range.\n\\(\\cos\\theta = -\\frac{1}{2}\\) gives 2 roots in the given range.\nTotal number of roots \\(= 4\\) (C)"
      },
      {
        id: "a1-tr-3",
        type: "Basic Trigonometry",
        question: "\\(\\tan\\theta + \\frac{\\cos\\theta}{1 + \\sin\\theta} =\\)\nA. \\(\\tan^{2}\\theta\\)\nB. \\(\\frac{1}{\\cos\\theta}\\)\nC. \\(\\frac{1}{\\cos^{2}\\theta}\\)\nD. \\(\\sin\\theta\\)",
        answer: "B",
        steps: "Put everything over a common denominator: \\(\\frac{\\sin\\theta(1 + \\sin\\theta) + \\cos^{2}\\theta}{\\cos\\theta(1 + \\sin\\theta)}\\)\nNumerator: \\(\\sin\\theta + \\sin^{2}\\theta + \\cos^{2}\\theta = \\sin\\theta + 1\\)\nSo the expression is \\(\\frac{1 + \\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{1}{\\cos\\theta}\\) (B)"
      },
      {
        id: "a1-tr-4",
        type: "Basic Trigonometry",
        question: "\\(\\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta} =\\)\nA. \\(-\\tan^{2}\\theta\\)\nB. \\(\\frac{1}{\\cos^{2}\\theta}\\)\nC. \\(\\sin\\theta\\)\nD. \\(\\frac{2}{\\cos^{2}\\theta}\\)",
        answer: "D",
        steps: "Common denominator: \\(\\frac{(1 + \\sin\\theta) + (1 - \\sin\\theta)}{(1 - \\sin\\theta)(1 + \\sin\\theta)}\\)\n\\(= \\frac{2}{1 - \\sin^{2}\\theta}\\)\nSince \\(1 - \\sin^{2}\\theta = \\cos^{2}\\theta\\), the expression is \\(\\frac{2}{\\cos^{2}\\theta}\\) (D)"
      },
      {
        id: "a1-tr-5",
        type: "Basic Trigonometry",
        question: "\\(\\frac{\\cos\\theta}{1 - \\sin\\theta} - \\frac{\\cos\\theta}{1 + \\sin\\theta} =\\)\nA. \\(2\\tan\\theta\\)\nB. \\(\\frac{1}{\\cos\\theta}\\)\nC. \\(2\\cos\\theta\\)\nD. \\(\\sin^{2}\\theta - \\cos^{2}\\theta\\)",
        answer: "A",
        steps: "Common denominator: \\(\\frac{\\cos\\theta(1 + \\sin\\theta) - \\cos\\theta(1 - \\sin\\theta)}{1 - \\sin^{2}\\theta}\\)\nNumerator: \\(2\\sin\\theta\\cos\\theta\\); denominator: \\(\\cos^{2}\\theta\\)\nSo the expression is \\(\\frac{2\\sin\\theta}{\\cos\\theta} = 2\\tan\\theta\\) (A)"
      },
      {
        id: "a1-tr-6",
        type: "Basic Trigonometry",
        question: "If \\(\\tan\\theta = -\\frac{3}{4}\\) and \\(\\theta\\) lies in the second quadrant, then \\(\\sin\\theta + \\cos\\theta =\\)\nA. \\(-\\frac{7}{5}\\)\nB. \\(\\frac{7}{5}\\)\nC. \\(\\frac{1}{5}\\)\nD. \\(-\\frac{1}{5}\\)",
        answer: "D",
        steps: "In the second quadrant \\(\\sin\\theta > 0\\) and \\(\\cos\\theta < 0\\).\nTake a right-angled triangle with opposite side \\(3\\) and adjacent side \\(4\\); the hypotenuse is \\(\\sqrt{3^{2} + 4^{2}} = 5\\).\n\\(\\sin\\theta = \\frac{3}{5}\\), \\(\\cos\\theta = -\\frac{4}{5}\\)\n\\(\\sin\\theta + \\cos\\theta = -\\frac{1}{5}\\) (D)"
      },
      {
        id: "a1-tr-7",
        type: "Basic Trigonometry",
        question: "If \\(\\tan\\theta = -\\frac{5}{12}\\) and \\(\\theta\\) lies in the second quadrant, then \\(\\sin\\theta + \\cos\\theta =\\)\nA. \\(\\frac{17}{13}\\)\nB. \\(-\\frac{7}{13}\\)\nC. \\(\\frac{7}{13}\\)\nD. \\(-\\frac{17}{13}\\)",
        answer: "B",
        steps: "In the second quadrant \\(\\sin\\theta > 0\\) and \\(\\cos\\theta < 0\\).\nTake a right-angled triangle with opposite side \\(5\\) and adjacent side \\(12\\); the hypotenuse is \\(\\sqrt{5^{2} + 12^{2}} = 13\\).\n\\(\\sin\\theta = \\frac{5}{13}\\), \\(\\cos\\theta = -\\frac{12}{13}\\)\n\\(\\sin\\theta + \\cos\\theta = -\\frac{7}{13}\\) (B)"
      },
      {
        id: "a1-tr-8",
        type: "Basic Trigonometry",
        question: "For \\(0^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\), the greatest value of \\(\\frac{12}{5 - 3\\sin\\theta}\\) is\nA. \\(4\\)\nB. \\(\\frac{12}{5}\\)\nC. \\(6\\)\nD. \\(\\frac{3}{2}\\)",
        answer: "C",
        steps: "The fraction is greatest when the denominator \\(5 - 3\\sin\\theta\\) is least.\nThe least value of \\(5 - 3\\sin\\theta\\) is \\(5 - 3(1) = 2\\), when \\(\\sin\\theta = 1\\).\nGreatest value \\(= \\frac{12}{2} = 6\\) (C)"
      },
      // Mensurations
      {
        id: "a1-me-1",
        type: "Mensurations",
        question: "The base radius of a cylinder is increased by 20% and its height is decreased by 25%. The percentage change in its volume is\nA. \\(15\\%\\)\nB. \\(8\\%\\)\nC. \\(-5\\%\\)\nD. \\(18\\%\\)",
        answer: "B",
        steps: "Volume \\(V = \\pi r^{2}h\\). Let the original radius and height be \\(r\\) and \\(h\\).\nNew volume \\(= \\pi(1.2r)^{2}(0.75h) = 1.08\\,\\pi r^{2}h\\)\nPercentage change \\(= (1.08 - 1) \\times 100\\% = 8\\%\\)\nThe radius is squared in the formula, so the percentage changes cannot simply be added. (B)"
      },
      {
        id: "a1-me-2",
        type: "Mensurations",
        question: "The base radius of a cylinder is increased by 10% and its height is decreased by 20%. The percentage change in its volume is\nA. \\(0\\%\\)\nB. \\(6.8\\%\\)\nC. \\(-10\\%\\)\nD. \\(-3.2\\%\\)",
        answer: "D",
        steps: "Volume \\(V = \\pi r^{2}h\\). Let the original radius and height be \\(r\\) and \\(h\\).\nNew volume \\(= \\pi(1.1r)^{2}(0.8h) = 0.968\\,\\pi r^{2}h\\)\nPercentage change \\(= (0.968 - 1) \\times 100\\% = -3.2\\%\\)\nThe radius is squared in the formula, so the percentage changes cannot simply be added. (D)"
      },
      {
        id: "a1-me-3",
        type: "Mensurations",
        question: "The angle of a sector is decreased by 20% and its radius is increased by k%. If the arc length of the sector remains unchanged, find the value of \\(k\\).\nA. \\(80\\)\nB. \\(5\\)\nC. \\(25\\)\nD. \\(20\\)",
        answer: "C",
        steps: "Arc length \\(= \\frac{\\theta}{360^{\\circ}} \\times 2\\pi r\\), so it is proportional to \\(\\theta r\\).\n\\((1 - 20\\%)\\theta \\times (1 + k\\%)r = \\theta r\\)\n\\(1 + k\\% = \\frac{1}{0.8} = 1.25\\), so \\(k = 25\\) (C)"
      },
      {
        id: "a1-me-4",
        type: "Mensurations",
        question: "The angle of a sector is decreased by 60% and its radius is increased by k%. If the arc length of the sector remains unchanged, find the value of \\(k\\).\nA. \\(150\\)\nB. \\(60\\)\nC. \\(40\\)\nD. \\(90\\)",
        answer: "A",
        steps: "Arc length is proportional to \\(\\theta r\\).\n\\((1 - 60\\%)\\theta \\times (1 + k\\%)r = \\theta r\\)\n\\(1 + k\\% = \\frac{1}{0.4} = 2.5\\), so \\(k = 150\\) (A)"
      },
      {
        id: "a1-me-5",
        type: "Mensurations",
        question: "A solid right circular cone has base radius \\(5\\text{ cm}\\) and height \\(12\\text{ cm}\\). Its curved surface area is\nA. \\(60\\pi\\text{ cm}^{2}\\)\nB. \\(100\\pi\\text{ cm}^{2}\\)\nC. \\(90\\pi\\text{ cm}^{2}\\)\nD. \\(65\\pi\\text{ cm}^{2}\\)",
        answer: "D",
        steps: "Slant height \\(l = \\sqrt{5^{2} + 12^{2}} = 13\\text{ cm}\\)\nCurved surface area \\(= \\pi rl = \\pi(5)(13) = 65\\pi\\text{ cm}^{2}\\) (D)"
      },
      {
        id: "a1-me-6",
        type: "Mensurations",
        question: "A solid right circular cone has base radius \\(8\\text{ cm}\\) and height \\(15\\text{ cm}\\). Its total surface area is\nA. \\(184\\pi\\text{ cm}^{2}\\)\nB. \\(136\\pi\\text{ cm}^{2}\\)\nC. \\(200\\pi\\text{ cm}^{2}\\)\nD. \\(400\\pi\\text{ cm}^{2}\\)",
        answer: "C",
        steps: "Slant height \\(l = \\sqrt{8^{2} + 15^{2}} = 17\\text{ cm}\\)\nTotal surface area \\(= \\pi rl + \\pi r^{2} = \\pi(8)(17) + \\pi(8)^{2} = 200\\pi\\text{ cm}^{2}\\) (C)"
      },
      {
        id: "a1-me-7",
        type: "Mensurations",
        question: "Two similar solids have total surface areas in the ratio \\(4 : 9\\). The ratio of their volumes is\nA. \\(2 : 3\\)\nB. \\(8 : 27\\)\nC. \\(4 : 9\\)\nD. \\(16 : 81\\)",
        answer: "B",
        steps: "For similar solids, (ratio of surface areas) \\(=\\) (ratio of corresponding lengths)\\(^{2}\\).\nRatio of lengths \\(= \\sqrt{4} : \\sqrt{9} = 2 : 3\\)\nRatio of volumes \\(=\\) (ratio of lengths)\\(^{3} = 2^{3} : 3^{3} = 8 : 27\\) (B)"
      },
      {
        id: "a1-me-8",
        type: "Mensurations",
        question: "Two similar solids have total surface areas in the ratio \\(25 : 49\\). The ratio of their volumes is\nA. \\(125 : 343\\)\nB. \\(625 : 2401\\)\nC. \\(25 : 49\\)\nD. \\(5 : 7\\)",
        answer: "A",
        steps: "For similar solids, (ratio of surface areas) \\(=\\) (ratio of corresponding lengths)\\(^{2}\\).\nRatio of lengths \\(= \\sqrt{25} : \\sqrt{49} = 5 : 7\\)\nRatio of volumes \\(=\\) (ratio of lengths)\\(^{3} = 5^{3} : 7^{3} = 125 : 343\\) (A)"
      },
      // Geometry (Rectilinear)
      {
        id: "a1-ge-1",
        type: "Geometry (Rectilinear)",
        question: "Each interior angle of a regular polygon is \\(156^{\\circ}\\). The number of sides of the polygon is\nA. \\(17\\)\nB. \\(16\\)\nC. \\(15\\)\nD. \\(14\\)",
        answer: "C",
        steps: "Each exterior angle \\(= 180^{\\circ} - 156^{\\circ} = 24^{\\circ}\\)\nThe sum of the exterior angles of any convex polygon is \\(360^{\\circ}\\).\nNumber of sides \\(= \\frac{360^{\\circ}}{24^{\\circ}} = 15\\) (C)"
      },
      {
        id: "a1-ge-2",
        type: "Geometry (Rectilinear)",
        question: "Each exterior angle of a regular polygon is \\(18^{\\circ}\\). The number of diagonals of the polygon is\nA. \\(340\\)\nB. \\(170\\)\nC. \\(180\\)\nD. \\(190\\)",
        answer: "B",
        steps: "Number of sides \\(= \\frac{360^{\\circ}}{18^{\\circ}} = 20\\)\nFrom each vertex, \\(n - 3 = 17\\) diagonals can be drawn, and each diagonal is counted twice.\nNumber of diagonals \\(= \\frac{20 \\times 17}{2} = 170\\) (B)"
      },
      {
        id: "a1-ge-3",
        type: "Geometry (Rectilinear)",
        question: "In \\(\\triangle ABC\\), \\(AB = AC\\), \\(\\angle A = (3x - 6)^{\\circ}\\) and \\(\\angle B = (x + 18)^{\\circ}\\). Find \\(\\angle C\\).\nA. \\(48^{\\circ}\\)\nB. \\(30^{\\circ}\\)\nC. \\(84^{\\circ}\\)\nD. \\(132^{\\circ}\\)",
        answer: "A",
        steps: "Since \\(AB = AC\\), \\(\\angle B = \\angle C\\) (base angles of an isosceles triangle).\nAngle sum of a triangle: \\((3x - 6) + 2(x + 18) = 180\\)\n\\(5x + 30 = 180\\), so \\(x = 30\\)\n\\(\\angle C = \\angle B = 30 + 18 = 48^{\\circ}\\) (A)"
      },
      {
        id: "a1-ge-4",
        type: "Geometry (Rectilinear)",
        question: "In \\(\\triangle ABC\\), \\(AB = AC\\), \\(\\angle A = (3x + 10)^{\\circ}\\) and \\(\\angle B = (x + 20)^{\\circ}\\). Find \\(\\angle A\\).\nA. \\(92^{\\circ}\\)\nB. \\(26^{\\circ}\\)\nC. \\(46^{\\circ}\\)\nD. \\(88^{\\circ}\\)",
        answer: "D",
        steps: "Since \\(AB = AC\\), \\(\\angle B = \\angle C\\) (base angles of an isosceles triangle).\nAngle sum of a triangle: \\((3x + 10) + 2(x + 20) = 180\\)\n\\(5x + 50 = 180\\), so \\(x = 26\\)\n\\(\\angle A = 3(26) + 10 = 88^{\\circ}\\) (D)"
      },
      {
        id: "a1-ge-5",
        type: "Geometry (Rectilinear)",
        question: "The side of a rhombus is \\(13\\text{ cm}\\) and one of its diagonals is \\(10\\text{ cm}\\) long. The area of the rhombus is\nA. \\(65\\text{ cm}^{2}\\)\nB. \\(120\\text{ cm}^{2}\\)\nC. \\(240\\text{ cm}^{2}\\)\nD. \\(130\\text{ cm}^{2}\\)",
        answer: "B",
        steps: "The diagonals of a rhombus bisect each other at right angles.\nHalf of the other diagonal \\(= \\sqrt{13^{2} - 5^{2}} = 12\\text{ cm}\\), so the other diagonal is \\(24\\text{ cm}\\).\nArea \\(= \\frac{1}{2} \\times 10 \\times 24 = 120\\text{ cm}^{2}\\) (B)"
      },
      {
        id: "a1-ge-6",
        type: "Geometry (Rectilinear)",
        question: "The side of a rhombus is \\(17\\text{ cm}\\) and one of its diagonals is \\(16\\text{ cm}\\) long. The area of the rhombus is\nA. \\(480\\text{ cm}^{2}\\)\nB. \\(136\\text{ cm}^{2}\\)\nC. \\(240\\text{ cm}^{2}\\)\nD. \\(272\\text{ cm}^{2}\\)",
        answer: "C",
        steps: "The diagonals of a rhombus bisect each other at right angles.\nHalf of the other diagonal \\(= \\sqrt{17^{2} - 8^{2}} = 15\\text{ cm}\\), so the other diagonal is \\(30\\text{ cm}\\).\nArea \\(= \\frac{1}{2} \\times 16 \\times 30 = 240\\text{ cm}^{2}\\) (C)"
      },
      {
        id: "a1-ge-7",
        type: "Geometry (Rectilinear)",
        question: "In \\(\\triangle ABC\\), \\(D\\) and \\(E\\) are points on \\(AB\\) and \\(AC\\) respectively such that \\(DE \\parallel BC\\) and \\(AD : DB = 2 : 3\\). Find (area of \\(\\triangle ADE\\)) : (area of trapezium \\(DBCE\\)).\nA. \\(4 : 21\\)\nB. \\(4 : 25\\)\nC. \\(2 : 3\\)\nD. \\(4 : 9\\)",
        answer: "A",
        steps: "\\(AD : AB = 2 : 5\\), and \\(\\triangle ADE \\sim \\triangle ABC\\) (since \\(DE \\parallel BC\\)).\nArea of \\(\\triangle ADE\\) : area of \\(\\triangle ABC = 2^{2} : 5^{2} = 4 : 25\\)\nArea of trapezium \\(DBCE\\) \\(= 25 - 4 = 21\\) (in the same units)\nRequired ratio \\(= 4 : 21\\) (A)"
      },
      {
        id: "a1-ge-8",
        type: "Geometry (Rectilinear)",
        question: "In \\(\\triangle ABC\\), \\(D\\) and \\(E\\) are points on \\(AB\\) and \\(AC\\) respectively such that \\(DE \\parallel BC\\) and \\(AD : DB = 3 : 2\\). Find (area of \\(\\triangle ADE\\)) : (area of trapezium \\(DBCE\\)).\nA. \\(9 : 25\\)\nB. \\(9 : 4\\)\nC. \\(3 : 2\\)\nD. \\(9 : 16\\)",
        answer: "D",
        steps: "\\(AD : AB = 3 : 5\\), and \\(\\triangle ADE \\sim \\triangle ABC\\) (since \\(DE \\parallel BC\\)).\nArea of \\(\\triangle ADE\\) : area of \\(\\triangle ABC = 3^{2} : 5^{2} = 9 : 25\\)\nArea of trapezium \\(DBCE\\) \\(= 25 - 9 = 16\\) (in the same units)\nRequired ratio \\(= 9 : 16\\) (D)"
      },
      // Functions (continued)
      {
        id: "a1-fn-9",
        type: "Functions",
        question: "Let \\(f(x) = 3^{x}\\). Then \\(f(x + 1) - f(x) =\\)\nA. \\(2\\)\nB. \\(3\\)\nC. \\(3 \\cdot 3^{x}\\)\nD. \\(3^{x + 1}\\)\nE. \\(2 \\cdot 3^{x}\\)",
        answer: "E",
        steps: "\\(f(x + 1) - f(x) = 3^{x + 1} - 3^{x}\\)\n\\(= 3 \\cdot 3^{x} - 3^{x} = 2 \\cdot 3^{x}\\) (E)"
      },
      {
        id: "a1-fn-10",
        type: "Functions",
        question: "A function \\(f(x)\\) is called an even function if \\(f(x) = f(-x)\\). Which of the following functions is/are even functions?\nI. \\(f_{1}(x) = \\frac{1}{x^{3}}\\)\nII. \\(f_{2}(x) = x^{6}\\)\nIII. \\(f_{3}(x) = x^{2} + 1\\)\nA. I only\nB. II only\nC. III only\nD. I and II only\nE. II and III only",
        answer: "E",
        steps: "\\(f_{1}(-x) = \\frac{1}{(-x)^{3}} = -\\frac{1}{x^{3}} = -f_{1}(x)\\), so \\(f_{1}\\) is odd, not even.\n\\(f_{2}(-x) = (-x)^{6} = x^{6} = f_{2}(x)\\), so \\(f_{2}\\) is even.\n\\(f_{3}(-x) = (-x)^{2} + 1 = x^{2} + 1 = f_{3}(x)\\), so \\(f_{3}\\) is even.\nOnly II and III are even functions. (E)"
      },
      {
        id: "a1-fn-11",
        type: "Functions",
        question: "Let \\(f(x) = \\log_{10} 3x - 2x\\). Then \\(f(x + 1) - f(x) =\\)\nA. \\(\\log_{10} 3 - 2\\)\nB. \\(\\log_{10}\\frac{x + 1}{100x}\\)\nC. \\(\\log_{10}\\frac{x + 1}{x} - 4x\\)\nD. \\(\\log_{10}\\frac{x + 1}{x}\\)\nE. \\(\\log_{10}\\frac{100(x + 1)}{x}\\)",
        answer: "B",
        steps: "\\(f(x + 1) - f(x) = \\log_{10} 3(x + 1) - 2(x + 1) - \\log_{10} 3x + 2x\\)\n\\(= \\log_{10}\\frac{3(x + 1)}{3x} - 2 = \\log_{10}\\frac{x + 1}{x} - \\log_{10} 100\\)\n\\(= \\log_{10}\\frac{x + 1}{100x}\\) (B)"
      },
      {
        id: "a1-fn-12",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} + 3\\). Then \\(f(x - 1) =\\)\nA. \\(x^{2} - 2x + 4\\)\nB. \\(x^{2} + 4\\)\nC. \\(x^{2} + 2\\)\nD. \\(x^{2} - 2x + 3\\)\nE. \\(x^{2} - 2x\\)",
        answer: "A",
        steps: "\\(f(x - 1) = (x - 1)^{2} + 3\\)\n\\(= x^{2} - 2x + 1 + 3 = x^{2} - 2x + 4\\) (A)"
      },
      {
        id: "a1-fn-13",
        type: "Functions",
        question: "Let \\(f(x) = 5 + 3^{x}\\). Then \\(f(2x) - f(x) =\\)\nA. \\(3^{2x}\\)\nB. \\(3^{x}(3^{x} + 1)\\)\nC. \\(5 + 3^{x}\\)\nD. \\(3^{x}\\)\nE. \\(3^{x}(3^{x} - 1)\\)",
        answer: "E",
        steps: "\\(f(2x) - f(x) = (5 + 3^{2x}) - (5 + 3^{x})\\)\n\\(= 3^{2x} - 3^{x} = 3^{x}(3^{x} - 1)\\) (E)"
      },
      {
        id: "a1-fn-14",
        type: "Functions",
        question: "Let \\(f(n) = \\frac{1}{2}n(n + 3)\\). Then \\(f(n + 1) - f(n) =\\)\nA. \\(f(n)\\)\nB. \\(\\frac{n + 2}{2}\\)\nC. \\(f(1)\\)\nD. \\(2\\)\nE. \\(n + 2\\)",
        answer: "E",
        steps: "\\(f(n + 1) = \\frac{1}{2}(n + 1)(n + 4) = \\frac{1}{2}(n^{2} + 5n + 4)\\)\n\\(f(n + 1) - f(n) = \\frac{1}{2}(n^{2} + 5n + 4) - \\frac{1}{2}(n^{2} + 3n) = \\frac{1}{2}(2n + 4) = n + 2\\) (E)"
      },
      {
        id: "a1-fn-15",
        type: "Functions",
        question: "Let \\(f(x) = 2x - \\frac{1}{x}\\). Then \\(f(x) - f\\left(\\frac{1}{x}\\right) =\\)\nA. \\(3 - x\\)\nB. \\(3\\left(x - \\frac{1}{x}\\right)\\)\nC. \\(3x\\)\nD. \\(0\\)\nE. \\(-\\frac{3}{x}\\)",
        answer: "B",
        steps: "\\(f\\left(\\frac{1}{x}\\right) = \\frac{2}{x} - x\\)\n\\(f(x) - f\\left(\\frac{1}{x}\\right) = 2x - \\frac{1}{x} - \\frac{2}{x} + x = 3x - \\frac{3}{x} = 3\\left(x - \\frac{1}{x}\\right)\\) (B)"
      },
      {
        id: "a1-fn-16",
        type: "Functions",
        question: "Let \\(f(x) = 10^{3x}\\). Then \\(f(5y) =\\)\nA. \\(15y\\)\nB. \\(10^{5y}\\)\nC. \\(10^{3 + 5y}\\)\nD. \\(30^{5y}\\)\nE. \\(10^{15y}\\)",
        answer: "E",
        steps: "\\(f(5y) = 10^{3(5y)} = 10^{15y}\\) (E)"
      },
      {
        id: "a1-fn-17",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} + 4x\\). Then \\(f(x - 1) =\\)\nA. \\(x^{2} + 2x - 3\\)\nB. \\(x^{2} - 3\\)\nC. \\(x^{2} + 4x - 1\\)\nD. \\(x^{2} + 4x\\)\nE. \\(x^{2} + 6x - 3\\)",
        answer: "A",
        steps: "\\(f(x - 1) = (x - 1)^{2} + 4(x - 1)\\)\n\\(= x^{2} - 2x + 1 + 4x - 4 = x^{2} + 2x - 3\\) (A)"
      },
      {
        id: "a1-fn-18",
        type: "Functions",
        question: "Let \\(f(x) = \\frac{x}{1 + x}\\). Then \\(f\\left(\\frac{1}{x}\\right)f(-x) =\\)\nA. \\(\\frac{1 + x}{1 - x}\\)\nB. \\(\\frac{x}{1 - x^{2}}\\)\nC. \\(-\\frac{1}{2}\\)\nD. \\(\\frac{x}{x^{2} - 1}\\)\nE. \\(-1\\)",
        answer: "D",
        steps: "\\(f\\left(\\frac{1}{x}\\right) = \\frac{\\frac{1}{x}}{1 + \\frac{1}{x}} = \\frac{1}{x + 1}\\) and \\(f(-x) = \\frac{-x}{1 - x}\\)\n\\(f\\left(\\frac{1}{x}\\right)f(-x) = \\frac{1}{x + 1} \\cdot \\frac{-x}{1 - x} = \\frac{-x}{1 - x^{2}} = \\frac{x}{x^{2} - 1}\\) (D)"
      },
      {
        id: "a1-fn-19",
        type: "Functions",
        question: "Let \\(f(x) = 2x^{2} + bx + 5\\). If \\(f(x) = f(-x)\\), then \\(f(-4) =\\)\nA. \\(0\\)\nB. \\(5\\)\nC. \\(-27\\)\nD. \\(32\\)\nE. \\(37\\)",
        answer: "E",
        steps: "\\(f(x) = f(-x)\\Rightarrow 2x^{2} + bx + 5 = 2x^{2} - bx + 5\\Rightarrow 2bx = 0\\), so \\(b = 0\\)\n\\(f(-4) = 2(-4)^{2} + 5 = 37\\) (E)"
      },
      {
        id: "a1-fn-20",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} + 5x - 4\\). Then \\(f(a) + f(-a) =\\)\nA. \\(2a^{2} - 8\\)\nB. \\(2a^{2}\\)\nC. \\(-8\\)\nD. \\(-10a\\)\nE. \\(10a\\)",
        answer: "A",
        steps: "\\(f(a) + f(-a) = (a^{2} + 5a - 4) + (a^{2} - 5a - 4)\\)\n\\(= 2a^{2} - 8\\) (A)"
      },
      {
        id: "a1-fn-21",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} - 4\\). Then \\(f(a + 1) =\\)\nA. \\(a^{2} - 4\\)\nB. \\(a^{2} + 2a - 3\\)\nC. \\(a^{2} - 3\\)\nD. \\(a^{2} + 2a - 5\\)\nE. \\(a^{2} + 2a + 1\\)",
        answer: "B",
        steps: "\\(f(a + 1) = (a + 1)^{2} - 4\\)\n\\(= a^{2} + 2a + 1 - 4 = a^{2} + 2a - 3\\) (B)"
      },
      {
        id: "a1-fn-22",
        type: "Functions",
        question: "Let \\(f(x) = 2x^{2} + ax - 9\\). If \\(f(-1) = 0\\), find \\(f(-3)\\).\nA. \\(30\\)\nB. \\(4\\)\nC. \\(48\\)\nD. \\(-12\\)\nE. \\(18\\)",
        answer: "A",
        steps: "\\(f(-1) = 2 - a - 9 = 0\\), so \\(a = -7\\)\n\\(f(x) = 2x^{2} - 7x - 9\\), hence \\(f(-3) = 2(9) + 21 - 9 = 30\\) (A)"
      },
      {
        id: "a1-fn-23",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} - x - 8\\). If \\(f(k) = k\\), then \\(k =\\)\nA. \\(2\\)\nB. \\(-4 \\text{ or } 2\\)\nC. \\(\\pm 2\\sqrt{2}\\)\nD. \\(-2 \\text{ or } 4\\)",
        answer: "D",
        steps: "\\(f(k) = k\\Rightarrow k^{2} - k - 8 = k\\), i.e. \\(k^{2} - 2k - 8 = 0\\)\n\\((k + 2)(k - 4) = 0\\), so \\(k = -2\\) or \\(4\\) (D)"
      },
      {
        id: "a1-fn-24",
        type: "Functions",
        question: "Let \\(f(x) = 3x^{2} + kx - 2\\) and \\(f(-2) = f\\left(\\frac{1}{3}\\right)\\). Then \\(k =\\)\nA. \\(-5\\)\nB. \\(\\frac{35}{3}\\)\nC. \\(\\frac{7}{5}\\)\nD. \\(5\\)",
        answer: "D",
        steps: "\\(f(-2) = 12 - 2k - 2 = 10 - 2k\\) and \\(f\\left(\\frac{1}{3}\\right) = \\frac{1}{3} + \\frac{k}{3} - 2 = \\frac{k}{3} - \\frac{5}{3}\\)\n\\(10 - 2k = \\frac{k}{3} - \\frac{5}{3}\\Rightarrow 30 - 6k = k - 5\\Rightarrow 7k = 35\\), so \\(k = 5\\) (D)"
      },
      {
        id: "a1-fn-25",
        type: "Functions",
        question: "Let \\(f(x) = 3x^{2} - 5x + 2\\). Then \\(f(1) - f(-1) =\\)\nA. \\(4\\)\nB. \\(-10\\)\nC. \\(-4\\)\nD. \\(10\\)",
        answer: "B",
        steps: "\\(f(1) = 3 - 5 + 2 = 0\\) and \\(f(-1) = 3 + 5 + 2 = 10\\)\n\\(f(1) - f(-1) = 0 - 10 = -10\\) (B)"
      },
      {
        id: "a1-fn-26",
        type: "Functions",
        question: "Let \\(f(x) = \\frac{x}{2 + x}\\). Then \\(f(4)f\\left(\\frac{1}{4}\\right) =\\)\nA. \\(\\frac{2}{3}\\)\nB. \\(1\\)\nC. \\(\\frac{2}{27}\\)\nD. \\(\\frac{1}{6}\\)",
        answer: "C",
        steps: "\\(f(4) = \\frac{4}{6} = \\frac{2}{3}\\) and \\(f\\left(\\frac{1}{4}\\right) = \\frac{\\frac{1}{4}}{2 + \\frac{1}{4}} = \\frac{1}{9}\\)\n\\(f(4)f\\left(\\frac{1}{4}\\right) = \\frac{2}{3} \\times \\frac{1}{9} = \\frac{2}{27}\\) (C)"
      },
      {
        id: "a1-fn-27",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} - ax + 3a\\), where \\(a\\) is a constant. If \\(f(-2) = 34\\), then \\(a =\\)\nA. \\(-14\\)\nB. \\(-6\\)\nC. \\(-34\\)\nD. \\(6\\)",
        answer: "D",
        steps: "\\(f(-2) = 4 + 2a + 3a = 4 + 5a = 34\\)\n\\(5a = 30\\), so \\(a = 6\\) (D)"
      },
      {
        id: "a1-fn-28",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} + kx + 5\\), where \\(k\\) is a constant. If \\(f(5) - f(2) = 39\\), then \\(k =\\)\nA. \\(6\\)\nB. \\(13\\)\nC. \\(18\\)\nD. \\(0\\)",
        answer: "A",
        steps: "\\(f(5) = 25 + 5k + 5 = 30 + 5k\\) and \\(f(2) = 4 + 2k + 5 = 9 + 2k\\)\n\\(f(5) - f(2) = 21 + 3k = 39\\), so \\(k = 6\\) (A)"
      },
      {
        id: "a1-fn-29",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} - 7x + c\\), where \\(c\\) is a constant. If \\(f(-2) = 15\\), then \\(c =\\)\nA. \\(0\\)\nB. \\(8\\)\nC. \\(29\\)\nD. \\(-3\\)",
        answer: "D",
        steps: "\\(f(-2) = 4 + 14 + c = 18 + c = 15\\)\n\\(c = -3\\) (D)"
      },
      {
        id: "a1-fn-30",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} - 5x + 13\\). Then \\(4f(3) - 5 =\\)\nA. \\(28\\)\nB. \\(51\\)\nC. \\(23\\)\nD. \\(7\\)",
        answer: "C",
        steps: "\\(f(3) = 9 - 15 + 13 = 7\\)\n\\(4f(3) - 5 = 28 - 5 = 23\\) (C)"
      },
      {
        id: "a1-fn-31",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} + 3x + k\\), where \\(k\\) is a constant. Find \\(f(6) - f(2)\\).\nA. \\(k + 54\\)\nB. \\(2k + 10\\)\nC. \\(k + 10\\)\nD. \\(44\\)",
        answer: "D",
        steps: "\\(f(6) = 36 + 18 + k = 54 + k\\) and \\(f(2) = 4 + 6 + k = 10 + k\\)\n\\(f(6) - f(2) = 44\\) (D)"
      },
      {
        id: "a1-fn-32",
        type: "Functions",
        question: "Let \\(k\\) be a constant. If \\(f(x) = 3x^{2} - 4x + k\\), then \\(f(3) - f(-3) =\\)\nA. \\(-24\\)\nB. \\(0\\)\nC. \\(18\\)\nD. \\(2k\\)",
        answer: "A",
        steps: "\\(f(3) = 27 - 12 + k = 15 + k\\) and \\(f(-3) = 27 + 12 + k = 39 + k\\)\n\\(f(3) - f(-3) = -24\\) (A)"
      },
      {
        id: "a1-fn-33",
        type: "Functions",
        question: "Let \\(f(x) = 2x^{2} - 3x + 4\\). Then \\(f(3m + 1) =\\)\nA. \\(18m^{2} + 9m + 3\\)\nB. \\(18m^{2} + 3m + 3\\)\nC. \\(6m^{2} + 3m + 3\\)\nD. \\(18m^{2} + 12m + 3\\)",
        answer: "B",
        steps: "\\(f(3m + 1) = 2(3m + 1)^{2} - 3(3m + 1) + 4\\)\n\\(= 2(9m^{2} + 6m + 1) - 9m - 3 + 4 = 18m^{2} + 3m + 3\\) (B)"
      },
      {
        id: "a1-fn-34",
        type: "Functions",
        question: "Let \\(c\\) be a constant. If \\(f(x) = x^{3} + cx^{2} - c\\), then \\(f(c) + f(-c) =\\)\nA. \\(2c^{3} - 2c\\)\nB. \\(-2c\\)\nC. \\(0\\)\nD. \\(-2c^{3} + 2c\\)",
        answer: "A",
        steps: "\\(f(c) = c^{3} + c^{3} - c = 2c^{3} - c\\) and \\(f(-c) = -c^{3} + c^{3} - c = -c\\)\n\\(f(c) + f(-c) = 2c^{3} - 2c\\) (A)"
      },
      {
        id: "a1-fn-35",
        type: "Functions",
        question: "Let \\(f(x) = 4x^{2} + x - 3\\). If \\(k\\) is a constant, then \\(f(2 + k) - f(2 - k) =\\)\nA. \\(34k\\)\nB. \\(8k^{2} - 3k\\)\nC. \\(8k^{2} + 2k\\)\nD. \\(17k\\)",
        answer: "A",
        steps: "\\(f(2 + k) = 4(4 + 4k + k^{2}) + 2 + k - 3 = 4k^{2} + 17k + 15\\)\n\\(f(2 - k) = 4(4 - 4k + k^{2}) + 2 - k - 3 = 4k^{2} - 17k + 15\\)\n\\(f(2 + k) - f(2 - k) = 34k\\) (A)"
      },
      {
        id: "a1-fn-36",
        type: "Functions",
        question: "Let \\(f(x) = (x + h)(x - 4) + k\\), where \\(h\\) and \\(k\\) are constants. If \\(f(0) = f(9) = 2\\), find \\(k\\).\nA. \\(38\\)\nB. \\(-8\\)\nC. \\(20\\)\nD. \\(-18\\)",
        answer: "D",
        steps: "\\(f(0) = -4h + k = 2\\) and \\(f(9) = 5(9 + h) + k = 2\\), i.e. \\(45 + 5h + k = 2\\)\nSubtracting: \\(45 + 9h = 0\\), so \\(h = -5\\)\n\\(k = 2 + 4h = -18\\) (D)"
      },
      {
        id: "a1-fn-37",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} - 2x + 3\\). If \\(k\\) is a constant, which of the following must be true?\nA. \\(f(k) = f(-k)\\)\nB. \\(f(k) = f(2 - k)\\)\nC. \\(f(k + 1) = f(k) + f(1)\\)\nD. \\(f(k - 1) = f(k) - f(1)\\)",
        answer: "B",
        steps: "The graph of \\(f\\) has axis of symmetry \\(x = 1\\), so \\(f(k) = f(2 - k)\\) for every \\(k\\).\nCheck: \\(f(2 - k) = (2 - k)^{2} - 2(2 - k) + 3 = k^{2} - 2k + 3 = f(k)\\) (B)"
      },
      {
        id: "a1-fn-38",
        type: "Functions",
        question: "Let \\(g(x) = 17 - 4x^{2}\\). If \\(m\\) is a constant, find \\(g(1 - 2m)\\).\nA. \\(13 - 16m^{2}\\)\nB. \\(13 + 16m - 16m^{2}\\)\nC. \\(13 - 16m - 16m^{2}\\)\nD. \\(13 + 16m^{2}\\)",
        answer: "B",
        steps: "\\(g(1 - 2m) = 17 - 4(1 - 2m)^{2}\\)\n\\(= 17 - 4(1 - 4m + 4m^{2}) = 13 + 16m - 16m^{2}\\) (B)"
      },
      {
        id: "a1-fn-39",
        type: "Functions",
        question: "Let \\(g(x) = (x + 2)(x + a)\\), where \\(a\\) is a constant. If \\(g(1) = g(3)\\), then \\(g(a) =\\)\nA. \\(-6\\)\nB. \\(48\\)\nC. \\(24\\)\nD. \\(0\\)",
        answer: "B",
        steps: "\\(g(1) = 3(1 + a)\\) and \\(g(3) = 5(3 + a)\\); \\(3 + 3a = 15 + 5a\\), so \\(a = -6\\)\n\\(g(a) = g(-6) = (-4)(-12) = 48\\) (B)"
      },
      {
        id: "a1-fn-40",
        type: "Functions",
        question: "Let \\(f(x) = x^{2} + 5x + k\\), where \\(k\\) is a constant. If \\(f(3) + f(-3) = 26\\), find \\(k\\).\nA. \\(-8\\)\nB. \\(4\\)\nC. \\(8\\)\nD. \\(-4\\)",
        answer: "B",
        steps: "\\(f(3) + f(-3) = (9 + 15 + k) + (9 - 15 + k) = 18 + 2k\\)\n\\(18 + 2k = 26\\), so \\(k = 4\\) (B)"
      },
      {
        id: "a1-fn-41",
        type: "Functions",
        question: "Let \\(f(x) = (x + d)(x - 1) + 8x\\), where \\(d\\) is a constant. If \\(f(2 + d) = 0\\), then \\(d =\\)\nA. \\(-3\\)\nB. \\(2\\)\nC. \\(-2\\)\nD. \\(3\\)",
        answer: "A",
        steps: "\\(f(2 + d) = (2 + 2d)(1 + d) + 8(2 + d) = 2d^{2} + 12d + 18 = 0\\)\n\\(d^{2} + 6d + 9 = 0\\), i.e. \\((d + 3)^{2} = 0\\), so \\(d = -3\\) (A)"
      },
      // Subject of Formulas (continued)
      {
        id: "a1-sf-9",
        type: "Subject of Formulas",
        question: "If \\(3p = 8q\\), then \\(\\frac{3p^{2}}{8q^{2}} =\\)\nA. \\(\\frac{8}{3}\\)\nB. \\(\\left(\\frac{8}{3}\\right)^{2}\\)\nC. \\(\\left(\\frac{3}{8}\\right)^{2}\\)\nD. \\(1\\)\nE. \\(\\frac{3}{8}\\)",
        answer: "A",
        steps: "\\(3p = 8q\\Rightarrow \\frac{p}{q} = \\frac{8}{3}\\)\n\\(\\frac{3p^{2}}{8q^{2}} = \\frac{3}{8}\\left(\\frac{p}{q}\\right)^{2} = \\frac{3}{8} \\times \\frac{64}{9} = \\frac{8}{3}\\) (A)"
      },
      {
        id: "a1-sf-10",
        type: "Subject of Formulas",
        question: "If \\(\\frac{1}{x} = 2a + b\\) and \\(\\frac{1}{y} = 2a - b\\), then \\(x + y =\\)\nA. \\(\\frac{4a}{4a^{2} - b^{2}}\\)\nB. \\(-\\frac{4a}{4a^{2} - b^{2}}\\)\nC. \\(\\frac{4a^{2} - b^{2}}{4a}\\)\nD. \\(-\\frac{4a^{2} - b^{2}}{4a}\\)\nE. \\(\\frac{4}{a}\\)",
        answer: "A",
        steps: "\\(x = \\frac{1}{2a + b}\\) and \\(y = \\frac{1}{2a - b}\\)\n\\(x + y = \\frac{(2a - b) + (2a + b)}{(2a + b)(2a - b)} = \\frac{4a}{4a^{2} - b^{2}}\\) (A)"
      },
      {
        id: "a1-sf-11",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{2y + (n - 1)z}{n + 3}\\), then \\(n =\\)\nA. \\(\\frac{3x - 2y - z}{x + z}\\)\nB. \\(\\frac{3x - 2y + z}{x - z}\\)\nC. \\(\\frac{- 3 x + 2 y - z}{x - z}\\)\nD. \\(\\frac{2y - 3x + z}{x - z}\\)\nE. \\(\\frac{2y - 3x - z}{x + z}\\)",
        answer: "C",
        steps: "\\(x(n + 3) = 2y + (n - 1)z\\)\n\\(xn + 3x = 2y + nz - z\\)\n\\(n(x - z) = 2y - z - 3x\\)\n\\(n = \\frac{2y - 3x - z}{x - z}\\) (C)"
      },
      {
        id: "a1-sf-12",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{bx + ay + c}{a - by}\\), then \\(y =\\)\nA. \\(-\\frac{ax + bx + c}{a - bx}\\)\nB. \\(\\frac{ax + bx + c}{a + bx}\\)\nC. \\(-\\frac{ax - bx - c}{a + bx}\\)\nD. \\(\\frac{ax - bx - c}{a + bx}\\)\nE. \\(\\frac{ax - bx - c}{a - bx}\\)",
        answer: "D",
        steps: "\\(x(a - by) = bx + ay + c\\)\n\\(ax - bxy = bx + ay + c\\)\nCollect the terms in \\(y\\): \\(ax - bx - c = ay + bxy = y(a + bx)\\)\n\\(y = \\frac{ax - bx - c}{a + bx}\\) (D)"
      },
      {
        id: "a1-sf-13",
        type: "Subject of Formulas",
        question: "If \\(H = K + \\frac{M}{\\pi(r^{2} + s^{2})^{n}}\\) and \\(r > 0\\), then \\(r =\\)\nA. \\(\\left[\\frac{M}{\\pi(H - K)}\\right]^{\\frac{n}{2}} - s\\)\nB. \\(\\left\\{\\left[\\frac{M}{\\pi(H - K)}\\right]^{-n} - s^{2}\\right\\}^{\\frac{1}{2}}\\)\nC. \\(\\left\\{\\left[\\frac{\\pi}{M(H - K)}\\right]^{\\frac{1}{n}} - s^{2}\\right\\}^{\\frac{1}{2}}\\)\nD. \\(\\left[\\frac{M}{\\pi(H - K)}\\right]^{\\frac{1}{2n}} - s\\)\nE. \\(\\left\\{\\left[\\frac{M}{\\pi(H - K)}\\right]^{\\frac{1}{n}} - s^{2}\\right\\}^{\\frac{1}{2}}\\)",
        answer: "E",
        steps: "\\(H - K = \\frac{M}{\\pi(r^{2} + s^{2})^{n}}\\Rightarrow (r^{2} + s^{2})^{n} = \\frac{M}{\\pi(H - K)}\\)\n\\(r^{2} + s^{2} = \\left[\\frac{M}{\\pi(H - K)}\\right]^{\\frac{1}{n}}\\)\nSince \\(r > 0\\): \\(r = \\left\\{\\left[\\frac{M}{\\pi(H - K)}\\right]^{\\frac{1}{n}} - s^{2}\\right\\}^{\\frac{1}{2}}\\) (E)"
      },
      {
        id: "a1-sf-14",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{1}{\\frac{3}{y} + \\frac{1}{z}}\\), then \\(y =\\)\nA. \\(\\frac{3xz}{z + x}\\)\nB. \\(\\frac{xz}{3z - x}\\)\nC. \\(\\frac{3xz}{z - x}\\)\nD. \\(\\frac{3x}{z}\\)\nE. \\(\\frac{3z}{xz - z}\\)",
        answer: "C",
        steps: "\\(\\frac{1}{x} = \\frac{3}{y} + \\frac{1}{z}\\)\n\\(\\frac{3}{y} = \\frac{1}{x} - \\frac{1}{z} = \\frac{z - x}{xz}\\)\n\\(y = \\frac{3xz}{z - x}\\) (C)"
      },
      {
        id: "a1-sf-15",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{y^{3}}{\\sqrt{a^{2} + bz}}\\), then \\(z =\\)\nA. \\(\\frac{1}{b}\\left(\\frac{y^{6}}{x^{2}} - a^{2}\\right)\\)\nB. \\(\\frac{1}{b}\\left(\\frac{y^{3}}{x} - a^{2}\\right)\\)\nC. \\(\\frac{1}{b}\\left(\\frac{x^{2}}{y^{6}} - a^{2}\\right)\\)\nD. \\(\\frac{1}{b}\\left(a^{2} - \\frac{y^{6}}{x^{2}}\\right)\\)\nE. \\(\\frac{1}{b}\\left(a^{2} - \\frac{x^{2}}{y^{6}}\\right)\\)",
        answer: "A",
        steps: "\\(x^{2} = \\frac{y^{6}}{a^{2} + bz}\\Rightarrow a^{2} + bz = \\frac{y^{6}}{x^{2}}\\)\n\\(bz = \\frac{y^{6}}{x^{2}} - a^{2}\\)\n\\(z = \\frac{1}{b}\\left(\\frac{y^{6}}{x^{2}} - a^{2}\\right)\\) (A)"
      },
      {
        id: "a1-sf-16",
        type: "Subject of Formulas",
        question: "If \\(a = \\frac{3b(y - 2x)}{x - 4y}\\), then \\(y =\\)\nA. \\(\\frac{- a x + 6 b x}{4 a + 3 b}\\)\nB. \\(\\frac{a x - 6 b x}{4 a + 3 b}\\)\nC. \\(\\frac{x \\left(a + 6 b\\right)}{4 a - 3 b}\\)\nD. \\(- \\frac{x \\left(a + 6 b\\right)}{4 a + 3 b}\\)\nE. \\(\\frac{x \\left(a + 6 b\\right)}{4 a + 3 b}\\)",
        answer: "E",
        steps: "\\(a(x - 4y) = 3b(y - 2x)\\)\n\\(ax - 4ay = 3by - 6bx\\)\n\\(ax + 6bx = 3by + 4ay\\), i.e. \\((a + 6b)x = (4a + 3b)y\\)\n\\(y = \\frac{(a + 6b)x}{4a + 3b}\\) (E)"
      },
      {
        id: "a1-sf-17",
        type: "Subject of Formulas",
        question: "If \\(\\frac{ab}{ka + b} = \\frac{2}{k}\\), then \\(b =\\)\nA. \\(\\frac{2a}{a - k}\\)\nB. \\(\\frac{2ka}{ka + 2}\\)\nC. \\(\\frac{2ka}{2 - ka}\\)\nD. \\(\\frac{2k^{2}a}{a - 2k}\\)\nE. \\(\\frac{2ka}{ka - 2}\\)",
        answer: "E",
        steps: "\\(kab = 2(ka + b) = 2ka + 2b\\)\n\\(kab - 2b = 2ka\\), i.e. \\(b(ka - 2) = 2ka\\)\n\\(b = \\frac{2ka}{ka - 2}\\) (E)"
      },
      {
        id: "a1-sf-18",
        type: "Subject of Formulas",
        question: "If \\(a - 2\\sqrt{b^{2} - c^{2}} = d\\), then \\(c =\\)\nA. \\(\\frac{a - d}{2} - b\\)\nB. \\(\\pm\\sqrt{b^{2} + \\frac{(a - d)^{2}}{4}}\\)\nC. \\(\\pm\\sqrt{b^{2} - \\frac{(a - d)^{2}}{4}}\\)\nD. \\(\\pm\\sqrt{b^{2} - (a - d)^{2}}\\)\nE. \\(\\pm\\sqrt{\\frac{(a - d)^{2}}{4} - b^{2}}\\)",
        answer: "C",
        steps: "\\(2\\sqrt{b^{2} - c^{2}} = a - d\\Rightarrow b^{2} - c^{2} = \\frac{(a - d)^{2}}{4}\\)\n\\(c^{2} = b^{2} - \\frac{(a - d)^{2}}{4}\\)\n\\(c = \\pm\\sqrt{b^{2} - \\frac{(a - d)^{2}}{4}}\\) (C)"
      },
      {
        id: "a1-sf-19",
        type: "Subject of Formulas",
        question: "If \\(1 + \\frac{2x - y}{2x + y} = a\\) (\\(a \\neq 0\\)), then \\(y =\\)\nA. \\(2x\\)\nB. \\(\\frac{x}{a}(4 - a)\\)\nC. \\(\\frac{2x}{a}(2 - a)\\)\nD. \\(\\frac{2x}{a}(1 - a)\\)\nE. \\(\\frac{2x}{a}(a - 2)\\)",
        answer: "C",
        steps: "\\(1 + \\frac{2x - y}{2x + y} = \\frac{(2x + y) + (2x - y)}{2x + y} = \\frac{4x}{2x + y} = a\\)\n\\(2x + y = \\frac{4x}{a}\\)\n\\(y = \\frac{4x}{a} - 2x = \\frac{2x}{a}(2 - a)\\) (C)"
      },
      {
        id: "a1-sf-20",
        type: "Subject of Formulas",
        question: "If \\(\\frac{1}{x} - \\frac{1}{y} = \\frac{1}{z}\\), \\(x = \\frac{1}{3}\\) and \\(z = \\frac{1}{5}\\), then \\(y =\\)\nA. \\(8\\)\nB. \\(-\\frac{1}{2}\\)\nC. \\(2\\)\nD. \\(-2\\)\nE. \\(\\frac{1}{2}\\)",
        answer: "B",
        steps: "\\(\\frac{1}{x} = 3\\) and \\(\\frac{1}{z} = 5\\)\n\\(3 - \\frac{1}{y} = 5\\Rightarrow \\frac{1}{y} = -2\\)\n\\(y = -\\frac{1}{2}\\) (B)"
      },
      {
        id: "a1-sf-21",
        type: "Subject of Formulas",
        question: "If \\(a = \\frac{b + 5cd}{b - 5cd}\\), then \\(c =\\)\nA. \\(\\frac{b(a + 1)}{a - 1}\\)\nB. \\(\\frac{b}{5d}\\)\nC. \\(\\frac{b(a - 1)}{5d(a + 1)}\\)\nD. \\(\\frac{a}{10d}\\)\nE. \\(\\frac{b(a - 1)}{10d}\\)",
        answer: "C",
        steps: "\\(a(b - 5cd) = b + 5cd\\)\n\\(ab - b = 5cd + 5acd = 5cd(a + 1)\\)\n\\(c = \\frac{b(a - 1)}{5d(a + 1)}\\) (C)"
      },
      {
        id: "a1-sf-22",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{1 - y}{2 + y}\\), then \\(y =\\)\nA. \\(\\frac{1 - 2x}{x + 1}\\)\nB. \\(\\frac{1 - 2x}{x - 1}\\)\nC. \\(\\frac{2x - 1}{x + 1}\\)\nD. \\(\\frac{1 + 2x}{x - 1}\\)\nE. \\(\\frac{1 - x}{2 + x}\\)",
        answer: "A",
        steps: "\\(x(2 + y) = 1 - y\\)\n\\(2x + xy = 1 - y\\)\n\\(xy + y = 1 - 2x\\), i.e. \\(y(x + 1) = 1 - 2x\\)\n\\(y = \\frac{1 - 2x}{x + 1}\\) (A)"
      },
      // Subject of Formulas (continued)
      {
        id: "a1-sf-23",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{ab - 2}{a + b}\\), then \\(b =\\)\nA. \\(\\frac{ax + 2}{a - x}\\)\nB. \\(\\frac{ax + 2}{a + x}\\)\nC. \\(\\frac{ax - 2}{a - x}\\)\nD. \\(\\frac{2 - ax}{a - x}\\)\nE. \\(\\frac{2 - ax}{a + x}\\)",
        answer: "A",
        steps: "\\(x(a + b) = ab - 2\\)\n\\(ax + bx = ab - 2\\)\n\\(ax + 2 = ab - bx = b(a - x)\\)\n\\(b = \\frac{ax + 2}{a - x}\\) (A)"
      },
      {
        id: "a1-sf-24",
        type: "Subject of Formulas",
        question: "If \\(y = \\sqrt{\\frac{2 + mx}{2 - mx}}\\), then \\(x =\\)\nA. \\(\\frac{y^{2} - 1}{m(y^{2} + 1)}\\)\nB. \\(\\frac{2(y^{2} + 1)}{m(y^{2} - 1)}\\)\nC. \\(\\frac{2(1 - y^{2})}{m(1 + y^{2})}\\)\nD. \\(\\frac{2(y^{2} - 1)}{m(y^{2} + 1)}\\)\nE. \\(\\frac{2(y - 1)}{m(y + 1)}\\)",
        answer: "D",
        steps: "\\(y^{2} = \\frac{2 + mx}{2 - mx}\\Rightarrow y^{2}(2 - mx) = 2 + mx\\)\n\\(2y^{2} - 2 = mx + mxy^{2} = mx(y^{2} + 1)\\)\n\\(x = \\frac{2(y^{2} - 1)}{m(y^{2} + 1)}\\) (D)"
      },
      {
        id: "a1-sf-25",
        type: "Subject of Formulas",
        question: "If \\(a = 2 - \\frac{3}{1 + b}\\), then \\(b =\\)\nA. \\(1 + \\frac{3}{2 - a}\\)\nB. \\(1 - \\frac{3}{2 - a}\\)\nC. \\(-1 + \\frac{3}{2 - a}\\)\nD. \\(1 - \\frac{3}{2 + a}\\)\nE. \\(-1 + \\frac{3}{2 + a}\\)",
        answer: "C",
        steps: "\\(\\frac{3}{1 + b} = 2 - a\\)\n\\(1 + b = \\frac{3}{2 - a}\\)\n\\(b = -1 + \\frac{3}{2 - a}\\) (C)"
      },
      {
        id: "a1-sf-26",
        type: "Subject of Formulas",
        question: "If \\(s = \\frac{n}{2}\\left[a + (n - 2)d\\right]\\), then \\(d =\\)\nA. \\(\\frac{2s - an}{n - 2}\\)\nB. \\(\\frac{2s - an}{n(n + 2)}\\)\nC. \\(\\frac{2(s - an)}{n(n - 2)}\\)\nD. \\(\\frac{as - n}{a(n - 2)}\\)\nE. \\(\\frac{2s - an}{n(n - 2)}\\)",
        answer: "E",
        steps: "\\(\\frac{2s}{n} = a + (n - 2)d\\)\n\\((n - 2)d = \\frac{2s}{n} - a = \\frac{2s - an}{n}\\)\n\\(d = \\frac{2s - an}{n(n - 2)}\\) (E)"
      },
      {
        id: "a1-sf-27",
        type: "Subject of Formulas",
        question: "If \\(y = \\frac{3x + 1}{x - 2}\\), then \\(x =\\)\nA. \\(\\frac{1 + 2y}{3 - y}\\)\nB. \\(\\frac{1 - 2y}{y - 3}\\)\nC. \\(\\frac{1 + 3y}{y + 2}\\)\nD. \\(\\frac{1 - 2y}{y + 3}\\)\nE. \\(\\frac{1 + 2y}{y - 3}\\)",
        answer: "E",
        steps: "\\(y(x - 2) = 3x + 1\\)\n\\(xy - 2y = 3x + 1\\)\n\\(xy - 3x = 1 + 2y\\), i.e. \\(x(y - 3) = 1 + 2y\\)\n\\(x = \\frac{1 + 2y}{y - 3}\\) (E)"
      },
      {
        id: "a1-sf-28",
        type: "Subject of Formulas",
        question: "If \\(\\frac{x + y}{xy} = 2\\), then \\(y =\\)\nA. \\(\\frac{x}{2x + 1}\\)\nB. \\(\\frac{x}{2x - 1}\\)\nC. \\(\\frac{x}{1 - 2x}\\)\nD. \\(\\frac{2x - 1}{x}\\)\nE. \\(\\frac{1 - 2x}{x}\\)",
        answer: "B",
        steps: "\\(x + y = 2xy\\)\n\\(x = 2xy - y = y(2x - 1)\\)\n\\(y = \\frac{x}{2x - 1}\\) (B)"
      },
      {
        id: "a1-sf-29",
        type: "Subject of Formulas",
        question: "If \\(S = \\pi r^{2} + 2\\pi rh\\), then \\(h =\\)\nA. \\(\\frac{S - r}{2\\pi}\\)\nB. \\(\\frac{S}{2\\pi r} - \\frac{r}{2}\\)\nC. \\(\\frac{S}{2\\pi r} - r\\)\nD. \\(\\frac{S}{2\\pi r} - \\pi r^{2}\\)\nE. \\(\\frac{S}{\\pi r} - \\frac{r}{2}\\)",
        answer: "B",
        steps: "\\(2\\pi rh = S - \\pi r^{2}\\)\n\\(h = \\frac{S - \\pi r^{2}}{2\\pi r} = \\frac{S}{2\\pi r} - \\frac{r}{2}\\) (B)"
      },
      {
        id: "a1-sf-30",
        type: "Subject of Formulas",
        question: "If \\(\\frac{a + 2x}{b - x} = \\frac{c}{d}\\) (\\(c \\neq -2d\\)), then \\(x =\\)\nA. \\(\\frac{bc - ad}{c - 2d}\\)\nB. \\(\\frac{bc + ad}{c + 2d}\\)\nC. \\(\\frac{ad - bc}{c - 2d}\\)\nD. \\(\\frac{bc - ad}{c + 2d}\\)\nE. \\(\\frac{ad - bc}{c + 2d}\\)",
        answer: "D",
        steps: "\\(d(a + 2x) = c(b - x)\\)\n\\(ad + 2dx = bc - cx\\)\n\\(2dx + cx = bc - ad\\), i.e. \\(x(c + 2d) = bc - ad\\)\n\\(x = \\frac{bc - ad}{c + 2d}\\) (D)"
      },
      // Subject of Formulas (continued)
      {
        id: "a1-sf-31",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{y(z + 2)}{4z}\\), then \\(z =\\)\nA. \\(\\frac{2y}{4x + y}\\)\nB. \\(\\frac{2y}{4x - y}\\)\nC. \\(\\frac{4x - y}{2y}\\)\nD. \\(\\frac{2}{4x - y}\\)\nE. \\(\\frac{-2y}{4x - y}\\)",
        answer: "B",
        steps: "\\(4xz = y(z + 2) = yz + 2y\\)\n\\(4xz - yz = 2y\\), i.e. \\(z(4x - y) = 2y\\)\n\\(z = \\frac{2y}{4x - y}\\) (B)"
      },
      {
        id: "a1-sf-32",
        type: "Subject of Formulas",
        question: "If \\(a = \\frac{2 - b}{2 + b}\\), then \\(b =\\)\nA. \\(\\frac{a - 1}{2}\\)\nB. \\(\\frac{2(1 - a)}{a + 1}\\)\nC. \\(\\frac{1 - a}{a + 1}\\)\nD. \\(\\frac{2(1 - a)}{a - 1}\\)\nE. \\(\\frac{2(a - 1)}{a + 1}\\)",
        answer: "B",
        steps: "\\(a(2 + b) = 2 - b\\)\n\\(2a + ab = 2 - b\\)\n\\(ab + b = 2 - 2a\\), i.e. \\(b(a + 1) = 2(1 - a)\\)\n\\(b = \\frac{2(1 - a)}{a + 1}\\) (B)"
      },
      {
        id: "a1-sf-33",
        type: "Subject of Formulas",
        question: "If \\(A = \\frac{h}{2}(a + 2b)\\), then \\(b =\\)\nA. \\(\\frac{A}{h} - a\\)\nB. \\(\\frac{2A - a}{h}\\)\nC. \\(\\frac{2A}{h} - a\\)\nD. \\(\\frac{A}{h} - \\frac{a}{2}\\)\nE. \\(\\frac{A}{h} - 2a\\)",
        answer: "D",
        steps: "\\(\\frac{2A}{h} = a + 2b\\)\n\\(2b = \\frac{2A}{h} - a\\)\n\\(b = \\frac{A}{h} - \\frac{a}{2}\\) (D)"
      },
      {
        id: "a1-sf-34",
        type: "Subject of Formulas",
        question: "If \\(a = 3 - \\frac{2}{1 + b}\\), then \\(b =\\)\nA. \\(\\frac{1 - a}{3 + a}\\)\nB. \\(\\frac{a - 1}{3 - a}\\)\nC. \\(\\frac{a - 1}{a - 3}\\)\nD. \\(\\frac{3 - a}{a - 1}\\)\nE. \\(\\frac{a + 1}{3 - a}\\)",
        answer: "B",
        steps: "\\(\\frac{2}{1 + b} = 3 - a\\), so \\(1 + b = \\frac{2}{3 - a}\\)\n\\(b = \\frac{2}{3 - a} - 1 = \\frac{2 - (3 - a)}{3 - a}\\)\n\\(b = \\frac{a - 1}{3 - a}\\) (B)"
      },
      {
        id: "a1-sf-35",
        type: "Subject of Formulas",
        question: "If \\(\\frac{x}{1 + x} = \\frac{a}{2 - a}\\), then \\(x =\\)\nA. \\(\\frac{a}{2 + 2a}\\)\nB. \\(a\\)\nC. \\(\\frac{2a}{1 - a}\\)\nD. \\(\\frac{a}{2 - 2a}\\)",
        answer: "D",
        steps: "\\(x(2 - a) = a(1 + x)\\)\n\\(2x - ax = a + ax\\)\n\\(2x - 2ax = a\\), i.e. \\(x(2 - 2a) = a\\)\n\\(x = \\frac{a}{2 - 2a}\\) (D)"
      },
      {
        id: "a1-sf-36",
        type: "Subject of Formulas",
        question: "If \\(a = \\frac{b + 1}{b - 3}\\), then \\(b =\\)\nA. \\(\\frac{3a - 1}{a + 1}\\)\nB. \\(\\frac{3a + 1}{a + 1}\\)\nC. \\(\\frac{3a - 1}{a - 1}\\)\nD. \\(\\frac{3a + 1}{a - 1}\\)",
        answer: "D",
        steps: "\\(a(b - 3) = b + 1\\)\n\\(ab - 3a = b + 1\\)\n\\(ab - b = 3a + 1\\), i.e. \\(b(a - 1) = 3a + 1\\)\n\\(b = \\frac{3a + 1}{a - 1}\\) (D)"
      },
      {
        id: "a1-sf-37",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{2y - x}{4y}\\), then \\(y =\\)\nA. \\(\\frac{x}{2 - 4x}\\)\nB. \\(\\frac{4x - 2}{x}\\)\nC. \\(\\frac{2 - 4x}{x}\\)\nD. \\(\\frac{x}{4x - 2}\\)",
        answer: "A",
        steps: "\\(4xy = 2y - x\\)\n\\(x = 2y - 4xy = y(2 - 4x)\\)\n\\(y = \\frac{x}{2 - 4x}\\) (A)"
      },
      {
        id: "a1-sf-38",
        type: "Subject of Formulas",
        question: "If \\(a = 3 - 4b\\), then \\(b =\\)\nA. \\(\\frac{a + 3}{4}\\)\nB. \\(\\frac{a - 3}{4}\\)\nC. \\(\\frac{-3 - a}{4}\\)\nD. \\(\\frac{3 - a}{4}\\)",
        answer: "D",
        steps: "\\(4b = 3 - a\\)\n\\(b = \\frac{3 - a}{4}\\) (D)"
      },
      {
        id: "a1-sf-39",
        type: "Subject of Formulas",
        question: "If \\(3x - 4y = 11\\), then \\(y =\\)\nA. \\(\\frac{4}{3x - 11}\\)\nB. \\(\\frac{3x - 11}{4}\\)\nC. \\(\\frac{4}{3x + 11}\\)\nD. \\(\\frac{3x + 11}{4}\\)",
        answer: "B",
        steps: "\\(4y = 3x - 11\\)\n\\(y = \\frac{3x - 11}{4}\\) (B)"
      },
      // Subject of Formulas (continued)
      {
        id: "a1-sf-40",
        type: "Subject of Formulas",
        question: "If \\(m = 9 - 2n\\), then \\(n =\\)\nA. \\(\\frac{2}{9 - m}\\)\nB. \\(\\frac{9 - m}{2}\\)\nC. \\(\\frac{2}{9 + m}\\)\nD. \\(\\frac{9 + m}{2}\\)",
        answer: "B",
        steps: "\\(2n = 9 - m\\)\n\\(n = \\frac{9 - m}{2}\\) (B)"
      },
      {
        id: "a1-sf-41",
        type: "Subject of Formulas",
        question: "If \\(P = \\frac{VT}{2R} + 3\\), then \\(T =\\)\nA. \\(\\frac{2R(P + 3)}{V}\\)\nB. \\(\\frac{R(P - 3)}{2V}\\)\nC. \\(2R\\left(\\frac{P}{V} - 3\\right)\\)\nD. \\(\\frac{2R(P - 3)}{V}\\)",
        answer: "D",
        steps: "\\(P - 3 = \\frac{VT}{2R}\\)\n\\(T = \\frac{2R(P - 3)}{V}\\) (D)"
      },
      {
        id: "a1-sf-42",
        type: "Subject of Formulas",
        question: "If \\(x = \\frac{5a}{a + 3b}\\), then \\(a =\\)\nA. \\(\\frac{3bx}{x - 5}\\)\nB. \\(\\frac{3b}{x - 5}\\)\nC. \\(\\frac{3bx}{5 - x}\\)\nD. \\(\\frac{3b}{5 - x}\\)",
        answer: "C",
        steps: "\\(x(a + 3b) = 5a\\)\n\\(ax + 3bx = 5a\\)\n\\(3bx = 5a - ax = a(5 - x)\\)\n\\(a = \\frac{3bx}{5 - x}\\) (C)"
      },
      {
        id: "a1-sf-43",
        type: "Subject of Formulas",
        question: "If \\(\\frac{3 + a}{a} = \\frac{3 - x}{x}\\), then \\(x =\\)\nA. \\(\\frac{3a}{3 - 2a}\\)\nB. \\(\\frac{3a}{3 + 2a}\\)\nC. \\(\\frac{3a}{2 + 3a}\\)\nD. \\(\\frac{a}{3 + 2a}\\)",
        answer: "B",
        steps: "\\(x(3 + a) = a(3 - x)\\)\n\\(3x + ax = 3a - ax\\)\n\\(3x + 2ax = 3a\\), i.e. \\(x(3 + 2a) = 3a\\)\n\\(x = \\frac{3a}{3 + 2a}\\) (B)"
      },
      {
        id: "a1-sf-44",
        type: "Subject of Formulas",
        question: "If \\(7 - 4m = 3n\\), then \\(m =\\)\nA. \\(\\frac{7 - 3n}{4}\\)\nB. \\(\\frac{3n - 7}{4}\\)\nC. \\(\\frac{28 - 3n}{4}\\)\nD. \\(n\\)",
        answer: "A",
        steps: "\\(4m = 7 - 3n\\)\n\\(m = \\frac{7 - 3n}{4}\\) (A)"
      },
      {
        id: "a1-sf-45",
        type: "Subject of Formulas",
        question: "If \\(4a + 3 = 2(b - 5)\\), then \\(b =\\)\nA. \\(2a + 3\\)\nB. \\(2a - \\frac{7}{2}\\)\nC. \\(a + \\frac{13}{2}\\)\nD. \\(2a + \\frac{13}{2}\\)",
        answer: "D",
        steps: "\\(4a + 3 = 2b - 10\\)\n\\(2b = 4a + 13\\)\n\\(b = 2a + \\frac{13}{2}\\) (D)"
      },
      {
        id: "a1-sf-46",
        type: "Subject of Formulas",
        question: "If \\(\\frac{y - 2}{c} = \\frac{y + 3}{d}\\), then \\(y =\\)\nA. \\(\\frac{3c + 2d}{d - c}\\)\nB. \\(\\frac{3c - 2d}{c + d}\\)\nC. \\(\\frac{2c + 3d}{d - c}\\)\nD. \\(\\frac{3c + 2d}{c - d}\\)",
        answer: "A",
        steps: "\\(d(y - 2) = c(y + 3)\\)\n\\(dy - 2d = cy + 3c\\)\n\\(dy - cy = 3c + 2d\\), i.e. \\(y(d - c) = 3c + 2d\\)\n\\(y = \\frac{3c + 2d}{d - c}\\) (A)"
      },
      {
        id: "a1-sf-47",
        type: "Subject of Formulas",
        question: "If \\(\\frac{2a}{x} - \\frac{b}{y} = 4\\), then \\(x =\\)\nA. \\(\\frac{2ay}{4y + b}\\)\nB. \\(\\frac{2ay}{4y - b}\\)\nC. \\(\\frac{2by}{4y + a}\\)\nD. \\(\\frac{2ay}{b - 4y}\\)",
        answer: "A",
        steps: "\\(\\frac{2a}{x} = 4 + \\frac{b}{y} = \\frac{4y + b}{y}\\)\n\\(x = \\frac{2ay}{4y + b}\\) (A)"
      },
      {
        id: "a1-sf-48",
        type: "Subject of Formulas",
        question: "If \\(\\frac{a + 6b}{3a} = 1 + \\frac{b}{a}\\), then \\(a =\\)\nA. \\(\\frac{3b}{2}\\)\nB. \\(\\frac{2b}{3}\\)\nC. \\(\\frac{5b}{3}\\)\nD. \\(\\frac{3b}{5}\\)",
        answer: "A",
        steps: "\\(a + 6b = 3a + 3b\\) (multiplying both sides by \\(3a\\))\n\\(3b = 2a\\)\n\\(a = \\frac{3b}{2}\\) (A)"
      },
      // Subject of Formulas (continued)
      {
        id: "a1-sf-49",
        type: "Subject of Formulas",
        question: "If \\(\\frac{2\\alpha}{1 - x} = \\frac{\\beta}{x}\\), then \\(x =\\)\nA. \\(\\frac{\\beta}{\\alpha + 2\\beta}\\)\nB. \\(\\frac{2\\alpha}{2\\alpha + \\beta}\\)\nC. \\(\\frac{\\beta}{2\\alpha + \\beta}\\)\nD. \\(\\frac{\\beta}{2\\alpha - \\beta}\\)",
        answer: "C",
        steps: "\\(2\\alpha x = \\beta(1 - x)\\)\n\\(2\\alpha x + \\beta x = \\beta\\), i.e. \\(x(2\\alpha + \\beta) = \\beta\\)\n\\(x = \\frac{\\beta}{2\\alpha + \\beta}\\) (C)"
      },
      {
        id: "a1-sf-50",
        type: "Subject of Formulas",
        question: "If \\(h = 4 - \\frac{6}{k + 2}\\), then \\(k =\\)\nA. \\(\\frac{2h - 2}{4 - h}\\)\nB. \\(\\frac{2h - 14}{4 - h}\\)\nC. \\(\\frac{2h - 2}{4 + h}\\)\nD. \\(\\frac{2h - 14}{4 + h}\\)",
        answer: "A",
        steps: "\\(\\frac{6}{k + 2} = 4 - h\\), so \\(k + 2 = \\frac{6}{4 - h}\\)\n\\(k = \\frac{6}{4 - h} - 2 = \\frac{6 - 2(4 - h)}{4 - h}\\)\n\\(k = \\frac{2h - 2}{4 - h}\\) (A)"
      },
      {
        id: "a1-sf-51",
        type: "Subject of Formulas",
        question: "If \\(a(a - b) = 3(b + a)\\), then \\(b =\\)\nA. \\(\\frac{a^{2} + 3a}{a + 3}\\)\nB. \\(\\frac{a^{2} + 3a}{3 - a}\\)\nC. \\(\\frac{a^{2} - 3a}{3 - a}\\)\nD. \\(\\frac{a^{2} - 3a}{a + 3}\\)",
        answer: "D",
        steps: "\\(a^{2} - ab = 3b + 3a\\)\n\\(a^{2} - 3a = 3b + ab = b(a + 3)\\)\n\\(b = \\frac{a^{2} - 3a}{a + 3}\\) (D)"
      },
      {
        id: "a1-sf-52",
        type: "Subject of Formulas",
        question: "If \\(m(m + a) = a(2 + m)\\), then \\(a =\\)\nA. \\(m^{2}\\)\nB. \\(\\frac{m^{2}}{2}\\)\nC. \\(\\frac{m^{2} + m}{2}\\)\nD. \\(\\frac{m}{2}\\)",
        answer: "B",
        steps: "\\(m^{2} + ma = 2a + am\\)\n\\(m^{2} = 2a\\)\n\\(a = \\frac{m^{2}}{2}\\) (B)"
      },
      {
        id: "a1-sf-53",
        type: "Subject of Formulas",
        question: "If \\(\\frac{3}{u} + \\frac{2}{v} = 5\\), then \\(u =\\)\nA. \\(\\frac{2v}{5v - 3}\\)\nB. \\(\\frac{3v}{2 - 5v}\\)\nC. \\(\\frac{2v}{3 - 5v}\\)\nD. \\(\\frac{3v}{5v - 2}\\)",
        answer: "D",
        steps: "\\(\\frac{3}{u} = 5 - \\frac{2}{v} = \\frac{5v - 2}{v}\\)\n\\(u = \\frac{3v}{5v - 2}\\) (D)"
      },
      {
        id: "a1-sf-54",
        type: "Subject of Formulas",
        question: "If \\(\\frac{a + 3b}{5a + 2b} = \\frac{1}{b + 2}\\), then \\(a =\\)\nA. \\(\\frac{3b^{2} + 4b}{3 - b}\\)\nB. \\(\\frac{3 - b}{3b^{2} + 4b}\\)\nC. \\(\\frac{3b^{2} + 4b}{b - 3}\\)\nD. \\(\\frac{3b^{2} - 4b}{3 - b}\\)",
        answer: "A",
        steps: "\\((a + 3b)(b + 2) = 5a + 2b\\)\n\\(ab + 2a + 3b^{2} + 6b = 5a + 2b\\)\n\\(ab - 3a = -3b^{2} - 4b\\), i.e. \\(a(3 - b) = 3b^{2} + 4b\\)\n\\(a = \\frac{3b^{2} + 4b}{3 - b}\\) (A)"
      },
      {
        id: "a1-sf-55",
        type: "Subject of Formulas",
        question: "If \\(k = \\frac{7}{3m} - n\\), then \\(m =\\)\nA. \\(\\frac{3(n - k)}{7}\\)\nB. \\(\\frac{3(k + n)}{7}\\)\nC. \\(\\frac{7}{3(k - n)}\\)\nD. \\(\\frac{7}{3(k + n)}\\)",
        answer: "D",
        steps: "\\(k + n = \\frac{7}{3m}\\)\n\\(m = \\frac{7}{3(k + n)}\\) (D)"
      },
      {
        id: "a1-sf-56",
        type: "Subject of Formulas",
        question: "If \\((2c + 3)(d - 5) = d(4c - 1)\\), then \\(c =\\)\nA. \\(\\frac{4d + 15}{2d + 10}\\)\nB. \\(\\frac{4d - 15}{2d + 10}\\)\nC. \\(\\frac{4d - 15}{2d - 10}\\)\nD. \\(\\frac{4d + 15}{2d - 10}\\)",
        answer: "B",
        steps: "\\(2cd - 10c + 3d - 15 = 4cd - d\\)\n\\(4d - 15 = 2cd + 10c = c(2d + 10)\\)\n\\(c = \\frac{4d - 15}{2d + 10}\\) (B)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-9",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(4ab - 4a^{2} - b^{2} =\\)\nA. \\((2a - b)^{2}\\)\nB. \\((-2a + b)^{2}\\)\nC. \\((-2a - b)^{2}\\)\nD. \\(-(2a - b)^{2}\\)\nE. \\(-(2a + b)^{2}\\)",
        answer: "D",
        steps: "\\(4ab - 4a^{2} - b^{2} = -(4a^{2} - 4ab + b^{2})\\)\n\\(= -(2a - b)^{2}\\) (D)"
      },
      {
        id: "a1-ef-10",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{2}{x + 2} + \\frac{2}{x - 2} + \\frac{x + \\frac{4}{x}}{x - \\frac{4}{x}} =\\)\nA. \\(\\frac{1}{x + 2}\\)\nB. \\(\\frac{1}{(x + 2)(x - 2)}\\)\nC. \\(\\frac{x^{2} + 4x + 8}{(x + 2)(x - 2)}\\)\nD. \\(\\frac{x + 2}{x - 2}\\)\nE. \\(\\frac{1}{x - 2}\\)",
        answer: "D",
        steps: "\\(\\frac{2}{x + 2} + \\frac{2}{x - 2} = \\frac{2(x - 2) + 2(x + 2)}{(x + 2)(x - 2)} = \\frac{4x}{x^{2} - 4}\\)\n\\(\\frac{x + \\frac{4}{x}}{x - \\frac{4}{x}} = \\frac{x^{2} + 4}{x^{2} - 4}\\) (multiply the numerator and the denominator by \\(x\\))\n\\(\\text{Expression} = \\frac{4x + x^{2} + 4}{x^{2} - 4} = \\frac{(x + 2)^{2}}{(x + 2)(x - 2)} = \\frac{x + 2}{x - 2}\\) (D)"
      },
      {
        id: "a1-ef-11",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\left(\\frac{\\frac{x}{y} + \\frac{y}{x} - 2}{\\frac{x}{y} - \\frac{y}{x}}\\right)^{-1} =\\)\nA. \\(\\frac{x^{2} + y^{2}}{x^{2} - y^{2}}\\)\nB. \\(\\frac{x + y}{x - y}\\)\nC. \\(\\frac{x^{2} - y^{2}}{x^{2} + y^{2}}\\)\nD. \\(\\frac{x - y}{x + y}\\)\nE. \\(-\\frac{x + y}{x - y}\\)",
        answer: "B",
        steps: "\\(\\frac{x}{y} + \\frac{y}{x} - 2 = \\frac{x^{2} + y^{2} - 2xy}{xy} = \\frac{(x - y)^{2}}{xy}\\) and \\(\\frac{x}{y} - \\frac{y}{x} = \\frac{x^{2} - y^{2}}{xy}\\)\n\\(\\frac{\\frac{x}{y} + \\frac{y}{x} - 2}{\\frac{x}{y} - \\frac{y}{x}} = \\frac{(x - y)^{2}}{(x + y)(x - y)} = \\frac{x - y}{x + y}\\)\nThe reciprocal is \\(\\frac{x + y}{x - y}\\) (B)"
      },
      {
        id: "a1-ef-12",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{4a}{a^{2} - 4b^{2}} + \\frac{2}{2b - a} =\\)\nA. \\(\\frac{4a + 2}{(a + 2b)(a - 2b)}\\)\nB. \\(\\frac{6a + 4b}{(a + 2b)(a - 2b)}\\)\nC. \\(\\frac{a + 2b}{(a + 2b)(a - 2b)}\\)\nD. \\(\\frac{4a - 2}{(a + 2b)(a - 2b)}\\)\nE. \\(\\frac{2}{a + 2b}\\)",
        answer: "E",
        steps: "\\(\\frac{4a}{(a + 2b)(a - 2b)} - \\frac{2}{a - 2b} = \\frac{4a - 2(a + 2b)}{(a + 2b)(a - 2b)}\\)\n\\(= \\frac{2(a - 2b)}{(a + 2b)(a - 2b)} = \\frac{2}{a + 2b}\\) (E)"
      },
      {
        id: "a1-ef-13",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{8}{x^{2} - 16} - \\frac{7}{x^{2} + x - 12} =\\)\nA. \\(\\frac{x - 52}{(x - 4)(x + 4)(x - 3)}\\)\nB. \\(\\frac{1}{(x - 3)(x - 4)}\\)\nC. \\(\\frac{1}{(x + 3)(x + 4)}\\)\nD. \\(\\frac{1}{(x - 3)(x + 4)}\\)\nE. \\(\\frac{1}{(x + 3)(x - 4)}\\)",
        answer: "B",
        steps: "\\(x^{2} - 16 = (x - 4)(x + 4)\\) and \\(x^{2} + x - 12 = (x + 4)(x - 3)\\)\n\\(\\frac{8(x - 3) - 7(x - 4)}{(x - 4)(x + 4)(x - 3)} = \\frac{x + 4}{(x - 4)(x + 4)(x - 3)}\\)\n\\(= \\frac{1}{(x - 4)(x - 3)}\\) (B)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-14",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{\\frac{1}{a^{3}} - \\frac{1}{b^{3}}}{\\frac{1}{a} - \\frac{1}{b}} =\\)\nA. \\(a^{2} + ab + b^{2}\\)\nB. \\(a^{2} - ab + b^{2}\\)\nC. \\(\\frac{1}{a^{2}} - \\frac{1}{ab} + \\frac{1}{b^{2}}\\)\nD. \\(\\frac{1}{a^{2}} + \\frac{1}{ab} + \\frac{1}{b^{2}}\\)\nE. \\(\\frac{1}{a^{2}} - \\frac{1}{b^{2}}\\)",
        answer: "D",
        steps: "Numerator \\(= \\frac{b^{3} - a^{3}}{a^{3}b^{3}}\\) and denominator \\(= \\frac{b - a}{ab}\\)\n\\(\\text{Expression} = \\frac{(b - a)(b^{2} + ab + a^{2})}{a^{3}b^{3}} \\times \\frac{ab}{b - a} = \\frac{a^{2} + ab + b^{2}}{a^{2}b^{2}}\\)\n\\(= \\frac{1}{b^{2}} + \\frac{1}{ab} + \\frac{1}{a^{2}}\\) (D)"
      },
      {
        id: "a1-ef-15",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{6}{(x - 3)(x + 2)} - \\frac{5}{x^{2} - 4} =\\)\nA. \\(\\frac{1}{(x - 2)^{2}(x + 2)}\\)\nB. \\(\\frac{11x - 27}{(x - 3)(x + 2)(x - 2)}\\)\nC. \\(\\frac{x + 3}{(x - 3)(x + 2)(x - 2)}\\)\nD. \\(\\frac{x^{2} - 3x - 27}{(x - 3)(x + 2)(x - 2)^{2}}\\)\nE. \\(\\frac{x - 27}{(x - 3)(x + 2)(x - 2)}\\)",
        answer: "C",
        steps: "\\(x^{2} - 4 = (x + 2)(x - 2)\\), so the common denominator is \\((x - 3)(x + 2)(x - 2)\\)\n\\(\\text{Expression} = \\frac{6(x - 2) - 5(x - 3)}{(x - 3)(x + 2)(x - 2)}\\)\n\\(= \\frac{6x - 12 - 5x + 15}{(x - 3)(x + 2)(x - 2)} = \\frac{x + 3}{(x - 3)(x + 2)(x - 2)}\\) (C)"
      },
      {
        id: "a1-ef-16",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{3}{1 + x} + \\frac{3}{1 - x} + \\frac{6x}{x^{2} - 1} =\\)\nA. \\(\\frac{6x - 6}{1 - x^{2}}\\)\nB. \\(\\frac{6}{1 - x}\\)\nC. \\(\\frac{6 + 12x}{1 - x^{2}}\\)\nD. \\(\\frac{6 - 12x}{x^{2} - 1}\\)\nE. \\(\\frac{6}{1 + x}\\)",
        answer: "E",
        steps: "\\(\\frac{3}{1 + x} + \\frac{3}{1 - x} = \\frac{3(1 - x) + 3(1 + x)}{1 - x^{2}} = \\frac{6}{1 - x^{2}}\\)\n\\(\\frac{6x}{x^{2} - 1} = -\\frac{6x}{1 - x^{2}}\\)\n\\(\\text{Expression} = \\frac{6 - 6x}{1 - x^{2}} = \\frac{6(1 - x)}{(1 + x)(1 - x)} = \\frac{6}{1 + x}\\) (E)"
      },
      {
        id: "a1-ef-17",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{\\frac{a}{b} - \\frac{b}{a}}{\\frac{1}{a} - \\frac{1}{b}} =\\)\nA. \\(-a + b\\)\nB. \\(a + b\\)\nC. \\(-a - b\\)\nD. \\(\\frac{1}{a} + \\frac{1}{b}\\)\nE. \\(a - b\\)",
        answer: "C",
        steps: "\\(\\frac{a}{b} - \\frac{b}{a} = \\frac{a^{2} - b^{2}}{ab}\\) and \\(\\frac{1}{a} - \\frac{1}{b} = \\frac{b - a}{ab}\\)\n\\(\\text{Expression} = \\frac{(a + b)(a - b)}{ab} \\times \\frac{ab}{b - a} = \\frac{(a + b)(a - b)}{-(a - b)} = -a - b\\) (C)"
      },
      {
        id: "a1-ef-18",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{\\frac{x^{2}}{4} - 9y^{2}}{\\frac{2}{3}(x - 6y)} =\\)\nA. \\(\\frac{3}{8}(x - 6y)\\)\nB. \\(\\frac{3}{8}(x + 6y)\\)\nC. \\(2(x + 6y)\\)\nD. \\(\\frac{1}{2}(x - 6y)\\)\nE. \\(\\frac{3}{4}(x + 6y)\\)",
        answer: "B",
        steps: "\\(\\frac{x^{2}}{4} - 9y^{2} = \\frac{1}{4}(x^{2} - 36y^{2}) = \\frac{1}{4}(x + 6y)(x - 6y)\\)\n\\(\\text{Expression} = \\frac{1}{4}(x + 6y)(x - 6y) \\times \\frac{3}{2(x - 6y)} = \\frac{3}{8}(x + 6y)\\) (B)"
      },
      {
        id: "a1-ef-19",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\left(\\frac{x + 2}{x}\\right)^{2} - \\left(\\frac{x - 2}{x}\\right)^{2} =\\)\nA. \\(\\frac{8}{x}\\)\nB. \\(\\frac{4}{x}\\)\nC. \\(\\frac{4}{x^{2}}\\)\nD. \\(\\frac{8}{x^{2}}\\)\nE. \\(0\\)",
        answer: "A",
        steps: "\\(\\text{Expression} = \\frac{(x + 2)^{2} - (x - 2)^{2}}{x^{2}} = \\frac{(x^{2} + 4x + 4) - (x^{2} - 4x + 4)}{x^{2}}\\)\n\\(= \\frac{8x}{x^{2}} = \\frac{8}{x}\\) (A)"
      },
      {
        id: "a1-ef-20",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{x^{2} - 3x}{x^{3} - 16x} \\times \\frac{x^{2} - x - 12}{x^{2} + 2x - 3} =\\)\nA. \\(\\frac{x - 3}{(x - 4)(x - 1)}\\)\nB. \\(\\frac{1}{x + 4}\\)\nC. \\(\\frac{x - 3}{(x + 4)(x - 1)}\\)\nD. \\(\\frac{x - 3}{x - 1}\\)\nE. \\(\\frac{1}{x}\\)",
        answer: "C",
        steps: "\\(\\frac{x^{2} - 3x}{x^{3} - 16x} = \\frac{x(x - 3)}{x(x - 4)(x + 4)}\\) and \\(\\frac{x^{2} - x - 12}{x^{2} + 2x - 3} = \\frac{(x - 4)(x + 3)}{(x + 3)(x - 1)}\\)\n\\(\\text{Expression} = \\frac{x(x - 3)}{x(x - 4)(x + 4)} \\times \\frac{(x - 4)(x + 3)}{(x + 3)(x - 1)} = \\frac{x - 3}{(x + 4)(x - 1)}\\) (C)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-21",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{3x - x^{2}} + \\frac{1}{x^{2} + 2x - 15} =\\)\nA. \\(\\frac{-5}{x(x + 3)(x - 5)}\\)\nB. \\(\\frac{2x + 5}{x(3 - x)(x + 5)}\\)\nC. \\(\\frac{x - 5}{x(3 - x)(x + 5)(x - 3)}\\)\nD. \\(\\frac{5}{x(3 - x)(x + 5)}\\)\nE. \\(\\frac{2x + 5}{x(3 - x)(x + 3)}\\)",
        answer: "D",
        steps: "\\(3x - x^{2} = x(3 - x)\\) and \\(x^{2} + 2x - 15 = (x + 5)(x - 3) = -(x + 5)(3 - x)\\)\n\\(\\text{Expression} = \\frac{1}{x(3 - x)} - \\frac{1}{(x + 5)(3 - x)} = \\frac{(x + 5) - x}{x(3 - x)(x + 5)}\\)\n\\(= \\frac{5}{x(3 - x)(x + 5)}\\) (D)"
      },
      {
        id: "a1-ef-22",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Which of the following expressions CANNOT be factorized?\nA. \\(9x^{2} + 25y^{2}\\)\nB. \\(x^{3} - 64\\)\nC. \\(2x^{2} + 8xy + 8y^{2}\\)\nD. \\(9x^{2} - 16y^{2}\\)\nE. \\(x^{3} + 27\\)",
        answer: "A",
        steps: "\\(x^{3} - 64 = (x - 4)(x^{2} + 4x + 16)\\), \\(9x^{2} - 16y^{2} = (3x + 4y)(3x - 4y)\\), \\(x^{3} + 27 = (x + 3)(x^{2} - 3x + 9)\\) and \\(2x^{2} + 8xy + 8y^{2} = 2(x + 2y)^{2}\\) can all be factorized\n\\(9x^{2} + 25y^{2}\\) is a sum of two squares, so it cannot be factorized over the real numbers (A)"
      },
      {
        id: "a1-ef-23",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{64x^{3} - 27}{4x - 3} =\\)\nA. \\(16x^{2} + 12x + 9\\)\nB. \\((4x - 3)^{2}\\)\nC. \\(16x^{2} - 12x + 9\\)\nD. \\(16x^{2} - 9\\)\nE. \\(16x^{2} + 9\\)",
        answer: "A",
        steps: "\\(64x^{3} - 27 = (4x)^{3} - 3^{3} = (4x - 3)(16x^{2} + 12x + 9)\\)\n\\(\\frac{64x^{3} - 27}{4x - 3} = 16x^{2} + 12x + 9\\) (A)"
      },
      {
        id: "a1-ef-24",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1 + \\frac{x - y}{x + y}}{1 - \\frac{x + y}{x - y}} =\\)\nA. \\(x + y\\)\nB. \\(\\frac{x - y}{x + y}\\)\nC. \\(\\frac{x(x - y)}{y(x + y)}\\)\nD. \\(\\frac{x}{y}\\)\nE. \\(\\frac{x(y - x)}{y(x + y)}\\)",
        answer: "E",
        steps: "Numerator \\(= \\frac{(x + y) + (x - y)}{x + y} = \\frac{2x}{x + y}\\)\nDenominator \\(= \\frac{(x - y) - (x + y)}{x - y} = \\frac{-2y}{x - y}\\)\n\\(\\text{Expression} = \\frac{2x}{x + y} \\times \\frac{x - y}{-2y} = \\frac{x(y - x)}{y(x + y)}\\) (E)"
      },
      {
        id: "a1-ef-25",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(a^{3} + 27a^{-3} =\\)\nA. \\(\\left(a + \\frac{3}{a}\\right)\\left(a^{2} + 3 + \\frac{9}{a^{2}}\\right)\\)\nB. \\(\\left(a + \\frac{1}{3a}\\right)\\left(a^{2} - \\frac{1}{3} + \\frac{1}{9a^{2}}\\right)\\)\nC. \\(\\left(a - \\frac{3}{a}\\right)\\left(a^{2} + 3 + \\frac{9}{a^{2}}\\right)\\)\nD. \\(\\left(a + \\frac{3}{a}\\right)\\left(a^{2} - 3 + \\frac{9}{a^{2}}\\right)\\)\nE. \\(\\left(a + \\frac{3}{a}\\right)\\left(a^{2} - 6 + \\frac{9}{a^{2}}\\right)\\)",
        answer: "D",
        steps: "\\(a^{3} + 27a^{-3} = a^{3} + \\left(\\frac{3}{a}\\right)^{3}\\)\n\\(= \\left(a + \\frac{3}{a}\\right)\\left[a^{2} - a \\cdot \\frac{3}{a} + \\left(\\frac{3}{a}\\right)^{2}\\right]\\) (sum of two cubes)\n\\(= \\left(a + \\frac{3}{a}\\right)\\left(a^{2} - 3 + \\frac{9}{a^{2}}\\right)\\) (D)"
      },
      {
        id: "a1-ef-26",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{1 - x^{2}} - \\frac{1}{(1 - x)^{2}} =\\)\nA. \\(\\frac{-2}{(1 - x)(1 + x)^{2}}\\)\nB. \\(\\frac{-2x}{(1 - x)^{2}(1 + x)}\\)\nC. \\(\\frac{2}{(1 - x)^{2}(1 + x)}\\)\nD. \\(\\frac{-2x}{(1 - x)(1 + x)^{2}}\\)\nE. \\(\\frac{2x}{(1 - x)^{2}(1 + x)}\\)",
        answer: "B",
        steps: "The common denominator is \\((1 - x)^{2}(1 + x)\\)\n\\(\\text{Expression} = \\frac{(1 - x) - (1 + x)}{(1 - x)^{2}(1 + x)} = \\frac{-2x}{(1 - x)^{2}(1 + x)}\\) (B)"
      },
      {
        id: "a1-ef-27",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Which one of the following is a factor of \\(x^{3} - 7x^{2} + 7x + 15\\)?\nA. \\((x + 1)(x - 5)\\)\nB. \\((x - 1)(x + 3)\\)\nC. \\((x + 1)(x + 5)\\)\nD. \\((x - 1)(x - 3)\\)\nE. \\((x + 3)(x - 5)\\)",
        answer: "A",
        steps: "Let \\(f(x) = x^{3} - 7x^{2} + 7x + 15\\). \\(f(-1) = -1 - 7 - 7 + 15 = 0\\), so \\(x + 1\\) is a factor.\n\\(f(5) = 125 - 175 + 35 + 15 = 0\\), so \\(x - 5\\) is a factor.\nHence \\((x + 1)(x - 5)\\) is a factor of \\(f(x)\\); in fact \\(f(x) = (x + 1)(x - 3)(x - 5)\\) (A)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-28",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{a} - \\frac{1}{b} =\\)\nA. \\(\\frac{2}{a - b}\\)\nB. \\(\\frac{ab}{b - a}\\)\nC. \\(\\frac{b - a}{ab}\\)\nD. \\(\\frac{1}{b - a}\\)\nE. \\(\\frac{a - b}{ab}\\)",
        answer: "C",
        steps: "\\(\\frac{1}{a} - \\frac{1}{b} = \\frac{b}{ab} - \\frac{a}{ab}\\)\n\\(= \\frac{b - a}{ab}\\) (C)"
      },
      {
        id: "a1-ef-29",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Which of the following is a factor of \\(9(a + b)^{2} - 4(a - b)^{2}\\)?\nA. \\(5a - b\\)\nB. \\(b - 5a\\)\nC. \\(a + 5b\\)\nD. \\(a + 3b\\)\nE. \\(a - 5b\\)",
        answer: "C",
        steps: "\\(9(a + b)^{2} - 4(a - b)^{2} = [3(a + b)]^{2} - [2(a - b)]^{2}\\)\n\\(= [3(a + b) + 2(a - b)][3(a + b) - 2(a - b)] = (5a + b)(a + 5b)\\)\nSo \\(a + 5b\\) is a factor (C)"
      },
      {
        id: "a1-ef-30",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Simplify \\((x^{2} - \\sqrt{5}x + 1)(x^{2} + \\sqrt{5}x + 1)\\).\nA. \\(x^{4} - 3x^{2} + 1\\)\nB. \\(x^{4} + 5x^{2} + 1\\)\nC. \\(x^{4} + x^{2} + 1\\)\nD. \\(x^{4} - 5x^{2} + 1\\)\nE. \\(x^{4} + 1\\)",
        answer: "A",
        steps: "\\((x^{2} - \\sqrt{5}x + 1)(x^{2} + \\sqrt{5}x + 1) = (x^{2} + 1)^{2} - (\\sqrt{5}x)^{2}\\)\n\\(= x^{4} + 2x^{2} + 1 - 5x^{2} = x^{4} - 3x^{2} + 1\\) (A)"
      },
      {
        id: "a1-ef-31",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "In factorizing the expression \\(x^{4} + 4x^{2}y^{2} + 16y^{4}\\), we find that\nA. \\(\\((x^{2} - 4y^{2})\\) is a factor.\\)\nB. \\(\\((x^{2} - 2xy - 4y^{2})\\) is a factor.\\)\nC. \\(\\((x^{2} + 4y^{2})\\) is a factor.\\)\nD. \\(It cannot be factorized.\\)\nE. \\(\\((x^{2} - 2xy + 4y^{2})\\) is a factor.\\)",
        answer: "E",
        steps: "\\(x^{4} + 4x^{2}y^{2} + 16y^{4} = (x^{4} + 8x^{2}y^{2} + 16y^{4}) - 4x^{2}y^{2} = (x^{2} + 4y^{2})^{2} - (2xy)^{2}\\)\n\\(= (x^{2} + 4y^{2} + 2xy)(x^{2} + 4y^{2} - 2xy) = (x^{2} + 2xy + 4y^{2})(x^{2} - 2xy + 4y^{2})\\)\nSo \\((x^{2} - 2xy + 4y^{2})\\) is a factor (E)"
      },
      {
        id: "a1-ef-32",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Factorize \\(x^{2} - 2xy + y^{2} + 2x - 2y\\).\nA. \\((x + y)(x - y + 2)\\)\nB. \\((x - y)(x - y + 2)\\)\nC. \\((x - y + 1)^{2}\\)\nD. \\((x - y)(x - y - 2)\\)\nE. \\((x - y)(x + y + 2)\\)",
        answer: "B",
        steps: "\\(x^{2} - 2xy + y^{2} + 2x - 2y = (x - y)^{2} + 2(x - y)\\)\n\\(= (x - y)(x - y + 2)\\) (B)"
      },
      {
        id: "a1-ef-33",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{\\frac{3}{x} - \\frac{1}{y}}{\\frac{9y}{x} - \\frac{x}{y}} =\\)\nA. \\(\\frac{1}{3y - x}\\)\nB. \\(3y + x\\)\nC. \\(\\frac{1}{9y - x}\\)\nD. \\(3y - x\\)\nE. \\(\\frac{1}{3y + x}\\)",
        answer: "E",
        steps: "Numerator \\(= \\frac{3y - x}{xy}\\) and denominator \\(= \\frac{9y^{2} - x^{2}}{xy}\\)\n\\(\\text{Expression} = \\frac{3y - x}{(3y - x)(3y + x)} = \\frac{1}{3y + x}\\) (E)"
      },
      {
        id: "a1-ef-34",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Factorize \\(3a^{n + 1} - 10a^{n} - 8a^{n - 1}\\).\nA. \\(a^{n - 1}(a + 4)(3a - 2)\\)\nB. \\(a^{n - 1}(3a + 2)(a - 4)\\)\nC. \\(a^{n}(a - 4)(3a + 2)\\)\nD. \\(a^{n}(a + 4)(3a - 2)\\)\nE. \\(a^{n - 1}(3a - 2)(a - 4)\\)",
        answer: "B",
        steps: "\\(3a^{n + 1} - 10a^{n} - 8a^{n - 1} = a^{n - 1}(3a^{2} - 10a - 8)\\)\n\\(= a^{n - 1}(3a + 2)(a - 4)\\) (B)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-35",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Simplify \\(\\frac{\\left(\\frac{y}{x} - 1\\right)\\left(1 + \\frac{x}{y}\\right)}{\\frac{x}{y} - \\frac{y}{x}}\\).\nA. \\(\\frac{x + y}{x - y}\\)\nB. \\(-1\\)\nC. \\(-\\frac{x - y}{x + y}\\)\nD. \\(\\frac{x - y}{x + y}\\)\nE. \\(-\\frac{x + y}{x - y}\\)",
        answer: "B",
        steps: "\\(\\left(\\frac{y}{x} - 1\\right)\\left(1 + \\frac{x}{y}\\right) = \\frac{y - x}{x} \\times \\frac{y + x}{y} = \\frac{y^{2} - x^{2}}{xy}\\)\n\\(\\frac{x}{y} - \\frac{y}{x} = \\frac{x^{2} - y^{2}}{xy}\\)\n\\(\\text{Expression} = \\frac{y^{2} - x^{2}}{x^{2} - y^{2}} = -1\\) (B)"
      },
      {
        id: "a1-ef-36",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Which of the following expressions has / have \\(b - c\\) as a factor?\nI. \\(a(b - c) + 2(c - b)\\)\nII. \\(a(b - c) - 2b - 2c\\)\nIII. \\(3b - 3c - ab + ac\\)\nA. I only\nB. I and II only\nC. I and III only\nD. II and III only\nE. I, II and III",
        answer: "C",
        steps: "I: \\(a(b - c) + 2(c - b) = a(b - c) - 2(b - c) = (a - 2)(b - c)\\) has the factor \\(b - c\\).\nII: \\(a(b - c) - 2b - 2c = a(b - c) - 2(b + c)\\) does not have the factor \\(b - c\\).\nIII: \\(3b - 3c - ab + ac = 3(b - c) - a(b - c) = (3 - a)(b - c)\\) has the factor \\(b - c\\).\nSo only I and III have the factor \\(b - c\\) (C)"
      },
      {
        id: "a1-ef-37",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Simplify \\(\\frac{1}{x - 2} + \\frac{1}{x + 2} + \\frac{3x + 2}{4 - x^{2}}\\).\nA. \\(\\frac{1}{2 + x}\\)\nB. \\(-\\frac{1}{2 + x}\\)\nC. \\(\\frac{1}{2 - x}\\)\nD. \\(\\frac{2 - 5x}{4 - x^{2}}\\)\nE. \\(\\frac{3x + 2}{4 - x^{2}}\\)",
        answer: "C",
        steps: "\\(\\frac{1}{x - 2} + \\frac{1}{x + 2} = \\frac{2x}{x^{2} - 4} = -\\frac{2x}{4 - x^{2}}\\)\n\\(\\text{Expression} = \\frac{-2x + 3x + 2}{4 - x^{2}} = \\frac{x + 2}{(2 - x)(2 + x)}\\)\n\\(= \\frac{1}{2 - x}\\) (C)"
      },
      {
        id: "a1-ef-38",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(16 - a^{2} - 4b^{2} + 4ab =\\)\nA. \\((4 - a + 2b)(4 + a + 2b)\\)\nB. \\((4 - a - 2b)(4 + a - 2b)\\)\nC. \\((4 - a + 2b)(4 + a - 2b)\\)\nD. \\((4 - a - 2b)(4 - a + 2b)\\)\nE. \\((4 - a - 2b)(4 + a + 2b)\\)",
        answer: "C",
        steps: "\\(16 - a^{2} - 4b^{2} + 4ab = 16 - (a^{2} - 4ab + 4b^{2}) = 4^{2} - (a - 2b)^{2}\\)\n\\(= [4 - (a - 2b)][4 + (a - 2b)] = (4 - a + 2b)(4 + a - 2b)\\) (C)"
      },
      {
        id: "a1-ef-39",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Simplify \\(\\frac{3}{x^{2} - 9} - \\frac{2}{x^{2} - 2x - 3}\\).\nA. \\(\\frac{1}{(x + 1)(x - 3)}\\)\nB. \\(\\frac{1}{(x + 1)(x + 3)}\\)\nC. \\(\\frac{x - 9}{(x + 1)(x - 3)(x + 3)}\\)\nD. \\(\\frac{x + 9}{(x + 1)(x - 3)(x + 3)}\\)\nE. \\(\\frac{1}{(x - 1)(x + 3)}\\)",
        answer: "B",
        steps: "\\(x^{2} - 9 = (x - 3)(x + 3)\\) and \\(x^{2} - 2x - 3 = (x - 3)(x + 1)\\)\n\\(\\text{Expression} = \\frac{3(x + 1) - 2(x + 3)}{(x - 3)(x + 3)(x + 1)} = \\frac{x - 3}{(x - 3)(x + 3)(x + 1)}\\)\n\\(= \\frac{1}{(x + 1)(x + 3)}\\) (B)"
      },
      {
        id: "a1-ef-40",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Factorize \\(x^{2} - 4y^{2} + 6x + 9\\).\nA. \\((x - 2y + 3)(x - 2y - 3)\\)\nB. \\((x + 2y - 3)(x - 2y - 3)\\)\nC. \\((x + 2y + 3)(x - 2y + 3)\\)\nD. \\((x + 2y + 3)(x + 2y - 3)\\)\nE. \\((x + 2y - 3)(x - 2y + 3)\\)",
        answer: "C",
        steps: "\\(x^{2} - 4y^{2} + 6x + 9 = (x^{2} + 6x + 9) - 4y^{2} = (x + 3)^{2} - (2y)^{2}\\)\n\\(= (x + 3 + 2y)(x + 3 - 2y) = (x + 2y + 3)(x - 2y + 3)\\) (C)"
      },
      {
        id: "a1-ef-41",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{4}{x^{2} - 4} - \\frac{5}{x^{2} + x - 6} =\\)\nA. \\(\\frac{-1}{(x + 2)(x + 3)}\\)\nB. \\(\\frac{-1}{(x + 2)(x - 3)}\\)\nC. \\(\\frac{-x - 23}{(x - 2)(x + 2)(x + 3)}\\)\nD. \\(\\frac{-1}{(x - 2)(x - 3)}\\)\nE. \\(\\frac{-1}{(x - 2)(x + 3)}\\)",
        answer: "A",
        steps: "\\(x^{2} - 4 = (x - 2)(x + 2)\\) and \\(x^{2} + x - 6 = (x - 2)(x + 3)\\)\n\\(\\text{Expression} = \\frac{4(x + 3) - 5(x + 2)}{(x - 2)(x + 2)(x + 3)} = \\frac{2 - x}{(x - 2)(x + 2)(x + 3)}\\)\n\\(= \\frac{-1}{(x + 2)(x + 3)}\\) (A)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-42",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Factorize \\(4a^{2} - b^{2} - 2a - b\\).\nA. \\((2a + b)(2a - b + 1)\\)\nB. \\((2a + b + 1)(2a - b - 1)\\)\nC. \\((2a - b)(2a + b - 1)\\)\nD. \\((2a + b)(2a - b - 1)\\)\nE. \\((2a - b)(2a + b + 1)\\)",
        answer: "D",
        steps: "\\(4a^{2} - b^{2} - 2a - b = (2a - b)(2a + b) - (2a + b)\\)\n\\(= (2a + b)(2a - b - 1)\\) (D)"
      },
      {
        id: "a1-ef-43",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{3}{x^{2} - 4} - \\frac{x - 2}{x^{2} - x - 6} =\\)\nA. \\(\\frac{-x^{2} + 7x - 13}{(x - 2)(x + 2)(x - 3)}\\)\nB. \\(\\frac{-x^{2} + 4x - 13}{(x - 2)(x + 2)(x - 3)}\\)\nC. \\(\\frac{-x^{2} - x + 5}{(x - 2)(x + 2)(x - 3)}\\)\nD. \\(\\frac{x^{2} - 7x + 13}{(x - 2)(x + 2)(x - 3)}\\)\nE. \\(\\frac{-x^{2} + 7x - 5}{(x - 2)(x + 2)(x - 3)}\\)",
        answer: "A",
        steps: "\\(x^{2} - 4 = (x - 2)(x + 2)\\) and \\(x^{2} - x - 6 = (x - 3)(x + 2)\\)\n\\(\\text{Expression} = \\frac{3(x - 3) - (x - 2)(x - 2)}{(x - 2)(x + 2)(x - 3)} = \\frac{3x - 9 - x^{2} + 4x - 4}{(x - 2)(x + 2)(x - 3)}\\)\n\\(= \\frac{-x^{2} + 7x - 13}{(x - 2)(x + 2)(x - 3)}\\) (A)"
      },
      {
        id: "a1-ef-44",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Factorize \\(x^{2} - 3x - xy + 3y\\).\nA. \\((x - y)(x - 3)\\)\nB. \\((x + y)(x - 3)\\)\nC. \\((3 - x)(x + y)\\)\nD. \\((x - y)(x + 3)\\)\nE. \\((3 + x)(y - x)\\)",
        answer: "A",
        steps: "\\(x^{2} - 3x - xy + 3y = x(x - 3) - y(x - 3)\\)\n\\(= (x - y)(x - 3)\\) (A)"
      },
      {
        id: "a1-ef-45",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Simplify \\(\\frac{a}{a + 2b} + \\frac{2b}{2b - a} + \\frac{3ab}{a^{2} - 4b^{2}}\\).\nA. \\(1\\)\nB. \\(\\frac{a + 2b}{a - 2b}\\)\nC. \\(\\frac{a^{2} - ab - 4b^{2}}{a^{2} - 4b^{2}}\\)\nD. \\(\\frac{a^{2} + ab - 4b^{2}}{a^{2} - 4b^{2}}\\)\nE. \\(-\\frac{a - 2b}{a + 2b}\\)",
        answer: "C",
        steps: "\\(\\frac{2b}{2b - a} = -\\frac{2b}{a - 2b}\\) and \\(a^{2} - 4b^{2} = (a + 2b)(a - 2b)\\)\n\\(\\text{Expression} = \\frac{a(a - 2b) - 2b(a + 2b) + 3ab}{(a + 2b)(a - 2b)} = \\frac{a^{2} - 2ab - 2ab - 4b^{2} + 3ab}{a^{2} - 4b^{2}}\\)\n\\(= \\frac{a^{2} - ab - 4b^{2}}{a^{2} - 4b^{2}}\\) (C)"
      },
      {
        id: "a1-ef-46",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((3x^{2} - 2x + 1)(2 - 5x) =\\)\nA. \\(-15x^{3} + 16x^{2} + 9x + 2\\)\nB. \\(-15x^{3} + 4x^{2} - 9x + 2\\)\nC. \\(-15x^{3} + 16x^{2} - 9x + 2\\)\nD. \\(15x^{3} - 16x^{2} + 9x - 2\\)\nE. \\(15x^{3} - 4x^{2} - 9x - 2\\)",
        answer: "C",
        steps: "\\((3x^{2} - 2x + 1)(2 - 5x) = 6x^{2} - 15x^{3} - 4x + 10x^{2} + 2 - 5x\\)\n\\(= -15x^{3} + 16x^{2} - 9x + 2\\) (C)"
      },
      {
        id: "a1-ef-47",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Which of the following is a factor of \\(3(a - b)^{2} - a^{2} + b^{2}\\)?\nA. \\(a - 3b\\)\nB. \\(2a + b\\)\nC. \\(a + b\\)\nD. \\(a + 2b\\)\nE. \\(a - 2b\\)",
        answer: "E",
        steps: "\\(3(a - b)^{2} - a^{2} + b^{2} = 3(a - b)^{2} - (a - b)(a + b)\\)\n\\(= (a - b)[3(a - b) - (a + b)] = (a - b)(2a - 4b) = 2(a - b)(a - 2b)\\)\nSo \\(a - 2b\\) is a factor (E)"
      },
      {
        id: "a1-ef-48",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{2 - x}{x^{2} + x - 6} + \\frac{x - 2}{x - 1} =\\)\nA. \\(\\frac{x^{2} - 5}{(x - 1)(x + 3)}\\)\nB. \\(\\frac{x^{2} - 5}{(x - 1)(x - 3)}\\)\nC. \\(\\frac{x^{2} + 3x - 6}{(x - 1)(x + 3)}\\)\nD. \\(\\frac{x^{2} - x - 5}{(x - 1)(x + 3)}\\)\nE. \\(\\frac{x^{2} + 2x - 7}{(x - 1)(x + 3)}\\)",
        answer: "A",
        steps: "\\(x^{2} + x - 6 = (x + 3)(x - 2)\\), so \\(\\frac{2 - x}{x^{2} + x - 6} = \\frac{-(x - 2)}{(x + 3)(x - 2)} = -\\frac{1}{x + 3}\\)\n\\(\\text{Expression} = \\frac{-(x - 1) + (x - 2)(x + 3)}{(x - 1)(x + 3)} = \\frac{-x + 1 + x^{2} + x - 6}{(x - 1)(x + 3)}\\)\n\\(= \\frac{x^{2} - 5}{(x - 1)(x + 3)}\\) (A)"
      },
      {
        id: "a1-ef-49",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(1 - \\frac{3x}{x + \\frac{1}{x}} =\\)\nA. \\(\\frac{x^{2} - 1}{x^{2} + 1}\\)\nB. \\(\\frac{1 - 2x^{2}}{x^{2} + 1}\\)\nC. \\(\\frac{2x^{2} - 1}{x^{2} + 1}\\)\nD. \\(\\frac{1 - 3x^{2}}{x^{2} + 1}\\)\nE. \\(\\frac{1 + 2x^{2}}{x^{2} + 1}\\)",
        answer: "B",
        steps: "\\(\\frac{3x}{x + \\frac{1}{x}} = \\frac{3x^{2}}{x^{2} + 1}\\) (multiply the numerator and the denominator by \\(x\\))\n\\(1 - \\frac{3x^{2}}{x^{2} + 1} = \\frac{x^{2} + 1 - 3x^{2}}{x^{2} + 1} = \\frac{1 - 2x^{2}}{x^{2} + 1}\\) (B)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-50",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{12}{x^{2} + 2x - 8} - \\frac{2}{x - 2} =\\)\nA. \\(\\frac{2}{x + 4}\\)\nB. \\(\\frac{-2}{x + 4}\\)\nC. \\(\\frac{16 - 2x}{(x + 4)(x - 2)}\\)\nD. \\(\\frac{20 - 2x}{(x + 4)(x - 2)}\\)",
        answer: "B",
        steps: "\\(x^{2} + 2x - 8 = (x + 4)(x - 2)\\)\n\\(\\text{Expression} = \\frac{12 - 2(x + 4)}{(x + 4)(x - 2)} = \\frac{4 - 2x}{(x + 4)(x - 2)}\\)\n\\(= \\frac{-2(x - 2)}{(x + 4)(x - 2)} = \\frac{-2}{x + 4}\\) (B)"
      },
      {
        id: "a1-ef-51",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(x^{3} - \\frac{64}{x^{3}} =\\)\nA. \\(\\left(x + \\frac{4}{x}\\right)\\left(x^{2} - 4 + \\frac{16}{x^{2}}\\right)\\)\nB. \\(\\left(x - \\frac{4}{x}\\right)\\left(x^{2} + 8 + \\frac{16}{x^{2}}\\right)\\)\nC. \\(\\left(x + \\frac{4}{x}\\right)\\left(x^{2} - 8 + \\frac{16}{x^{2}}\\right)\\)\nD. \\(\\left(x - \\frac{4}{x}\\right)\\left(x^{2} + 4 + \\frac{16}{x^{2}}\\right)\\)",
        answer: "D",
        steps: "\\(x^{3} - \\frac{64}{x^{3}} = x^{3} - \\left(\\frac{4}{x}\\right)^{3}\\)\n\\(= \\left(x - \\frac{4}{x}\\right)\\left[x^{2} + x \\cdot \\frac{4}{x} + \\left(\\frac{4}{x}\\right)^{2}\\right]\\) (difference of two cubes)\n\\(= \\left(x - \\frac{4}{x}\\right)\\left(x^{2} + 4 + \\frac{16}{x^{2}}\\right)\\) (D)"
      },
      {
        id: "a1-ef-52",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{\\frac{5}{x} - \\frac{2}{y}}{\\frac{4x}{y} - \\frac{25y}{x}} =\\)\nA. \\(\\frac{1}{2x - 5y}\\)\nB. \\(\\frac{-1}{2x - 5y}\\)\nC. \\(\\frac{-1}{2x + 5y}\\)\nD. \\(\\frac{1}{2x + 5y}\\)",
        answer: "C",
        steps: "Numerator \\(= \\frac{5y - 2x}{xy}\\) and denominator \\(= \\frac{4x^{2} - 25y^{2}}{xy}\\)\n\\(\\text{Expression} = \\frac{5y - 2x}{(2x - 5y)(2x + 5y)} = \\frac{-(2x - 5y)}{(2x - 5y)(2x + 5y)} = \\frac{-1}{2x + 5y}\\) (C)"
      },
      {
        id: "a1-ef-53",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((3x - 2)(x^{2} + 2x - 4) =\\)\nA. \\(3x^{3} + 4x^{2} + 16x + 8\\)\nB. \\(3x^{3} + 4x^{2} + 16x - 8\\)\nC. \\(3x^{3} + 4x^{2} - 16x - 8\\)\nD. \\(3x^{3} + 4x^{2} - 16x + 8\\)",
        answer: "D",
        steps: "\\((3x - 2)(x^{2} + 2x - 4) = 3x^{3} + 6x^{2} - 12x - 2x^{2} - 4x + 8\\)\n\\(= 3x^{3} + 4x^{2} - 16x + 8\\) (D)"
      },
      {
        id: "a1-ef-54",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{x + 2} - \\frac{1}{x - 2} =\\)\nA. \\(\\frac{4x}{x^{2} - 4}\\)\nB. \\(\\frac{4}{4 - x^{2}}\\)\nC. \\(\\frac{4x}{4 - x^{2}}\\)\nD. \\(\\frac{4}{x^{2} - 4}\\)",
        answer: "B",
        steps: "\\(\\frac{1}{x + 2} - \\frac{1}{x - 2} = \\frac{(x - 2) - (x + 2)}{(x + 2)(x - 2)}\\)\n\\(= \\frac{-4}{x^{2} - 4} = \\frac{4}{4 - x^{2}}\\) (B)"
      },
      {
        id: "a1-ef-55",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(2pr + 2qr - ps - qs =\\)\nA. \\((p - q)(s - 2r)\\)\nB. \\((p + q)(2s - r)\\)\nC. \\((p + q)(2r - s)\\)\nD. \\((p - q)(2r - s)\\)",
        answer: "C",
        steps: "\\(2pr + 2qr - ps - qs = 2r(p + q) - s(p + q)\\)\n\\(= (p + q)(2r - s)\\) (C)"
      },
      {
        id: "a1-ef-56",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{n + 4} - \\frac{1}{4 - n} =\\)\nA. \\(\\frac{8}{16 - n^{2}}\\)\nB. \\(\\frac{2n}{n^{2} - 16}\\)\nC. \\(\\frac{8}{n^{2} - 16}\\)\nD. \\(\\frac{2n}{16 - n^{2}}\\)",
        answer: "B",
        steps: "\\(\\frac{1}{n + 4} - \\frac{1}{4 - n} = \\frac{(4 - n) - (n + 4)}{(n + 4)(4 - n)}\\)\n\\(= \\frac{-2n}{16 - n^{2}} = \\frac{2n}{n^{2} - 16}\\) (B)"
      },
      {
        id: "a1-ef-57",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((x + x)(y + y + y + y) =\\)\nA. \\(8xy\\)\nB. \\(8x^{2}y^{4}\\)\nC. \\(x^{2}y^{4}\\)\nD. \\(2x + 4y\\)",
        answer: "A",
        steps: "\\(x + x = 2x\\) and \\(y + y + y + y = 4y\\)\n\\((x + x)(y + y + y + y) = 2x \\times 4y = 8xy\\) (A)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-58",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{-3k}{1 - k} - \\frac{1}{k - 1} =\\)\nA. \\(\\frac{3k - 1}{k - 1}\\)\nB. \\(\\frac{3k^{2} + 1}{k^{2} - 1}\\)\nC. \\(1\\)\nD. \\(\\frac{k + 1}{k - 1}\\)",
        answer: "A",
        steps: "\\(\\frac{-3k}{1 - k} - \\frac{1}{k - 1} = \\frac{-3k}{1 - k} + \\frac{1}{1 - k} = \\frac{1 - 3k}{1 - k}\\)\n\\(= \\frac{3k - 1}{k - 1}\\) (A)"
      },
      {
        id: "a1-ef-59",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((3x^{2} - 2x + 4) - 2(x^{2} - 3x + 1) =\\)\nA. \\(x^{2} + 4x + 2\\)\nB. \\(5x^{2} - 8x + 6\\)\nC. \\(5x^{2} + 4x + 2\\)\nD. \\(x^{2} - 8x + 2\\)",
        answer: "A",
        steps: "\\((3x^{2} - 2x + 4) - 2(x^{2} - 3x + 1) = 3x^{2} - 2x + 4 - 2x^{2} + 6x - 2\\)\n\\(= x^{2} + 4x + 2\\) (A)"
      },
      {
        id: "a1-ef-60",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "Which of the following must have \\(x + y\\) as a factor?\nI. \\(x^{2} - y^{2}\\)\nII. \\(x(x + y) - 2x - 2y\\)\nIII. \\(x^{2} + y^{2} + 2x\\)\nA. I only\nB. II only\nC. I and II only\nD. II and III only",
        answer: "C",
        steps: "I: \\(x^{2} - y^{2} = (x + y)(x - y)\\) has the factor \\(x + y\\).\nII: \\(x(x + y) - 2x - 2y = x(x + y) - 2(x + y) = (x + y)(x - 2)\\) has the factor \\(x + y\\).\nIII: \\(x^{2} + y^{2} + 2x\\) does not have the factor \\(x + y\\) (it is not zero when \\(y = -x\\)).\nSo I and II only (C)"
      },
      {
        id: "a1-ef-61",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{3}{a - 2} - \\frac{2}{1 - a} =\\)\nA. \\(\\frac{5a - 1}{(a - 1)(a - 2)}\\)\nB. \\(\\frac{a - 7}{(a - 1)(a - 2)}\\)\nC. \\(\\frac{5}{(a - 1)(a - 2)}\\)\nD. \\(\\frac{5a - 7}{(a - 1)(a - 2)}\\)",
        answer: "D",
        steps: "\\(\\frac{3}{a - 2} - \\frac{2}{1 - a} = \\frac{3}{a - 2} + \\frac{2}{a - 1}\\)\n\\(= \\frac{3(a - 1) + 2(a - 2)}{(a - 1)(a - 2)} = \\frac{5a - 7}{(a - 1)(a - 2)}\\) (D)"
      },
      {
        id: "a1-ef-62",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((4x - 3)(2x^{2} - 3x + 5) =\\)\nA. \\(8x^{3} - 18x^{2} + 29x - 15\\)\nB. \\(8x^{3} - 18x^{2} - 29x - 15\\)\nC. \\(8x^{3} - 6x^{2} + 29x - 15\\)\nD. \\(8x^{3} + 18x^{2} + 29x + 15\\)",
        answer: "A",
        steps: "\\((4x - 3)(2x^{2} - 3x + 5) = 8x^{3} - 12x^{2} + 20x - 6x^{2} + 9x - 15\\)\n\\(= 8x^{3} - 18x^{2} + 29x - 15\\) (A)"
      },
      {
        id: "a1-ef-63",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{3x - 2} + \\frac{1}{3x + 2} =\\)\nA. \\(\\frac{6x}{3x^{2} - 2}\\)\nB. \\(\\frac{6}{3x^{2} - 2}\\)\nC. \\(\\frac{6x}{9x^{2} - 4}\\)\nD. \\(\\frac{6}{9x^{2} - 4}\\)",
        answer: "C",
        steps: "\\(\\frac{1}{3x - 2} + \\frac{1}{3x + 2} = \\frac{(3x + 2) + (3x - 2)}{(3x - 2)(3x + 2)}\\)\n\\(= \\frac{6x}{9x^{2} - 4}\\) (C)"
      },
      {
        id: "a1-ef-64",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(ab - ac - b^{2} + bc =\\)\nA. \\((a + b)(c - b)\\)\nB. \\((a - c)(b + c)\\)\nC. \\((a - b)(b - c)\\)\nD. \\((a - b)(b + c)\\)",
        answer: "C",
        steps: "\\(ab - ac - b^{2} + bc = a(b - c) - b(b - c)\\)\n\\(= (a - b)(b - c)\\) (C)"
      },
      {
        id: "a1-ef-65",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((x - 3y)(x + 3y - 2) =\\)\nA. \\(x^{2} + 3y^{2} - 2x + 6y\\)\nB. \\(x^{2} - 9y^{2} - 2x + 6y\\)\nC. \\(x^{2} + 3y^{2} + 2x + 6y\\)\nD. \\(x^{2} - 9y^{2} + 2x + 6y\\)",
        answer: "B",
        steps: "\\((x - 3y)(x + 3y - 2) = x^{2} + 3xy - 2x - 3xy - 9y^{2} + 6y\\)\n\\(= x^{2} - 9y^{2} - 2x + 6y\\) (B)"
      },
      {
        id: "a1-ef-66",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(a^{2} - b^{2} + 4b - 4 =\\)\nA. \\((a - b - 2)(a + b - 2)\\)\nB. \\((a - b + 2)(a + b + 2)\\)\nC. \\((a - b + 2)(a + b - 2)\\)\nD. \\((a - b - 2)(a + b + 2)\\)",
        answer: "C",
        steps: "\\(a^{2} - b^{2} + 4b - 4 = a^{2} - (b^{2} - 4b + 4) = a^{2} - (b - 2)^{2}\\)\n\\(= [a - (b - 2)][a + (b - 2)] = (a - b + 2)(a + b - 2)\\) (C)"
      },
      {
        id: "a1-ef-67",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{2}{3 - x} + \\frac{x - 1}{(x - 3)^{2}} =\\)\nA. \\(\\frac{x - 7}{(3 - x)^{2}}\\)\nB. \\(\\frac{7 - x}{(3 - x)^{2}}\\)\nC. \\(\\frac{x + 5}{(3 - x)^{2}}\\)\nD. \\(\\frac{5 - x}{(3 - x)^{2}}\\)",
        answer: "D",
        steps: "\\(\\frac{2}{3 - x} = -\\frac{2}{x - 3} = \\frac{-2(x - 3)}{(x - 3)^{2}}\\)\n\\(\\text{Expression} = \\frac{-2(x - 3) + (x - 1)}{(x - 3)^{2}} = \\frac{5 - x}{(x - 3)^{2}} = \\frac{5 - x}{(3 - x)^{2}}\\) (D)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-68",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(p^{2} - 9q^{2} - p - 3q =\\)\nA. \\((p + 3q)(p - 3q - 1)\\)\nB. \\((p - 3q)(p + 3q - 1)\\)\nC. \\((p + 3q)(p + 3q - 1)\\)\nD. \\((p - 3q)(p - 3q + 1)\\)",
        answer: "A",
        steps: "\\(p^{2} - 9q^{2} - p - 3q = (p + 3q)(p - 3q) - (p + 3q)\\)\n\\(= (p + 3q)(p - 3q - 1)\\) (A)"
      },
      {
        id: "a1-ef-69",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((3x + 2y)^{2} - (3x - 2y)^{2} =\\)\nA. \\(24xy\\)\nB. \\(12xy\\)\nC. \\(8y^{2}\\)\nD. \\(0\\)",
        answer: "A",
        steps: "\\((3x + 2y)^{2} - (3x - 2y)^{2} = (9x^{2} + 12xy + 4y^{2}) - (9x^{2} - 12xy + 4y^{2})\\)\n\\(= 24xy\\) (A)"
      },
      {
        id: "a1-ef-70",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(xp - yp - xq + yq + xr - yr =\\)\nA. \\((x - y)(p - q + r)\\)\nB. \\((x - y)(p + q - r)\\)\nC. \\((x + y)(p + q - r)\\)\nD. \\((x + y)(p - q + r)\\)",
        answer: "A",
        steps: "\\(xp - yp - xq + yq + xr - yr = p(x - y) - q(x - y) + r(x - y)\\)\n\\(= (x - y)(p - q + r)\\) (A)"
      },
      {
        id: "a1-ef-71",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(u^{2} - v^{2} - 7u - 7v =\\)\nA. \\((u + v)(u - v - 7)\\)\nB. \\((u + v)(u - v + 7)\\)\nC. \\((u - v)(u + v - 7)\\)\nD. \\((u - v)(u + v + 7)\\)",
        answer: "A",
        steps: "\\(u^{2} - v^{2} - 7u - 7v = (u + v)(u - v) - 7(u + v)\\)\n\\(= (u + v)(u - v - 7)\\) (A)"
      },
      {
        id: "a1-ef-72",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((x - 1)(x^{2} - x + 1) =\\)\nA. \\((x - 1)^{3}\\)\nB. \\(x^{3} - 1\\)\nC. \\(x^{3} - 2x^{2} + 2x - 1\\)\nD. \\(x^{3} - x^{2} + x - 1\\)",
        answer: "C",
        steps: "\\((x - 1)(x^{2} - x + 1) = x^{3} - x^{2} + x - x^{2} + x - 1\\)\n\\(= x^{3} - 2x^{2} + 2x - 1\\) (C)"
      },
      {
        id: "a1-ef-73",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{x^{2} - 4x + 4} - \\frac{1}{x^{2} + x - 6} =\\)\nA. \\(\\frac{1}{(x - 2)^{2}(x + 3)}\\)\nB. \\(\\frac{2x + 1}{(x - 2)^{2}(x + 3)}\\)\nC. \\(\\frac{5}{(x - 2)^{2}(x + 3)}\\)\nD. \\(\\frac{1}{(x - 2)(x + 3)}\\)",
        answer: "C",
        steps: "\\(x^{2} - 4x + 4 = (x - 2)^{2}\\) and \\(x^{2} + x - 6 = (x - 2)(x + 3)\\)\n\\(\\text{Expression} = \\frac{(x + 3) - (x - 2)}{(x - 2)^{2}(x + 3)}\\)\n\\(= \\frac{5}{(x - 2)^{2}(x + 3)}\\) (C)"
      },
      {
        id: "a1-ef-74",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(25 - (3x - 2y)^{2} =\\)\nA. \\((5 - 3x - 2y)(5 + 3x - 2y)\\)\nB. \\((5 - 3x + 2y)(5 + 3x + 2y)\\)\nC. \\((5 - 3x + 2y)(5 + 3x - 2y)\\)\nD. \\((5 - 3x - 2y)(5 + 3x + 2y)\\)",
        answer: "C",
        steps: "\\(25 - (3x - 2y)^{2} = 5^{2} - (3x - 2y)^{2}\\)\n\\(= [5 - (3x - 2y)][5 + (3x - 2y)] = (5 - 3x + 2y)(5 + 3x - 2y)\\) (C)"
      },
      {
        id: "a1-ef-75",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(2m^{2} - 5mn + 3n^{2} + m - n =\\)\nA. \\((m + n)(2m + 3n - 1)\\)\nB. \\((m - n)(2m - 3n + 1)\\)\nC. \\((m + n)(2m - 3n - 1)\\)\nD. \\((m - n)(2m + 3n + 1)\\)",
        answer: "B",
        steps: "\\(2m^{2} - 5mn + 3n^{2} = (m - n)(2m - 3n)\\)\n\\(2m^{2} - 5mn + 3n^{2} + m - n = (m - n)(2m - 3n) + (m - n)\\)\n\\(= (m - n)(2m - 3n + 1)\\) (B)"
      },
      {
        id: "a1-ef-76",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(h^{2} - 9k^{2} - 2h - 6k =\\)\nA. \\((h + 3k)(h - 3k + 2)\\)\nB. \\((h + 3k)(h - 3k - 2)\\)\nC. \\((h - 3k)(h + 3k + 2)\\)\nD. \\((h - 3k)(h + 3k - 2)\\)",
        answer: "B",
        steps: "\\(h^{2} - 9k^{2} - 2h - 6k = (h + 3k)(h - 3k) - 2(h + 3k)\\)\n\\(= (h + 3k)(h - 3k - 2)\\) (B)"
      },
      {
        id: "a1-ef-77",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{1}{2x + 5} - \\frac{1}{2x - 5} =\\)\nA. \\(\\frac{4x}{4x^{2} - 25}\\)\nB. \\(\\frac{10}{25 - 4x^{2}}\\)\nC. \\(\\frac{10}{4x^{2} - 25}\\)\nD. \\(\\frac{4x}{25 - 4x^{2}}\\)",
        answer: "B",
        steps: "\\(\\frac{1}{2x + 5} - \\frac{1}{2x - 5} = \\frac{(2x - 5) - (2x + 5)}{(2x + 5)(2x - 5)}\\)\n\\(= \\frac{-10}{4x^{2} - 25} = \\frac{10}{25 - 4x^{2}}\\) (B)"
      },
      {
        id: "a1-ef-78",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((a + b)(a^{2} - ab - b^{2}) =\\)\nA. \\((a + b)^{3}\\)\nB. \\(a^{3} + b^{3}\\)\nC. \\(a^{3} - 2a^{2}b + 2ab^{2} - b^{3}\\)\nD. \\(a^{3} - 2ab^{2} - b^{3}\\)",
        answer: "D",
        steps: "\\((a + b)(a^{2} - ab - b^{2}) = a^{3} - a^{2}b - ab^{2} + a^{2}b - ab^{2} - b^{3}\\)\n\\(= a^{3} - 2ab^{2} - b^{3}\\) (D)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-79",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{3}{5k + 2} - \\frac{4}{5k - 2} =\\)\nA. \\(\\frac{-5k - 2}{25k^{2} - 4}\\)\nB. \\(\\frac{35k - 2}{25k^{2} - 4}\\)\nC. \\(\\frac{-5k + 14}{25k^{2} - 4}\\)\nD. \\(\\frac{-5k - 14}{25k^{2} - 4}\\)",
        answer: "D",
        steps: "\\(\\frac{3}{5k + 2} - \\frac{4}{5k - 2} = \\frac{3(5k - 2) - 4(5k + 2)}{(5k + 2)(5k - 2)}\\)\n\\(= \\frac{15k - 6 - 20k - 8}{25k^{2} - 4} = \\frac{-5k - 14}{25k^{2} - 4}\\) (D)"
      },
      {
        id: "a1-ef-80",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((2a + 3b)(5a - 4b) - a(4a + 6b) =\\)\nA. \\((2a + 3b)(3a - 4b)\\)\nB. \\((2a - 3b)(3a - 4b)\\)\nC. \\((2a + 3b)(3a + 4b)\\)\nD. \\((2a - 3b)(3a + 4b)\\)",
        answer: "A",
        steps: "\\((2a + 3b)(5a - 4b) - a(4a + 6b) = (2a + 3b)(5a - 4b) - 2a(2a + 3b)\\)\n\\(= (2a + 3b)[(5a - 4b) - 2a] = (2a + 3b)(3a - 4b)\\) (A)"
      },
      {
        id: "a1-ef-81",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((u + v)(u - v)(u + 2) =\\)\nA. \\(u^{3} - 2u^{2} - uv^{2} - 2v^{2}\\)\nB. \\(u^{3} + 2u^{2} + uv^{2} + 2v^{2}\\)\nC. \\(u^{3} + 2u^{2} - uv^{2} + 2v^{2}\\)\nD. \\(u^{3} + 2u^{2} - uv^{2} - 2v^{2}\\)",
        answer: "D",
        steps: "\\((u + v)(u - v)(u + 2) = (u^{2} - v^{2})(u + 2)\\)\n\\(= u^{3} + 2u^{2} - uv^{2} - 2v^{2}\\) (D)"
      },
      {
        id: "a1-ef-82",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{4}{n - 3} - \\frac{5}{n - 4} =\\)\nA. \\(\\frac{n - 31}{(n - 3)(4 - n)}\\)\nB. \\(\\frac{n + 1}{(n - 3)(n - 4)}\\)\nC. \\(\\frac{9n - 31}{(n - 3)(n - 4)}\\)\nD. \\(\\frac{n + 1}{(n - 3)(4 - n)}\\)",
        answer: "D",
        steps: "\\(\\frac{4}{n - 3} - \\frac{5}{n - 4} = \\frac{4(n - 4) - 5(n - 3)}{(n - 3)(n - 4)}\\)\n\\(= \\frac{4n - 16 - 5n + 15}{(n - 3)(n - 4)} = \\frac{-n - 1}{(n - 3)(n - 4)} = \\frac{n + 1}{(n - 3)(4 - n)}\\) (D)"
      },
      {
        id: "a1-ef-83",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\alpha^{2} - 2\\alpha - \\beta^{2} - 2\\beta =\\)\nA. \\((\\alpha + \\beta)(\\alpha - \\beta - 2)\\)\nB. \\((\\alpha + \\beta)(\\alpha - \\beta + 2)\\)\nC. \\((\\alpha - \\beta)(\\alpha + \\beta + 2)\\)\nD. \\((\\alpha - \\beta)(\\alpha + \\beta - 2)\\)",
        answer: "A",
        steps: "\\(\\alpha^{2} - 2\\alpha - \\beta^{2} - 2\\beta = (\\alpha + \\beta)(\\alpha - \\beta) - 2(\\alpha + \\beta)\\)\n\\(= (\\alpha + \\beta)(\\alpha - \\beta - 2)\\) (A)"
      },
      {
        id: "a1-ef-84",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{3}{4 - 3x} - \\frac{2}{4 + 3x} =\\)\nA. \\(\\frac{4 - 15x}{16 - 9x^{2}}\\)\nB. \\(\\frac{4 + 3x}{16 - 9x^{2}}\\)\nC. \\(\\frac{20 + 3x}{16 - 9x^{2}}\\)\nD. \\(\\frac{4 + 15x}{16 - 9x^{2}}\\)",
        answer: "D",
        steps: "\\(\\frac{3}{4 - 3x} - \\frac{2}{4 + 3x} = \\frac{3(4 + 3x) - 2(4 - 3x)}{(4 - 3x)(4 + 3x)}\\)\n\\(= \\frac{12 + 9x - 8 + 6x}{16 - 9x^{2}} = \\frac{4 + 15x}{16 - 9x^{2}}\\) (D)"
      },
      {
        id: "a1-ef-85",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(3x^{2} + 2xy - y^{2} + 6x + 6y =\\)\nA. \\((x - y)(3x + y + 6)\\)\nB. \\((x + y)(3x + y - 6)\\)\nC. \\((x + y)(3x - y + 6)\\)\nD. \\((x - y)(3x - y - 6)\\)",
        answer: "C",
        steps: "\\(3x^{2} + 2xy - y^{2} = (3x - y)(x + y)\\) and \\(6x + 6y = 6(x + y)\\)\n\\(3x^{2} + 2xy - y^{2} + 6x + 6y = (x + y)(3x - y) + 6(x + y) = (x + y)(3x - y + 6)\\) (C)"
      },
      {
        id: "a1-ef-86",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((x + 5y)^{2} - (x - 5y)^{2} =\\)\nA. \\(2x^{2} + 50y^{2}\\)\nB. \\(2x^{2}\\)\nC. \\(20xy\\)\nD. \\(10xy\\)",
        answer: "C",
        steps: "\\((x + 5y)^{2} - (x - 5y)^{2} = (x^{2} + 10xy + 25y^{2}) - (x^{2} - 10xy + 25y^{2})\\)\n\\(= 20xy\\) (C)"
      },
      {
        id: "a1-ef-87",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(49 - (2m + 5n)^{2} =\\)\nA. \\((7 + 2m + 5n)(7 - 2m - 5n)\\)\nB. \\((7 + 2m - 5n)(7 - 2m + 5n)\\)\nC. \\((7 + 2m - 5n)(7 - 2m - 5n)\\)\nD. \\((7 + 2m + 5n)(7 - 2m + 5n)\\)",
        answer: "A",
        steps: "\\(49 - (2m + 5n)^{2} = 7^{2} - (2m + 5n)^{2}\\)\n\\(= [7 - (2m + 5n)][7 + (2m + 5n)] = (7 - 2m - 5n)(7 + 2m + 5n)\\) (A)"
      },
      {
        id: "a1-ef-88",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "The L.C.M. of \\(p^{2} - 9q^{2}\\), \\(p^{3} - 27q^{3}\\) and \\((p + 3q)(p^{2} - 9q^{2})\\) is\nA. \\(p^{2} - 9q^{2}\\).\nB. \\(p - 3q\\).\nC. \\((p + 3q)^{2}(p^{3} - 27q^{3})\\).\nD. \\((p + 3q)(p^{2} - 9q^{2})(p^{3} - 27q^{3})\\).",
        answer: "C",
        steps: "\\(p^{2} - 9q^{2} = (p + 3q)(p - 3q)\\), \\(p^{3} - 27q^{3} = (p - 3q)(p^{2} + 3pq + 9q^{2})\\) and \\((p + 3q)(p^{2} - 9q^{2}) = (p + 3q)^{2}(p - 3q)\\)\nL.C.M. \\(= (p + 3q)^{2}(p - 3q)(p^{2} + 3pq + 9q^{2}) = (p + 3q)^{2}(p^{3} - 27q^{3})\\) (C)"
      },
      // Expansion, Factorization and Algebraic Fractions (continued)
      {
        id: "a1-ef-89",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\(\\frac{2}{k + 3} + \\frac{5}{3k - 7} =\\)\nA. \\(\\frac{-11k - 1}{(k + 3)(3k - 7)}\\)\nB. \\(\\frac{11k - 1}{(k + 3)(3k - 7)}\\)\nC. \\(\\frac{11k + 1}{(k + 3)(3k - 7)}\\)\nD. \\(\\frac{k - 29}{(k + 3)(3k - 7)}\\)",
        answer: "C",
        steps: "\\(\\frac{2}{k + 3} + \\frac{5}{3k - 7} = \\frac{2(3k - 7) + 5(k + 3)}{(k + 3)(3k - 7)}\\)\n\\(= \\frac{6k - 14 + 5k + 15}{(k + 3)(3k - 7)} = \\frac{11k + 1}{(k + 3)(3k - 7)}\\) (C)"
      },
      {
        id: "a1-ef-90",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "\\((3\\alpha - \\beta)^{2} + (\\alpha - 3\\beta)^{2} =\\)\nA. \\(8\\alpha^{2} - 12\\alpha\\beta + 8\\beta^{2}\\)\nB. \\(10\\alpha^{2} - 6\\alpha\\beta + 10\\beta^{2}\\)\nC. \\(8\\alpha^{2} - 6\\alpha\\beta + 8\\beta^{2}\\)\nD. \\(10\\alpha^{2} - 12\\alpha\\beta + 10\\beta^{2}\\)",
        answer: "D",
        steps: "\\((3\\alpha - \\beta)^{2} = 9\\alpha^{2} - 6\\alpha\\beta + \\beta^{2}\\) and \\((\\alpha - 3\\beta)^{2} = \\alpha^{2} - 6\\alpha\\beta + 9\\beta^{2}\\)\nSum \\(= 10\\alpha^{2} - 12\\alpha\\beta + 10\\beta^{2}\\) (D)"
      },
      {
        id: "a1-ef-91",
        type: "Expansion, Factorization and Algebraic Fractions",
        question: "The H.C.F. and L.C.M. of three expressions are \\(xyz^{2}\\) and \\(x^{3}y^{5}z^{4}\\) respectively. If the first expression and the second expression are \\(x^{2}y^{3}z^{4}\\) and \\(xy^{5}z^{4}\\) respectively, then the third expression is\nA. \\(x^{2}y^{5}z^{2}\\)\nB. \\(x^{3}yz^{2}\\)\nC. \\(x^{3}yz^{4}\\)\nD. \\(x^{3}y^{3}z^{2}\\)",
        answer: "B",
        steps: "The \\(x\\)-part: the L.C.M. has \\(x^{3}\\), but the first two expressions have only \\(x^{2}\\) and \\(x\\), so the third has \\(x^{3}\\).\nThe \\(y\\)-part: the H.C.F. has \\(y\\), but the first two have \\(y^{3}\\) and \\(y^{5}\\), so the third has \\(y\\).\nThe \\(z\\)-part: the H.C.F. has \\(z^{2}\\), but the first two have \\(z^{4}\\), so the third has \\(z^{2}\\).\nThe third expression is \\(x^{3}yz^{2}\\) (B)"
      },
      // Percentage (continued)
      {
        id: "a1-pc-9",
        type: "Percentage",
        question: "A man sold a car for \\(\\$42\\,000\\) at a loss of 20% on the cost price. What would have been the loss or gain percent if he had sold it for \\(\\$63\\,000\\)?\nA. A gain of 2%\nB. No gain nor loss\nC. A loss of 2%\nD. A loss of 20%\nE. A gain of 20%",
        answer: "E",
        steps: "Selling price \\(= 80\\%\\) of cost, so cost \\(= \\$42\\,000 \\div 0.8 = \\$52\\,500\\).\nIf sold for \\$63 000: gain \\(= \\frac{63\\,000 - 52\\,500}{52\\,500} \\times 100\\% = 20\\%\\). (E)"
      },
      {
        id: "a1-pc-10",
        type: "Percentage",
        question: "If the length of a rectangle is increased by 20% and the width decreased by 20%, which of the following is true?\nA. Its area is increased by 4%.\nB. Its area is increased by 20%.\nC. Its area is decreased by 4%.\nD. Its area remains the same.\nE. Its area is decreased by 20%.",
        answer: "C",
        steps: "New area \\(= (1 + 20\\%)(1 - 20\\%) \\times \\text{original area} = 1.2 \\times 0.8 = 0.96\\) of the original area.\nSo the area is decreased by \\(4\\%\\). (C)"
      },
      {
        id: "a1-pc-11",
        type: "Percentage",
        question: "\\(\\$A\\) amounts to \\(\\$B\\) in \\(t\\) years at simple interest. The rate per annum is\nA. \\(\\frac{100t(B - A)}{A}\\%\\)\nB. \\(\\frac{100(B - A)}{tA}\\%\\)\nC. \\(100\\left[\\left(\\frac{B}{A}\\right)^{\\frac{1}{t}} - 1\\right]\\%\\)\nD. \\(\\frac{100(B - A)}{tB}\\%\\)\nE. \\(\\frac{100(B - A)}{t}\\%\\)",
        answer: "B",
        steps: "Interest \\(= B - A\\). Simple interest \\(= \\frac{A \\times r \\times t}{100}\\), so \\(B - A = \\frac{Art}{100}\\).\n\\(r = \\frac{100(B - A)}{tA}\\%\\) (B)"
      },
      {
        id: "a1-pc-12",
        type: "Percentage",
        question: "The marked price of a book is \\(\\$x\\). 40% of this price is profit. If the book is sold at a discount of 25%, what will the profit then be?\nA. \\(\\$0.55x\\)\nB. \\(\\$0.03x\\)\nC. \\(\\$0.35x\\)\nD. \\(\\$0.25x\\)\nE. \\(\\$0.15x\\)",
        answer: "E",
        steps: "Cost \\(= x - 0.4x = 0.6x\\).\nSelling price \\(= 0.75x\\), so profit \\(= 0.75x - 0.6x = \\$0.15x\\). (E)"
      },
      {
        id: "a1-pc-13",
        type: "Percentage",
        question: "A group consists of \\(n\\) boys and \\(n\\) girls. If three of the girls are replaced by three other boys, then 53% of the group members will be boys. What is \\(n\\)?\nA. \\(50\\)\nB. \\(53\\)\nC. \\(100\\)\nD. \\(25\\)\nE. \\(106\\)",
        answer: "A",
        steps: "After the change there are \\(n + 3\\) boys among \\(2n\\) members.\n\\(n + 3 = 0.53 \\times 2n = 1.06n\\), so \\(0.06n = 3\\) and \\(n = 50\\). (A)"
      },
      {
        id: "a1-pc-14",
        type: "Percentage",
        question: "A merchant sold 100 chairs. 70 of them were sold at a profit of 20% on each chair, while 30 of them were sold at a loss of 30% on each chair. What is his percentage gain or loss on the whole stock?\nA. A loss of 5%\nB. A gain of 15%\nC. A loss of 10%\nD. A gain of 5%\nE. A gain of 10%",
        answer: "D",
        steps: "Let the cost of each chair be \\(\\$c\\). Total cost \\(= 100c\\).\nTotal selling price \\(= 70 \\times 1.2c + 30 \\times 0.7c = 84c + 21c = 105c\\).\nGain \\(= \\frac{105c - 100c}{100c} \\times 100\\% = 5\\%\\). (D)"
      },
      {
        id: "a1-pc-15",
        type: "Percentage",
        question: "What will \\(\\$P\\) amount to in 5 years' time if interest is compounded quarterly at 8% per annum?\nA. \\(\\$P\\left(1 + \\frac{2}{100}\\right)^{20}\\)\nB. \\(\\$P\\left(1 + \\frac{2}{100}\\right)^{4}\\)\nC. \\(\\$P\\left(1 + \\frac{2}{100}\\right)^{5}\\)\nD. \\(\\$P\\left(1 + \\frac{8}{100}\\right)^{20}\\)\nE. \\(\\$P\\left(1 + \\frac{8}{100}\\right)^{5}\\)",
        answer: "A",
        steps: "Rate per quarter \\(= \\frac{8\\%}{4} = 2\\%\\) and the number of quarters \\(= 5 \\times 4 = 20\\).\nAmount \\(= \\$P\\left(1 + \\frac{2}{100}\\right)^{20}\\). (A)"
      },
      {
        id: "a1-pc-16",
        type: "Percentage",
        question: "A child spent \\(\\frac{1}{5}\\) of his savings on a shirt and \\(\\frac{1}{4}\\) of his savings on a pair of trousers. He then spent 40% of the rest of his savings on books. What percentage of his savings did he spend altogether?\nA. 65%\nB. 67%\nC. 72%\nD. 70%\nE. 62%",
        answer: "B",
        steps: "Spent on shirt and trousers \\(= \\frac{1}{5} + \\frac{1}{4} = 45\\%\\); the rest \\(= 55\\%\\).\nBooks \\(= 40\\% \\times 55\\% = 22\\%\\).\nTotal spent \\(= 45\\% + 22\\% = 67\\%\\). (B)"
      },
      {
        id: "a1-pc-17",
        type: "Percentage",
        question: "The rent of a flat is raised by 25% every three years beginning from a fixed date. Counting from that date, after how many years will the rent just exceed three times the original rent?\nA. 12 years\nB. 18 years\nC. 9 years\nD. 15 years\nE. Over 18 years",
        answer: "D",
        steps: "After \\(n\\) increases the rent is \\(1.25^{n}\\) times the original.\n\\(1.25^{4} \\approx 2.44 < 3\\) but \\(1.25^{5} \\approx 3.05 > 3\\), so 5 increases are needed.\nTime \\(= 5 \\times 3 = 15\\) years. (D)"
      },
      {
        id: "a1-pc-18",
        type: "Percentage",
        question: "The marked price of a book is \\(\\$360\\). If the book is sold at a discount of 25%, the profit will be 50% of the cost price. What is the cost price of the book?\nA. \\(\\$240\\)\nB. \\(\\$270\\)\nC. \\(\\$180\\)\nD. \\(\\$135\\)\nE. \\(\\$202.5\\)",
        answer: "C",
        steps: "Selling price \\(= \\$360 \\times 75\\% = \\$270\\).\nSelling price \\(= 150\\%\\) of the cost, so cost \\(= \\$270 \\div 1.5 = \\$180\\). (C)"
      },
      {
        id: "a1-pc-19",
        type: "Percentage",
        question: "Some air escapes from a spherical balloon of volume \\(64a^{3}\\). The balloon keeps its spherical shape and is now of volume \\(27b^{3}\\). What is the percentage decrease in the radius?\nA. \\(\\frac{4a - 3b}{3b} \\times 100\\%\\)\nB. \\(\\frac{a - b}{a} \\times 100\\%\\)\nC. \\(\\frac{4a - 3b}{4a} \\times 100\\%\\)\nD. \\(\\frac{64a^{3} - 27b^{3}}{27b^{3}} \\times 100\\%\\)\nE. \\(\\frac{64a^{3} - 27b^{3}}{64a^{3}} \\times 100\\%\\)",
        answer: "C",
        steps: "Radius is proportional to the cube root of the volume: the radius changes from \\(4a\\) to \\(3b\\) (in the same unit).\nPercentage decrease \\(= \\frac{4a - 3b}{4a} \\times 100\\%\\). (C)"
      },
      {
        id: "a1-pc-20",
        type: "Percentage",
        question: "A man marks his goods at a price that will bring him a profit of 60% on the cost price. If he wants to sell his goods to a friend at the cost price, the percentage discount on the marked price should be\nA. 60%\nB. 40%\nC. 35%\nD. 37.5%\nE. 30%",
        answer: "D",
        steps: "Let the cost be \\(c\\); the marked price \\(= 1.6c\\).\nDiscount \\(= \\frac{1.6c - c}{1.6c} \\times 100\\% = 37.5\\%\\). (D)"
      },
      {
        id: "a1-pc-21",
        type: "Percentage",
        question: "It took Paul 45 minutes to walk from Town A to Town B. If the return journey took him 36 minutes, the percentage increase in his speed was\nA. 36%\nB. 25%\nC. 20%\nD. 30%\nE. 45%",
        answer: "B",
        steps: "Speed is inversely proportional to time: new speed \\(\\div\\) old speed \\(= \\frac{45}{36} = 1.25\\).\nThe speed increased by \\(25\\%\\). (B)"
      },
      {
        id: "a1-pc-22",
        type: "Percentage",
        question: "A merchant sold 2 articles each at \\(\\$1200\\). For the first article, he gained 20% on the cost price. For the second article, he lost 25% on the cost price. Altogether\nA. he lost \\(\\$50\\).\nB. he lost \\(\\$100\\).\nC. he gained \\(\\$100\\).\nD. he gained \\(\\$200\\).\nE. he lost \\(\\$200\\).",
        answer: "E",
        steps: "First: cost \\(= \\$1200 \\div 1.2 = \\$1000\\), gain \\(= \\$200\\).\nSecond: cost \\(= \\$1200 \\div 0.75 = \\$1600\\), loss \\(= \\$400\\).\nNet result: \\(200 - 400 = -200\\), i.e. he lost \\(\\$200\\). (E)"
      },
      {
        id: "a1-pc-23",
        type: "Percentage",
        question: "\\(\\$20\\,000\\) is invested for 1 year at 12% per annum, compounded quarterly. The compound interest, correct to the nearest dollar, is\nA. \\(\\$2360\\)\nB. \\(\\$2000\\)\nC. \\(\\$2510\\)\nD. \\(\\$22\\,510\\)\nE. \\(\\$2400\\)",
        answer: "C",
        steps: "Rate per quarter \\(= 3\\%\\) and there are 4 quarters.\nAmount \\(= \\$20\\,000 \\times 1.03^{4} \\approx \\$22\\,510\\).\nCompound interest \\(\\approx \\$22\\,510 - \\$20\\,000 = \\$2510\\). (C)"
      },
      // Percentage (continued)
      {
        id: "a1-pc-24",
        type: "Percentage",
        question: "The marked price of a book is 30% above the cost price. If the book is sold at a discount of 15% off the marked price, what is the gain per cent based on the cost price?\nA. 15%\nB. None of the above.\nC. 10.5%\nD. 5.5%\nE. 10%",
        answer: "C",
        steps: "Let the cost be \\(c\\). Marked price \\(= 1.3c\\); selling price \\(= 1.3c \\times 0.85 = 1.105c\\).\nGain \\(= \\frac{1.105c - c}{c} \\times 100\\% = 10.5\\%\\). (C)"
      },
      {
        id: "a1-pc-25",
        type: "Percentage",
        question: "Last year, a man saved 20% of his income. By how much per cent must his income be increased if his expenditure increased by 25% and he wants to save 25% of his income?\nA. 20%\nB. 40%\nC. 33⅓%\nD. 25%\nE. 50%",
        answer: "C",
        steps: "Let last year's income be \\(I\\). Last year's expenditure \\(= 0.8I\\), so this year's expenditure \\(= 1.25 \\times 0.8I = I\\).\nLet the new income be \\(y\\). Saving \\(= 25\\%\\) of \\(y\\), so expenditure \\(= 75\\%\\) of \\(y\\): \\(0.75y = I\\), \\(y = \\frac{4}{3}I\\).\nThe income must increase by \\(33\\frac{1}{3}\\%\\). (C)"
      },
      {
        id: "a1-pc-26",
        type: "Percentage",
        question: "A hawker bought 150 apples and the cost was \\(\\$120\\). It was found that \\(\\frac{1}{6}\\) of the apples were rotten and could not be sold. He sold the rest at \\(\\$1.2\\) each. What percentage of the cost was his profit?\nA. 12.5%\nB. 25%\nC. 20%\nD. 30%\nE. 33⅓%",
        answer: "B",
        steps: "Apples sold \\(= 150 \\times \\frac{5}{6} = 125\\), so the selling price \\(= 125 \\times \\$1.2 = \\$150\\).\nProfit \\(= \\$150 - \\$120 = \\$30\\), which is \\(\\frac{30}{120} \\times 100\\% = 25\\%\\) of the cost. (B)"
      },
      {
        id: "a1-pc-27",
        type: "Percentage",
        question: "The marked price of a book is 80% above its cost. In a sale, what percentage discount was given if the profit made was 26% of the cost?\nA. 20%\nB. 30%\nC. 10%\nD. 25%\nE. 40%",
        answer: "B",
        steps: "Let the cost be \\(c\\). Marked price \\(= 1.8c\\) and selling price \\(= 1.26c\\).\nSelling price \\(= (1 - d) \\times 1.8c\\), so \\(1 - d = \\frac{1.26}{1.8} = 0.7\\) and \\(d = 30\\%\\). (B)"
      },
      {
        id: "a1-pc-28",
        type: "Percentage",
        question: "40% of the students in a school are boys. 50% of the boys and 30% of the girls wear glasses. If 570 students wear glasses, how many students are there in the school?\nA. 1800\nB. 1425\nC. 1140\nD. 1500\nE. 1000",
        answer: "D",
        steps: "Let there be \\(N\\) students. Glasses \\(= 40\\% \\times 50\\%N + 60\\% \\times 30\\%N = 0.2N + 0.18N = 0.38N\\).\n\\(0.38N = 570\\), so \\(N = 1500\\). (D)"
      },
      {
        id: "a1-pc-29",
        type: "Percentage",
        question: "A number is first increased by \\(p\\%\\) and then decreased by \\(x\\%\\). If the number so obtained is the same as the original number, then \\(x =\\)\nA. \\(\\frac{100p}{100 + p}\\)\nB. \\(\\frac{p}{1 + p}\\)\nC. \\(\\frac{p}{100}\\)\nD. \\(p\\)\nE. \\(\\frac{100}{100 + p}\\)",
        answer: "A",
        steps: "Let the original number be \\(N\\). \\(N\\left(1 + \\frac{p}{100}\\right)\\left(1 - \\frac{x}{100}\\right) = N\\).\n\\(1 - \\frac{x}{100} = \\frac{100}{100 + p}\\), so \\(x = 100 - \\frac{10\\,000}{100 + p} = \\frac{100p}{100 + p}\\). (A)"
      },
      {
        id: "a1-pc-30",
        type: "Percentage",
        question: "The length and width of a cuboid are each increased by 30% and the height remains unchanged. The percentage increase in volume is\nA. 69%\nB. 99%\nC. 60%\nD. 30%\nE. 90%",
        answer: "A",
        steps: "New volume \\(= 1.3 \\times 1.3 \\times \\) original volume \\(= 1.69\\) of the original.\nThe percentage increase is \\(69\\%\\). (A)"
      },
      {
        id: "a1-pc-31",
        type: "Percentage",
        question: "If the compound interest on \\(\\$2000\\) for three years at 6% p.a., paid quarterly is \\(\\$x\\), find \\(x\\).\nA. \\(2000\\left(1 + \\frac{1.5}{100}\\right)^{12} - 2000\\)\nB. \\(2000\\left(1 + \\frac{6}{100}\\right)^{3} - 2000\\)\nC. \\(2000\\left(1 + \\frac{6}{100}\\right)^{12}\\)\nD. \\(2000\\left(1 + \\frac{1.5}{100}\\right)^{12}\\)\nE. \\(2000\\left(\\frac{1.5}{100}\\right)^{12}\\)",
        answer: "A",
        steps: "Rate per quarter \\(= \\frac{6\\%}{4} = 1.5\\%\\); number of quarters \\(= 3 \\times 4 = 12\\).\nAmount \\(= 2000\\left(1 + \\frac{1.5}{100}\\right)^{12}\\), so the compound interest \\(x = 2000\\left(1 + \\frac{1.5}{100}\\right)^{12} - 2000\\). (A)"
      },
      {
        id: "a1-pc-32",
        type: "Percentage",
        question: "The marked price of an article is originally \\(P\\). The marked price is then increased so that when a discount of 20% is made on the new marked price, the selling price is still \\(P\\). What is the new marked price?\nA. \\(\\frac{4}{5}P\\)\nB. \\(\\frac{5}{6}P\\)\nC. \\(\\frac{5}{4}P\\)\nD. \\(\\frac{6}{5}P\\)\nE. \\(\\frac{21}{20}P\\)",
        answer: "C",
        steps: "Let the new marked price be \\(M\\). \\(0.8M = P\\).\n\\(M = \\frac{P}{0.8} = \\frac{5}{4}P\\). (C)"
      },
      {
        id: "a1-pc-33",
        type: "Percentage",
        question: "Twelve litres of a mixture contain 50% of alcohol and 50% of water by volume. How many litres of water should be added so that it contains 20% of alcohol by volume?\nA. 6\nB. 30\nC. 12\nD. 24\nE. 18",
        answer: "E",
        steps: "Alcohol \\(= 6\\) litres. For 20% alcohol the total volume must be \\(6 \\div 0.2 = 30\\) litres.\nWater to be added \\(= 30 - 12 = 18\\) litres. (E)"
      },
      {
        id: "a1-pc-34",
        type: "Percentage",
        question: "Find, correct to the nearest dollar, the compound interest on \\(\\$8000\\) at 6% p.a. for 3 years, compounded half-yearly.\nA. \\(\\$1440\\)\nB. \\(\\$9552\\)\nC. \\(\\$9600\\)\nD. \\(\\$1561\\)\nE. \\(\\$1552\\)",
        answer: "E",
        steps: "Rate per half-year \\(= 3\\%\\); number of half-years \\(= 6\\).\nAmount \\(= \\$8000 \\times 1.03^{6} \\approx \\$9552\\), so the interest \\(\\approx \\$9552 - \\$8000 = \\$1552\\). (E)"
      },
      {
        id: "a1-pc-35",
        type: "Percentage",
        question: "If the selling price of 8 pens is the same as the cost price of 11 pens, the percentage profit in selling a pen will be\nA. 37.5%\nB. 137.5%\nC. 30%\nD. 72.7%\nE. 25%",
        answer: "A",
        steps: "Let the cost of a pen be \\(c\\). Selling price of a pen \\(= \\frac{11c}{8} = 1.375c\\).\nPercentage profit \\(= 37.5\\%\\). (A)"
      },
      {
        id: "a1-pc-36",
        type: "Percentage",
        question: "Peter bought an article for $x. He sold it to Mary at a profit of 25%. Mary then sold it to John for \\(\\$150\\) at a loss of 20%. Find x.\nA. 187.5\nB. 150\nC. 120\nD. 125\nE. 135",
        answer: "B",
        steps: "Mary's cost \\(= \\$150 \\div 0.8 = \\$187.5\\).\n\\(1.25x = 187.5\\), so \\(x = 150\\). (B)"
      },
      {
        id: "a1-pc-37",
        type: "Percentage",
        question: "Find the difference between simple interest and compound interest (compounded annually) on a loan of \\(\\$2000\\) for 3 years at 5% per annum. (The answer should be correct to the nearest dollar.)\nA. \\(\\$315\\)\nB. \\(\\$15\\)\nC. \\(\\$615\\)\nD. \\(\\$300\\)\nE. \\(\\$2315\\)",
        answer: "B",
        steps: "Simple interest \\(= 2000 \\times 5\\% \\times 3 = \\$300\\).\nCompound interest \\(= 2000 \\times (1.05^{3} - 1) \\approx \\$315.25\\).\nDifference \\(\\approx \\$15\\). (B)"
      },
      {
        id: "a1-pc-38",
        type: "Percentage",
        question: "Last year, the cost of a school magazine consisted of:\ncost of paper --------------- \\(\\$10\\)\ncost of printing ------------ \\(\\$6\\)\ncost of binding ------------ \\(\\$4\\)\nThis year, the cost of paper will increase by 30% and the cost of printing will increase by 50% while the cost of binding will remain unchanged. The cost of a school magazine will increase by\nA. 20%\nB. 25%\nC. 80%\nD. 40%\nE. 30%",
        answer: "E",
        steps: "New cost \\(= 10 \\times 1.3 + 6 \\times 1.5 + 4 = 13 + 9 + 4 = \\$26\\); old cost \\(= \\$20\\).\nIncrease \\(= \\frac{26 - 20}{20} \\times 100\\% = 30\\%\\). (E)"
      },
      // Percentage (continued)
      {
        id: "a1-pc-39",
        type: "Percentage",
        question: "X sells an article to Y at a profit. Y then sells it to Z for \\(\\$84\\) at a profit of 40%. If X had sold the article directly to Z for \\(\\$84\\), how much MORE profit would he have made?\nA. \\(\\$144\\)\nB. \\(\\$12\\)\nC. \\(\\$24\\)\nD. It cannot be found.\nE. \\(\\$60\\)",
        answer: "C",
        steps: "Y's cost \\(= \\$84 \\div 1.4 = \\$60\\), which is the price at which X sold to Y.\nIf X sold directly to Z for \\$84, he would get \\(\\$84 - \\$60 = \\$24\\) more. (C)"
      },
      {
        id: "a1-pc-40",
        type: "Percentage",
        question: "A car travels from P to Q. If its speed is decreased by \\(k\\%\\), then the time it takes to travel the same distance is increased by\nA. \\(\\frac{100k}{100 + k}\\%\\)\nB. \\(\\frac{k}{100 - k}\\%\\)\nC. \\(\\frac{100}{k}\\%\\)\nD. \\(\\frac{100k}{100 - k}\\%\\)\nE. \\(k\\%\\)",
        answer: "D",
        steps: "Let the original speed be \\(v\\) and the distance \\(d\\). The new speed is \\(v\\left(1 - \\frac{k}{100}\\right)\\).\nNew time \\(= \\frac{d}{v} \\times \\frac{100}{100 - k}\\), so the time increases by \\(\\left(\\frac{100}{100 - k} - 1\\right) \\times 100\\% = \\frac{100k}{100 - k}\\%\\). (D)"
      },
      {
        id: "a1-pc-41",
        type: "Percentage",
        question: "A bag contains n balls of which 70% are red and 30% are white. After 20 red balls are taken out from the bag, the percentage of red balls becomes 60%. Find n.\nA. 40\nB. 60\nC. 200\nD. 80\nE. 100",
        answer: "D",
        steps: "\\(0.7n - 20 = 0.6(n - 20)\\)\n\\(0.7n - 20 = 0.6n - 12\\), so \\(0.1n = 8\\) and \\(n = 80\\). (D)"
      },
      {
        id: "a1-pc-42",
        type: "Percentage",
        question: "A cylindrical hole of radius r is drilled through the centre of a solid cylinder of base radius 3r and height 2r, from the top face to the bottom face. The percentage increase in the total surface area is\nA. 20%\nB. 10%\nC. 6⅔%\nD. 33⅓%\nE. 0%",
        answer: "C",
        steps: "Original total surface area \\(= 2\\pi(3r)^{2} + 2\\pi(3r)(2r) = 18\\pi r^{2} + 12\\pi r^{2} = 30\\pi r^{2}\\).\nDrilling removes two circles of area \\(\\pi r^{2}\\) each (\\(-2\\pi r^{2}\\)) and adds the curved surface of the hole \\(2\\pi r(2r) = 4\\pi r^{2}\\). Net change \\(= +2\\pi r^{2}\\).\nPercentage increase \\(= \\frac{2\\pi r^{2}}{30\\pi r^{2}} \\times 100\\% = 6\\frac{2}{3}\\%\\). (C)"
      },
      {
        id: "a1-pc-43",
        type: "Percentage",
        question: "If A is greater than B by 30% and B is smaller than C by 40%, then\nA. A is greater than C by 18%.\nB. A is smaller than C by 22%.\nC. A is greater than C by 10%.\nD. A is greater than C by 22%.\nE. A is smaller than C by 10%.",
        answer: "B",
        steps: "\\(A = 1.3B\\) and \\(B = 0.6C\\), so \\(A = 1.3 \\times 0.6C = 0.78C\\).\nSo A is smaller than C by \\(22\\%\\). (B)"
      },
      {
        id: "a1-pc-44",
        type: "Percentage",
        question: "At the beginning of a year, a man borrows \\(\\$2000\\) from a bank at 6% per annum, compounded yearly. He promises to repay \\(\\$700\\) at the end of each year. How much will he still owe the bank just after the second repayment?\nA. \\(\\$760\\)\nB. \\(\\$1020\\)\nC. \\(\\$1205.20\\)\nD. \\(\\$805.20\\)\nE. \\(\\$840\\)",
        answer: "D",
        steps: "After 1 year: \\(2000 \\times 1.06 - 700 = \\$1420\\).\nAfter 2 years: \\(1420 \\times 1.06 - 700 = 1505.2 - 700 = \\$805.20\\). (D)"
      },
      {
        id: "a1-pc-45",
        type: "Percentage",
        question: "Find the amount (correct to the nearest dollar) of \\(\\$15\\,000\\) at 6% p.a., compounded monthly, for 3 years.\nA. \\(\\$17\\,950\\)\nB. \\(\\$540\\,000\\)\nC. \\(\\$17\\,700\\)\nD. \\(\\$18\\,000\\)\nE. \\(\\$17\\,820\\)",
        answer: "A",
        steps: "Rate per month \\(= 0.5\\%\\); number of months \\(= 36\\).\nAmount \\(= \\$15\\,000 \\times 1.005^{36} \\approx \\$17\\,950\\). (A)"
      },
      {
        id: "a1-pc-46",
        type: "Percentage",
        question: "If a flat is sold for \\(\\$660\\,000\\), the gain is 10%. Find the percentage loss if the flat is sold for \\(\\$510\\,000\\).\nA. 20%\nB. 5%\nC. 15%\nD. 12.5%\nE. 10%",
        answer: "C",
        steps: "Cost \\(= \\$660\\,000 \\div 1.1 = \\$600\\,000\\).\nLoss \\(= \\frac{600\\,000 - 510\\,000}{600\\,000} \\times 100\\% = 15\\%\\). (C)"
      },
      {
        id: "a1-pc-47",
        type: "Percentage",
        question: "If A is 20% greater than B and B is 20% less than C, then\nA. C is 4% greater than A.\nB. A is 4% less than C.\nC. C is 4% less than A.\nD. A = C.\nE. A is 4% greater than C.",
        answer: "B",
        steps: "\\(A = 1.2B\\) and \\(B = 0.8C\\), so \\(A = 0.96C\\).\nSo A is \\(4\\%\\) less than C. (B)"
      },
      {
        id: "a1-pc-48",
        type: "Percentage",
        question: "A blanket loses 15% of its length and 10% of its width after washing. The percentage loss in area is\nA. 22.5%\nB. 23.5%\nC. 12.5%\nD. 10%\nE. 25%",
        answer: "B",
        steps: "New area \\(= 0.85 \\times 0.9 = 0.765\\) of the original.\nPercentage loss \\(= 1 - 0.765 = 23.5\\%\\). (B)"
      },
      {
        id: "a1-pc-49",
        type: "Percentage",
        question: "A man borrows \\(\\$12\\,000\\) from a bank at 6% per annum compounded monthly. He repays the bank \\(\\$3\\,000\\) at the end of each month. How much does he still owe the bank just after the second repayment?\nA. \\(\\$6\\,000\\)\nB. \\(\\$9\\,105.30\\)\nC. \\(\\$6\\,120\\)\nD. \\(\\$6\\,105.30\\)\nE. \\(\\$9\\,000\\)",
        answer: "D",
        steps: "Rate per month \\(= 0.5\\%\\). After month 1: \\(12\\,000 \\times 1.005 - 3000 = \\$9060\\).\nAfter month 2: \\(9060 \\times 1.005 - 3000 = 9105.3 - 3000 = \\$6105.30\\). (D)"
      },
      {
        id: "a1-pc-50",
        type: "Percentage",
        question: "4 kg of a solution contains 30% of alcohol by weight. How much alcohol should be added to obtain a solution containing 50% of alcohol by weight?\nA. 1.6 kg\nB. 2 kg\nC. 1.2 kg\nD. 0.8 kg\nE. 3.2 kg",
        answer: "A",
        steps: "Let \\(x\\) kg of alcohol be added: \\(1.2 + x = 0.5(4 + x)\\).\n\\(0.5x = 0.8\\), so \\(x = 1.6\\) kg. (A)"
      },
      {
        id: "a1-pc-51",
        type: "Percentage",
        question: "P sold an article to Q at a profit of 20%. Q sold it to R at a profit of 25%. If Q gained \\(\\$750\\), how much did P gain?\nA. \\(\\$300\\)\nB. \\(\\$500\\)\nC. \\(\\$600\\)\nD. \\(\\$450\\)\nE. \\(\\$750\\)",
        answer: "B",
        steps: "Q's cost \\(= \\$750 \\div 25\\% = \\$3000\\).\nP's cost \\(= \\$3000 \\div 1.2 = \\$2500\\), so P gained \\(\\$3000 - \\$2500 = \\$500\\). (B)"
      },
      {
        id: "a1-pc-52",
        type: "Percentage",
        question: "A sum of \\(\\$12\\,000\\) is deposited at 5% p.a., compounded yearly. Find the interest earned in the second year.\nA. \\(\\$600\\)\nB. \\(\\$1230\\)\nC. \\(\\$1260\\)\nD. \\(\\$12\\,630\\)\nE. \\(\\$630\\)",
        answer: "E",
        steps: "Amount after 1 year \\(= 12\\,000 \\times 1.05 = \\$12\\,600\\).\nInterest in the second year \\(= 12\\,600 \\times 5\\% = \\$630\\). (E)"
      },
      {
        id: "a1-pc-53",
        type: "Percentage",
        question: "By selling an article at 20% discount off the marked price, a shop still makes 28% profit. If the cost price of the article is \\(\\$15\\,000\\), then the marked price is\nA. \\(\\$24\\,600\\).\nB. \\(\\$20\\,250\\).\nC. \\(\\$27\\,000\\).\nD. \\(\\$24\\,000\\).\nE. \\(\\$19\\,200\\).",
        answer: "D",
        steps: "Selling price \\(= \\$15\\,000 \\times 1.28 = \\$19\\,200\\).\nMarked price \\(= \\$19\\,200 \\div 0.8 = \\$24\\,000\\). (D)"
      },
      {
        id: "a1-pc-54",
        type: "Percentage",
        question: "A merchant marks his goods 40% above the cost. He allows 15% discount on the marked price for a cash sale. Find the percentage profit the merchant makes for a cash sale.\nA. 19%\nB. 11%\nC. 25%\nD. 55%\nE. 15%",
        answer: "A",
        steps: "Let the cost be \\(c\\). Selling price \\(= 1.4c \\times 0.85 = 1.19c\\).\nPercentage profit \\(= 19\\%\\). (A)"
      },
      {
        id: "a1-pc-55",
        type: "Percentage",
        question: "Which of the following gives the compound interest on \\(\\$5000\\) at 9% p.a. for two years, compounded quarterly?\nA. \\(\\$5000\\left[\\left(1 + \\frac{0.9}{4}\\right)^{8} - 1\\right]\\)\nB. \\(\\$5000\\left[\\left(1 + \\frac{0.09}{4}\\right)^{8} - 1\\right]\\)\nC. \\(\\$5000\\left(1 + \\frac{0.09}{4}\\right)^{8}\\)\nD. \\(\\$5000(1.09^{8} - 1)\\)\nE. \\(\\$5000\\left(\\frac{0.09}{4}\\right)^{8}\\)",
        answer: "B",
        steps: "Rate per quarter \\(= \\frac{0.09}{4}\\) and the number of quarters \\(= 2 \\times 4 = 8\\).\nCompound interest \\(=\\) amount \\(-\\) principal \\(= \\$5000\\left[\\left(1 + \\frac{0.09}{4}\\right)^{8} - 1\\right]\\). (B)"
      },
      {
        id: "a1-pc-56",
        type: "Percentage",
        question: "Originally \\(\\frac{3}{5}\\) of the students in a class failed in an examination. After taking a re-examination, 50% of the failed students passed. Find the total pass percentage of the class.\nA. 30%\nB. 60%\nC. 70%\nD. 40%\nE. 50%",
        answer: "C",
        steps: "Originally passed \\(= \\frac{2}{5} = 40\\%\\).\nPassed in the re-examination \\(= 50\\% \\times 60\\% = 30\\%\\).\nTotal pass percentage \\(= 40\\% + 30\\% = 70\\%\\). (C)"
      },
      {
        id: "a1-pc-57",
        type: "Percentage",
        question: "Mr Chan bought a car for \\(\\$185\\,000\\). If the value of the car goes down by 15% each year, find its value at the end of the third year. (Give your answer correct to the nearest hundred dollars.)\nA. \\(\\$113\\,600\\)\nB. \\(\\$157\\,300\\)\nC. \\(\\$133\\,700\\)\nD. \\(\\$101\\,800\\)\nE. \\(\\$134\\,900\\)",
        answer: "A",
        steps: "Value after 3 years \\(= \\$185\\,000 \\times 0.85^{3}\\).\n\\(\\approx \\$113\\,613 \\approx \\$113\\,600\\). (A)"
      },
      {
        id: "a1-pc-58",
        type: "Percentage",
        question: "A wholesaler sells an article to a retailer at a profit of 25%. The retailer sells it to a customer for \\(\\$4500\\) at a profit of \\(\\$900\\). Find the original cost of the article to the wholesaler.\nA. \\(\\$2700\\)\nB. \\(\\$2000\\)\nC. \\(\\$2880\\)\nD. \\(\\$3600\\)\nE. \\(\\$3000\\)",
        answer: "C",
        steps: "Retailer's cost \\(= \\$4500 - \\$900 = \\$3600\\).\nWholesaler's cost \\(= \\$3600 \\div 1.25 = \\$2880\\). (C)"
      },
      {
        id: "a1-pc-59",
        type: "Percentage",
        question: "Find the interest on \\(\\$P\\) at \\(r\\%\\) p.a. for \\(n\\) years, compounded quarterly.\nA. \\(\\$P\\left(1 + \\frac{r}{4}\\%\\right)^{n} - \\$P\\)\nB. \\(\\$P(1 + r\\%)^{n} - \\$P\\)\nC. \\(\\$P(1 + 4r\\%)^{n} - \\$P\\)\nD. \\(\\$P(1 + r\\%)^{4n} - \\$P\\)\nE. \\(\\$P\\left(1 + \\frac{r}{4}\\%\\right)^{4n} - \\$P\\)",
        answer: "E",
        steps: "Rate per quarter \\(= \\frac{r}{4}\\%\\) and number of quarters \\(= 4n\\).\nInterest \\(=\\) amount \\(-\\) principal \\(= \\$P\\left(1 + \\frac{r}{4}\\%\\right)^{4n} - \\$P\\). (E)"
      },
      {
        id: "a1-pc-60",
        type: "Percentage",
        question: "The marked price of a toy is \\(\\$180\\) and the percentage profit is 50% when it is sold at the marked price. If the toy is sold at a discount of 25%, the profit is\nA. \\(\\$60\\).\nB. \\(\\$45\\).\nC. \\(\\$15\\).\nD. \\(\\$30\\).\nE. \\(\\$9\\).",
        answer: "C",
        steps: "Cost \\(= \\$180 \\div 1.5 = \\$120\\).\nSelling price \\(= \\$180 \\times 0.75 = \\$135\\), so profit \\(= \\$135 - \\$120 = \\$15\\). (C)"
      },
      {
        id: "a1-pc-61",
        type: "Percentage",
        question: "Shop A offers a 25% discount on a book marked at \\(\\$P\\). Shop B offers a 20% discount on the same book marked at \\(\\$Q\\). If the selling price of the book is the same in both shops, express \\(Q\\) in terms of \\(P\\).\nA. \\(Q = \\frac{4}{5}P\\)\nB. \\(Q = \\frac{16}{15}P\\)\nC. \\(Q = P - 5\\)\nD. \\(Q = \\frac{5}{4}P\\)\nE. \\(Q = \\frac{15}{16}P\\)",
        answer: "E",
        steps: "\\(0.75P = 0.8Q\\)\n\\(Q = \\frac{0.75}{0.8}P = \\frac{15}{16}P\\) (E)"
      },
      {
        id: "a1-pc-62",
        type: "Percentage",
        question: "The length of a rectangle is decreased by 25%. If the area remains unchanged, find the percentage increase of its width.\nA. 20%\nB. 33⅓%\nC. 25%\nD. 75%\nE. 30%",
        answer: "B",
        steps: "Let the length be \\(l\\) and the width \\(w\\). The new length is \\(0.75l\\), so the new width is \\(\\frac{lw}{0.75l} = \\frac{4}{3}w\\).\nThe width increases by \\(33\\frac{1}{3}\\%\\). (B)"
      },
      {
        id: "a1-pc-63",
        type: "Percentage",
        question: "There are 1 500 students in a school, of which 900 are boys and 600 are girls. If 40% of the boys and 70% of the girls wear glasses, what percentage of students in the school wear glasses?\nA. 55%\nB. 50%\nC. 48%\nD. 52%\nE. 56%",
        answer: "D",
        steps: "Boys with glasses \\(= 0.4 \\times 900 = 360\\); girls with glasses \\(= 0.7 \\times 600 = 420\\).\nPercentage \\(= \\frac{360 + 420}{1500} \\times 100\\% = 52\\%\\). (D)"
      },
      {
        id: "a1-pc-64",
        type: "Percentage",
        question: "Find the interest on \\(\\$20\\,000\\) at 12% per annum for 2 years, compounded half-yearly. Give the answer correct to the nearest dollar.\nA. \\(\\$25\\,250\\)\nB. \\(\\$5\\,250\\)\nC. \\(\\$4\\,800\\)\nD. \\(\\$2\\,400\\)\nE. \\(\\$5\\,500\\)",
        answer: "B",
        steps: "Rate per half-year \\(= 6\\%\\); number of half-years \\(= 4\\).\nInterest \\(= \\$20\\,000 \\times (1.06^{4} - 1) \\approx \\$5250\\). (B)"
      },
      {
        id: "a1-pc-65",
        type: "Percentage",
        question: "A man bought a box of 250 oranges for \\(\\$600\\). 15 of the oranges were rotten and the rest were sold at \\(\\$3.5\\) each. Find his percentage profit correct to 2 significant figures.\nA. 61%\nB. 44%\nC. 33%\nD. 27%\nE. 37%",
        answer: "E",
        steps: "Oranges sold \\(= 250 - 15 = 235\\), so the income \\(= 235 \\times \\$3.5 = \\$822.5\\).\nProfit \\(= \\$822.5 - \\$600 = \\$222.5\\), so the percentage profit \\(= \\frac{222.5}{600} \\times 100\\% \\approx 37\\%\\). (E)"
      },
      // Percentage (continued)
      {
        id: "a1-pc-66",
        type: "Percentage",
        question: "In a class, students study either History or Geography, but not both. If the number of students studying Geography is 25% more than those studying History, what is the percentage of students studying History?\nA. 80%\nB. 25%\nC. 20%\nD. 55⁵⁄₉%\nE. 44⁴⁄₉%",
        answer: "E",
        steps: "Let the number studying History be \\(4k\\). Then Geography \\(= 1.25 \\times 4k = 5k\\).\nPercentage studying History \\(= \\frac{4k}{4k + 5k} \\times 100\\% = 44\\frac{4}{9}\\%\\). (E)"
      },
      {
        id: "a1-pc-67",
        type: "Percentage",
        question: "A man bought two books at \\(\\$50\\) and \\(\\$150\\) respectively. He sold the first one at a profit of 30% and the second one at a loss of 20%. On the whole, he\nA. gained 7.5%.\nB. lost 5%.\nC. lost 10%.\nD. gained 10%.\nE. lost 7.5%.",
        answer: "E",
        steps: "Total cost \\(= 50 + 150 = \\$200\\). Total selling price \\(= 50 \\times 1.3 + 150 \\times 0.8 = 65 + 120 = \\$185\\).\nLoss \\(= \\frac{200 - 185}{200} \\times 100\\% = 7.5\\%\\). (E)"
      },
      {
        id: "a1-pc-68",
        type: "Percentage",
        question: "A bank offers loans at an interest rate of 12% per annum, compounded monthly. A man took a loan of \\(\\$30\\,000\\) and repays the bank in monthly instalments of \\(\\$5\\,000\\). Find the outstanding balance after his first instalment.\nA. \\(\\$25\\,300\\)\nB. \\(\\$29\\,700\\)\nC. \\(\\$25\\,000\\)\nD. \\(\\$25\\,600\\)\nE. \\(\\$25\\,360\\)",
        answer: "A",
        steps: "Rate per month \\(= 1\\%\\).\nBalance \\(= 30\\,000 \\times 1.01 - 5000 = 30\\,300 - 5000 = \\$25\\,300\\). (A)"
      },
      {
        id: "a1-pc-69",
        type: "Percentage",
        question: "35% of the students in a class failed in a test. They had to sit for another test in which 60% of them failed again. Find the percentage of students who failed in both tests.\nA. 35%\nB. 25%\nC. 14%\nD. 21%\nE. 60%",
        answer: "D",
        steps: "Percentage failing both \\(= 35\\% \\times 60\\% = 21\\%\\). (D)"
      },
      {
        id: "a1-pc-70",
        type: "Percentage",
        question: "The simple interest on a sum of money at r% p.a. for 3 years is equal to the compound interest on the same amount at 6% p.a. for 3 years compounded half-yearly. The value of r, correct to 2 significant figures, is\nA. 6.0.\nB. 19.\nC. 6.5.\nD. 6.2.",
        answer: "C",
        steps: "Let the principal be \\(P\\). Compound interest \\(= P(1.03^{6} - 1) \\approx 0.19405P\\).\nSimple interest \\(= P \\times \\frac{r}{100} \\times 3\\), so \\(\\frac{3r}{100} = 0.19405\\) and \\(r \\approx 6.5\\). (C)"
      },
      {
        id: "a1-pc-71",
        type: "Percentage",
        question: "The cost price of a toy is \\(\\$240\\) and the marked price is \\(\\$360\\). If the toy is sold at 15% discount of the marked price, the profit is\nA. \\(\\$120\\).\nB. \\(\\$66\\).\nC. \\(\\$54\\).\nD. \\(\\$84\\).",
        answer: "B",
        steps: "Selling price \\(= 360 \\times 0.85 = \\$306\\).\nProfit \\(= \\$306 - \\$240 = \\$66\\). (B)"
      },
      {
        id: "a1-pc-72",
        type: "Percentage",
        question: "John's daily working hours have increased from 6 hours to 9 hours but his hourly pay has decreased by 20%. Find the percentage change in John's daily income.\nA. An increase of 10%\nB. An increase of 20%\nC. 0%\nD. A decrease of 20%",
        answer: "B",
        steps: "New daily income \\(= (9 \\times 0.8) \\times \\text{old hourly pay} = 7.2\\), old \\(= 6\\).\nPercentage change \\(= \\frac{7.2 - 6}{6} \\times 100\\% = +20\\%\\). (B)"
      },
      {
        id: "a1-pc-73",
        type: "Percentage",
        question: "A sum of \\(\\$12\\,000\\) is deposited at 2% p.a., compounded yearly. Find the interest earned after 3 years. Give the answer correct to the nearest dollar.\nA. \\(\\$760\\)\nB. \\(\\$720\\)\nC. \\(\\$734\\)\nD. \\(\\$735\\)",
        answer: "C",
        steps: "Interest \\(= 12\\,000 \\times (1.02^{3} - 1) \\approx \\$734\\). (C)"
      },
      {
        id: "a1-pc-74",
        type: "Percentage",
        question: "The marked price of a book is 25% above the cost. If the book is sold at a 12% discount on the marked price, then the percentage profit is\nA. 10%.\nB. 3%.\nC. 15%.\nD. 13%.",
        answer: "A",
        steps: "Let the cost be \\(c\\). Selling price \\(= 1.25c \\times 0.88 = 1.1c\\).\nPercentage profit \\(= 10\\%\\). (A)"
      },
      {
        id: "a1-pc-75",
        type: "Percentage",
        question: "Peter sold two flats for \\(\\$660\\,000\\) each. He lost 20% on one and gained 20% on the other. After the two transactions, Peter\nA. gained \\(\\$110\\,000\\).\nB. gained \\(\\$55\\,000\\).\nC. lost \\(\\$110\\,000\\).\nD. lost \\(\\$55\\,000\\).",
        answer: "D",
        steps: "Flat with loss: cost \\(= 660\\,000 \\div 0.8 = \\$825\\,000\\), loss \\(= \\$165\\,000\\).\nFlat with gain: cost \\(= 660\\,000 \\div 1.2 = \\$550\\,000\\), gain \\(= \\$110\\,000\\).\nNet result \\(= 110\\,000 - 165\\,000 = -55\\,000\\), i.e. he lost \\(\\$55\\,000\\). (D)"
      },
      {
        id: "a1-pc-76",
        type: "Percentage",
        question: "The marked price of a car is 80% higher than the cost. If the car is sold at a 30% discount on the marked price, then the percentage profit is\nA. 36%.\nB. 16%.\nC. 10%.\nD. 26%.",
        answer: "D",
        steps: "Selling price \\(= 1.8c \\times 0.7 = 1.26c\\), so the profit is \\(26\\%\\). (D)"
      },
      {
        id: "a1-pc-77",
        type: "Percentage",
        question: "A sum of \\(\\$16\\,000\\) is deposited at 3% per annum for 6 years, compounded yearly. Find the interest correct to the nearest dollar.\nA. \\(\\$3\\,104\\)\nB. \\(\\$2\\,880\\)\nC. \\(\\$3\\,105\\)\nD. \\(\\$19\\,105\\)",
        answer: "C",
        steps: "Interest \\(= 16\\,000 \\times (1.03^{6} - 1) \\approx \\$3105\\). (C)"
      },
      {
        id: "a1-pc-78",
        type: "Percentage",
        question: "If the bus fare is increased from \\(\\$5\\) to \\(\\$7\\), then the percentage increase of the fare is\nA. 40%.\nB. 28.6%.\nC. 2%.\nD. 140%.",
        answer: "A",
        steps: "Percentage increase \\(= \\frac{7 - 5}{5} \\times 100\\% = 40\\%\\). (A)"
      },
      {
        id: "a1-pc-79",
        type: "Percentage",
        question: "A sum of \\(\\$25\\,000\\) is deposited at an interest rate of 6% per annum for 5 years, compounded monthly. Find the amount correct to the nearest dollar.\nA. \\(\\$33\\,721\\)\nB. \\(\\$34\\,105\\)\nC. \\(\\$33\\,456\\)\nD. \\(\\$32\\,500\\)",
        answer: "A",
        steps: "Rate per month \\(= 0.5\\%\\); number of months \\(= 60\\).\nAmount \\(= 25\\,000 \\times 1.005^{60} \\approx \\$33\\,721\\). (A)"
      },
      {
        id: "a1-pc-80",
        type: "Percentage",
        question: "The marked price of a bag is \\(\\$1\\,200\\). If the bag is sold at the marked price, then the percentage profit is 60%. If the bag is sold at a 25% discount on the marked price, then the profit is\nA. \\(\\$100\\).\nB. \\(\\$450\\).\nC. \\(\\$300\\).\nD. \\(\\$150\\).",
        answer: "D",
        steps: "Cost \\(= 1200 \\div 1.6 = \\$750\\).\nSelling price \\(= 1200 \\times 0.75 = \\$900\\), so profit \\(= \\$150\\). (D)"
      },
      {
        id: "a1-pc-81",
        type: "Percentage",
        question: "If a dictionary is sold at its marked price, then the percentage profit is 40%. If the dictionary is sold at a 25% discount on its marked price, then the profit is \\(\\$6\\). Find the cost of the dictionary.\nA. \\(\\$120\\).\nB. \\(\\$105\\).\nC. \\(\\$100\\).\nD. \\(\\$126\\).",
        answer: "A",
        steps: "Let the cost be \\(c\\). Selling price after discount \\(= 1.4c \\times 0.75 = 1.05c\\).\nProfit \\(= 0.05c = 6\\), so \\(c = \\$120\\). (A)"
      },
      {
        id: "a1-pc-82",
        type: "Percentage",
        question: "A sum of \\(\\$40\\,000\\) is deposited at an interest rate of 6% per annum for 2 years, compounded yearly. Find the interest correct to the nearest dollar.\nA. \\(\\$5\\,000\\).\nB. \\(\\$4\\,950\\).\nC. \\(\\$4\\,944\\).\nD. \\(\\$4\\,800\\).",
        answer: "C",
        steps: "Interest \\(= 40\\,000 \\times (1.06^{2} - 1) = \\$4944\\). (C)"
      },
      {
        id: "a1-pc-83",
        type: "Percentage",
        question: "If the price of a magazine is 150% higher than the price of a newspaper, then the price of the newspaper is\nA. 75% lower than the price of the magazine.\nB. 66⅔% lower than the price of the magazine.\nC. 40% lower than the price of the magazine.\nD. 60% lower than the price of the magazine.",
        answer: "D",
        steps: "Let the newspaper price be \\(n\\); the magazine price \\(= 2.5n\\).\n\\(\\frac{2.5n - n}{2.5n} \\times 100\\% = 60\\%\\), so the newspaper is \\(60\\%\\) lower than the magazine. (D)"
      },
      {
        id: "a1-pc-84",
        type: "Percentage",
        question: "A sum of \\(\\$50\\,000\\) is deposited at an interest rate of 6% per annum for 2 years, compounded quarterly. Find the amount correct to the nearest dollar.\nA. \\(\\$56\\,325\\).\nB. \\(\\$56\\,357\\).\nC. \\(\\$56\\,180\\).\nD. \\(\\$56\\,000\\).",
        answer: "A",
        steps: "Rate per quarter \\(= 1.5\\%\\); number of quarters \\(= 8\\).\nAmount \\(= 50\\,000 \\times 1.015^{8} \\approx \\$56\\,325\\). (A)"
      },
      {
        id: "a1-pc-85",
        type: "Percentage",
        question: "A sum of \\(\\$20\\,000\\) is deposited at an interest rate of 6% per annum for 5 years, compounded monthly. Find the interest correct to the nearest dollar.\nA. \\(\\$6\\,000\\)\nB. \\(\\$6\\,977\\)\nC. \\(\\$6\\,765\\)\nD. \\(\\$26\\,977\\)",
        answer: "B",
        steps: "Amount \\(= 20\\,000 \\times 1.005^{60} \\approx \\$26\\,977\\).\nInterest \\(\\approx \\$26\\,977 - \\$20\\,000 = \\$6977\\). (B)"
      },
      {
        id: "a1-pc-86",
        type: "Percentage",
        question: "The length of a rectangle is decreased by 50% but its breadth is increased by k%. If the area of the rectangle remains unchanged, find the value of k.\nA. 100\nB. 75\nC. 150\nD. 50",
        answer: "A",
        steps: "\\(0.5 \\times \\left(1 + \\frac{k}{100}\\right) = 1\\), so \\(1 + \\frac{k}{100} = 2\\) and \\(k = 100\\). (A)"
      },
      {
        id: "a1-pc-87",
        type: "Percentage",
        question: "Mary sold two bags for \\(\\$360\\) each. She gained 25% on one and lost 25% on the other. After the two transactions, Mary\nA. gained \\(\\$24\\).\nB. lost \\(\\$48\\).\nC. had no gain and no loss.\nD. gained \\(\\$48\\).",
        answer: "B",
        steps: "Bag with gain: cost \\(= 360 \\div 1.25 = \\$288\\), gain \\(= \\$72\\).\nBag with loss: cost \\(= 360 \\div 0.75 = \\$480\\), loss \\(= \\$120\\).\nNet result \\(= 72 - 120 = -48\\), i.e. she lost \\(\\$48\\). (B)"
      },
      {
        id: "a1-pc-88",
        type: "Percentage",
        question: "If the length and the width of a rectangle are increased by 30% and \\(x\\%\\) respectively so that its area is increased by 56%, then \\(x =\\)\nA. 26.\nB. 20.\nC. 10.\nD. 30.",
        answer: "B",
        steps: "\\(1.3 \\times \\left(1 + \\frac{x}{100}\\right) = 1.56\\), so \\(1 + \\frac{x}{100} = 1.2\\) and \\(x = 20\\). (B)"
      },
      {
        id: "a1-pc-89",
        type: "Percentage",
        question: "Peter invests $P at the beginning of each month in a year at an interest rate of 12% per annum, compounded monthly. If he gets \\(\\$10\\,000\\) at the end of the year, find P correct to 2 decimal places.\nA. 788.49\nB. 833.33\nC. 887.45\nD. 780.68",
        answer: "D",
        steps: "Rate per month \\(= 1\\%\\). The deposit made at the start of month \\(k\\) grows for \\(13 - k\\) months.\n\\(P(1.01 + 1.01^{2} + \\ldots + 1.01^{12}) = 10\\,000\\), i.e. \\(P \\times \\frac{1.01(1.01^{12} - 1)}{0.01} = 10\\,000\\)\n\\(P \\approx 780.68\\) (D)"
      },
      {
        id: "a1-pc-90",
        type: "Percentage",
        question: "John buys a vase for \\(\\$2\\,000\\). He then sells the vase to Susan at a profit of 25%. At what price should Susan sell the vase in order to have a profit of 25%?\nA. \\(\\$3\\,000\\)\nB. \\(\\$3\\,200\\)\nC. \\(\\$2\\,800\\)\nD. \\(\\$3\\,125\\)",
        answer: "D",
        steps: "Susan's cost \\(= 2000 \\times 1.25 = \\$2500\\).\nSusan's selling price \\(= 2500 \\times 1.25 = \\$3125\\). (D)"
      },
      {
        id: "a1-pc-91",
        type: "Percentage",
        question: "If the circumference of a circle is increased by 20%, then the area of the circle is increased by\nA. 44%.\nB. 20%.\nC. 40%.\nD. 96%.",
        answer: "A",
        steps: "The radius is also increased by \\(20\\%\\), so the area becomes \\(1.2^{2} = 1.44\\) times.\nThe area is increased by \\(44\\%\\). (A)"
      },
      {
        id: "a1-pc-92",
        type: "Percentage",
        question: "In a company, 40% of the employees are female. If 50% of the male employees and 75% of the female employees are married, then the percentage of married employees in the company is\nA. 62.5%.\nB. 52.5%.\nC. 60%.\nD. 57.5%.",
        answer: "C",
        steps: "Married \\(= 60\\% \\times 50\\% + 40\\% \\times 75\\% = 30\\% + 30\\% = 60\\%\\). (C)"
      },
      {
        id: "a1-pc-93",
        type: "Percentage",
        question: "Susan sells two cars for \\(\\$84\\,000\\) each. She gains 40% on one and loses 40% on the other. After the two transactions, Susan\nA. loses \\(\\$32\\,000\\).\nB. has no gain and no loss.\nC. gains \\(\\$56\\,000\\).\nD. gains \\(\\$24\\,000\\).",
        answer: "A",
        steps: "Car with gain: cost \\(= 84\\,000 \\div 1.4 = \\$60\\,000\\), gain \\(= \\$24\\,000\\).\nCar with loss: cost \\(= 84\\,000 \\div 0.6 = \\$140\\,000\\), loss \\(= \\$56\\,000\\).\nNet result \\(= 24\\,000 - 56\\,000 = -32\\,000\\), i.e. she loses \\(\\$32\\,000\\). (A)"
      },
      // Percentage (continued)
      {
        id: "a1-pc-94",
        type: "Percentage",
        question: "A sum of \\(\\$60\\,000\\) is deposited at an interest rate of 6% per annum for 1 year, compounded monthly. Find the interest correct to the nearest dollar.\nA. \\(\\$3\\,600\\)\nB. \\(\\$3\\,720\\)\nC. \\(\\$3\\,701\\)\nD. \\(\\$3\\,682\\)",
        answer: "C",
        steps: "Rate per month \\(= 0.5\\%\\); number of months \\(= 12\\).\nInterest \\(= 60\\,000 \\times (1.005^{12} - 1) \\approx \\$3701\\). (C)"
      },
      {
        id: "a1-pc-95",
        type: "Percentage",
        question: "There are 1 080 workers in a factory. If the number of male workers is 20% less than that of female workers, then the number of male workers is\nA. 480.\nB. 600.\nC. 432.\nD. 540.",
        answer: "A",
        steps: "Let the number of female workers be \\(F\\). Male workers \\(= 0.8F\\).\n\\(F + 0.8F = 1080\\), so \\(F = 600\\) and the number of male workers \\(= 0.8 \\times 600 = 480\\). (A)"
      },
      {
        id: "a1-pc-96",
        type: "Percentage",
        question: "If the angle and the radius of a sector are decreased by \\(x\\%\\) and 40% respectively so that its area is decreased by 82%, then \\(x =\\)\nA. 64.\nB. 50.\nC. 36.\nD. 25.",
        answer: "B",
        steps: "Area of a sector \\(= \\frac{\\theta}{360^{\\circ}}\\pi r^{2}\\). The new area is \\(\\left(1 - \\frac{x}{100}\\right)(0.6)^{2} = 0.18\\) of the old area.\n\\(1 - \\frac{x}{100} = \\frac{0.18}{0.36} = 0.5\\), so \\(x = 50\\). (B)"
      },
      {
        id: "a1-pc-97",
        type: "Percentage",
        question: "If the price of a souvenir is increased by 40% and then decreased by 30%, find the percentage change in the price of the souvenir.\nA. −2%.\nB. −70%.\nC. 10%.\nD. 2%.",
        answer: "A",
        steps: "New price \\(= 1.4 \\times 0.7 = 0.98\\) of the original.\nPercentage change \\(= 0.98 - 1 = -2\\%\\). (A)"
      },
      {
        id: "a1-pc-98",
        type: "Percentage",
        question: "A sum of \\(\\$60\\,000\\) is deposited at an interest rate of 8% per annum for 2 years, compounded quarterly. Find the amount correct to the nearest dollar.\nA. \\(\\$70\\,192\\)\nB. \\(\\$70\\,300\\)\nC. \\(\\$69\\,984\\)\nD. \\(\\$69\\,600\\)",
        answer: "B",
        steps: "Rate per quarter \\(= 2\\%\\); number of quarters \\(= 8\\).\nAmount \\(= 60\\,000 \\times 1.02^{8} \\approx \\$70\\,300\\). (B)"
      },
      {
        id: "a1-pc-99",
        type: "Percentage",
        question: "The monthly salary of Donald is 20% higher than that of Peter while the monthly salary of Peter is 40% lower than that of Teresa. It is given that the monthly salary of Donald is \\(\\$43\\,200\\). The monthly salary of Teresa is\nA. \\(\\$30\\,000\\)\nB. \\(\\$43\\,200\\)\nC. \\(\\$51\\,840\\)\nD. \\(\\$60\\,000\\)",
        answer: "D",
        steps: "Peter's salary \\(= 43\\,200 \\div 1.2 = \\$36\\,000\\).\nTeresa's salary \\(= 36\\,000 \\div 0.6 = \\$60\\,000\\). (D)"
      },
      {
        id: "a1-pc-100",
        type: "Percentage",
        question: "A sum of \\(\\$3\\,000\\) is deposited at an interest rate of 6% per annum for 3 years, compounded half-yearly. Find the interest correct to the nearest dollar.\nA. \\(\\$590\\)\nB. \\(\\$573\\)\nC. \\(\\$582\\)\nD. \\(\\$540\\)",
        answer: "C",
        steps: "Rate per half-year \\(= 3\\%\\); number of half-years \\(= 6\\).\nInterest \\(= 3000 \\times (1.03^{6} - 1) \\approx \\$582\\). (C)"
      },
      {
        id: "a1-pc-101",
        type: "Percentage",
        question: "A sum of \\(\\$80\\,000\\) is deposited at an interest rate of 3% per annum for 4 years, compounded monthly. Find the interest correct to the nearest dollar.\nA. \\(\\$10\\,200\\)\nB. \\(\\$10\\,041\\)\nC. \\(\\$9\\,600\\)\nD. \\(\\$10\\,186\\)",
        answer: "D",
        steps: "Rate per month \\(= 0.25\\%\\); number of months \\(= 48\\).\nInterest \\(= 80\\,000 \\times (1.0025^{48} - 1) \\approx \\$10\\,186\\). (D)"
      },
      {
        id: "a1-pc-102",
        type: "Percentage",
        question: "A sum of \\(\\$48\\,000\\) is deposited at an interest rate of 5% per annum for 6 years, compounded quarterly. Find the amount correct to the nearest dollar.\nA. \\(\\$62\\,400\\)\nB. \\(\\$64\\,325\\)\nC. \\(\\$64\\,800\\)\nD. \\(\\$64\\,673\\)",
        answer: "D",
        steps: "Rate per quarter \\(= 1.25\\%\\); number of quarters \\(= 24\\).\nAmount \\(= 48\\,000 \\times 1.0125^{24} \\approx \\$64\\,673\\). (D)"
      },
      {
        id: "a1-pc-103",
        type: "Percentage",
        question: "The cost of a toy is \\(x\\%\\) lower than its selling price. After selling the toy, the percentage profit is 60%. Find \\(x\\).\nA. 40\nB. 60\nC. 62.5\nD. 37.5",
        answer: "D",
        steps: "Let the cost be \\(c\\); the selling price \\(= 1.6c\\).\n\\(x\\% = \\frac{1.6c - c}{1.6c} \\times 100\\% = 37.5\\%\\), so \\(x = 37.5\\). (D)"
      },
      {
        id: "a1-pc-104",
        type: "Percentage",
        question: "The angle of a sector is decreased by 20% but its radius is increased by \\(k\\%\\). If the arc length of the sector remains unchanged, find the value of \\(k\\).\nA. 125\nB. 20\nC. 80\nD. 25",
        answer: "D",
        steps: "Arc length \\(= \\frac{\\theta}{360^{\\circ}} \\times 2\\pi r\\) is proportional to \\(\\theta r\\).\n\\(0.8 \\times \\left(1 + \\frac{k}{100}\\right) = 1\\), so \\(1 + \\frac{k}{100} = 1.25\\) and \\(k = 25\\). (D)"
      },
      {
        id: "a1-pc-105",
        type: "Percentage",
        question: "In a school, 38% of the students are overweight. It is given that 60% of the students in the school are girls and 50% of the girls are overweight. If \\(x\\%\\) of the boys in the school are overweight, then \\(x =\\)\nA. 8.\nB. 30.\nC. 20.\nD. 12.",
        answer: "C",
        steps: "Let there be 100 students: 60 girls and 40 boys. Overweight girls \\(= 50\\% \\times 60 = 30\\).\nOverweight boys \\(= 38 - 30 = 8\\), so \\(x = \\frac{8}{40} \\times 100 = 20\\). (C)"
      },
      {
        id: "a1-pc-106",
        type: "Percentage",
        question: "A sum of \\(\\$64\\,000\\) is deposited at an interest rate of 9% per annum for 3 years, compounded monthly. Find the interest correct to the nearest dollar.\nA. \\(\\$19\\,587\\)\nB. \\(\\$18\\,882\\)\nC. \\(\\$19\\,753\\)\nD. \\(\\$17\\,280\\)",
        answer: "C",
        steps: "Rate per month \\(= 0.75\\%\\); number of months \\(= 36\\).\nInterest \\(= 64\\,000 \\times (1.0075^{36} - 1) \\approx \\$19\\,753\\). (C)"
      },
      {
        id: "a1-pc-107",
        type: "Percentage",
        question: "The marked price of a jacket is 80% above its cost. A profit of \\(\\$130\\) is made by selling the jacket at a discount of 30% on its marked price. Find the cost of the jacket.\nA. \\(\\$1\\,000\\).\nB. \\(\\$650\\).\nC. \\(\\$500\\).\nD. \\(\\$325\\).",
        answer: "C",
        steps: "Let the cost be \\(c\\). Selling price \\(= 1.8c \\times 0.7 = 1.26c\\).\nProfit \\(= 0.26c = 130\\), so \\(c = \\$500\\). (C)"
      },
      {
        id: "a1-pc-108",
        type: "Percentage",
        question: "In a school, 50% of the students are girls and \\(\\beta\\%\\) of the girls are foreign students. It is given that 30% of the boys in the school are foreign students. In the school, the number of foreign students and the number of girls are equal. Find \\(\\beta\\).\nA. 70\nB. 30\nC. 50\nD. 85",
        answer: "A",
        steps: "Let there be 100 students: 50 girls and 50 boys. Foreign boys \\(= 30\\% \\times 50 = 15\\).\nForeign students \\(= 50\\) (equal to the number of girls), so foreign girls \\(= 35\\) and \\(\\beta = \\frac{35}{50} \\times 100 = 70\\). (A)"
      },
      {
        id: "a1-pc-109",
        type: "Percentage",
        question: "A sum of \\(\\$50\\,000\\) is deposited at an interest rate of 4% per annum for 6 years, compounded half-yearly. Find the amount correct to the nearest dollar.\nA. \\(\\$62\\,000\\)\nB. \\(\\$63\\,412\\)\nC. \\(\\$63\\,266\\)\nD. \\(\\$63\\,537\\)",
        answer: "B",
        steps: "Rate per half-year \\(= 2\\%\\); number of half-years \\(= 12\\).\nAmount \\(= 50\\,000 \\times 1.02^{12} \\approx \\$63\\,412\\). (B)"
      },
      {
        id: "a1-pc-110",
        type: "Percentage",
        question: "A sum of \\(\\$P\\) is deposited at an interest rate of 6% per annum for 4 years, compounded quarterly. If the amount is \\(\\$90\\,000\\), find \\(P\\) correct to the nearest integer.\nA. 72 581\nB. 71 288\nC. 70 923\nD. 79 894",
        answer: "C",
        steps: "Rate per quarter \\(= 1.5\\%\\); number of quarters \\(= 16\\).\n\\(P \\times 1.015^{16} = 90\\,000\\), so \\(P = \\frac{90\\,000}{1.015^{16}} \\approx 70\\,923\\). (C)"
      },
      // Estimation and Numbers (continued)
      {
        id: "a1-en-9",
        type: "Estimation and Numbers",
        question: "The Highest Common Factor of two unequal positive integers a and b is 6. Which of the following must be true?\nI. The difference between a and b is divisible by 6.\nII. ab is divisible by 36.\nIII. (a + b) is divisible by 12.\nA. III only\nB. I and II only\nC. I and III only\nD. II and III only\nE. I, II and III",
        answer: "B",
        steps: "Let \\(a = 6m\\) and \\(b = 6n\\), where \\(m\\) and \\(n\\) have no common factor other than 1.\nI: \\(a - b = 6(m - n)\\) is divisible by 6. II: \\(ab = 36mn\\) is divisible by 36.\nIII: \\(a + b = 6(m + n)\\) need not be divisible by 12, e.g. \\(a = 6\\), \\(b = 12\\) gives \\(18\\).\nSo I and II only (B)"
      },
      {
        id: "a1-en-10",
        type: "Estimation and Numbers",
        question: "w, x, y and z are four consecutive positive integers. Which of the following is true?\nA. wxyz must be odd.\nB. w + x + y + z must be divisible by 4.\nC. w² + x² + y² + z² must be odd.\nD. wxyz must be divisible by 24.\nE. w + x + y + z must be odd.",
        answer: "D",
        steps: "Among four consecutive integers there are two even numbers, one of which is a multiple of 4, and one multiple of 3. So \\(wxyz\\) is divisible by \\(2 \\times 4 \\times 3 = 24\\).\nThe sum \\(= 4w + 6\\) is even but not always divisible by 4, and \\(w^{2} + x^{2} + y^{2} + z^{2}\\) is even (two odd squares and two even squares). (D)"
      },
      {
        id: "a1-en-11",
        type: "Estimation and Numbers",
        question: "x is a positive integer such that \\(x^{2} + 3x + 4\\) is even. What are the possible values of x?\nA. x can be any positive integer.\nB. x must be a positive odd number greater than 10 000.\nC. x can be any positive even number.\nD. x can be any positive odd number.\nE. x must be an even number greater than 10 000.",
        answer: "A",
        steps: "\\(x^{2} + 3x = x(x + 3)\\). One of \\(x\\) and \\(x + 3\\) is even for any integer \\(x\\), so \\(x(x + 3)\\) is always even.\nHence \\(x^{2} + 3x + 4\\) is always even, and \\(x\\) can be any positive integer. (A)"
      },
      {
        id: "a1-en-12",
        type: "Estimation and Numbers",
        question: "If n is a positive integer, which of the following numbers is/are odd?\nI. \\(2^{n + 1} + 3\\)\nII. \\((2n)^{3} + 1\\)\nIII. \\(3n^{2} + n\\)\nA. II only\nB. III only\nC. I and II only\nD. I and III only\nE. I, II and III",
        answer: "C",
        steps: "I: \\(2^{n + 1}\\) is even, so \\(2^{n + 1} + 3\\) is odd. II: \\((2n)^{3}\\) is even, so \\((2n)^{3} + 1\\) is odd.\nIII: \\(3n^{2} + n = n(3n + 1)\\), and one of \\(n\\) and \\(3n + 1\\) is even, so it is even.\nSo I and II only (C)"
      },
      {
        id: "a1-en-13",
        type: "Estimation and Numbers",
        question: "Which of the following is equal to the real number \\(\\pi\\)?\nA. \\(\\text{the ratio of the circumference of a circle to its diameter}\\)\nB. \\(\\frac{355}{113}\\)\nC. \\(\\text{the ratio of the area of a circle to the square of its diameter}\\)\nD. \\(3.14159\\)\nE. \\(\\text{the ratio of the circumference of a circle to its radius}\\)",
        answer: "A",
        steps: "\\(\\pi\\) is an irrational number, so it is not equal to the fractions or terminating decimals in A and B.\nThe ratio of the area to the square of the diameter is \\(\\frac{\\pi r^{2}}{4r^{2}} = \\frac{\\pi}{4}\\), and the ratio of the circumference to the radius is \\(2\\pi\\).\nBy definition \\(\\pi = \\frac{\\text{circumference}}{\\text{diameter}}\\) (A)"
      },
      {
        id: "a1-en-14",
        type: "Estimation and Numbers",
        question: "Which of the following is/are true?\nI. If both 4 and 6 are factors of m, then 24 is also a factor of m.\nII. If 12 is a factor of n, then both 3 and 4 are factors of n.\nIII. If p is a multiple of both 3 and 8, then p is also a multiple of 24.\nA. I only\nB. II only\nC. I and II only\nD. II and III only\nE. I, II and III",
        answer: "D",
        steps: "I is false: \\(m = 12\\) has both 4 and 6 as factors but 24 is not a factor of 12.\nII is true: \\(3\\) and \\(4\\) are factors of \\(12\\), hence of every multiple of \\(12\\).\nIII is true: 3 and 8 have no common factor other than 1, so a common multiple is a multiple of \\(3 \\times 8 = 24\\).\nSo II and III only (D)"
      },
      {
        id: "a1-en-15",
        type: "Estimation and Numbers",
        question: "Under which of the following conditions must the mean of n consecutive positive even integers also be an integer?\nA. n is any multiple of 3.\nB. n is any positive even integer.\nC. n is any positive integer.\nD. n is the square of any positive integer.\nE. n is any positive odd integer.",
        answer: "C",
        steps: "The integers are \\(a, a + 2, \\ldots, a + 2(n - 1)\\) with \\(a\\) even.\nTheir mean is \\(a + (n - 1)\\), which is an integer for every positive integer \\(n\\). (C)"
      },
      {
        id: "a1-en-16",
        type: "Estimation and Numbers",
        question: "Round off the number 0.0366652 to 3 significant figures.\nA. 0.04\nB. 0.0366\nC. 0.0367\nD. 0.0368\nE. 0.037",
        answer: "C",
        steps: "The first three significant figures are 3, 6, 6 and the next digit is 6 (\\(\\geq 5\\)), so round up: \\(0.0367\\). (C)"
      },
      {
        id: "a1-en-17",
        type: "Estimation and Numbers",
        question: "Evaluate \\(2.35 \\div 18\\) correct to 3 significant figures.\nA. 0.131\nB. 0.130\nC. 0.13\nD. 0.132\nE. 0.1306",
        answer: "A",
        steps: "\\(2.35 \\div 18 = 0.130555\\ldots\\)\nCorrect to 3 significant figures, it is \\(0.131\\). (A)"
      },
      {
        id: "a1-en-18",
        type: "Estimation and Numbers",
        question: "m and n are multiples of 4 and 6 respectively. Which of the following must be true?\nI. mn is a multiple of 24.\nII. The H.C.F. of m and n is even.\nIII. The H.C.F. of m and n is a multiple of 4.\nA. I only\nB. I and II only\nC. I and III only\nD. II and III only\nE. I, II and III",
        answer: "B",
        steps: "Let \\(m = 4a\\) and \\(n = 6b\\). I: \\(mn = 24ab\\) is a multiple of 24. II: both \\(m\\) and \\(n\\) are even, so their H.C.F. is even.\nIII: for \\(m = 4\\) and \\(n = 6\\) the H.C.F. is \\(2\\), which is not a multiple of 4.\nSo I and II only (B)"
      },
      {
        id: "a1-en-19",
        type: "Estimation and Numbers",
        question: "Express \\(\\pi^{3}\\) as a decimal correct to 3 significant figures.\nA. \\(31.1\\)\nB. \\(31.0\\)\nC. \\(31.006\\)\nD. \\(31.00\\)\nE. \\(31\\)",
        answer: "B",
        steps: "\\(\\pi^{3} = 31.00627\\ldots\\)\nCorrect to 3 significant figures: \\(31.0\\). (B)"
      },
      {
        id: "a1-en-20",
        type: "Estimation and Numbers",
        question: "Let a and b be two consecutive positive integers. Which of the following must be true?\nI. a + b is odd.\nII. ab is even.\nIII. a² + b² is even.\nA. III only\nB. I and II only\nC. I and III only\nD. II and III only\nE. I, II and III",
        answer: "B",
        steps: "One of \\(a\\) and \\(b\\) is odd and the other is even.\nI: odd + even is odd. II: odd \\(\\times\\) even is even. III: odd\\(^{2}\\) + even\\(^{2}\\) = odd + even is odd, so III is false.\nSo I and II only (B)"
      },
      {
        id: "a1-en-21",
        type: "Estimation and Numbers",
        question: "Let m be a positive integer. Which of the following must be true?\nI. m(m + 1) is even.\nII. m(m + 2) is even.\nIII. m² + m + 2 is even.\nA. I only\nB. II only\nC. III only\nD. I and III only\nE. II and III only",
        answer: "D",
        steps: "I: one of \\(m\\) and \\(m + 1\\) is even, so \\(m(m + 1)\\) is even. II: if \\(m\\) is odd, then \\(m(m + 2)\\) is odd, so II is false.\nIII: \\(m^{2} + m + 2 = m(m + 1) + 2\\) is even + even = even.\nSo I and III only (D)"
      },
      {
        id: "a1-en-22",
        type: "Estimation and Numbers",
        question: "If \\(0.3648 < a < 0.3652\\), which of the following must be true?\nA. a = 0.365 (correct to 3 significant figures)\nB. a = 0.37 (correct to 2 significant figures)\nC. a = 0.3 (correct to 1 significant figure)\nD. a = 0.3650 (correct to 4 significant figures)",
        answer: "A",
        steps: "\\(0.3648\\) rounds to \\(0.36\\) and \\(0.3652\\) rounds to \\(0.37\\) (2 s.f.), so ‘0.37 (2 s.f.)’ is not always true; also \\(a\\) rounds to \\(0.4\\) (1 s.f.), not \\(0.3\\).\n\\(0.3648\\) and \\(0.3652\\) both round to \\(0.365\\) (3 s.f.), so \\(a = 0.365\\) (correct to 3 significant figures) must be true.\n\\(0.3648\\) and \\(0.3652\\) differ in the 4 s.f. values, so ‘0.3650 (4 s.f.)’ is not always true. (A)"
      },
      {
        id: "a1-en-23",
        type: "Estimation and Numbers",
        question: "Express \\(\\sqrt{3011}\\) as a decimal correct to 5 significant figures.\nA. \\(54.8726\\)\nB. \\(54.87\\)\nC. \\(54.873\\)\nD. \\(54.900\\)",
        answer: "C",
        steps: "\\(\\sqrt{3011} = 54.87258\\ldots\\)\nCorrect to 5 significant figures: \\(54.873\\). (C)"
      },
      {
        id: "a1-en-24",
        type: "Estimation and Numbers",
        question: "If the radius of a sphere is measured as 6 cm correct to the nearest cm, then the least possible surface area of the sphere is\nA. \\(144\\pi\\ \\text{cm}^{2}\\)\nB. \\(121\\pi\\ \\text{cm}^{2}\\)\nC. \\(100\\pi\\ \\text{cm}^{2}\\)\nD. \\(169\\pi\\ \\text{cm}^{2}\\)",
        answer: "B",
        steps: "The least possible radius is \\(5.5\\) cm.\nLeast surface area \\(= 4\\pi(5.5)^{2} = 121\\pi\\ \\text{cm}^{2}\\). (B)"
      },
      {
        id: "a1-en-25",
        type: "Estimation and Numbers",
        question: "\\(0.0364875 =\\)\nA. 0.04 (correct to 2 decimal places)\nB. 0.036 (correct to 3 significant figures)\nC. 0.03649 (correct to 5 significant figures)\nD. 0.0364 (correct to 4 decimal places)",
        answer: "A",
        steps: "2 d.p.: \\(0.04\\) ✓. 3 s.f.: \\(0.0365\\) (not 0.036). 4 d.p.: \\(0.0365\\) (not 0.0364). 5 s.f.: \\(0.036488\\) (not 0.03649).\nSo only ‘0.04 (correct to 2 decimal places)’ is correct. (A)"
      },
      {
        id: "a1-en-26",
        type: "Estimation and Numbers",
        question: "On a number line, the real numbers \\(a\\), \\(b\\) and \\(c\\) are located at approximately \\(-2.1\\), \\(0.9\\) and \\(2.8\\) respectively. Which of the following is the best estimate of \\(c(a - b)\\)?\nA. \\(12\\)\nB. \\(8\\)\nC. \\(-8\\)\nD. \\(-12\\)",
        answer: "C",
        steps: "\\(a - b \\approx -2.1 - 0.9 = -3.0\\).\n\\(c(a - b) \\approx 2.8 \\times (-3.0) = -8.4\\), so the best estimate is \\(-8\\). (C)"
      },
      {
        id: "a1-en-27",
        type: "Estimation and Numbers",
        question: "If the length and the breadth of a rectangle are measured as 15 cm and 8 cm respectively and all the measurements are correct to the nearest cm, then the least possible area of the rectangle is\nA. 131.75 cm².\nB. 108.75 cm².\nC. 120 cm².\nD. 100 cm².",
        answer: "B",
        steps: "Least length \\(= 14.5\\) cm and least breadth \\(= 7.5\\) cm.\nLeast area \\(= 14.5 \\times 7.5 = 108.75\\ \\text{cm}^{2}\\). (B)"
      },
      {
        id: "a1-en-28",
        type: "Estimation and Numbers",
        question: "On a number line, the real numbers \\(p\\), \\(q\\), \\(r\\) and \\(s\\) are located at approximately \\(-3.2\\), \\(-0.8\\), \\(1.1\\) and \\(2.9\\) respectively. Which of the following is the best estimate of \\((p - q)(r + s)\\)?\nA. \\(-16\\)\nB. \\(16\\)\nC. \\(-10\\)\nD. \\(10\\)",
        answer: "C",
        steps: "\\(p - q \\approx -3.2 - (-0.8) = -2.4\\) and \\(r + s \\approx 1.1 + 2.9 = 4.0\\).\n\\((p - q)(r + s) \\approx -2.4 \\times 4.0 = -9.6\\), so the best estimate is \\(-10\\). (C)"
      },
      {
        id: "a1-en-29",
        type: "Estimation and Numbers",
        question: "The lengths of the three sides of a triangle are measured as 12 cm, 16 cm and 20 cm respectively. If the three measurements are correct to the nearest cm, find the percentage error in calculating the perimeter of the triangle correct to the nearest 0.1%.\nA. 6.3%\nB. 1.6%\nC. 12.5%\nD. 3.1%",
        answer: "D",
        steps: "Perimeter \\(= 12 + 16 + 20 = 48\\) cm. The maximum absolute error \\(= 3 \\times 0.5 = 1.5\\) cm.\nPercentage error \\(= \\frac{1.5}{48} \\times 100\\% \\approx 3.1\\%\\). (D)"
      },
      {
        id: "a1-en-30",
        type: "Estimation and Numbers",
        question: "If \\(k\\) is a real number, then \\(5k - \\frac{8 + ki}{i} =\\)\nA. \\(4k + 8i\\)\nB. \\(6k - 8i\\)\nC. \\(4k - 8i\\)\nD. \\(6k + 8i\\)",
        answer: "A",
        steps: "\\(\\frac{8 + ki}{i} = \\frac{8}{i} + k = -8i + k\\) (since \\(\\frac{1}{i} = -i\\)).\n\\(5k - (-8i + k) = 4k + 8i\\). (A)"
      },
      {
        id: "a1-en-31",
        type: "Estimation and Numbers",
        question: "\\(0.0720499 =\\)\nA. 0.07205 (correct to 4 decimal places)\nB. 0.072 (correct to 3 decimal places)\nC. 0.0720 (correct to 5 decimal places)\nD. 0.0721 (correct to 3 significant figures)",
        answer: "B",
        steps: "3 d.p.: \\(0.072\\) ✓. 3 s.f.: \\(0.0720\\) (not 0.0721). 4 d.p.: \\(0.0720\\) (not 0.07205). 5 d.p.: \\(0.07205\\) (not 0.0720).\nSo only ‘0.072 (correct to 3 decimal places)’ is correct. (B)"
      },
      {
        id: "a1-en-32",
        type: "Estimation and Numbers",
        question: "If \\(x\\) is a real number, then the real part of \\((x + 2i)(4 + i)\\) is\nA. \\(4x - 2\\)\nB. \\(4x + 2\\)\nC. \\(4x\\)\nD. \\(x - 2\\)",
        answer: "A",
        steps: "\\((x + 2i)(4 + i) = 4x + xi + 8i + 2i^{2} = (4x - 2) + (x + 8)i\\).\nThe real part is \\(4x - 2\\). (A)"
      },
      {
        id: "a1-en-33",
        type: "Estimation and Numbers",
        question: "\\(0.0713624 =\\)\nA. 0.071363 (correct to 5 significant figures)\nB. 0.0714 (correct to 5 decimal places)\nC. 0.071 (correct to 3 significant figures)\nD. 0.07136 (correct to 4 significant figures)",
        answer: "D",
        steps: "3 s.f.: \\(0.0714\\) (not 0.071). 5 d.p.: \\(0.07136\\) (not 0.0714). 4 s.f.: \\(0.07136\\) ✓. 5 s.f.: \\(0.071362\\) (not 0.071363).\nSo only ‘0.07136 (correct to 4 significant figures)’ is correct. (D)"
      },
      {
        id: "a1-en-34",
        type: "Estimation and Numbers",
        question: "The length of a piece of thin string is measured as 18 m correct to the nearest m. If the string is cut into n pieces such that the length of each piece is measured as 8 cm correct to the nearest cm, find the greatest possible value of n.\nA. 247\nB. 225\nC. 246\nD. 250",
        answer: "C",
        steps: "The greatest possible length of the string \\(= 18.5\\) m \\(= 1850\\) cm; the least possible length of a piece \\(= 7.5\\) cm.\n\\(n \\leq \\frac{1850}{7.5} = 246.67\\ldots\\), so the greatest possible integer value of \\(n\\) is \\(246\\). (C)"
      },
      {
        id: "a1-en-35",
        type: "Estimation and Numbers",
        question: "\\(i^{3}(\\beta i + 4) =\\)\nA. \\(\\beta - 4i\\)\nB. \\(-\\beta - 4i\\)\nC. \\(\\beta + 4i\\)\nD. \\(-\\beta + 4i\\)",
        answer: "A",
        steps: "\\(i^{3} = -i\\), so \\(i^{3}(\\beta i + 4) = -i(\\beta i + 4) = -\\beta i^{2} - 4i\\)\n\\(= \\beta - 4i\\) (A)"
      },
      {
        id: "a1-en-36",
        type: "Estimation and Numbers",
        question: "\\(0.0608639 =\\)\nA. 0.061 (correct to 4 decimal places)\nB. 0.0609 (correct to 3 significant figures)\nC. 0.06087 (correct to 5 decimal places)\nD. 0.0608 (correct to 4 significant figures)",
        answer: "B",
        steps: "3 s.f.: \\(0.0609\\) ✓. 4 d.p.: \\(0.0609\\) (not 0.061). 4 s.f.: \\(0.06086\\) (not 0.0608). 5 d.p.: \\(0.06086\\) (not 0.06087).\nSo only ‘0.0609 (correct to 3 significant figures)’ is correct. (B)"
      },
      {
        id: "a1-en-37",
        type: "Estimation and Numbers",
        question: "The real part of \\(i + 3i^{2} + 5i^{3} + 7i^{4}\\) is\nA. \\(4\\)\nB. \\(10\\)\nC. \\(-4\\)\nD. \\(-10\\)",
        answer: "A",
        steps: "\\(i^{2} = -1\\), \\(i^{3} = -i\\), \\(i^{4} = 1\\).\n\\(i + 3(-1) + 5(-i) + 7(1) = (-3 + 7) + (i - 5i) = 4 - 4i\\), so the real part is \\(4\\). (A)"
      },
      // Estimation and Numbers (continued)
      {
        id: "a1-en-38",
        type: "Estimation and Numbers",
        question: "The width and the length of a thin rectangular metal sheet are measured as 6 cm and 9 cm correct to the nearest cm respectively. Let \\(x\\ \\text{cm}^{2}\\) be the actual area of the metal sheet. Find the range of values of \\(x\\).\nA. \\(46.75 < x \\leq 61.75\\)\nB. \\(46.75 \\leq x < 61.75\\)\nC. \\(53.5 \\leq x < 54.5\\)\nD. \\(53.5 < x \\leq 54.5\\)",
        answer: "B",
        steps: "The width is at least \\(5.5\\) cm and less than \\(6.5\\) cm; the length is at least \\(8.5\\) cm and less than \\(9.5\\) cm.\nLeast area \\(= 5.5 \\times 8.5 = 46.75\\) (attainable) and the area is less than \\(6.5 \\times 9.5 = 61.75\\) (not attainable).\nSo \\(46.75 \\leq x < 61.75\\). (B)"
      },
      {
        id: "a1-en-39",
        type: "Estimation and Numbers",
        question: "If \\(\\beta\\) is a real number, then \\(\\frac{\\beta^{2} + 9}{\\beta - 3i} =\\)\nA. \\(3 - \\beta i\\)\nB. \\(\\beta + 3i\\)\nC. \\(3 + \\beta i\\)\nD. \\(\\beta - 3i\\)",
        answer: "B",
        steps: "\\(\\beta^{2} + 9 = (\\beta + 3i)(\\beta - 3i)\\), since \\((3i)^{2} = -9\\).\n\\(\\frac{\\beta^{2} + 9}{\\beta - 3i} = \\beta + 3i\\). (B)"
      },
      {
        id: "a1-en-40",
        type: "Estimation and Numbers",
        question: "\\(0.0037246789 =\\)\nA. 0.00372468 (correct to 6 significant figures)\nB. 0.00373 (correct to 6 decimal places)\nC. 0.003724 (correct to 6 decimal places)\nD. 0.003725 (correct to 6 significant figures)",
        answer: "A",
        steps: "6 d.p.: \\(0.003725\\) (so 0.00373 and 0.003724 are not correct). 6 s.f.: the digits are 3, 7, 2, 4, 6, 7 followed by 8, so round up to \\(0.00372468\\).\nSo only ‘0.00372468 (correct to 6 significant figures)’ is correct. (A)"
      },
      {
        id: "a1-en-41",
        type: "Estimation and Numbers",
        question: "There is a bag of rice. The weight of rice in the bag is measured as 8 kg correct to the nearest kg. If the rice is packed into n packets such that the weight of rice in each packet is measured as 20 g correct to the nearest g, find the greatest possible value of n.\nA. 425\nB. 435\nC. 400\nD. 436",
        answer: "B",
        steps: "The greatest possible weight of rice \\(= 8.5\\) kg \\(= 8500\\) g; the least possible weight of a packet \\(= 19.5\\) g.\n\\(n \\leq \\frac{8500}{19.5} = 435.9\\ldots\\), so the greatest possible integer value of \\(n\\) is \\(435\\). (B)"
      },
      {
        id: "a1-en-42",
        type: "Estimation and Numbers",
        question: "Let \\(z = (a + 6)i^{9} + (a - 4)i^{10}\\), where \\(a\\) is a real number. If \\(z\\) is a real number, then \\(a =\\)\nA. \\(6\\)\nB. \\(4\\)\nC. \\(-6\\)\nD. \\(-4\\)",
        answer: "C",
        steps: "\\(i^{9} = i\\) and \\(i^{10} = -1\\), so \\(z = (a + 6)i - (a - 4) = -(a - 4) + (a + 6)i\\).\n\\(z\\) is real, so the imaginary part \\(a + 6 = 0\\) and \\(a = -6\\). (C)"
      },
      {
        id: "a1-en-43",
        type: "Estimation and Numbers",
        question: "\\(0.0873407 =\\)\nA. 0.08735 (correct to 4 significant figures)\nB. 0.0873 (correct to 3 significant figures)\nC. 0.087 (correct to 4 decimal places)\nD. 0.08734 (correct to 5 significant figures)",
        answer: "B",
        steps: "3 s.f.: \\(0.0873\\) ✓. 4 d.p.: \\(0.0873\\) (not 0.087). 5 s.f.: \\(0.087341\\) (not 0.08734). 4 s.f.: \\(0.08734\\) (not 0.08735).\nSo only ‘0.0873 (correct to 3 significant figures)’ is correct. (B)"
      },
      {
        id: "a1-en-44",
        type: "Estimation and Numbers",
        question: "Let \\(u = \\frac{5}{a + 2i}\\) and \\(v = \\frac{5}{a - 2i}\\), where \\(a\\) is a real number. Which of the following must be true?\nI. \\(uv\\) is a real number.\nII. The real part of \\(u\\) is equal to the real part of \\(v\\).\nIII. The imaginary part of \\(\\frac{1}{u}\\) is equal to the imaginary part of \\(\\frac{1}{v}\\).\nA. I only\nB. II only\nC. I and II only\nD. II and III only",
        answer: "C",
        steps: "\\(uv = \\frac{25}{(a + 2i)(a - 2i)} = \\frac{25}{a^{2} + 4}\\), a real number: I is true.\n\\(u = \\frac{5(a - 2i)}{a^{2} + 4}\\) and \\(v = \\frac{5(a + 2i)}{a^{2} + 4}\\) both have real part \\(\\frac{5a}{a^{2} + 4}\\): II is true.\n\\(\\frac{1}{u} = \\frac{a + 2i}{5}\\) has imaginary part \\(\\frac{2}{5}\\) but \\(\\frac{1}{v} = \\frac{a - 2i}{5}\\) has imaginary part \\(-\\frac{2}{5}\\): III is false.\nSo I and II only (C)"
      },
      {
        id: "a1-en-45",
        type: "Estimation and Numbers",
        question: "\\(\\frac{1}{\\pi^{5}} =\\)\nA. 0.003268 (correct to 4 decimal places)\nB. 0.00327 (correct to 3 significant figures)\nC. 0.003268 (correct to 6 significant figures)\nD. 0.0033 (correct to 5 decimal places)",
        answer: "B",
        steps: "\\(\\frac{1}{\\pi^{5}} = 0.0032677\\ldots\\). 3 s.f.: \\(0.00327\\) ✓. 4 d.p.: \\(0.0033\\). 5 d.p.: \\(0.00327\\). 6 s.f.: \\(0.00326776\\).\nSo only ‘0.00327 (correct to 3 significant figures)’ is correct. (B)"
      },
      {
        id: "a1-en-46",
        type: "Estimation and Numbers",
        question: "If \\(k\\) and \\(\\frac{10}{1 - 2i} + ki\\) are real numbers, then \\(k =\\)\nA. \\(4\\)\nB. \\(-4\\)\nC. \\(-2\\)\nD. \\(2\\)",
        answer: "B",
        steps: "\\(\\frac{10}{1 - 2i} = \\frac{10(1 + 2i)}{5} = 2 + 4i\\).\n\\(\\frac{10}{1 - 2i} + ki = 2 + (4 + k)i\\) is real, so \\(4 + k = 0\\) and \\(k = -4\\). (B)"
      },
      {
        id: "a1-en-47",
        type: "Estimation and Numbers",
        question: "ABCDEFGH is an octagon obtained from a rectangle ABCD, with AB = 6 cm and BC = 9 cm, by cutting out a rectangular notch from the side AD: the notch has width GF = 3 cm and depth HG = EF = 2 cm, and AH = ED = 3 cm. All the measurements are correct to the nearest cm. Let x cm² be the actual area of the octagon. Find the range of values of x.\nA. 38 < x < 58\nB. 40 < x < 58\nC. 38 < x < 56\nD. 40 < x < 56",
        answer: "A",
        steps: "Area \\(= 9 \\times 6 - 3 \\times 2 = 48\\ \\text{cm}^{2}\\) using the measured values.\nGreatest area \\(< 9.5 \\times 6.5 - 2.5 \\times 1.5 = 61.75 - 3.75 = 58\\); least area \\(> 8.5 \\times 5.5 - 3.5 \\times 2.5 = 46.75 - 8.75 = 38\\).\nSo \\(38 < x < 58\\). (A)"
      },
      {
        id: "a1-en-48",
        type: "Estimation and Numbers",
        question: "The real part of \\(\\frac{3i^{8} + 4i^{9} + 5i^{10} + 6i^{11} + 7i^{12}}{1 + i}\\) is\nA. \\(\\frac{3}{2}\\)\nB. \\(3\\)\nC. \\(-\\frac{3}{2}\\)\nD. \\(-\\frac{7}{2}\\)",
        answer: "A",
        steps: "\\(i^{8} = 1\\), \\(i^{9} = i\\), \\(i^{10} = -1\\), \\(i^{11} = -i\\), \\(i^{12} = 1\\). Numerator \\(= 3 + 4i - 5 - 6i + 7 = 5 - 2i\\).\n\\(\\frac{5 - 2i}{1 + i} = \\frac{(5 - 2i)(1 - i)}{2} = \\frac{3 - 7i}{2}\\), so the real part is \\(\\frac{3}{2}\\). (A)"
      },
      {
        id: "a1-en-49",
        type: "Estimation and Numbers",
        question: "If \\(0.07868 \\leq x < 0.07874\\), which of the following is true?\nA. x = 0.078 (correct to 2 significant figures)\nB. x = 0.078 (correct to 3 decimal places)\nC. x = 0.0787 (correct to 3 significant figures)\nD. x = 0.0787 (correct to 5 decimal places)",
        answer: "C",
        steps: "\\(0.07868\\) and \\(0.07874\\) both round to \\(0.0787\\) (3 s.f.), and both round to \\(0.079\\) (3 d.p. and 2 s.f.).\nSo ‘x = 0.0787 (correct to 3 significant figures)’ is true, while \\(0.078\\) is wrong for both 3 d.p. and 2 s.f., and \\(0.0787\\) is not correct to 5 d.p. (the values give \\(0.07868\\) to \\(0.07874\\)). (C)"
      },
      {
        id: "a1-en-50",
        type: "Estimation and Numbers",
        question: "If \\(a\\) is a real number, then the real part of \\(\\frac{3 + i^{7}}{a + 2i} - i^{6}\\) is\nA. \\(\\frac{3a - 2}{a^{2} + 4}\\)\nB. \\(\\frac{a^{2} + 3a + 2}{a^{2} - 4}\\)\nC. \\(\\frac{a^{2} + 3a + 2}{a^{2} + 4}\\)\nD. \\(\\frac{3a - 2}{a^{2} - 4}\\)",
        answer: "C",
        steps: "\\(i^{7} = -i\\) and \\(i^{6} = -1\\), so the expression is \\(\\frac{3 - i}{a + 2i} + 1\\).\n\\(\\frac{3 - i}{a + 2i} = \\frac{(3 - i)(a - 2i)}{a^{2} + 4} = \\frac{(3a - 2) - (a + 6)i}{a^{2} + 4}\\).\nReal part \\(= \\frac{3a - 2}{a^{2} + 4} + 1 = \\frac{a^{2} + 3a + 2}{a^{2} + 4}\\). (C)"
      },
      // Estimation and Numbers (continued)
      {
        id: "a1-en-51",
        type: "Estimation and Numbers",
        question: "Define \\(z_{1} = \\frac{3 + ki}{1 - i}\\) and \\(z_{2} = \\frac{k + 3i}{1 + 2i}\\), where \\(k\\) is a real number. If the imaginary part of \\(z_{1}\\) is equal to the imaginary part of \\(z_{2}\\), then \\(z_{1} - z_{2} =\\)\nA. \\(1\\)\nB. \\(0\\)\nC. \\(5\\)\nD. \\(-3\\)",
        answer: "A",
        steps: "\\(z_{1} = \\frac{(3 + ki)(1 + i)}{2} = \\frac{(3 - k) + (3 + k)i}{2}\\) and \\(z_{2} = \\frac{(k + 3i)(1 - 2i)}{5} = \\frac{(k + 6) + (3 - 2k)i}{5}\\).\nEqual imaginary parts: \\(\\frac{3 + k}{2} = \\frac{3 - 2k}{5}\\), so \\(15 + 5k = 6 - 4k\\) and \\(k = -1\\).\nThen \\(z_{1} = 2 + i\\) and \\(z_{2} = 1 + i\\), so \\(z_{1} - z_{2} = 1\\). (A)"
      },
      {
        id: "a1-en-52",
        type: "Estimation and Numbers",
        question: "If \\(x = 3.58\\) (correct to 2 decimal places), find the range of values of \\(x\\).\nA. \\(3.57 \\leq x < 3.59\\)\nB. \\(3.57 < x \\leq 3.59\\)\nC. \\(3.575 < x \\leq 3.585\\)\nD. \\(3.575 \\leq x < 3.585\\)",
        answer: "D",
        steps: "Correct to 2 decimal places means the error is at most \\(0.005\\): the values from \\(3.575\\) (included) up to \\(3.585\\) (not included) round to \\(3.58\\).\nSo \\(3.575 \\leq x < 3.585\\). (D)"
      },
      {
        id: "a1-en-53",
        type: "Estimation and Numbers",
        question: "Let \\(\\alpha\\) be a real number. Define \\(u = w + \\frac{1}{w}\\) and \\(v = w - \\frac{1}{w}\\), where \\(w = \\frac{\\alpha + 2i}{\\alpha - 2i}\\). Which of the following must be true?\nI. \\(v\\) is a real number.\nII. \\(u\\) is a real number.\nIII. The real part of \\(v\\) is equal to 0.\nA. I only\nB. I and II only\nC. II and III only\nD. I, II and III",
        answer: "C",
        steps: "\\(|w| = 1\\), so \\(\\frac{1}{w} = \\bar{w}\\) (the conjugate of \\(w\\)).\n\\(u = w + \\bar{w} = 2\\,\\text{Re}(w)\\) is real: II is true. \\(v = w - \\bar{w} = 2i\\,\\text{Im}(w)\\) has real part \\(0\\): III is true, but \\(v\\) is not real unless \\(\\text{Im}(w) = 0\\): I is false.\nSo II and III only (C)"
      },
      {
        id: "a1-en-54",
        type: "Estimation and Numbers",
        question: "It is given that \\(x\\) is a real number. If \\(x\\) is rounded down to 3 significant figures, then the result is 5.27. Find the range of values of \\(x\\).\nA. \\(5.27 \\leq x < 5.28\\)\nB. \\(5.27 < x \\leq 5.275\\)\nC. \\(5.265 \\leq x < 5.275\\)\nD. \\(5.26 < x \\leq 5.27\\)",
        answer: "A",
        steps: "Rounding down to 3 significant figures gives \\(5.27\\) exactly when \\(5.27 \\leq x < 5.28\\). (A)"
      },
      {
        id: "a1-en-55",
        type: "Estimation and Numbers",
        question: "Let \\(z = 3 + 4i^{6} - ki^{13} + 5i^{19} + 3ki^{20}\\), where \\(k\\) is a real number. If the real part and the imaginary part of \\(z\\) are equal, then the real part of \\(z\\) is\nA. \\(-4\\)\nB. \\(-1\\)\nC. \\(4\\)\nD. \\(8\\)",
        answer: "A",
        steps: "\\(i^{6} = -1\\), \\(i^{13} = i\\), \\(i^{19} = -i\\), \\(i^{20} = 1\\).\n\\(z = 3 - 4 - ki - 5i + 3k = (3k - 1) + (-k - 5)i\\).\n\\(3k - 1 = -k - 5\\) gives \\(k = -1\\), so the real part \\(= 3(-1) - 1 = -4\\). (A)"
      },
      {
        id: "a1-en-56",
        type: "Estimation and Numbers",
        question: "If \\(y = 0.462\\) (correct to 3 significant figures), find the range of values of \\(y\\).\nA. \\(0.461 \\leq y < 0.463\\)\nB. \\(0.4615 < y \\leq 0.4625\\)\nC. \\(0.4615 \\leq y < 0.4625\\)\nD. \\(0.461 < y \\leq 0.463\\)",
        answer: "C",
        steps: "Correct to 3 significant figures the error is at most \\(0.0005\\): the values from \\(0.4615\\) (included) up to \\(0.4625\\) (not included) round to \\(0.462\\).\nSo \\(0.4615 \\leq y < 0.4625\\). (C)"
      },
      {
        id: "a1-en-57",
        type: "Estimation and Numbers",
        question: "If \\(k\\) is a real number, then the real part of \\(\\frac{2i}{k - i} + \\frac{3}{k + i}\\) is\nA. \\(\\frac{3k - 2}{k^{2} + 1}\\)\nB. \\(\\frac{3k + 2}{k^{2} - 1}\\)\nC. \\(\\frac{3k - 2}{k^{2} - 1}\\)\nD. \\(\\frac{3k + 2}{k^{2} + 1}\\)",
        answer: "A",
        steps: "\\(\\frac{2i}{k - i} = \\frac{2i(k + i)}{k^{2} + 1} = \\frac{-2 + 2ki}{k^{2} + 1}\\) and \\(\\frac{3}{k + i} = \\frac{3(k - i)}{k^{2} + 1} = \\frac{3k - 3i}{k^{2} + 1}\\).\nThe real part of the sum is \\(\\frac{-2 + 3k}{k^{2} + 1} = \\frac{3k - 2}{k^{2} + 1}\\). (A)"
      },
      // Estimation and Numbers (continued)
      {
        id: "a1-en-58",
        type: "Estimation and Numbers",
        question: "\\(\\sqrt{555} =\\)\nA. 24 (correct to the nearest integer).\nB. 23.5583 (correct to 4 decimal places).\nC. 23.558 (correct to 3 significant figures).\nD. 23.55 (correct to 2 decimal places).",
        answer: "A",
        steps: "\\(\\sqrt{555} = 23.558437\\ldots\\)\nNearest integer: \\(24\\) ✓. 2 d.p.: \\(23.56\\) (not 23.55). 3 s.f.: \\(23.6\\) (not 23.558). 4 d.p.: \\(23.5584\\) (not 23.5583).\nSo only ‘24 (correct to the nearest integer)’ is correct. (A)"
      },
      {
        id: "a1-en-59",
        type: "Estimation and Numbers",
        question: "Let \\(z = (a - 6)i + \\frac{(a + 1)i}{2 + i}\\). If \\(a\\) and \\(z\\) are real numbers, then \\(a - z =\\)\nA. \\(5\\)\nB. \\(3\\)\nC. \\(2\\)\nD. \\(4\\)",
        answer: "B",
        steps: "\\(\\frac{(a + 1)i}{2 + i} = \\frac{(a + 1)i(2 - i)}{5} = \\frac{(a + 1)(1 + 2i)}{5}\\).\n\\(z = \\frac{a + 1}{5} + \\left[(a - 6) + \\frac{2(a + 1)}{5}\\right]i\\). Since \\(z\\) is real, \\((a - 6) + \\frac{2(a + 1)}{5} = 0\\), i.e. \\(7a = 28\\) and \\(a = 4\\).\nThen \\(z = \\frac{4 + 1}{5} = 1\\), so \\(a - z = 4 - 1 = 3\\). (B)"
      },
      {
        id: "a1-en-60",
        type: "Estimation and Numbers",
        question: "If \\(x = 8.25\\) (correct to 2 decimal places), find the range of values of \\(x\\).\nA. \\(8.24 < x \\leq 8.26\\)\nB. \\(8.24 \\leq x < 8.26\\)\nC. \\(8.245 \\leq x < 8.255\\)\nD. \\(8.245 < x \\leq 8.255\\)",
        answer: "C",
        steps: "Correct to 2 decimal places: the values from \\(8.245\\) (included) up to \\(8.255\\) (not included) round to \\(8.25\\).\nSo \\(8.245 \\leq x < 8.255\\). (C)"
      },
      {
        id: "a1-en-61",
        type: "Estimation and Numbers",
        question: "\\(i^{13} + i^{14} + i^{15} + \\ldots + i^{1002} =\\)\nA. \\(1 + i\\)\nB. \\(1 - i\\)\nC. \\(-1 + i\\)\nD. \\(-1 - i\\)",
        answer: "C",
        steps: "Any 4 consecutive powers of \\(i\\) add up to 0: \\(i^{n} + i^{n + 1} + i^{n + 2} + i^{n + 3} = 0\\).\nThere are \\(1002 - 13 + 1 = 990\\) terms \\(= 4 \\times 247 + 2\\), so the first 988 terms cancel (up to \\(i^{1000}\\)).\nThe remaining terms are \\(i^{1001} + i^{1002} = i + (-1) = -1 + i\\). (C)"
      },
      {
        id: "a1-en-62",
        type: "Estimation and Numbers",
        question: "\\(410.082763 =\\)\nA. 410.0827 (correct to 4 decimal places).\nB. 410.08276 (correct to 4 decimal places).\nC. 410.1 (correct to 4 significant figures).\nD. 410.083 (correct to 4 significant figures).",
        answer: "C",
        steps: "4 s.f.: \\(410.1\\) ✓ (not 410.083). 4 d.p.: \\(410.0828\\) (not 410.0827, and 410.08276 has 5 decimal places).\nSo only ‘410.1 (correct to 4 significant figures)’ is correct. (C)"
      },
      {
        id: "a1-en-63",
        type: "Estimation and Numbers",
        question: "If \\(\\beta\\) and \\(\\frac{i^{4} + 3i^{3} + 2i^{2} + 5i}{\\beta i - 2}\\) are real numbers, then \\(\\beta =\\)\nA. \\(4\\)\nB. \\(-4\\)\nC. \\(-2\\)\nD. \\(2\\)",
        answer: "A",
        steps: "\\(i^{4} + 3i^{3} + 2i^{2} + 5i = 1 - 3i - 2 + 5i = -1 + 2i\\).\n\\(\\frac{-1 + 2i}{\\beta i - 2} = \\frac{(-1 + 2i)(-2 - \\beta i)}{4 + \\beta^{2}} = \\frac{(2 + 2\\beta) + (\\beta - 4)i}{4 + \\beta^{2}}\\).\nThe expression is real, so \\(\\beta - 4 = 0\\) and \\(\\beta = 4\\). (A)"
      }
    ]
  },
  m2: {
    // S.4 Extended Part Module 2 (S4_Math_4_M2_Editable.docx). Chapters 1-3 have no sub-sections, so they have no "type" lines.
    // ---- M2 Chapter 0: Basic Knowledge (Summation Notation & Odd/Even Functions) ----
    basic_knowledge: [
      {
        id: "m2-0a-sum1",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\sum_{r = 1}^{4}r^{2}\\)",
        answer: "\\(30\\)",
        steps: "\\(\\sum_{r = 1}^{4}r^{2} = 1^{2} + 2^{2} + 3^{2} + 4^{2} = 30\\)"
      },
      {
        id: "m2-0a-sum2",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\sum_{r = 1}^{4}{( - 1)^{r}(2r + 1)}\\)",
        answer: "\\(4\\)",
        steps: "\\(\\sum_{r = 1}^{4}{( - 1)^{r}(2r + 1)} = - (3) + (5) - (7) + (9) = 4\\)"
      },
      {
        id: "m2-0a-sum3",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\prod_{i = 0}^{4}2^{i}\\)",
        answer: "\\(1024\\)",
        steps: "\\(\\prod_{i = 0}^{4}2^{i} = 2^{0 + 1 + 2 + 3 + 4} = 2^{10} = 1024\\)"
      },
      {
        id: "m2-0a-sum4",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\prod_{r = 1}^{10}\\frac{r + 1}{r}\\)",
        answer: "\\(11\\)",
        steps: "\\(\\prod_{r = 1}^{10}\\frac{r + 1}{r} = \\frac{2 \\times 3 \\times 4 \\times \\ldots \\times 11}{1 \\times 2 \\times 3 \\times \\ldots \\times 10} = 11\\)"
      },
      {
        id: "m2-0a-sum5",
        type: "Summation and Product Notation",
        question: "Express \\(2^{3} + 3^{3} + 4^{3} + \\ldots + 8^{3}\\) using \\(\\sum_{}^{}\\ \\) notation.",
        answer: "\\(\\sum_{r = 2}^{8}r^{3}\\)",
        steps: "\\(2^{3} + 3^{3} + 4^{3} + \\ldots + 8^{3} = \\sum_{r = 2}^{8}r^{3}\\)"
      },
      {
        id: "m2-0a-sum6",
        type: "Summation and Product Notation",
        question: "Express \\(- 2 + 4 - 8 + 16\\) using \\(\\sum_{}^{}\\ \\) notation.",
        answer: "\\(\\sum_{r = 1}^{4}{( - 2)^{r}}\\)",
        steps: "\\(- 2 + 4 - 8 + 16 = \\sum_{r = 1}^{4}{( - 2)^{r}}\\)"
      },
      {
        id: "m2-0a-sum7",
        type: "Summation and Product Notation",
        question: "Express \\(1 \\times 3 \\times 5 \\times \\cdots \\times 99\\) using \\(\\prod_{}^{}\\ \\) notation.",
        answer: "\\(\\prod_{r = 1}^{50}{(2r - 1)}\\)",
        steps: "\\(1 \\times 3 \\times 5 \\times \\ldots \\times 99 = \\prod_{r = 1}^{50}{(2r - 1)}\\)"
      },
      {
        id: "m2-0a-sum8",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\prod_{r = 2}^{10}\\left( 1 - \\frac{1}{r} \\right)\\)",
        answer: "\\(\\frac{1}{10}\\)",
        steps: "\\(\\prod_{r = 2}^{10}\\left( 1 - \\frac{1}{r} \\right) = \\left( \\frac{1}{2} \\right)\\left( \\frac{2}{3} \\right)\\ldots\\left( \\frac{9}{10} \\right) = \\frac{1}{10}\\)"
      },
      {
        id: "m2-0a-sum9",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\sum_{k = 1}^{10}\\left( k + \\prod_{i = 1}^{5}i^{2} \\right)\\)",
        answer: "\\(144055\\)",
        steps: "\\(\\prod_{i = 1}^{5}i^{2} = (120)^{2} = 14400\\Rightarrow \\sum_{k = 1}^{10}{(k + 14400)} = \\frac{10(11)}{2} + 144000 = 144055\\)"
      },
      {
        id: "m2-0a-sum10",
        type: "Summation and Product Notation",
        question: "Express the sum to \\(n\\) terms of \\(- \\frac{4}{3} + \\frac{8}{9} - \\frac{16}{27} + \\ldots\\) using the \\(\\sum_{}^{}\\ \\) notation.",
        answer: "\\(2\\sum_{r = 1}^{n}{\\left( - \\frac{2}{3} \\right)^{r}}\\)",
        steps: "\\(- \\frac{4}{3} + \\frac{8}{9} - \\frac{16}{27} + \\ldots = 2\\sum_{r = 1}^{n}{\\left( - \\frac{2}{3} \\right)^{r}}\\)"
      },
      {
        id: "m2-0a-sum11",
        type: "Summation and Product Notation",
        question: "Given that \\(\\sum_{i = 1}^{10}X_{i} = 8\\) and \\(\\sum_{i = 1}^{10}Y_{i} = 12\\), find the value of \\(\\sum_{i = 1}^{10}{(2X_{i} - Y_{i})}\\).",
        answer: "\\(4\\)",
        steps: "\\(\\sum_{i = 1}^{10}{(2X_{i} - Y_{i})} = 2(8) - 12 = 4\\)"
      },
      {
        id: "m2-0a-sum12",
        type: "Summation and Product Notation",
        question: "[2324-WYK-S4-M2-UT1-Q1] (a) Prove that \\(\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} = \\sum_{k = 5}^{85}{\\cos^{2}k^{\\circ}}\\). (b) Hence, find the value of \\(\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}}\\).",
        answer: "(a) Proved.\n(b) \\(\\frac{81}{2}\\)",
        steps: "(a) \\(\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} = \\cos^{2}85^{\\circ} + \\cos^{2}84^{\\circ} + \\ldots + \\cos^{2}5^{\\circ} = \\sum_{k = 5}^{85}{\\cos^{2}k^{\\circ}}\\). (b) \\(2\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} = \\sum_{k = 5}^{85}1 = 81\\Rightarrow \\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} =\\) \\(\\frac{81}{2}\\)"
      },
      {
        id: "m2-0a-sum13",
        type: "Summation and Product Notation",
        question: "[2425-WYK-S4-M2-UT1-Q4] Given that \\(\\sum_{k = 1}^{n}k^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\) for all \\(n \\in \\mathbf{N}\\). Evaluate (a) \\(\\sum_{k = 1000}^{2000}{(2k)^{2}}\\) and (b) \\(\\sum_{k = 1}^{2024}{(k + 1)^{2}}\\).",
        answer: "(a) \\(9343334000\\)\n(b) \\(2769972524\\)",
        steps: "(a) \\(4\\left\\lbrack \\frac{2000(2001)(4001)}{6} - \\frac{999(1000)(1999)}{6} \\right\\rbrack = 9343334000\\). (b) \\(\\frac{2024(2025)(4049)}{6} + 2\\frac{2024(2025)}{2} + 2024 = 2769972524\\) (Alternative: \\(\\sum_{j = 1}^{2025}{j^{2} - 1} = 2769972524\\))."
      },
      {
        id: "m2-0a-oe1",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = - \\frac{x^{3} + 1}{x^{4} + 8}\\)",
        answer: "Neither an odd function nor an even function.",
        steps: "\\(f( - x) = \\frac{x^{3} - 1}{x^{4} + 8}\\Rightarrow \\) Neither odd nor even function."
      },
      {
        id: "m2-0a-oe2",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = x^{5}\\sin^{4}x\\)",
        answer: "Odd function.",
        steps: "\\(f( - x) = - x^{5}\\sin^{4}x = - f(x)\\Rightarrow \\) Odd function."
      },
      {
        id: "m2-0a-oe3",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = x^{2}\\cos 2x\\)",
        answer: "Even function.",
        steps: "\\(f( - x) = x^{2}\\cos 2x = f(x)\\Rightarrow \\) Even function."
      },
      {
        id: "m2-0a-oe4",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = \\frac{\\cos x}{|x| + 1}\\)",
        answer: "Even function.",
        steps: "\\(f( - x) = f(x)\\Rightarrow \\) Even function."
      },
      {
        id: "m2-0a-oe5",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = 3\\)",
        answer: "Even function.",
        steps: "\\(f( - x) = 3 = f(x)\\Rightarrow \\) Even function."
      },
      {
        id: "m2-0a-oe6",
        type: "Odd and Even Functions",
        question: "[2324-WYK-S4-M2-UT1-Q2] Let \\(g(x) = \\sum_{k = 1}^{n}\\frac{x^{2k + 1}}{k}\\). (a) Determine if \\(g(x)\\) is odd, even or neither. (b) If \\(h(x) = \\cos(3x)\\), John claims that \\(h(g(x))\\) is an even function. Do you agree? Explain your answer.",
        answer: "(a) \\(g(x)\\) is an odd function.\n(b) Yes, I agree: \\(h(g(x))\\) is an even function.",
        steps: "(a) \\(g( - x) = \\sum_{k = 1}^{n}\\frac{( - x)^{2k + 1}}{k} = - g(x)\\Rightarrow g(x)\\) is an odd function. (b) \\(h(g( - x)) = h( - g(x)) = \\cos( - 3g(x)) = h(g(x))\\Rightarrow \\) Yes, I agree."
      },
      {
        id: "m2-0a-oe7",
        type: "Odd and Even Functions",
        question: "[2026-DSE-M2-Q5a] Let \\(a > 1\\). Define \\(g(x) = \\frac{x^{2}(a^{x} - a^{2x})}{1 + a^{3x}}\\) for all \\(x \\in \\mathbf{R}\\). Is \\(g(x)\\) an odd function? Explain your answer.",
        answer: "Yes, \\(g(x)\\) is an odd function.",
        steps: "\\(g( - x) = \\frac{x^{2}(a^{- x} - a^{- 2x})}{1 + a^{- 3x}} = \\frac{x^{2}(a^{2x} - a^{x})}{a^{3x} + 1} = - g(x)\\Rightarrow \\) Yes, it is an odd function."
      },
      {
        id: "m2-0a-oe8",
        type: "Odd and Even Functions",
        question: "Given that \\(f(x) = \\frac{x}{2^{x} - 1} + \\frac{x}{2}\\) for \\(x \\neq 0\\) and \\(g(x) = (x + \\sqrt{\\lambda^{2} + x^{2}}) - \\frac{1}{x + \\sqrt{\\lambda^{2} + x^{2}}}\\). (a) Show that \\(f(x)\\) is an even function. (b) If \\(g(x)\\) is an odd function, find the value(s) of \\(\\lambda\\).",
        answer: "(a) \\(f(x)\\) is an even function.\n(b) \\(\\lambda = \\pm 1\\)",
        steps: "(a) \\(f( - x) = \\frac{- x}{2^{- x} - 1} - \\frac{x}{2} = \\frac{- 2x \\cdot 2^{x} - x + x \\cdot 2^{x}}{2(1 - 2^{x})} = \\frac{x + x \\cdot 2^{x}}{2(2^{x} - 1)} = f(x)\\Rightarrow \\) Even function. (b) \\(g( - x) = - g(x)\\Rightarrow 2\\sqrt{\\lambda^{2} + x^{2}} = \\frac{2\\sqrt{\\lambda^{2} + x^{2}}}{\\lambda^{2}}\\Rightarrow \\lambda = \\pm 1\\)."
      }
    ],

    // ---- M2 Chapter 1: Mathematical Induction ----
    mathematical_induction: [
      {
        id: "m2-1a-ex1",
        question: "[Level 1] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(\\frac{1}{\\pi(\\pi + 1)} + \\frac{1}{(\\pi + 1)(\\pi + 2)} + \\ldots + \\frac{1}{(\\pi + n - 1)(\\pi + n)} = \\frac{n}{\\pi(\\pi + n)}\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= \\frac{1}{\\pi(\\pi + 1)} =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{m}{\\pi(\\pi + m)} + \\frac{1}{(\\pi + m)(\\pi + m + 1)} = \\frac{(m + 1)(\\pi + m)}{\\pi(\\pi + m)(\\pi + m + 1)} = \\frac{m + 1}{\\pi(\\pi + (m + 1))}\\). True by M.I."
      },
      {
        id: "m2-1a-ex2",
        question: "[Level 1] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(\\sum_{r = 1}^{n}{( - 1)^{r + 1}2^{r}} = \\frac{2 + ( - 2)^{n + 1}}{3}\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= 2 =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{2 + ( - 2)^{m + 1}}{3} + ( - 1)^{m + 2}2^{m + 1} = \\frac{2 - 2( - 2)^{m + 1}}{3} = \\frac{2 + ( - 2)^{(m + 1) + 1}}{3}\\). True by M.I."
      },
      {
        id: "m2-1a-ex3",
        question: "[Level 1] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(\\sum_{r = 1}^{n}\\left( 3^{r - 1} + \\frac{1}{3^{r - 1}} \\right) = \\frac{3^{n}}{2} - \\frac{1}{2 \\times 3^{n - 1}} + 1\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= 2 =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{3^{m}}{2} - \\frac{1}{2 \\times 3^{m - 1}} + 1 + 3^{m} + \\frac{1}{3^{m}} = \\frac{3^{m + 1}}{2} - \\frac{1}{2 \\times 3^{(m + 1) - 1}} + 1\\). True by M.I."
      },
      {
        id: "m2-1a-ex4",
        question: "[Level 2] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(x^{2} + 2x^{4} + 3x^{6} + \\ldots + nx^{2n} = \\frac{x^{2} - (n + 1)x^{2n + 2} + nx^{2n + 4}}{(1 - x)^{2}(1 + x)^{2}}\\), where \\(x \\neq - 1\\) and \\(x \\neq 1\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= x^{2} =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{x^{2} - (m + 1)x^{2m + 2} + mx^{2m + 4}}{(1 - x^{2})^{2}} + (m + 1)x^{2m + 2} = \\frac{x^{2} - ((m + 1) + 1)x^{2(m + 1) + 2} + (m + 1)x^{2(m + 1) + 4}}{(1 - x)^{2}(1 + x)^{2}}\\). True by M.I."
      },
      {
        id: "m2-1a-ex5",
        question: "[Level 2 \u2013 Taking out common factor] (a) Prove by M.I. that \\(\\frac{7}{1 \\times 2 \\times 3} + \\frac{10}{2 \\times 3 \\times 4} + \\ldots + \\frac{3n + 4}{n(n + 1)(n + 2)} = \\frac{5}{2} - \\frac{3n + 5}{(n + 1)(n + 2)}\\). (b) Hence, find \\(\\frac{7}{2} + \\frac{10}{8} + \\frac{13}{20} + \\ldots + \\frac{52}{1632}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{356}{51}\\)",
        steps: "(a) For \\(n = 1\\): L.H.S. \\(= \\frac{7}{6} =\\) R.H.S. Inductive step: \\(\\frac{5}{2} - \\frac{3m + 5}{(m + 1)(m + 2)} + \\frac{3m + 7}{(m + 1)(m + 2)(m + 3)} = \\frac{5}{2} - \\frac{3(m + 1) + 5}{(m + 2)(m + 3)}\\). (b) \\(= 3\\left\\lbrack \\frac{5}{2} - \\frac{3(16) + 5}{17 \\times 18} \\right\\rbrack = \\frac{356}{51}\\)."
      },
      {
        id: "m2-1a-ex6",
        question: "[Level 2 \u2013 Taking out common factor] (a) Prove by M.I. that \\(\\sum_{r = 1}^{n}\\frac{1}{r(r + 1)(r + 2)(r + 3)} = \\frac{1}{3}\\left\\lbrack \\frac{1}{6} - \\frac{1}{(n + 1)(n + 2)(n + 3)} \\right\\rbrack\\). (b) Hence, find (i) \\(\\frac{1}{6 \\times 10 \\times 11 \\times 13} + \\ldots + \\frac{1}{12 \\times 22 \\times 23 \\times 25}\\) and (ii) \\(\\frac{1}{17 \\times 25 \\times 26 \\times 53} + \\ldots + \\frac{1}{11 \\times 34 \\times 65 \\times 67}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(\\frac{26}{56925}\\)\n(b)(ii) \\(\\frac{206}{12215775}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{24}\\). Inductive step adds \\(\\frac{1}{(m + 1)(m + 2)(m + 3)(m + 4)}\\) to get \\(\\frac{1}{3}\\left\\lbrack \\frac{1}{6} - \\frac{1}{(m + 2)(m + 3)(m + 4)} \\right\\rbrack\\). (b) (i) \\(= 2\\sum_{k = 10}^{22}\\frac{1}{k(k + 1)(k + 2)(k + 3)} = \\frac{26}{56925}\\). (ii) \\(= 12\\sum_{k = 50}^{65}\\frac{1}{k(k + 1)(k + 2)(k + 3)} = \\frac{206}{12215775}\\)."
      },
      {
        id: "m2-1a-ex7",
        question: "[Level 2 \u2013 Taking out common factor] (a) Let \\(q \\neq 1\\). Prove by M.I. that \\(1 + 2q + 3q^{2} + \\ldots + nq^{n - 1} = \\frac{1 - (n + 1)q^{n} + nq^{n + 1}}{(1 - q)^{2}}\\). (b) Hence, find (i) \\(1 + 4 + 12 + 32 + \\ldots + 10(2)^{9}\\), (ii) \\(8 + 24 + 64 + \\ldots + 10(2)^{10}\\), (iii) \\(\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} + \\ldots + \\frac{9}{2 \\times 3^{8}}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(9217\\)\n(b)(ii) \\(18432\\)\n(b)(iii) \\(\\frac{4919}{4374}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(1\\). Inductive step simplifies to \\(\\frac{1 - (m + 2)q^{m + 1} + (m + 1)q^{m + 2}}{(1 - q)^{2}}\\). (b) (i) \\(q = 2,n = 10\\Rightarrow 9217\\). (ii) \\(2(9217 - 1) = 18432\\). (iii) \\(\\frac{1}{2}\\left\\lbrack \\frac{1 - 10(1/3)^{9} + 9(1/3)^{10}}{(2/3)^{2}} \\right\\rbrack = \\frac{4919}{4374}\\)."
      },
      {
        id: "m2-1a-ex8",
        question: "[Level 3] (a) Prove by M.I. that \\(\\prod_{r = 1}^{n}\\left( 1 + \\frac{1}{r + 1} \\right) = \\frac{n}{2} + 1\\). (b) Hence find \\(\\left( 1 + \\frac{1}{11} \\right)\\left( 1 + \\frac{1}{12} \\right)\\ldots\\left( 1 + \\frac{1}{40} \\right)\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{41}{11}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{3}{2}\\). Inductive step: \\(\\left( \\frac{m}{2} + 1 \\right)\\left( 1 + \\frac{1}{m + 2} \\right) = \\frac{m + 3}{2} = \\frac{m + 1}{2} + 1\\). (b) \\(= \\frac{\\frac{39}{2} + 1}{\\frac{9}{2} + 1} = \\frac{41}{11}\\)."
      },
      {
        id: "m2-1a-ex9",
        question: "[Level 3 \u2013 Sum of odd/even sequences] (a) Prove by M.I. that \\(1^{3} + 2^{3} + \\ldots + n^{3} = \\frac{n^{2}(n + 1)^{2}}{4}\\). (b) Hence, find (i) \\(2^{3} + 4^{3} + \\ldots + 26^{3}\\), (ii) \\(1^{3} + 3^{3} + \\ldots + 27^{3}\\), (iii) \\(11^{3} + 13^{3} + \\ldots + 31^{3}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(66248\\)\n(b)(ii) \\(76636\\)\n(b)(iii) \\(129591\\)",
        steps: "(a) Standard sum of cubes induction. (b) (i) \\(8\\left\\lbrack \\frac{13^{2}(14)^{2}}{4} \\right\\rbrack = 66248\\). (ii) \\(\\frac{27^{2}(28)^{2}}{4} - 66248 = 76636\\). (iii) \\(129591\\)."
      },
      {
        id: "m2-1a-ex10",
        question: "[Level 3 \u2013 Summation Property] [2024-DSE-M2-Q8] (a) Prove by M.I. that \\(\\sum_{r = 1}^{n}{r(2^{- r})} = 2 - (n + 2)(2^{- n})\\). (b) Evaluate (i) \\(\\sum_{r = 1000}^{1999}{r(2^{- r})}\\) and (ii) \\(\\sum_{r = 1}^{1000}{(2000 - r)2^{r}}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(1001(2^{- 999}) - 2001(2^{- 1999})\\)\n(b)(ii) \\(1001(2^{1001}) - 4002\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{2}\\). Inductive step: \\(2 - (m + 2)2^{- m} + (m + 1)2^{- (m + 1)} = 2 - (m + 3)2^{- (m + 1)}\\). (b) (i) \\(1001(2^{- 999}) - 2001(2^{- 1999})\\). (ii) Let \\(j = 2000 - r\\): \\(2^{2000}\\sum_{j = 1000}^{1999}{j(2^{- j})} = 1001(2^{1001}) - 4002\\)."
      },
      {
        id: "m2-1a-ex11",
        question: "[Level 1] Prove by M.I. that for \\(n = 2,3,4\\ldots\\), \\(\\frac{1}{2 \\times 1} + \\frac{1}{3 \\times 2} + \\ldots + \\frac{1}{n(n - 1)} = \\frac{n - 1}{n}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 2\\): \\(\\frac{1}{2}\\). Inductive step: \\(\\frac{m - 1}{m} + \\frac{1}{(m + 1)m} = \\frac{m^{2}}{m(m + 1)} = \\frac{(m + 1) - 1}{m + 1}\\). True by M.I."
      },
      {
        id: "m2-1a-ex12",
        question: "[Level 2] Prove by M.I. that for \\(n = 2,3,4\\ldots\\), \\(\\left( 1 - \\frac{1}{2^{2}} \\right)\\left( 1 - \\frac{1}{3^{2}} \\right)\\ldots\\left( 1 - \\frac{1}{n^{2}} \\right) = \\frac{n + 1}{2n}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 2\\): \\(\\frac{3}{4}\\). Inductive step: \\(\\frac{m + 1}{2m}\\left( 1 - \\frac{1}{(m + 1)^{2}} \\right) = \\frac{m + 2}{2(m + 1)}\\). True by M.I."
      },
      {
        id: "m2-1a-ex13",
        question: "[Level 2 \u2013 Taking out common factor] [2425-WYK-S4-UT1-M2-Q5] (a) Prove by M.I. that \\(\\frac{1}{1 \\times 3} + \\frac{1}{2 \\times 3^{2}} + \\ldots + \\frac{1}{2^{n - 1} \\times 3^{n}} = \\frac{2}{5}\\left( 1 - \\frac{1}{6^{n}} \\right)\\). (b) Hence, find \\(\\frac{1}{6} + \\frac{1}{6^{2}} + \\ldots + \\frac{1}{6^{12}}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{435356467}{2176782336}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{3}\\). Inductive step: \\(\\frac{2}{5}\\left( 1 - \\frac{1}{6^{k}} \\right) + \\frac{1}{2^{k} \\times 3^{k + 1}} = \\frac{2}{5}\\left( 1 - \\frac{1}{6^{k + 1}} \\right)\\). (b) \\(= \\frac{1}{2}\\left\\lbrack \\frac{2}{5}\\left( 1 - \\frac{1}{6^{12}} \\right) \\right\\rbrack = \\frac{435356467}{2176782336}\\)."
      },
      {
        id: "m2-1a-ex14",
        question: "[Level 2 \u2013 Double Negation] (a) Prove by M.I. that \\(1 - 4 + 4^{2} - \\ldots + ( - 4)^{n} = \\frac{1 - ( - 4)^{n + 1}}{5}\\). (b) Hence, find (i) \\(4^{3} - 4^{4} + 4^{5} - \\ldots + 4^{11}\\) and (ii) \\(4^{13} - 4^{14} + 4^{15} - \\ldots + 4^{25}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(3355456\\)\n(b)(ii) \\(\\frac{4^{26} + 4^{13}}{5}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(- 3\\). Inductive step: \\(\\frac{1 - ( - 4)^{m + 1}}{5} + ( - 4)^{m + 1} = \\frac{1 - ( - 4)^{m + 2}}{5}\\). (b) (i) \\(3355456\\). (ii) \\(\\frac{4^{26} + 4^{13}}{5}\\)."
      },
      {
        id: "m2-1a-ex15",
        question: "[Level 2 \u2013 Double Negation] [2425-WYK-S5-Midyear-M2-Q4] (a) Prove by M.I. that \\(1 - \\frac{1}{5 \\times 8} - \\frac{1}{8 \\times 11} - \\ldots - \\frac{1}{(3n + 2)(3n + 5)} = \\frac{14n + 25}{5(3n + 5)}\\). (b) Hence, find \\(\\frac{1}{95 \\times 98} + \\frac{1}{98 \\times 101} + \\ldots + \\frac{1}{152 \\times 155}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{4}{2945}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{39}{40}\\). Inductive step simplifies to \\(\\frac{14(m + 1) + 25}{5(3(m + 1) + 5)}\\). (b) \\(= - \\left\\lbrack \\frac{14(50) + 25}{5(155)} - \\frac{14(30) + 25}{5(95)} \\right\\rbrack = \\frac{4}{2945}\\)."
      },
      {
        id: "m2-1a-ex16",
        question: "[Level 2] (a) Using M.I., prove that \\(\\sum_{r = n}^{2n}{r(r + 1)} = \\frac{1}{3}n(n + 1)(7n + 5)\\). (b) Using (a), evaluate \\(\\sum_{r = 10}^{40}{r(r + 1)}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(22630\\)",
        steps: "(a) Base case \\(n = 1\\): \\(8\\). Inductive step: \\(\\frac{1}{3}m(m + 1)(7m + 5) - m(m + 1) + (2m + 1)(2m + 2) + (2m + 2)(2m + 3) = \\frac{1}{3}(m + 1)(m + 2)(7m + 12)\\). (b) \\(= \\sum_{r = 10}^{20}{r(r + 1) + \\sum_{r = 20}^{40}{r(r + 1) - 20(21)}} = 22630\\)."
      },
      {
        id: "m2-1a-ex17",
        question: "[Level 2] (a) Using M.I., prove that \\(\\sum_{r = n}^{2n}\\frac{1}{(r + 1)(r + 2)} = \\frac{1}{2n + 2}\\). (b) Using (a), evaluate \\(\\sum_{r = 3}^{12}\\frac{1}{(r + 1)(r + 2)}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{5}{28}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{4}\\). Inductive step telescopes to \\(\\frac{1}{2m + 4} = \\frac{1}{2(m + 1) + 2}\\). (b) \\(= \\frac{1}{8} + \\frac{1}{14} - \\frac{1}{56} = \\frac{5}{28}\\)."
      },
      {
        id: "m2-1a-ex18",
        question: "[Level 2] [2425-WYK-S4-UT1-M2-Q6] (a) Prove by M.I. that \\(\\sum_{k = 1}^{n}\\left( \\frac{1}{2k - 1} - \\frac{1}{2k} \\right) = \\sum_{r = n + 1}^{2n}\\frac{1}{r}\\). (b) Patrick claims that \\(\\frac{1}{2024} + \\frac{1}{2025} + \\ldots + \\frac{1}{4046} > \\frac{1}{2}\\). Do you agree?",
        answer: "(a) Proved by mathematical induction.\n(b) Agree: the sum is greater than \\(\\frac{1}{2}\\).",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{2}\\). Inductive step simplifies to \\(\\sum_{r = m + 2}^{2m + 2}\\frac{1}{r}\\). (b) \\(= \\sum_{k = 1}^{2023}\\left( \\frac{1}{2k - 1} - \\frac{1}{2k} \\right) = \\frac{1}{1 \\times 2} + \\frac{1}{3 \\times 4} + \\ldots + \\frac{1}{4045 \\times 4046} > \\frac{1}{2}\\). Agreed."
      },
      {
        id: "m2-1a-ex19",
        question: "[Level 3 \u2013 Partial Fraction] [2526-WYK-S6-FTA-M2-Q7] (a) Prove by M.I. that \\(\\sum_{k = 2n}^{3n}\\frac{1}{(k + 2)(k + 3)} = \\frac{1}{6(n + 1)}\\). (b) Using (a), evaluate \\(\\sum_{k = 40}^{90}\\frac{k(k + 5)}{(k + 2)(k + 3)}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{11050}{217}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{12}\\). Inductive step simplifies via partial fractions to \\(\\frac{1}{6(m + 2)}\\). (b) \\(= 51 - 6\\left\\lbrack \\frac{1}{6(21)} + \\frac{1}{6(31)} - \\frac{1}{62 \\times 63} \\right\\rbrack = \\frac{11050}{217}\\)."
      },
      {
        id: "m2-1a-ex20",
        question: "[Level 2] (a) Prove by M.I. that \\(1 \\times 3 + 2 \\times 4 + \\ldots + n(n + 2) = \\frac{n(n + 1)(2n + 7)}{6}\\). (b) Using (a) and \\(\\sum_{r = 1}^{n}r = \\frac{n(n + 1)}{2}\\), prove \\(1 \\times 4 + 2 \\times 5 + \\ldots + (n - 1)(n + 2) = \\frac{n(n - 1)(n + 4)}{3}\\) for \\(n \\geq 2\\).",
        answer: "(a) Proved by mathematical induction.\n(b) Proved.",
        steps: "(a) Base case \\(n = 1\\): \\(3\\). Inductive step factors to \\(\\frac{(m + 1)(m + 2)(2m + 9)}{6}\\). (b) \\(\\sum_{m = 1}^{n}{(m - 1)(m + 2)} = \\frac{n(n + 1)(2n + 7)}{6} - \\frac{n(n + 5)}{2} = \\frac{n(n - 1)(n + 4)}{3}\\)."
      },
      {
        id: "m2-1a-ex21",
        question: "[Level 2] [2324-WYK-S4-UT1-M2-Q3] (a) Prove by M.I. that \\(1 \\times 2 + 3 \\times 4 + \\ldots + (2n - 1)(2n) = \\frac{1}{3}n(n + 1)(4n - 1)\\). (b) Find an expression for \\(\\sum_{k = 1}^{n}k^{2}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\sum_{k = 1}^{n}k^{2} = \\frac{1}{6}n(n + 1)(2n + 1)\\)",
        steps: "(a) Base case \\(n = 1\\): \\(2\\). Inductive step factors to \\(\\frac{1}{3}(k + 1)(k + 2)(4k + 3)\\). (b) \\(4\\sum_{k = 1}^{n}{k^{2} - 2\\sum_{k = 1}^{n}k} = \\frac{1}{3}n(n + 1)(4n - 1)\\Rightarrow \\sum_{k = 1}^{n}k^{2} = \\frac{1}{6}n(n + 1)(2n + 1)\\)."
      },
      {
        id: "m2-1a-ex22",
        question: "[Level 2] (a) Prove by M.I. that \\(7 + 2 \\times 7^{2} + 3 \\times 7^{3} + \\ldots + n \\times 7^{n} = \\frac{(6n - 1)(7^{n + 1}) + 7}{36}\\). (b) Find an expression for \\(2 \\times 7 + 3 \\times 7^{2} + \\ldots + (n + 1) \\times 7^{n}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{(6n + 5)(7^{n + 1}) - 35}{36}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(7\\). Inductive step simplifies to \\(\\frac{(6m + 5)(7^{m + 2}) + 7}{36}\\). (b) \\(\\sum_{k = 1}^{n}{(k + 1)7^{k}} = \\frac{(6n - 1)(7^{n + 1}) + 7}{36} + \\frac{7(1 - 7^{n})}{1 - 7} = \\frac{(6n + 5)(7^{n + 1}) - 35}{36}\\)."
      },
      {
        id: "m2-1a-ex23",
        question: "[Level 3 \u2013 MI not starting with first term + Odd/even Sequences] (a) Prove by M.I. that \\(1 \\times 3 + 2 \\times 4 + \\ldots + (n - 1)(n + 1) = \\frac{n(n - 1)(2n + 5)}{6}\\) for \\(n \\geq 2\\). (b) Show \\(1^{2} + 2^{2} + \\ldots + n^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\). (c) Evaluate (i) \\(101 \\times 103 + \\ldots + 199 \\times 201\\), (ii) \\(102^{2} + 104^{2} + \\ldots + 200^{2}\\), (iii) \\(101 \\times 103 + 103 \\times 105 + \\ldots + 199 \\times 201\\).",
        answer: "(a) Proved by mathematical induction.\n(b) Shown.\n(c)(i) \\(2338050\\)\n(c)(ii) \\(1181700\\)\n(c)(iii) \\(1181650\\)",
        steps: "(a) Base case \\(n = 2\\): \\(3\\). Inductive step factors to \\(\\frac{(m + 1)m(2m + 7)}{6}\\). (b) \\(\\sum_{r = 2}^{n}{(r^{2} - 1)} = \\frac{n(n - 1)(2n + 5)}{6}\\Rightarrow \\sum_{r = 1}^{n}r^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\). (c) (i) \\(2338050\\). (ii) \\(1181700\\). (iii) \\(1181700 - 50 = 1181650\\)."
      },
      {
        id: "m2-1a-ex24",
        question: "[Level 1] \\(c_{1} = 2\\) and \\(c_{k + 1} = 3c_{k} + 2k - 1\\). Prove by M.I. that \\(c_{n} = 3^{n} - n\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(c_{1} = 2 = 3^{1} - 1\\). Inductive step: \\(c_{m + 1} = 3(3^{m} - m) + 2m - 1 = 3^{m + 1} - (m + 1)\\). True by M.I."
      },
      {
        id: "m2-1a-ex25",
        question: "[Level 1] \\(a_{1} = \\frac{5}{2}\\) and \\(a_{r + 1} = \\frac{3}{2}(a_{r} - 1) + 1\\). Prove by M.I. that \\(a_{n} = \\frac{3^{n} + 2^{n}}{2^{n}}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(\\frac{5}{2}\\). Inductive step: \\(a_{m + 1} = \\frac{3}{2}\\left( \\frac{3^{m}}{2^{m}} \\right) + 1 = \\frac{3^{m + 1} + 2^{m + 1}}{2^{m + 1}}\\). True by M.I."
      },
      {
        id: "m2-1a-ex26",
        question: "[Level 1] \\(a_{1} = p\\) and \\(a_{k + 1} = 2a_{k} - a_{k}^{2}\\) (\\(p \\neq 0\\)). Prove by M.I. that \\(a_{n} = 1 - (1 - p)^{2^{n - 1}}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(p\\). Inductive step: \\(a_{m + 1} = 2\\lbrack 1 - (1 - p)^{2^{m - 1}}\\rbrack - \\lbrack 1 - (1 - p)^{2^{m - 1}}\\rbrack^{2} = 1 - (1 - p)^{2^{m}}\\). True by M.I."
      },
      {
        id: "m2-1a-ex27",
        question: "[Level 2] \\(a_{1} = 1,a_{2} = 2\\) and \\(a_{r + 2} = a_{r + 1} + a_{r}\\). Prove by M.I. that \\((a_{n + 1})^{2} - a_{n + 2}a_{n} = ( - 1)^{n + 1}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(2^{2} - 3(1) = 1 = ( - 1)^{2}\\). Inductive step: \\((a_{m + 2})^{2} - (a_{m + 2} + a_{m + 1})a_{m + 1} = a_{m + 2}a_{m} - (a_{m + 1})^{2} = - ( - 1)^{m + 1} = ( - 1)^{m + 2}\\). True by M.I."
      },
      {
        id: "m2-1a-ex28",
        question: "[Level 2] \\(a_{1} = 6\\) and \\(a_{n + 1} = \\frac{a_{n}}{a_{n} - 2}\\). (a) Evaluate \\(a_{2}\\) and \\(a_{3}\\). (b) Prove by M.I. that \\(a_{n} = \\frac{3}{1 + ( - 2)^{n - 2}}\\). (c) Prove by M.I. that \\(\\sum_{i = 1}^{n}\\frac{1}{a_{i}} = \\frac{6n - 1 + ( - 2)^{n}}{18}\\).",
        answer: "(a) \\(a_{2} = \\frac{3}{2},a_{3} = - 3\\)\n(b) Proved by mathematical induction.\n(c) Proved by mathematical induction.",
        steps: "(a) \\(a_{2} = \\frac{3}{2},a_{3} = - 3\\). (b) Base case \\(n = 1\\): \\(6\\). Inductive step simplifies to \\(\\frac{3}{1 + ( - 2)^{m - 1}}\\). (c) Base case \\(n = 1\\): \\(\\frac{1}{6}\\). Inductive step: \\(\\frac{6m - 1 + ( - 2)^{m}}{18} + \\frac{1 + ( - 2)^{m - 1}}{3} = \\frac{6(m + 1) - 1 + ( - 2)^{m + 1}}{18}\\). True by M.I."
      }
    ],

    // ---- M2 Chapter 2: Binomial Theorem ----
    binomial_theorem: [
      {
        id: "m2-2a-ex1",
        question: "[Level 1] Find the value of \\(n\\) in the equation \\(C_{2}^{n + 4} + C_{2}^{n + 1} = 9C_{2}^{n}\\).",
        answer: "\\(n = 3\\)",
        steps: "\\((n + 4)(n + 3) + n(n + 1) = 9n(n - 1)\\Rightarrow 7n^{2} - 17n - 12 = 0\\Rightarrow n = 3\\) or \\(- \\frac{4}{7}\\) (rej.)"
      },
      {
        id: "m2-2a-ex2",
        question: "[Level 2] Simplify (a) \\(\\frac{C_{r - 1}^{n}}{C_{n - r}^{n}}\\), (b) \\(\\frac{C_{r}^{n + 1}}{C_{r - 1}^{n}} \\times \\frac{C_{n - r}^{n - 1}}{C_{n - r + 1}^{n + 1}}\\), (c) \\(\\frac{1}{C_{r}^{10}} + \\frac{1}{C_{r + 1}^{10}}\\).",
        answer: "(a) \\(\\frac{r}{n - r + 1}\\)\n(b) \\(\\frac{n - r + 1}{n}\\)\n(c) \\(\\frac{11}{10C_{r}^{9}}\\)",
        steps: "(a) \\(= \\frac{r}{n - r + 1}\\). (b) \\(= \\frac{n + 1}{r} \\times \\frac{r(n - r + 1)}{n(n + 1)} = \\frac{n - r + 1}{n}\\). (c) \\(= \\frac{r!(9 - r)!}{10!}\\lbrack(10 - r) + (r + 1)\\rbrack = \\frac{11}{10C_{r}^{9}}\\)."
      },
      {
        id: "m2-2a-ex3",
        question: "[Level 1] Expand (a) \\(\\left( x + \\frac{2}{x} \\right)^{3}\\left( x - \\frac{2}{x} \\right)^{3}\\) and (b) \\(\\left( x^{2} - 6 + \\frac{9}{x^{2}} \\right)^{3}\\).",
        answer: "(a) \\(x^{6} - 12x^{2} + \\frac{48}{x^{2}} - \\frac{64}{x^{6}}\\)\n(b) \\(x^{6} - 18x^{4} + 135x^{2} - 540 + \\frac{1215}{x^{2}} - \\frac{1458}{x^{4}} + \\frac{729}{x^{6}}\\)",
        steps: "(a) \\(= \\left( x^{2} - \\frac{4}{x^{2}} \\right)^{3} = x^{6} - 12x^{2} + \\frac{48}{x^{2}} - \\frac{64}{x^{6}}\\). (b) \\(= \\left( x - \\frac{3}{x} \\right)^{6} = x^{6} - 18x^{4} + 135x^{2} - 540 + \\frac{1215}{x^{2}} - \\frac{1458}{x^{4}} + \\frac{729}{x^{6}}\\)."
      },
      {
        id: "m2-2a-ex4",
        question: "[Level 2] Evaluate (a) \\(\\left( 3^{\\frac{3}{2}} + \\frac{1}{\\sqrt{3}} \\right)^{6} + \\left( 3^{\\frac{3}{2}} - \\frac{1}{\\sqrt{3}} \\right)^{6}\\) and (b) \\(\\left( \\frac{1}{3 + \\sqrt{5}} \\right)^{6} - \\left( \\frac{1}{3 - \\sqrt{5}} \\right)^{6}\\).",
        answer: "(a) \\(\\frac{1262144}{27}\\)\n(b) \\(- \\frac{9\\sqrt{5}}{4}\\)",
        steps: "(a) Odd terms cancel \\(\\Rightarrow 2\\left\\lbrack 3^{9} + 15(3^{6})\\left( \\frac{1}{3} \\right) + 15(3^{3})\\left( \\frac{1}{9} \\right) + \\frac{1}{27} \\right\\rbrack\\) \\(= \\frac{1262144}{27}\\). (b) \\(= \\frac{(3 - \\sqrt{5})^{6} - (3 + \\sqrt{5})^{6}}{4096} = - \\frac{9\\sqrt{5}}{4}\\)."
      },
      {
        id: "m2-2a-ex5",
        question: "[Level 1] In the expansion of \\(\\left( x + \\frac{2}{x^{3}} \\right)^{8}\\), find (a) the constant term, (b) the \\(x^{3}\\) term.",
        answer: "(a) \\(112\\)\n(b) The \\(x^{3}\\) term does not exist.",
        steps: "General term \\(= C_{r}^{8}2^{r}x^{8 - 4r}\\). (a) \\(r = 2\\Rightarrow C_{2}^{8}(2)^{2} = 112\\). (b) \\(8 - 4r = 3\\Rightarrow r = \\frac{5}{4}\\) (not integer), so the \\(x^{3}\\) term does not exist."
      },
      {
        id: "m2-2a-ex6",
        question: "[Level 1] In the expansion of \\(\\left( x - \\frac{2}{x^{2}} \\right)^{9}\\) in ascending powers of \\(x\\), find (a) the \\(5^{th}\\) term, (b) the coefficient of the \\(x^{4}\\) term.",
        answer: "(a) \\(- 4032x^{- 6}\\)\n(b) \\(0\\) (there is no \\(x^{4}\\) term)",
        steps: "General term \\(= C_{r}^{9}( - 2)^{9 - r}x^{3r - 18}\\). (a) \\(r = 4\\Rightarrow C_{4}^{9}( - 2)^{5}x^{- 6} = - 4032x^{- 6}\\). (b) \\(3r - 18 = 4\\Rightarrow r = \\frac{22}{3}\\) (not integer), so coefficient \\(= 0\\)."
      },
      {
        id: "m2-2a-ex7",
        question: "[Level 1] \\((1 - px)^{n} = 1 - 36x + 36p^{2}x^{2} + \\ldots\\) (a) Find \\(n\\) and \\(p\\). (b) Find the coefficient of \\(x^{3}\\).",
        answer: "(a) \\(n = 9,p = 4\\)\n(b) \\(- 5376\\)",
        steps: "(a) \\(np = 36,\\frac{n(n - 1)}{2} = 36\\Rightarrow n = 9,p = 4\\). (b) Coefficient of \\(x^{3} = C_{3}^{9}( - 4)^{3} = - 5376\\)."
      },
      {
        id: "m2-2a-ex8",
        question: "[Level 1] \\((1 + bx)^{n} = 1 + 63x + 1701x^{2} + \\ldots\\) Find \\(b\\) and \\(n\\).",
        answer: "\\(n = 7,b = 9\\)",
        steps: "\\(nb = 63,\\frac{n(n - 1)}{2}b^{2} = 1701\\Rightarrow n =\\) \\(7\\)\\(,b =\\) \\(9\\)."
      },
      {
        id: "m2-2a-ex9",
        question: "[Level 1] In \\(\\left( 1 + \\frac{3}{x} \\right)^{n}(1 + x^{2})^{4}\\), the coefficient of \\(x^{6}\\) is \\(256\\). (a) Find \\(n\\). (b) Find the coefficient of \\(x^{- 5}\\).",
        answer: "(a) \\(n = 8\\)\n(b) \\(83592\\)",
        steps: "(a) \\(\\frac{9n(n - 1)}{2} + 4 = 256\\Rightarrow n = 8\\). (b) \\((C_{5}^{8})(3^{5}) + (C_{7}^{8})(3^{7})(4) = 83592\\)."
      },
      {
        id: "m2-2a-ex10",
        question: "[Level 1] [2324-WYK-S4-Midyear-M2-Q2] \\((1 - x)^{m}(1 + 2x)^{n} = 1 - 9x^{2} + \\ldots\\) Find \\(m\\) and \\(n\\).",
        answer: "\\(n = 3,m = 6\\)",
        steps: "\\(- m + 2n = 0\\) and \\(\\frac{m(m - 1)}{2} - 2mn + 2n(n - 1) = - 9\\Rightarrow n =\\) \\(3\\)\\(,m = 6\\)."
      },
      {
        id: "m2-2a-ex11",
        question: "[Level 1] \\((1 + ax)^{6} = \\sum_{r = 0}^{6}{\\alpha_{r}x^{r}}\\) and \\((x + 2b)^{9} = \\sum_{r = 0}^{9}{\\beta_{r}x^{r}}\\). If \\(\\alpha_{1} + \\beta_{8} = 0\\) and \\(\\alpha_{2} - \\beta_{7} + 36 = 0\\), find \\(b\\).",
        answer: "\\(b = \\pm 2\\)",
        steps: "\\(6a + 18b = 0\\Rightarrow a = - 3b\\); \\(15a^{2} - 144b^{2} + 36 = 0\\Rightarrow - 9b^{2} + 36 = 0\\Rightarrow b = \\pm 2\\)."
      },
      {
        id: "m2-2a-ex12",
        question: "[Level 1] (a) Expand \\((1 - 2x)^{m} + (1 - 7x)^{n}\\) up to \\(x^{2}\\). (b) If coefficients of \\(x\\) and \\(x^{2}\\) are \\(- 22\\) and \\(73\\), find \\(m\\) and \\(n\\).",
        answer: "(a) \\(2 - (2m + 7n)x + \\left\\lbrack 2m(m - 1) + \\frac{49n(n - 1)}{2} \\right\\rbrack x^{2} + \\ldots\\)\n(b) \\(n = 2,m = 4\\)",
        steps: "(a) \\(2 - (2m + 7n)x + \\left\\lbrack 2m(m - 1) + \\frac{49n(n - 1)}{2} \\right\\rbrack x^{2} + \\ldots\\) (b) \\(n = 2,m = 4\\)."
      },
      {
        id: "m2-2a-ex13",
        question: "[Level 1] \\((a + 5x)(1 + 4x)^{n} = 11 + 313x + bx^{2} + \\ldots\\) Find \\(a,b\\) and \\(n\\).",
        answer: "\\(a = 11\\), \\(n = 7\\), \\(b = 3836\\)",
        steps: "\\(a = 11\\), \\(4(11)n + 5 = 313\\Rightarrow n = 7\\), \\(b = 8(11)(7)(6) + 20(7) = 3836\\)."
      },
      {
        id: "m2-2a-ex14",
        question: "[Level 2] [2025-DSE-M2-Q1] \\((1 + mx)(1 + 5x)^{n} = \\sum_{k = 0}^{n + 1}{a_{k}x^{k}}\\). If \\(a_{1} = 27\\) and \\(a_{2} = 285\\), find \\(m\\) and \\(n\\).",
        answer: "\\(n = 6,m = - 3\\)",
        steps: "\\(5n + m = 27\\) and \\(\\frac{25n(n - 1)}{2} + 5mn = 285\\Rightarrow n = 6,m = - 3\\)."
      },
      {
        id: "m2-2a-ex15",
        question: "[Level 2] [2526-WYK-S4-Midyear-M2-Q7] \\(m,n > 1\\), coefficient of \\(x\\) in \\((1 + 2x)^{m} + (1 + 3x)^{n}\\) is \\(13\\). Find coefficient of \\(x^{2}\\).",
        answer: "\\(31\\)",
        steps: "\\(2m + 3n = 13\\Rightarrow m = 2,n = 3\\Rightarrow \\) Coefficient of \\(x^{2} = 2(2)(1) + \\frac{9(3)(2)}{2} = 31\\)."
      },
      {
        id: "m2-2a-ex16",
        question: "[Level 2] [2425-WYK-S5-Final-M2-Q1] In \\((2 - 3x)^{n}\\), coefficient of \\(x^{2}\\) is \\(81\\) times the constant term. Find (a) \\(n\\), (b) coefficient of \\(x^{- 1}\\) in \\((2 - 3x)^{n}\\left( 1 + \\frac{2}{x} \\right)^{3}\\).",
        answer: "(a) \\(n = 9\\)\n(b) \\(251904\\)",
        steps: "(a) \\(9(2^{n - 3})n(n - 1) = 81(2^{n})\\Rightarrow n = 9\\). (b) \\(512(6) + ( - 6912)(12) + (41472)(8) = 251904\\)."
      },
      {
        id: "m2-2a-ex17",
        question: "[Level 2] \\(\\left( x^{3} + \\frac{b}{x} \\right)^{12} = \\sum_{k = 0}^{12}{\\mu_{k}x^{4k - 12}}\\). (a) If \\(\\mu_{10} + \\mu_{11} = 240\\), find \\(b\\). (b) Find \\(\\mu_{4}\\).",
        answer: "(a) \\(b = 2\\)\n(b) \\(\\mu_{4} = 126720\\)",
        steps: "(a) \\(66b^{2} + 12b - 240 = 0\\Rightarrow b = 2\\). (b) \\(\\mu_{4} = C_{4}^{12}(2)^{8} = 126720\\)."
      },
      {
        id: "m2-2a-ex18",
        question: "[Level 2] [2526-WYK-S6-FTA-M2-Q1] \\(4(2 + px)(1 + 3x)^{n} = \\sum_{r = 0}^{n + 1}{a_{r}x^{r}}\\). If \\(a_{0} + a_{1} = 132\\) and \\(2a_{1} + a_{2} = 968\\), find \\(p\\) and \\(n\\).",
        answer: "\\(n = 6,p = - 5\\)",
        steps: "\\(a_{0} = 8,a_{1} = 24n + 4p,a_{2} = 36n^{2} - 36n + 12np\\Rightarrow p = 31 - 6n\\Rightarrow 36n^{2} - 336n + 720 = 0\\Rightarrow n = 6,p = - 5\\)."
      },
      {
        id: "m2-2a-ex19",
        question: "[Level 2] [1990-CE-AMath-Q1] \\((1 + 2x - 3x^{2})^{n} = 1 + ax + bx^{2} + \\ldots\\) (a) Express \\(a,b\\) in terms of \\(n\\). (b) If \\(b = 63\\), find \\(n\\).",
        answer: "(a) \\(a = 2n,b = 2n^{2} - 5n\\)\n(b) \\(n = 7\\)",
        steps: "(a) \\((1 + 3x)^{n}(1 - x)^{n}\\Rightarrow a = 2n,b = 2n^{2} - 5n\\). (b) \\(2n^{2} - 5n = 63\\Rightarrow n = 7\\)."
      },
      {
        id: "m2-2a-ex20",
        question: "[Level 2] \\(T_{r}\\) is the coefficient of \\((r + 1)\\)th-term in \\(\\left( ax + \\frac{5}{x^{2}} \\right)^{15}\\) (\\(a < 0\\)). (a) Express \\(T_{r}\\). (b) \\(T_{4}:T_{6} = 25:33\\). Find \\(a\\) and coefficient of \\(x^{12}\\).",
        answer: "(a) \\(T_{r} = C_{r}^{15}a^{r}5^{15 - r}\\)\n(b) \\(a = - 3\\); coefficient of \\(x^{12}\\) \\(= 358722675\\)",
        steps: "(a) \\(T_{r} = C_{r}^{15}a^{r}5^{15 - r}\\). (b) \\(a^{2} = 9\\Rightarrow a = - 3\\). \\(3r - 30 = 12\\Rightarrow r = 14\\Rightarrow C_{14}^{15}( - 3)^{14}(5) = 358722675\\)."
      },
      {
        id: "m2-2a-ex21",
        question: "[Level 2] \\(T_{r}\\) is coefficient of \\(r\\)th-term of \\((x + 1)^{n}\\). If \\(T_{k}:T_{k + 1}:T_{k + 2} = 6:3:1\\), find \\(n\\) and \\(k\\).",
        answer: "\\(n = 11,k = 8\\)",
        steps: "\\(\\frac{C_{k - 1}^{n}}{C_{k}^{n}} = 2\\Rightarrow 2n - 3k = - 2\\) and \\(\\frac{C_{k}^{n}}{C_{k + 1}^{n}} = 3\\Rightarrow 3n - 4k = 1\\Rightarrow n = 11,k = 8\\)."
      },
      {
        id: "m2-2a-ex22",
        question: "[Level 3] (a) Prove coefficient of \\(x^{k}\\) in \\((3 + 2x - x^{2})(1 + x)^{34}\\) is \\(3C_{k}^{35} - C_{k - 1}^{35}\\). (b) If this coefficient is \\(0\\), find \\(k\\).",
        answer: "(a) Proved.\n(b) \\(k = 27\\)",
        steps: "(a) \\((3 - x)(1 + x)^{35}\\Rightarrow 3C_{k}^{35} - C_{k - 1}^{35}\\). (b) \\(3 = \\frac{k}{35 - k + 1}\\Rightarrow k = 27\\)."
      },
      {
        id: "m2-2a-ex23",
        question: "[Level 3] Find the coefficient of \\(x^{20}\\) in the expansion of \\((1 + 2x - x^{2})^{12}\\).",
        answer: "\\(5346\\)",
        steps: "\\(\\sum_{r = 0}^{12}{C_{r}^{12}(1 + 2x)^{r}( - x^{2})^{12 - r}}\\) (\\(r \\leq 4\\)): \\(495(2^{4}) - 220(3)(2^{2}) + 66 = 5346\\)."
      },
      {
        id: "m2-2a-ex24",
        question: "[Level 3] [2324-WYK-S4-Midyear-M2-Q5] (a) Prove by M.I. that \\(1 - r^{3} + r^{6} - \\ldots + ( - 1)^{n - 1}r^{3n - 3} = \\frac{1 - ( - 1)^{n}r^{3n}}{1 + r^{3}}\\). (b) Find coefficient of \\(x^{3}\\) in \\(1 - (3x - 1) + (3x - 1)^{2} - \\ldots + (3x - 1)^{6}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(- 945\\)",
        steps: "(a) Standard geometric M.I. proof. (b) Let \\(r = (3x - 1)^{1/3}\\) (\\(n = 7\\)): \\(\\frac{1 + (3x - 1)^{7}}{3x}\\Rightarrow \\) coefficient of \\(x^{3}\\) is \\(C_{3}^{7}( - 1)^{7}3^{3} =\\) \\(- 945\\)."
      },
      {
        id: "m2-2a-ex25",
        question: "[Level 3] [WYK-2324-S4-Midyear-M2-Q6] \\(T_{r}\\) is coefficient of \\(r\\)th term of \\(\\left( \\frac{1}{3x^{2}} + 6x \\right)^{n}\\) in descending powers. Given \\(T_{5} = 9T_{6} + 243T_{7}\\). (a) Find \\(n\\). (b) Find coefficient of \\(x^{12}\\) in \\(\\left( \\frac{1}{3x^{2}} + 6x \\right)^{n}(9x^{2} - 6x + 1)^{3}\\).",
        answer: "(a) \\(n = 9\\)\n(b) \\(- 1768635648\\)",
        steps: "(a) \\(243n^{2} - 1215n - 8748 = 0\\Rightarrow n = 9\\). (b) \\((6x + \\frac{1}{3x^{2}})^{9}(3x - 1)^{6}\\Rightarrow 6^{9}( - 540) + 9(6)^{8}(\\frac{1}{3})(729) = - 1768635648\\)."
      },
      {
        id: "m2-2a-ex26",
        question: "[Level 3] In \\(\\left( \\frac{x^{2}}{2} + \\frac{2}{x} \\right)^{n}\\), sum of coefficients of \\(5^{th}\\) and \\(6^{th}\\) terms is \\(48\\) times coefficient of \\(7^{th}\\) term. (a) Find \\(n\\). (b) Find coefficient of \\(x^{- 5}\\) in \\(\\left( \\frac{x^{2}}{2} + \\frac{2}{x} \\right)^{n}(12x - 4x^{2} - 9)^{4}\\).",
        answer: "(a) \\(n = 8\\)\n(b) \\(- 24509952\\)",
        steps: "(a) \\(2n^{2} - 19n + 24 = 0\\Rightarrow n = 8\\). (b) \\(\\frac{(x^{3} + 4)^{8}(2x - 3)^{8}}{256x^{8}}\\Rightarrow \\frac{1}{256}(C_{1}^{8}4^{7}( - 3)^{8} + 4^{8}C_{3}^{8}2^{3}( - 3)^{5}) = - 24509952\\)."
      },
      {
        id: "m2-2a-ex27",
        question: "[Level 3] \\((1 + px)^{n} = \\sum_{r = 0}^{n}{a_{r}x^{r}}\\). (a) Show \\(\\frac{a_{r}}{a_{r - 1}} \\geq 1\\) if \\(1 \\leq r \\leq \\frac{(n + 1)p}{p + 1}\\). (b) If \\(a_{k}\\) is the greatest coefficient in \\((3 + 5x)^{18}\\), find \\(k\\).",
        answer: "(a) Shown.\n(b) \\(k = 11\\)",
        steps: "(a) \\(\\frac{C_{r}^{n}p^{r}}{C_{r - 1}^{n}p^{r - 1}} = \\frac{p(n - r + 1)}{r} \\geq 1\\). (b) \\(p = \\frac{5}{3},n = 18\\Rightarrow \\frac{19(5/3)}{8/3} = 11.875\\Rightarrow k = 11\\)."
      },
      {
        id: "m2-2a-ex28",
        question: "[Level 3] (a) Prove \\(C_{r}^{n} + C_{r + 1}^{n} = C_{r + 1}^{n + 1}\\). (b) Prove by M.I. that \\(\\sum_{k = 0}^{n}C_{k}^{n} = 2^{n}\\).",
        answer: "(a) Proved.\n(b) Proved by mathematical induction.",
        steps: "(a) Pascal's identity proof via factorials. (b) Base case \\(n = 1\\): \\(2\\). Inductive step splits and pairs using (a) to get \\(2\\sum_{k = 0}^{m}C_{k}^{m} = 2^{m + 1}\\)."
      },
      {
        id: "m2-2a-ex29",
        question: "[Level 3] (a) By considering \\(2^{n} = (1 + 1)^{n}\\), show \\(\\sum_{k = 0}^{n}C_{k}^{n} = 2^{n}\\). (b) By \\((1 + ( - 1))^{n} = 0\\), show \\(\\sum_{k = 0}^{n}{( - 1)^{k}C_{k}^{n}} = 0\\). (c) By \\((1 + x)^{n}(1 + x)^{n} = (1 + x)^{2n}\\), show \\(\\sum_{k = 0}^{n}{(C_{k}^{n})^{2}} = C_{n}^{2n}\\).",
        answer: "(a) Shown.\n(b) Shown.\n(c) Shown.",
        steps: "Compare expansions and equate coefficients of \\(x^{n}\\) in (c) using \\(C_{r}^{n} = C_{n - r}^{n}\\)."
      },
      {
        id: "m2-2a-ex30",
        question: "[Level 3] (a) Show \\(\\sum_{r = 0}^{n}{(C_{r}^{n})^{2}} = C_{n}^{2n}\\). (b) By \\((1 - x^{2})^{2n}\\), show \\(\\sum_{r = 0}^{2n}{( - 1)^{r}(C_{r}^{2n})^{2}} = ( - 1)^{n}C_{n}^{2n}\\). (c) Prove \\((C_{1}^{2n})^{2} + (C_{3}^{2n})^{2} + \\ldots + (C_{2n - 1}^{2n})^{2} = \\frac{1}{2}(C_{2n}^{4n} + ( - 1)^{n - 1}C_{n}^{2n})\\).",
        answer: "(a) Shown.\n(b) Shown.\n(c) Proved.",
        steps: "Subtract equation (2) from equation (1) and divide by \\(2\\)."
      },
      {
        id: "m2-2a-ex31",
        question: "[Level 2] [2526-WYK-S6-Mock-M2-Q2] \\(\\left( x + \\frac{p}{x} \\right)^{n}(1 + 2x^{2})\\) has constant term \\(0\\). (a) Lincoln claims \\(n\\) must be odd. Do you agree? (b) If \\(a_{1} = 73\\) and \\(a_{2} = - 8p^{2} + 44p + 1140\\), find \\(p\\) and \\(n\\).",
        answer: "(a) Agree: \\(n\\) must be odd.\n(b) \\(p = 4,n = 9\\)",
        steps: "(a) \\(n - 2r + 2 \\neq 0\\Rightarrow n\\) must be odd (agree). (b) \\(np = 36\\) and \\(n(n - 1)p^{2} + np = - 8p^{2} + 44p + 1140\\Rightarrow p = 4,n = 9\\)."
      },
      {
        id: "m2-2a-ex32",
        question: "[Level 2] [2526-WYK-S5-Final-M2-Q2] (a) Show that if \\(\\frac{1}{x^{n}}(x^{3} - 1)^{n}\\) has a constant term, \\(n\\) is a multiple of \\(3\\). (b) Find the constant term in \\(\\frac{1}{x^{9}}(x^{5} - 1)^{7}(x^{3} - 1)^{9}\\).",
        answer: "(a) Shown.\n(b) \\(- 84\\)",
        steps: "(a) \\(2n - 3r = 0\\Rightarrow 3 \\mid n\\). (b) \\(r = 6\\Rightarrow C_{6}^{9}( - 1)^{6}( - 1) = - 84\\)."
      },
      {
        id: "m2-2a-ex33",
        question: "[Level 2] [2026-DSE-M2-Q6] (a) Prove \\(\\left( x + \\frac{1}{x^{2}} \\right)^{n} + 2\\left( x^{2} - \\frac{1}{x} \\right)^{n} = \\frac{(x^{3} + 1)^{2}(x^{6} - 1)^{n}}{x^{3n + 4}}\\). (b) Find least positive integer \\(r\\) such that coefficient of \\(x^{r}\\) in \\(\\left( x + \\frac{1}{x^{2}} \\right)^{10}\\left( x^{2} - \\frac{1}{x} \\right)^{8}\\) is non-zero, and find it. (c) Can there be a non-zero constant term for some \\(n\\)?",
        answer: "(a) Proved.\n(b) \\(r = 2\\), and the coefficient is \\(14\\)\n(c) No: there is no non-zero constant term for any \\(n\\).",
        steps: "(a) Combine over \\(x^{3n + 4}\\). (b) Numerator powers are multiples of \\(3\\), denominator is \\(x^{28}\\Rightarrow r = 2\\), coeff \\(= C_{5}^{8}( - 1)^{3} + C_{4}^{8}( - 1)^{4} = 14\\). (c) \\(3m - (3n + 4) = 0\\) has no integer solution; disagreed."
      },
      {
        id: "m2-2a-ex34",
        question: "[Level 3] \\(\\left( x + \\frac{a}{x} \\right)^{n}\\) has no constant term. (a) Explain why \\(n\\) is odd. (b) Coefficient of \\(x\\) is twice coefficient of \\(\\frac{1}{x}\\) and coefficient of \\(x^{3}\\) is \\(\\frac{6}{5}\\) times coefficient of \\(x\\). Find \\(a\\) and \\(n\\).",
        answer: "(a) \\(n\\) is odd.\n(b) \\(a = \\frac{1}{2},n = 7\\)",
        steps: "(a) \\(n - 2k \\neq 0\\Rightarrow n\\) is odd. (b) \\(a = \\frac{1}{2}\\), \\(\\frac{n - 1}{n + 3} = \\frac{3}{5}\\Rightarrow n = 7\\)."
      }
    ],

    // ---- M2 Chapter 3: More about Trigonometric Functions ----
    more_about_trigonometric_functions: [
      {
        id: "m2-3a-ex1",
        question: "[Level 1] Given \\(\\tan\\theta + \\sec\\theta = \\frac{2}{5}\\). By considering \\(\\tan\\theta - \\sec\\theta\\), find \\(\\tan\\theta\\) and \\(\\csc\\theta\\).",
        answer: "\\(\\tan\\theta = - \\frac{21}{20}\\), \\(\\csc\\theta = - \\frac{29}{21}\\)",
        steps: "\\(\\tan\\theta - \\sec\\theta = - \\frac{5}{2}\\Rightarrow \\tan\\theta = - \\frac{21}{20},\\sec\\theta = \\frac{29}{20}\\Rightarrow \\csc\\theta = - \\frac{29}{21}\\)."
      },
      {
        id: "m2-3a-ex2",
        question: "[Level 2] Given \\(\\sin x\\cos x = \\frac{1}{8}\\), where \\(\\sin x > \\cos x > 0\\). Find (a) \\(\\sin x + \\cos x\\), (b) \\(\\sin x - \\cos x\\), (c) \\(\\sec x + \\tan x\\).",
        answer: "(a) \\(\\frac{\\sqrt{5}}{2}\\)\n(b) \\(\\frac{\\sqrt{3}}{2}\\)\n(c) \\((2 + \\sqrt{3})(2 + \\sqrt{5})\\)",
        steps: "(a) \\(\\frac{\\sqrt{5}}{2}\\). (b) \\(\\frac{\\sqrt{3}}{2}\\). (c) \\(\\frac{1 + \\sin x}{\\cos x} = \\frac{4 + \\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}} = (2 + \\sqrt{3})(2 + \\sqrt{5})\\)."
      },
      {
        id: "m2-3a-ex3",
        question: "[Level 2] Prove (a) \\((2\\sin x + \\sec x)(2\\cos x + \\csc x) = \\frac{(2\\sin x\\cos x + 1)^{2}}{\\sin x\\cos x}\\), (b) \\(\\frac{1 + \\sin x + \\cos x}{1 + \\sin x - \\cos x} = \\frac{1 + \\cos x + \\cot x + \\csc x}{1 + \\sin x}\\), (c) \\(\\frac{\\sec x + \\tan x}{\\sec x - \\tan x} = 2\\tan^{2}x + 2\\sec x\\tan x + 1\\).",
        answer: "(a) Proved.\n(b) Proved.\n(c) Proved.",
        steps: "Standard trigonometric identity proofs using \\(\\sin^{2}x + \\cos^{2}x = 1\\) and \\(\\sec^{2}x - \\tan^{2}x = 1\\)."
      },
      {
        id: "m2-3a-ex4",
        question: "[Level 2] Solve for \\(0 \\leq \\theta \\leq 2\\pi\\): (a) \\(4\\csc 2\\theta - 2\\sin 2\\theta = 3\\sqrt{2}\\), (b) \\(\\sec^{2}\\theta\\csc\\theta - \\frac{\\sin\\theta}{\\cos^{2}\\theta} - 2\\sin\\theta + \\csc\\theta = - 3\\).",
        answer: "(a) \\(\\theta = \\frac{\\pi}{8},\\frac{3\\pi}{8},\\frac{9\\pi}{8},\\frac{11\\pi}{8}\\)\n(b) \\(\\theta = \\frac{7\\pi}{6},\\frac{11\\pi}{6}\\)",
        steps: "(a) \\(2\\sin^{2}2\\theta + 3\\sqrt{2}\\sin 2\\theta - 4 = 0\\Rightarrow \\sin 2\\theta = \\frac{\\sqrt{2}}{2}\\Rightarrow \\theta = \\frac{\\pi}{8},\\frac{3\\pi}{8},\\frac{9\\pi}{8},\\frac{11\\pi}{8}\\). (b) \\(2\\sin^{2}\\theta - 3\\sin\\theta - 2 = 0\\Rightarrow \\sin\\theta = - \\frac{1}{2}\\Rightarrow \\theta = \\frac{7\\pi}{6},\\frac{11\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex5",
        question: "[Level 1] (a) Prove \\(\\sin x + \\cos x = \\sqrt{2}\\sin\\left( x + \\frac{\\pi}{4} \\right)\\). (b) Solve \\(\\sqrt{2}\\csc x + \\cot x = - 1\\) for \\(0 \\leq x \\leq 2\\pi\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{5\\pi}{4}\\)",
        steps: "(a) Expand R.H.S. (b) \\(\\sin\\left( x + \\frac{\\pi}{4} \\right) = - 1\\Rightarrow x = \\frac{5\\pi}{4}\\)."
      },
      {
        id: "m2-3a-ex6",
        question: "[Level 2] (a) If \\(\\tan A - 3\\cot B = 0\\), prove \\(\\cos(A - B) + 2\\cos(A + B) = 0\\). (b) Solve \\(\\tan\\left( x + \\frac{\\pi}{5} \\right) = 3\\cot\\left( \\frac{2\\pi}{15} - x \\right)\\) for \\(0 \\leq x \\leq 2\\pi\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{7\\pi}{15}\\) or \\(\\frac{22\\pi}{15}\\)",
        steps: "(a) \\(\\sin A\\sin B = 3\\cos A\\cos B\\). (b) \\(\\cos\\left( 2x + \\frac{\\pi}{15} \\right) = - 1\\Rightarrow x = \\frac{7\\pi}{15}\\) or \\(\\frac{22\\pi}{15}\\)."
      },
      {
        id: "m2-3a-ex7",
        question: "[Level 2] Solve for \\(0 \\leq \\theta \\leq \\pi\\): (a) \\(\\frac{\\cos 3\\theta}{\\sec\\theta} + \\frac{\\sin 3\\theta}{\\csc\\theta} = \\frac{\\sqrt{3}}{2}\\), (b) \\(\\sqrt{3}(\\tan\\theta + \\tan 3\\theta) + \\tan\\theta\\tan 3\\theta = 1\\), (c) \\(\\sec\\left( \\frac{\\pi}{4} + \\theta \\right) + \\csc\\left( \\frac{3\\pi}{4} - \\theta \\right) = 4\\sqrt{2}\\cos\\theta\\), (d) \\(\\sin\\left( \\frac{\\pi}{5} + \\theta \\right)\\cos\\left( \\frac{\\pi}{4} - 2\\theta \\right) + \\cos\\left( \\frac{\\pi}{5} + \\theta \\right)\\sin\\left( \\frac{\\pi}{4} - 2\\theta \\right) = \\cos\\left( \\frac{\\pi}{10} - 2\\theta \\right)\\).",
        answer: "(a) \\(\\theta = \\frac{\\pi}{12},\\frac{11\\pi}{12}\\)\n(b) \\(\\theta = \\frac{\\pi}{24},\\frac{7\\pi}{24},\\frac{13\\pi}{24},\\frac{19\\pi}{24}\\)\n(c) \\(\\theta = \\frac{\\pi}{2},\\frac{\\pi}{6},\\frac{5\\pi}{6}\\)\n(d) \\(\\theta = \\frac{\\pi}{60},\\frac{3\\pi}{20},\\frac{41\\pi}{60}\\)",
        steps: "(a) \\(\\cos 2\\theta = \\frac{\\sqrt{3}}{2}\\Rightarrow \\theta = \\frac{\\pi}{12},\\frac{11\\pi}{12}\\). (b) \\(\\tan 4\\theta = \\frac{1}{\\sqrt{3}}\\Rightarrow \\theta =\\) \\(\\frac{\\pi}{24},\\frac{7\\pi}{24},\\frac{13\\pi}{24},\\frac{19\\pi}{24}\\). (c) \\(\\theta = \\frac{\\pi}{2},\\frac{\\pi}{6},\\frac{5\\pi}{6}\\). (d) \\(\\sin\\left( \\frac{9\\pi}{20} - \\theta \\right) = \\sin\\left( \\frac{2\\pi}{5} + 2\\theta \\right)\\Rightarrow \\theta = \\frac{\\pi}{60},\\frac{3\\pi}{20},\\frac{41\\pi}{60}\\)."
      },
      {
        id: "m2-3a-ex8",
        question: "[Level 2] Prove (a) \\(\\cos^{2}B + \\cos^{2}(A + B) - 2\\cos A\\cos B\\cos(A + B) = \\sin^{2}A\\), (b) \\(\\frac{\\cos A - \\cos B\\cos(A - B)}{\\sin A - \\cos B\\sin(A - B)} = \\tan(B - A)\\), (c) \\(\\sin 4A\\sin 2A(1 - \\cos 2A) + \\cos 4A\\cos 2A(1 + \\cos 2A) = \\cos 2A(1 + \\cos 6A)\\).",
        answer: "(a) Proved.\n(b) Proved.\n(c) Proved.",
        steps: "Compound-angle expansions and factoring."
      },
      {
        id: "m2-3a-ex9",
        question: "[Level 3] Let \\(\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{2}\\). (a) Prove \\(\\frac{\\tan\\theta + \\sec\\theta - 1}{\\tan\\theta - \\sec\\theta + 1} = \\tan\\theta + \\sec\\theta\\). (b) Find \\(h,k\\) (\\(0 < k < \\frac{\\pi}{2}\\)) such that \\(h\\sin(\\theta + k) \\equiv \\sin\\theta + \\sqrt{3}\\cos\\theta\\). (c) Solve \\(\\frac{\\tan\\theta + \\sec\\theta - 1}{\\tan\\theta - \\sec\\theta + 1} + \\sqrt{3} = 0\\).",
        answer: "(a) Proved.\n(b) \\(h = 2,k = \\frac{\\pi}{3}\\)\n(c) \\(\\theta = \\frac{5\\pi}{6}\\)",
        steps: "(a) Replace \\(1\\) with \\(\\sec^{2}\\theta - \\tan^{2}\\theta\\). (b) \\(h = 2,k = \\frac{\\pi}{3}\\). (c) \\(2\\sin\\left( \\theta + \\frac{\\pi}{3} \\right) = - 1\\Rightarrow \\theta = \\frac{5\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex10",
        question: "[Level 1] [2526-WYK-S4-Midyear-M2-Q4] Let \\(0 < \\theta < \\pi\\). (a) Prove \\(\\frac{\\tan\\theta}{1 - \\tan\\theta} + \\frac{\\cot\\theta}{1 + \\cot\\theta} = \\sec 2\\theta\\). (b) Solve \\(\\frac{\\tan\\theta}{1 - \\tan\\theta} + \\frac{\\cot\\theta}{1 + \\cot\\theta} = 2\\).",
        answer: "(a) Proved.\n(b) \\(\\theta = \\frac{\\pi}{3}\\) or \\(\\frac{5\\pi}{6}\\)",
        steps: "(a) \\(\\frac{\\tan^{2}\\theta + 1}{1 - \\tan^{2}\\theta} = \\frac{1}{\\cos 2\\theta} = \\sec 2\\theta\\). (b) \\(\\cos 2\\theta = \\frac{1}{2}\\Rightarrow \\theta = \\frac{\\pi}{3}\\) or \\(\\frac{5\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex11",
        question: "[Level 1] Prove (a) \\(\\tan 2x - 2\\tan 2x\\sin^{2}x = \\sin 2x\\), (b) \\(\\frac{(\\sin x + \\cos x)^{2}}{\\sec 2x + \\tan 2x} = \\cos 2x\\), (c) \\(\\frac{\\cos^{2}\\theta - \\cot\\theta}{\\cos^{2}\\theta + \\cot\\theta} = 1 - \\frac{4}{\\sin 2\\theta + 2}\\).",
        answer: "(a) Proved.\n(b) Proved.\n(c) Proved.",
        steps: "Double-angle identities."
      },
      {
        id: "m2-3a-ex12",
        question: "[Level 2] Solve for \\(0 \\leq \\theta \\leq 2\\pi\\): (a) \\(\\cos 3\\theta\\cos\\theta = - \\sin\\theta(\\sin 3\\theta + \\sin\\theta)\\), (b) \\(3\\tan 2\\theta - 6\\tan 2\\theta\\sin^{2}\\theta = 4\\sin\\theta\\cos\\theta\\), (c) \\(\\sec\\theta = 2\\sin\\theta(1 + \\tan\\theta)\\).",
        answer: "(a) \\(\\theta = \\frac{\\pi}{2},\\frac{3\\pi}{2}\\)\n(b) \\(\\theta = 0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2},2\\pi\\)\n(c) \\(\\theta = \\frac{\\pi}{8},\\frac{5\\pi}{8},\\frac{9\\pi}{8},\\frac{13\\pi}{8}\\)",
        steps: "(a) \\(\\sin\\theta = \\pm 1\\Rightarrow \\theta = \\frac{\\pi}{2},\\frac{3\\pi}{2}\\). (b) \\(\\sin 2\\theta = 0\\Rightarrow \\theta =\\) \\(0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2},2\\pi\\). (c) \\(\\tan 2\\theta = 1\\Rightarrow \\theta =\\) \\(\\frac{\\pi}{8},\\frac{5\\pi}{8},\\frac{9\\pi}{8},\\frac{13\\pi}{8}\\)."
      },
      {
        id: "m2-3a-ex13",
        question: "[Level 2] [2015-DSE-M2-Q7] (a) Prove \\(\\sin^{2}x\\cos^{2}x = \\frac{1 - \\cos 4x}{8}\\). (b) Let \\(f(x) = \\sin^{4}x + \\cos^{4}x\\). (i) Express \\(f(x)\\) as \\(A\\cos Bx + C\\). (ii) Solve \\(8f(x) = 7\\) for \\(0 \\leq x \\leq \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b)(i) \\(f(x) = \\frac{1}{4}\\cos 4x + \\frac{3}{4}\\)\n(b)(ii) \\(x = \\frac{\\pi}{12}\\) or \\(\\frac{5\\pi}{12}\\)",
        steps: "(a) \\(\\frac{\\sin^{2}2x}{4} = \\frac{1 - \\cos 4x}{8}\\). (b) (i) \\(\\frac{1}{4}\\cos 4x + \\frac{3}{4}\\). (ii) \\(\\cos 4x = \\frac{1}{2}\\Rightarrow x = \\frac{\\pi}{12}\\) or \\(\\frac{5\\pi}{12}\\)."
      },
      {
        id: "m2-3a-ex14",
        question: "[Level 2] [2024-DSE-M2-Q4] (a) Prove \\(\\csc 2x - \\cot 2x = \\tan x\\). (b) Solve \\((\\csc 3\\theta - \\cot 3\\theta)(\\csc\\theta - \\cot\\theta) = 1\\) for \\(\\frac{\\pi}{6} < \\theta < \\frac{\\pi}{3}\\).",
        answer: "(a) Proved.\n(b) \\(\\theta = \\frac{\\pi}{4}\\)",
        steps: "(a) \\(\\frac{1 - \\cos 2x}{\\sin 2x} = \\tan x\\). (b) \\(\\tan\\left( \\frac{3\\theta}{2} \\right)\\tan\\left( \\frac{\\theta}{2} \\right) = 1\\Rightarrow \\theta = \\frac{\\pi}{4}\\)."
      },
      {
        id: "m2-3a-ex15",
        question: "[Level 2] [WYK-2324-S4-Final-I-Q4] (a) Prove \\(\\sec 2x - \\tan 2x = \\tan\\left( \\frac{\\pi}{4} - x \\right)\\). (b) Solve \\(\\sec 2x + \\tan 2x = \\sqrt{3}\\) for \\(0 < x < \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{12}\\)",
        steps: "(a) \\(\\frac{1 - \\sin 2x}{\\cos 2x} = \\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = \\tan\\left( \\frac{\\pi}{4} - x \\right)\\). (b) \\(\\tan\\left( x + \\frac{\\pi}{4} \\right) = \\sqrt{3}\\Rightarrow x = \\frac{\\pi}{12}\\)."
      },
      {
        id: "m2-3a-ex16",
        question: "[Level 2] [2425-WYK-S5-Final-M2-Q3] (a) Prove \\(\\csc 2x + \\cot 2x = \\cot x\\). (b) Solve \\(\\tan 4x(\\csc 2x - \\cot 2x) = 1\\) for \\(0 < x < \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{10}\\) or \\(\\frac{3\\pi}{10}\\)",
        steps: "(a) \\(\\frac{1 + \\cos 2x}{\\sin 2x} = \\cot x\\). (b) \\(\\tan 4x = \\cot x\\Rightarrow x = \\frac{\\pi}{10}\\) or \\(\\frac{3\\pi}{10}\\)."
      },
      {
        id: "m2-3a-ex17",
        question: "[Level 2] [2526-WYK-S6-Mock-M2-Q4] (a) Prove \\(\\frac{\\tan^{2}x + \\cot^{2}x}{\\sec^{2}x + \\csc^{2}x} = \\frac{3}{4} + \\frac{1}{4}\\cos 4x\\). (b) Solve \\(\\frac{2}{\\sec^{2}x + \\csc^{2}x} - \\frac{5}{4}\\cos 4x = 1\\) for \\(0 < x < \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{6}\\) or \\(\\frac{\\pi}{3}\\)",
        steps: "(a) \\(\\sin^{4}x + \\cos^{4}x = 1 - \\frac{1}{2}\\sin^{2}2x = \\frac{3}{4} + \\frac{1}{4}\\cos 4x\\). (b) \\(\\cos 4x = - \\frac{1}{2}\\Rightarrow x = \\frac{\\pi}{6}\\) or \\(\\frac{\\pi}{3}\\)."
      },
      {
        id: "m2-3a-ex18",
        question: "[Level 2] Let \\(\\frac{\\pi}{8} < x < \\frac{\\pi}{4}\\). (a) Find \\(\\alpha,\\beta\\) such that \\(\\cot x - \\tan x = \\alpha\\cot\\beta x\\). (b) Solve \\(\\cot x + 8 = \\tan x + 2\\tan 2x + 4\\tan 4x\\).",
        answer: "(a) \\(\\alpha = 2,\\beta = 2\\)\n(b) \\(x = \\frac{7\\pi}{32}\\)",
        steps: "(a) \\(\\alpha = 2,\\beta = 2\\). (b) Telescopes to \\(8\\cot 8x = - 8\\Rightarrow \\tan 8x = - 1\\Rightarrow x = \\frac{7\\pi}{32}\\)."
      },
      {
        id: "m2-3a-ex19",
        question: "[Level 3] Let \\(- \\frac{\\pi}{4} < \\theta < \\frac{\\pi}{4}\\). (a) Prove \\(\\frac{\\sin\\theta}{1 + \\tan\\theta} - \\frac{\\cos\\theta}{1 - \\tan\\theta} = \\frac{\\cos\\theta}{1 - 2\\cos^{2}\\theta}\\). (b) Solve \\(\\frac{\\sin(\\pi + \\theta)}{1 + \\tan\\theta} - \\frac{\\cos(\\pi + \\theta)}{1 - \\tan\\theta} = 2\\cos\\theta\\).",
        answer: "(a) Proved.\n(b) \\(\\theta = \\frac{\\pi}{6}\\) or \\(- \\frac{\\pi}{6}\\)",
        steps: "(a) \\(\\frac{- \\cos\\theta}{\\cos^{2}\\theta - \\sin^{2}\\theta} = \\frac{\\cos\\theta}{1 - 2\\cos^{2}\\theta}\\). (b) \\(\\cos\\theta(3 - 4\\cos^{2}\\theta) = 0\\Rightarrow \\theta = \\frac{\\pi}{6}\\) or \\(- \\frac{\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex20",
        question: "[Level 3] (a) Prove \\(\\frac{1 + \\cos 2x - \\sin 2x}{1 - \\cos 2x - \\sin 2x} = - \\cot x\\). (b) Solve \\(\\frac{1 + \\cos 2x - \\sin 2x}{1 - \\cos 2x - \\sin 2x} + \\frac{1 - \\cos 2x - \\sin 2x}{1 + \\cos 2x - \\sin 2x} - \\frac{1 + \\cos 2x + \\sin 2x}{1 - \\cos 2x + \\sin 2x} = - \\frac{7\\sqrt{3}}{3}\\) for \\(0 \\leq x \\leq \\frac{\\pi}{4}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{6}\\)",
        steps: "(a) \\(\\frac{2\\cos x(\\cos x - \\sin x)}{2\\sin x(\\sin x - \\cos x)} = - \\cot x\\). (b) \\(- \\cot x - \\tan x - \\cot x = - \\frac{7\\sqrt{3}}{3}\\Rightarrow 6\\cot^{2}x - 7\\sqrt{3}\\cot x + 3 = 0\\Rightarrow \\cot x = \\sqrt{3}\\Rightarrow x = \\frac{\\pi}{6}\\)."
      }
    ]
  }
};
