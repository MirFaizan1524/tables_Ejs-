const mongoose = require('mongoose');
const registerUSer = new mongoose.Schema({
  fullname:{
   type:String,
   required:true

  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,      
   },
   password:{
    type:String,
     required:true,
     unique:true
   },
   contact:{
    type:String,
    required:true,
   },
   address:{
     type:String,
     required:true
   }
//    avatar:{
//     type:String,
//    }     
});
const User = mongoose.model("User",registerUSer);
module.exports = User;
