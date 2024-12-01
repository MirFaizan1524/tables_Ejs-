const User = require("../../models/registeruser.js");


let displayDashboardDetails = async(req,res)=>{
    console.log(req.user.id,"dashboardDetails")
    let user = await User.findOne({_id:req.user.id});
    console.log(user);  
     res.render('dashboard.ejs',{data:user});                               
}
module.exports = displayDashboardDetails;