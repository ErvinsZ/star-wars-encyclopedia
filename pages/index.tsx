import React,{useMemo, useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';
import en from '../public/en.json'
import { CharacterList, Loading, Error, PaginationButtons} from '../components';

const charactersPerPage = 6;

const CharacterListPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [currentPage, setCurrentPage] = useState(1);

  const characters = useMemo(() => {
    return data?.allPeople.people || [];
  }, [data]);

  const totalPages = useMemo(() => {
    return Math.ceil(characters.length / charactersPerPage);
  }, [characters]);

  const charactersToDisplay = useMemo(() => {
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    return characters.slice(startIndex, endIndex);
  }, [currentPage, characters]);

  if (loading) return <Loading />;

  if (error) {
    return <Error errorMessage={en.data_error} errorType={error.message} />;
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='text-center'>
      <h1>{en.title}</h1>
        <CharacterList characters={charactersToDisplay}/>
      <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
           {totalPages > 1 && (
            <div>
              <p>{en.page} {currentPage} {en.of} {totalPages}</p>
            </div>
          )}
    </div>
  );
};

export default CharacterListPage;