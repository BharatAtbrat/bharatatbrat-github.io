document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the entered username and password are correct
        if (username === 'Admin' && password === 'admin') {
            // Login successful, hide the error message and allow access
            errorMessage.innerText = '';
            document.getElementById('loginModal').style.display = 'none';
        } else {
            // Login failed, display an error message
            errorMessage.innerText = 'Invalid username or password';
        }
    });

    // Prevent content interaction until logged in
    const userType = localStorage.getItem('userType');
    if (!userType) {
        document.getElementById('loginModal').style.display = 'flex';
    } else {
        // If user is already logged in, hide the login modal
        document.getElementById('loginModal').style.display = 'none';
    }
});
