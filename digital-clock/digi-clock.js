setInterval(digiclock, 1000);

function digiclock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = "AM";


    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    let clockTime = hours + ':' + mins + ':' + seconds + ' ' + period;
    let clock = document.getElementById('clock').innerText = clockTime;
}