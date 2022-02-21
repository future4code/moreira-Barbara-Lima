import React, { useState } from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () =>{

  const[senha, setSenha] = useState("");
  const[email, setEmail] = useState("");

  const navigate = useNavigate()


  const irParaAdm = () => {
    // console.log(email, senha)
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login"
    const body = {
      email: email,
      password: senha
    }

  axios
    .post(url, body)
    .then((res)=>{console.log("Resposta:", res.data)
      if(res.request.upload===true){
        navigate("/PainelAdm")
      }else{
        alert("Email ou Senha errados!")
      }
      // {res.data?navigate("/PainelAdm"):alert("Email ou Senha errados!")}
    
  })
    .catch((err)=>{console.log(err.response)})
    // navigate("/PainelAdm")
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
        <button 
        onClick={irParaAdm}>
        Entrar</button>
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