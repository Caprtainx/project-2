const Game = require('../models/game');

module.exports = {
    index,
    new: newGame,
    create
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const game = new Game(req.body);
    game.save(function(err) {
    if (err) return res.redirect('/games/new');
    console.log(game);
    res.redirect('/games');
  });
}

function newGame(req, res) {
    res.render('games/new', { title: 'Add Game' });
}

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/index', { title: 'All Games', games });
      });
}