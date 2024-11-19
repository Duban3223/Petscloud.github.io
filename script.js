
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const infobar = document.querySelector('.info-bar');
const card = document.querySelector('.contenido-inicio');
const DOG2 = document.querySelector('.DOG2');
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento se propague al documento
        this.querySelector('.dropdown-content').classList.toggle('active');
    });
});

// Función para comprobar si un elemento es visible en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar la animación
function checkVisibility() {
    const section = document.querySelector('.collares-seccion');
    if (isInViewport(section)) {
        section.classList.add('visible'); // Añade la clase para activar la animación
        window.removeEventListener('scroll', checkVisibility); // Elimina el evento para evitar múltiples ejecuciones
    }
}

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Función para ocultar el dropdown al hacer scroll
window.addEventListener("scroll", function() {
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent.classList.contains('active')) {
            dropdownContent.classList.remove('active'); // Oculta el dropdown al hacer scroll
        }
    });
});

// Cerrar el dropdown al hacer clic fuera de él
document.addEventListener("click", function(event) {
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent.classList.contains('active') && !dropdown.contains(event.target)) {
            dropdownContent.classList.remove('active'); // Oculta el dropdown al hacer clic fuera de él
        }
    });
});

// Añadir el evento de scroll
window.addEventListener('scroll', checkVisibility);

// Ejecuta la comprobación al cargar la página
document.addEventListener('DOMContentLoaded', checkVisibility);
