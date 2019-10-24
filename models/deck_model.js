const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    name: String,
    pilot: String,
    colors: [String],
    decklist: [{type: Schema.Types.ObjectId, ref: 'card'}],
    wins: Number,
    losses: Number,
    draftFormat: String,
    numberOfPlayers: Number
  })


  module.exports = {
    deck: mongoose.model('deck', DeckSchema),
  }