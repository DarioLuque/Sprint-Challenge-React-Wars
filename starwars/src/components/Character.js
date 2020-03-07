import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components'


const Wrapper = styled.div `
display: flex;
justify-content: center;
justify-content: space-between;
margin-bottom: 1rem;
margin-right: 1rem;
margin-left: 1rem;
padding: 1rem;
`;


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
            <Wrapper>
                {character.map((character, index) => <CharacterCard character={character} key={index} />)}
            </Wrapper>
           
        );
    }

        
}







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import CharacterCard from './CharacterCard';

// function CharacterList () {
//     const [character, setCharacter] = useState([]);

//     useEffect(() => {
//         axios.get(`https://swapi.co/api/people/1`)
//         .then(response => {
//             console.log(response.data);
//             setCharacter(response.data)
//         })
//         .catch(err => console.log(err))

//     }, []);

//     return (
//         <div>
//             {character.map((character, index) => <CharacterCard character={character} key={index} />)}
//         </div>
//     )
// }
export default Character;