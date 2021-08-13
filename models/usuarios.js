const pool = require ('./../utils/bd');

const getAll = async() => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [process.env.T_USUARIOS];
    return await pool.query(query, params);
}
const getSingle = async(id) => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0 AND id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}

const createUsuario = async(obj) => {
    const query = "INSERT INTO ?? SET ?"; /* Es muy importante que en el form, tenga como 'name' los nombres tal cual de las columnas de mi base de datos (en este caso: 'nombre' y 'id_categoria'). */
    const params = [process.env.T_USUARIOS, obj];
    return await pool.query(query, params);

}

const createUserImg = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_USUARIOSIMG, obj]).then(response => response).catch(err => console.error(err));


const updateUsuario = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_USUARIOS, obj, id];
    return await pool.query(query, params);
}

const updateUserImg = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_usuario = ?";
        const params = [process.env.T_USUARIOSIMG, obj, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const deleteUser = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
        const params = [process.env.T_USUARIOS, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const deleteUserImg = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_usuario = ?"; // Acá cambia la consulta con respecto a la de la función deleteEmpleado. En vez de poner "WHERE id = ?", ponemos "WHERE id_empleado = ?" --> de esta forma, si un empleado tiene más de una imagen, al borrar a mi empleado se borran todas las imagenes asociadas a él.
        const params = [process.env.T_USUARIOSIMG, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const verifyUsuario = async(uid) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?";
    const params = [process.env.T_USUARIOS, uid];
    return await pool.query(query, params);
}

const auth = async(username, pass) => {
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND pass = ? AND habilitado = 1 AND eliminado = 0";
    const params = [process.env.T_USUARIOS, username, pass];
    return await pool.query(query, params);
}

const usEliminados = async() => {
    const query = "SELECT * FROM ?? WHERE eliminado = 1";
    const params = [process.env.T_USUARIOS];
    return await pool.query(query, params);
}

const adminUsers = async(id) => {
    const query = "SELECT * FROM ?? WHERE admin = 1 AND eliminado = 0 AND id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}

const setAdmin = async(id) => {
    const query = "UPDATE ?? SET admin = 1 WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}

module.exports = {getAll, getSingle, createUsuario, updateUsuario, verifyUsuario, auth, usEliminados, adminUsers, setAdmin, createUserImg, updateUserImg, deleteUser, deleteUserImg}