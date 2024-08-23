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



   /*  const newLevel = await Level.create({name: "Jedi"});
    console.log(newLevel.id);
    console.log(newLevel.name);
    console.log(newLevel.created_at);

    
    const levels = await Level.findAll();
    console.log(levels);
    console.log(levels[0].name);
    console.log(levels[0].id);
    console.log(levels[0].created_at);

    const level = await Level.findByPk(2);
    console.log(level);
    console.log(level.name);



    const questions = await Question.findAll();
    console.log(questions);
    console.log(questions[0].anecdote);

    const question = await Question.findByPk(2);
    console.log(question);
    console.log(question.description);

    const firstQuestionQuiz7 = await Question.findOne({ where: { quiz_id: 7 } });
    console.log(firstQuestionQuiz7);
    console.log(firstQuestionQuiz7.wiki); */
}