const express = require('express');
const router = express.Router();
const bookInstanceController = require('../controllers/bookInstanceController');

// Rotas para as instâncias de livros
router.get('/', bookInstanceController.bookinstance_list);
router.get('/:id', bookInstanceController.bookinstance_detail);
router.post('/', bookInstanceController.bookinstance_create);
router.put('/:id', bookInstanceController.bookinstance_update);
router.delete('/:id', bookInstanceController.bookinstance_delete);

module.exports = router;