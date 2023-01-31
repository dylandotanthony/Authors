const Author = require('../models/authors.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// Create 
module.exports.createAuthor = (request, response) => {
    Author.create(request.body) 
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// READ

// Get ALL 
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => {
            console.log(authors); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(authors);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
// Get one 
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// Update 
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

// Delete 

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}





