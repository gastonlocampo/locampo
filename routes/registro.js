const express = require('express');
const router = express.Router();
const {send} = require ('./../services/mail'); // Acá importo mi servicio.
const model = require ('./../models/usuarios');
const sha1 = require ('sha1'); // Acá importo mi función sha1.
const {v4: uuid} = require ('uuid'); // Acá importo mi función uuid.
const {validateRegistro} = require('./../middlewares/usuarios');


const register = (req, res) => {
    res.render('registro');
};
const create = async(req, res) => {
    
    /* ----> 'body' es un objeto adentro de req.
    ----> En este caso, 'body' trae un objeto solo con los datos del USUARIO (nombre y password).
    
    Entonces, en vez de poner esto:

    const usuario = req.body;
    console.log(usuario);

    Hago DESTRUCTURING y le doy a 'body' el valor 'usuario': */

    const {body : usuario} = req; // Acá estoy diciendo que 'req.body' va a valer 'usuario'.
    let duplicado = false;
    const uid = uuid();

    const usuarioFinal = { // Este es el usuario final que voy a pasar a mi BDD.
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        username: usuario.username,
        pass: sha1(usuario.pass),
        mail: usuario.mail,
        confirmacionCorreo: uid,
        telefono: usuario.telefono,
    }

    // Verificar si ya existe el mail o el nombre del usuario:
    const usuariosExistentes = await model.getAll();
    usuariosExistentes.forEach(usuario => {
        if(usuario.username == usuarioFinal.username || usuario.mail == usuarioFinal.mail){
            duplicado = true;
            res.render('registro', {message: 'El nombre de usuario y/o mail ingresado ya existen'})
        }
    });

    if(!duplicado){
        const agregado = await createUsuario(usuarioFinal);
        send({
            mail : usuarioFinal.mail,
            cuerpo : 
            `<h1> ¡Bienvenido/a, ${usuarioFinal.username}!</h1>
            <a href="http://localhost:3000/registro/verify/${usuarioFinal.confirmacionCorreo}"> Confirme su registro haciendo click aquí. </a>`,
        }); 
        /*Acá se completa la explicación que empecé en 'mail.js' sobre pasar las variables como un objeto. */

        res.redirect('/productos');
    }
};

const verify = async(req, res) => {
    const {uid} = req.params;
    const messageId = await verifyUsuario(uid);
    res.redirect('/productos');
}

router.get('/', register);
router.post('/', validateRegistro, create);
router.get('/verify/:uid', verify);
module.exports = router;

/* El DESTRUCTURING, en este caso me permite no poner el '.body' en el req:

ASÍ QUEDARÍA SIN DESTRUCTURING ----> const usuario = req.body;


Como 'body' es un objeto dentro de 'req', en vez de llamarlo 
con el '.body' al lado del 'req', lo llamo antes ya destructurado
(al momento de declarar la const). Es decir, declaro el objeto {body}
y le doy el valor 'req' con el igual (=). A su vez, a ese objeto 'body'
le doy el valor (nombre) de 'usuario' con los dos puntos (:).


ASÍ QUEDARÍA CON DESTRUCTURING ----> const {body : usuario} = req; */