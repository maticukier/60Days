let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
        if (i === currentIndex) {
            slide.classList.add('active');
        } else if (i === (currentIndex - 1 + totalSlides) % totalSlides) {
            slide.classList.add('prev');
        } else if (i === (currentIndex + 1) % totalSlides) {
            slide.classList.add('next');
        }
    });

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);