const express = require ('express');
const router = express.Router();
const model = require('./../../models/usuarios');

const all = async(req, res) => {
    const usuarios = await model.getAll();
    res.render('adminUsuarios', {usuarios});
}

router.get('/', all);
module.exports = router;