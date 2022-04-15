'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TaskLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaskLocation.init(
    {
      taskId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'TaskLocation',
      tableName: 'task_locations'
    }
  )
  return TaskLocation
}
