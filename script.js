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

  // ดอกไม้ลอย
  setInterval(() => {
    const f = document.createElement("div");
    f.className = "flower";
    f.textContent = "🌸";
    f.style.left = Math.random() * 100 + "vw";
    flowers.appendChild(f);
    setTimeout(() => f.remove(), 6000);
  }, 400);

  // พลุ
  setInterval(() => {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 50 + "vh";
    fireworks.appendChild(fw);
    setTimeout(() => fw.remove(), 1200);
  }, 800);
});
