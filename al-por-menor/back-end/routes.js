const express = require('express');
const router = express.Router();

// Controllers
const UserController = require("./controllers/user.controller")

router.post('/login', UserController.userLogIn);
router.post('/register', UserController.userRegister);

module.exports = router;
