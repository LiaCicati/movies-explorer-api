const mongoose = require('mongoose');
const validator = require('validator');
const BadRequestError = require('../errors/BadRequestError');

const validatorURL = (url) => {
  if (!validator.isURL(url)) {
    throw new BadRequestError('Введён неверный формат ссылки');
  }
  return url;
};

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: validatorURL,
  },
  trailer: {
    type: String,
    required: true,
    validate: validatorURL,
  },
  thumbnail: {
    type: String,
    required: true,
    validate: validatorURL,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('movie', movieSchema);
