const Game = require('../models/game');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteComment,
    update,
    edit
}

function edit(req, res) {
  Game.findOne({'comments._id': req.params.id}, function(err, game) {
    const comment = game.comments.id(req.params.id);
    console.log(comment);
    res.render('comments/edit', { title: 'Edit comment', comment});
  })
}

function update(req, res) {
  Game.findOne({'games._id': req.params.id}, function(err, game) {
    const comment = game.comments.id(req.params.id);
    comment.content = req.body.content
    game.save(function(err) {
      res.redirect(`/games/${game._id}`);
    })
  })
}

function deleteComment(req, res, next) {
    Game.findOne({
      'comments._id': req.params.id,
      'comments.user': req.user._id
    }).then(function(game) {
      if (!game) return res.redirect('/games');
      game.comments.remove(req.params.id);
      game.save().then(function() {
        res.redirect(`/games/${game._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        game.comments.push(req.body);
        game.save(function(err) {
          res.redirect(`/games/${game._id}`);
        });
      });
}