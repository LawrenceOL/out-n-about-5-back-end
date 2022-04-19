'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
      Activity.belongsTo(models.User, {
        as: 'user_activity',
        foreignKey: 'userId'
      })
    }
  }
  Activity.init(
    {
      taskId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: { model: 'tasks', key: 'id' }
      },
      locationId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: { model: 'locations', key: 'id' }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: { model: 'users', key: 'id' }
      }
    },

    {
      sequelize,
      modelName: 'Activity',
      tableName: 'activities'
    }
  )
  return Activity
}
