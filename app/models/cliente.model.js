const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    nome: String,   
    idade: String,
    altura: Number,
    peso: Number
});


module.exports = mongoose.model('Cliente', ClienteSchema);
