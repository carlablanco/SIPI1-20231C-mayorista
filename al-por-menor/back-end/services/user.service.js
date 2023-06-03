const { User } = require("../models");
const UserAddress = require('../models').UserAddress;
const UserPaymentMethod = require('../models').UserPaymentMethod;

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

async function userExists(user) {
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

async function getUserIdByEmail(user) {
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

async function createUser(user) {
    try {
        const hashedPassword = await hashPassword(user.password)

        const createdUser = await User.create({
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
            isAdmin: user.isAdmin,
        });

        const token = jwt.sign({
            id: createdUser.id,
            email: createdUser.email
        }, process.env.JWT_SECRET, {
            expiresIn: 5184000
        });

        await createdUser.save()

        return { id: createdUser.id, name: createdUser.name, lastName: createdUser.lastName, email: createdUser.email, isAdmin: createdUser.isAdmin, token };

    } catch (e) {
        console.log(e)
        throw Error("Error while Creating User")
    }
}

async function checkUserPassword(user) {
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

async function loginUser(user) {
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

// Create a new user address
async function createUserAddress(userId, addressData) {
    try {
      const userAddress = await UserAddress.create({ userId, ...addressData });
      return userAddress;
    } catch (error) {
      throw new Error('Failed to create user address');
    }
  }
  
  // Update an existing user address
  async function updateUserAddress(addressId, addressData) {
    try {
      const [rowsUpdated, [updatedUserAddress]] = await UserAddress.update(addressData, {
        where: { id: addressId },
        returning: true,
      });
      
      if (rowsUpdated === 0) {
        throw new Error('User address not found');
      }
      
      return updatedUserAddress;
    } catch (error) {
      throw new Error('Failed to update user address');
    }
  }
  
  // Delete a user address
  async function deleteUserAddress(addressId) {
    try {
      const rowsDeleted = await UserAddress.destroy({
        where: { id: addressId },
      });
  
      if (rowsDeleted === 0) {
        throw new Error('User address not found');
      }
  
      return true;
    } catch (error) {
      throw new Error('Failed to delete user address');
    }
  }
  
  // Create a new user payment method
  async function createUserPaymentMethod(userId, paymentMethodData) {
    try {
      const userPaymentMethod = await UserPaymentMethod.create({ userId, ...paymentMethodData });
      return userPaymentMethod;
    } catch (error) {
      throw new Error('Failed to create user payment method');
    }
  }
  
  // Update an existing user payment method
  async function updateUserPaymentMethod(paymentMethodId, paymentMethodData) {
    try {
      const [rowsUpdated, [updatedUserPaymentMethod]] = await UserPaymentMethod.update(paymentMethodData, {
        where: { id: paymentMethodId },
        returning: true,
      });
      
      if (rowsUpdated === 0) {
        throw new Error('User payment method not found');
      }
      
      return updatedUserPaymentMethod;
    } catch (error) {
      throw new Error('Failed to update user payment method');
    }
  }
  
  // Delete a user payment method
  async function deleteUserPaymentMethod(paymentMethodId) {
    try {
      const rowsDeleted = await UserPaymentMethod.destroy({
        where: { id: paymentMethodId },
      });
  
      if (rowsDeleted === 0) {
        throw new Error('User payment method not found');
      }
  
      return true;
    } catch (error) {
      throw new Error('Failed to delete user payment method');
    }
  }
  
  module.exports = {
    userExists,
    getUserIdByEmail,
    createUser,
    loginUser,
    checkUserPassword,
    createUserAddress,
    updateUserAddress,
    deleteUserAddress,
    createUserPaymentMethod,
    updateUserPaymentMethod,
    deleteUserPaymentMethod,
  };
