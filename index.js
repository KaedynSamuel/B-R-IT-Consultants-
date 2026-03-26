
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel .list .item');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let current = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.zIndex = i === index ? '1' : '0';
            item.style.opacity = i === index ? '1' : '0';
            item.classList.remove('animate');  // Remove previous animation
        });

        // Wait a moment before re-adding the animation class
        setTimeout(() => {
            items[index].classList.add('animate');  // Add animation class to the new slide
        }, 50);
    }

    function nextSlide() {
        current = (current + 1) % items.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + items.length) % items.length;
        showSlide(current);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initialize the first slide
    showSlide(current);


// Calling startAutoPlay initially to enable auto-slide after the first load
startAutoPlay();


// Handling Blume Popup
function showBlumePopup() {
    document.getElementById('blumePopup').style.display = 'block';
}

document.getElementById('blumeCloseBtn').addEventListener('click', function () {
    document.getElementById('blumePopup').style.display = 'none';
});

// Show the popup after 2 seconds when the page loads
window.onload = function () {
    setTimeout(showBlumePopup, 2000);
};
const navbar = document.querySelector('.navbar');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
let isMenuOpen = false;

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

