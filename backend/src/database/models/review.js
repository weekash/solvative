const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},{
  timestamps:true,
  freezeTableName:true,
  tableName:"reviews"
});

module.exports = Review;
