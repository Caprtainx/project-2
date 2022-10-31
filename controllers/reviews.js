const Game = require('../models/game');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteReview
}

function deleteReview(req, res, next) {
    // Note the cool "dot" syntax to query for a movie with a
    // review nested within an array
    Game.findOne({
      'reviews._id': req.params.id,
      'reviews.user': req.user._id
    }).then(function(game) {
      if (!game) return res.redirect('/games');
      game.reviews.remove(req.params.id);
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
        
        // We push an object with the data for the
        // review subdoc into Mongoose arrays
        game.reviews.push(req.body);
        game.save(function(err) {
          // Step 5: Respond with a redirect because we've mutated data
          res.redirect(`/games/${game._id}`);
        });
      });
}