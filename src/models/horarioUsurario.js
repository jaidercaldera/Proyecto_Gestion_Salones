const { Schema, model } = require("mongoose");

const HorarioSchema = new Schema({
    email : {type : Object , required : true},
    lunes: { type: [String], required: false },
    martes: { type: [String], required: false },
    miercoles: { type: [String], required: false },
    jueves: { type: [String], required: false },
    viernes: { type: [String], required: false },
    sabado: { type: [String], required: false },
    date: { type: Date, default: Date.now }
});

module.exports = model('horarioSchema', HorarioSchema );