 const eventDate = new Date("Aug 29, 2025 10:00:00").getTime();
  const countdown = document.getElementById("countdown");

  setInterval(function () {
    let now = new Date().getTime();
    let distance = eventDate - now;

    if (distance < 0) {
      countdown.innerHTML = "Event Started!";
      return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
      <div>${days}<br><small>Days</small></div>
      <div>${hours}<br><small>Hours</small></div>
      <div>${minutes}<br><small>Minutes</small></div>
      <div>${seconds}<br><small>Seconds</small></div>
    `;
  }, 1000);