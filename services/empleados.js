/* Este servicio, va a englobar mis acciones de 'empleados' y de 'empleados_imagenes'. Usamos services cuando tenemos más de una acción. En este caso mis acciones son: insertar en la tabla 'empleados', insertar en la tabla 'imagenes_empleados', y poder sacar mi imagen por 'imgFile'. Un service es algo que tiene más de una acción en la BDD. En este caso nos conectamos con 2 tablas diferentes --> vamos a crear un objeto 'empleados' y un objeto 'empleados_imagenes'. En este servicio vamos a:

- insertar empleado --> insert
- subir imagen --> imgFile
- insertar empleadoImagen --> insert */

const {create, createImages, updateEmp, updateEmpImg} = require('./../models/empleados');
const {imgFile} = require('./../utils/fileHandler');

const createEmpleado = async(body, file) => {
    try {
        const {insertId : id_empleado} = await create(body);
        const uid = imgFile(file);
        const obj = {id_empleado, uid};
        const {insertId : idImg} = await createImages(obj);
        return idImg;
    } catch (error) {
        console.error(error);
    }
}

const updateEmpleado = async(id, body, file) => {
    try {
        const id_empleado = await updateEmp(id, body);
        if(file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateEmpImg(id, obj);
            return idImg;
        }
        else{
            return id_empleado;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createEmpleado, updateEmpleado}