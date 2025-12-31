const start = document.getElementById("start");
const audio = document.getElementById("bgm");
const flowers = document.getElementById("flowers");
const hearts = document.getElementById("hearts");

start.addEventListener("click", () => {
  start.style.display = "none";
  audio.play();

  // ดอกไม้บานทีละดอก
  let count = 0;
  const flowerInterval = setInterval(() => {
    if (count > 15) return clearInterval(flowerInterval);

    const f = document.createElement("div");
    f.className = "flower";
    f.textContent = "🌸";
    f.style.left = Math.random() * 100 + "vw";
    flowers.appendChild(f);
    count++;
  }, 300);

  // หัวใจลอย
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = "💖";
    h.style.left = Math.random() * 100 + "vw";
    hearts.appendChild(h);

    const start = document.getElementById("start");
const audio = document.getElementById("bgm");

start.addEventListener("click", () => {
  start.style.display = "none";
  audio.play();
});


    setTimeout(() => h.remove(), 6000);
  }, 400);
});
