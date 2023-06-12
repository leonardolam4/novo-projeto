const BookInstance = require('../models/bookinstance');

// Lista de instâncias de livros
exports.bookinstance_list = function(req, res) {
  BookInstance.find({}, 'book imprint status due_back')
    .populate('book')
    .exec(function(err, list_bookinstances) {
      if (err) return next(err);
      res.json(list_bookinstances);
    });
};

// Detalhes de uma instância de livro
exports.bookinstance_detail = function(req, res, next) {
  BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function(err, bookinstance) {
      if (err) return next(err);
      if (bookinstance == null) {
        const error = new Error('BookInstance not found');
        error.status = 404;
        return next(error);
      }
      res.json(bookinstance);
    });
};

// Criação de uma instância de livro
exports.bookinstance_create = function(req, res) {
  const bookinstance = new BookInstance({
    book: req.body.book,
    imprint: req.body.imprint,
    status: req.body.status,
    due_back: req.body.due_back,
    url: req.body.url
  });

  bookinstance.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json(bookinstance);
  });
};

// Atualização de uma instância de livro
exports.bookinstance_update = function(req, res) {
  BookInstance.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, bookinstance) {
    if (err) {
      return next(err);
    }
    res.json(bookinstance);
  });
};

// Exclusão de uma instância de livro
exports.bookinstance_delete = function(req, res) {
  BookInstance.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      return next(err);
    }
    res.json({ message: 'BookInstance deleted successfully!' });
  });
};