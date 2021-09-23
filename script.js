let countDownTarget =
  new Date('Nov 03, 2021 11:30:00').getTime() + 0 * 60 * 1000;

function showClock(target) {
  const distance = target - new Date().getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins =
    distance < 0 ? 0 : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = distance < 0 ? 0 : Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = secs;
}

showClock(countDownTarget);

// Update the count down every 1 second
let x = setInterval(function () {
  showClock(countDownTarget);
  if (countDownTarget - new Date().getTime() < 0) {
    clearInterval(x);
    document.getElementById('expired').innerHTML = 'EXPIRED';
    document.getElementById('days').innerHTML = '0';
    document.getElementById('hours').innerHTML = '0';
  }
}, 1000);
