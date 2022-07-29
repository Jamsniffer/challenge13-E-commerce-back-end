const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Tag extends Model {}

Tag.init(
    {
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING
        }
    }
);