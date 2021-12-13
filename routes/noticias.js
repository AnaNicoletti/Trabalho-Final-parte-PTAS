var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia');

/* GET home page. */
router.get('/', async function (req, res, next) {
  var visualizar = await Noticia.find();
  res.json(visualizar);
});

router.get('/visualizar', async function (req, res, next){
  var visualizar = await Noticia.findById(req.query.id);
  res.json(visualizar);
});

router.get('/contador', async function (req, res, next){
  var visualizar = await Noticia.count();
  res.json({quantidade: visualizar});
});

module.exports = router;