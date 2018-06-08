const jsforce = require('jsforce');
const {clientId, clientSecret, redirectUri} = require('../config');

module.exports = (code) => {
  const oauth2 = new jsforce.OAuth2({clientId, clientSecret, redirectUri});
  const conn = new jsforce.Connection({oauth2});

return new Promise((resolve, reject) => {
  conn.authorize(code, (err, data) => {
    if (err) {
      reject({error: {err}});
    } else {
      const {instanceUrl, accessToken} = conn;
      resolve({result: {instanceUrl, accessToken}});
    }
  });
});

}
