const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const music = document.getElementById("music");

let yesSize = 1;
let noSize = 1;
let clicks = 0;

// phone-safe music start
function startMusic() {
  music.play().catch(() => {});
}

// funny NO responses
const noMessages = [
  "Nice try 😌",
  "Karate Kid missed 🥋",
  "That hurt a little 💀",
  "Be serious rn",
  "You KNOW that's wrong",
  "Okay drama queen",
  "Try again 😏"
];

noButton.addEventListener("click", () => {
  clicks++;

  // YES grows faster
  yesSize += 0.25;
  yesButton.style.transform = `scale(${yesSize})`;

  // NO grows a bit
  noSize += 0.1;
  noButton.style.transform = `scale(${noSize})`;

  // change NO text
  noButton.innerText =
    noMessages[Math.floor(Math.random() * noMessages.length)];

  // YES gets more aggressive
  if (yesSize > 1.8) yesButton.innerText = "Just say yes 💖";
  if (yesSize > 2.8) yesButton.innerText = "You want to 😭";
  if (yesSize > 3.8) yesButton.innerText = "YES = HUGS";

  // move NO randomly
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // auto end
  if (clicks >= 7) {
    showLove();
  }
});

yesButton.addEventListener("click", showLove);

// floating hearts forever 💖
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 15 + 20 + "px";
  heart.style.opacity = 0.8;
  heart.style.transition = "top 4s linear, opacity 4s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = "-10vh";
    heart.style.opacity = 0;
  }, 100);

  setTimeout(() => heart.remove(), 4000);
}, 350);

// final emotional screen ❤️
function showLove() {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      text-align:center;
      background:linear-gradient(135deg,#ffd6e8,#ffeef5);
      font-family:Arial;
      padding:20px;
    ">
      <div>
        <h1 style="font-size:4.5rem;color:#ff2f92;">
          I LOVE YOU ❤️
        </h1>
        <p style="font-size:1.6rem;color:#444;">
          Jayantika, my Karate Kid 🥋💖<br><br>
          This was a silly little website,<br>
          but how I feel about you isn’t silly at all.<br><br>
          You’re my favorite person to laugh with,<br>
          my favorite person to annoy,<br>
          and the one I want every Valentine with.
        </p>
        <h2 style="color:#ff2f92;">
          Always you. 💕
        </h2>
      </div>
    </div>
  `;
}