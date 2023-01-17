// arquivo de conexão com bd mysql

// importando o modulo do sequelize
const {Sequelize} = require('sequelize')

const con = new Sequelize("db_petshop","root","",{
    host:"localhost",
    dialect:"mysql",
    charset:"utf8mb4",
    collate:"utf8mb4_general_ci",
    timezone:"-03:00"
})
// tentar conectar ao banco de dados
try {
    con.authenticate()
    console.log("Conectado ao BD")
} catch (error) {
    console.log("Erro ao conectar ao BD"+error)
}

module.exports = con