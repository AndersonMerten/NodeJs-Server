const mongoose = require('mongoose');

const CabecalhoSchema = mongoose.Schema({
    nome: String,   
    idade: Number,
    nacionalidade: String,   
    estado_civil: String,   
    endereco: String,   
    numero: Number,
    bairro: String,   
    cidade: String,   
    estado: String,   
    CEP: String,   
    fone1: String,   
    fone2: String,   
    email: String
});

const ObjetivoSchema = mongoose.Schema({
    objetivo: String
});

const QualificacoesSchema = mongoose.Schema({
    qualificacao1: String,
    qualificacao2: String,
    qualificacao3: String,
    qualificacao4: String,
    qualificacao5: String
});

const FormacaoSchema = mongoose.Schema({
    formacao1: String,
    formacao2: String,
    formacao3: String,
    formacao4: String,
    formacao5: String
});

const IdiomaSchema = mongoose.Schema({
    idioma1: String,
    dominioIdioma1: String,
    idioma2: String,
    dominioIdioma2: String,
    idioma3: String,
    dominioIdioma3: String,
    
});

module.exports = mongoose.model('Cabecalho', CabecalhoSchema);
module.exports = mongoose.model('Objetivo', ObjetivoSchema);
module.exports = mongoose.model('Qualificacoes', QualificacoesSchema);
module.exports = mongoose.model('Formacao', FormacaoSchema);
module.exports = mongoose.model('Idioma', IdiomaSchema);