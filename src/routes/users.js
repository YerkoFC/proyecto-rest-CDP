const { Router } = require('express');
const router = Router();

const User = require('../models/user');

const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {

    let body = req.body;

    let user = new User({
        username: body.username,
        email: body.useremail,
        password:  bcrypt.hashSync(body.userpassword, 10)
    });

    user.save((err, userDB) => {

        if(err) {
            return res.status(400).json({
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


module.exports = router;