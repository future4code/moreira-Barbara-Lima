import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import AppBar from "./AppBar";
import ChooseButton from "./ChooseButtons";


const Home = styled.div`
// background-color: black;
// background-image: url(https://media.istockphoto.com/vectors/black-and-white-checkered-abstract-background-vector-id485140380);
`

const AppHome = (props) => {
    // const url = () =>{

    // }
    return (
        <Home>
            <div>        
               <AppBar/> 
                <button onClick = {props.botao1}> Seus Matchs </button>
            </div>
            <hr/>
        
            <div>
               




            </div>

            <hr/>
            <div>
                <ChooseButton/>
            </div>
        </Home>
    )
}

export default AppHome;