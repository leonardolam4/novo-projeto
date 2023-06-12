const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rotas para os livros
router.get('/', bookController.book_list);
router.get('/:id', bookController.book_detail);
router.post('/', bookController.book_create);
router.put('/:id', bookController.book_update);
router.delete('/:id', bookController.book_delete);

module.exports = router;