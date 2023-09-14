// routes/login.js
const express = require('express');
const router = express.Router();

// Define the login route
router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: 'views' }); // Serve the index.html file from the 'views' directory
});

module.exports = router;
