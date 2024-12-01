const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authcontroller.js");
const displayDashboardData = require("../controllers/api/displaydashboard.js");

router.get('/dashboard',authenticateToken,displayDashboardData);

module.exports = router