function showPopup() {
    document.getElementById("custom-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("custom-popup").style.display = "none";
}

// Ensure your form has the id "contact-form"
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
    emailjs.sendForm('service_v8v92oo', 'template_uw7nui4', this)
        .then(function() {
            showPopup(); // Show the custom popup
        }, function(error) {
            console.log('FAILED...', error);
        });
});



