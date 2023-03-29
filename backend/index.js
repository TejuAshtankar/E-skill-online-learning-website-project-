const express=require('express');
const app=express();
const connection =require('./connection')
const cors=require('cors');
const userRoute=require('./routes/user')

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use('/user' , userRoute);


module.exports=app;