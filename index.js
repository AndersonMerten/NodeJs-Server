const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var json = require('./clientes.json');

for(cliente in json){
  console.log("Cliente");
  console.log(cliente);
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/dados',(req,res) => res.render('pages/db', {data: json}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
