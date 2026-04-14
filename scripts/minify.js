#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'src');
const minDir = path.join(root, 'min');

fs.mkdirSync(minDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  if (!file.endsWith('.json')) continue;
  const data = JSON.parse(fs.readFileSync(path.join(srcDir, file), 'utf8'));
  fs.writeFileSync(path.join(minDir, file), JSON.stringify(data));
  console.log(`minified ${file}`);
}
