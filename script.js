let timer = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let laps = document.getElementById('laps');

let interval;
let elapsedTime = 0;

// Format time function
function formatTime(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor(ms / (1000 * 60 * 60));

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the timer
startBtn.addEventListener('click', () => {
  if (!interval) {
    let startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timer.textContent = formatTime(elapsedTime);
    }, 100);
  }
});

// Pause the timer
pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  timer.textContent = '00:00:00';
  laps.innerHTML = '';
});

// Record a lap
lapBtn.addEventListener('click', () => {
  if (elapsedTime > 0) {
    let lapTime = document.createElement('li');
    lapTime.textContent = `Lap: ${formatTime(elapsedTime)}`;
    laps.appendChild(lapTime);
  }
});
