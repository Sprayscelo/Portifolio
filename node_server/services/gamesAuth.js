require('dotenv').config()
const axios = require('axios')

async function auth () {
    
    let response = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
    );
    return response.data
}

async function checkToken() {
  const tokenGames = process.env.TWITCH_ACCESS_TOKEN;
  const tokenExpiration = parseInt(process.env.TWITCH_ACCESS_TOKEN_EXPIRATION); // Converta para número
  const tokenLastRequestDate = parseInt(process.env.TWITCH_ACCESS_TOKEN_LAST_REQUEST_DATE); // Converta para número

  if (Date.now() < (tokenLastRequestDate + tokenExpiration)) {
    console.log('Token lido do cache:', tokenGames);
    return tokenGames;
  }  

  if (!tokenGames || Date.now() >= (tokenLastRequestDate + tokenExpiration)) {
    const newToken = await auth();
    // ... lógica para obter a expiração e o horário atual
    process.env.ACCESS_TOKEN = newToken.access_token;
    process.env.TOKEN_EXPIRATION = newToken.expires_in.toString();
    process.env.TOKEN_LAST_REQUEST_DATE = Date.now().toString();
    return newToken.access_token;
  }
  
}

module.exports = checkToken;