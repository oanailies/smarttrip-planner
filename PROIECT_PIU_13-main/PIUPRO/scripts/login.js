// Date hardcodate pentru autentificare
const validCredentials = {
    email: "admin@email.com",
    password: "1234"
};

// Gestionăm evenimentul de trimitere a formularului
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenim comportamentul implicit al formularului

    // Preluăm valorile introduse
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validăm datele introduse
    if (email === validCredentials.email && password === validCredentials.password) {
        // Salvăm starea de autentificare în localStorage
        localStorage.setItem("isAuthenticated", "true");
        // Redirecționăm către pagina principală
        window.location.href = "index.html";
    } else {
        // Afișăm mesaj de eroare
        document.getElementById("error-message").style.display = "block";
    }
});
