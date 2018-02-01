exports.up = function(knex, Promise) {
    return knex.schema.table('contato', function(t) {
        t.string('telefone');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('contato', function(t) {
        t.dropColumn('telefone');
    });
};