const nodemailer = require('nodemailer');

/* Acá abajo dejo como default el asunto del mensaje ya que para lo único que voy a usar el envío de mail
es para confirmar el correo una vez registrado el usuario (si en algún momento quiero cambiarlo, lo puedo
sobreescribir pasando el asunto diferente en el otro lugar donde lo vaya a usar).

Además, paso todas las variables (mail, asunto y cuerpo) como un objeto {}, para que despúes cuando quiera
llamarlas por separado en la route 'registro.js', pueda hacerlo. Si no hago esto, cuando yo tenga un valor
default en una de las variables (como en este caso 'asunto'), se me va a hacer lío cuando las llame desde
otro lado porque siempre se respeta el órden de las variables. En cambio, al estar dentro de un objeto,
puedo llamar a las que yo quiera independientemente del orden que tengan y si quiero saltear alguna puedo
hacerlo. */

const send = async({mail, asunto = 'Gracias por registrarte', cuerpo}) => {
    try {        
        const transporter = nodemailer.createTransport({
            service : process.env.MAIL_SERVICE, // || 'gmail'
            auth : {
                user : process.env.MAIL_USER, // || 'mail'
                pass : process.env.MAIL_PASSWORD, // || 'password'
            }    
        });
        const info = {
            from: '<no-reply> BUEN LUNES GOURMET <no-reply>',
            to: mail, // || 'glocampoutn@gmail.com'
            subject: asunto, // || 'Asunto'
            html: cuerpo // || <h2> Gracias por registrarte! </h2>
        };
        const {messageId} = await transporter.sendMail(info);
        return messageId;
    }
    catch(e) {
        console.log(e);
    }

    /* Hasta acá estoy diciendo: con este transporter (que me setea mi servicio, mi usuario y mi password),
    voy a mandar un mail con la información que está abajo en el objeto 'const info = {}' y voy a decirle a 
    JS que espere (await) porque eso tarda. Esto me va a devolver una variable tipo 'messageId' que pasamos
    haciendo destructuring (para sacar esa variable dentro de todas las que me devuelve el 'sendMail' y 
    ponerle el mismo nombre de la variable que me devuelve). Finalmente hacemos un return de messageId (para
    devolverle un valor). */
}

module.exports = {send};