document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form and confirmation message elements
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Add an event listener to the form's submit event
    contactForm.addEventListener('submit', function(e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the values of the name, email, and message fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Check if all fields are filled out
        if (name && email && message) {
            // If all fields are filled out, you can add code here to send the form data (name, email, message) to your server or handle it as needed.

            // Show the confirmation message
            confirmationMessage.style.display = 'block';

            // Reset the form
            contactForm.reset();
        } else {
            // If any field is empty, show an alert
            alert("Please fill out all fields.");
        }
    });
});
