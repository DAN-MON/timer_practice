"use strict";
{
  var interval_id;
  var start_click = "false";
  var time = 180;
  var min = 0;
  var sec = 0;

  function count_start() {
    if (start_click === "false") {
      interval_id = setInterval(count_down, 1000);
      start_click = "true";
    }
  }
  function count_down() {
    var display = document.getElementById("display");
    if (time === 1) {
      display.innerHTML = "TIME UP!";
      count_stop();
    } else {
      time--;
      min = Math.floor(time / 60);
      sec = Math.floor(time % 60);
      display.innerHTML = "0" + min + ":" + sec;
      if (sec < 10) {
        display.innerHTML = "0" + min + ":" + "0" + sec;
      }
    }
  }
  function count_stop() {
    clearInterval(interval_id);
    start_click = "false";
  }
  function count_reset() {
    count_stop();
    time = 180;
    min = 0;
    sec = 0;
    var reset = document.getElementById("display");
    reset.innerHTML = "03:00";
  }

  window.onload = function () {
    var start = document.getElementById("start");
    start.addEventListener("click", count_start, false);
    var stop = document.getElementById("stop");
    stop.addEventListener("click", count_stop, false);
    var reset = document.getElementById("reset");
    reset.addEventListener("click", count_reset, false);
  };
}
