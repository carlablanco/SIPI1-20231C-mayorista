const UserService = require('../services/user.service');

const UserAddress = require('../models').UserAddress;
const UserPaymentMethod = require('../models').UserPaymentMethod;

async function userLogIn(req, res, next) {
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


async function userRegister(req, res, next) {
    var data = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false
    }

    try {
        var userExists = await UserService.userExists(data)

        if (userExists) {
            return res.status(400).json({ message: "E-mail already registered" })
        }

        var user = await UserService.createUser(data)

        return res.status(200).json(user)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "User creation was unsuccesfull" })
    }
}

// Create a new user address
async function createUserAddress(req, res, next) {
    const { userId, addressAlias, province, locality, street, number, postalCode, apartmentNumberAndFloor, cellphoneNumber } = req.body;
  
    try {
      const userAddress = await UserAddress.create({ userId, addressAlias, province, locality, street, number, postalCode, apartmentNumberAndFloor, cellphoneNumber });
      res.status(201).json(userAddress);
    } catch (error) {
      next(error);
    }
  }
  
  // Update an existing user address
  async function updateUserAddress(req, res, next) {
    const { addressId } = req.params;
    const { addressAlias, province, locality, street, number, postalCode, apartmentNumberAndFloor, cellphoneNumber } = req.body;
  
    try {
      const [rowsUpdated, [updatedUserAddress]] = await UserAddress.update(
        { addressAlias, province, locality, street, number, postalCode, apartmentNumberAndFloor, cellphoneNumber },
        { where: { id: addressId }, returning: true }
      );
  
      if (rowsUpdated === 0) {
        throw new Error('User address not found');
      }
  
      res.json(updatedUserAddress);
    } catch (error) {
      next(error);
    }
  }
  
  // Delete a user address
  async function deleteUserAddress(req, res, next) {
    const { addressId } = req.params;
  
    try {
      const rowsDeleted = await UserAddress.destroy({
        where: { id: addressId },
      });
  
      if (rowsDeleted === 0) {
        throw new Error('User address not found');
      }
  
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
  
  // Create a new user payment method
  async function createUserPaymentMethod(req, res, next) {
    const { userId, cardAlias, cardHolderName, cardNumber, expirationDate, CVV } = req.body;
  
    try {
      const userPaymentMethod = await UserPaymentMethod.create({ userId, cardAlias, cardHolderName, cardNumber, expirationDate, CVV });
      res.status(201).json(userPaymentMethod);
    } catch (error) {
      next(error);
    }
  }
  
  // Update an existing user payment method
  async function updateUserPaymentMethod(req, res, next) {
    const { paymentMethodId } = req.params;
    const { cardAlias, cardHolderName, cardNumber, expirationDate, CVV } = req.body;
  
    try {
      const [rowsUpdated, [updatedUserPaymentMethod]] = await UserPaymentMethod.update(
        { cardAlias, cardHolderName, cardNumber, expirationDate, CVV },
        { where: { id: paymentMethodId }, returning: true }
      );
  
      if (rowsUpdated === 0) {
        throw new Error('User payment method not found');
      }
  
      res.json(updatedUserPaymentMethod);
    } catch (error) {
      next(error);
    }
  }
  
  // Delete a user payment method
  async function deleteUserPaymentMethod(req, res, next) {
    const { paymentMethodId } = req.params;
  
    try {
      const rowsDeleted = await UserPaymentMethod.destroy({
        where: { id: paymentMethodId },
      });
  
      if (rowsDeleted === 0) {
        throw new Error('User payment method not found');
      }
  
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
  
  module.exports = {
    createUserAddress,
    updateUserAddress,
    deleteUserAddress,
    createUserPaymentMethod,
    updateUserPaymentMethod,
    deleteUserPaymentMethod,
    userLogIn,
    userRegister,
  };