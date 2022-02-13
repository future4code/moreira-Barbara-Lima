import React, {useState, useEffect} from "react";
import styled from "styled-components";
import sim from "./img/sim.png";
import nao from "./img/nao.png"
import axios from "axios";

const Botao = styled.button`
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

  const escolhaLike =()=>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/barbara/choose-person"
    const headers =  "Content-Type: application/json" 
    const body = {
      "id": "71gMbZs2txS9LDvGK5Ew",
      "choice": true
    }

    axios
    .post (url, headers, body)
    .then((res)=>{props.escolhePerfil(res.data.profile)})
    .catch((err)=>{console.log("Erro:", err)})
  } 
  return (
    <ContainerBotao>
        <Botao type="button" onClick={escolhaLike()}><Imagem src={sim}/> </Botao>
        <Botao type="button" onClick={props.escolhaPerfil()}><Imagem src={nao}/> </Botao> 
    </ContainerBotao>
  );
}

export default ChooseButton;
