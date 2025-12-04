// Sons
const hoverSound = document.getElementById("hover-sound");
const clickSound = document.getElementById("click-sound");
const btn = document.getElementById("btn");

// efeito hover
btn.addEventListener("mouseover", () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
});

// clique
btn.addEventListener("click", (e) => {
  e.preventDefault(); // evitar reload de teste
  clickSound.currentTime = 0;
  clickSound.play();
});

// Partículas (misturadas: neve + fogo + poeira)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let particles = [];
const colors = [
  'rgba(255,255,255,0.8)', // neve
  'rgba(255,50,50,0.8)',   // fogo
  'rgba(200,180,120,0.6)'  // poeira
];

function initParticles(count = 200) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();
