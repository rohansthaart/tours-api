require('dotenv').config();
require('express-async-errors');
const express = require("express");
const cors=require("cors");

const app = express();

const connectDB = require("./db/connect");



const toursRoute = require('./routes/tours')
const queryRoute = require('./routes/query')

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }    //git
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())



app.get('/',(req,res)=>{
    res.send('hello')
})

// routes

app.use('/api/v1/tours', toursRoute)

app.use('/api/v1/query', queryRoute)


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

const port = process.env.PORT || 3001;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>
        console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error);
    }
};

start();