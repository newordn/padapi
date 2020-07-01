const bcrypt = require('bcryptjs')
const shortid = require('shortid')
const sendMail = require('../helpers/mail')
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
        user =  await context.prisma.user({email:args.phone})
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
async function userSetPassword(parent,args,context,info)
{
    console.log('user SetPassword mutation')
    let password = await bcrypt.hash(args.password,10)
    
    const user = await context.prisma.updateUser({data:{password:args.password},where:{id:args.user}})
    return user
}
async function reset(parent,args,context,info)
{
    console.log('user reset mutation')
    const code = shortid.generate()
    const user = await context.prisma.updateUser({data:{code},where:{id:args.phone}})
    sendMail(user.email,"Code de réinitialisation",code)
    return user
}
module.exports={
    user,
    signin,
    userSetPassword,
    reset
}