const pool = require('./../utils/bd');

// consultas one liner a mi BDD:
const create = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_EMPLEADOS, obj]).then(response => response).catch(err => console.error(err));

const createImages = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_EMPLEADOSIMG, obj]).then(response => response).catch(err => console.error(err));

    
const getAll = async() => {
    try {
        const query = "SELECT e.id, e.nombre, e.apellido, e.telefono, e.direccion, eI.uid AS uuid FROM ?? AS e LEFT JOIN ?? AS eI ON e.id = eI.id_empleado WHERE e.eliminado = 0";
        const params = [process.env.T_EMPLEADOS, process.env.T_EMPLEADOSIMG];
        return await pool.query(query, params);
    }
    catch(error) {
        console.error(error);
    }
}

const getSingle = async(id) => {
    try {
        const query = "SELECT e.id, e.nombre, e.apellido, e.telefono, e.direccion, eI.uid AS uuid FROM ?? AS e LEFT JOIN ?? AS eI ON e.id = eI.id_empleado WHERE e.eliminado = 0 AND e.id = ?";
        const params = [process.env.T_EMPLEADOS, process.env.T_EMPLEADOSIMG, id];
        return await pool.query(query, params);
    }
    catch(error) {
        console.error(error);
    }
}

const deleteEmp = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
        const params = [process.env.T_EMPLEADOS, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const deleteImgEmp = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_empleado = ?"; // Acá cambia la consulta con respecto a la de la función deleteEmpleado. En vez de poner "WHERE id = ?", ponemos "WHERE id_empleado = ?" --> de esta forma, si un empleado tiene más de una imagen, al borrar a mi empleado se borran todas las imagenes asociadas a él.
        const params = [process.env.T_EMPLEADOSIMG, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const updateEmp = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id = ?";
        const params = [process.env.T_EMPLEADOS, obj, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

const updateEmpImg = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_empleado = ?";
        const params = [process.env.T_EMPLEADOSIMG, obj, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}



module.exports = {create, createImages, getAll, getSingle, deleteEmp, deleteImgEmp, updateEmp, updateEmpImg}