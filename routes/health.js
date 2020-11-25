var express = require('express');
var router = express.Router();

/* healthcheck route*/
router.get('/healthcheck', function(req, res, next) {
    console.log('healthCheck => ','Calculator Api');
    res.status(200).json({status: 'up'});
});

module.exports = router;