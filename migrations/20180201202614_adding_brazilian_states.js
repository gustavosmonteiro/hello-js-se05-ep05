const estados = [
    { idcountry: 1, idstate: 1 , codestate: "AC", namestate: "Acre" },
    { idcountry: 1, idstate: 2 , codestate: "AL", namestate: "Alagoas" },
    { idcountry: 1, idstate: 3 , codestate: "AP", namestate: "Amapá" },
    { idcountry: 1, idstate: 4 , codestate: "AM", namestate: "Amazonas" },
    { idcountry: 1, idstate: 5 , codestate: "BA", namestate: "Bahia" },
    { idcountry: 1, idstate: 6 , codestate: "CE", namestate: "Ceará" },
    { idcountry: 1, idstate: 7 , codestate: "DF", namestate: "Distrito Federal" },
    { idcountry: 1, idstate: 8 , codestate: "ES", namestate: "Espírito Santo" },
    { idcountry: 1, idstate: 9 , codestate: "GO", namestate: "Goiás" },
    { idcountry: 1, idstate: 10 , codestate: "MA", namestate: "Maranhão" },
    { idcountry: 1, idstate: 11 , codestate: "MT", namestate: "Mato Grosso" },
    { idcountry: 1, idstate: 12 , codestate: "MS", namestate: "Mato Grosso do Sul" },
    { idcountry: 1, idstate: 13 , codestate: "MG", namestate: "Minas Gerais" },
    { idcountry: 1, idstate: 14 , codestate: "PA", namestate: "Pará" },
    { idcountry: 1, idstate: 15 , codestate: "PB", namestate: "Paraíba" },
    { idcountry: 1, idstate: 16 , codestate: "PR", namestate: "Paraná" },
    { idcountry: 1, idstate: 17 , codestate: "PE", namestate: "Pernambuco" },
    { idcountry: 1, idstate: 18 , codestate: "PI", namestate: "Piauí" },
    { idcountry: 1, idstate: 19 , codestate: "RJ", namestate: "Rio de Janeiro" },
    { idcountry: 1, idstate: 20 , codestate: "RN", namestate: "Rio Grande do Norte" },
    { idcountry: 1, idstate: 21 , codestate: "RS", namestate: "Rio Grande do Sul" },
    { idcountry: 1, idstate: 22 , codestate: "RO", namestate: "Rondônia" },
    { idcountry: 1, idstate: 23 , codestate: "RR", namestate: "Roraima" },
    { idcountry: 1, idstate: 24 , codestate: "SC", namestate: "Santa Catarina" },
    { idcountry: 1, idstate: 25 , codestate: "SP", namestate: "São Paulo" },
    { idcountry: 1, idstate: 26 , codestate: "SE", namestate: "Sergipe" },
    { idcountry: 1, idstate: 27 , codestate: "TO", namestate: "Tocantins" }
  ]
  
  exports.up = knex => knex("state").insert(estados)
  
  exports.down = knex => knex("country").del()
    .whereIn("idstate", estados.map(e => e.idstate))