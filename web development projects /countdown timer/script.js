const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const setTimeInput = document.getElementById("setTime");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let timerInterval;
let countdownTime = 0;
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  minutesSpan.textContent = formatTime(minutes);
  secondsSpan.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startTimer() {
  if (!isRunning && countdownTime > 0) {
    timerInterval = setInterval(() => {
      countdownTime--;

      if (countdownTime <= 0) {
        clearInterval(timerInterval);
        countdownTime = 0;
        isRunning = false;
      }

      updateTimerDisplay();
    }, 1000);

    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  countdownTime = parseInt(setTimeInput.value);
  updateTimerDisplay();
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
setTimeInput.addEventListener("input", function () {
  countdownTime = parseInt(this.value);
  updateTimerDisplay();
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});

// Initial display update
updateTimerDisplay();
