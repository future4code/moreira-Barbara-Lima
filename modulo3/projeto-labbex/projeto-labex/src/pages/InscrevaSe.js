import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const InscrevaSe = () =>{
  const navigate = useNavigate()

  const irParaEnviar = () => {
    return alert ("Parabéns, Inscrição concluída!")
  }

    return(
      <div>
        InscrevaSe
        <hr/>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={irParaEnviar}>Enviar</button>
      </div>
    )
  }
  export default InscrevaSe;