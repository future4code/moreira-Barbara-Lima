import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"; 
import AppBar from "./AppBar";

const MatchListPage = (props) => {
  const [pessoa, setPessoa] = useState([])
    const getMatches = () =>{   
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/barbara/matches"
      const headers =  {"Content-Type": "application/json"}
      axios
      .get(url,headers)
      .then((res)=>{
        console.log("matchList")
        setPessoa(res.data.matches)})
      .catch((err)=>{console.log("Erro:",err)})
      }

  useEffect(() => {getMatches()},[])

  return (
    <div >
      <div>
        <AppBar/>
        <hr/>
        <div>
        <button onClick={props.irHome}> home </button>
          {pessoa.map((pessoas) => {
            return <li key={pessoas.id}>{pessoas.name}</li>})}
        </div>
      </div>
      Deuu Match...Aproveite!
      
    </div>
  );
}

export default MatchListPage;
