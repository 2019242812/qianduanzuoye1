
const express=require('express');
const multer=require('multer');
const path=require('path');
const fs=require('fs');
const server=express();
let Multer=multer({dest: './image'});
server.use(Multer.any());
server.post('/s',function(req,res,next){
    const newname=req.files[0].path+path.parse(req.files[0].originalname).ext
    fs.rename(req.files[0].path,newname,function(err){
        if(err){
            res.send('404')
        }else{
            res.send('200')
        }
    })
})
let post=8080
server.listen(post,'127.0.0.1');