const info= ()=>`Welcome GraphQl Api`


async function users(parent,args,context,info)
{
    console.log('users query')
    const users = await context.prisma.users({orderBy:'id_DESC'})
    return users
}
async function price(parent,args,context,info)
{
    console.log('price query')
    
    return 14500
}
async function peseesByUser(parent,args,context,info)
{
    const pesees = await context.prisma.user({id:args.user}).pesees({orderBy:'id_DESC',where:{active:true}})
    return pesees
    
}
async function enrolementsByUser(parent,args,context,info)
{
    const enrolements= await context.prisma.user({id:args.user}).enrolements({orderBy:'id_DESC'})
    return enrolements
    
}

module.exports={
   users,
   price,
   peseesByUser,
   enrolementsByUser
}