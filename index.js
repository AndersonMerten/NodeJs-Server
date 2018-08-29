const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./app/routes/app.routes.js');
const app = express();
const json = require('./clientes.json');

app
  .use(bodyParser.urlencoded({ extended: true }))// parse requests of content-type - application/x-www-form-urlencoded
  .use(bodyParser.json()) // parse requests of content-type - application/json
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/dados',(req,res) => res.render('pages/db', {data: json}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  require('./app/routes/app.routes.js')(app);
  
/*
  // Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
*/