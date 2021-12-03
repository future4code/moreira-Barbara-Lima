// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo
        
//         ```jsx
        // function minhaFuncao(variavel) {
        // 	return variavel * 5
        // }
        
//         console.log(minhaFuncao(2))
//         console.log(minhaFuncao(10))
//         ```
        
//         a) O que vai ser impresso no console?

//         10
//         50
        
//         b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
        // Nenhum resultado seria plotado
//     2. Leia o código abaixo
        
//         ```jsx
//         let textoDoUsuario = prompt("Insira um texto");
        
//         const outraFuncao = function(texto) {
//         	return texto.toLowerCase().includes("cenoura")
//         }
        
//         const resposta = outraFuncao(textoDoUsuario)
//         console.log(resposta)
//         ```
        
//         a. Explique o que essa função faz e qual é sua utilidade

//          Coloca todas as letras minusculas e verifica se a palavra está ou não no texto!
        
//         b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//              i.   `Eu gosto de cenoura`            => eu gosto de cenoura true
//              ii.  `CENOURA é bom pra vista`        => cenoura é bom pra vista true
//              iii. `Cenouras crescem na terra`      => cenouras crescem na terra false
        
// - **Exercícios de escrita de código**
//     1. Escreva as funções explicadas abaixo:
        
//         a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        
//         ```
//         "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//         ```
        
//         Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
        
//         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
        
//         ```
//         Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//         ```
        
//         - Exemplo
            
    //         Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
            
    //         `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
            
        
    // 2. Escreva as funções explicadas abaixo:
        
    //     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
        
    //     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
        
    //     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
        
    //     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
        
    // 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
        
    //     ```
    //     Números inseridos: 30 e 3
    //     Soma: 33
    //     Diferença: 27
    //     Multiplicação: 90
    //     Divisão: 10
    //     ```
        

    // Exercícios de escrita de código:
// Exercício 1:
// a)

//     function identidade(){
//         const nome = "Barbara"
//         const idade = "34"
//         const cidade = "Rio de Janeiro"
//         const profissao = "Estudante"
//         console.log("Eu sou", nome, "tenho" ,idade, "anos, moro em ", cidade, " e sou ", profissao, ".")
//     }

// identidade()    

// b)

// function identidade(nome, idade, cidade, profissao ){
//     console.log("Eu sou", nome, "tenho" ,idade, "anos, moro no", cidade, " e sou", profissao, ".")
// }

// identidade("Barbara", 34, "Rio de Janeiro", "estudante" )


// Exercício 2:
// a) 

// function calcIdade(AnoAtual, AnoNascimento){
//     const idade = AnoAtual - AnoNascimento
//     return idade
    
// }
// const idade = calcIdade(2021, 1986)
// console.log("Este ano você completa ", idade, "anos!")

// b)

// function idades(SuaIdade, IdadeAmigo){
//     const maisVelho = SuaIdade > IdadeAmigo
//     return maisVelho
    
// }
// const idade = idades(34, 37)
// console.log("Você é mais velho que seu(a) melhor amigo!? ", idade)


// c) 

// function numeroPar(numero1){
//     const resto = numero1%2 
//     return resto

// }
// const resto = numeroPar(10)
// console.log("O número 10 é Par?", resto===0)


// d) 

// function nome(nomeUsuario){
    
//    nomeUsuario = nomeUsuario.toUpperCase()
//    console.log(nomeUsuario)

//     return nomeUsuario
// }

// const nome1 = nome("Barbara")
// console.log(nome1.length)

// Exercicio 3 :

// const numero1 = Number(prompt("Insira um número, por favor!"))
// const numero2 = Number(prompt("Insira outro número."))

// console.log("Números escolhidos:", numero1, numero2)

// function operaçoes1(numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
// }
// const op1 = operaçoes1(numero1, numero2)
// console.log("Soma:", op1)

// function operaçoes2(numero1, numero2){
//     const dif = numero1 - numero2
//     return dif

// }

// const op2 = operaçoes2(numero1, numero2)
// console.log("Diferença:", op2)

// function operaçoes3(numero1, numero2){
//     const mult = numero1 * numero2
//     return mult

// }

// const op3 = operaçoes3(numero1, numero2)
// console.log("Multiplicação:", op3)

// function operaçoes4(numero1, numero2){
//     const div = numero1 / numero2
//     return div

// }

// const op4 = operaçoes4(numero1, numero2)
// console.log("Divisão:", op4)