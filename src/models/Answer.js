// On importe les classes DataTypes et Model depuis le module Sequelize.
// DataTypes est utilisé pour définir les types de colonnes dans la base de données.
// Model est une classe de base que les modèles Sequelize doivent étendre.
const { DataTypes, Model } = require("sequelize");

// On importe l'instance Sequelize déjà initialisée depuis le fichier "database".
// Cette instance est utilisée pour établir une connexion à la base de données.
const sequelize = require("../dataMapper/database");

// Définition de la classe Answer, qui étend la classe Model de Sequelize.
// Cette classe représente une table "answer" dans la base de données.
class Answer extends Model {}

// On initialise la classe Answer avec ses attributs et configurations.
Answer.init(
    {
        // La colonne "description" est de type STRING, avec une longueur maximale de 128 caractères.
        // Elle ne peut pas être nulle (allowNull: false).
        description: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        // La colonne "question_id" est de type INTEGER.
        // Elle est utilisée pour associer une réponse à une question spécifique.
        question_id: DataTypes.INTEGER,
    },
    {
        // On connecte le modèle Answer à la base de données via l'instance Sequelize importée.
        // L'instance "sequelize" est déjà initialisée dans le fichier "database".
        sequelize,

        // On spécifie le nom de la table associée à ce modèle dans la base de données.
        tableName: 'answer',
    }
);

// On exporte la classe Answer pour pouvoir l'utiliser dans d'autres parties de l'application.
module.exports = Answer;
