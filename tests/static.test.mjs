import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

test('static HTML pages and their local linked assets exist', () => {
  for (const page of ['index.html', 'projects/root-access/index.html']) {
    const html = read(page);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<html lang="en">/);
    for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      const url = match[1];
      if (/^(?:https?:|mailto:|#)/.test(url)) continue;
      const pathname = url.split(/[?#]/)[0];
      const resolved = path.resolve(root, path.dirname(page), decodeURIComponent(pathname));
      assert.ok(resolved.startsWith(root + path.sep) || resolved === root, `Path escapes repo: ${url}`);
      assert.ok(fs.existsSync(resolved), `Broken local link in ${page}: ${url}`);
    }
  }
});

test('home has functional signal controls and terminal entry point', () => {
  const html = read('index.html');
  assert.match(html, /id="signal-button"/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /id="signal-output"[^>]*hidden/);
  assert.match(html, /href="projects\/root-access\/"/);
  assert.match(read('projects/root-access/index.html'), /WATCHED\./);
});

test('source JS parses under Node', () => {
  for (const file of ['site.js', 'projects/root-access/script.js']) {
    execFileSync(process.execPath, ['--check', path.join(root, file)]);
  }
});

test('design tokens have valid hex, dimensions and durations', () => {
  const data = JSON.parse(read('design/tokens.json'));
  for (const token of Object.values(data.color)) assert.match(token.$value, /^#[0-9a-fA-F]{6}$/);
  for (const group of ['space','radius']) for (const token of Object.values(data[group])) assert.match(token.$value, /^\d+px$/);
  for (const token of Object.values(data.motion)) assert.match(token.$value, /^\d+ms$/);
  for (const file of ['site.css', 'projects/root-access/styles.css']) {
    assert.match(read(file), /@import url\("(?:\.\.\/\.\.\/)?design\/tokens\.css"\)/);
  }
});
