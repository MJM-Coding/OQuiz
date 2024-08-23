
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dataMapper/database");

class Level extends Model {}

Level.init(
    {
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'level',
    }
);

module.exports = Level;