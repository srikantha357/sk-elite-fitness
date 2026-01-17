// Simple automatic slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate next slide index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to next slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);
