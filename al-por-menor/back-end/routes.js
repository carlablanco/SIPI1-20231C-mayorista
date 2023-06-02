const express = require('express');
const router = express.Router();

// Controllers
const UserController = require("./controllers/user.controller")
const productController = require('../controllers/product.controller');

router.post('/login', UserController.userLogIn);
router.post('/register', UserController.userRegister);

router.get('/products/:productId', productController.getProduct);

router.post('/products', productController.createProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
