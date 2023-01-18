const crypto = require("crypto");
const { execSync } = require("child_process");

const salt = crypto.randomBytes(16).toString("base64");
console.info(salt);

try {
  execSync("pbcopy " + salt, { stdio: 'ignore' });
  console.log("Copied to clipboard!");
} catch {};
