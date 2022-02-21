import React, {useState, useEffect} from "react";
import styled from "styled-components";
import sim from "./img/sim.png";
import nao from "./img/nao.png"
import axios from "axios";

const BotaoX = styled.button`
    // display: flex;
    // border-radius: 3px;
    height: 70px;
    width: 70px;
`
const BotaoCor = styled.button`
    // display: flex;
    // border-radius: 3px;
    height: 70px;
    width: 70px;
`
const Imagem = styled.img`
    height: 50px;
    width: 50px;
`
const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
   
    
`




const ChooseButton = (props) => {
  const [allMatches, setAllMatches] = useState({})
  const escolhePerfil = ()=>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/barbara/person"
    axios
    .get(url)
    .then((res) => {
      setAllMatches(res.data.profile)
    })
    .catch((err)=>{
      alert("Erro:", err)
    })
  }

  const escolhaLike =()=>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/barbara/choose-person"
    const body = {
      id: allMatches.id,
      choice: true
    }
    axios
    .post(url, body)
    .then((res)=>{
      escolhePerfil(res.data.profile)
    })
    .catch((err)=>{
      console.log("Erro", err)
    })
  
  } 
  return (
    <ContainerBotao>
        <div>
          <img src={allMatches.photo} alt="Fotos de Pessoas"/>
        </div>
        <div>
          <h3>{allMatches.name}</h3> 
          <h3>{allMatches.age}</h3>
          <p>{allMatches.bio}</p>
        </div>
        <BotaoCor onClick={escolhaLike}><Imagem src={sim}/> </BotaoCor>
        <BotaoX onClick={escolhePerfil}><Imagem src={nao}/> </BotaoX> 
    </ContainerBotao>
  );
}

export default ChooseButton;
