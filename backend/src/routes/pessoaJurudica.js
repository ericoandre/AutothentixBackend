const routes = require('express').Router();
const juridicperson = require('../controllers/JuridicPerson');

routes.post('/pjuridica', async (req, res) => {
	try{
		if (await juridicperson().cadastra(req.body)){
			res.status(500).json({ error: "Usuario já exists"});
			return 
		}
		res.status(200).json({ data: "Usuario Cadastrado"});
		return 
	}catch(err){
		console.log(err);
		res.status(404).json({error: "Erro na consulta" });
		return 
	}
});
module.exports = routes;
