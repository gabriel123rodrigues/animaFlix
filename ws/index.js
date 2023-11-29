const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const database = require('./src/services/database');
const routes = require('./src/routes/filmes.routes');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);
app.listen(3000,()=>{
    console.log('meu servidor está funcionando');
});