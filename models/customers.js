const mongoose = require('mongoose');
const Agents = require('../models/agents');
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    customerNumber:{
        type:Number,
        required:true,
        unique:true
    },
    geolocation:{
        latitude:{
            type:Number,
            required:true
        },
        longitude:{
            type:Number,
            required:true
        }
    },
    aadhaarNumber:{
        type:Number
    },
    pancardNumber:{
        type:String
    },
    bankPassbook:{
        fileUrl:Boolean
    },
    agentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Agents",
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Customers",customerSchema);