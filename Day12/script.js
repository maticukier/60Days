
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav ul');


if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
