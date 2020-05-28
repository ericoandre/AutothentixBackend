const routes = require('express').Router();

const naturalperson = require('../controllers/NaturalPerson');

routes.post('/pfisica', async (req, res) => {
	try{
		if (await naturalperson().cadastra(req.body)){
			res.status(500).json({ error: 'Usuario já exists'});
			return 
		}
		res.status(200).json({ data: 'Usuario Cadastrado'});
		return 
	}catch(err){
		console.log(err);
		res.status(404).json({ error: 'Erro na consulta' });
		return 
	}
});

module.exports = routes;
