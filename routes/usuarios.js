const express = require ('express');
const router = express.Router();
const service = require('./../services/usuarios');
const {getSingle, updateUsuario, deleteUser} = require('./../models/usuarios');
const {validateUpUser} = require('./../middlewares/usuarios');

const getUser = async(req, res) => {
    const [usuario] = await getSingle(req.session.user);
    res.render('usuario', {usuario});
}

const getUpdate = async(req, res) => {
    const {id} = req.params;
    const [usuario] = await getSingle(id);
    res.render('updateUsuario', {usuario})
}

const update = async(req, res) => {
    const {id} = req.params;
    const {body: obj} = req;
    const {insertId} = await updateUsuario(id, obj);
    res.redirect('/usuarios');
}

const del = async(req, res) => {
    const {id} = req.params;
    const {insertId} = await deleteUser(id);
    res.redirect('/');
}


router.get('/', getUser);
router.get('/update/:id', getUpdate);
router.post('/update/:id', validateUpUser, update);
router.get('/delete/:id', del);
module.exports = router