let cancelId;
let startTime;
const countdown = 25 * 60 * 1000;

const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

function startTimer() {
    startTime = Date.now();
    console.log(startTime)
    cancelId =requestAnimationFrame(updateTimer);
}

function stopTimer() {
    cancelAnimationFrame(cancelId);
}

function resetTimer() {

}

function updateTimer() {
    let millisElapsed = Date.now() - startTime;

    let timeLeft = countdown - millisElapsed;
    console.log(timeLeft);
    cancelId = requestAnimationFrame(updateTimer);
}