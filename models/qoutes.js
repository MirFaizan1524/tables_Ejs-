const mongoose = require('mongoose');
const qouteSchema = new mongoose.Schema({
     qouteName:{
        type:String,
        required:true,
        lowercase:true
     },
     author:{
        type:String,
        required:true,
        default:"unknown"
     },
     postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     } 

},{timestamps:true});
const Qoute = mongoose.model("Qoute",qouteSchema);
module.exports = Qoute;

