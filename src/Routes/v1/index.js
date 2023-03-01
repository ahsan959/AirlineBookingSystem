const express = require("express");
const cityController = require("../../controllers/city_controller");
const flightController = require("../../controllers/flight-Controller");

const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destory);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);
router.get("/city", cityController.getAllCity);

router.post("/flight", flightController.create);
module.exports = router;
