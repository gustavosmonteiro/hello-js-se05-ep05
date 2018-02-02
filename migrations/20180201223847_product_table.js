
exports.up = knex => knex.schema.createTable("product", tb => {
    tb.increments("idproduct")
    tb.string("nameproduct").notNullable()
    tb.timestamp("dtcreationproduct").notNullable().defaultTo(knex.fn.now())
})

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("product")
};
