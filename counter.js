// Variables
const daysInterval = document.getElementById("days");
const hoursInterval = document.getElementById("hours");
const minutesInterval = document.getElementById("minutes");
const secondsInterval = document.getElementById("seconds");

//Use Day.js to get date and add one month
const nextMonth = (dayjs().month() + 2) + ' ' + dayjs().date() + ' ' + dayjs().year();

//Format month  ex-format:"09 April 2021"
const formatNextMonth = dayjs(nextMonth).format('DD MMMM YYYY');

//Set date for next month
const launchDate = formatNextMonth;

//Countdown Function
function countdown() {

    //Variables
    const newLaunchDate = new Date(launchDate);
    const currentDate = new Date();

    //Get seconds
    const totalSeconds = (newLaunchDate - currentDate) / 1000;

    //Get rest of time information with conversions 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //Set data for timer automation effect 
    daysInterval.innerHTML = days;
    hoursInterval.innerHTML = formatTime(hours);
    minutesInterval.innerHTML = formatTime(mins);
    secondsInterval.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

//Interval until next number
setInterval(countdown, 1000);