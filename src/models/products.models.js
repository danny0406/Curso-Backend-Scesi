const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.config');

class Product extends Model {}

Product.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER.ZEROFILL,
        allowNull: false,
    },
    expiration: {
        type: DataTypes.DATE,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    timestamps: true,
  }
);

module.exports = Product;
