const { allProducts, createProduct, deleteProducts, esrchProduct, singleProduct, updateProduct } = require ("./product.controller.js");
const { Router } = require ("express");
const router = Router()

router.get("/", allProducts);
// get single product
router.get("/:id", singleProduct);
//add user
router.post("/", createProduct);
// update user
router.patch("/:id", updateProduct);
// delete user
router.delete("/:id", deleteProducts);

router.get("/:word", esrchProduct);

module.exports =  router;