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
    const altura = prompt("Qual é a altura do retangulo?")
    const largura = prompt("Qual é a largura do retangulo?")
    console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano nasceu?"))

  console.log (anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / (altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu email?")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Qual a sua 1ª cor favorita?")
  const corFavorita2 = prompt("Qual a sua 2ª cor favorita?")
  const corFavorita3 = prompt("Qual a sua 3ª cor favorita?")

  console.log ([corFavorita1, corFavorita2, corFavorita3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return string1.length === string2.length
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiroNumero = array[0]
  const ultimoNumero = array[array.length-1]

  array.splice(0,1)
  array.pop()

  array.unshift(ultimoNumero)
  array.push(primeiroNumero)
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  string1 = string1.toUpperCase
  string2 = string2.toUpperCase

  return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Ano atual?"))
  const anoNascimento = Number(prompt("Ano Nascmento?"))
  const anoEmissaoIdentidade = Number(prompt ("Ano Emissão da Identide?"))
  const idade = anoAtual - anoNascimento 
  const tempoDeCNH = anoEmissaoIdentidade - anoAtual 

  if ( idade <= 20 && tempoDeCNH >= 5) {
    console.log(tempoDeCNH >== 5) 

  } 


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}