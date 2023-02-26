const { CityService } = require("../Services/index");

const create = async (req, res) => {
  try {
    // create City pass the Object where we get the
    // Object from req.body
    const city = await Cityservice.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      // we can use this Message at Front end on the Message pop up
      message: "Sucessfully Created a City",
      err: {},
    });
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a City",
      err: error,
    });
  }
};
const destory = (req, res) => {
  try {
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer");
    throw { error };
  }
};
const get = (req, res) => {
  try {
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer");
    throw { error };
  }
};
const update = (req, res) => {
  try {
  } catch (error) {
    console.log("Somethings went wrong in Controoler Layer");
    throw { error };
  }
};

module.exports = {
  create,
  destory,
  get,
  update,
};
