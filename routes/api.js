const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
//Get the list of ninjas from db;
router.get('/ninjas',(req,res,next)=>{
    res.send({type:'GET'}); //sending back what type of request;
});

//add ninjas;
router.post('/ninjas',(req,res,next)=>{
    // console.log(req.body);
    
    //var ninja = new Ninja(req.body); //Creating a new user/ninja
    //ninja.save(); //saves it to the collection ninja 
    //same as above
    Ninja.create(req.body).then((ninja)=>{
        res.send(ninja);
    }).catch(next); 
    
});

//update ninja with id = id;
router.put('/ninjas/:id',(req,res,next)=>{
    res.send({type:'PUT'});
});

//delete ninja from db;
router.delete('/ninjas/:id',(req,res,next)=>{
    res.send({type:'DELETE'});
});

module.exports = router;
