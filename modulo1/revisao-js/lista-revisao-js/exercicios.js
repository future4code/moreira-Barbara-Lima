// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    

    // return array.sort() 
  
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
   const arrayPar = array.filter((num) => {
       if(num % 2 === 0)
       return num
     
   })
return arrayPar

}

// Desafio

// let novaArray = []
//     for(i = 0; i < array.length; i++)
//         if(array[i] %2 === 0) {
//             novaArray.push(array[i])
       
//     }
  
//     return (novaArray)
// }

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    const arrayParQuadrado = array.filter((num) => {
        if(num % 2 === 0)
        return num
      
    }).map((function (num) {
        return num*num
    }))
    return arrayParQuadrado
}

 

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for(numero of array) {
        if(numero > maiorNumero){
            maiorNumero = numero
        }

    }
    return maiorNumero    

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let numeroMaior 
  let numeroMenor
  let maiorDivisivel
  let diferença

    if(num1 > num2) {
        numeroMaior = num1
        numeroMenor = num2
    }else{
        numeroMaior = num2
        numeroMenor = num1
    }

    maiorDivisivel = numeroMaior % numeroMenor === 0
    diferença = numeroMaior - numeroMenor



return {
     maiorNumero: numeroMaior, 
     maiorDivisivelPorMenor: maiorDivisivel,
     diferenca: diferença
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
        const arrayDePares= []
    
        for(let i = 0; arrayDePares.length < n; i++) {
            if(i % 2 === 0) {
                arrayDePares.push(i)
            }
        }
      return arrayDePares  
    }

  



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}