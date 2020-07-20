const { Router } = require('express');
const router = Router();

const User = require('../models/user');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {

    let body = req.body;

    let user = new User({
        username: body.username,
        email: body.useremail,
        password:  bcrypt.hashSync(body.userpassword, 10)
    });

    user.save( (err, userDB) => {

        if( err ) {
            return res.status( 400 ).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            userDB
        });
    });
});


router.post('/signin', (req, res) => {

    let body = req.body;

    User.findOne({ email: body.email }, ( err, userDB)  => {

        if( err ){
            return res.status( 500 ).json({
                ok: false,
                err
            });
        }

        if( !userDB ) {
            return res.status( 400 ).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrectos'
                }
            });
        }

        if( !bcrypt.compareSync(body.password, userDB.password) ){
            return res.status( 400 ).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrectos'
                }
            });
        }

        let token = jwt.sign({
            usuario: userDB
        }, process.env.SEED_JWT, { expiresIn: 60 * 60 * 24 * 30 });

        res.json({
            ok: true,
            usuario: userDB,
            token
        });
    })

});

module.exports = router;