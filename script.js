const overlay = document.getElementById("overlay");
const audio = document.getElementById("bgm");
const effects = document.getElementById("effects");

let started = false;

overlay.addEventListener("click", () => {
  if (started) return;
  started = true;

  overlay.style.display = "none";
  audio.play();

  // flowers
  setInterval(() => {
    const f = document.createElement("div");
    f.className = "flower";
    f.textContent = Math.random()>0.5 ? "🌸" : "🌼";
    f.style.left = Math.random()*100 + "vw";
    effects.appendChild(f);
    setTimeout(() => f.remove(), 6000);
  }, 300);

  // fireworks sparks
  setInterval(() => {
    for (let i=0; i<3; i++){
      const s = document.createElement("div");
      s.className = "spark";
      s.style.left = Math.random()*100 + "vw";
      s.style.top  = Math.random()*60 + "vh";
      effects.appendChild(s);
      setTimeout(() => s.remove(), 1200);
    }
  }, 700);

});
