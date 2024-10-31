const express = require('express')
const app = express();

app.post('/user/signup',function(req,res){
    res.json({
        message:"You are Signed up dude!"
    })
})

app.post('/user/signup',function(req,res){
    res.json({
        message:"Signup endpoint"
    })
})

app.get('/user/purchase',function(req,res){
    res.json({
        message:"user-Purchase endpoint"
    })
})

app.get('/course/purchase',function(req,res){
    res.json({
        message:"Course-Purchase endpoint"
    })
})

app.get('/courses',function(req,res){
    res.json({
        message:"Courses endpoint"
    })
})





app.listen(3000);