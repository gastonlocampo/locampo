const express = require('express');
const router = express.Router();
const model = require('./../../models/contacto');

const getMensajes = async(req, res) => {
    const mensajes = await model.getAll();
    res.render('adminMensajes', {mensajes})
}

const getMsje = async(req, res) => {
    const {id} = req.params;
    const [mensaje] = await model.getSingle(id); /* Destructuro el producto poniendolo [entre corchetes]. Esto me permite no tener que hacer un #each. Si no lo tuviese destructurado, después en mi view de 'producto.js', tendría que hacer un #each. Como está destructurado, lo puedo mostrar por: ----> producto.nombre, producto.categoria, producto.id. Simplifica un poco. */
    res.render('mensaje', {mensaje});
}

const deleteMsje = async(req, res) => {
    const {id} = req.params;
    const {insertId} = await model.deleteMessage(id);
    res.redirect('/admin/contacto');
}

router.get('/', getMensajes);
router.get('/mensaje/:id', getMsje);
router.get('/delete/:id', deleteMsje);
module.exports = router;