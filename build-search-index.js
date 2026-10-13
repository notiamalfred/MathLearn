/* build-search-index.js — run with: node build-search-index.js */
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const PAGES = [
  { file: "index.html",                label: "Home" },
  { file: "solving-equations.html",    label: "Solving Equations" },
  { file: "completing-square.html",    label: "Completing Square" },
  { file: "discriminant.html",         label: "Discriminant" },
  { file: "roots.html",                label: "Sum & Product of Roots" },
  { file: "complex-numbers.html",      label: "Complex Numbers" },
  { file: "quadratic-functions.html",  label: "Quadratic Functions" },
  { file: "graph-sketching.html",      label: "Graph Sketching" },
  { file: "functions.html",            label: "Functions & Applications" },
  { file: "coordinate-geometry.html",  label: "Coordinate Geometry" },
  { file: "triangle-centers.html",     label: "Triangle Centers" },
  { file: "glossary.html",             label: "Glossary" },
  { file: "binomial-theorem.html",   label: "Binomial Theorem" },
  { file: "mathematical-induction.html", label: "Mathematical Induction" }
];

const index = [];

for (const page of PAGES) {
  const filePath = path.join(__dirname, page.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`  skip (missing): ${page.file}`);
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  const $ = cheerio.load(html);

  $("script, style, noscript, template, .site-header, .site-footer").remove();

  const seen = new Set();

  $("h1, h2, h3, h4, h5, h6, p, li").each((_, el) => {
    const tag = el.tagName.toLowerCase();
    const text = $(el).text().replace(/\s+/g, " ").trim();

    if (text.length < 2) return;
    if (seen.has(text)) return;
    seen.add(text);

    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 80);

    index.push({
      page: page.file,
      label: page.label,
      tag,
      text,
      slug
    });
  });

  console.log(`  indexed ${page.file} (${index.length} entries so far)`);
}

fs.writeFileSync(
  path.join(__dirname, "search-index.json"),
  JSON.stringify(index, null, 0)
);

console.log(`\nWrote search-index.json — ${index.length} entries.`);
