const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Nombre de usuario requerido']
    }, 
    email: {
        type: String,
        unique: true,
        required: [true, 'Email requerido']
    },
    password: {
        type: String,
        required: [true, 'Contraseña requerida']
    }
});


userSchema.methods.toJSON = function(){
    let usuario = this;
    let usuarioObject = usuario.toObject();
    delete usuarioObject.password;
    return usuarioObject;
}

userSchema.plugin(uniqueValidator, {message: '{PATH} debe ser único'});

module.exports = model('user', userSchema);
