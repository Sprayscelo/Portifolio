const express = require('express');
const gamesRoutes = require('./routes/gamesRoutes');
const cors = require('cors')
const checkIp = require('./services/checkIp');
const bodyParser = require('body-parser')
require('dotenv').config();

async function startServer() {
  
  const app = express();
  app.use(cors())
  app.use(checkIp);
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.text())

  app.use('/', gamesRoutes);

  app.listen(process.env.port || 3000);

  console.log(`Server rodando`);
}

startServer();
