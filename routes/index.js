const express = require('express');
const router = express.Router();
const jsforce = require('jsforce');
const {oauth, authorize, getContacts} = require('../sf');

let data = [];
router.get('/', async(req, res, next) => {
  const {query:{code}} = req;
    try {
      const {error: authErr, result: authRes} = await authorize(code);

      try {
        const connect = new jsforce.Connection(authRes);
        const {error: contactErr, result: contactRes} = await getContacts(connect);
        data = contactRes;
        res.render('index', {data});
      } catch (err) {
        console.log('An error occured while getting contacts');
      }
    } catch (err) {
      console.log('An error occured while authorization');
    } finally {
      res.render('index', {data});
    }
});

module.exports = router;
