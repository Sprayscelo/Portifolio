const express = require("express");
const router = express.Router();
const gamesApi = require("../controllers/gamesApi");
const artworksApi = require("../controllers/artworksApi");
const generatePc = require("../controllers/openAiApi.js");
const rateLimit = require("express-rate-limit");

router.post("/games", gamesApi.getGames);
router.post("/artworks", artworksApi.getScreenshots);

module.exports = router;
