const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
var engine = require('ejs-blocks');

const indexRoutes = require('./app_toko_online/routes/index');
const productRoutes = require('./app_toko_online/routes/product');


const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_toko_online', 'views'));
app.use(expressLayouts);

// Routes
app.use('/', indexRoutes);
app.use('/produk', productRoutes);

// Public assets (CSS/JS/img kalau ada)
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;