const Genre = require('../models/genre');

// Lista de gêneros
exports.genre_list = function(req, res) {
  Genre.find({}, 'name')
    .exec(function(err, list_genres) {
      if (err) return next(err);
      res.json(list_genres);
    });
};

// Detalhes de um gênero
exports.genre_detail = function(req, res, next) {
  Genre.findById(req.params.id)
    .exec(function(err, genre) {
      if (err) return next(err);
      if (genre == null) {
        const error = new Error('Genre not found');
        error.status = 404;
        return next(error);
      }
      res.json(genre);
    });
};

// Criação de um gênero
exports.genre_create = function(req, res) {
  const genre = new Genre({
    name: req.body.name,
    url: req.body.url
  });

  genre.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json(genre);
  });
};

// Atualização de um gênero
exports.genre_update = function(req, res) {
  Genre.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, genre) {
    if (err) {
      return next(err);
    }
    res.json(genre);
  });
};

// Exclusão de um gênero
exports.genre_delete = function(req, res) {
  Genre.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Genre deleted successfully!' });
  });
};