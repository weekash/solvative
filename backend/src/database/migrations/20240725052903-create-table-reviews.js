'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        type: new DataTypes.UUID,
        primaryKey: true
      },
      title: {
        type: new DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: new DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        type: new DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: new DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('reviews');
  }
};
