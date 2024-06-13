document.addEventListener('DOMContentLoaded', () => {
    let [seconds, minutes, hours] = [0, 0, 0];
    const displayTime = document.getElementById("displayTime");
    let timer = null;

    function stopwatch() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        displayTime.innerHTML = hours + ":"+ minutes + ":"+ seconds;
    }

    function start() {
        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(stopwatch, 1000);
    }

    
    start();
});

document.addEventListener('DOMContentLoaded', () => {
    let [seconds, minutes, hours] = [60, 59, 0];
    const displayTime = document.getElementById("displayTimes");
    let timer = null;

    function stopwatch() {
        seconds--;
        if (seconds === 0) {
            seconds = 60;
            minutes--;
            if (minutes === 0) {
                minutes = 60;
                hours--;
            }
        }
        displayTime.innerHTML = hours + ":"+ minutes + ":"+ seconds;
    }

    function start() {
        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(stopwatch, 1000);
    }

    
    start();
})