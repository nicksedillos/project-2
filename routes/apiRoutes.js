var db = require("../models");

module.exports = function(game) {

  // Post Player Info to database
  db.post("api/player", function(req, res) {
    db.Player.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Display current players
  db.get("api/player", function(req, res) {
    db.AllPlayers.findAll({ name }).then(function(dbAllPlayers) {
      res.json(dbAllPlayers);
    });
  });

  // Check game state
  db.get("api/gamestate", function(req, res) {
    db.GameState.findAll({}).then(function(dbGameState) {
      res.json(dbGameState);
    });
  });

  // Get chat log
  db.get("api/chat", function(req, res) {
    db.Chat.findAll({}).then(function(allChats) {
      res.json(allChats);
    });
  });

  // Post last move
  db.post("/api/position", function(req, res) {
    db.Position.create(req.body).then(function(dbPosition) {
      res.json(dbPosition);
    });
  });

};

