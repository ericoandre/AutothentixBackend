const db = require('../persistencia')

module.exports = () => {
	return {
		cadastra: async (user)=>{
			const { email, cnpj, password, phone } = user
			if (await db().models.user.count({where:{email:email}})>0 || await db().models.juridic_person.count({where:{cnpj:cnpj}})>0 ){
				return true;
			}else{
				const { id } = await db().models.user.create({email:email, password:password})
				try{
					await db().models.juridic_person.create({cnpj:cnpj, user_id:id, phone:phone})
					return false;
				}catch(error){
					console.log(error);
					await db().models.user.destroy({where: {id:id}});
					return true;
				}
			}
		}
	}
}
