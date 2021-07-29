const jwt = require('jsonwebtoken');

const secret = 'secretsercetIvegotasecret';
const expiration = '96h';

module.exports = {
    signToken: function ({ username, email, _id}) {
        const payload = { username, email, _id};

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}