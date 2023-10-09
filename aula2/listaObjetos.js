const cliente = {
    nome: "Joo",
    idade: "24",
    email: "joao@firma.com",
    telefone: ["1155555550","114444440"],
}

cliente.enderecos = [{
    rua: "R. Joseph Cliber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    }, 
];

cliente.enderecos.push({
    rua: "Rua Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos);