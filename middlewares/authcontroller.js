const jwt = require('jsonwebtoken');
   // This code was based on Cookies

// let authenticateToken = async(req,res,next)=>{
//     let token = req.cookies.jwt;
//     if(token){
//          let AuthenticUser = await jwt.verify(token,process.env.SECRET_KEY); 
//            console.log(AuthenticUser,"AUTHENTIC_USER");
//              req.user = AuthenticUser;
//              next();    
//     }
//     else{
//         return res.status(401).json({
//             message:"Unauthorized Person,Access Denied"
//         })
//     }
// }
// Now handling it by use of Sesssions:
   let authenticateToken = async(req,res,next)=>{
    let token = req.session.user;
        console.log(token,"Token in Authentication");   
        if(token){
             let AuthenticUser = await jwt.verify(token,process.env.SECRET_KEY); 
                 if(AuthenticUser){
                    console.log(AuthenticUser,"AUTHENTIC_USER");
                    req.user = AuthenticUser;
                    next();   
                 } 
                 else{
                     res.status(401).json({
                        message:"Please Login First"
                     })  
                 } 
                
        }
        else{
            return res.status(401).json({
                message:"Unauthorized Person,Access Denied"
            })
        }


   }


module.exports = authenticateToken;

