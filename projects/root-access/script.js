/* ROOT ACCESS // MISSION 001
 * Static fictional terminal. No external requests, surveillance, or command execution.
 * All user-submitted text is rendered with textContent, never innerHTML.
 */
(() => {
  'use strict';
  const log = document.getElementById('terminal-log');
  const input = document.getElementById('command-input');
  const form = document.getElementById('command-form');
  const toast = document.getElementById('toast');
  const history = [];
  let historyIndex = 0;
  let mode = 'machine';
  let secret = false;
  let toastTimer;
  let transcript = [];

  const voices = {
    machine: {
      whoami: ['IDENTITY: ADMINISTRATOR', 'ACCESS: LOCAL / SIMULATED', 'CLASSIFICATION: RELEVANT'],
      status: ['THE MACHINE: ONLINE', 'NETWORK: NOT CONNECTED', 'SURVEILLANCE: DISABLED', 'CURRENT INTERFACE: MACHINE'],
      welcome: 'IDENTITY CONFIRMED. YOU ARE NOT ALONE.'
    },
    root: {
      whoami: ['Oh, sweetie. You already know who you are.', 'IDENTITY: ADMINISTRATOR', 'CHANNEL: ANALOG'],
      status: ['Everything looks good from here.', 'NETWORK: OFFLINE. JUST US.', 'SURVEILLANCE: DISABLED', 'CURRENT INTERFACE: ROOT'],
      welcome: 'There you are, sweetie.'
    },
    shaw: {
      whoami: ['ADMIN. NEXT QUESTION.'],
      status: ['SYSTEM: FINE.', 'NETWORK: OFFLINE.', 'SURVEILLANCE: OFF.', 'CURRENT INTERFACE: SHAW'],
      welcome: 'You again. Make it quick.'
    }
  };

  function write(value, kind = 'system') {
    const line = document.createElement('div');
    line.className = `line ${kind}`;
    line.textContent = value;
    log.append(line);
    transcript.push(value);
    log.scrollTop = log.scrollHeight;
  }
  function lines(items, kind = 'system') { items.forEach(x => write(x, kind)); }
  function announce(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
  }
  function changeMode(value) {
    mode = value;
    document.body.dataset.mode = value;
    write(`VOICE PROFILE: ${value.toUpperCase()}`, 'accent');
    write(voices[value].welcome, 'system');
  }
  const commands = {
    help() {
      lines(['AVAILABLE COMMANDS / 5', '  help          Show available commands', '  whoami        Identify current asset', '  status        Inspect fictional system state', '  mode [name]   machine / root / shaw', '  clear         Clear terminal history', '', 'HINT: Some connections are not listed here.'], 'muted');
    },
    whoami() { lines(voices[mode].whoami); },
    status() { lines(voices[mode].status); write(`SIGNAL 4A: ${secret ? 'CONNECTED' : 'NOT FOUND'}`, secret ? 'accent' : 'muted'); },
    mode(args) {
      const newMode = args[0];
      if (!newMode) return write('USAGE: mode machine | root | shaw', 'muted');
      if (!Object.hasOwn(voices, newMode)) return write(`UNKNOWN VOICE PROFILE: ${newMode}`, 'error');
      changeMode(newMode);
    },
    clear() { log.replaceChildren(); transcript = []; },
    // An intentionally undocumented Easter egg. No real connection is opened.
    connect(args) {
      if (args[0] !== '4a' || args.length !== 1) return write('SIGNAL NOT RECOGNIZED.', 'error');
      secret = true;
      document.body.classList.add('secret-open');
      lines(['ENCRYPTED CHANNEL FOUND.', 'ASSET 4A: SIGNAL DETECTED.', 'R —————————————— S', 'SOME CONNECTIONS WERE NEVER TRULY LOST.'], 'accent');
      write('TRANSMISSION COMPLETE. NOTHING WAS SENT.', 'muted');
    }
  };

  function execute(raw) {
    const typed = raw.trim();
    if (!typed) return;
    write(`admin@machine:~$ ${typed}`, 'user');
    history.push(typed);
    historyIndex = history.length;
    const [cmd, ...args] = typed.toLowerCase().split(/\s+/);
    if (Object.hasOwn(commands, cmd)) commands[cmd](args);
    else write(`COMMAND NOT FOUND: ${cmd}. TYPE help.`, 'error');
    write('', 'muted');
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    execute(input.value);
    input.value = '';
    input.focus();
  });
  input.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (historyIndex > 0) input.value = history[--historyIndex];
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex < history.length - 1) input.value = history[++historyIndex];
      else { historyIndex = history.length; input.value = ''; }
    } else if (event.key === 'Escape') input.value = '';
  });
  document.querySelectorAll('[data-cmd]').forEach(button => {
    button.addEventListener('click', () => {execute(button.dataset.cmd); input.focus();});
  });
  document.getElementById('copy-log').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(transcript.join('\n')); announce('TRANSCRIPT COPIED.'); }
    catch { announce('COPY UNAVAILABLE. SELECT TEXT TO COPY.'); }
  });
  lines(['ROOT ACCESS v0.1.0 / POI UNIVERSE', 'INITIALIZING ANALOG INTERFACE...', 'LOCAL SESSION ESTABLISHED.', 'NO ACTUAL TRACKING OR NETWORK CONNECTIONS.', ''], 'muted');
  write(voices[mode].welcome, 'accent');
  write('Type help for available commands.', 'muted');
  write('', 'muted');
  input.focus();
})();
