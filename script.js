// Event start date and time (India Standard Time)
const EVENT_DATE = new Date("2027-02-20T10:00:00+05:30");

// ---------- Countdown timer ----------
function updateCountdown() {
  const countdownEl = document.getElementById("countdown");
  const diff = EVENT_DATE - new Date();

  if (diff <= 0) {
    countdownEl.textContent = "The hackathon is live!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s to go`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- Registration form ----------
const form = document.getElementById("register-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const teamName = document.getElementById("team-name").value.trim();
  message.textContent = `Thanks, team ${teamName}! We will email you the details soon.`;
  form.reset();
});


// ---------- Dark theme toggle ----------
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});
