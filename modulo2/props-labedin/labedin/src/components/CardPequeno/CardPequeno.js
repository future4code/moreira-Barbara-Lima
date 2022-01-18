import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    padding: 25px;
`
const Imagem = styled.img`
    width: 50px;
    
`


function CardPequeno(props) {
    return (
        <Container>
            <Imagem src={props.imagem} />
            <p>{props.titulo}</p>
        </Container>
    )
}

export default CardPequeno;
