const path = require('path');

// app refers to the express instance made in server.js
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
          
  app.get("/survey.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
};
