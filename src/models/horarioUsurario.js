const { Schema, model } = require("mongoose");

const HorarioSchema = new Schema({
    id : {type: String , required: true},
    clase : {type: String, required : true},
    salon : {type: Number, required : true},
    hora : {type: String, required:true},
    date: { type: Date, default: Date.now }
});

module.exports = model('horarioSchema', HorarioSchema );