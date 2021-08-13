const pool = require ('./../utils/bd');

const get = async() => {
    const query = "SELECT c.id, c.nombre, c.descripcion, cI.uid AS uuid FROM ?? AS c LEFT JOIN ?? AS cI ON c.id = cI.id_categoria WHERE c.eliminado = 0";
    const params = [process.env.T_CATEGORIAS, process.env.T_CATEGORIASIMG];
    return await pool.query(query, params);
}

const single = async(id) => {
    const query = "SELECT c.id, c.nombre, c.descripcion, cI.uid AS uuid FROM ?? AS c LEFT JOIN ?? AS cI ON c.id = cI.id_categoria WHERE c.eliminado = 0 AND c.id = ?";
    const params = [process.env.T_CATEGORIAS, process.env.T_CATEGORIASIMG, id];
    return await pool.query(query, params);
}

const createCat = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_CATEGORIAS, obj]).then(response => response).catch(err => console.error(err));


const createImgCat = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_CATEGORIASIMG, obj]).then(response => response).catch(err => console.error(err));


const deleteCat = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
        const params = [process.env.T_CATEGORIAS, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const deleteImgCat = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_categoria = ?";
        const params = [process.env.T_CATEGORIASIMG, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const updateCat = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id = ?";
        const params = [process.env.T_CATEGORIAS, obj, id];        
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const updateImgCat = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_categoria = ?";
        const params = [process.env.T_CATEGORIASIMG, obj, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {get, single, createCat, createImgCat, deleteCat, deleteImgCat, updateCat, updateImgCat}