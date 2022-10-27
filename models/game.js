const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    releaseDate: Date,
    company: String,
});