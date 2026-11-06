import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Lightweight fake DOM: tests the actual shipped scripts, without npm packages.
class Element {
  constructor(dataset = {}) { this.dataset = dataset; this.children = []; this.listeners = {}; this.attrs = {}; this.value = ''; this.textContent = ''; this.hidden = true; this.scrollTop = 0; this.classList = { values: new Set(), add: v => this.classList.values.add(v), remove: v => this.classList.values.delete(v), contains: v => this.classList.values.has(v) }; }
  append(child) { this.children.push(child); }
  replaceChildren() { this.children = []; }
  addEventListener(type, handler) { this.listeners[type] = handler; }
  dispatch(type, event = {}) { this.listeners[type]?.({ preventDefault() {}, ...event }); }
  focus() { this.focused = true; }
  getAttribute(name) { return this.attrs[name] ?? null; }
  setAttribute(name,value) { this.attrs[name] = String(value); }
}
function boot(relativeFile, ids, commands = []) {
  const elements = Object.fromEntries(ids.map(id => [id, new Element()]));
  const buttons = commands.map(cmd => new Element({ cmd }));
  const clipboard = { latest: '', async writeText(text) { this.latest = text; } };
  const document = { body: new Element(), getElementById: id => elements[id], createElement: () => new Element(), querySelectorAll: selector => selector === '[data-cmd]' ? buttons : [] };
  const context = vm.createContext({ document, navigator: { clipboard }, setTimeout: () => 1, clearTimeout: () => {} });
  vm.runInContext(fs.readFileSync(path.join(root, relativeFile),'utf8'), context, { filename: relativeFile });
  return { elements, buttons, document, clipboard };
}
const output = dom => dom.elements['terminal-log'].children.map(child => child.textContent).join('\n');
function command(dom, text) {
  dom.elements['command-input'].value = text;
  dom.elements['command-form'].dispatch('submit');
}

test('ROOT ACCESS initial state, five commands and mode switching', () => {
  const dom = boot('projects/root-access/script.js', ['terminal-log','command-input','command-form','toast','copy-log']);
  assert.match(output(dom), /IDENTITY CONFIRMED/);
  command(dom, 'help'); assert.match(output(dom), /AVAILABLE COMMANDS \/ 5/);
  command(dom, 'whoami'); assert.match(output(dom), /IDENTITY: ADMINISTRATOR/);
  command(dom, 'mode shaw'); assert.equal(dom.document.body.dataset.mode, 'shaw');
  command(dom, 'whoami'); assert.match(output(dom), /ADMIN\. NEXT QUESTION\./);
  command(dom, 'mode root'); assert.equal(dom.document.body.dataset.mode, 'root');
  command(dom, 'mode unknown'); assert.match(output(dom), /UNKNOWN VOICE PROFILE/);
  command(dom, 'status'); assert.match(output(dom), /CURRENT INTERFACE: ROOT/);
});

test('4A Easter egg rejects invalid signal, unlocks only on exact argument', () => {
  const dom = boot('projects/root-access/script.js', ['terminal-log','command-input','command-form','toast','copy-log']);
  command(dom, 'connect 4b'); assert.match(output(dom), /SIGNAL NOT RECOGNIZED/);
  assert.equal(dom.document.body.classList.contains('secret-open'), false);
  command(dom, 'connect 4a'); assert.match(output(dom), /ASSET 4A: SIGNAL DETECTED/);
  assert.equal(dom.document.body.classList.contains('secret-open'), true);
  command(dom, 'status'); assert.match(output(dom), /SIGNAL 4A: CONNECTED/);
});

test('command history, unknown command, clear, and clipboard', async () => {
  const dom = boot('projects/root-access/script.js', ['terminal-log','command-input','command-form','toast','copy-log']);
  command(dom, 'help'); command(dom, 'whoami');
  dom.elements['command-input'].dispatch('keydown', { key: 'ArrowUp' });
  assert.equal(dom.elements['command-input'].value, 'whoami');
  dom.elements['command-input'].dispatch('keydown', { key: 'ArrowUp' });
  assert.equal(dom.elements['command-input'].value, 'help');
  dom.elements['command-input'].dispatch('keydown', { key: 'ArrowDown' });
  assert.equal(dom.elements['command-input'].value, 'whoami');
  dom.elements['command-input'].dispatch('keydown', { key: 'Escape' });
  assert.equal(dom.elements['command-input'].value, '');
  command(dom, '<b>'); assert.match(output(dom), /COMMAND NOT FOUND/);
  assert.ok(dom.elements['terminal-log'].children.every(node => typeof node.textContent === 'string'));
  dom.elements['copy-log'].dispatch('click');
  await Promise.resolve(); assert.match(dom.clipboard.latest, /COMMAND NOT FOUND/);
  command(dom, 'clear'); assert.equal(output(dom).trim(), '');
});

test('front door 4A control opens and closes, retaining ARIA state', () => {
  const dom = boot('site.js', ['signal-button', 'signal-output']);
  const button = dom.elements['signal-button'], panel = dom.elements['signal-output'];
  button.setAttribute('aria-expanded','false');
  button.dispatch('click'); assert.equal(button.getAttribute('aria-expanded'), 'true'); assert.equal(panel.hidden, false);
  button.dispatch('click'); assert.equal(button.getAttribute('aria-expanded'), 'false'); assert.equal(panel.hidden, true);
});
