$(function() {

  $("#motion-div").load("/views/motion.html");

  setTimeout(function() { $("#bars-div").load("/views/bars.html") } , 1000);

  setTimeout(function() { $("#circle-div").load("/views/circle.html") } , 2000);

  setTimeout(function() { $("#bubbles-div").load("/views/bubbles.html") }, 3000);

  setTimeout(function() { $("#radar-div").load("/views/radar.html") }, 4000);
})
