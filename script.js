const overlay = document.getElementById("overlay");
const audio = document.getElementById("bgm");
const flowers = document.getElementById("flowers");
const fireworks = document.getElementById("fireworks");

let started = false;

overlay.addEventListener("click", () => {
  if (started) return;
  started = true;

  overlay.style.display = "none";
  audio.play();

  // ดอกไม้ถี่ขึ้น
  setInterval(() => {
    for (let i = 0; i < 2; i++) {
      const f = document.createElement("div");
      f.className = "flower";
      f.textContent = Math.random() > 0.5 ? "🌸" : "🌼";
      f.style.left = Math.random() * 100 + "vw";
      flowers.appendChild(f);
      setTimeout(() => f.remove(), 7000);
    }
  }, 300);

  // พลุถี่ขึ้น
  setInterval(() => {
    for (let i = 0; i < 3; i++) {
      const fw = document.createElement("div");
      fw.className = "firework";
      fw.style.left = Math.random() * 100 + "vw";
      fw.style.top = Math.random() * 60 + "vh";
      fireworks.appendChild(fw);
      setTimeout(() => fw.remove(), 1300);
    }
  }, 700);
});
