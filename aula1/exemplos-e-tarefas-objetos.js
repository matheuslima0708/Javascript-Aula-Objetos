// const pet = {
//     nome: "rex",
//     dataDeNascimento: "12/03/2017",
//     brinquedoFavorito: "bolinha",
//     cor: "cinza",
// }

//------------------------------------***----------------------
// DIFERENCAS ENTRE VAR, LET E CONST
//------------------------------------***----------------------
// var exibeMensagem = function() {
//     var mensagemForaDoIf = 'Caelum';
//     if(true) {
//         var mensagemDentroDoIf = 'Alura';
//         console.log(mensagemDentroDoIf);
//     }
//     console.log(mensagemForaDoIf);
//     console.log(mensagemDentroDoIf);

// }

// exibeMensagem();

// var exibeMensagem = function() {
//     mensagem = 'Alura';
//     console.log(mensagem);
//     var mensagem;
// }

// exibeMensagem();

// void function() {
//     console.log(mensagem);
// }();
// var mensagem;

// var exibeMensagem = function (){
//     if(true) {
//         var escopoFuncao = 'Caelum';
//         let escopoBloco = 'Alura';

//         console.log(escopoBloco);
//     }
//     console.log(escopoFuncao);
//     console.log(escopoBloco);
// }

// exibeMensagem();

// void function() {
//     let mensagem;
//     console.log(mensagem);
// }();

// void function() {
//     const mensagem = 'Alura';
//     console.log(mensagem);
//     mensagem = 'Caelum';
// }();

//------------------------------------***----------------------
//COMO DELETAR UMA PROPRIEDADE
//------------------------------------***----------------------
// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "Mago",
//     nivel: "20",
//     aliado: {
//         nome: "Saruman",
//         classe: "Mago"
//     },
//     status: "desaparecido"
// }
// delete objPersonagem.aliado
// delete objPersonagem["status"];
// console.log(objPersonagem.aliado);
// console.log(objPersonagem.status);

// const delProp = delete objPersonagem.aliado;
// const delPropInexistente = delete objPersonagem["endereco"]

// console.log(delProp);
// console.log(delPropInexistente);

//------------------------------------***----------------------
//ADICIONANDO NOVOS CAMPOS OBJETOS
//------------------------------------***----------------------
// const pessoa = {
//     nome: "Bruce Banner",
//     dataNascimento: "25/01/1990",
//     carteiraIdentidade: "997776-X",
//     email: "profbanner@email.com",
//     telefone: "+5528877776666",
//     cidade: "Cachoeira de Itapemirim",
//     estado: "ES"
// }

// pessoa.CPF="15346626522-65";
// pessoa.seguroSocial="854321985-9";
// console.log(` os 4 primeiros digitos do CPF  ${pessoa.CPF.substring(0,4)}`);
// console.log(pessoa);

// //------------------------------------***----------------------
//CRIACAO DE OBJETOS

// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "Mago",
//     nivel: "20",
// }

// const objPersonagem2 = Object.create(objPersonagem)
// objPersonagem2.nome = "Gandalf, o Cinzento";
// objPersonagem2.classe = "Guerreiro";

// const objPersonagem3 = Object.create(objPersonagem)
// objPersonagem3.nome = "Legolas";
// objPersonagem3.classe = "Arqueiro";
// objPersonagem3.cabelo = "loiro"
// console.log(objPersonagem.nome, objPersonagem.classe);
// console.log(objPersonagem2.nome, objPersonagem2.classe);
// console.log(objPersonagem3.nome, objPersonagem3.cabelo);

 //------------------------------------***----------------------

const cliente = {
    nome: "jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+5500333338888", "11887678276"]
}

    cliente.animalEstimacao = [{
        nome: "Kripto",
        raca: "Cao",
        vacinado: true
    }]

    cliente.animalEstimacao.push({
        nome: "Lex",
        raca: "Gato",
        vacinado: false
    })

console.log(cliente);


