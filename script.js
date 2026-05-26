document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito na Navbar ao realizar Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Animação de Entrada Suave (Intersection Observer)
    // Seleciona todos os elementos com a classe .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Usa o viewport como área de intersecção
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a transição no CSS
                entry.target.classList.add('visible');
                // Deixa de observar após a animação acontecer uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});