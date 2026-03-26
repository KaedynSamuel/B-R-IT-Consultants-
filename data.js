// Function to check if the user has scrolled to the bottom of the page
window.onscroll = function() {
    var docHeight = document.documentElement.scrollHeight; // Total height of the document
    var winHeight = window.innerHeight; // Height of the viewport
    var scrollPosition = window.scrollY; // Scroll position from the top

    // Check if user is at the bottom
    if (scrollPosition + winHeight >= docHeight - 1) {
        document.getElementById('footer').classList.add('show'); // Show the footer
    } else {
        document.getElementById('footer').classList.remove('show'); // Hide the footer
    }
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

// Toggle mobile menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileNavToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

mobileNavToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});

// Prevent scroll when menu is open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
    }
});


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