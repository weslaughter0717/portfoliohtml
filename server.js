var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;


var app = express();
var db = require("./models");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());




// require routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);




db.sequelize.sync({}).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});

