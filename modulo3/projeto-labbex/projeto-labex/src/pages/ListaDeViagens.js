import axios from "axios";
import React, {useState, useEffect} from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const ListaDeViagens = () =>{
  const[viagem, setViagem] = useState([])

  const navigate = useNavigate()

  const irInscricao = () => {
    navigate ("/InscrevaSe")
  }
  const listaDeViagem = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"

    axios
    .get(url)
    .then((res)=>{console.log("Sua Lista", res)
    setViagem(res.data.trip)})
    .catch((err)=>{console.log("Erro", err)})
  }


    return(
      <div>
        ListaDeViagens
        <hr/>
        <button onClick={() => navigate(-1)}> Voltar </button>
        <button onClick={irInscricao}> Inscreva-se </button>
        <hr/>
        {viagem.map((viagens)=>{return <li key={viagens.id}>{viagens.name}</li>})}
      </div>
    )
  }

  export default ListaDeViagens;