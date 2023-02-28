'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flightes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING
      },
      airplaneId: {
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        type: Sequelize.INTEGER
      },
      ArivalAirportId: {
        type: Sequelize.INTEGER
      },
      arivalTime: {
        type: Sequelize.DATE
      },
      departureTime: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      boardingGate: {
        type: Sequelize.INTEGER
      },
      totalSeats: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flightes');
  }
};