const express = require("express");
const cityController = require("../../controllers/city_controller");
const flightController = require("../../controllers/flight-Controller");
const AirplaneController = require("../../controllers/airport-controller");
const { FlightMiddlewares } = require("../../middlewares/index");
const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destory);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);
router.get("/city", cityController.getAllCity);
router.get("/flights", flightController.getAllFlight);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  flightController.create
);
router.post("/airports", AirplaneController.create);

module.exports = router;
