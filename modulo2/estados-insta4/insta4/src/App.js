
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state= {
    listaDePosts: [{
        nomeUsuario:'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
        },
        {
        nomeUsuario:'Barbara',
        fotoUsuario:'https://picsum.photos/id/1010/367/267',
        fotoPost:'https://picsum.photos/536/354',
        },
        {
        nomeUsuario:'Marcela',
        fotoUsuario:'https://picsum.photos/id/1011/367/267',
        fotoPost:'https://picsum.photos/id/0/367/267',
        }
    ],
    valorNomeUsuario:'',
    valorFotoUsuario:'',
    valorFotoPost:''
  }

  adicionaPost = () => {
    const adicionarPost = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    };

    const novaLista = [...this.state.listaDePosts, adicionarPost ];

    this.setState({
      listaDePosts: novaLista,
      valorNomeUsuario: "",
      valorFotoUsuario: "",
      valorFotoPost: ""
    });    
  };
  onChangeNome = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };
  onChangeFoto = (event) => {
    this.setState({ valorFotoUsuario: event.target.value });
  };

  onChangePost = (event) => {
    this.setState({ valorFotoPost: event.target.value });
  };
  render() {
      const novaListas = this.state.listaDePosts.map((post, index) => {
        return <Post key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      
      });
      return(
        <div>
          <div>
            <input
              value={this.state.valorNomeUsuario}
              onChange={this.onChangeNome}
              placeholder={"nome"}
            />
            <input
              value={this.state.valorFotoUsuario}
              onChange={this.onChangeFoto}
              placeholder={"Sua foto"}
            />
            <input
              value={this.state.valorFotoPost}
              onChange={this.onChangePost}
              placeholder={"URL"}
            />
            <button onClick={this.adicionaPost}>Adicionar</button>
          </div>
      <MainContainer>
           {novaListas}
      </MainContainer>
      </div>
    )
    }
}


export default App;


