var express = require("express");
var router = express.Router();
var productsController = require("../../data/products.json");

router.get("/apiall", productController.apiall);
router.get("/all", productController.index);
router.get("/:id", productController.detail);


//url create - POST (/api/produk)
router.post("/", productController.create);
//url read all - Get ("/api/produk")
router.get("/", productsController.all);
//url read one - detail -GET (/api/produk/:id)
router.get("/:id", productsController.detailproduk);
//url update - PUT (/api/produk/:id)
router.put("/:id", productsController.update);
//url delete - DELETE (/api/produk/:id)
router.delete("/:id", productsController.remove);

module.exports = router;