// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("qual a altura do retangulo?")
const largura = Number(prompt("qual a largura do retangulo?"))
const area = altura*largura
  console.log(area)
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual o ano atual?"))
const anoNascimento = Number(prompt("Qual o ano no seu nascimento!?"))
const idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura*altura)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual é a sua idade?")
const email = prompt("Qual é seu emial?")
console.log("Meu nome é",nome,",tenho",idade,"anos, e o meu email é",email,".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corUm = prompt("Diga sua primeira cor favorita?")
const corDois = prompt("Diga sua primeira cor favorita?")
const corTres = prompt("Diga sua primeira cor favorita?")
const coresfavoritas = [corUm, corDois, corTres]
console.log(coresfavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
  return string
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const minimoIngresso = custo / valorIngresso
return minimoIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.length
  string2 = string2.length
  const tamanho = string1 - string2
return tamanho === 0
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let x = array.length
return array[x-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let x = array.length
array.splice()
// array.push(array.splice(x-1,1))
// array.push(array.splice(0,1)[0])
// return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toUpperCase()
string2 = string2.toUpperCase()
return string1 === string2
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Ano Atual?"))
const anoNascimento = Number(prompt("Ano Nascimento?"))
const anoCarteira = Number(prompt("Ano de emissão Carteira identidade?"))

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}