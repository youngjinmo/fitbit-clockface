import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
import { today, goals } from "user-activity";


let month_txt = document.getElementById("mnonth");
let date_txt = document.getElementById("date");
let day_txt = document.getElementById("day");

let myClock = document.getElementById("myClock");
let ampm = document.getElementById("ampm");
let myClock_seconds = document.getElementById("seconds");

let arc_steps = document.getElementById("arc-steps-fore");
let steps = document.getElementById("steps");

// convert to String for human
function nameOfMonth(i) {
    switch(i) {
        case 0:
            return "JAN";
        case 1:
            return "FEB";
        case 2:
            return "MAR";
        case 3:
            return "APR";
        case 4:
            return "MAY";
        case 5:
            return "JUN";
        case 6:
            return "JUL";
        case 7:
            return "AUG";
        case 8:
            return "SEP";
        case 9:
            return "OCT";
        case 10:
            return "NOV";
        case 11:
            return "DEC";
    }
}

function nameOfWeek(i) {
    switch(i) {
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TUE";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
    }
}

// import date data
let date = new Date();
let month = nameOfMonth(date.getMonth());
let date = date.getDate();
let day = nameOfWeek(date.getDay());


// import date data
// let date = new Date();
// let month = nameOfMonth(date.getMonth());
// let date = date.getDate();
// let day = nameOfMonth(date.getDay());

// text data convert to data data imported
month_txt.text = `${month}`;
date_txt.text = `${date}`;
day_txt.text = `${day}`;


clock.granularity = "seconds";
clock.ontick = (evt) => {
    
    let hours = evt.date.getHours();
    let minutes = evt.date.getMinutes();
    let seconds = evt.date.getSeconds();


    // 시간 카운트가 한 자리수일 때 앞에 0 추가
    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10) {
        minutes = "0"+minutes;
    }
    if(seconds<10) {
        seconds = "0"+seconds;
    }

    // AM/PM 12시간 나누기
    if(hours>11){
        ampm.text = "PM";
        if(hours>12){
            hours = hours - 12;
        }
    }
 
    myClock.text = `${hours}:${minutes}`;
    myClock_seconds.text = `:${seconds}`;


    // Activity Text
    steps.text = today.local.steps.toString();
    setInterval(() => {
        steps.text = today.local.steps.toString();
    }, 4500);

    // Activity Circle
    let goalCompletion = (today.local.steps) / (goals.steps);
    setInterval(() => {
        goalCompletion = (today.local.steps) / (goals.steps);
        arc_steps.sweepangle = 360 * goalCompletion;
    }, 4500);


    console.log(evt.date.toString());
    console.log(hours+":"+minutes+":"+seconds);

}

