import axios from "axios";
import React, { useEffect } from "react";
// import {BrowserRouter, Switch, Route, useNavigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detalhes = () =>{
  const navigate = useNavigate()

  const voltarHome = () => {
    navigate("/")
  }

  useEffect(()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/{/Detalhes}"
    axios
   .get(url, {
    //  headers: {
    //    auth:
     
   })
   .then((res)=>{console.log(res.data)})
   .catch((err)=>{console.log("Deu errado:", err.response)})
  },[])
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