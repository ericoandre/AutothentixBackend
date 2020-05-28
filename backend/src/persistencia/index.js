const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

let database = null;

const loadModels = (sequelize, Sequelize) => {
	const dir = path.join(__dirname, '../models')
	const models = []

	fs.readdirSync(dir).forEach(file => {
		const modelDir = path.join(dir, file)
		console.log(modelDir)
		const model = require(modelDir)(sequelize, Sequelize)
		models[model.name] = model
	})
	return models
}

module.exports = (deps) => {
	if(!database){
		const sequelize = new Sequelize(
			process.env.MYSQL_DATABASE,
			process.env.MYSQL_USER,
			process.env.MYSQL_PASSWORD,
			{dialect: 'mysql', define: {underscored: true}}
		)
		database = {
			sequelize,
			Sequelize,
			models:{}
		}
		database.models = loadModels(sequelize, Sequelize);
		sequelize.sync().done(() => {database})
	}

	return database;
}