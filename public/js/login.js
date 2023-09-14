// public/js/login.js

// Function to handle form submission
function handleLoginFormSubmit(event) {
    event.preventDefault();

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your login logic here (e.g., send a POST request to the server)

    // For demonstration purposes, log the input values to the console
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
}

// Listen for form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLoginFormSubmit);
