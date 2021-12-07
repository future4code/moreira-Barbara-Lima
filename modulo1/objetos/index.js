// 1.  Leia o código abaixo
    
//     ```jsx
//     const filme = {
//     	nome: "Auto da Compadecida", 
//     	ano: 2000, 
//     	elenco: [
//     		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//     		"Virginia Cavendish"
//     		], 
//     	transmissoesHoje: [
//     		{canal: "Telecine", horario: "21h"}, 
//     		{canal: "Canal Brasil", horario: "19h"}, 
//     		{canal: "Globo", horario: "14h"}
//     		]
//     }
    
//     console.log(filme.elenco[0])
//     console.log(filme.elenco[filme.elenco.length - 1])
//     console.log(filme.transmissoesHoje[2])
//     ```
    
//     a) O que vai ser impresso no console?
    
// 2. Leia o código abaixo
    
//     ```jsx
//     const cachorro = {
//     	nome: "Juca", 
//     	idade: 3, 
//     	raca: "SRD"
//     }
    
//     const gato = {...cachorro, nome: "Juba"}
    
//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)
//     ```
    
//     a) O que vai ser impresso no console?
    
//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    
// 3. Leia o código abaixo
    
//     ```jsx
//     function minhaFuncao(objeto, propriedade) {
//     	return objeto[propriedade]
//     }
    
//     const pessoa = {
//       nome: "Caio", 
//       idade: 23, 
//       backender: false
//     }
    
//     console.log(minhaFuncao(pessoa, "backender"))
//     console.log(minhaFuncao(pessoa, "altura"))
//     ```
    
//     a) O que vai ser impresso no console?
    
//     b) Explique o valor impresso no console. Você sabe por que isso aconteceu?


// Exercícios de escrita de código
// Exercício 1:

// a)

const dados = { 
    nome: "Barbara",
    apelidos: ["babi", "babizinha", "baby"]
}
function apelidos1(dados) {
    apel1 = dados.apelidos[0]
    apel2 = dados.apelidos[1]
    apel3 = dados.apelidos[2]
    console.log(`Eu sou ${dados.nome}, mas pode me chamar de: ${apel1}, ${apel2}, ${apel3}.`)

}
apelidos1(dados)

// b)

const novosDados = {
    ... dados,
    apelidos: ["sol", "lua", "céu"]

}
apelidos1(novosDados)




// Exercício 2:

// a)

const pessoa1 = {
    nome: "João",
    idade: 22,
    profissão: "Marceneiro"
}

const pessoa2 = {
    nome: "Pedro",
    idade: 25,
    profissão: "Pescador"
}

// b)

// function dadosPessoais (pessoa1) {
//     const dadosPessoa1 = [pessoa1.nome, pessoa1.nome.length,pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length]
//     console.log(dadosPessoa1)
// }
// dadosPessoais(pessoa1)
// dadosPessoais(pessoa2)


function dadosPessoais (x) {
    const dadosPessoa1 = [x.nome, x.nome.length,x.idade, x.profissão, x.profissão.length]
    console.log(dadosPessoa1)
}
dadosPessoais(pessoa1)
dadosPessoais(pessoa2)


// Exercício 3:

// a) 

const carrinho = []


// b)  

const fruta1 = {
    nome: "Maça", 
    Disponibilidade: true
}
const fruta2 = {
    nome: "Mamão", 
    Disponibilidade: true
}
const fruta3 = {
    nome: "Melão", 
    Disponibilidade: true
}

// c)

function compras(x) {
    carrinho.push(fruta1, fruta2, fruta3)
    console.log(carrinho)
}

// d)

compras(carrinho)

//********************************************

// Desafio:

//a)