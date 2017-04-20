//lets us use express
var express = require('express');
//for heroku to pass us the port or run on localhost:3000
const PORT = process.env.PORT || 3000;
//create our app
var app = express();
//express middleware, redirect https to an http address
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http'){
    next(); //lets req process as normal
  } else {
    res.redirect('http://' + req.hostname + req.url);//redirect https to http
  }
});
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
