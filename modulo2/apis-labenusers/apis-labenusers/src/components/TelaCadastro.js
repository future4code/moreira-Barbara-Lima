import React from "react";
import axios from "axios";
import styled from "styled-components";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "barbara-costa-moreira"
  }
};



class TelaCadastro extends React.Component{

    state = {
        Nome: "",
        Email: "",
      }

      upDateNome = (ev) =>{
        this.setState({Nome: ev.target.value})
      }
    
      upDateEmail = (ev) =>{
        this.setState({Email: ev.target.value})
      }

      createUsers = () =>{
        const body = {
          name: this.state.Nome,
          email: this.state.Email
        }
        axios
        .post(url,body,headers)
        .then ((resposta) =>{
          alert(`O usuário ${this.state.Nome} foi cadastrado com sucesso!`)
          this.setState({
            Nome:"",
            Email:""
        })
        this.getAllUsers()
        })
        .catch((erro) =>{
          alert(erro.response.data.message)
          this.setState({
            Nome:"",
            Email:""
          })
        })
      }

    render(){
        
        return(
            <div>
                <button onClick={this.props.irLista}>Ir para Lista de Usuários</button>
                <h2>Lista de Cadastro</h2>
               
                <input 
                placeholder = {'Nome'}
                value={this.state.Nome}
                onChange={this.upDateNome}
                />
                <input 
                placeholder = {'E-mail'}
                value={this.state.Email}
                onChange={this.upDateEmail}
                /> 
                <button onClick={this.createUsers}>Criar Usuário</button>
               
                
            </div>
        )
    }

}







export default TelaCadastro;