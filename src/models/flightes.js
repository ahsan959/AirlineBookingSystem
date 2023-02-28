"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flightes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flightes.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ArivalAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arivalTime: DataTypes.DATE,
      departureTime: DataTypes.DATE,
      price: DataTypes.INTEGER,
      boardingGate: DataTypes.INTEGER,
      totalSeats: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flightes",
    }
  );
  return Flightes;
};
