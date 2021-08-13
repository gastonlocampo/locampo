const {createUsuario, updateUsuario, createUserImg, updateUserImg} = require('./../models/usuarios');
const {imgFile} = require('./../utils/fileHandler');

const createUser = async(body, file) => {
    try {
        const {insertId : id_usuario} = await createUsuario(body);
        const uid = imgFile(file);
        const obj = {id_usuario, uid};
        const {insertId : idImg} = await createUserImg(obj);
        return idImg;
    } catch (error) {
        console.error(error);
    }
}

const updateUser = async(id, body, file) => {
    try {
        const id_usuario = await updateUsuario(id, body);
        if(file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateUserImg(id, obj);
            return idImg;
        }
        else{
            return id_usuario;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createUser, updateUser}