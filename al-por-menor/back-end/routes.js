const express = require('express');
const router = express.Router();

// Controllers
const UserController = require("./controllers/user.controller")
const SubscriptionController = require("./controllers/subscription.controller")
const productController = require('../controllers/product.controller');

router.post('/login', UserController.userLogIn);
router.post('/register', UserController.userRegister);

router.get('/user/:userId/subscriptions', SubscriptionController.getUserSubscriptionWithProducts);
router.get('/subscriptions', SubscriptionController.getAllSubscriptionsWithProducts);

router.post('/user/:userId/subscriptions', SubscriptionController.subscribeUser)
router.patch('/user/:userId/subscriptions/:subscriptionId', SubscriptionController.modifyUserSubscription);
router.delete('/user/:userId/subscriptions/:subscriptionId', SubscriptionController.cancelUserSubscription);

router.get('/products/:productId', productController.getProduct);

router.post('/products', productController.createProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
