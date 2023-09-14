const express = require('express');
const path = require('path'); // Import the 'path' module to work with file paths
const router = express.Router();

// Define the new user route
router.get('/new-user', (req, res) => {
  // Use 'path.join' to construct the absolute file path
  const filePath = path.join(__dirname, '..', 'views', 'new-user.html');
  res.sendFile(filePath);
});

router.get('/edit-account', (req, res) => {
  // Use 'path.join' to construct the absolute file path
  const filePath = path.join(__dirname, '..', 'views', 'edit-account.html');
  res.sendFile(filePath);
});

router.get('/day-expenses', (req, res) => {
  // Use 'path.join' to construct the absolute file path
  const filePath = path.join(__dirname, '..', 'views', 'day-expenses.html');
  res.sendFile(filePath);
});

module.exports = router;
