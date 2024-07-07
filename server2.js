const express=require('express')
const app=express()
app.get('/profile/:username',function(req,res){
    res.send(`the profile is of ${req.params.username}`)
})
app.listen(8086)