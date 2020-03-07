import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
margin: 1rem 1rem 1rem 1rem;
padding: 1rem;
border: 1px dotted #2FF923; 
width: 100%;

p {
	font-size: 20px;
}

&:hover {
		background-color: #624A2e;
		color: #2FF923;
}
`;

function CharacterCard(props) {
        return(
		<Card>
				<p>name: {props.character.name}</p>
				<p>height: {props.character.height}</p>
				<p>mass: {props.character.mass}</p>
				<p>gender: {props.character.gender}</p>
				<p>hair color: {props.character.hair_color}</p>  
		</Card>         
        )
    }

export default CharacterCard;