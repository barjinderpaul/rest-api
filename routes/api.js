const express = require('express');
const router = express.Router();

//Get the list of ninjas from db;
router.get('/ninjas',(req,res)=>{
    res.send({type:'GET'}); //sending back what type of request;
});

//add ninjas;
router.post('/ninjas',(req,res)=>{
    res.send({type:'POST'});
});

//update ninja with id = id;
router.put('/ninjas/:id',(req,res)=>{
    res.send({type:'PUT'});
});

//delete ninja from db;
router.delete('/ninjas/:id',(req,res)=>{
    res.send({type:'DELETE'});
});

module.exports = router;
