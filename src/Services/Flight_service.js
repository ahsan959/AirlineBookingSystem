const AirplaneRepository = require("../repository/airPlane-repository");
const Flightes_Repository = require("../repository/Flightes_Repository");

const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRespository = new AirplaneRepository();
    this.flightrespository = new Flightes_Repository();
  }

  async createFlight(data) {
    const airplane = await this.airplaneRespository.getAirplane(
      data.airplaneId
    );
    const flight = await this.flightrespository.createFlight({
      ...data,
      totalSeats: airplane.capacity,
    });
    return flight;
  }
  catch(error) {
    console.log("Something went wrong at service layer");
    throw { error };
  }
}

module.exports = FlightService;
