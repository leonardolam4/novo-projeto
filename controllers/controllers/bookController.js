const Book = require('../models/book');

// Lista de livros
exports.book_list = function(req, res) {
  Book.find({}, 'title author')
    .populate('author')
    .exec(function(err, list_books) {
      if (err) return next(err);
      res.json(list_books);
    });
};

// Detalhes de um livro
exports.book_detail = function(req, res, next) {
  Book.findById(req.params.id)
    .populate('author genre')
    .exec(function(err, book) {
      if (err) return next(err);
      if (book == null) {
        const error = new Error('Book not found');
        error.status = 404;
        return next(error);
      }
      res.json(book);
    });
};

// Criação de um livro
exports.book_create = function(req, res) {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    ISBN: req.body.ISBN,
    genre: req.body.genre,
    url: req.body.url
  });

  book.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json(book);
  });
};

// Atualização de um livro
exports.book_update = function(req, res) {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, book) {
    if (err) {
      return next(err);
    }
    res.json(book);
  });
};

// Exclusão de um livro
exports.book_delete = function(req, res) {
  Book.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Book deleted successfully!' });
  });
}