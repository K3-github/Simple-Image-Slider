let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalImages = document.querySelectorAll(".slides img").length;
const imagesPerPage = 4;

function moveSlide(direction) {
  const maxIndex = Math.ceil(totalImages / imagesPerPage) - 1;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  }

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}
