const Career = require('../models/career');



let getCareers = ( req, res, next ) => {

    Career.find({ }, ( err, careerDB ) => {

        if( err ) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if( !careerDB ){
            return res.status(404).json({
                ok: false,
                err: {
                    message: 'No se logró encontrar carreras en la bd'
                }
            });
        }

        req.careers = careerDB;

        next();
    });

}


module.exports = {
    getCareers
}