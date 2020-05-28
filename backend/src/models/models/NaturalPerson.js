// models/NaturalPerson.js
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('natural_person', {
		cpf: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			validate: {
				notEmpty: true,
			}
		},
		name:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		birthdate:{
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		sex:{
			type: DataTypes.ENUM,
			values: ['O', 'M', 'F'],
			allowNull: false,
			defaultValue: 'O',
			validate: {
				notEmpty: true,
			}
		},
		phone:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		user_id: {
			type:  DataTypes.UUID,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
			references: {
				model: 'users',
				key: 'id'
			}
		},
		end_id: {
			type:  DataTypes.UUID,
			references: {
				model: 'endereco',
				key: 'id'
			}
		},
		created_at:{
			type: DataTypes.DATE,
			allowNull: false
		}
	},{tableName: 'naturalPerson'})
}
