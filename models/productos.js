// Cada tabla de mi BDD tiene su propio MODEL.
// En este MODEL 'productos.js', hago las querys (consultas) de la tabla 'productos' de mi BDD.

const pool = require ('./../utils/bd');

// La función getAll nos trae TODOS nuestros productos.
const getAll = async() => {

    const query = "SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS nombreCategoria, pI.uid AS uuid FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id LEFT JOIN ?? AS pI ON p.id = pI.id_producto WHERE p.eliminado = 0"; /* Acá estoy haciendo una query (consulta). 
        En realidad es un STRING que le doy valor = query. Es muy importante entender cómo se usan los 
        ALIAS (AS) y el JOIN. Como hasta acá es solo un STRING, me falta hacer la conexión con la query: */

    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG];

    return await pool.query(query, params); /* Acá estoy diciendo: que se ejecute esa consulta que está
        arriba (SELECT * FROM productos). POOL viene de 'bd.js' y allí a POOL la habíamos convertido en 
        promesa (con la función PROMISIFY). Como las promesas tardan ----> Entonces convierto esta función
        getAll en ASYNC y pongo el AWAIT antes de 'pool.query'. Además hacemos un RETURN en esa misma línea (return await pool.query(query);), para que me retorne el resultado de esa query. Como hay ASYNC
        AWAIT, tenemos que agregar el TRY CATCH. Pasamos también los PARAMS dentro del pool.query. */
    
}

const getSingle = async(id) => {

    const query = "SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS nombreCategoria, pI.uid AS uuid FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id LEFT JOIN ?? AS pI ON p.id = pI.id_producto WHERE p.eliminado = 0 AND p.id = ?";

    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG, id]; /* Los PARAMS van a ser todos los parámetros que use en la QUERY.
        Todo lo que tenga signo de pregunta (?) en la QUERY, se va a reemplazar por los params que yo vaya pasando (el signo de pregunta (?) representa una variable en PARAMS).
        Los PARAMS siempre se pasan en orden. Lo bueno de los PARAMS es que podemos declarar también nombres de tablas.
        La diferencia es que las tablas se representan con dos signos de pregunta (??) y las variables se representan con uno solo (?).*/
    
    return await pool.query(query, params);
    
}

// A esta función 'crearProducto' le pasamos el 'req.body', es decir, un objeto ----> async(obj).
const crearProd = async(obj) => {
    const query = "INSERT INTO ?? SET ?"; /* Es muy importante que en el form, tenga como 'name' los nombres tal cual de las columnas de mi base de datos (en este caso: 'nombre' y 'id_categoria'). */
    const params = [process.env.T_PRODUCTOS, obj];
    return await pool.query(query, params);
} 

const createProdImages = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_PRODUCTOSIMG, obj]).then(response => response).catch(err => console.error(err));


const updateProd = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, obj, id];
    return await pool.query(query, params);
}

const updateProdImg = async(id, obj) => {
        const query = "UPDATE ?? SET ? WHERE id_producto = ?";
        const params = [process.env.T_PRODUCTOSIMG, obj, id];
        return await pool.query(query, params);
}

const deleteProducto = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, id];
    return await pool.query(query, params);
}

const deleteProdImg = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_producto = ?";
        const params = [process.env.T_PRODUCTOSIMG, id];
        return await pool.query(query, params);
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {getAll, getSingle, crearProd, updateProd, deleteProducto, createProdImages, updateProdImg, deleteProdImg}; /* La exporto para poder usarla en el resto de la aplicación web. Como es una función, se pasa entre llaves {}.

    Desde la ROUTE de 'productos.js', vamos a tener que requerir el MODEL haciendo allí la siguiente línea: 
    ----> const model = require ('./../models/productos');

    Y vamos a llamar al 'getAll' dentro de otra función ('all') haciendo un model.getAll().
    Esa función 'all' también va a ser ASYNC, porque cuando desde una FUNCIÓN X llamo a una FUNCIÓN Y que es ASYNC, tengo que convertir esa FUNCIÓN X en ASYNC también.
    Al ocurrir esto, se le agrega un AWAIT antes del 'model.getAll()'. */ 