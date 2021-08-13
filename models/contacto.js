const pool = require('./../utils/bd');

const getAll = async() => {
    try {
        const query = "SELECT * FROM ?? WHERE eliminado = 0";
        const params = [process.env.T_MENSAJES];
        return await pool.query(query, params);
    }
    catch(error) {
        console.error(error);
    }
}

const getSingle = async(id) => {
    try {
        const query = "SELECT * FROM ?? WHERE eliminado = 0 AND id = ?";
        const params = [process.env.T_MENSAJES, id];
        return await pool.query(query, params);
    }
    catch(error) {
        console.error(error);
    }
}

const createMessage = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_MENSAJES, obj];
    return await pool.query(query, params);
}

const deleteMessage = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_MENSAJES, id];
    return await pool.query(query, params);
}

module.exports = {getAll, getSingle, createMessage, deleteMessage}