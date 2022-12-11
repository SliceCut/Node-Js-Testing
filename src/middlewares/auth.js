const jwt=require("jsonwebtoken")
const User = require("../models/user")

const auth=async(req,res,next)=>{

    try{
        const idToken=req.header('Authorization')?.replace('Bearer ','')

        if(!idToken) {
            res.status(404).send({message: "Authorization header parameter is required"});
        }

        const decoded=jwt.verify(idToken,process.env.SECRET_KEY);

        if(!decoded) {
            res.status(401).send({message: "Unauthorized"});
        }

        const userid =decoded.id;
        const user = await User.findOne(userid);

        if(!user) {
            res.status(401).send({message: "Unauthorized"});
        }

        next(res);
        
    }catch(e){
        console.log("the error is ", e);
          res.status(401).send({message: "please authenticate."})
    }
}

module.exports=auth