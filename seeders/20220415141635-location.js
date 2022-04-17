'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const locations = [...Array(50)].map((_) => {
      const address = `${falso.randStreetAddress()} ${falso.randCity()}, ${falso.randState()} ${falso.randZipCode()}`
      const gps = { lat: falso.randLatitude(), lon: falso.randLongitude() }
      return {
        name: falso.randStreetName(),
        img: falso.randImg(),
        address: address,
        gps: gps,
        description: falso.randProductDescription(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('locations', locations)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('locations')
  }
}
