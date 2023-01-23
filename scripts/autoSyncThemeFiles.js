const fs = require("fs");
const path = require("path");
const tailwindConfig = require("../ccs-next/tailwind.config");
const ts = require("typescript");

const THEME_TS_FILE_LOCATION = path.resolve(__dirname, "..", "ccs-next", "util", "theme.ts");
const THEME_KEYS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
const SWATCH = "Swatch";

const SWATCH_INTERFACE = `interface Swatch {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}`;

const validHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const constructSwatchString = (name, palette) => `
/**
 * **NOTE**: If *at all* possible, use tailwind classes over this!
 */
export const ${ name }: Swatch = {\n${palette}\n};`;

/**
 * Takes in a swatch and returns a string to be inserted into the theme.ts file that represents that swatch
 * 
 * @param {Object} swatch 
 * @param {string} name
 * @returns {string} 
 */
function constructTsSwatch(swatch, name) {
  // do some validation first
  const entries = Object.entries(swatch);
  if (!THEME_KEYS.every(key => entries.find(([k]) => key === k))) {
    console.error("invalid swatch:", swatch);
    return false;
  } else if (!entries.every(([_, color]) => validHex.test(color))) {
    console.error(
      "invalid hex color:",
      entries
        .map(([key, color]) => ([key, `${color} -> ${validHex.test(color)}`]))
        .reduce((obj, [key, color]) => ({ ...obj, [key]: color }), {})
    );
    return false;
  }

  const paletteString = entries.map(([key, color]) => `  ${parseInt(key, 10)}: "${color}",`).join("\n");

  return constructSwatchString(name, paletteString);
}

function rebuildThemeTsFile() {
  if (tailwindConfig && typeof tailwindConfig === "object") {
    const { theme } = tailwindConfig;
    if (theme && typeof theme === "object") {
      const tsSwatchConsts = [];
      const twColors = theme.colors;
      for (const color in twColors) {
        const swatch = twColors[color];
        const tsSwatchConst = constructTsSwatch(swatch, color);
        if(tsSwatchConst) {
          tsSwatchConsts.push(tsSwatchConst);
        }
      }

      const themeFileContents = `${SWATCH_INTERFACE}\n${tsSwatchConsts.join("\n")}\n`;
      fs.writeFileSync(THEME_TS_FILE_LOCATION, themeFileContents, "utf-8");

      return true;
    }
  }

  return false;
}

/**
 * This isn't currently in use. Take a look though and see how it works
 */
function parseThemeTsFile() {
  // read and parse theme.ts
  const themeTsFile = fs.readFileSync(THEME_TS_FILE_LOCATION, "utf-8");
  const themeNode = ts.createSourceFile("theme.ts", themeTsFile, ts.ScriptTarget.Latest);
  const existingColors = [];
  let swatchInterfaceDefined = false;

  themeNode.forEachChild(child => {
    // get node type (note: this doesnt mean typescript type)
    const kind = ts.SyntaxKind[child.kind];

    // if the node is declaring an interface we check and see if it is the Swatch interface and verify that this looks right
    if (kind === "InterfaceDeclaration" && child && child.name && child.name.escapedText === SWATCH) {
      if (Array.isArray(child.members) && child.members.length === THEME_KEYS.length) {
        const interfaceKeyNames = child.members.map(member => member.name.text);
        const interfaceTypes = child.members.map(member => member.type.kind);
        console.log(child);
        if (THEME_KEYS.every(themeKey => interfaceKeyNames.includes(themeKey)) && interfaceTypes.every(type => type === ts.SyntaxKind.StringKeyword)) {
          swatchInterfaceDefined = true;
        }
      }
    } else if (kind === "FirstStatement") {
      child.declarationList.declarations.filter(declaration => declaration.type.typeName.escapedText === SWATCH).forEach(declaration => {
        const { pos, end } = declaration;
        existingColors.push({
          name: declaration.name.escapedText,
          pos,
          end
        });
      });
    }
  });

  if (!swatchInterfaceDefined) {
    // for now, bail out. We can probably reconstruct this in a future iteration but just fail gracefully
    console.error("Swatch interface is not defined. Exiting script.");
    return false;
  }

  return true;
}

function main() {
  rebuildThemeTsFile();
}

main();
