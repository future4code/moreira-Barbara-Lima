import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () =>{
  const navigate = useNavigate()

  const irParaAdm = () => {
    navigate("/PainelAdm")
  }
    return(
      <div>
        Login
        <hr/>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={irParaAdm}>Entrar</button>
      </div>
    )
  }
  export default Login;