const {createCat, createImgCat, updateCat, updateImgCat} = require('./../models/categorias');
const {imgFile} = require('./../utils/fileHandler');

const createCategoria = async(body, file) => {
    try {
        const {insertId : id_categoria} = await createCat(body);
        const uid = imgFile(file);
        const obj = {id_categoria, uid};
        const {insertId : idImg} = await createImgCat(obj);
        return idImg;
    } catch (error) {
        console.error(error);
    }
}

const updateCategoria = async(id, body, file) => {
    try {
        const id_categoria = await updateCat(id, body);
        
        if(file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateImgCat(id, obj);
            return idImg;
        }
        else{
            return id_categoria;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createCategoria, updateCategoria}