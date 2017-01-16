const express = require('express');
const headParser = require('./app/head-parser');
const app = express();


app.get('/', function(req, res) {

 var output = headParser(req);
 res.json(output);
  
});


app.listen(process.env.PORT || 8080);

console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080