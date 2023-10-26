var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const val=parseFloat(req.query.x)
  if(val)
  {
    const a=parseFloat(val)
    const b=Math.tanh(a)
    res.send('Math.tanh()'+' applied to '+a+' is '+b)
  }
  else
  {
    const a=Math.floor((Math.random())*20+1)
    const b=Math.tanh(a)
    res.send('Math.tanh()'+' applied to '+a+' is '+b)
  }
});

module.exports = router;
