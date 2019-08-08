const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();
/*
// HTTP Methods;    
// GET, POST, PUT, DELETE

//Requests;
app.get('/api',(req,res)=>{
    console.log("GET Request"); //Or simple use morgan module;
    // res.end();  //Makes browser stops waiting for any response
    // res.send("GET Request");
    res.send({name:"localhost:3000"});  //sending back json
});
*/

//middleware
//use middleware with app.use(); orders matter in using middlewares; bodyparse should always be the first;
app.use(bodyParser.json());
app.use('/api',routes); //routes will be used after /api;   

//Body-Parser is sending back the posted data or pushing the data sent via POST in db in json;

//listening to requests;
const PORT = 3000;
app.listen(process.env.port|| PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});