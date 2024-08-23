require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        createdAt: "created_at", // Override the name of the createdAt column if a string is provided, or disable it if false.
        updatedAt: "updated_at", // Override the name of the updatedAt column if a string is provided, or disable it if false.
    }
});

module.exports = sequelize;