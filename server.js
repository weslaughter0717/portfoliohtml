var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var mongoose = require("mongoose")

var app = express();
var db = require("./models");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());




// require routes
require("./routes/scrapper-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);




db.sequelize.sync({}).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articles"
mongoose.connect("mongodb://localhost/articles", {
  useMongoClient: true
});
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});