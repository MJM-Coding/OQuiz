const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dataMapper/database");


class Tag extends Model {}

Tag.init(
    {
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize: client,
        tableName: 'tag',
    }
);

module.exports = Tag;  
