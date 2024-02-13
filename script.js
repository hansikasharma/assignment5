var countDownDate = new Date("2024-02-19T12:00:00").getTime();
       
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer-hours").innerHTML = days*24+hours+":";
  document.getElementById("timer-minutes").innerHTML = minutes+":";
  document.getElementById("timer-seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
document.addEventListener("DOMContentLoaded", function() {
setTimeout(function() {
var form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
event.preventDefault();
var formContainer = document.getElementById('slide-up-form');
formContainer.parentNode.removeChild(formContainer);
});
var close = document.getElementById('close');
close.addEventListener('click', function(event) {
event.preventDefault();
var formContainer = document.getElementById('slide-up-form');
formContainer.parentNode.removeChild(formContainer);
});
document.getElementById('slide-up-form').style.display = 'block';
}, 15000); 
});
