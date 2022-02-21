import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CriarViagens = () =>{
  const navigate = useNavigate()

  const irParaDetalhesViagemCriada = () =>{
    alert("Viagem adicionada com sucesso!")
    navigate ("/Detalhes")
  }
    return(
      <div>
        CriarViagens
        <hr/>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={irParaDetalhesViagemCriada}>Criar</button>
      </div>
    )
  }
  export default CriarViagens;