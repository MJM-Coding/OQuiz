const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dataMapper/database");


class User extends Model {}

User.init(
    {
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize: client,
        tableName: 'user',
    }
);

module.exports = User;