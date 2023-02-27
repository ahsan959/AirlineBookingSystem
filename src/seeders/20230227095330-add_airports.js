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
      "Airports",
      [
        {
          name: "Dubia International Airport",
          cityId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rawalpindi Airport",
          cityId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karachi Airport",
          cityId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peshaware Airport",
          cityId: 75,
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
