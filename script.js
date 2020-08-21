let displaySeconds = 0;
let displayMinutes = 0;
let sesson = "AM";

function showtime() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds.toString();
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes.toString();
    }

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
        sesson = "PM"
    }

    document.querySelector('#time').innerText = hours + ":" + displayMinutes + ":" + displaySeconds + "  " + sesson;
    document.querySelector('#time').textContent = hours + ":" + displayMinutes + ":" + displaySeconds + "  " + sesson;

}
setInterval(showtime, 1000);
