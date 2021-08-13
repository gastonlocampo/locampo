const Joi = require('@hapi/joi');

const schemas = {
    createEmpleado: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese el nombre`
        }),
        apellido: Joi.string().required().messages({
            "string.empty": `Ingrese el apellido`
        }),
        telefono: Joi.number().required().messages({
            "number.base": "Ingrese un número telefónico",          
        }),
        direccion: Joi.string().required().messages({
            "string.empty": `Ingrese una dirección`
        }),
    }),
    updateEmpleado: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese el nombre`
        }),
        apellido: Joi.string().required().messages({
            "string.empty": `Ingrese el apellido`
        }),
        telefono: Joi.number().required().messages({
            "number.base": "Ingrese un número telefónico",          
        }),
        direccion: Joi.string().required().messages({
            "string.empty": `Ingrese una dirección`
        }),
    }),
}

module.exports = {schemas}