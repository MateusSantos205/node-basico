const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../includes/conexao.js")

class Produto extends Model {}

Produto.init({
  // Model attributes are defined here
  produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'tb_produto' // We need to choose the model name
});

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// se não existir a tabela, cria automaticamente
sequelize.sync()

module.exports = Produto;