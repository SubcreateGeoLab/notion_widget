// clock.js – pure ES module, no external deps

/**
 * Formats a Date object as HH:MM:SS (24‑hour clock).
 * @param {Date} date
 * @returns {string}
 */
function formatTime(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/**
 * Updates the #clock element with the current local time.
 */
function tick() {
  const now = new Date();
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    clockEl.textContent = formatTime(now);
  }
}

// Initial render
tick();

// Refresh every second
setInterval(tick, 1000);
