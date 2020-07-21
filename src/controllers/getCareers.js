const Career = require('../models/career');

let getCareers = async function () {

    let careers = await Career.find({});

    if (careers.length === 0) {
        throw new Error("No se han encontrado documentos en la colección de 'careers'");
    }

    return {
        careers
    };
}

module.exports = {
    getCareers
}