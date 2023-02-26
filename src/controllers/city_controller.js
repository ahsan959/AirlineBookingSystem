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
    const response = await cityService.deleteCity(req.param.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a City",
      err: {},
    });
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer 2");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the City",
      err: error,
    });
  }
};

// Method Should be GET
// GET->/city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.param.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully get a City",
      err: {},
    });
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer 3");
    return res.status(500).json({
      success: false,
      data: {},
      message: "we are not able to get the City",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await CityService.getCity(req.param.id, req.body);
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Succesfully get the City",
    });
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer 4");
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "we are not able to update the city",
    });
  }
};

module.exports = {
  create,
  destory,
  get,
  update,
};
