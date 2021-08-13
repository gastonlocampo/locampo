const express = require ('express');
const router = express.Router();
const {auth} = require('./../models/usuarios');
const sha1 = require('sha1');
const {validateLogin} = require('./../middlewares/usuarios');

const showLogin = (req, res) => {
    res.render('login');
}

const login = async(req, res) => {
    try{
        let {username, pass} = req.body; // Acá le doy LET, porque una constante (CONST) yo no la puedo cambiar después. Y como acá abajo le doy un valor nuevo a 'pass' (porque voy a decir que pass ahora es igual al sha1 de la pass; o sea, que es igual a la pass encriptada), no puedo darle valor CONST a esta variable.
        pass = sha1(pass);
        const logged = await auth(username, pass);
        if (logged.length === 0) {
            res.render('login', {message: 'Datos incorrectos'})
        }
        else {
            const [{id, admin}] = logged; // Hacemos destructuring. Esto es igual a --> const id = logged[0].id;
            req.session.user = id;
            req.session.admin = admin;
            if(admin) {
                res.redirect('/admin');
            }
            else {
                res.redirect('/usuarios');
            }
        }
    } catch(err){
        console.error(err);
    }
}

router.get('/', showLogin);
router.post('/', validateLogin, login);
module.exports = router;

/* Otra forma de hacer el login (usando operadores ternarios):

    logged.length === 0 // Esta es la condición.
        ? res.redirect('/login') // Esto (?) es si se cumple la condición.
        : null; // Esto (:) es el ELSE.
        
*/