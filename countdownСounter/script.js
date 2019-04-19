function stopCounting(id) {
    clearInterval(id);
}

function startCountDown (inputEl, outputEl) {
    let value = inputEl.value;
    value = value.trim();
    value = Number(value);

    if (Number.isNaN(value) || value === 0) { 
        alert ("Enter the number more than 0" );
    } else {

    document.getElementById("inputArea").style.display = "none";
    document.getElementById("stopTimer").style.display = "block";

    // max is time value entered
    let max = Math.floor(inputEl.value) * 60;
    let minutes = Math.floor(max/60);
    let seconds = "00" ;
    outputEl.innerText = minutes + ":"  + seconds;

    function changeTime(){
        if (max <= 0) {
            document.getElementById("inputArea").style.display = "block";
            document.getElementById("timer").innerText = "";
            stopCounting(intervalId);
        } else {
        max --;
        minutes = Math.floor(max/60);
        seconds = max - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
        outputEl.innerText = minutes + ":" + seconds;
        }
    }

    //setInterval
    let intervalId = setInterval(changeTime, 1000);

    //eventListener to stop countdown
    document.getElementById("btnStop").addEventListener("click", () => {
        stopCounting(intervalId);
        document.getElementById("inputArea").style.display = "block";
        document.getElementById("stopTimer").style.display = "none";
        });
    }

    inputEl.value = "";
}

// view
const container = document.getElementById("container");
const inputLine = document.createElement("p");
const timerLine = document.createElement("p");
const stopLine = document.createElement("p");
const input = document.createElement("input");
const btnStart = document.createElement("button");
const btnStop = document.createElement("button");

inputLine.setAttribute("id", "inputArea");

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter number");
input.setAttribute("id", "inputCount");

btnStart.setAttribute("type", "button");
btnStart.setAttribute("class", "btn");
btnStart.setAttribute("id", "btnStartTimer");
btnStart.innerText = "Start";

btnStop.setAttribute("type", "button");
btnStop.setAttribute("id", "btnStop");
btnStop.setAttribute("class", "btn");
btnStop.innerText = "Stop";


timerLine.setAttribute("id", "timer");

stopLine.setAttribute("id", "stopTimer");

inputLine.appendChild(input);
inputLine.appendChild(btnStart);
stopLine.appendChild(btnStop);

stopLine.style.display = "none";

container.appendChild(inputLine);
container.appendChild(timerLine);
container.appendChild(stopLine);

//EventListener
btnStart.addEventListener("click", () => startCountDown(input, timerLine));