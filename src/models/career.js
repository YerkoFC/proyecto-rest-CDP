const { Schema, model } = require('mongoose');

const careerSchema = new Schema({
    carrera: String,
    codigo: Number,
    nem: Number,
    ranking: Number,
    matematica: Number,
    lenguaje: Number,
    histcien: Number,
    avgLengMat: Number,
    minimoPond: Number,
    vacantes: Number,
    primero: Number,
    ultimo: Number 
});


module.exports = model('career', careerSchema);