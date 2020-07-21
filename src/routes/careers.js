/* ROUTER */
const { Router } = require('express');
const router = Router();

/* CAREER SCHEMA */
const Career = require('../models/career');

/* CONTROLLERS */
const { topTenScores } = require('../controllers/topTenCareers');
const { getCareers } = require('../controllers/getCareers');

/* MIDDLEWARES */
const { verifyToken } = require('../middlewares/authentication');

router.get('/code', verifyToken, (req, res) => {

    let codCareer = parseInt(req.query.cod);

    if (!codCareer) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Código de carrera requerido como query param'
            }
        });

    }

    Career.findOne({ codigo: codCareer }, (err, careerDB) => {

        if (err) {
            return res.status(404).json({
                ok: false,
                err
            });
        }

        if (!careerDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: `No existe carrera asociada al código ${codCareer}`
                }
            });
        }

        res.json({
            ok: true,
            career: careerDB
        });

    });

});


router.get('/name', verifyToken, (req, res) => {

    let careersNames = Object.values(req.query);

    Career.find({ carrera: careersNames }, (err, careersDB) => {

        if (err) {
            return res.status(404).json({
                ok: false,
                err
            })
        }

        if (careersDB.length === 0) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: `Las carreras ingresadas no tienen alguna información asociada en la base de datos`
                }
            });
        }

        res.json({
            ok: true,
            careers: careersDB
        });

    });
});


router.post('/scores', verifyToken, async (req, res) => {

    let scores = req.body;

    if (Object.keys(scores).length === 0 || Object.keys(scores).length < 6) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Existen parametros de puntajes faltantes en el body'
            }
        });
    }

    let resp = await getCareers();

    res.json({
        ok: true,
        data: topTenScores(scores, resp.careers)
    });
});

module.exports = router;