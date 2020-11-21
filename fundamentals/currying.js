const user = {
  nome:'wendel',
  ultimoNome:'rios'
}

function getUser(user){
  return{
    ...user,
    fullName:`${user.nome} ${user.ultimoNome}`
  }
}

const usuarioNomeCompleto = getUser(user)
console.log(usuarioNomeCompleto)