document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', function() {
            mainNavUl.classList.toggle('active');
            // Opcjonalnie: zmiana ikony hamburgera na X
            if (mainNavUl.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; // Lub użyj ikony X
                 menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰'; // Ikona hamburgera
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Opcjonalnie: Zamknij menu po kliknięciu linku (na mobilnych)
        const navLinks = mainNavUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && mainNavUl.classList.contains('active')) {
                     mainNavUl.classList.remove('active');
                     menuToggle.innerHTML = '☰';
                     menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});