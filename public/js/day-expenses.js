// day-expenses.js

// Define an object to store income and expense data for each date
const dateData = {};

let cumulativeBalance = 0;

// Function to switch tabs
function switchTab(tabId) {
  // Implement logic to display the selected tab content and update styles.
}

// Function to update the selected date and display it
function updateSelectedDate(date) {
  const selectedDateElement = document.getElementById('selected-date');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  selectedDateElement.textContent = date.toLocaleDateString('en-US', options);

  // Clear input fields when switching to a different date
  document.getElementById('transaction-description').value = '';
  document.getElementById('transaction-amount').value = '';
}

// Function to handle previous date button click
document.getElementById('prev-date').addEventListener('click', () => {
  // Get the currently selected date
  const selectedDateElement = document.getElementById('selected-date');
  const currentDate = new Date(selectedDateElement.textContent);

  // Calculate the previous date
  const previousDate = new Date(currentDate);
  previousDate.setDate(previousDate.getDate() - 1);

  // Update the selected date and fetch expenses for the new date
  updateSelectedDate(previousDate);
  updateExpenseList();
});

// Function to handle next date button click
document.getElementById('next-date').addEventListener('click', () => {
  // Get the currently selected date
  const selectedDateElement = document.getElementById('selected-date');
  const currentDate = new Date(selectedDateElement.textContent);

  // Calculate the next date
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);

  // Update the selected date and fetch expenses for the new date
  updateSelectedDate(nextDate);
  updateExpenseList();
});

// Function to update the expense list based on the selected tab and date
function updateExpenseList() {
  // Calculate and update the cumulative balance based on all inputs
  cumulativeBalance = calculateCumulativeBalance();
  document.getElementById('balance-amount').textContent = cumulativeBalance.toFixed(2);

  // Get the income and expense data for the current date
  const selectedDateElement = document.getElementById('selected-date');
  const currentDate = new Date(selectedDateElement.textContent);
  const income = dateData[currentDate] ? dateData[currentDate].income : 0;
  const expense = dateData[currentDate] ? dateData[currentDate].expense : 0;

  // Update the income and expense values in the UI for the current date
  document.getElementById('total-income').textContent = income.toFixed(2);
  document.getElementById('total-expense').textContent = expense.toFixed(2);
}

// Function to calculate and update the cumulative balance
function calculateCumulativeBalance() {
  let cumulativeBalance = 0;

  // Loop through all dates and accumulate income and expenses
  for (const date in dateData) {
    if (dateData.hasOwnProperty(date)) {
      const income = dateData[date].income || 0;
      const expense = dateData[date].expense || 0;
      cumulativeBalance += income - expense;
    }
  }

  return cumulativeBalance;
}

// Function to handle add expense button click
document.getElementById('add-expense').addEventListener('click', () => {
  // Display the pop-up modal
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
});

// Function to handle adding income or expense
document.getElementById('transaction-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the category, description, and amount from the input fields
  const category = document.getElementById('transaction-type').value;
  const description = document.getElementById('transaction-description').value;
  const amount = parseFloat(document.getElementById('transaction-amount').value);

  // Get the currently selected date
  const selectedDateElement = document.getElementById('selected-date');
  const currentDate = new Date(selectedDateElement.textContent);

  // Update the income or expense data for the current date in the dateData object
  if (!dateData[currentDate]) {
    dateData[currentDate] = { income: 0, expense: 0 };
  }

  if (category === 'income') {
    dateData[currentDate].income += amount;
  } else if (category === 'expense') {
    dateData[currentDate].expense += amount;
  }

  // Close the pop-up dialog
  const popup = document.getElementById('popup');
  popup.style.display = 'none';

  // Update the UI with the new expense or income in the appropriate category
  updateExpenseList();
});

// Handle cancel button click
document.getElementById('cancel-transaction').addEventListener('click', () => {
  // Close the pop-up dialog
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
});

// Function to calculate the balance for a given date
function calculateBalance(date) {
  const income = dateData[date] ? dateData[date].income : 0;
  const expense = dateData[date] ? dateData[date].expense : 0;
  return income - expense;
}

// Initial setup - switch to the 'daily' tab and load expenses for the current date.
switchTab('daily');
updateSelectedDate(new Date());
updateExpenseList();
