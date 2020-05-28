const routes = require('express').Router();

const auth = require('../controllers/auth')

routes.post('/login', async (req, res) => {
	await auth().authenticate(req.body).then(function(resposta){
		res.status(200).json(resposta);
	}).catch(function(error){
		res.status(500).json({error: 'Erro ao Logar Usuario Invalido!'});
	});
});

module.exports = routes;
