const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {
        type:String,
    },
    releaseDate: {
        type: Date,
    },
    company: {
        type: String,
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

module.exports = mongoose.model('Game', gameSchema);