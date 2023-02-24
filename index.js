const express = require("express");
const { port } = require("./src/config/Serverconfig");

const StartServer = async () => {
  // create Express Object
  const app = express();

  // start the server
  app.listen(port, () => {
    console.log(`Server started on Port:${port}`);
  });
};

StartServer();
