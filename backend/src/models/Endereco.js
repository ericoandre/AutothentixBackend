// models/Endereco.js
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('endereco', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		logradouro:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		bairro:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		localidade:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		uf:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		created_at:{
			type: DataTypes.DATE,
			allowNull: false
		}
	},{tableName: 'endereco'})
}
