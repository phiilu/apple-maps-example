const jwt = require('jsonwebtoken');

const origin = process.env.SITE_ORIGIN;
const privatekey = process.env.APPLE_MAPS_KEY.replace(/\\n/gm, '\n');
const keyid = process.env.MAPS_KEY_ID;
const issuer = process.env.APPLE_TEAM_ID;

exports.handler = async function (event, context) {
  const token = jwt.sign({
    origin
  }, privatekey, {
    algorithm: 'ES256',
    expiresIn: "1d",
    keyid,
    issuer,
  });

  return {
    statusCode: 200,
    body: token,
  }
}
