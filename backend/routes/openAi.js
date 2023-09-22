const express = require("express");
const router = express.Router();
const generatePc = require("../controllers/openAiApi.js");

router.post("/openAi", generatePc.generatePc);

module.exports = router;
