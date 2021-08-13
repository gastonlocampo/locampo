const fs = require('fs'); // Importo un módulo que es propio de NODE que se llama 'file system'('fs'). Sirve para poder leer/escribir/borrar archivos de mi pc (trabaja sobre nuestro propio sistema/pc). Nosotros lo usamos porque vamos a querer LEER nuestro archivo temporal (tmp) para después transformarlo en imagen. Y este archivo temporal lo vamos a querer escribir en 'fileNameOut'. Le quiero dar valor 'imagen' al archivo temporal.

const {v4 : uuid} = require('uuid');
const allowExtensionsImg = ["png", "jpg", "jpeg"];

const saveFile = ({mimetype, path}, allowE, destFolder = `./public/images`) => {
    try{
        const [type, extension] = mimetype.split("/");
        if(!allowE.includes(extension)) throw "Formato incorrecto";
        const uid = uuid();
        const fileName = `${uid}.${extension}`; // Así lo guardamos en la base.

        const fileNameOut = `${destFolder}/${fileName}`;
        
        fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut)); // createReadStream me va a LEER el archivo temporal (tmp). Lo que queremos leer es el 'path', que es una de las variables que me devuelve el objeto {file}. Por eso ponemos el 'file.' antes del path.

        // el 'pipe' lo que hace es un flujo unidireccional de lectura a escritura. Mientras lee el 'path' lo va escribiendo en este nuevo destino (la carpeta de destino que hayamos elegido).

        // y el createWriteStream lo que hace es ESCRIBIR este archivo temporal (tmp) ya como imagen en la carpeta de destino que hayamos seleccionado, con su nombre y su extensión correspondientes.

        fs.unlink(path, (err) => console.log(err)); // acá borramos el archivo temporal, y me devuelve un callback por si hay algún error.

        return fileName; // Retorno el fileName para poder acceder a él después desde mi ruta y mandarlo a la BDD.
    }     
    catch(e){

        fs.unlink(path, (err) => console.log(err)); // repetimos esta línea acá para que el archivo temporal (tmp) se borre también aunque haya algún error. Porque sino, por ejemplo, si alguien sube un archivo '.exe' en vez de un archivo con una extensión válida de imagen (como 'png', 'jpg', etc.), si el temporal no se borra, va a quedar ahí guardado innecesariamente.
        console.log(e);
    }
}

const imgFile = (file) => saveFile(file, allowExtensionsImg);


module.exports = {imgFile}