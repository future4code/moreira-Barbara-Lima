import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [inputCommentario, setInputComentario] = useState([])


	const onChangeComentario = (event) => {
		setInputComentario(event.target.value)
		
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputCommentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(inputCommentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario