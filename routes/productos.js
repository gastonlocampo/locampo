const express = require('express');
const router = express.Router();
const {getAll, getSingle, crearProducto} = require ('./../models/productos'); /* Acá llamo a mi MODEL desde la ROUTE por DESTRUCTURING.
Lo hago por DESTRUCTURING para después no tener que poner el 'model.' adelante de la función 'getAll()'.
Sin DESTRUCTURING sería así: ----> const model = require ('./../models/productos'); y en la función 'all'
de abajo, tendría que poner: ----> const productos = await model.getAll(); */

/* Dento de esta función 'all', llamamos a la función getAll (es decir, llamamos a nuestra base).
Esta función 'all' va a ser ASYNC, ya que la función 'getAll' que estoy llamando, es ASYNC. */

const all = async(req, res) => {
    const productos = await getAll(); /* Como no le tengo que pasar ningún dato, no le pongo
    nada entre los paréntesis de la función 'getAll'. Pero sí es ASYNC AWAIT y me retorna un valor,
    entonces la llamamos dentro de una variable (en este caso 'productos') y hacemos lo siguiente:
    ----> const productos = await getAll(); y convertimos en ASYNC la función 'all'. 
    
    Entonces 'productos' es un array de objetos que me devuelve TODO. */

    res.render('productos', {productos}); /* Hago un 'res.render()' para que me haga un render de la
    vista 'productos.hbs' y le paso la variable 'productos'. A productos lo paso en un objeto {entre llaves}
    para poder pasar más de un dato. */
}

const single = async(req, res) => {
    const {id} = req.params;
    const [producto] = await getSingle(id); /* Destructuro el producto poniendolo [entre corchetes]. Esto me permite no tener que hacer un #each. Si no lo tuviese destructurado, después en mi view de 'producto.js', tendría que hacer un #each. Como está destructurado, lo puedo mostrar por: ----> producto.nombre, producto.categoria, producto.id. Simplifica un poco. */
    res.render('producto', {producto});
}

const create = async (req, res) => {
    const {body: producto} = req;
    const messageId = await crearProducto(producto);
    res.redirect('/productos');
}

const getCreate = async(req, res) => {
    res.render('createProductos');
}


router.get('/', all);
router.get('/single/:id', single);
router.get('/create', getCreate);
router.post('/create', create);
module.exports = router; 