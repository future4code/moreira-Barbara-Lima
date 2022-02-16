import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";



const ListaDeViagens = () =>{
  const navigate = useNavigate()

  // const voltarParaHome = ()=>{
  //   navigate ("/Home")
  // }

  const irInscricao = () => {
    navigate ("/InscrevaSe")
  }


    return(
      <div>
        ListaDeViagens
        <hr/>
        <button onClick={() => navigate(-1)}> Voltar </button>
        <button onClick={irInscricao}> Inscreva-se </button>
      </div>
    )
  }

  export default ListaDeViagens;