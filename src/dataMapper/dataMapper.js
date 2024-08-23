
const client = require("./client");
// importe le module `Tag` depuis le fichier situé à "../models/tag".
const Tag = require("../models/Tag");

const dataMapper = {
    async findAllUsers() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },


    async findUserById(id) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);


        return result.rows[0] ? result.rows[0] : null;
    },

    async findAllTags() {
        const result = await client.query('SELECT * FROM "tag"');
        

        // Cette ligne utilise la méthode `map` pour parcourir chaque élément de `tagsRows`.
        // Pour chaque élément `tag` dans `tagsRows`, une nouvelle instance de la classe `Tag` est créée en passant `tag` comme argument.
        // Le résultat est un nouveau tableau contenant toutes les instances de `Tag` créées à partir des éléments de `tagsRows`.
        // Ce tableau est ensuite renvoyé par la fonction grâce au `return`.
        return result.rows.map(tag => new Tag(tag));
        /* 
        tagsRows : C'est le tableau d'origine, contenant des éléments tag.
        map(tag => new Tag(tag)) : La méthode map va parcourir chaque élément de tagsRows (appelé tag dans ce cas) et appliquer la fonction new Tag(tag) à chacun d'eux, ce qui signifie que pour chaque tag dans tagsRows, une nouvelle instance de Tag sera créée.
        Le return renvoie un nouveau tableau contenant toutes ces instances de Tag. */
    },






};

module.exports = dataMapper;