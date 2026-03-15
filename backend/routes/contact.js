const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.submitMessage);
router.get('/', contactController.getAllMessages); // Should be protected in prod

module.exports = router;
