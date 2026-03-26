
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      thankYou.style.display = "block";

      // Auto-hide after 5 seconds
      setTimeout(() => {
        thankYou.style.display = "none";
      }, 5000);
    } else {
      alert("There was a problem submitting your form. Please try again.");
    }
  });
  
