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
app.use(express.json());

app.use(cors())
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/',authRoute);
app.listen(process.env.PORT || 3001,function(){
    
    console.log("server running on 3001");
});
