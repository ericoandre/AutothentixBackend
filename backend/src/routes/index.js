const routes = require('express').Router();

const db = require('../persistencia');

const User = require('../config')

routes.get('/', async (req, res) => {
    //userdoc user
	await db().models.user.findAll().then(function(resposta){
		res.status(200).json({ data:resposta });
	}).catch(function(error){
		res.status(500).json({ error: error });
    });
});

module.exports = routes;
