const express = require('express');
const router = express.Router();
const model = require('./../models/contacto');
const {validateMensaje} = require('./../middlewares/usuarios');

const contacto = async(req, res) => {
    res.render('contacto');
}

const enviarMensaje = async(req, res) => {
    const {body: mensaje} = req;
    let duplicado = false;

    const mensajeFinal = {
        nombre: mensaje.nombre,
        apellido: mensaje.apellido,
        mail: mensaje.mail,
        telefono: mensaje.telefono,
        asunto: mensaje.asunto,
        contenido: mensaje.contenido,
    }

    const mensajesExistentes = await model.getAll();
    mensajesExistentes.forEach(mensaje => {
        if(mensaje.mail == mensajeFinal.mail && mensaje.asunto == mensajeFinal.asunto && mensaje.contenido == mensajeFinal.contenido){
            duplicado = true;
            res.render('contacto', {message: 'Este mensaje ya fue enviado anteriormente. Por favor ingrese un mensaje diferente o aguarde a ser contactado por algun miembro de nuestro equipo. Muchas gracias. '})
        }
    });

    if(!duplicado){
        const {messageId} = await model.createMessage(mensaje);
        res.render('contacto', {message: 'Su mensaje fue enviado exitosamente! A la brevedad nos pondremos en contacto con usted!'});
    }    
}
 
router.get('/', contacto);
router.post('/', validateMensaje, enviarMensaje);
module.exports = router;