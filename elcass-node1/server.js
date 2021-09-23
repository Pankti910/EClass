const express=require("express");
const User=require("./Model/User");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const jwt=require("jsonwebtoken");
const path=require("path");
const routes=require("./Route/UserRoute");

require("dotenv").config({
    path:path.join(__dirname,".env")

});

const app=express();
const PORT=process.env.PORT || 9000;

mongoose.connect('mongodb://localhost:27017/CRUDdb').then(()=>{console.log("db connected")});
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(async(req,res,next)=>{
    
    
    if(req.headers["x-access-token"])
    {
        const accessToken=req.headers["x-access-token"];
        const{userId,exp}=jwt.verify(accessToken,process.env.JWT_SECRET);
       // console.log(userId);
        if(exp<Date.now().valueOf()/1000)
        {
            return res.status(401).json({error:"JWt token has expired please login again"});
        }
       res.locals.loggedInUser=await User.findById(userId);
        const user=res.locals.loggedInUser;
        //console.log( user);
        next();
        
        } else{
            next();
    }
   
});
app.use('/',routes);
app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
});
