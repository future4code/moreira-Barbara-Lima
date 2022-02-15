import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AppBar from "./AppBar";
import ChooseButtons from "./ChooseButtons"



const Home = styled.div`
// background-color: black;
// background-image: url(https://media.istockphoto.com/vectors/black-and-white-checkered-abstract-background-vector-id485140380);
`

const AppHome = (props) => {

    return (
        <Home>
            <div>        
               <AppBar/> 
                <button onClick={props.irMatch}> Seus Matchs </button>
            </div>
            <hr/>
        
            <div>
                <ChooseButtons/>
            </div>
            <hr/>
        </Home>
    )
}

export default AppHome;