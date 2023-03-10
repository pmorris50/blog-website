const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {User, Comment, Blog}