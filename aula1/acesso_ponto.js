const cliente = {
    nome: "Andre",
    idade: 32,
    cpf:"11222333345",
    email: "andre@dominio.com",
}

console.log(` o nome do cliente e ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`); 

console.log(`Os tres primeiros digitos do CPF sao ${cliente.cpf.substring( 0, 3)}`)