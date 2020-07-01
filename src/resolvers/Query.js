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

module.exports={
   users,
   price
}