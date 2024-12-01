const mongoose = require('mongoose');
const qouteSchema = new mongoose.Schema({
     QouteName:{
        type:String,
        required:true,
        lowercase:true
     },
     author:{
        type:String,
        default:"unknown"
     },
     postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     } 

},{timestamps:true});
const Qoute = mongoose.model("Qoute",qouteSchema);
module.exports = Qoute;

