const jwt = require('jsonwebtoken')

const jwtMiddleware = (deps) =>{
	return async (req, res, next) => {
		if(!deps.exclusion.includes(req.href())){
			const token = req.headers['x-access-token']

			if(!token){
				res.send(403, {error: 'token nao fornecido'})
				return false
			}
			try{
				req.decoded = jwt.verify(token, process.env.JWT_SECRET)
			}catch(error){
				res.send(403, {error: 'Falha ao Autenticar'})
				return false
			}
		}
		next()
	}
}
module.exports = jwtMiddleware
