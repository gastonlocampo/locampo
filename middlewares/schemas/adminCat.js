const Joi = require('@hapi/joi');

const schemas = {
    createCategoria: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese el nombre de la categoría`
        }),
        descripcion: Joi.string().required().messages({
            "string.empty": `Ingrese una descripción para la categoría`
        }),
    }),
    updateCategoria: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese el nombre de la categoría`
        }),
        descripcion: Joi.string().required().messages({
            "string.empty": `Ingrese una descripción para la categoría`
        }),
    }),
}

module.exports = {schemas}