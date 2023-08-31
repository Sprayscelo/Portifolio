const axios = require("axios");

exports.checkVpn = async (erro, req, res, next) => {
  const checkVpn = await axios.get(
    `https://vpnapi.io/api/${req.ip}?key=${process.env.VPN_DETECTION_API_KEY}`
  );
  if (checkVpn.data.security.vpn || checkVpn.data.security.proxy) {
    return true;
  }
  return false;
};
