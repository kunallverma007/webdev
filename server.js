const express = require("express");
const app=express();
const cors=require('cors')
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
 },()=>console.log('connected to db'));
//middlewaew
app.use(express.json());

app.use(cors({
     'allowedHeaders': ['Content-Type'],
  'origin': true,
  'preflightContinue': true,
    "allowedMethods":["GET","POST","OPTIONS"],
    "allowedOrigin":"https://ezy-mail-test.herokuapp.com",
}))

app.use('/',authRoute);
app.listen(process.env.PORT || 3001,function(){
    
    console.log("server running on 3001");
});
