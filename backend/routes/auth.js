const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Mock login
  if (email === 'admin@nexyovi.tech' && password === 'admin123') {
     res.json({ token: 'mock-jwt-token', user: { name: 'Admin', role: 'admin' } });
  } else {
     res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
