const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = {dest: './public/tmp'};
const upload = multer(config);
const service = require('./../../services/empleados');
const model = require('./../../models/empleados');
const {validateNewEmp, validateUpEmp} = require('./../../middlewares/admin');


const getTodos = async(req, res) => {
    const empleados = await model.getAll();
    res.render('adminEmpleados', {empleados});
}

const create = async(req, res) => {
    await service.createEmpleado(req.body, req.file);
    res.redirect('/admin/empleados');
}

const del = async(req, res) => {
    const {id} = req.params;
    const messageEmp = await model.deleteEmp(id);
    const messageImgEmp = await model.deleteImgEmp(id);
    res.redirect('/admin/empleados');
}

const getUpdate = async(req, res) => {
    const [empleado] = await model.getSingle(req.params.id);
    res.render('updateEmpleado', {empleado})
}

const update = async(req, res) => {
    await service.updateEmpleado(req.params.id, req.body, req.file);
    res.redirect('/admin/empleados');
}

router.get('/', getTodos);
router.get('/create', (req, res) => res.render('createEmpleados')); // hago esto para no hacer una función separada de 'showCreate' (hago todo en esta misma línea del router.get).
router.post('/create', upload.single("imagen"), validateNewEmp, create);
router.get('/delete/:id', del);
router.get('/update/:id', getUpdate);
router.post('/update/:id', upload.single("imagen"), validateUpEmp, update);
module.exports = router;