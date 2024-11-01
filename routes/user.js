 const {Router} = require("express");
 const userRouter = Router();

 userRouter.post('/signup',function(req,res){
 res.json({
            message:"You are Signed up dude!"
        })
    })    
    userRouter.post('/signin',function(req,res){
        res.json({
            message:"Signup endpoint"
        })
    })
    userRouter.get('/purchase',function(req,res){
        res.json({
            message:"user-Purchase endpoint"
        })
    })
    
module.exports = {
  userRouter:userRouter
}