import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusicas from "./AddMusicas"
import ListaPlayList from "./ListaPlayList"

class Home extends React.Component {
   state ={
       inputNomePlay: ""
   }
  
  onChangeInput = (ev) => {
      this.setState({inputNomePlay: ev.target.value})
    
  }
    render(){
      return(
        <div>
          {/* {this.trocaTela()} */}
          <div>
            <h1>
               Crie sua Playlist Personalizada!
               {this.state.inputNomePlay}
            </h1> 
            <input
            value={this.state.inputNomePlay}
            onChange={this.onChangeInput}
            placeholder="Digite o nome"/>
            <button>Adicionar</button>
          </div>
          {/* <div>
            <button onClick={() => this.funcaoMudarTela("ListarPlayList")}>Listar Playlists existentes </button>
            <button onClick={() => this.funcaoMudarTela("AdicionarMusica")}>Adicionar Música </button>
          </div> */}
         
        </div>
      )
    }
  }
  
  // 
  // 
  
  export default Home;
  