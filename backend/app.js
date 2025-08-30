const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
const cors=require('cors');
app.use(cors());
const dotenv=require('dotenv');
dotenv.config();
const userRouter=require('./routes/user.route');
const e = require('express');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/users',userRouter);
module.exports=app;