let timer = document.querySelector(".timer");
let button = document.querySelector(".start");

let minutes = 2;
let seconds = 30;
let pause = true;

button.addEventListener("click", () => {
    pause = !pause; 
    if (pause) {
        button.textContent = "Start";
    }
    else {
        button.textContent="Pause";
    }
})

setInterval(() => {
if (!pause) {
    let secondsString = "00";
    let minutesString = "00";
    if (minutes < 10) {
        minutesString = `0${minutes}`;
    }
if (seconds > 0) {
    seconds--;
    if (seconds < 10) {
        secondsString = `0${seconds}`;
    }
    else {
        secondsString = seconds;
    }
    timer.textContent = `${minutesString}:${secondsString}`;
}
if (seconds == 0) {
    if (minutes > 0) {
        minutes--;
        seconds = 59;
    }
}
}

}, 1000)