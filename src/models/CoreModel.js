const client = require("../dataMapper/client");

class CoreModel {
    #id;
    #created_at;
    #updated_at;

    // Les champs, id, created_at et updated_at de nos tables sont facultatifs (ils sont nullable ou on des valeurs par défaut).
    // On doit donc les conditionné, sinon; on serait obligé de les renseigner à chaque fois qu'on veut enregistrer une nouvelle ligne...
    // Mais problème si on faisait ça, c'est que si je crée un nouveau Tag par exemple, je n'ai pas d'id à lui donner... Du coup, ça
    // m'arrange de pouvoir en faire abstraction (Cf. le fichier src/dataMapper/test.js ligne 27).
    constructor(object) {
        if (object.id) {
            this.id = object.id;
        }

        if (object.created_at) {
            this.created_at = object.created_at;
        }

        if (object.updated_at) {
            this.updated_at = object.updated_at;
        }
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        if (!Number.isInteger(id)) {
            throw Error("La propriété id doit être un nombre entier");
        }

        this.#id = id;
    }

    get created_at() {
        return this.#created_at;
    }

    set created_at(created_at) {
        this.#created_at = created_at;
    }

    get updated_at() {
        return this.#updated_at;
    }

    set updated_at(updated_at) {
        this.#updated_at = updated_at;
    }

    static async findAll() {
        const result = await client.query(`SELECT * FROM "${this.tableName}"`);

        return result.rows.map(row => new this(row));
    }

    static async findById(id) {
        const result = await client.query(`SELECT * FROM "${this.tableName}" WHERE id = $1`, [id]);

        return result.rows[0] ? new this(result.rows[0]) : null;
    }
}

module.exports = CoreModel;