const { User } = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash
}

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

exports.userExists = async function (user) {
    try {
        const userExists = await User.findOne({
            where: {
                email: user.email
            },
        });

        if (userExists) {
            return true
        } else {
            return false
        }

    } catch (e) {
        console.log(e)
        throw Error("Error")
    }
}

exports.getUserIdByEmail = async function (user) {
    try {
        const userExists = await User.findOne({
            where: {
                email: user.email
            },
        });

        if (userExists) {
            return userExists
        } else {
            return false
        }

    } catch (e) {
        console.log(e)
        throw Error("Error")
    }
}

exports.createUser = async function (user) {
    try {
        const hashedPassword = await hashPassword(user.password)

        const createdUser = await User.create({
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
            supplier: user.supplier,
            address: user.address,
            city: user.city,
        });

        const token = jwt.sign({
            id: createdUser.id,
            email: createdUser.email
        }, process.env.JWT_SECRET, {
            expiresIn: 5184000
        });

        await createdUser.save()

        return { id: createdUser.id, name: createdUser.name, lastName: createdUser.lastName, email: createdUser.email, address: createdUser.address, city: createdUser.city, supplier: createdUser.supplier, token };

    } catch (e) {
        console.log(e)
        throw Error("Error while Creating User")
    }
}

exports.checkUserPassword = async function (user) {
    try {
        const userSearch = await User.findOne({
            where: {
                email: user.email
            },
        });

        if (!userSearch) return false

        const compare = await comparePassword(user.password, userSearch.password)

        return compare

    } catch (e) {
        console.log(e)
        throw Error("Error while comparing passwords")
    }
}

exports.loginUser = async function (user) {
    try {
        const userSearch = await User.findOne({
            where: {
                email: user.email
            },
        });

        const token = jwt.sign({
            id: userSearch.id,
            email: userSearch.email
        }, process.env.JWT_SECRET, {
            expiresIn: 5184000
        });

        return { id: userSearch.id, name: userSearch.name, lastName: userSearch.lastName, email: userSearch.email, address: userSearch.address, city: userSearch.city, supplier: userSearch.supplier, token };

    } catch (e) {
        console.log(e)
        throw Error("Error while Login User")
    }
}
