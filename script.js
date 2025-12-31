const overlay = document.getElementById("start");
const audio = document.getElementById("bgm");

let started = false;

overlay.addEventListener("click", () => {
  if (started) return;
  started = true;

  overlay.style.display = "none";

  audio.play().catch(err => {
    console.log("Audio blocked:", err);
  });
});
