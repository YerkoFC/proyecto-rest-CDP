const Career = require('../models/career');
const jsonFile = require('./carreras.json');

const mongoose =  require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/careers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    .then( () => {
        console.log('BD CONNECTED!');
    })
    .catch( err => console.log(err));

let saveInDB = (jsonFile) => {

    jsonFile.forEach( (el) => {

        let career = new Career({
            carrera: el.nombreCarrera,
            codigo: el.codigo,
            nem: el.nem,
            ranking: el.ranking,
            matematica: el.matematica,
            lenguaje: el.lenguaje,
            histcien: el.cienciasHistoria,
            avgLengMat: el.avgLengmat,
            minimoPond: 0,
            vacantes: el.vacantes,
            primero: el.primero,
            ultimo: el.ultimo
        });
        career.save((err, careerDB) => {
            console.log({
                carrera: careerDB
            })
        });
    })
}

saveInDB(jsonFile);


