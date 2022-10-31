const Game = require('../models/game');

module.exports = {
    index,
    new: newGame
}

function newGame(req, res) {
    res.render('movies/new', { title: 'Add Movie' });
}

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/index', { title: 'All Games', games });
      });
}