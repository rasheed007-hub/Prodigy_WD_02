let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0;
let lapCounter = 1;

function updateDisplay() {
    document.getElementById('display').innerText =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 10 ? "0" : "") + milliseconds;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    lapCounter = 1;
    document.getElementById("laps").innerHTML = ""; // Clear lap history
    updateDisplay();
}

function recordLap() {
    if (isRunning) {
        let lapTime = document.createElement("li");
        lapTime.innerText = `Lap ${lapCounter}: ` + 
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds + ":" +
            (milliseconds < 10 ? "0" : "") + milliseconds;
        document.getElementById("laps").appendChild(lapTime);
        lapCounter++;
    }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

updateDisplay();  // Initialize display
