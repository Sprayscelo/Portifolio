const express = require("express");
const router = express.Router();
const generatePc = require("../controllers/openAiApi.js");
const rateLimit = require("express-rate-limit");

router.post(
  "/openAi",
  rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 1,
    message:
      "You have reached the daily limit of requests (15 per day). Please try again tomorrow, or get in touch with the website administrator.",
  }),
  generatePc.generatePc,
);

module.exports = router;
