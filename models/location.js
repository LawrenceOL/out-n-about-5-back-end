'use strict'
const { Model } = require('sequelize')
const Task = require('./task')
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsToMany(models.Task, {
        through: models.task_locations,
        as: 'location',
        foreignKey: 'locationId'
      })
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      address: DataTypes.STRING,
      gps: DataTypes.STRING,
      description: DataTypes.STRING,
      taskid: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Location',
      tableName: 'locations'
    }
  )
  return Location
}
