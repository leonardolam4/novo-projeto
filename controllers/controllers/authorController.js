const Author = require('../models/author');

// Lista de autores
exports.author_list = function(req, res) {
  Author.find({}, 'first_name family_name')
    .exec(function(err, list_authors) {
      if (err) return next(err);
      res.json(list_authors);
    });
};

// Detalhes de um autor
exports.author_detail = function(req, res, next) {
  Author.findById(req.params.id)
    .exec(function(err, author) {
      if (err) return next(err);
      if (author == null) {
        const error = new Error('Author not found');
        error.status = 404;
        return next(error);
      }
      res.json(author);
    });
};

// Criação de um autor
exports.author_create = function(req, res) {
  const author = new Author({
    first_name: req.body.first_name,
    family_name: req.body.family_name,
    date_of_birth: req.body.date_of_birth,
    date_of_death: req.body.date_of_death,
    name: req.body.name,
    lifespan: req.body.lifespan,
    url: req.body.url
  });

  author.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json(author);
  });
};

// Atualização de um autor
exports.author_update = function(req, res) {
  Author.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, author) {
    if (err) {
      return next(err);
    }
    res.json(author);
  });
};

// Exclusão de um autor
exports.author_delete = function(req, res) {
  Author.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Author deleted successfully!' });
  });
};