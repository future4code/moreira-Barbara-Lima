import React from 'react'



class Etapa2 extends React.Component{
    irParaEtapa3 = ()=> {
        this.setState({atualizarTela: "etapa3"})};

    render(){
        return(
            <div>
               <div>
                   <h1>
                    ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
                    </h1>
                </div> 
                <div>
                   <p>
                   5. Qual curso?
                    </p>
                    <input type= "text"/> 
                </div> 
                <div>
                   <p>
                   6. Qual a unidade de ensino?
                    </p>
                   <input type= "text"/>

                   
                </div> 
                
                <button onClick={this.irParaEtapa3}> Próxima etapa</button>
                

            </div>  
        )
       
    }
}

export default Etapa2;