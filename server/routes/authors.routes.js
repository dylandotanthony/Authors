const AuthorController = require('../controllers/authors.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors); 
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}