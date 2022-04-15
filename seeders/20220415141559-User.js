'use strict'
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const user = [...Array(100)].map((_) => {
      return {
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        location: falso.randLongitude(),
        username: falso.randUserName(),
        password: falso.randPassword(),
        email: falso.randEmail(),
        // activityList: [],
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('users', user)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users')
  }
}
