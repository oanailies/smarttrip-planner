// login.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Vă rugăm să completați toate câmpurile.");
            return;
        }

        // For now, we assume that any email and password are valid.
      
        localStorage.setItem('userEmail', email); 

        
        window.location.href = 'index.html';  
    });
});
