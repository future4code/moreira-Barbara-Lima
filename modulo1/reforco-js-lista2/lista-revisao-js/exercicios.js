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
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    const novaArray = array.filter((num) =>{
        if(num % 2 === 0)
        return num
    }
    )
return novaArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
    const novaArray = array.filter((num) =>{
        if(num % 2 === 0)
        return num
    }).map((num) => {
        return num*num
    })
return novaArray


}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for(let numero of array){
        if(numero > maiorNumero){
            maiorNumero = numero
        }
    }
return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menosNumero = Math.min(num1, num2)
    const maiorDivisivelPorMenor = maiorNumero % menosNumero === 0
    const diferenca = Math.abs(num1 - num2)

    const obj = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca,
    }

    return obj

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const arrayDePares = []

   for(let i = 0; arrayDePares.length <n ; i ++ ){
       if( i % 2 === 0){
           arrayDePares.push(i)
       }
   }
   return arrayDePares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if( ladoA === ladoB && ladoA === ladoC && ladoB === ladoC ){
        return ("Equilátero")
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return ("Escaleno")

    }else{
        return ("Isósceles")
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const novaArray = []
  let menorNumero = Infinity
  let segundoMenorNumero = Infinity
  let maiorNumero = - Infinity
  let segundoMaiorNumero = - Infinity

        for(let numero of array){
            if(numero < menorNumero) {
                menorNumero = numero
            }
            if(numero > maiorNumero){
                maiorNumero = numero
            }
        }

        for (let numero of array){
            if(numero < segundoMenorNumero && numero !== menorNumero){
                segundoMenorNumero = numero
            }
            if(numero > segundoMaiorNumero && numero !== maiorNumero){
                segundoMaiorNumero = numero
            }
            
           
        }
    novaArray.push(segundoMaiorNumero)
    novaArray.push(segundoMenorNumero)
            
    return novaArray
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
