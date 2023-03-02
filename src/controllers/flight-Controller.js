const FlightService = require("../Services/Flight_service");
const { ClientErrorCodes } = require("../utils/error-codes");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      ArivalAirportId: req.body.ArivalAirportId,
      arivalTime: req.body.arivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

const getAllFlight = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flightes",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAllFlight,
};
