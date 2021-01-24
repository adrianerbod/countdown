const currentDate = new Date();
const year = currentDate.getFullYear();
const newYear = `1 Jan ${year + 1}`;

const daysLeft = document.getElementById('days');
const hoursLeft = document.getElementById('hours');
const minutesLeft = document.getElementById('minutes');
const secondsLeft = document.getElementById('seconds');
function countdown () {
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days =  Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysLeft.innerHTML = formatTime(days);
    hoursLeft.innerHTML = formatTime(hours);
    minutesLeft.innerHTML = formatTime(minutes);
    secondsLeft.innerHTML = seconds;
};
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}
                //Initial call
setInterval(countdown, 1000);
countdown();