const currentDate = new Date();
const year = currentDate.getFullYear();
let countdownDate = `1 Jan ${year + 1}`;

const daysLeft = document.getElementById("day");
const hoursLeft = document.getElementById("hours");
const minutesLeft = document.getElementById("minutes");
const secondsLeft = document.getElementById("seconds");

function countdown() {
    const newCountdownDate = new Date(countdownDate);
    
    const totalSeconds = (newCountdownDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysLeft.innerHTML = formatTime(days);
    hoursLeft.innerHTML = formatTime(hours);
    minutesLeft.innerHTML = formatTime(minutes);
    secondsLeft.innerHTML = seconds;
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
};

setInterval(countdown, 1000);

countdown();
document.getElementById('btn').addEventListener('click', () => {
    alert('this is just for show...for now');
});