const express = require ('express');
const router = express.Router();
const multer = require('multer');
const config = {dest: './public/tmp'};
const upload = multer(config);
const model = require('./../../models/productos');
const modelCategorias = require('./../../models/categorias');
const service = require('./../../services/productos');
const {validateNewProd, validateUpProd} = require('./../../middlewares/admin');

const get = async(req, res) => {
    const productos = await model.getAll();
    res.render('adminProductos', {productos});
}

const showCreate = async(req, res) => {
    const categorias = await modelCategorias.get();
    res.render('createProducto', {categorias});
}

const create = async(req, res) => {
    await service.createProducto(req.body, req.file);
    res.redirect('/admin/productos');
}

const showUpdate = async (req, res) => { // Es async porque necesitamos tener los datos originales. Vamos a llamar al single.
    const {id} = req.params;
    const [producto] = await model.getSingle(id); // Le aplicamos destructuring de array, porque estoy llamando a un solo producto (single). Y aunque sea un solo producto, siempre me devuelve un RowDataPacket.
    const categorias = await modelCategorias.get();
    res.render('updateProducto', {producto, categorias});

}

const update = async(req, res) => {
    await service.updateProducto(req.params.id, req.body, req.file);
    res.redirect('/admin/productos');
    
}

const del = async(req, res) => {
    const {id} = req.params;
    const {insertId} = await model.deleteProducto(id); // Muy importante pasarle el id.
    res.redirect('/admin/productos');
}

router.get('/', get);
router.get('/create', showCreate);
router.post('/create', upload.single("imagen"), validateNewProd, create);
router.get('/update/:id', showUpdate);
router.post('/update/:id', upload.single("imagen"), validateUpProd, update);
router.get('/delete/:id', del);
module.exports = router;