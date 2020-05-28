const db = require('../persistencia');

module.exports = () => {
	return {
		cadastra: async (user)=>{
			const { email, cpf, name, password, birthdate, sex, phone } = user
			if (await db().models.user.count({where:{email:email}})>0 || await db().models.natural_person.count({where:{cpf:cpf}})>0 ){
				return true;
			}else{
				const { id } = await db().models.user.create({email:email, password:password})

				try{
					await db().models.natural_person.create({cpf:cpf, name:name, birthdate:birthdate, sex:sex, phone:phone, user_id:id})
				}catch(error){
					await db().models.user.destroy({where: {id:id}});
				}
			}
		}
	}
}
