const Joi = require('@hapi/joi');

const schemas = {
    createProducto: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese el nombre del producto`
        }),
        descripcion: Joi.string().required().messages({
            "string.empty": `Ingrese una descripción para el producto`
        }),
        precio: Joi.number().required().messages({
            "number.base": "Ingrese el precio del producto",          
        }),
        stock: Joi.number().required().messages({
            "number.base": "Ingrese el stock del producto",          
        }),
        id_categoria: Joi.string().required().messages({
            "string.empty": `Seleccione una categoría para el nuevo producto`
        }),
    }),
    updateProducto: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese el nombre del producto`
        }),
        descripcion: Joi.string().required().messages({
            "string.empty": `Ingrese una descripción para el producto`
        }),
        precio: Joi.number().required().messages({
            "number.base": "Ingrese el precio del producto",          
        }),
        stock: Joi.number().required().messages({
            "number.base": "Ingrese el stock del producto",          
        }),
        id_categoria: Joi.string().required().messages({
            "string.empty": `Seleccione una categoría para el producto`
        }),
    }),
}

module.exports = {schemas};