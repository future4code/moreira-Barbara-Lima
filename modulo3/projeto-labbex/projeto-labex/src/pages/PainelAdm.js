import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PainelAdm = () =>{
  const navigate = useNavigate ()

  const irParaCriarViagem = () =>{
    navigate ("/CriarViagens")
  }

  const voltarParaHome = () =>{
    navigate ("/")
  }
    return(
      <div>
        PainelAdm
        <hr/>
        <button onClick={() => navigate(-1)}> Voltar </button>
        <button onClick={irParaCriarViagem}> Criar Viagem </button>
        <button onClick={voltarParaHome}> Logout </button>
        
      </div>
    )
  }
  export default PainelAdm;