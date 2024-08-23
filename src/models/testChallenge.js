const Level = require("./Level");
const Question = require("./Question");
const sequelize = require("../dataMapper/database");

main()

async function main() {
   
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }





//1-récupérer toutes les questions.
    const questions = await Question.findAll({
        attributes: ["description"]
    });

  // Affiche uniquement la description de chaque question
questions.forEach(question => {
    console.log(question.dataValues.description);
});

 //2-trouver la question dont l'ID est 3.   
    /* const question = await Question.findByPk(3);
    console.log(question.description); */

//3-créer un niveau très difficile et l'insérer en BDD.
   /*  const level = await Level.create({name: "très difficile"});
    console.log(level.id);
    console.log(level.name);
    console.log(level.created_at); */

//4-modifier le niveau très difficile en super difficile.
   /*   const level = await Level.findByPk(7);
    level.name = "super difficile";
    await level.save();
    console.log(level);  */

//5-supprimer le niveau super difficile.
    /* const level = await Level.findByPk(7);
    await level.destroy();
    console.log(level);  */


   
}