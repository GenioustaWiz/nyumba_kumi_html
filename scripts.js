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
// ID VERIFICATION
    const validIds = ['12345', '54321', '67890', '09876'];
    const form = document.getElementById('verification-form');
    const idInput = document.getElementById('id-number');
    const errorMessage = document.getElementById('error-message');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const idNumber = idInput.value;

            if (validIds.includes(idNumber)) {
                alert('ID verified');
                window.location.href = 'additional-info.html';
            } else {
                errorMessage.classList.remove('hidden');
                idInput.classList.add('error');
                form.querySelector('button').classList.add('error');
                alert('ID Unverified. please try again');
            }
        });
    }
    
});


function toggleMenu() {
    var nav = document.querySelector('header nav');
    nav.classList.toggle('show');
}