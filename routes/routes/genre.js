const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Rotas para os gêneros
router.get('/', genreController.genre_list);
router.get('/:id', genreController.genre_detail);
router.post('/', genreController.genre_create);
router.put('/:id', genreController.genre_update);
router.delete('/:id', genreController.genre_delete);

module.exports = router;