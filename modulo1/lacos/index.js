// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
//     ```jsx
//     let valor = 0
//     for(let i = 0; i < 5; i++) {
//       valor += i
//     }
//     console.log(valor)

// 
//     ```
    
// 2. Leia o código abaixo:
    
//     ```jsx
//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//       if (numero > 18) {
//     		console.log(numero)
//     	}
//     }
//     ```
    
//     a) O que vai ser impresso no console?
    
//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
//     ```jsx
//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//       let linha = ""
//       for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "*"
//       }
//       console.log(linha)
//       quantidadeAtual++
//     }
    
//     ```
    
//     - 💡 Dica
        
//         <aside>
//         ⭐ Se tiver dificuldade para entender esse exercício, rode as duas primeiras iterações do loop no [pytutor](http://pythontutor.com/javascript.html#mode=edit)
        
//         </aside>
        
//         Se o usuário digitar "V", a saída deve ser:
        
//         ```
//         "Boa Tarde!"
//         ```


// Exercício de escrita de código

// 1 - a)

const numeroAnimais = Number(prompt("Quantos bichinhos você tem?"))
let nomeAnimais = []

function animais (){
    if (numeroAnimais <= 0){
        console.log("Que pena! Você pode adotar um Pet!")
    }else if(numeroAnimais>0){
        for (let i = 1; i<= numeroAnimais; i++){
          const nomesAnimais = prompt(`Digite o nome dos seus animais ${i}`)
          nomeAnimais.push(nomesAnimais)
        }

    }
}

animais()
console.log(nomeAnimais)

 
































