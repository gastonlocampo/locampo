const {crearProd, updateProd, createProdImages, updateProdImg} = require('./../models/productos');
const {imgFile} = require('./../utils/fileHandler');

const createProducto = async(body, file) => {
    try {
        const {insertId : id_producto} = await crearProd(body);
        const uid = imgFile(file);
        const obj = {id_producto, uid};
        const {insertId : idImg} = await createProdImages(obj);
        return idImg;
    } catch (error) {
        console.error(error);
    }
}

const updateProducto = async(id, body, file) => {
    try {
        const id_producto = await updateProd(id, body);
       
        if(file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateProdImg(id, obj);
            return idImg;
        }
        else{
            return id_producto;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createProducto, updateProducto}