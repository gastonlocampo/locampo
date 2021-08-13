const {schemas : schemasProd} = require('./schemas/adminProd');
const {schemas : schemasEmp} = require('./schemas/adminEmp');
const {schemas : schemasCat} = require('./schemas/adminCat');

const validateNewProd = (req, res, next) => {
    const {error, value} = schemasProd.createProducto.validate(req.body);
    error ? res.render('createProducto', {message: error.details[0].message}) : next();
}

const validateUpProd = (req, res, next) => {
    const {error, value} = schemasProd.updateProducto.validate(req.body);
    error ? res.render('updateProducto', {message: error.details[0].message}) : next();
}

const validateNewEmp = (req, res, next) => {
    const {error, value} = schemasEmp.createEmpleado.validate(req.body);
    error ? res.render('createEmpleados', {message: error.details[0].message}) : next();
}

const validateUpEmp = (req, res, next) => {
    const {error, value} = schemasEmp.updateEmpleado.validate(req.body);
    error ? res.render('updateEmpleado', {message: error.details[0].message}) : next();
}

const validateNewCat = (req, res, next) => {
    const {error, value} = schemasCat.createCategoria.validate(req.body);
    error ? res.render('createCategorias', {message: error.details[0].message}) : next();
}

const validateUpCat = (req, res, next) => {
    const {error, value} = schemasCat.updateCategoria.validate(req.body);
    error ? res.render('updateCategorias', {message: error.details[0].message}) : next();
}



module.exports = {validateNewProd, validateUpProd, validateNewEmp, validateUpEmp, validateNewCat, validateUpCat}