const axios = require("axios");
const checkVpn = require(`../services/checkVpn.js`);

require("dotenv").config();

const BASE_URL = "https://api.openai.com/v1/chat/completions";

exports.generatePc = async (req, res) => {
  console.log(req.ip);
  if (await checkVpn(req.ip))
    return res
      .status(406)
      .send(`Please disable you VPN or PROXY to make the request`);
  const gamesConfig = req.body.gamesConfig
    .map(
      (card) =>
        `Jogo: ${card.gameSearched}\nFPS: ${card.gameFps}\nQualidade de grafico${card.gameQuality}\n`
    )
    .join(`\n`);
  try {
    const sendToChatGpt = await axios.post(
      BASE_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Preciso que você seja como um backend, eu vou te mandar uma lista de jogos com as seguintes informações: Nome do jogo, Quantidade de FPS e Qualidade do grafico, a sua resposta precisa ser um computador com as configurações ideais para jogar os jogos listados nas configurações enviadas, para cada produto quero que você especifique marca e modelo, preciso que me mande a resposta no seguinte formato json\n\npcConfig:[{processor: 'nome do processador',ram: 'memoria ram', videoCard: 'Placa de video', powerSupply: 'Fonte e quantidade de wats', motherboard: 'Placa mãe', obs: 'Alguma observação que queria colocar para este computador, seja breve!'}]",
          },
          { role: "user", content: gamesConfig },
        ],
        temperature: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_APIKEY}`,
        },
      }
    );
    res.json(sendToChatGpt.data.choices[0]);
  } catch (error) {
    res.json({
      message: `Erro ao tentar enviar informações ao chatGPT: ${error.message}`,
    });
  }
};
