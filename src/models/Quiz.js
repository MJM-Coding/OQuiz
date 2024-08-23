const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dataMapper/database");

class Quiz extends CoreModel {}

 Quiz.init(
     {
         title: {
             type: new DataTypes.STRING(128),
             allowNull: false,
         },
         description: DataTypes.STRING(128),
         user_id: DataTypes.INTEGER,
     },
     {
         sequelize: client,
         tableName: 'quiz',
     }
 )
 
module.exports = Quiz