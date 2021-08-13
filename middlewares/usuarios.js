const {schemas} = require('./schemas/usuarios');

const validateLogin = (req, res, next) => {
    const {error, value} = schemas.login.validate(req.body);
    error ? res.render('login', {message: error.details[0].message}) : next();
}

const validateRegistro = (req, res, next) => {
    const {error, value} = schemas.registro.validate(req.body);
    error ? res.render('registro', {message: error.details[0].message}) : next();
}

const validateMensaje = (req, res, next) => {
    const {error, value} = schemas.mensajes.validate(req.body);
    error ? res.render('contacto', {message: error.details[0].message}) : next(); // Usamos un operador ternario. Esto se lee así: si tengo un error --> res.render('view', {message: mensaje de error}). Sino --> next().
}

const validateUpUser = (req, res, next) => {
    const {error, value} = schemas.usuarioUpdate.validate(req.body);
    error ? res.render('updateUsuario', {message: error.details[0].message}) : next();
}

module.exports = {validateLogin, validateRegistro, validateMensaje, validateUpUser};