/* MathJax settings, kept in a file (not inline) so the page's Content-Security-Policy can stay strict.
   Same delimiters as the other MathLearn pages: \( ... \) inline and \[ ... \] display. */
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    tags: "none",
  },
  svg: { fontCache: "global" },
};
