import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard';

import { StyledGrid, StyledGridContent } from './styles/StyledGrid';




function Character () {

    const [character, setCharacter] = useState();

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data);
            setCharacter(response.data.results)
        })
        .catch(err => console.log(err))

    }, []);

    if (!character){
        return <h1>Loading...</h1>
    }else {
        return (
            <StyledGrid>
                <StyledGridContent>
                {character.map((character, index) => <CharacterCard character={character} key={index} />)}
                </StyledGridContent>
            </StyledGrid>
           
        );
    }

        
}

export default Character;