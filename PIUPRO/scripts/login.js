document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get the email and password entered by the user
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock user data (hardcoded for testing purposes)
    const mockUsers = [
        { email: 'admin@example.com', password: 'admin123', role: 'admin' },
        { email: 'client@example.com', password: 'client123', role: 'client' },
    ];

    // Check if the entered credentials match any mock user
    const user = mockUsers.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect based on user role
        if (user.role === 'admin') {
            window.location.href = 'index.html'; // we need to add admin page
        } else if (user.role === 'client') {
            window.location.href = 'index.html'; // need to link client page
        }
    } else {
        // Show an error if the login credentials are incorrect
        alert('Email sau parolă incorecte.');
    }
});
