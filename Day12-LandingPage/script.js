// Seleccionar el botón del menú y la lista de navegación
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav ul');

// Verificar si los elementos existen
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar el menú
    });
}
