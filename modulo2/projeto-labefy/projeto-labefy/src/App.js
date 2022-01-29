import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusicas from "./components/AddMusicas"
import ListaPlayList from "./components/ListaPlayList"
import Home from "./components/Home"


class App extends React.Component {
  
  state = {
    telaAtiva:"AdicionarMusica"
  }


  trocaTela = () => {
    switch (this.state.telaAtiva){
      case "AdicionarMusica":
        return <AddMusicas/>
      case "ListarPlayList": 
        return <ListaPlayList/>
      case "Home": 
        return <Home/>
      default:
        return <Home/>

    }
  }

  funcaoMudarTela = (nomeDaTela) => {
    this.setState ({telaAtiva: nomeDaTela})
  }

  render(){
    return(
      <div>
       {this.trocaTela()}
       <hr/>
       <div>
          <div>
            <button onClick={() => this.funcaoMudarTela("Home")}>Home</button>
         </div>
          <div>
              <button onClick={() => this.funcaoMudarTela("ListarPlayList")}>Listar Playlists existentes </button>
          </div>
          <div>
              <button onClick={() => this.funcaoMudarTela("AdicionarMusica")}>Adicionar Música </button>
          </div>
      </div>
    </div>
    )
  }
}

export default App;
