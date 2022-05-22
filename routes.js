const express = require("express");
const { ConfigModel } = require("./models");
const App = express.Router();

App.get("/", (req, res) => {
  res.send("Server is Running");
});

module.exports = App;
