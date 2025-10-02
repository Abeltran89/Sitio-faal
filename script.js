// ===== Menú hamburguesa =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// ===== Slider dinámico =====
let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slider .slide");
const totalSlides = slides.length;
const prevBtn = document.querySelector(".banner-slider .prev");
const nextBtn = document.querySelector(".banner-slider .next");

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

  // Mover el contenedor de slides
  const slidesContainer = document.querySelector(".banner-slider .slides");
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Cambio automático cada 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

// Iniciar mostrando el primer slide
showSlide(currentSlide);
