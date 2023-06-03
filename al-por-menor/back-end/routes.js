const express = require('express');
const router = express.Router();

// Controllers
const userController = require("./controllers/user.controller")
const productController = require('./controllers/product.controller');

router.post('/login', userController.userLogIn);
router.post('/register', userController.userRegister);

router.get('/products/:productId', productController.getProduct);
// User Address routes
router.post('/user/address', userController.createUserAddress);
router.patch('/user/address/:addressId', userController.updateUserAddress);
router.delete('/user/address/:addressId', userController.deleteUserAddress);

// User Payment Method routes
router.post('/user/payment-method', userController.createUserPaymentMethod);
router.patch('/user/payment-method/:paymentMethodId', userController.updateUserPaymentMethod);
router.delete('/user/payment-method/:paymentMethodId', userController.deleteUserPaymentMethod);

router.post('/products', productController.createProduct);
router.patch('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
