const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Rotas para os autores
router.get('/', authorController.author_list);
router.get('/:id', authorController.author_detail);
router.post('/', authorController.author_create);
router.put('/:id', authorController.author_update);
router.delete('/:id', authorController.author_delete);

module.exports = router;