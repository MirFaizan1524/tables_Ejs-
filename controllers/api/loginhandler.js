const User = require('../../models/registeruser.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

let loginHandler = async(req,res)=>{

    try{
         const {email,password} = await req.body;  

         console.log(req.body);
         if(!email){
           return  res.status(401).json({
                message:"all Fields are compulsory!",
                error:"Please enter email"
             })    
         }  

         if(!password){
          return  res.status(401).json({
               message:"all Fields are compulsory!",
               error:"Please enter password"
            })    
        }  
            let exisitingUser = await User.findOne({email:email}); 
            if(exisitingUser)
            {
                                                      
                 let result = await bcrypt.compare(password,exisitingUser.password);                 
                 if(result){
                    console.log("User Logged In Successfully");
                   let token = await jwt.sign({id:exisitingUser._id},process.env.SECRET_KEY);
                   console.log(token);  
                    //  res.cookie('jwt',token,{httpOnly:true}); // to use crendentails in browser
                    //  Using Sessions to Enable Protected Communication on Routes 
                     req.session.user = token;                   
                      console.log(req.session.user,"SessionToken");  
                      return res.status(201).json({
                        message:"User Logged In SuccessFully",
                        user:exisitingUser,
                        token: req.session.user
                      })                         
                 }
                 else{
                    console.log("Please Enter Right Password");
                   return res.status(401).json({
                        Message:"Please Enter Correct Password"
                    })
                 }                 
            }

            else{

                 console.log("Please Enter Valid Email");
                 res.status(401).json({
                    Message:"Please Enter Right Email"
                }) 
            }

        }
        catch(err){
              res.status(401).json({
                message:"Error Occurs While Logging In",
                error:err
              })
              console.log(`Error Occurs While Logging In ${err}`);  

        }
}

module.exports = loginHandler;