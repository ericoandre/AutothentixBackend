require('dotenv').config()
const server = require('./server')

const porta = process.env.PORT

server.listen(porta, () => {
	console.log(`Servidor de pé em http://localhost:${porta}`)
	console.log('Pra derrubar o servidor: ctrl + c')
})
