const AirplaneRepository = require("../repository/airPlane-repository");
const Flightes_Repository = require("../repository/Flightes_Repository");

const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRespository = new AirplaneRepository();
    this.flightrespository = new Flightes_Repository();
  }

  async createFlight(data) {
    try {
      //   if (!compareTime(data.arivalTime, data.departureTime)) {
      //     throw { error: "Arrival time cannot be less then departure time " };
      //   }
      const airplane = await this.airplaneRespository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightrespository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getAllFlightData(data) {
    try {
      const flight = await this.flightrespository.getAllFlight(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

// get flight Data

module.exports = FlightService;
