const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clientEmString = JSON.stringify(dados);
console.log(clientEmString);
console.log(typeof clientEmString);

console.log(clientEmString.nome);

JSON.parse(clientEmString);
const objetoCliente = JSON.parse(clientEmString);
console.log(objetoCliente);