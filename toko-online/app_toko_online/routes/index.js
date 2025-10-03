var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

// GET search
router.get('/search', function (req, res, next) {
  const q = (req.query.q && req.query.q !== 'null')
    ? req.query.q.toLowerCase()
    : "";

  let filteredProducts;
  if (!q) {
    filteredProducts = products; // jika query kosong tampilkan semua
  } else {
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }

  res.render('index', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    query: req.query.q || ""   // <<< penting biar value input tidak null
  });
});

// Halaman utama
router.get("/", function(req, res) {
  res.render("index", {
    title: "Toko Online Sederhana",
    products: products,
    query: ""   // kosong default
  });
});

module.exports = router;