const express = require('express');
const router = express.Router();

// Controllers
const UserController = require("./controllers/user.controller")
const productController = require('../controllers/product.controller');

router.post('/login', UserController.userLogIn);
router.post('/register', UserController.userRegister);

router.get('/products/:productId', productController.getProduct);
// User Address routes
router.post('/user/address', userController.createUserAddress);
router.put('/user/address/:addressId', userController.updateUserAddress);
router.delete('/user/address/:addressId', userController.deleteUserAddress);

// User Payment Method routes
router.post('/user/payment-method', userController.createUserPaymentMethod);
router.put('/user/payment-method/:paymentMethodId', userController.updateUserPaymentMethod);
router.delete('/user/payment-method/:paymentMethodId', userController.deleteUserPaymentMethod);

router.post('/products', productController.createProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
