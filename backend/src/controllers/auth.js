const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

const db = require('../persistencia')

const auth = () => {
	return {
		authenticate: ( login, password, depds) => {
			db().models.user.findOne({where: {login: login, password: password}})
			.then(result => {
				console.log(result)
				const { login, id } = result
				const token = jwt.sign({ login, id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
				depds(token)
			})
			.catch(error => depds({error: "error ao logar"}))
		}
	}
}
module.exports = auth