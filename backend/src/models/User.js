// models/User.js
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		id: {
			type:  DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
		password:{
			type: DataTypes.STRING,
			allowNull: false,
        },
        created_at:{
			type: DataTypes.DATE,
			allowNull: false
		}
	},{tableName: 'users'})
}
