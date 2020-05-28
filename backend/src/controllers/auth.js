const jwt = require('jsonwebtoken')

const db = require('../persistencia')

module.exports = () => {
	generateToken =  (params = {}) => {
		return jwt.sign(params, "erxasdas@#@*&#*%@&!%&$@7784546!", { expiresIn: 60 * 60 * 24 })
	}
	return {
		authenticate: async (user) => {
			const { email, password } = user
			const { id } = await db().models.user.findOne({attributes: ['id'], where: {email: email, password: password}})
			return {token: generateToken({ id: id })}
		}
	}	
}