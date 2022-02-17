import React, { useState } from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () =>{

  const[senha, setSenha] = useState("");
  const[email, setEmail] = useState("");

  const navigate = useNavigate()

  const pointlogin = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login"
    // const headers = {
    //   headers = {
    //     "Content-Type":"application/json"
    //   }
    // }
    const body = {
      
      email: email,
      password: senha
      
    }

  axios
  .post(url, body)
  .then((res)=>{console.log("Resposta:", res.data.token)})
  .catch((err)=>{console.log(err)})
  }

  const irParaAdm = () => {
  
    navigate("/PainelAdm")
  }

  const onChangeEmail = (ev) => {
    setEmail(ev.target.value)
  }

  const onChangeSenha = (ev) => {
    setSenha (ev.target.value)

  }


    console.log(senha, email)

    return(
      <div>
        Login
        <hr/>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={irParaAdm}>Entrar</button>
        <hr/>
        <div>
          <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}/>


          <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={onChangeSenha}
          />
        </div>
      </div>
    )
  }
  export default Login;