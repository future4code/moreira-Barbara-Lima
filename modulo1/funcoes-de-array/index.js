// 1.  Leia o código abaixo
    
// //     ```jsx
//     const usuarios = [
//       { nome: "Amanda Rangel", apelido: "Mandi" },
//       { nome: "Laís Petra", apelido: "Laura" },
//       { nome: "Letícia Chijo", apelido: "Chijo" }
//     ]
    
//     const novoArrayA = usuarios.map((item, index, array) => {
//        console.log(item, index, array)
//     })
// //     ```
    
//     a) O que vai ser impresso no console?
// Um Array como 3 objetos
    
// 2. Leia o código abaixo
    
//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    // console.log(novoArrayB)
//     ```
    
//     a) O que vai ser impresso no console?

// Um lista com 3 nomes
//0: "Amanda Rangel"
// 1: "Laís Petra"
// 2: "Letícia Chijo"
    
// 3. Leia o código abaixo
    
//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })
    
    // console.log(novoArrayC)
//     ```
    
//     a) O que vai ser impresso no console?

// Uma lista com dois objetos que possuem apelidos diferente de Chijo.
// 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1: {nome: 'Laís Petra', apelido: 'Laura'}
 
// Exercício de escrita de cósdigo

// 1)

// function retornaNome(item, indice, vetor){
//     return item.nome;
// }

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeDosClientes = pets.map((item) => {
//      return item.nome
//  })

// b)

// const raçaSalsicha = pets.filter((item) => {
//     return item.raca === "Salsicha"
// }
// )

// c) "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const raçaPoodle = pets.filter((item) => {
//         return item.raca === "Poodle"

// })

// const nomePoodle = raçaPoodle.map((item) => {
//         return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`

// })


// console.log(nomePoodle)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle}!`)
// // console.log(raçaPoodle)
// // console.log(raçaSalsicha)
// // console.log(nomeDosClientes)

// Exercício 2:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// const nomePrdutos = produtos.map((item) => {
//     return item.nome
// })

// console.log(nomePrdutos)

//  b)

// const BlackFriday = produtos.map((item, index, array) => {
//      return {
//      nome: item.nome,
//      preco: item.preco*0.95
//      }
// })

// console.log(BlackFriday)

// c)

// const listaDeBebidas = produtos.filter((item) => {
//     return item.categoria === "Bebidas"
// })

// console.log(listaDeBebidas)

//d)

// const produtoYpe = produtos.filter((item) => {
//     return item.nome.includes("Ypê") 
// })

// console.log(produtoYpe)

// // e) 
// const PreçoProdutoYpê = produtoYpe.map((item) => {
//     return `Compre ${item.nome} por ${item.preco}`
// })
// console.log (PreçoProdutoYpê)