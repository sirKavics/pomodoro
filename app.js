let cancelId;
let startTime;
let savedTime = 0;
const countdown = 5 * 1000;

const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

function startTimer() {
    startTime = Date.now();
    cancelId =requestAnimationFrame(updateTimer);
}

function stopTimer() {
    cancelAnimationFrame(cancelId);
    savedTime += Date.now() - startTime;
    console.log(savedTime);
}

function resetTimer() {
    startTime = Date.now();
    savedTime = 0;

    timerMilliseconds.innerHTML = "000";
    timerSeconds.innerHTML = "00";
    timerMinutes.innerHTML = "25";
}

function updateTimer() {
    let millisElapsed = Date.now() - startTime + savedTime;

    let millisLeft = countdown - millisElapsed;
    if (millisLeft < 0) {
        millisLeft = 0;
        cancelAnimationFrame(cancelId);
        cancelId = null;
    }

    let secondsLeft = millisLeft / 1000;
    let minutesLeft = secondsLeft / 60;

    let millisecondsFormat = millisLeft % 1000;
    let secondsFormat = Math.floor(secondsLeft) % 60;
    let minutesFormat = Math.floor(minutesLeft);

    if (millisecondsFormat.toString().length < 3) {
        millisecondsFormat = millisecondsFormat.toString().padStart(3, "0");
    }
    if (secondsFormat.toString().length < 2) {
        secondsFormat = secondsFormat.toString().padStart(2, "0");
    }
    if(minutesFormat.toString().length < 2) {
        minutesFormat = minutesFormat.toString().padStart(2, "0");
    }
    
    timerMilliseconds.innerHTML = millisecondsFormat;
    timerSeconds.innerHTML =  secondsFormat;
    timerMinutes.innerHTML = minutesFormat;

    if (cancelId) {
        cancelId = requestAnimationFrame(updateTimer);
    }
}