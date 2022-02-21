import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Home= () =>{
  const navigate = useNavigate()

  const irPraViagens = ()=>{
    navigate ("/ListaDeViagens")
  }

  const irLogin = () => {
    navigate ("/Login")
  }


    return(
      <div>
        Home
        <hr/>
        <button onClick={irPraViagens}> Ver Viagens </button>
        <button onClick={irLogin}> Área de Admin </button>
      </div>
    )
  }
  export default Home;