import React from "react";
// import {BrowserRouter, Switch, Route, useNavigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detalhes = () =>{
  const navigate = useNavigate()

  const voltarHome = () => {
    navigate("/")
  }

    return(
      <div>
        Detalhes
        <hr/>
        <button onClick={()=>navigate(-1) }>Voltar</button>
        <button onClick={voltarHome}>Voltar Home</button>
      </div>
    )
  }
  export default Detalhes;