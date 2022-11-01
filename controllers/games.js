const { deleteOne } = require('../models/game');
const Game = require('../models/game');
const User = require('../models/user')

module.exports = {
    index,
    new: newGame,
    create,
    show,
    delete: deleteGame
}

function deleteGame(req, res) {
    Game.findOneAndDelete (
        { _id: req.params.id, user:req.user}, function(err) {
          res.redirect('/games');
        });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game) {
        Game.find({game: game._id}, function(err, games) {
            res.render('games/show', { title: 'Game Details', game});
        });
    });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userAvatar = req.body.avatar;
    req.body.userName =req.body.name;
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