require('dotenv').config()

function restrictIp(req, res, next) {
    const clientIp = process.env.ALLOWED_IP;
  
    if (req.ip === clientIp) {
      next(); // Permite o acesso ao próximo middleware ou rota
    } else {
      res.status(403).send({"message": "Endereço de Ip não permitido!"}); // Retorna um erro de acesso proibido
    }
  }
  
  module.exports = restrictIp;