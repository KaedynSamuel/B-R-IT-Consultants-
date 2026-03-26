document.addEventListener('DOMContentLoaded', function() {
    const titleText = "Welcome to B&R IT Consultants";  // Set your title here
    const titleElement = document.getElementById('animated-title');  // Make sure this ID is correct
  
    let i = 0;
    
    function typeWriter() {
        if (i < titleText.length) {
            titleElement.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust typing speed here
        }
    }
  
    typeWriter(); // Start the typing effect
  });
  