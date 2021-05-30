const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'app', 'build')));

// middleware to intercept every request
app.use((req, res, next) => {
  // add header to allow api to be accessed from anywhere
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use('/', router);


app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});