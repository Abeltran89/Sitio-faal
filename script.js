// ===== Menú hamburguesa =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// ===== Slider =====
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slideIndex) * 100}%)`;
  });
}

next.addEventListener("click", () => { slideIndex++; showSlide(slideIndex); });
prev.addEventListener("click", () => { slideIndex--; showSlide(slideIndex); });

// Auto Slide
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

showSlide(slideIndex);
