const axios = require("axios");
const checkToken = require("../services/gamesAuth");
//DEFAULT VARIABLES

const BASE_URL = "https://api.igdb.com/v4";

exports.getScreenshots = async (req, res, next) => {
  try {
    console.log(req.body);
    let token = await checkToken();
    var response = await axios.post(
      `${BASE_URL}/artworks`,
      `${req.body} limit 500;`,
      {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    res.json(response.data);
  } catch (erro) {
    console.log(erro);
    res.json(response.data);
  }
};
