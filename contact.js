document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture the form data
    const formData = new FormData(event.target);

    // Validate the form data
    if (validateForm(formData)) {
        // Handle the form data (e.g., send it to the server)
        sendFormData(formData);
    }
});

function validateForm(formData) {
    let isValid = true;

    // Example validation: Check if the email is valid
    const email = formData.get('email');
    if (!validateEmail(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    // Add more validation as needed

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function sendFormData(formData) {
    // Simulate sending data to the server
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').textContent = 'Thank you for contacting us!';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'There was an error submitting your form. Please try again.';
    });
}
