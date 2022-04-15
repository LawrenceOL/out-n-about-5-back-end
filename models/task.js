'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, { as: 'task', foreignKey: 'userId' })

      Task.belongsToMany(models.Location, {
        through: models.TaskLocation,
        as: 'activity',
        foreignKey: 'taskId'
      })
    }
  }
  Task.init(
    {
      taskName: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.STRING,
      checkIn: DataTypes.BOOLEAN,
      comment: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks'
    }
  )
  return Task
}
