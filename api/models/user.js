const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'postgres://steven:supreme@127.0.0.1:5432/technical_interview', 
  {logging: false}
)

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING
  }
});

module.exports = User