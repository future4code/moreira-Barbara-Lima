import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"; 

const MatchListPage = (props) => {
  const [pessoa, setPessoa] = useState([])
    const getMatches = () =>{   
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/matches"
      const headers =  "Content-Type: application/json"
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
        <div>
          {pessoa.map((pessoas) => {
            return <li key={pessoas.id}>{pessoas.name}</li>})}
        </div>
      </div>
      Deuu Match...Aproveite!
      <button onClick={props.botao}> home </button>
    </div>
  );
}

export default MatchListPage;
