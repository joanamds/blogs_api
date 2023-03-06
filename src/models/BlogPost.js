const BlogPost = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true
  })
  
  blogpost.associate = ({ User, PostCategory }) => {
    blogpost.belongsTo(User, {
      foreignKey: 'userId', as: 'users'
    });
    blogpost.belongsToMany(PostCategory, {
      as: 'categories',
      through: 'posts_categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return blogpost;
}

module.exports = BlogPost;