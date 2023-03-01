const { Flightes } = require("../models/index");
const { Op } = require("sequelize");

class FlightResopsitory {
  // create filter by using # we create a Private methods
  #createFilter(data) {
    let filter = {};
    if (data.ArivalAirportId) {
      filter.ArivalAirportId = data.ArivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } },
        ],
      });
    }

    //Check the Second Filter check github
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.minPrice } });
    }
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flightes.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  //   get Flightes
  async getFlight(flightId) {
    try {
      const flight = await Flightes.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  // get all the Flightes
  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flightes.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}
module.exports = FlightResopsitory;

/*
  where:{
    ArivalAirportId:2,
    departureAirportId:4,
    price:{[Op.gte]:4000}

  }

*/
