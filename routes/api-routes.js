var db = require("../models");




module.exports = function(app) {
    
// route to get all the users
app.get("/api/comments", function(req, res) {
    var query = {};
   // find all of them
    db.Comments.findAll({
      where: query, 
    }).then(function(dbComments) {
      res.json(dbComments);
    });
  });
  
  
 // create new user
 app.post("/api/comments", function(req, res) {
   console.log("at begining of api/comments");
   console.log(req.body)
   // take all this info
    db.Comments.create({ 
      name: req.body.name,
      url: req.body.url,
      text: req.body.text,
    }).then(function(dbComments) {
           console.log("at the end of api/users");
      res.json(dbComments);
        // res.redirect("/login");
   
    })// if an error happends catch it
    .catch(function(err) { // then throw some json
         console.log("at the catch of api/users  " + err);
      res.json(err);
    });
  });
}


