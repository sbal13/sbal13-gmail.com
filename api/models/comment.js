const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'postgres://steven:supreme@127.0.0.1:5432/technical_interview', 
  {logging: false}
)

const Comment = sequelize.define('comment', {
  text: {
    type: DataTypes.TEXT
  }
});

module.exports = Comment