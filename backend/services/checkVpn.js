const axios = require("axios");

const checkVpn = async function (ip) {
  const checkVpn = await axios.get(
    `https://vpnapi.io/api/${ip}?key=${process.env.VPN_DETECTION_API_KEY}`
  );
  console.log(checkVpn);
  if (checkVpn.data.security.vpn || checkVpn.data.security.proxy) {
    return true;
  }
  return false;
};

module.exports = checkVpn;
