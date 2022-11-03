const Game = require('../models/game');
const User = require('../models/user')

module.exports = {
    index,
    new: newGame,
    create,
    show,
    delete: deleteGame,
    edit,
    update
}

function update(req, res) {
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, game) {
        if (err || !game) return res.redirect('/games');
        res.redirect(`/games/${game._id}`);
    });
}

function edit(req, res) {
    Game.findOne({_id: req.params.id}, function(err, game) {
        console.log({game});
        if (err || !game) return res.redirect('/games');
        res.render('games/edit', {game});
    });
}

function deleteGame(req, res) {
    Game.findOneAndDelete(
        req.params.id, function(err) {
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
    req.body.userAvatar = req.user.avatar;
    req.body.userName =req.user.name;
    const game = new Game(req.body);
    game.save(function(err) {
      if (err) return res.redirect('/games/new');
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