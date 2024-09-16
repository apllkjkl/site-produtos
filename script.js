// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].style.transform = `translateX(-${100 * currentIndex}%)`;
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // Authentication page script
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
