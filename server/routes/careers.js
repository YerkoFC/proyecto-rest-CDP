/* ROUTER */
const { Router } = require('express');
const router = Router();

/* CAREER SCHEMA */
const Career = require('../models/career');

/* CONTROLLERS */
const { topTenScores } = require('../controllers/topTenCareers');

/* MIDDLEWARES */
const { getCareers } = require('../middlewares/getCareers');

/* 
*   Código de carrera por PATH PARAM
*/
router.get('/:code', ( req, res ) => {

    let codCareer = req.params.code;

    Career.findOne({ codigo: codCareer }, ( err, careerDB ) => {

        if ( err ) {
            return res.status( 404 ).json({
                ok: false,
                err
            })
        }

        if ( !careerDB ) {
            return res.status( 404 ).json({
                ok: false,
                err: {
                    message: `La carrera con codigo ${ codCareer } no existe!`
                }
            });
        }

        res.json({
            ok: true,
            carrera: careerDB
        });
    })

});


router.post('/scores', getCareers, ( req, res ) => {

    let careers = req.careers,
        scores = req.body;
        
    res.json({
        ok: true,
        info: topTenScores(scores, careers)
    });

}); 


module.exports = router;