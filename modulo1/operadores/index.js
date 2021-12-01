// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    // const bool1 = true
    // const bool2 = false
    // const bool3 = !bool2
    
//     let resultado = bool1 && bool2
//     console.log("a. ", resultado)

// ** a. True
    
//     resultado = bool1 && bool2 && bool3 
//     console.log("b. ", resultado) 

// ** b. false
    
    // resultado = !resultado && (bool1 || bool2) 
    // console.log("c. ", resultado)
    

// ** c. erro

   // console.log("d. ", typeof resultado)

    // d. Undefined
//     ```
    
// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
//     ```jsx
//     let primeiroNumero = prompt("Digite um numero!")
//     let segundoNumero = prompt("Digite outro numero!")
    
//     const soma = primeiroNumero + segundoNumero
    
//     console.log(soma)
//     ```

//     **Tudo que vem do prompt é string, ele deve passar os resultados para number:

//     let primeiroNumero = Number(prompt("Digite um numero!"))
//     let segundoNumero = Numbre(prompt("Digite outro numero!"))
//     No resultado dele --> console.log(soma) --> primeiroNumerosegundoNumero**
//     
    
// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// ** Respondido na quastão anterior!**

// Exercício 1 / Exercício 3:
const nome = prompt("Qual é o seu nome caro amigo?")
const idadeUsuario = Number(prompt("Quantos anos você tem?"))
const idadeUsuarioMeses = idadeUsuario * 12
const idadeUsuarioDias = idadeUsuarioMeses * 365
const idadeUsuarioHoras = idadeUsuarioDias * 24
const idadeAmigo = Number(prompt("Quantos anos tem seu melhor Amigo(a)?"))
const diferençaIdade = idadeUsuario - idadeAmigo
console.log(nome,"Sua idade é maior do que seu melhor amigo!", diferençaIdade >0)
console.log("Esse são os anos que separam seus nascimentos!",diferençaIdade,"anos. Fofo né...!!!")
console.log(nome, "Você tem", idadeUsuario, "anos,")
console.log("ou", idadeUsuarioMeses, "meses,")
console.log("ou",idadeUsuarioHoras, "horas!")

// Exercício 2:

console.log(prompt(nome, "Um joguinho... Pode ser!? Pense em um número Par..."))
const numeroPar = Number(prompt("agora digite-o!"))
const result = numeroPar / 2
const result1 = numeroPar % 2
console.log("Vamos ver se o número escolhido realmente é Par...", result1===0)
console.log(nome,"na divisão todo numero Par, quando dividido por 2, apresenta resto Zero! O resto da sua divisão é...",result1,"Teste com números ímpares e perceba a diferença!")

// Sempre que o número é Par o resto é zero e quando ìmpar o resto é 1

//Exercício 4:

console.log(prompt(nome, "Outra brincadeira... Juro que é a última! Pense em dois números..."))
const numeroUm = Number(prompt("Diz aí o primeiro!!"))
const numeroDois = Number(prompt("pode mandar o segundo!!"))
console.log("O primeiro numero é maior que segundo?", numeroUm > numeroDois)
console.log("O primeiro numero é igual ao segundo?", numeroUm === numeroDois)
const divUm = numeroUm % numeroDois
const divDois = numeroDois %numeroUm
console.log("O primeiro numero é divisível pelo segundo?", divUm=== 0)
console.log("O segundo numero é divisível pelo primeiro?", divDois=== 0)







