const express = require('express'); // -----> Esto me va a declarar express.
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // -----> El router me permite hacer solicitudes http y el get es para traer la información.
  res.render('index', { title: 'BUEN LUNES GOURMET' });
});

module.exports = router;
