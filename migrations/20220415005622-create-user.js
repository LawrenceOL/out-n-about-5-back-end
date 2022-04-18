'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      passwordDigest: {
      type: Sequelize.STRING,
      allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      activityList: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
