
import React from 'react'
// import styled from 'styled-component'

class Posts extends React.Component{

    state = {
      mensagemArmazenada: [],
      entradaUsuario: "",
      entradaMensagem: ""
    }
  
    enviarMensagem = (event) => {
      const mensagem = {
        usuario: this.state.entradaUsuario, 
        msg: this.state.entradaUsuario
      }
      const novaMensagem = [...this.state.mensagemArmazenada, mensagem]
      this.setState({mensagemArmazenada: novaMensagem, entradaMensagem:""}
      )}
  
    onChangeEntradaUsuario = (event) =>{
      this.setState({entradaUsuario: event.target.value})
    }
    onChangeEntradaMensagem = (event) =>{
      this.setState({entradaMensagem: event.target.value})
    }
}

export default Posts 