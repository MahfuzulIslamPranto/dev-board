// updates year,month,day
function updateDateYear(){
    const now = new Date();
    const dateOptions = {year: 'numeric', month:'long', day: 'numeric'};
    const date = now.toLocaleDateString('en-Us',dateOptions);
    const time = now.toLocaleTimeString();
    document.getElementById('date-year').innerText = `${date}`;
}
setInterval(updateDateYear,1000);
updateDateYear();

//updates weekdayname
function updateWeekDay(){
    const now = new Date();
    const dateOptions = {weekday:'short'};
    const date = now.toLocaleDateString('en-Us',dateOptions);
    const time = now.toLocaleTimeString();
    document.getElementById('weekday').innerText = `${date},`;
}
setInterval(updateWeekDay,1000);
updateWeekDay();

//updates time
function updateTime(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    return time;
}
setInterval(updateTime,1000);
updateTime();

