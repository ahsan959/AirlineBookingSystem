const { Flightes } = require("../models/index");

class FlightResopsitory {
  async createFlight(data) {
    try {
      const flight = await Flightes.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}
module.exports = FlightResopsitory;
