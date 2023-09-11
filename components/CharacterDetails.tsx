// components/CharacterList.tsx
import React from 'react';
import { Character, Film } from '../types/character';
import en from '../public/en.json'

interface CharacterListProps {
  character: Character;
}

const CharacterDetails: React.FC<CharacterListProps> = ({
  character
}) => {
  return (
    <div>
        <h1>{en.characterDetails}</h1>
        <div  className='w-[200px] border-2  rounded p-2 mb-2'>
            <p> <span className='font-medium'> {en.character.name}: </span> <br/> {character.name} </p>
            <p> <span className='font-medium'> {en.character.birthYear}: </span> <br/> {character.birthYear} </p>
            <p> <span className='font-medium'> {en.character.gender}: </span> <br/> {character.gender} </p>
            <p> <span className='font-medium'> {en.character.homeworld}: </span> <br/> {character.homeworld.name || en.character.unknown} </p>
            <p> <span className='font-medium'> {en.character.species}: </span> <br/> {character.species?.name || en.character.unknown} </p>
            <div>
                <p className='font-medium'>{en.character.films}: </p>
                
                <ul>
                    {character.filmConnection.films.map((film: Film)=>(
                        <li key={film.id}>{film.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default CharacterDetails;
