'use strict'
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const tasks = [...Array(50)].map((_) => {
      return {
        taskName: falso.randJobType(),
        location: falso.randLatitude(),
        description: falso.randJobDescriptor(),
        checkIn: false,
        comment: falso.randText(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('tasks', tasks)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tasks')
  }
}
