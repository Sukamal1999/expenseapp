// public/js/index.js

// Function to populate the currency dropdown
function populateCurrencyDropdown() {
    const currencyDropdown = document.getElementById('currency-dropdown');
  
    // Array of currency codes and their corresponding names
    const currencies = [
      { code: 'USD', name: 'United States Dollar' },
      { code: 'EUR', name: 'Euro' },
      { code: 'JPY', name: 'Japanese Yen' },
      { code: 'INR', name: 'Indian Rupee' }
      // Add more currencies as needed
    ];
  
    // Populate the currency dropdown with options
    currencies.forEach((currency) => {
      const option = document.createElement('option');
      option.value = currency.code;
      option.textContent = `${currency.code} - ${currency.name}`;
      currencyDropdown.appendChild(option);
    });
  }
  
  // Function to handle currency selection
  function handleCurrencySelection() {
    const currencyDropdown = document.getElementById('currency-dropdown');
  
    // Listen for changes in the currency dropdown
    currencyDropdown.addEventListener('change', (event) => {
      const selectedCurrency = event.target.value;
  
      // Implement logic to handle currency selection (e.g., update currency-related settings)
      console.log(`Selected currency: ${selectedCurrency}`);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Call the function to populate the currency dropdown
    populateCurrencyDropdown();
  
    // Function to handle user authentication
    function handleUserAuthentication() {
      const loginButton = document.getElementById('login-button');
      const newUserButton = document.getElementById('new-user-button');
  
      // Listen for the "Log in" button click
      loginButton.addEventListener('click', () => {
        // Redirect to the login page when the "Log in" button is clicked
        window.location.href = '/login'; // Update the URL as needed
      });
  
      // Listen for the "I am a new user" button click
      newUserButton.addEventListener('click', () => {
        // Redirect to the new user registration page when the "I am a new user" button is clicked
        window.location.href = '/new-user'; // Update the URL as needed
      });
    }
  
    // Call the function to set up event listeners for user authentication
    handleUserAuthentication();
  });
  