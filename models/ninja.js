const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating ninja schema and model;

const GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinate:{
        type:[Number],
        index:"2dsphere"
    }
});

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
    },
    geometry: GeoSchema

});

//collection,schema
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;