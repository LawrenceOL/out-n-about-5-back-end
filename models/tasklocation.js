'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TaskLocation extends Model {
    static associate(models) {}
  }
  TaskLocation.init(
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
      }
    },

    {
      sequelize,
      modelName: 'TaskLocation',
      tableName: 'task_locations'
    }
  )
  return TaskLocation
}
