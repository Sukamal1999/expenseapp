const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html')); // Serve the index.html page for login
});

app.get('/new-user', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-user.html')); // Serve the new-user.html page for new user registration
});

// Example route for the Edit Account page
app.get('/edit-account', (req, res) => {
  res.sendFile(__dirname + '/views/edit-account.html');
});

app.get('/day-expenses', (req, res) => {
  res.sendFile(__dirname + '/views/day-expenses.html');
});
// Add more routes as needed



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
