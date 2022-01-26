import React from 'react'



class Etapa3 extends React.Component{
    irParaFinal = ()=> {
        this.setState({atualizarTela: "Final"})};
    render(){
        return(
            <div>
                <div>
                   <h1>
                   ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
                    </h1>
                </div> 
                <div>
                   <p>
                   5. Por que você não terminou um curso de graduação?
                   <input type= "text"/>
                    </p>
                </div> 
                <div>
                   <p>
                   6. Você fez algum curso complementar?
                   </p>
                  <select>
                      <option>
                       Nenhum 
                      </option>
                      <option>
                       Curso Técnico 
                      </option>
                      <option>
                       Curso de Inglês 
                      </option>
                  </select>
                </div> 
                
                <button onClick={this.irParaFinal}> Próxima etapa</button>

            </div>  
        )
       
    }
}

export default Etapa3;