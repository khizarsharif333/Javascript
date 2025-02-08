let index = 0;

function showSlide() {
  const slides = document.querySelector(".slider-container");
  const slideWidth = document.querySelector(".slider-container img").clientWidth;
  
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll(".slider-container img").length;
  index = (index + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  const totalSlides = document.querySelectorAll(".slider-container img").length;
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}
