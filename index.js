function startTime() {
  let today = new Date();
  let hours = today.getHours();
  let mins = today.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; 
  hours = hours < 10 ? "0" + hours : hours;
  hours = hours ? hours : 12; //hour '0' should be '12';
  mins = mins < 10 ? "0" + mins : mins;

  document.getElementById("clock").innerHTML = hours + " : " + mins + " " + ampm;

  let t = setTimeout(startTime, 500);
}
