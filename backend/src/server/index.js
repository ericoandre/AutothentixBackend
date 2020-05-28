const express = require('express');
const bodyParser = require('body-parser');

const cors = require('./cors');
const jwtMiddleware = require('./jwtMiddleware');

const exclusion = ['/registra/pjuridica','/registra/pfisica','/auth/login','/']

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(jwtMiddleware({ exclusion }));

//Rotas
const routes = require('../routes');
const autentica = require('../routes/auth');
const pessoaFisica = require('../routes/pessoaFisica');
const pessoaJurudica = require('../routes/pessoaJurudica');

//Rotas caminhos
app.use('/',  routes );
app.use('/auth', autentica);
app.use('/registra', pessoaFisica);
app.use('/registra', pessoaJurudica);


module.exports = app
