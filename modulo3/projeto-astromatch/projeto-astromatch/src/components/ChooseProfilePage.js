import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"; 
import ChooseButton from "./ChooseButtons";
  
const ChooseProfilePage = () => {
  const [curtir, setCurtir] = useState(false);
  const [allMatches, setAllMatches] = useState({})
  const escolhePerfil = ()=>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/barbara/person"
    axios
    .get(url)
    .then((res) => {
      setAllMatches(res.data.profile)
    })
    .catch((err)=>{
      alert("Erro:", err)
    })
  }

  useEffect(()=>{
    escolhePerfil()
  }, [])
  return (
    <div >
      <div>
      perfil
      <div/>
        <div>
          <img src={allMatches.photo} alt="Fotos de Pessoas"/>
        </div>
        <div>
          <ChooseButton/>
          {/* <h3>{allMatches.name}</h3> 
          <h3>{allMatches.age}</h3>
          <p>{allMatches.bio}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ChooseProfilePage;
