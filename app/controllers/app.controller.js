const Cliente = require('../models/cliente.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
/*   if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
*/
    // Create a Client
    const cliente = new Cliente({
        nome : req.body.nome, 
        idade : req.body.idade,
        peso: req.body.peso,
        altura: req.body.altura
    });

    // Save client in the database
    cliente.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Client."
        });
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

    Cliente.find()
    .then(clientes => {
        res.send(clientes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving clients."
        });
    });

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Client content can not be empty"
        });
    }

    // Find note and update it with the request body
    Cliente.findByIdAndUpdate(req.params.clienteId, {
        nome : req.body.nome, 
        idade : req.body.idade,
        peso: req.body.peso,
        altura: req.body.altura
    }, {new: true})
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clienteId
            });
        }
        res.send(cliente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clienteId
            });                
        }
        return res.status(500).send({
            message: "Error updating client with id " + req.params.clienteId
        });
    });

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

    if(!req.body.content) {
        return res.status(400).send({
            message: "Client content can not be empty"
        });
    }

    // Find note and update it with the request body
    Cliente.findByIdAndUpdate(req.params.clienteId, {
        nome : req.body.nome, 
        idade : req.body.idade,
        peso: req.body.peso,
        altura: req.body.altura
    }, {new: true})
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clienteId
            });
        }
        res.send(cliente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clienteId
            });                
        }
        return res.status(500).send({
            message: "Error updating client with id " + req.params.clienteId
        });
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

    Cliente.findByIdAndRemove(req.params.clienteId)
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clienteId
            });
        }
        res.send({message: "Client deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clienteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete client with id " + req.params.clienteId
        });
    });

};