document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Here, you can add code to send the form data (name, email, message) to your server or handle it as needed.

            // Show confirmation message
            confirmationMessage.style.display = 'block';

            // Reset the form
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
