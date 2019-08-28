import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
import { today, goals } from "user-activity";


// 시간 보여주는 기능
let myClock = document.getElementById("myClock");

clock.granularity = "seconds";

clock.ontick = function(evt) {
    let hours = evt.date.getHours();
    let minutes = evt.date.getMinutes();
    let seconds = evt.date.getSeconds();

    // AM/PM 12시간 나누기
    if(hours>12){
        hours = hours - 12;
    }

    myClock.text = ("0" + hours).slice(-2) + ":" +
    ("0" + evt.date.getMinutes()).slice(-2) + ":" +
    ("0" + evt.date.getSeconds()).slice(-2);

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
 
    myClock.text = `${hours}:${minutes}:${seconds}`;

    console.log(evt.date.toString());
    console.log(hours+":"+minutes+":"+seconds);
}

