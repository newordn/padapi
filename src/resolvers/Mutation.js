const bcrypt = require('bcryptjs')

async function user(parent,args,context,info)
{
    console.log('user mutation')
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password})
    return user
}
async function signin(parent,args,context,info)
{
    console.log('user connexion mutation')
    let user =  await context.prisma.user({phone:args.phone})
    if(!user){
        user =  await context.prisma.user({email:args.email})
        if(!user){
        throw new Error("L'utilisateur n'existe pas. Inscrivez-vous")
        }
    }
    const valid = await bcrypt.compare(args.password,user.password)
    if(!valid){
        throw new Error('Mot de passe incorrect')
    }
   
    return user

}
module.exports={
    user,
    signin
}