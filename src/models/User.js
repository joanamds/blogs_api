const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true
    })
  
  user.associate = ({ BlogPost }) => {
    user.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts'
    });
  }
  
  return user;
}

module.exports = User;