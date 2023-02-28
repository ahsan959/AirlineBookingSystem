"use strict";

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Airblue",
          Capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Askari Aviation.",
          Capacity: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Shaheen Airline.",
          createdAt: new Date(),
          updatedAt: new Date(),
          Capacity: 400,
        },
        {
          modelNumber: "SereneAir",
          Capacity: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
