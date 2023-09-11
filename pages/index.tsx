import React,{useMemo} from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';
import en from '../public/en.json'
import { CharacterList, Loading, Error} from '../components';


const CharacterListPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const characters = useMemo(() => {
    return data?.allPeople.people || [];
  }, [data]);

  if (loading) return <Loading />;

  if (error) {
    return <Error errorMessage={en.data_error} errorType={error.message} />;
  }

  return (
    <div className='text-center'>
      <h1>{en.title}</h1>
      <CharacterList characters={characters}/>
    </div>
  );
};

export default CharacterListPage;