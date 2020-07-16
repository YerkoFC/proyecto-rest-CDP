const Career = require('../models/career');



let getCareers = ( req, res, next ) => {

    Career.find({ }, ( err, careerDB ) => {

        if( err ) {
            return res.status( 404 ).json({
                ok: false,
                err
            });
        }

        req.careers = careerDB;

        next();
    });

}


module.exports = {
    getCareers
}