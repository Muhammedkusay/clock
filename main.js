// select items
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

function updateTime() {
    let time = new Date();
    let hoursDeg = (time.getHours() % 12) / 12 * 360 - 90 + time.getMinutes() / 2;
    let minutesDeg = time.getMinutes() / 60 * 360 - 90;
    let secondsDeg = time.getSeconds() / 60 * 360 - 90;

    hoursEl.style.transform = `rotate(${hoursDeg}deg)`;
    minutesEl.style.transform = `rotate(${minutesDeg}deg)`;
    secondsEl.style.transform = `rotate(${secondsDeg}deg)`;

}

setInterval(updateTime, 1000);