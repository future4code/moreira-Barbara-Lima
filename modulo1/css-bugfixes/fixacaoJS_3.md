```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  
  let mediaPonderal = ((ex * 1) + (p1 * 2) + (p2 * 3))/6
  
  if (mediaPonderal >= 9) {
    
    return "A"
    
  }else if (mediaPonderal < 9 && mediaPonderal >= 7.5){
    
    return "B"
    
  }else if(mediaPonderal < 7.5 && mediaPonderal >= 6){
    
    return "C"
  }else{
    
    return "D"
  }
}


```