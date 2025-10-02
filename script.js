// ========== MENÚ HAMBURGUESA ==========
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// ========== SLIDER ==========
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (slides.length === 0) return;

  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
}

// Botones de navegación (opcional)
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
}

// Cambio automático cada 5 segundos
if (slides.length > 0) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Mostrar el primer slide al cargar
  showSlide(currentSlide);
}
