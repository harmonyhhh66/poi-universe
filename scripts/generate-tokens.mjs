import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'design/tokens.json'), 'utf8'));
const mappings = [['color', ''], ['space', 'space-'], ['radius', 'radius-'], ['motion', 'motion-']];
const declarations = mappings.flatMap(([group, prefix]) =>
  Object.entries(tokens[group]).map(([key, token]) => `  --${prefix}${key}: ${token.$value};`));
const css = `/* AUTO-GENERATED from design/tokens.json. Run npm run tokens:build. */\n:root {\n${declarations.join('\n')}\n}\n`;
const dest = path.join(root, 'design/tokens.css');
if (process.argv.includes('--check')) {
  if (!fs.existsSync(dest) || fs.readFileSync(dest, 'utf8') !== css) {
    console.error('design/tokens.css is stale. Run npm run tokens:build');
    process.exitCode = 1;
  } else console.log('Tokens match design/tokens.json');
} else {
  fs.writeFileSync(dest, css);
  console.log('Generated design/tokens.css');
}
