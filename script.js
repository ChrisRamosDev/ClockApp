const digital = document.querySelector('.digital');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => {
  setTime()

},1000)

function setTime() {  
  // Gets local time
  const [hour,minute,second] = (new Date()).toTimeString().slice(0,9).split(':');
  // US Standard time format
  const hours = hour > 12 ? hour - 12 : 
        hour <= 0 ? hour + 12 : hour;
  // Sets AM or PM meridien
  const meridien = hour < 12 ? 'AM' : 'PM';
  // Sets Degree for each analog hand
  const minDeg = minute * 6;
  const hrDeg = hours * 30;
  const secDeg = second * 6;

  secDeg === 354 ?
  secondHand.style.transition = 'none' :
  secondHand.style.transition = '' 
  console.log(secDeg);

  // Changes CSS styling for rotating clock hands
  secondHand.style.transform = 'rotate('+secDeg+'deg)';
  minuteHand.style.transform = 'rotate('+minDeg+'deg)';
  hourHand.style.transform = 'rotate('+hrDeg+'deg)';

  // Sets Digital clock display for current time
  digital.innerHTML = `${hours}:${minute} ${meridien}`
};






