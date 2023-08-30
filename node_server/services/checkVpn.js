const axios = require("axios");

exports.checkVpn = async (erro, req, res, next) => {
  const checkVpn = await axios.get(
    `https://vpnapi.io/api/181.223.185.240?key=${process.env.VPN_DETECTION_API_KEY}`,
  );
  if (checkVpn.data.security.vpn || checkVpn.data.security.proxy) {
    return true;
  }
  return false;
};
