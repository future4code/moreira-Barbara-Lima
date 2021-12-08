// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. Leia o código abaixo:
    
//     ```jsx
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)
    
//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }
//     ```
    
//     a) Explique o que o código faz. Qual o teste que ele realiza? 
    // Ele testa se o número é par, ou seja, divisivel por 2. O teste realizado é de resto da divisão.

//     b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Para números pares
    
//     c) Para que tipos de números a mensagem é "Não passou no teste"? 
    // Para números em que o resto da divisão é diferente de zero.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
//     ```jsx
//     let fruta = prompt("Escolha uma fruta")
//     let preco
//     switch (fruta) {
//       case "Laranja":
//         preco = 3.5
//         break;
//       case "Maçã":
//         preco = 2.25
//         break;
//       case "Uva":
//         preco = 0.30
//         break;
//       case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM c.
//       default:
//         preco = 5
//         break;
//     }
//     console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//     ```
    
//     a) Para que serve o código acima?

// o código retorna o valor da fruta escolhida pelos usuário.

    
//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// O preço da fruta Maçã é R$ 2,25
    
//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    

// O preço da fruta Pêra é R$ 5,5

// 3. Leia o código abaixo:
    
//     ```jsx
//     const numero = Number(prompt("Digite o primeiro número."))
    
//     if(numero > 0) {
//       console.log("Esse número passou no teste")
//     	let mensagem = "Essa mensagem é secreta!!!"
//     }
    
//     console.log(mensagem)
//     ```
    
//     a) O que a primeira linha está fazendo? recebendo do usuário um número.
    
//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?  Essa mensagem é secreta!!!

//E se fosse o número -10? não imprimiria nada...o código não possui unstrução para casos do número<0.
    
//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.



// Exercícios de escrita de código

// Exercício 1


// const idade = Number(prompt("Qual é a sua idade?"))

// function motorista (idade){
//     if (idade >= 18) {
//         console.log("Parabéns, você pode dirigir!")
//     } else {
//         console.log("Que pena, você ainda não têm idade para dirigir!!")
//     }
// }

// motorista(idade)


// // Exercício 2:

// const turnoEscolar = prompt("Por favor, informe seu turno escolar. Digite M (para Matutino), V ( para Vespertino), N ( para Noturno).")
// const turnoEscolar1 = turnoEscolar.toUpperCase()

// // console.log(turnoEscolar1)

// function CumprimentosDoDia(turnoEscolar1) {
//     if (turnoEscolar1 === "M") {
//         console.log("Bom dia!")

//     } else if (turnoEscolar1 === "V") {
//         console.log("Boa Tarde!")

//     } else {
//         console.log("Boa Noite!")
//     }

// }

// CumprimentosDoDia(turnoEscolar1)


//Exercício 3:

// function cumprimentosDoDiaSwitch(turnoEscolar1) {
//     switch(turnoEscolar1){
//         case("M"):
//         console.log("Bom dia!")
//         break
//         case("V"):
//         console.log("Boa Tarde!")
//         break
//         case("N"):
//         console.log("Boa Noite!")
//         break


//     }
// }
// cumprimentosDoDiaSwitch(turnoEscolar1)


// const generoFilme = prompt("Qual genero do filme que vai assistir?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const generoFilme1 = generoFilme.toUpperCase()


// function assistirFilme (generoFilme, valorIngresso) {
//     if (generoFilme === "FANTASIA" && valorIngresso <= 15) {
//         console.log("Bom filme!")
//     } else {
//         console.log("HUmm... Escolha outro Filme!")
//     }
// }
// assistirFilme (generoFilme1, valorIngresso)

// Desafio: 

// 1)

// const generoFilme = prompt("Qual genero do filme que vai assistir?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const generoFilme1 = generoFilme.toUpperCase()
// const lanchinho = prompt ("Qual lanchinho vai te acompanhar durante o filme?") 

// function assistirFilme (generoFilme, valorIngresso) {
//     if (generoFilme === "FANTASIA" && valorIngresso <= 15) {
//         console.log(`Bom filme! e aproveite seu ${lanchinho} !`)
//     } else {
//         console.log("HUmm... Escolha outro Filme!")
//     }
// }


// assistirFilme (generoFilme1, valorIngresso)

// 2)

const nome = prompt("Qual é o seu  nome?")
const tipoDeJogo = prompt("Qual o tipo de jogo? (IN para internacional e DO para jogos domésticos!)")
const etapaDoJogo = prompt ("Qual a etapa do jogo? (SF - Semi-Final, DT - decisão terceiro lugar, FI - FINAL)")
const categoria = Number(prompt("Qual a categoria? (1, 2, 3 e 4"))
const quantidadeIngresso = Number(prompt("Qual a quantidade de ingresso?"))

function valorIngresso (tipoDeJogo, etapaDoJogo, categoria){
    if(tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1){
        const valorIngressoIndividual = 1320
        console.log(valorIngressoIndividual)
    } 









// function valorIngresso (tipoDeJogo, etapaDoJogo, categoria){
//     switch(tipoDeJogo, etapaDoJogo, categoria){
//         case(tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1):
//             const valorIngressoIndividual = 1320
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2):
//             const valorIngressoIndividual = 880
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3):
//             const valorIngressoIndividual = 550
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4):
//             const valorIngressoIndividual = 220
//             break
//         case(tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1):
//             const valorIngressoIndividual = 660
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2):
//             const valorIngressoIndividual = 440
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3):
//             const valorIngressoIndividual = 330
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4):
//             const valorIngressoIndividual = 170
//             break  
//         case(tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1):
//             const valorIngressoIndividual = 1980
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2):
//             const valorIngressoIndividual = 1320
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3):
//             const valorIngressoIndividual = 880
//             break
//         case (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4):
//             const valorIngressoIndividual = 330
//             break  
//         case(tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1):
//             const valorIngressoIndividual = 1320*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2):
//             const valorIngressoIndividual = 880*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3):
//             const valorIngressoIndividual = 550*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4):
//             const valorIngressoIndividual = 220*4.10
//             break
//         case(tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1):
//             const valorIngressoIndividual = 660*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2):
//             const valorIngressoIndividual = 440*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3):
//             const valorIngressoIndividual = 330*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4):
//             const valorIngressoIndividual = 170*4.10
//             break  
//         case(tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1):
//             const valorIngressoIndividual = 1980*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2):
//             const valorIngressoIndividual = 1320*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3):
//             const valorIngressoIndividual = 880*4.10
//             break
//         case (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4):
//             const valorIngressoIndividual = 330*4.10
//             break  
//         }
//     }
// }

const valorTotal = valorIngressoIndividual*quantidadeIngresso


valorIngresso (tipoDeJogo, etapaDoJogo, categoria)

console.log(valorIngresso)