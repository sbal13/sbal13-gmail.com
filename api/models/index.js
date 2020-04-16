const User = require('./user')
const Article = require('./article')
const Category = require('./category')
const Comment = require('./comment')


Article.belongsTo(Category)
Article.sync({ alter: true })
Category.hasMany(Article)
Category.sync({ alter: true })

User.sync({ alter: true })

module.exports = { User, Article, Category, Comment }