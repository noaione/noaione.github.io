const childProc = require("child_process");
const fs = require("fs");
const path = require("path");

const CNAME_PATH = "n4o.xyz";

// remove the public folder
console.info("Removing public folder...");
try {
    fs.rmSync(path.join(__dirname, "..", "public"), { recursive: true });
} catch (e) {};  // ignore error

const startBuild = new Date();
childProc.spawnSync("npm", ["run", "build"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
});
const endBuild = new Date();
childProc.spawnSync("npm", ["run", "copy"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
});

console.info("Writing build time...");
const indexPATH = path.join(__dirname, "..", "public", "index.html");
const noJekyll = path.join(__dirname, "..", "public", ".nojekyll");
const CNAME = path.join(__dirname, "..", "public", "CNAME");

let indexHTML = fs.readFileSync(indexPATH).toString()
indexHTML = indexHTML.replace("{{buildTime}}", ((endBuild - startBuild) / 1000).toString());
// replace bundle.js with bundle.[random].js
const buildId = Math.floor(Date.now() / 1000).toString()
indexHTML = indexHTML.replace(/bundle.js/g, "bundle." + buildId + ".js");
// replace bundle.css with bundle.[random].css
indexHTML = indexHTML.replace(/bundle.css/g, "bundle." + buildId + ".css");
// replace global.css with global.[random].css
indexHTML = indexHTML.replace(/global.css/g, "global." + buildId + ".css");
// open bundle.js and set the sourcemapping to bundle.[random].js.map
let bundleFile = fs.readFileSync(path.join(__dirname, "..", "public", "bundle.js")).toString();
bundleFile = bundleFile.replace(/sourceMappingURL=bundle.js.map/g, "sourceMappingURL=bundle." + buildId + ".js.map");
fs.writeFileSync(path.join(__dirname, "..", "public", "bundle." + buildId + ".js"), bundleFile);
fs.unlinkSync(path.join(__dirname, "..", "public", "bundle.js"));
// rename bundle.css to bundle.[random].css
fs.renameSync(path.join(__dirname, "..", "public", "bundle.css"), path.join(__dirname, "..", "public", "bundle." + buildId + ".css"));

// open bundle map and set "file" key to the new bundle file
const bundleMap = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "public", "bundle.js.map")).toString());
bundleMap.file = "bundle." + buildId + ".js";
fs.writeFileSync(path.join(__dirname, "..", "public", "bundle." + buildId + ".js.map"), JSON.stringify(bundleMap));
fs.unlinkSync(path.join(__dirname, "..", "public", "bundle.js.map"));

// rename global.css to global.[random].css
fs.renameSync(path.join(__dirname, "..", "public", "global.css"), path.join(__dirname, "..", "public", "global." + buildId + ".css"));

fs.writeFileSync(indexPATH, indexHTML);
fs.writeFileSync(noJekyll, "");
fs.writeFileSync(CNAME, CNAME_PATH);
console.info("Build done!");
