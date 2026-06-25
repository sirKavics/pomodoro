// const timerMilliseconds = document.querySelector('.timer__milliseconds');
// const timerSeconds = document.querySelector('.timer__seconds');
// const timerMinutes = document.querySelector('.timer__minutes');

// const startButton = document.querySelector('.stopwatch__start');
// const stopButton = document.querySelector('.stopwatch__stop');
// const resetButton = document.querySelector('.stopwatch__reset');

// let cancelId;
// let startTime;
// let savedTime = 0;
// const countdown = 25 * 60 * 1000;


// function startTimer() {
//     startButton.disabled = true;        // Disable the start button to prevent multiple clicks
//     stopButton.disabled = false;        // Enable the stop button to allow stopping the timer
//     resetButton.disabled = false;       // Enable the reset button to allow resetting the timer

//     startTime = Date.now();
//     cancelId =requestAnimationFrame(updateTimer);
// }

// function stopTimer() {
//     startButton.disabled = false;
//     stopButton.disabled = true;
//     resetButton.disabled = false;

//     cancelAnimationFrame(cancelId);
//     savedTime += Date.now() - startTime;     // savedTime = Date.now() - startTime + savedTime;
// }

// function resetTimer() {
//     startTime = Date.now();
//     savedTime = 0;

//     timerMilliseconds.innerHTML = "000";
//     timerSeconds.innerHTML = "00";
//     timerMinutes.innerHTML = "25";
// }

// function updateTimer() {
//     let millisElapsed = Date.now() - startTime + savedTime;

//     let millisLeft = countdown - millisElapsed;
//     if (millisLeft < 0) {
//         millisLeft = 0;
//         cancelAnimationFrame(cancelId);
//         cancelId = null;
//     }

//     let secondsLeft = millisLeft / 1000;
//     let minutesLeft = secondsLeft / 60;

//     let millisecondsFormat = millisLeft % 1000;
//     let secondsFormat = Math.floor(secondsLeft) % 60;
//     let minutesFormat = Math.floor(minutesLeft);

//     if (millisecondsFormat.toString().length < 3) {
//         millisecondsFormat = millisecondsFormat.toString().padStart(3, "0");
//     }
//     if (secondsFormat.toString().length < 2) {
//         secondsFormat = secondsFormat.toString().padStart(2, "0");
//     }
//     if(minutesFormat.toString().length < 2) {
//         minutesFormat = minutesFormat.toString().padStart(2, "0");
//     }
    
//     timerMilliseconds.innerHTML = millisecondsFormat;
//     timerSeconds.innerHTML =  secondsFormat;
//     timerMinutes.innerHTML = minutesFormat;

//     if (cancelId) {
//         cancelId = requestAnimationFrame(updateTimer);
//     }
// }

// PRACTICE RUN

const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

const startButton = document.querySelector('.stopwatch__start');
const stopButton = document.querySelector('.stopwatch__stop');
const resetButton = document.querySelector('.stopwatch__reset');

let cancelId;
let startTime;
let savedTime = 0;
let countdown = 1000;

function startTimer() {
    startButton.disabled = true
    stopButton.disabled = false;
    resetButton.disabled = false;

    startTime = Date.now();
    cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;

    cancelAnimationFrame(cancelId);
    savedTime = Date.now() - startTime + savedTime;
}

function resetTimer() {
    resetButton.disabled = true;

    startTime = Date.now();
    savedTime = 0;

    timerMilliseconds.innerHTML = "000"
    timerSeconds.innerHTML = "00"
    timerMinutes.innerHTML = "25"
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

    let millisFormat = millisLeft % 1000;
    let secondsFormat = Math.floor(secondsLeft) % 60;
    let minutesFormat = Math.floor(minutesLeft);

    if (millisFormat.toString().length < 3) {
        millisFormat = millisFormat.toString().padStart(3, "0")
    }
    if (secondsFormat.toString().length < 2) {
        secondsFormat = secondsFormat.toString().padStart(2, "0")
    }
    if (minutesFormat.toString().length < 2) {
        minutesFormat = minutesFormat.toString().padStart(2, "0")
    }

    timerMilliseconds.innerHTML = millisFormat;
    timerSeconds.innerHTML = secondsFormat;
    timerMinutes.innerHTML = minutesFormat;

    if (cancelId) {
        cancelId = requestAnimationFrame(updateTimer);
    }
}