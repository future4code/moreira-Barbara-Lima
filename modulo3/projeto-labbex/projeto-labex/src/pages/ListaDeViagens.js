import axios from "axios";
import React, {useState, useEffect} from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";



const ListaDeViagens = () =>{
  const[viagens, setViagem] = useState([])

  const navigate = useNavigate()

  const irInscricao = () => {
    navigate ("/InscrevaSe")
  }
  const listaDeViagem = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"

    axios
    .get(url)
    .then((res)=>{console.log("Sua Lista", res)
    setViagem(res.data.trips)})
    .catch((err)=>{console.log("Erro", err)})
  }
  useEffect(() => {listaDeViagem()},[])

    return(
      <div>
        Lista de Viagens
        <hr/>
        <button onClick={() => navigate(-1)}> Voltar </button>
        <button onClick={irInscricao}> Inscreva-se </button>
        <hr/>
        
        {viagens.map((viagem)=>{
          return (
           <Card 
              key={viagem.id}
              nome={viagem.planet} 
              descricao={viagem.description}
              duracao={viagem.durationInDays}
              data={viagem.date}
        /> 
        )})}

      </div>
    )
  }

  export default ListaDeViagens;