// Script to manage navbar style on scroll
const menuBar = document.querySelector('.menu-bar');

// Detect scrolling and change navbar style
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        menuBar.classList.add('scrolled');
    } else {
        menuBar.classList.remove('scrolled');
    }
});
