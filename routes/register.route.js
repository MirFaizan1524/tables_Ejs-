const express = require("express");
const router = express.Router();
const registerHandler = require('../controllers/api/registrationhandler.js');
// route to register user:
router.post('/register',registerHandler);

// Route To get registration page:
router.get('/register',(req,res)=>{
    console.log("control in route register");
    res.render('register.ejs');
})

module.exports = router;
