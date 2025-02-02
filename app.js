let stopInterval;
let count = 0;
let sec = 0;
let rot = 0;
let remainingTime = 0;

let textShow = document.getElementById("stopwatchTime");
let startWatch = document.getElementById("start-watch");
let stopWatch = document.getElementById("stop-watch");
let resetWatch = document.getElementById("reset-watch");
let watchCircle = document.getElementById("watchCircle");
let stopWatchProgress = document.getElementById("stopwatchProgress");

let timerTime = document.getElementById("timerTime");
let minutes = document.getElementById("timerMinutes");
let startTimer = document.getElementById("startTimer");
let stopTimer = document.getElementById("stopTimer");
let resetTimer = document.getElementById("resetTimer");

stopWatch.style.display = "none";
resetWatch.style.display = "none";
stopTimer.style.display = "none";
resetTimer.style.display = "none";


function showTimer() {
  document.getElementById("timerSection").classList.remove("hidden");
  document.getElementById("stopwatchSection").classList.add("hidden");
  document.getElementById("timerBtn").classList.add("btn-primary");
  document.getElementById("stopwatchBtn").classList.remove("btn-primary");
}

function showStopwatch() {
  document.getElementById("timerSection").classList.add("hidden");
  document.getElementById("stopwatchSection").classList.remove("hidden");
  document.getElementById("timerBtn").classList.remove("btn-primary");
  document.getElementById("stopwatchBtn").classList.add("btn-primary");
}

function startStopwatch() {
  stopInterval = setInterval(function () {
    rot++;
    let rotation = (rot / 100) * 100;
    stopWatchProgress.style.transform = `translateX(-50%) rotate(${rotation}deg)`;

    if (count >= 100) {
      count = 0;
      sec++;
    } else {
      count++;
    }
    textShow.innerText = `${sec}:${count < 10 ? "0" + count : count}`;
  }, 10);

  stopWatch.style.display = "inline-block";
  resetWatch.style.display = "inline-block";
  startWatch.style.display = "none";
  startWatch.style.width = "45%";
  watchCircle.style.border = "5px solid rgb(58, 63, 75)";

  stopWatchProgress.style.visibility = "visible";
}

function stopStopwatch() {
  clearInterval(stopInterval);
  stopWatch.style.display = "none";
  startWatch.style.display = "inline-block";
}

function resetStopwatch() {
  clearInterval(stopInterval);
  textShow.innerText = "00:00";
  count = 0;
  sec = 0;
  rot = 0;
  stopWatch.style.display = "none";
  resetWatch.style.display = "none";
  startWatch.style.display = "inline-block";
  startWatch.style.width = "95%";
  watchCircle.style.border = "#282c34";

  stopWatchProgress.style.visibility = "hidden";
  stopWatchProgress.style.transform = "translateX(-50%) rotate(0deg)";
}

function startTimerTime() {
  let timerShow = minutes.value * 60;

  if (timerShow <= 3600 && timerShow > 0) {
    if (remainingTime === 0) {
      remainingTime = timerShow;
    }

    timerInterval = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        timerTime.innerText = `${Math.floor(remainingTime / 60)}:${
          remainingTime % 60
        }`;
      } else {
        stopTimerTime();
        alert("Your time's up!");
      }
    }, 1000);

    stopTimer.style.display = "inline-block";
    resetTimer.style.display = "inline-block";
    startTimer.style.display = "none";
    minutes.style.display = "none";
    startTimer.style.width = "45%";
  } else {
    alert("Please give me time less than 60 minutes.");
  }
}

function stopTimerTime() {
  clearInterval(timerInterval);
  stopTimer.style.display = "none";
  startTimer.style.display = "inline-block";
}

function resetTimerTime() {
  clearInterval(timerInterval);
  remainingTime = 0;
  minutes.value = "";
  timerTime.innerText = "00:00";
  stopTimer.style.display = "none";
  resetTimer.style.display = "none";
  minutes.style.display = "inline";
  startTimer.style.display = "inline-block";
  startTimer.style.width = "95%";
}

startWatch.addEventListener("click", startStopwatch);
resetWatch.addEventListener("click", resetStopwatch);
stopWatch.addEventListener("click", stopStopwatch);
startTimer.addEventListener("click", startTimerTime);
stopTimer.addEventListener("click", stopTimerTime);
resetTimer.addEventListener("click", resetTimerTime);
