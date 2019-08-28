import document from "document";
import clock from "clock";

let myClock = document.getElementById("myClock");

clock.granularity = "seconds";

clock.ontick = function(evt) {
    let hours = evt.date.getHours();

    // AM/PM 12시간 나누기
    if(hours>12){
        hours = hours - 12;
    }

    myClock.text = ("0" + hours).slice(-2) + ":" +
    ("0" + evt.date.getMinutes()).slice(-2) + ":" +
    ("0" + evt.date.getSeconds()).slice(-2);

    console.log(evt.date.toString());
    console.log(hours);
}