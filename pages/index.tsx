import React, { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';
import en from '../public/en.json';
import { CharacterList, Loading, Error, PaginationButtons, SearchBar, Filter } from '../components';
import { Character } from '../types/character';

const charactersPerPage = 6;

const CharacterListPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const characters = useMemo(() => {
    return data?.allPeople.people || [];
  }, [data]);

  const filteredCharacters = useMemo(() => {
    return characters
      .filter((character: Character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a: Character, b: Character) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return sortOrder === 'asc' ? nameA.localeCompare(nameB) : sortOrder === 'desc' ? nameB.localeCompare(nameA) : 0;
      });
  }, [searchQuery, characters, sortOrder]);
  

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
  const charactersToDisplay = filteredCharacters.slice(
    (currentPage - 1) * charactersPerPage,
    currentPage * charactersPerPage
  );

  if (loading) return <Loading />;

  if (error) {
    return <Error errorMessage={en.data_error} errorType={error.message} />;
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (newSortOrder: string) => {
    setSortOrder(newSortOrder);
    setCurrentPage(1);
  };

  const clearFilter = () => {
    setSortOrder(null);
    setCurrentPage(1);
  };

  return (
    <div className="text-center">
      <h1>{en.title}</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter
        sortOrder={sortOrder}
        handleSortChange={handleSortChange}
        clearFilter={clearFilter}
      />
      <CharacterList characters={charactersToDisplay} />
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {totalPages > 1 && (
        <div>
          <p>
            {en.page} {currentPage} {en.of} {totalPages}
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterListPage;
