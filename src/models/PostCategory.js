const PostCategory = (sequelize, DataTypes) => {
  const postcategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'BlogPost',
        key: 'id'
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Categories',
        key: 'id'
      },
    },
  },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true
    });

  postcategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'blog_posts',
      through: postcategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'categories',
      through: postcategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    })
  }
  return postcategory;
}

module.exports = PostCategory;
