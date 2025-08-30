const http=require('http')
const express=require('express');
const app=require('./app');
const post=process.env.PORT || 3000;
const server=http.createServer(app);
const db=require('./db/db')

server.listen(post,()=>{
    console.log(`Server is running on port ${post}`);
});