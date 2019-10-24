const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CardSchema = new Schema({
    name: String,
    cardTypes: [String],
    manaCost: String,
    colors: [String],
    rulesText: String,
    power: String,
    toughness: String,
    imageURL: String,
    usage: 0
  })

  

  module.exports = {
    card: mongoose.model('card', CardSchema),
  }