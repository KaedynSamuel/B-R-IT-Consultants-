document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Deactivate all tabs and buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Activate the clicked tab and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;

        // Show the image at the current index
        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        }

        // Event listeners for next/prev buttons
        const prevButton = slider.closest('.image-slider').querySelector('.prev');
        const nextButton = slider.closest('.image-slider').querySelector('.next');

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        // Initialize the first image
        showImage(currentIndex);
    });
});