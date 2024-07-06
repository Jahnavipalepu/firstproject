var http=require('http')
var fs=require('fs')
var os=require('os')
const {log}=require('console');
http.createServer(
    function(req,res){
        fs.readFile('example.txt',function( error,data){
        res.write(data)
        res.end()

        })
    }
).listen(4002)