// navigation.js
document.addEventListener('DOMContentLoaded', () => {
    // Responsive navigation menu toggle
    const menuButton = document.getElementById('menu-button');
    const primaryNav = document.getElementById('primary-nav');
    
    menuButton.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', 
            menuButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });
    
    // Add 'aria-expanded' attribute to menu button for accessibility
    menuButton.setAttribute('aria-expanded', 'false');
    
    // Close menu when window is resized to larger screen
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            primaryNav.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
});
