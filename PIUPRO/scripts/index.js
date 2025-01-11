
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button');
    const headerContainer = document.querySelector('.header-container');
    
    const userEmail = localStorage.getItem('userEmail');
    
    if (userEmail) {
        headerContainer.innerHTML = `
            <h1>Bine ai venit, ${userEmail}!</h1>
            <a href="logout.html" class="login-button">Logout</a>
        `;
    } else {
        headerContainer.innerHTML = `
            <h1>Bine ai venit la Vacanța Perfectă!</h1>
            <a href="login.html" class="login-button">Log In</a>
        `;
    }
});
