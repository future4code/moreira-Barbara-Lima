import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
// import FotoPerfil from './imagem/perfil.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media.discordapp.net/attachments/918291520224903168/930591757303943188/perfil.jpg?width=253&height=379"
          nome="Barbara Lima" 
          descricao="Olá, me chamo Barbara Lima, estou explorando novos horizontes como desenvolvedora de software."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          titulo="Email:dev.barbaralima@gmail.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem="https://static.vecteezy.com/ti/vetor-gratis/t2/552728-icone-de-de-localizacao-geografica-gr%C3%A1tis-vetor.jpg"
          titulo="Endereço: Rua Ibiá 1000"
        />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://images-ext-2.discordapp.net/external/K3ps0W29n0qrZH5PXIGk2rMBmRejKigHhWdxy-9_2ks/https/www.chimichangas.com.br/wp-content/uploads/2019/09/mimi-wa-sumaseba-capa.jpg?width=300&height=163" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
