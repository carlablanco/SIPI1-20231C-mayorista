const express = require('express');
const router = express.Router();

// Controllers
const UserController = require("./controllers/user.controller")
const SubscriptionController = require("./controllers/subscription.controller")

router.post('/login', UserController.userLogIn);
router.post('/register', UserController.userRegister);

router.get('/user/:userId/subscriptions', SubscriptionController.getUserSubscriptionWithProducts);
router.get('/subscriptions', SubscriptionController.getAllSubscriptionsWithProducts);

router.post('/user/:userId/subscriptions', SubscriptionController.subscribeUser)
router.patch('/user/:userId/subscriptions/:subscriptionId', SubscriptionController.modifyUserSubscription);
router.delete('/user/:userId/subscriptions/:subscriptionId', SubscriptionController.cancelUserSubscription);

module.exports = router;
