exports.up = knex => knex.schema
  .createTable("country", tb => {
    tb.increments("idcountry")
    tb.string("namecountry")
  }).createTable("state", tb => {
    tb.increments("idstate")
    tb.string("codestate")
    tb.string("namestate")
    tb.integer("idcountry").notNullable().references("country.idcountry")
  })

exports.down = knex => knex.schema
  .dropTable("state")
  .dropTable("country")