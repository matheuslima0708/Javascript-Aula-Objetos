// const cliente = {
//     nome: "Joao",
//     idade: "24",
//     email: "joao@firma.com",
//     telefone: ["1155555550","114444440"],
// }

// cliente.enderecos = [{
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934",
//     }, 
// ];

// function ligaParaCliente(telefoneComercial, telefoneResidencial){
//     console.log(`Ligando para ${telefoneComercial}`);
//     console.log(`Ligando para ${telefoneResidencial}`);
// }

// ligaParaCliente(...cliente.telefone);
// const encomenda = {
//     destinatario: cliente.nome,
//     ...cliente.enderecos[0]
// };

// console.log(encomenda);

//-----------------------------
//Exercicio de exemplo
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Anduril",
    capa: "capa elfica +2"
}

// const guerreiro = {fichaGuerreiro, equipoGuerreiro}
// console.log(guerreiro);

const guerreiro = {...fichaGuerreiro,...equipoGuerreiro};
console.log(guerreiro);
console.log(guerreiro.nome);


