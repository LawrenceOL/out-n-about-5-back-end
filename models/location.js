'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      Location.hasMany(models.Activity, { foreignKey: 'locationId' })

      Location.belongsTo(models.Task, {
        as: 'taskLocation',
        foreignKey: 'taskId'
      })
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      gps: DataTypes.JSON,
      category: DataTypes.STRING,
      taskId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'tasks',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Location',
      tableName: 'locations'
    }
  )
  return Location
}
