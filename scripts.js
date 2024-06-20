// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    
    
    const form1 = document.getElementById('additional-info-form');
    if (form1) {
        form1.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your form handling logic here
            alert('Form submitted');
            window.location.href = 'user.html';
        });
    }

    function verifyID(id) {
        // Placeholder function for ID verification logic
        return true;
    }

    
});


function toggleMenu() {
    var nav = document.querySelector('header nav');
    nav.classList.toggle('show');
}