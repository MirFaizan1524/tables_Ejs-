const express = require('express');
const router = express.Router();
const loginHandler = require('../controllers/api/loginhandler.js');
// Route For Login:
router.post('/login',loginHandler);
// Route For LogOut
router.get('/logout',(req,res)=>{
    console.log(req.session.user);
       req.session.destroy();
    res.status(201).json({
        message:" User logged Out Successfully", 
    })    
})
module.exports = router;



