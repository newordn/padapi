const info= ()=>`Welcome GraphQl Api`


async function user(parent,args,context,info){
    console.log('user query')
    let profils = await context.prisma.profils({orderBy:'id_DESC'})
    
    return user
}

module.exports={
   user
}