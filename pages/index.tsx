import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';


const CharacterListPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return (
    <></>
  );
};

export default CharacterListPage;