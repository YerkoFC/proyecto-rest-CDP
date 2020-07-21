const jwt = require('jsonwebtoken');

// =====================
//  Verificar token
// =====================

let verifyToken = ( req, res, next ) => {
  
    let token = req.get('token');

    jwt.verify( token, process.env.SEED_JWT , (err, decoded) => {
        
        if( err ) {
            return res.status( 401 ).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        
        next();
    });
};



module.exports = {
    verifyToken
}