exports.up = knex => knex("country").insert({ idcountry: 1, namecountry: "Brasil" })

exports.down = knex => knex("country").del().where({ idcountry: 1 })