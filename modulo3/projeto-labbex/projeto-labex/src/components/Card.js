import React from "react";
// import styled from "styled-components"; 


const Card = (props)=>{
    return (
        <div>
            <p> Nome:{props.nome}</p>
            <p> Descrição:{props.descricao}</p>
            <p> Duração:{props.duracao}</p>
            <p> Data: {props.data}</p>
            <hr/>
        </div>
    )
}

export default Card;