// import React, {useState, useEffect} from "react";
// import AppBar from "./components/AppBar";
import axios from "axios"; 
import styled from "styled-components";
// import ChooseProfilePage from "./components/ChooseProfilePage";
// import ChooseButton from "./components/ChooseButtons";
import { useState } from "react";
import AppHome from "./components/AppHome";
import MatchListPage from "./components/MatchListPage";


const BoxContainer = styled.div`
  width: 500px;
  height: 750px;
  border: 1px solid black;
  border-radius: 15px;
  position: center;
  margin: 5% 30%;
  // background-image: url(https://media.istockphoto.com/vectors/black-and-white-checkered-abstract-background-vector-id485140380);
`



const App = () => {
  const [tela, setTela] = useState("pagHome")
  const [botaoReset, setBotaoReset] = useState({})

  const trocaTela = ()=>{
    switch(tela){
      case "pagHome":
        return <AppHome irMatch={irParaMatch}/>
      case "pagMatch":
        return <MatchListPage irHome={irPraHome}/>
      default: 
        return <AppHome/> 
    }
  }

   const irPraHome = () => {
     console.log("mudou")
     setTela("pagHome")
   }

   const irParaMatch = () => {
    console.log("MUDOU")
    setTela("pagMatch")
  }
  const deletar = () => {
    const url= "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/barbara/clear"
    axios
    .put(url)
    .then((res)=>{
      setBotaoReset(res.data)
      console.log(res.data)
    })
    .catch((err)=>{console.log("Erro", err)})
  }

  return (
   
    <BoxContainer >
      {trocaTela()}
      <button onClick={deletar}>Resetar</button>
    </BoxContainer>
  );
}
export default App