const filterButtons = document.querySelectorAll('.filters button');
const images = document.querySelectorAll('.gallery .image');

function filterImages(category) {
    images.forEach(image => {
        const imageCategory = image.getAttribute('data-category');
        if (category === 'all' || imageCategory === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterImages(category);
    });
});


filterImages('all');