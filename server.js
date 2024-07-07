const express=require('express')
const app=express()
app.get('/',function(req,res){
    console.log("server has started");
    res.send("this is my express program")
})
app.listen(8084)