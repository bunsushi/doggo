var path = require("path");
var friends = require("../data/friends");

const routes = require('express').Router();

routes.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

routes.get("/api/friends", function(req, res) {
    res.json(friends);
  });

routes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
        //   res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;