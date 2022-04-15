'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      // define association here
      Location.belongsToMany(models.Task, {
        through: models.TaskLocation,
        as: 'location',
        foreignKey: 'locationId'
      })
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      address: DataTypes.TEXT,
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
