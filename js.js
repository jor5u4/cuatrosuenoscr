const WHATSAPP_NUMBER = '50660283489';

// Funcionalidad para el menú hamburguesa en dispositivos móviles
const navSlide = () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-links');
    const navLinks = nav.querySelectorAll('a');

    const setOpen = (open) => {
        nav.classList.toggle('nav-active', open);
        burger.classList.toggle('toggle', open);
        burger.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('no-scroll', open);
    };

    burger.addEventListener('click', () => setOpen(!nav.classList.contains('nav-active')));

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    navLinks.forEach(link => link.addEventListener('click', () => setOpen(false)));
};

// Sombra del encabezado al hacer scroll
const headerScroll = () => {
    const header = document.getElementById('site-header');
    const update = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', update, { passive: true });
    update();
};

// Botón "Consultar" en cada producto con mensaje de WhatsApp prellenado
const productButtons = () => {
    document.querySelectorAll('.card[data-product]').forEach(card => {
        const product = card.dataset.product;
        const text = encodeURIComponent(`Hola, vengo de la página web y me interesa: ${product}`);
        const link = document.createElement('a');
        link.className = 'card-btn';
        link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = '<i class="fab fa-whatsapp"></i> Consultar';
        card.querySelector('.card-body').appendChild(link);
    });
};

// Animación de aparición al hacer scroll
const revealOnScroll = () => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(el => observer.observe(el));
};

// Visor de imágenes ampliadas
const lightbox = () => {
    const box = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const close = () => {
        box.classList.remove('open');
        box.setAttribute('aria-hidden', 'true');
    };

    document.querySelectorAll('.card-media img').forEach(thumb => {
        thumb.addEventListener('click', () => {
            img.src = thumb.src;
            img.alt = thumb.alt;
            box.classList.add('open');
            box.setAttribute('aria-hidden', 'false');
        });
    });

    box.addEventListener('click', (e) => {
        if (e.target !== img) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
};

// Iniciar funciones
navSlide();
headerScroll();
productButtons();
revealOnScroll();
lightbox();
