document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navlinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
