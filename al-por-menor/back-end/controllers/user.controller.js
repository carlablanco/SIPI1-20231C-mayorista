const UserService = require('../services/user.service');

exports.userLogIn = async function (req, res, next) {
    var data = {
        email: req.body.email,
        password: req.body.password
    }

    try {
        var checkPasswd = await UserService.checkUserPassword(data);

        if (!checkPasswd) {
            return res.status(401).json({ message: "Invalid username or password" })
        }

        var user = await UserService.loginUser(data);

        return res.status(200).json(user)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "User login failed" })
    }
}


exports.userRegister = async function (req, res, next) {
    var data = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        supplier: false
    }

    try {
        var userExists = await UserService.userExists(data)

        if (userExists) {
            return res.status(400).json({ message: "E-mail already registered" })
        }

        var user = await UserService.createUser(data)

        return res.status(200).json(user)
    } catch (e) {
        return res.status(500).json({ message: "User creation was unsuccesfull" })
    }
}