import React from 'react'
import App from '../App';


class Etapa1 extends React.Component{
    state = {
        atualizarTela: "etapa1"
      };
    irParaEtapa2 = ()=> {
        this.setState({atualizarTela: "etapa2"})};

    render(){
        return(
            <div>
                <div>
                  <h1>ETAPA 1 - DADOS GERAIS</h1>  
                </div>
                <div>
                    <p> 1. Qual é o seu nome?</p>
                    <input type="text"/>
                </div>
                <div>
                    <p> 2. Qual sua idade?</p>
                    <input type="text"/>
                </div>
                <div>
                    <p> 3. Qual seu email?</p>
                    <input type="text"/>
                </div>
                <div>
                    <p> 4. Qual a sua escolaridade?</p>

                    <select>
                        <option>
                            Ensino Médio Incompleto
                        </option>
                        <option>
                            Ensino Médio Completo
                        </option>
                        <option>
                            Ensino Superior Incompleto
                        </option>
                        <option>
                            Ensino Superior Completo
                        </option>
                    </select>
                   
                </div>
                <button onClick={this.irParaEtapa2}> Próxima Página </button>
            </div>  
        )
       
    }
}

export default Etapa1;