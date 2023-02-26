const express = require("express");
const { port } = require("./config/Serverconfig");
const body_parser = require("body-parser");
const { urlencoded } = require("body-parser");
const { City } = require("./models/index");
const CityRepository = require("./repository/city_repository");

const ApiRoutes = require("./Routes/index");

const StartServer = async () => {
  // create Express Object
  const app = express();

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);
  // start the server
  app.listen(port, () => {
    console.log(`Server started on Port:${port}`);
    const repo = new CityRepository();
    repo.createCity({ name: "Lahore" });
  });
};

StartServer();
