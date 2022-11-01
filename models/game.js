const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const gameSchema = new Schema({
    title: {
        type: String,
    },
    releaseDate: {
        type: Date,
    },
    company: {
        type: String,
    },
    gameDetails: {
        type: String
    },
    createdBy: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      comments: [commentSchema],
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);