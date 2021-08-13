const mysql = require('mysql');
const util = require('util');

let pool = mysql.createPool({
    host : process.env.DB_HOST, // || 'HostBDD',
    user : process.env.DB_USER, // || 'UsuarioBDD',
    password : process.env.DB_PASSWORD, // || 'ContraseñaBDD',
    port : process.env.DB_PORT, // || NÚMERO DE PUERTO,
    database : process.env.DB_DATABASE, // || 'nombreBDD',
});

// Este pool no nos va a admitir PROMESAS. Para que admita promesas, usamos UTIL:
pool.query = util.promisify(pool.query);

/* 
.QUERY es una función de POOL y es para ejecutar la consulta. Necesitamos una PROMESA para la consulta,
porque la consulta tarda (es para lo que vamos a tener que esperar).

.PROMISIFY es una función de UTIL que nos permite convertir lo que querramos en PROMESA. Por
eso convertimos a pool.query en PROMESA (la consulta queda convertida en promesa). 
*/

// Para poder acceder a esto (el pool) desde otra parte del programa (aplicación web), lo exporto:
module.exports = pool;