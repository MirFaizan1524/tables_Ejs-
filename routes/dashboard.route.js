const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authcontroller.js");
const displayDashboardData = require("../controllers/api/displaydashboard.js");
const Qoute = require('../models/qoutes.js');
router.get('/dashboard',authenticateToken,displayDashboardData);
// Route For Posting Quotes:
router.post('/dashboard/enterqoutes',authenticateToken,async(req,res)=>{
    try{
        const{qouteName,author} = await req.body;
        console.log(req.user.id,"Posted By!"); 
           if(!qouteName){
              return res.status(401).json({
                message:"All Fields Are Compulsory",
                error:"Please Enter Any Qoute!"
              })   
              }  
              let userQoute = await new Qoute({
                qouteName:qouteName,
                author:author,
                postedBy:req.user.id
              }).save(); 
                if(userQoute){
                    res.status(201).json({
                        message:"Qoute Entered Successfully",
                        body:userQoute   
                      })      
                }                                      

        
    }
    catch(err){
        res.status(500).json({
            message:"Error Occured",
        })
    }
     
      
    
});



module.exports = router;