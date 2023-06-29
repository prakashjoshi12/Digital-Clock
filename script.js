
// time script code

function Timefunc() {
    let clocktime = new Date();
    let hour = clocktime.getHours();
    let min = clocktime.getMinutes();
    let sec = clocktime.getSeconds();
    let a_p_meridiem  = "<span>AM</span>";
 
    if (hour > 12) {
        hour -= 12;
      a_p_meridiem  = "<span>PM</span>";
    }
    if (hour == 0) {
        hour = 12;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
       sec = "0" + sec;
    }
  
    let FinalTime = hour + " : " + min + " : " + sec + " " + a_p_meridiem;
  
document.getElementById("time").innerHTML = FinalTime;
  
document.getElementById('date').innerHTML = clocktime.toDateString();
}
setInterval(Timefunc,);
