// Requiring path to so we can use relative routes to our HTML files
var path = require("path");


module.exports = function(app) {
  app.get("/", function(req, res) {
    // redirects to main page if just /
    if (req.user) {
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/html/main.html"));
  });
   // takes you to the main
  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/main.html"));
  });
  
  app.get("/aboutme", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/about.html"));
  });
  
  app.get("/comments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/comments.html"));
  });
  app.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/resume.html"));
  });
};