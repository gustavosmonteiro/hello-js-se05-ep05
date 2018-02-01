const contacts = [
    { idcontato: 1, nomecontato: "Gustavo" , telefone: "123456"},
    { idcontato: 2, nomecontato: "Jose" , telefone: "456789"},
    { idcontato: 3, nomecontato: "Maria" , telefone: "987654"}
   
  ]
  
  exports.up = knex => knex("contato").insert(contacts)
  
  exports.down = knex => knex("contato").del()
    .whereIn("idcontato", contacts.map(e => e.idcontato))