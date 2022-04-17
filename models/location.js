'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      // define association here
      Location.belongsToMany(models.Task, {
        through: models.TaskLocation,
        as: 'place',
        foreignKey: 'locationId'
      })
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      address: DataTypes.TEXT,
      gps: DataTypes.JSON,
      description: DataTypes.STRING
      // taskId: {
      //   type: DataTypes.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'tasks',
      //     key: 'id'
      //   }
      // }
    },
    {
      sequelize,
      modelName: 'Location',
      tableName: 'locations'
    }
  )
  return Location
}
