/* =============================
   1) ANIMAÇÃO DE ENTRADA (FADE)
============================= */

const cards = document.querySelectorAll(".bancada");

cards.forEach(card => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add("show");
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(card);
});


/* =============================
   2) PARALLAX VERTICAL SUAVE
============================= */

window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.1;

    document.querySelectorAll(".bancada img").forEach(img => {
        img.style.setProperty("--parallax-offset", offset + "px");
        img.classList.add("parallax-img");
    });
});


/* =============================
   3) PARTÍCULAS
============================= */

const particles = document.getElementById("particles");

function createParticle() {
    const p = document.createElement("span");
    p.className = "particle";

    const size = Math.random() * 4 + 2;
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.animationDuration = 4 + Math.random() * 6 + "s";
    p.style.opacity = Math.random();

    particles.appendChild(p);

    setTimeout(() => p.remove(), 10000);
}

setInterval(createParticle, 120);

const particleStyle = document.createElement("style");
particleStyle.textContent = `
.particle {
    position: absolute;
    bottom: -10px;
    background: rgba(0,120,255,0.7);
    border-radius: 50%;
    animation: floatUp linear forwards;
    box-shadow: 0 0 8px rgba(0,120,255,0.8);
}
@keyframes floatUp {
    from { transform: translateY(0); }
    to { transform: translateY(-120vh); }
}`;
document.head.appendChild(particleStyle);


/* =============================
   4) SONS NO BOTÃO
============================= */

function loadSound(src) {
    const audio = new Audio(src);
    audio.volume = 0.25;
    return audio;
}

const hoverSound = loadSound("hover.wav");
const clickSound = loadSound("click.wav");

document.querySelectorAll(".neon-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
