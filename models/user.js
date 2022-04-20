'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, { as: 'userTask', foreignKey: 'userId' })

      User.hasMany(models.Activity, { foreignKey: 'userId' })
      //   User.belongsToMany(models.Location, {
      //     as: 'user_act',
      //     foreignKey: 'userId',
      //     through: models.Activity
      //   })
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
