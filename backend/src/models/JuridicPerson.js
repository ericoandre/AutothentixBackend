// models/JuridicPerson.js
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('juridic_person', {
		cnpj: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
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
			type: DataTypes.UUID,
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
	},{tableName: 'juridic_person'})
}
