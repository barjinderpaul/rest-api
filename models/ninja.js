const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating ninja schema and model;

const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name field is required"]
    },
    rank:{
        type:String,
        required:[true,"Rank field is required"]
    },
    available:{
        type:Boolean,
        default:false
    }
});

//collection,schema
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;