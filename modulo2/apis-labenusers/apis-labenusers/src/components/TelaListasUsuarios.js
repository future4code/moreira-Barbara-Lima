import React from "react";
import axios from "axios";
import styled from 'styled-components';

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "barbara-costa-moreira"}
};



class TelaListaUsuarios extends React.Component{

    state = {
        Usuarios: []
    } 
    componentDidMount() {
        this.getAllUsers()
      }
    
      getAllUsers = () => {
        axios
        .get(url, headers)
        .then((resposta) =>{this.setState({Usuarios: resposta.data})})
        .catch((erro) => alert(`Algo deu errado!`))
      
      }

      deletarUsuario = (id) =>{
          const url1 = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
          axios
          .delete(url1, {headers:{Authorization: "barbara-costa-moreira"}})
          .then((res) =>{
              alert("Usuário deletado com sucesso!!")
              this.getAllUsers()
          })
          .catch((err) => {
              alert("Erro! Tente novamente!!!")
          })
      }
    render(){
        const usuariosLista = this.state.Usuarios.map((usuario) => {
                return (
                <div key={usuario.id}>
                    {usuario.name}
                    <button onClick= {() => this.deletarUsuario(usuario.id)}> X </button>
                </div>
                )
              })
        return(
            <div>
                <button onClick={this.props.irCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {usuariosLista}
            
            </div>
        )
    }
}







export default TelaListaUsuarios;

  

    