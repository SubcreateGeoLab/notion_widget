// clock.js – pure ES module, no external dependencies

/**
 * Returns the current time formatted as HH:MM (24‑hour clock).
 * @returns {string}
 */
function getCurrentTime() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

/**
 * Writes the formatted time into the #clock element.
 */
function render() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return console.warn('#clock element not found');
  clockEl.textContent = getCurrentTime();
}

/**
 * Schedule the next update exactly at the start of the next minute.
 * This prevents drift that `setInterval(60000)` can introduce.
 */
function scheduleNextTick() {
  const now = new Date();
  const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  setTimeout(() => {
    render();
    scheduleNextTick(); // recurse for the following minute
  }, msToNextMinute);
}

// Initial render + start the ticking loop
render();
scheduleNextTick();
