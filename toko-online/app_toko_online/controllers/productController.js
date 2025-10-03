const products = require('../data/products.json');

exports.getHome = (req, res) => {
  res.render('index', { 
    title: 'Daftar Produk', 
    products: products,
    searchQuery: null
  });
};

exports.searchProducts = (req, res) => {
  const q = req.query.q ? req.query.q.toLowerCase() : '';
  let filteredProducts = products;

  if (q) {
    filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(q)
    );
  }

  res.render('index', {
    title: q ? `Hasil pencarian untuk "${q}"` : 'Daftar Produk',
    products: filteredProducts,
    searchQuery: q
  });
};
