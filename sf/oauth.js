const jsforce = require('jsforce');
const {clientId, clientSecret, redirectUri} = require('../config');



module.exports = async () => {
  const oauth2 = new jsforce.OAuth2({clientId, clientSecret, redirectUri});
  return await oauth2.getAuthorizationUrl({});
}
