const express = require('express');
const router = express.Router();
const loginHandler = require('../controllers/api/loginhandler.js');
router.post('/login',loginHandler);

module.exports = router;



