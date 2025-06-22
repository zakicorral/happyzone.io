// 🔐 Password Lock
document.getElementById("unlockBtn").addEventListener("click", function () {
  const password = document.getElementById("passwordInput").value;
  if (password === "patience") {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("page-content").style.display = "block";
  } else {
    document.getElementById("error-message").innerText = "Wrong password.";
  }
});

// 🕒 Live Time Display
function updateTime() {
  const now = new Date();
  document.getElementById("liveTime").innerText =
    "Time now: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// 🗓️ Mood Tracker
const moodForm = document.getElementById("moodForm");
const moodDisplay = document.getElementById("mood-display");

moodForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mood = moodForm.mood.value;
  localStorage.setItem("currentMood", mood);
  moodDisplay.innerText = "You’re feeling: " + mood;
});

window.addEventListener("DOMContentLoaded", () => {
  const mood = localStorage.getItem("currentMood");
  if (mood) {
    moodDisplay.innerText = "You were feeling: " + mood;
  }
});

// 💌 Message Box
document.getElementById("sendMessage").addEventListener("click", () => {
  const msg = document.getElementById("loveMessage").value.trim();
  if (msg) {
    localStorage.setItem("lastMessage", msg);
    document.getElementById("lastMessage").innerText = "Saved: " + msg;
    document.getElementById("loveMessage").value = "";
  }
});

const savedMsg = localStorage.getItem("lastMessage");
if (savedMsg) {
  document.getElementById("lastMessage").innerText = "Saved: " + savedMsg;
}

// 🌸 Quote Generator
const quotes = [
  "You’re my sunshine on a cloudy day.",
  "Every moment with you is a treasure.",
  "You are more loved than you know.",
  "My heart beats your name.",
  "Forever starts with you.",
  "You’re my reason, my everything.",
];

document.getElementById("newQuote").addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").innerText = `"${random}"`;
});

// ❓ Guessing Game
document.getElementById("guessBtn").addEventListener("click", () => {
  const answer = document.getElementById("guessInput").value.toLowerCase().trim();
  const correctAnswer = "tizi ouzou";
  const result = document.getElementById("guessResult");
  if (answer === correctAnswer) {
    result.innerText = "Correct! You never forget ❤️";
  } else {
    result.innerText = "Hmm... try again cutie 🌸";
  }
});

// 🎉 Confetti Celebration (basic)
document.getElementById("confettiBtn").addEventListener("click", () => {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.dy;
      p.x += p.dx;
      if (p.y > canvas.height) p.y = -10;
    });
    requestAnimationFrame(draw);
  }

  draw();
  setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 5000);
});
