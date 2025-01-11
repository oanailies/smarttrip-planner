// signup.js

document.addEventListener('DOMContentLoaded', function () {
    // Log a message to make sure the DOM is fully loaded
    console.log('Document loaded');

    // Get the form and its elements
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

   
    if (!form) {
        console.error('Form not found');
        return;
    }
    if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) {
        console.error('One or more form elements not found');
        return;
    }

    
    function validateForm(event) {
        event.preventDefault();

      
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (name.trim() === "") {
            alert("Numele complet este necesar.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Vă rugăm să introduceți un email valid.");
            return;
        }

        if (password.length < 6) {
            alert("Parola trebuie să aibă cel puțin 6 caractere.");
            return;
        }

        if (confirmPassword.length < 6) {
            alert("Confirmarea parolei trebuie să aibă cel puțin 6 caractere.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Parolele nu se potrivesc.");
            return;
        }

        alert("Înscrierea a fost realizată cu succes!");
        
        window.location.href = 'index.html';  
    }

    form.addEventListener('submit', validateForm);
});
