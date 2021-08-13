const express = require ('express');
const router = express.Router();
const multer = require('multer');
const config = {dest: './public/tmp'};
const upload = multer(config);
const service = require('./../../services/categorias');
const model = require('./../../models/categorias');
const { validateNewCat, validateUpCat } = require('../../middlewares/admin');

const getAll = async(req, res) => {
    const categorias = await model.get();
    res.render('adminCategorias', {categorias});
}

const create = async(req, res) => {
    await service.createCategoria(req.body, req.file);
    res.redirect('/admin/categorias');
}

const del = async(req, res) => {
    const {id} = req.params;
    const messageCat = await model.deleteCat(id);
    const messageImgCat = await model.deleteImgCat(id);
    res.redirect('/admin/categorias');
}

const getUpdate = async(req, res) => {
    const [categoria] = await model.single(req.params.id);
    res.render('updateCategorias', {categoria})
}

const update = async(req, res) => {
    await service.updateCategoria(req.params.id, req.body, req.file);
    res.redirect('/admin/categorias');
}


router.get('/', getAll);
router.get('/create', (req, res) => res.render('createCategorias'));
router.post('/create', upload.single("imagen"), validateNewCat, create);
router.get('/delete/:id', del);
router.get('/update/:id', getUpdate);
router.post('/update/:id', upload.single("imagen"), validateUpCat, update);
module.exports = router;