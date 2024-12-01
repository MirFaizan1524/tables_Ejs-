const jwt = require('jsonwebtoken');

let authenticateToken = async(req,res,next)=>{
    let token = req.cookies.jwt;
    if(token){
         let AuthenticUser = await jwt.verify(token,process.env.SECRET_KEY); 
           console.log(AuthenticUser,"AUTHENTIC_USER");
             req.user = AuthenticUser;
             next();    
    }
    else{
        return res.status(401).json({
            message:"Unauthorized Person,Access Denied"
        })
    }
 
  
  

}
module.exports = authenticateToken;

