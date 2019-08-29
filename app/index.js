import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
import { today, goals } from "user-activity";


let myClock = document.getElementById("myClock");
let myClock_sec = document.getElementById("myClock-sec");
let ampm = document.getElementById("ampm");
let steps = document.getElementById("steps");
let arc_steps = document.getElementById("arc-steps-fore");
let arc_distance = document.getElementById("arc-distance-fore");

let month_txt = document.getElementById("date-month");
let day_txt = document.getElementById("date-date");


steps.text = today.local.steps || 0;
setInterval(() => {
    steps.text = today.local.steps || 0;
}, 4500);

setInterval(() => {
    let angle_steps_per = (today.local.steps || 0) / (goals.steps || 0);
    let angle = 360 * angle_steps_per;
    arc_steps.sweepangle = angle; 
}, 4500);


// Convert day of month to human readable
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



let date = new Date();
let month = nameOfMonth(date.getMonth());
let day = date.getDate();
month_txt.text = `${month}`;
day_txt.text = `${day}`;



clock.granularity = "seconds";
clock.ontick = (evt) => {
    
    let hours = evt.date.getHours();
    let minutes = evt.date.getMinutes();
    let seconds = evt.date.getSeconds();


    // AM/PM 12시간 나누기
    if(hours>11){
        ampm.text = "P";
        if(hours>12){
            hours = hours - 12;
        }
    }

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
 
    myClock.text = `${hours}:${minutes}`;
    myClock_sec.text = `${seconds}`;


    console.log(evt.date.toString());
    console.log(hours+":"+minutes+":"+seconds);

}

