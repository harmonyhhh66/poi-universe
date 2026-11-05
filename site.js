// MISSION 002 / intentionally no analytics, network requests, or persistent storage.
(() => {
  'use strict';
  const button = document.getElementById('signal-button');
  const output = document.getElementById('signal-output');
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    output.hidden = expanded;
  });
})();
