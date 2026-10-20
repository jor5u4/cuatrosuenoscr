// Funcionalidad para el menú hamburguesa en dispositivos móviles
const navSlide = () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Mostrar / Ocultar Navegación
        nav.classList.toggle('nav-active');

        // Animación del ícono de la hamburguesa (opcional)
        burger.classList.toggle('toggle');
    });

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
}

// Iniciar funciones
navSlide();