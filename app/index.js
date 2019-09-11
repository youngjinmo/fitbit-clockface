import document from "document";
import clock from "clock";
import { today, goals } from "user-activity";
import { HeartRateSensor } from "heart-rate";

let month_txt = document.getElementById("month");
let date_txt = document.getElementById("date");
let day_txt = document.getElementById("day");

let myClock = document.getElementById("myClock");
let ampm = document.getElementById("ampm");
let myClock_seconds = document.getElementById("seconds");

let arc = document.getElementById("arc-fore");
let arc_back = document.getElementById("arc-back");
let steps = document.getElementById("stats_steps");
let hr = document.getElementById("stats_hr");
let hrimg = document.getElementById("hrimg");

let congrats = document.getElementById("congrats");
// let goal_01 = document.getElementById("goal_completed_01");
// let goal_02 = document.getElementById("goal_completed_02");
// let goal_03 = document.getElementById("goal_completed_03");
// let goal_04 = document.getElementById("goal_completed_04");
// let goal_05 = document.getElementById("goal_completed_05");
// let goal_06 = document.getElementById("goal_completed_06");


// utils

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

// Convert day of week to human readable
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
let date_day = date.getDate();
let day = nameOfWeek(date.getDay());


// text data convert to data data imported
month_txt.text = `${month}`;
date_txt.text = `${date_day}`;
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


    // Activity - steps
    let today_steps = today.local.steps;
    let today_goals = goals.steps;

    // show steps in accounting
    steps.text = Math.floor(today_steps/1000)+','+today_steps%1000;

    function activity_steps() {
        let goalCompletion = today_steps / today_goals;
       // let angle = 360 * goalCompletion;
        arc.sweepAngle = 360 * goalCompletion;

       // if user completed daily goal
       if(today_steps>today_goals){
           arc.sweepAngle = 0;
           arc_back.sweepAngle = 0;

           congrats.width = 55;
           congrats.height = 55;

           steps.y = 275;
       }
    }
    activity_steps();


    if(HeartRateSensor) {
        const hrm = new HeartRateSensor();
        hrm.addEventListener("reading", () => {
            // console.log(`current heart-rate: ${hrm.heartRate}`);
            hr.text = `${hrm.heartRate}`;
        });
        hrm.start();
    } else {
    	console.log("This device has a no HR sensor");
    }


}
