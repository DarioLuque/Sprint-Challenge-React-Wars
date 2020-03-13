import React from 'react';
import { StyledCards } from './styles/StyledCards'



function CharacterCard(props) {
        return(

			<StyledCards>
				<h3>name: {props.character.name}</h3>
				<p>height: {props.character.height}</p>
				<p>mass: {props.character.mass}</p>
				<p>gender: {props.character.gender}</p>
				<p>hair color: {props.character.hair_color}</p>  
			</StyledCards>
   
        )
    }

export default CharacterCard;