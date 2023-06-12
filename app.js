const express = require('express');
const app = express();
const port = 3000;

const bookRouter = require('./routes/book');
const bookInstanceRouter = require('./routes/bookinstance');
const authorRouter = require('./routes/author');
const genreRouter = require('./routes/genre');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use('/books', bookRouter);
app.use('/bookinstances', bookInstanceRouter);
app.use('/authors', authorRouter);
app.use('/genres', genreRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});