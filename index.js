const express = require("express");
const { port } = require("./src/config/Serverconfig");
const body_parser = require("body-parser");
const { urlencoded } = require("body-parser");

const StartServer = async () => {
  // create Express Object
  const app = express();

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true }));

  // start the server
  app.listen(port, () => {
    console.log(`Server started on Port:${port}`);
  });
};

StartServer();
