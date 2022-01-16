import React from "react";
// import "./Componentes/Posts";
import styled from 'styled-components';

const Container = styled.div`
// background-color: black;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 70%;
border: 1px solid black;
border-radius: 20px 20px 0px 20px; 
margin: 0 auto;

`

const ContainerHeader = styled.div`
background-color: #34af23;
padding: 10px; 
border-radius: 20px 20px 0px 20px; 

h1 {
text-align: center;
color: #FFFFFF

}
`
const MainConteiner = styled.div`
background: url(https://images-ext-1.discordapp.net/external/69Qw-gDTE7L4CUKzGZAfSMC53EnpqSs5AxU3hnorZxE/https/i.pinimg.com/originals/62/40/b6/6240b66d5c50c8661eee78b439a7d33c.jpg?width=167&height=225);
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 10px;
overflow-y: scroll;

`

const ContainerMensagem = styled.div`
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color: #34af23;
width: 30%;
margin-bottom: 50px;
color: #FFFFFF;
border-radius: 20px 20px 0px 20px; 
word-wrap: break-word;
`
const ContainerFooter = styled.div `
background-color: white;
padding: 10px;
border-radius: 20px 20px 30px 20px; 
`

class App extends React.Component{

  state = {
    mensagemArmazenada: [],
    entradaUsuario: "",
    entradaMensagem: ""
  }

  enviarMensagem = (event) => {
    const mensagem = {
      usuario: this.state.entradaUsuario, 
      msg: this.state.entradaMensagem
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


  render() {
    const historicoMensagem = this.state.mensagemArmazenada.map((item) => { 
      return (
        <ContainerMensagem><strong>{item.usuario}</strong> {item.msg} </ContainerMensagem>
      )

      })
    return (
      <Container>
        <ContainerHeader>
          <h1>
            WhatsLab
          </h1>
        </ContainerHeader>
        <MainConteiner>
          {historicoMensagem}
        </MainConteiner>
        <ContainerFooter>
          <input
            placeholder="Usuário"
            value={this.state.entradaUsuario}
            onChange={this.onChangeEntradaUsuario}/>
        <input
            placeholder="Escreva o que quiser!"
            value={this.state.entradaMensagem}
            onChange={this.onChangeEntradaMensagem}/>
          
          <button onClick={this.enviarMensagem}>enviar</button>
          
        </ContainerFooter>     
      </Container>   
    )
  }
}

export default App;



