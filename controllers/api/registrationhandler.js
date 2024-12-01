const User = require('../../models/registeruser');
const bcrypt  =require("bcryptjs");
let registerHandler = async(req,res)=>{
    try{
        console.log(req.body);
        const {fullname,email,password,contact,address} = req.body;
        if(!fullname){
            console.log('please Enter All Fields');   
           res.status(401).json({
             message:"please Enter All Fields",
             error:"fullName Required"
           })                                   
         } 
         
         if(!email){
            console.log('please Enter All Fields');   
           res.status(401).json({
             message:"please Enter All Fields",
             error:"Email Required"
           })                                   
         } 
         if(!password){
            console.log('please Enter All Fields');   
           res.status(401).json({
             message:"please Enter All Fields",
             error:"Password Required"
           })                                   
         } 

         if(!address){
            console.log('please Enter All Fields');   
           res.status(401).json({
             message:"please Enter All Fields",
             error:"Address Required"
           })                                   
         } 

         if(!contact){
            console.log('please Enter All Fields');   
           res.status(401).json({
             message:"please Enter All Fields",
             error:"contact Required"
           })                                   
         } 


           const existingUser  = await User.findOne({$or:[{email:email},{contact:contact}]});
            if(existingUser){
               res.status(401).json({
                 message:"USer Already Exists!"
               })     
            }            
            else{
                   let getHashCode = await bcrypt.hash(password,10);
                   console.log(getHashCode);   
                  let registerNewUser = await new User({
                    fullname:fullname,
                    email:email,
                    password:getHashCode,
                    contact:contact,
                    address:address

                  }).save()                        
                 console.log(registerNewUser);
                    res.status(200).json({
                        message:"User Registered Successfully!",
                        newUser:registerNewUser
                    })             
            } 
                
    }   
    catch(err){
        console.log(err);
    }


}
module.exports = registerHandler;