module.exports = (app) => {
    const clientes = require('../controllers/app.controller.js');

    // Create a new Note
    app.post('/clientes', clientes.create);

    // Retrieve all Notes
    app.get('/clientes', clientes.findAll);

    // Retrieve a single Note with noteId
    app.get('/clientes/:clienteId', clientes.findOne);

    // Update a Note with noteId
    app.put('/clientes/:clienteId', clientes.update);

    // Delete a Note with noteId
    app.delete('/clientes/:clienteId', clientes.delete);
}