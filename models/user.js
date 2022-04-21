'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, { as: 'userTask', foreignKey: 'userId' })

      User.hasMany(models.Activity, { foreignKey: 'userId' })
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      location: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: DataTypes.STRING,
      activityList: { type: DataTypes.ARRAY(DataTypes.STRING) },
      score: { type: DataTypes.INTEGER, allowNull: true }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
