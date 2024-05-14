document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'bharat' && password === '1234') {
            errorMessage.innerText = '';
            document.getElementById('loginModal').style.display = 'none';
        } else {
            errorMessage.innerText = 'Invalid username or password';
        }
    });

    const userType = localStorage.getItem('userType');
    if (!userType) {
        document.getElementById('loginModal').style.display = 'flex';
    } else {
        document.getElementById('loginModal').style.display = 'none';
    }
});
