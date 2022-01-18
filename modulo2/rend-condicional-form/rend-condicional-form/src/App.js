import React from 'react'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends React.Component{
  state = {
    atualizarTela: "etapa1"
  };
  irParaEtapa1 = ()=> {
    this.setState({atualizarTela: "etapa1"})};

  irParaEtapa2 = ()=> {
    this.setState({atualizarTela: "etapa2"})};

  irParaEtapa3 = ()=> {
    this.setState({atualizarTela: "etapa3"})};

  irParaFinal = ()=> {
      this.setState({atualizarTela: "Final"})};

  
  
  render(){
    console.log(this.state.atualizarTela)
    const renderizarTela = () =>{
      switch (this.state.atualizarTela){
        case "etapa1": 
          return <Etapa1/>;
        case "etapa2": 
          return <Etapa2/>;
        case "etapa3":
          return <Etapa3/>;
        default: 
          return <Final/>; 
        }
    }

    return(
      <div>
        {renderizarTela()};
        
      </div>
    )
  }
}

export default App;
