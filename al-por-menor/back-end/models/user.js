'use strict';

module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El nombre sólo puede contener letras."
        },
        len: {
          args: [2, 255],
          msg: "El nombre debe contener al menos dos caracteres."
        }
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El apellido sólo puede contener letras."
        },
        len: {
          args: [2, 255],
          msg: "El apellido debe contener al menos dos caracteres."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo válido."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña debe tener al menos 6 caracteres."
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "Tipo de usuario inválido."
        }
      }
    },
    resetLink: {
      type: DataTypes.STRING,
      allowNull: true,
      }
    },
   {
    tableName: "users"
  });

  user.associate = function (models) {
    // associations can be defined here
  };

  return user;
};