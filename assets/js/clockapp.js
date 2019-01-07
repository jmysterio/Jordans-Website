function getTime() {
    var fullDate= new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if (hours>12) {
        hours = hours - "12"
    }
    if (hours<10) {
        hours = "0" + hours;
    }
    if (mins<10) {
        mins = "0" + mins;
    }
    if (secs<10) {
        secs = "0" + secs;
    }

    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = ":" + mins;
    document.getElementById('second').innerText = ":" + secs;
}

setInterval(getTime,10);