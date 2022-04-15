'use strict'
const falso = require('@ngneat/falso')
const { Task } = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    const task = await Task.findAll()
    const user = [...Array(100)].map((_) => {
      return {
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        location: falso.randStreetAddress(),
        username: falso.randUserName(),
        password: falso.randPassword(),
        email: falso.randEmail(),
        activityList: task[Math.floor(Math.random() * task.length)].id,
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
