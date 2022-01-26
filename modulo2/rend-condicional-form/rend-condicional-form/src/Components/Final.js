import React from 'react'



class Final extends React.Component{
    irParaEtapa1 = ()=> {
        this.setState({atualizarTela: "etapa1"})};
    render(){
        return(
            <div>
               <div>
                  <h1>O FORMULÁRIO ACABOU</h1> 
               </div>
               <div>
                   <p>
                   Muito obrigado por participar! Entraremos em contato! 
                   </p>
               </div>
               <button onClick={this.irParaEtapa1}>Página Inicial</button>
                
            </div>  
        )
       
    }
}

export default Final;