// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
//     ```jsx
    // let array
    // console.log('a. ', array)

    // a.  undefined
    
    // array = null
    // console.log('b. ', array)
    // 
    //b.  null
    
    // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // console.log('c. ', array.length)

    // c.  11
    
    // let i = 0
    // console.log('d. ', array[i])
    
    // array[i+1] = 19
    // console.log('e. ', array)
    
    // const valor = array[i+6]
    // console.log**('f. ', valor)**
//     ``` ?????
    
// 2. Leia o código abaixo com atenção 
    
//     ```jsx
//     const frase = prompt("Digite uma frase")
    
//     console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// //     ```
    
//     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// *****SUBI NUM ÔNIBUS EM MIRROCOS 27




// Exercício de escrita de código

// Exercício 1:

// console.log("Exercício 1")

// const meUsuario = prompt("Qual é o seu nome?")
// const email = prompt("e Qual é o seu email?")
// console.log("O e-mail "+email+" foi cadastrado com sucesso. Seja bem-vinda(o) " +nomeUsuario+"!")

// // Exercício 2:
// a)

console.log("Exercício 2-a")

const comidasFavoritas = ["Macarrão", "Empadão", "Carne", "Sorvete", "Bolo" ]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])


// // b)

console.log("Exercício 2-b")

const comidaFUsuario = prompt(nomeUsuario+" qual a sua comida Favorita?")
const novaLista = [comidasFavoritas[2], comidasFavoritas[3], comidasFavoritas[4] ]
comidasFavoritas.splice(1,4)
console.log(comidasFavoritas[0])
console.log(comidaFUsuario)
console.log(novaLista[0])
console.log(novaLista[1])
console.log(novaLista[2])

// // Exercício 3:
// // a)

console.log("Exercício 3-a")

const listaDeTarefas = [ ]
console.log(prompt(nomeUsuario, "Pense em 3 tarefas que precisa realizar no dia:"))
const tarefa1 = prompt("Cite a primeira:")
const tarefa2 = prompt("Cite a segunda:")
const tarefa3 = prompt("Cite a terceira:")
 listaDeTarefas.push(tarefa1)
 listaDeTarefas.push(tarefa2)
 listaDeTarefas.push(tarefa3)
 console.log(listaDeTarefas [0])
 console.log(listaDeTarefas [1])
 console.log(listaDeTarefas [2])


 console.log("Exercício 3-d")

const tarefaConcluida = Number(prompt("Digite o item da sua lista que ja foi concluído, 0, 1, 2, na ordem que foram citadas!"))
listaDeTarefas.splice(tarefaConcluida,1)
console.log(listaDeTarefas)
console.log("Ainda restam as tarefas a seguir:")
console.log(listaDeTarefas [0])
console.log(listaDeTarefas [1])
console.log("Boa Sorte, continue tentando... Até meia noite é dia!")//