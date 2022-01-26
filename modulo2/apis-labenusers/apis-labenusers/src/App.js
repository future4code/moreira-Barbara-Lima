import React from "react";
// import styled from 'styled-components';
// import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListasUsuarios";

class App extends React.Component{

  state = {
    telaAtual: "lista"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irCadastro={this.irParaCadastro}/>
      default: <div> Erro! Página não encontrada! </div>

    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return(
        <div>
           {this.escolheTela()}
        </div>
    )
  }
}


export default App;
