import React from "react";
import axios from "axios";
import styled from "styled-components";


class App extends React.Component {

state ={
    descricaoCompleta = [],  
    inputNomeMusica: "",
    inputNomeArtista: "",
    inputLink: ""
     
}

onChangeMusica = (ev) => {
   this.setState({inputNomeMusica: ev.target.value})
 
}
onChangeArtista = (ev) => {
    this.setState({inputNomeArtista: ev.target.value})
  
 }
 onChangeLink = (ev) => {
    this.setState({inputLink: ev.target.value})
  
 }

 adicionaItem = () => {
     const novaLista = [...this.state.descricaoCompleta, this.state.inputNomeMusica, inputNomeArtista, inputLink ]
     this.setState({descricaoCompleta: novaLista})
 }


  render(){
    return(
      <div>
        <div>
          <h1>
             Adicione sua Músicas Fav's!
             {this.props.inputNomePlay}
          </h1> 
          <input
          value={this.state.inputNomeMusica}
          onChange={this.onChangeMusica}
          placeholder="Digite o nome da Música"/>
          <input
          value={this.state.inputNomeArtista}
          onChange={this.onChangeArtista}
          placeholder="Digite o nome do Artista ou Banda"/>
          <input
          value={this.state.inputLink}
          onChange={this.onChangeLink}
          placeholder="Digite o link de áudio"/>
          <button onClick={this.adicionaItem}>Adicionar</button>
          {this.state.descricaoCompleta}
        </div>
    
       
      </div>
    )
  }
}


export default App;
