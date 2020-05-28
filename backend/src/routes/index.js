//const db = require('../services/mysql')
const db = require('../persistencia')

const auth = require('../controllers/auth')

const routes = server => {
	auth().authenticate('erico', '1234567', response => {
		const { login, id } = response
		console.log(response)
	})
	
	server.post('/autenticacao', async (req, res, next) =>{
		try{
			const { login, password } = req.params
			//res.send(await db.auth().authenticate( login, password ))

			db().models.user.findAll({})
			.then(result => res.send(result))
			.catch(error => res.send({error: error.message}));
		}catch (error) {
			res.send(422, error)
		}
		next()
	})


	server.get('/categoria', async (req, res, next) =>{
		try{
			res.send(await db.categoria().all())
		}catch (error) {
			res.send(422, error)
		}
		next()
	})
	server.post('/categoria', async (req, res, next) =>{
		const { name } = req.params
		try{
			res.send(await db.categoria().save(name))
		}catch(error){
			res.send(422, error)
		}
		next()
	})
	server.put('/categoria', async (req, res, next) =>{
		const { id, name } = req.params
		try{
			res.send(await db.categoria().update(id, name))
		}catch(error){
			res.send(422, error)
		}
		next()
	})
	server.del('/categoria', async (req, res, next) =>{
		const { id } = req.params
		try{
			res.send(await db.categoria().del(id))
		}catch(error){
			res.send(422, error)
		}
		next()
	})

	server.get('/', (req, res, next) => {
		res.send('Enjoy!')
		next()
	})
}

module.exports = routes