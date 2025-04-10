let currentSlide = 0;
const slides = document.getElementsByClassName('slide');
const len = slides.length;
let slideInterval;
function showSlide(index) {
    if (index >= len) currentSlide = 0;
    else if (index < 0) currentSlide = len - 1;
    else currentSlide = index;
    document.getElementsByClassName('slider')[0].style.transform = `translateX(${-currentSlide * 100}%)`;
}
function changeSlide(direction) {
    clearInterval(slideInterval);
    showSlide(currentSlide + direction);
    startAutoSlide();
}
function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000)
}
startAutoSlide();