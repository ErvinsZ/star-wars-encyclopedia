import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../graphql/queries'
import { useRouter } from 'next/router';
import en from '../../public/en.json'
import {CharacterDetails, BackButton, Loading, Error} from '../../components';
import { Character} from '../../types/character';

const CharacterDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <Loading/>

  if (error) {
    return <Error errorMessage={en.data_error} errorType={error.message} />;
  }

  const handleGoBack = () => {
    router.back();
  };
  
  const character = data.allPeople.people.find((char:Character) => char.id === id);

  return (
        <div className='flex items-center flex-col'>
            <CharacterDetails character={character}/>
            <BackButton onClick={handleGoBack}/>
        </div>
  );
};

export default CharacterDetailsPage;
