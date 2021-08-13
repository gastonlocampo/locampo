const Joi = require('@hapi/joi');

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty": `Ingrese su nombre de usuario`
        }),
        pass: Joi.string().min(3).max(20).required().messages({
            "string.empty": `Ingrese su contraseña`,
            "string.min": `La contraseña debe tener como mínimo 3 caracteres`,
            "string.max": `La contraseña puede tener como máximo 20 caracteres`
        })
    }),
    registro: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese su nombre`
        }),
        apellido: Joi.string().required().messages({
            "string.empty": `Ingrese su apellido`
        }),
        username: Joi.string().required().messages({
            "string.empty": `Ingrese un nombre de usuario`
        }),
        pass: Joi.string().min(3).max(20).required().messages({
            "string.empty": `Ingrese una contraseña`,
            "string.min": `La contraseña debe tener como mínimo 3 caracteres`,
            "string.max": `La contraseña puede tener como máximo 20 caracteres`
        }),
        mail: Joi.string().email().required().messages({
            "string.email": `Ingrese un email válido`,
            "string.empty": `Ingrese un email`            
        }),
        telefono: Joi.number().required().messages({
            "number.base": "Ingrese un número telefónico",          
        }),
    }),
    mensajes: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese su nombre`
        }),
        apellido: Joi.string().required().messages({
            "string.empty": `Ingrese su apellido`
        }),
        mail: Joi.string().email().required().messages({
            "string.email": `Ingrese un email válido`,
            "string.empty": `Ingrese un email`            
        }),
        asunto: Joi.string().required().messages({
            "string.empty": `Ingrese un asunto para el mensaje`
        }),
        contenido: Joi.string().required().messages({
            "string.empty": `Escriba un mensaje`
        }),
    }),
    usuarioUpdate: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "string.empty": `Ingrese su nombre`
        }),
        apellido: Joi.string().required().messages({
            "string.empty": `Ingrese su apellido`
        }),
        username: Joi.string().required().messages({
            "string.empty": `Ingrese un nombre de usuario`
        }),
        mail: Joi.string().email().required().messages({
            "string.email": `Ingrese un email válido`,
            "string.empty": `Ingrese un email`            
        }),
        telefono: Joi.number().required().messages({
            "number.base": "Ingrese un número telefónico",          
        }),
    }),
}

module.exports = {schemas};