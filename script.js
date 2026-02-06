const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let yesSize = 1;
let noSize = 1;
let clicks = 0;

noButton.addEventListener("click", () => {
  clicks++;

  yesSize += 0.25;
  yesButton.style.transform = `scale(${yesSize})`;

  noSize += 0.1;
  noButton.style.transform = `scale(${noSize})`;

  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  if (clicks >= 7) {
    showLove();
  }
});

yesButton.addEventListener("click", showLove);

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
    ">
      <div>
        <h1 style="font-size:4.5rem;color:#ff2f92;">
          I LOVE YOU ❤️
        </h1>
        <p style="font-size:1.6rem;color:#444;">
          Jayantika, my Karate Kid 🥋💖<br><br>
          Every breath I take, every step I make,  
          I’m choosing you — today and always.
        </p>
      </div>
    </div>
  `;
}