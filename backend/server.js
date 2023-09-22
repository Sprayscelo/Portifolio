const express = require("express");
const gamesRoutes = require("./routes/gamesRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const openAiRoutes = require("./routes/openAi");
const apiRoutes = require("./routes/apiRoutes");

require("dotenv").config();

async function startServer() {
  const app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());

  app.use("/api", apiRoutes);

  app.listen(process.env.port || 3000);

  console.log(`Server rodando`);
}

startServer();
