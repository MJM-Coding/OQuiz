const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dataMapper/database");

class Question extends Model {}


Question.init(
    {
        description: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        anecdote: DataTypes.STRING(128),
        wiki: DataTypes.STRING(128),
        level_id: DataTypes.INTEGER,
        answer_id: DataTypes.INTEGER,
        quiz_id: DataTypes.INTEGER,
    },
    {
        sequelize,
        tableName: 'question',
    }
);



module.exports = Question;


