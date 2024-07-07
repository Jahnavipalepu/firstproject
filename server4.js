const express=require('express')
const app=express()
app.use(function(req,res,next){
    console.log("middle ware is running");
    next()
})
let honey={
    name:'wild honey',
    mrp:350.00
}
app.get('/honey',function(req,res){
    res.json(honey)
    console.log("server is running");
})
app.listen(8006)