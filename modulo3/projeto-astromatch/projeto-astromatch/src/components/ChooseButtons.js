import React, {useState, useEffect} from "react";
import styled from "styled-components";
import sim from "./img/sim.png";
import nao from "./img/nao.png"

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


const ChooseButton = () => {
  return (
    <ContainerBotao>
        <Botao type="button"><Imagem src={sim}/> </Botao>
        <Botao type="button"><Imagem src={nao}/> </Botao> 
    </ContainerBotao>
  );
}

export default ChooseButton;
