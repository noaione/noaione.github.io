const shelljs = require("shelljs");
const fs = require("fs");
const path = require("path");
const minifer = require("html-minifier").minify;

const indexHtml = fs.readFileSync(path.join(__dirname, "..", "static", "index.html")).toString();
const minifiedRes = minifer(indexHtml.toString(), {
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    removeAttributeQuotes: false,
    removeComments: false,
    collapseWhitespace: true,
    caseSensitive: true,
});

console.info("Writing index file...");
fs.writeFileSync(path.join(__dirname, "..", "public", "index.html"), minifiedRes)

console.info("Copying assets folder contents...");
shelljs.cp("-R", path.join(__dirname, "..", "static", "assets"), path.join(__dirname, "..", "public", "assets"));
shelljs.cp("-R", path.join(__dirname, "..", "static", "keys"), path.join(__dirname, "..", "public", "keys"));
shelljs.cp("-R", path.join(__dirname, "..", "static", "w"), path.join(__dirname, "..", "public", "w"));
shelljs.cp("-f", path.join(__dirname, "..", "static", "global.css"), path.join(__dirname, "..", "public", "global.css"))
