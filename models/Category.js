const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Category extends Model {}

Category.init(
    {
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            auotIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);