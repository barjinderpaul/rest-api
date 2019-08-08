const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();

//Connecting to mongoDB;
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

//middleware
//use middleware with app.use(); orders matter in using middlewares; bodyparse should always be the first;

//Body-Parser is sending back the posted data or pushing the data sent via POST in db in json;
app.use(bodyParser.json());
app.use('/api',routes); //routes will be used after /api;   

//error-handling middleware;
app.use((err,req,res,next)=>{
    // console.log(err);
    res.status(422).send({
        error:err.message
    });
});

//listening to requests;
const PORT = 3000;
app.listen(process.env.port|| PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});