const jwt = require('jsonwebtoken');

function signToken(payload) {
  const token  = jwt.sign(
    payload, // payload
    'EL_S#CR3T_DE_AM0R', // secret
    { expiresIn: '1h' }, // options -> expiresIn
  )

  return token;
}

async function verifyToken(token) {
  try {
    const payload = await jwt.verify(token, 'EL_S#CR3T_DE_AM0R')
    return payload;
  } catch (error) {
    return null;
  }
}

module.exports = {
  signToken,
  verifyToken,
}
