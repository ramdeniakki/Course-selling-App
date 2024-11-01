const Router = require('express')
const AdminRouter = Router();


AdminRouter.post('/signup',function(req,res){
    res.json({
               message:"You are Signed up dude!"
           })
       })    
       AdminRouter.post('/signin',function(req,res){
           res.json({
               message:"Signup endpoint"
           })
       })


       AdminRouter.post('/course',function(req,res){
        res.json({
            message:"Course endpoint"
        })
    })

    AdminRouter.put('/course',function(req,res){
        res.json({
            message:"Course list by the User"
        })
    })

    AdminRouter.get('/course/bil',function(req,res){
        res.json({
            message:"This is another endpiint"
        })
    }
)
module.exports = {
    AdminRouter:AdminRouter
}