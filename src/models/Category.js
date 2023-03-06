const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    name: DataTypes.STRING,
  },
    {
      tableName: 'categories',
      timestamps: false
    })
  
  category.associate = ({ BlogPost }) => {
    category.belongsToMany(BlogPost, {
      as: 'posts',
      through: 'posts_categories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return category;
}

module.exports = Category;