var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
 
var app = express();
var PORT = process.env.PORT || 3000;

// Create the express server on port 3000 and the transmission of the JSON to the client is with the body-parser packet
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes


 require('./app/routing/apiRoutes.js')(app);
 require('./app/routing/htmlRoutes.js')(app);
// =this are the routes =====================


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});