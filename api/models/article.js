const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'postgres://steven:supreme@127.0.0.1:5432/technical_interview', 
  {logging: false}
)

const Article = sequelize.define('article', {
  title: {
    type: DataTypes.STRING
  },
  text: {
    type: DataTypes.TEXT
  },
});

module.exports = Article