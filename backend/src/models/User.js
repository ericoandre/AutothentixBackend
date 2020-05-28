// models/User.js
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		login:{
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		password:{
			type: DataTypes.STRING(40),
			allowNull: false,
		}

	},{tableName: 'users'})
}