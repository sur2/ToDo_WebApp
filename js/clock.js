const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : seconds}`;

    const dayInfo = date.getFullYear() + " " +
        ((date.getMonth() + 1 < 10) ? "0"+(date.getMonth() + 1) : (date.getMonth() + 1)) + " " +
        ((date.getDate() + 1 < 10) ? "0"+(date.getDate() + 1) : (date.getDate() + 1));
    const day = document.querySelector(".clock-day");
    day.innerText = dayInfo;
    day.style.cssText = "font-size: 200%; text-align: left;";            
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();