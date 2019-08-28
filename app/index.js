import document from "document";
import clock from "clock";

let myClock = document.getElementById("myClock");

clock.granularity = "seconds";

clock.ontick = function(evt) {
    myClock.text = ("0" + evt.date.getHours()).slice(-2) + ":" +
    ("0" + evt.date.getMinutes()).slice(-2) + ":" +
    ("0" + evt.date.getSeconds()).slice(-2);

    console.log(evt.date.toString());
    console.log(evt.getHours());
}

clock.ontick = function(evt) {
    myClock.text = ("0" + evt.date.getHours()).slice(-2) + ":" +
                        ("0" + evt.date.getMinutes()).slice(-2) + ":" +
                        ("0" + evt.date.getSeconds()).slice(-2);
  };