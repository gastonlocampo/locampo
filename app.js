const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require ('dotenv');
const session = require('express-session');
const {verifyUser, verifyAdmin} = require('./middlewares/auth');


/* Antes de que se inicialicen las rutas, pongo 'dotenv.config()' para que se puedan cargar todas las
variables de entorno y poder llamarlas desde todo el proyecto (si lo pongo despues, las rutas no van a
poder tomar las variables de entorno y por lo tanto no va a funcionar). */

dotenv.config();
const indexRouter = require('./routes/index'); // -----> indexRouter va a ser nuestro controlador.
const usersRouter = require('./routes/users');
const registro = require('./routes/registro');
const productos = require('./routes/productos');
const usuarios = require('./routes/usuarios');
const login = require('./routes/login');
const contacto = require('./routes/contacto');
const adminIndex = require ('./routes/admin/index');
const adminProductos = require ('./routes/admin/productos');
const adminCategorias = require ('./routes/admin/categorias');
const adminUsuarios = require ('./routes/admin/usuarios');
const adminEmpleados = require ('./routes/admin/empleados');
const adminContacto = require('./routes/admin/contacto');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'passwordSecretoSession',
  cookie: {maxAge: null},
  resave: true,
  saveUninitialized: false
}))

// ALL
app.use('/', indexRouter); // -----> la barra es la ruta y lo segundo es nuestro controlador.
app.use('/users', usersRouter); // -----> Le paso la ruta, la defino, y le paso el controlador.
app.use('/registro', registro);
app.use('/productos', productos);
app.use('/login', login);
app.use('/contacto', contacto);
app.use('/usuarios', verifyUser, usuarios);

// ADMIN
app.use('/admin', verifyAdmin, adminIndex);
app.use('/admin/productos', adminProductos);
app.use('/admin/categorias', adminCategorias);
app.use('/admin/usuarios', adminUsuarios);
app.use('/admin/empleados', adminEmpleados);
app.use('/admin/contacto', adminContacto);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
