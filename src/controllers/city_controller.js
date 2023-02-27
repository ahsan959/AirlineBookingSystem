// const { CityService } = require("../Services/index");
const CityService = require("../Services/city-service");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    // create City pass the Object where we get the
    // Object from req.body
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      // we can use this Message at Front end on the Message pop up
      message: "Sucessfully Created a City",
      err: {},
    });
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer 1");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a City",
      err: error,
    });
  }
};

// According to REST Methos sould be DELETE
// URL->/CITY/:id
const destory = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

// Method Should be GET
// GET->/city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};
// Patch -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

const getAllCity = async (req, res) => {
  try {
    const city = await cityService.getAllCity();
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched a cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};
module.exports = {
  create,
  destory,
  get,
  update,
  getAllCity,
};
