// components/CharacterList.tsx
import React from 'react';
import { Character } from '../types/character';
import Link from 'next/link';
import en from '../public/en.json'

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters
}) => {
  return (
    <div>
        <div className='flex flex-wrap justify-around gap-0.5'>
            {characters.map((character) => (
                <div key={character.id} className='w-[150px] min-h-[140px] border-2 p-2 mb-2'>
                    <div className='mb-2'>
                        <p> <span className='font-medium'> {en.character.name}: </span> <br/> {character.name} </p>
                        <p> <span className='font-medium'> {en.character.gender}: </span> <br/> {character.gender} </p> 
                    </div>
                    <Link href={`/character/${character.id}`} className='text-white bg-slate-500 border-2 rounded-md p-1 text-sm'>
                    {en.readMore}
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CharacterList;
