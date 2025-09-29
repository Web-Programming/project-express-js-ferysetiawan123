var express = require('express');
var router = express.Router();
var products = require("../data/products.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Toko Online Sederhana',
    products: products,
    search:""
  });
});

/* GET search product. */
router.get('/search', function(req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : "";

  console.log("Search query:", q);

  // filtering product
  let filtered = products;
  if (q) {
    filtered = products.filter(p => p.name.toLowerCase().includes(q));
  }

  res.render('index', { 
    title: 'Hasil Pencarian', 
    products: filtered, 
    query: req.query.q || "" 
  });
});

console.log("Route index loaded");


module.exports = router;
