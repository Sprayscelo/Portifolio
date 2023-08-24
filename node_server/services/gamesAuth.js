require('dotenv').config()
const axios = require('axios')
const fs = require('fs');
const path = require('path');


async function auth () {
    
    let response = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
    );
    return response.data
}

async function checkToken() {
  const tokenFilePath = path.join('', '../token.json');

  let tokenGames = null;

  try {
    // Verificar se o arquivo de token existe
    if (fs.existsSync(tokenFilePath)) {
      // Ler o conteúdo do arquivo
      const tokenData = fs.readFileSync(tokenFilePath, 'utf8');
      const { token, expiration, lastRequestDate} = JSON.parse(tokenData);
      // Verificar se o token está válido
      if (Date.now() < (lastRequestDate + expiration)) {
        tokenGames = token;
        console.log('Token lido do cache:', tokenGames);
        return tokenGames
      }
    }
    // Se o token não estiver em cache, obter um novo token
    if (!tokenGames) {
      tokenGames = await auth();
      const expiration = tokenGames.expires_in; // Definir o tempo de expiração do token
      
      // Salvar o token no arquivo
      const tokenData = JSON.stringify({ token: tokenGames.access_token, expiration: expiration, lastRequestDate: Date.now()});
      fs.writeFileSync(tokenFilePath, tokenData, 'utf8');
      
      return tokenGames
    }
  } catch (error) {
    console.error('Erro ao obter/salvar o token:', error);
    process.exit(1); // Encerrar o servidor em caso de erro
  }
}

module.exports = checkToken;