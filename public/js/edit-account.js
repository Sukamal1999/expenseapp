// edit-account.js

// This file contains JavaScript for edit-account.html.

// Function to handle form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const accountIdentification = document.getElementById('account-identification').value;
  const bankDetails = document.getElementById('bank-details').value;
  const openingBalance = document.getElementById('opening-balance').value;
  const accountColor = document.getElementById('account-color').value;

  // Implement logic to handle form submission (e.g., send data to the server)
});

// Function to handle the "Next" button click and redirect to day-expenses.html
function redirectToExpenses() {
const NextButton = document.getElementById('Next-button');
NextButton.addEventListener ('click', () => {
  window.location.href = '/day-expenses'; // Update the URL as needed
});
}

// Call the function to set up the event listener for the "Next" button click
redirectToExpenses();
