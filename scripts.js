// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const additionalInfoForm = document.getElementById('additional-info-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const idNumber = document.getElementById('id-number').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            if (verifyID(idNumber)) {
                alert('ID verified successfully');
                location.href = 'additional-info.html';
            } else {
                alert('ID verification failed');
            }
        });
    }

    if (additionalInfoForm) {
        additionalInfoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const maritalStatus = document.getElementById('marital-status').value;
            const childrenNumber = document.getElementById('children-number').value;
            const incomeSource = document.getElementById('income-source').value;

            console.log('Additional Information:', {
                maritalStatus,
                childrenNumber,
                incomeSource
            });

            alert('Additional information submitted');
            location.href = 'user.html';
        });
    }
    
    function verifyID(id) {
        // Placeholder function for ID verification logic
        return true;
    }

    
});


const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('show');
    });