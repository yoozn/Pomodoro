let timer = document.querySelector(".timer");
let button = document.querySelector(".start");

let addBlockContainer = document.querySelector(".add-block");
let addBlockButton = document.querySelector(".add");

let addButtons;

let mouseover = false;

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

addBlockButton.addEventListener("mouseover", () => {
    addBlockButton.classList.add("invisible");
    mouseover =true;
    addBlockButton.addEventListener('transitionend', () => {
        if (mouseover) {
            if (!document.querySelector(".add-buttons")) {
                addButtons = document.createElement('div');
                addButtons.classList.add("add-buttons");
                addButtons.classList.add("invisible-add-buttons");
                addBlockContainer.appendChild(addButtons);
                let addShort = document.createElement('button');
                addShort.classList.add("add-short");
                addButtons.append(addShort);
                let addPom = document.createElement('button');
                addPom.classList.add("add-pom");
                addButtons.append(addPom);
                let addLong = document.createElement('button');
                addLong.classList.add("add-long");
                addButtons.append(addLong);
                setInterval(() => {
                    addButtons.classList.remove("invisible-add-buttons");
                }, 50)
            }
        }
    }, {once: true});

})

addBlockContainer.addEventListener("mouseleave", () => {
    addBlockButton.classList.remove("invisible");
    mouseover = false;
    if (addButtons) {
        addButtons.classList.add("invisible");
        addButtons.addEventListener('transitionend' , () => {
            addButtons.remove();
        }, {once: true})
    }
})