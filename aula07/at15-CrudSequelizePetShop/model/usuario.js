const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../includes/conexao.js")

class Usuario extends Model {}

Usuario.init({
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'tb_usuario' // We need to choose the model name
});

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// se não existir a tabela, cria automaticamente
sequelize.sync()

module.exports = Usuario;