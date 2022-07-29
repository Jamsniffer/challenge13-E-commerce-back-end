const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Product extends Model {}

Product.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
             allownull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            isNumeric: true
        },
        // category_id: {
        //     type: DataTypes.INTEGER,                                            <--- NEED HELP WITH THIS PART
        // }
    }
);