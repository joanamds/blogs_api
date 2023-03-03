'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'post_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'category_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    }, {
      underscored: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories')
  }
};