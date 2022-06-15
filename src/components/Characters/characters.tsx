import { useEffect, useState } from "react";
import { CharactersProps, Results } from "../../typings/application";
import Pagination from "../Pagination/pagination";
import CharactersCard from "./charactersCard";

const Characters: React.FC<CharactersProps> = ({
  results,
  count = 0,
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) => {
  const [characters, setCharacters] = useState<Results[]>([]);
  const [charactersCards, setCharactersCards] = useState<JSX.Element[]>([]);

  const createCharacters = () => {
    const _characters = results.map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image,
      };
    });
    setCharacters(_characters);
  };

  const createCharactersCards = () => {
    if (!characters) return;
    const _charactersCards = characters.map((character: Results) => {
      return (
        <CharactersCard
          key={`character_${character.id}`}
          name={character.name}
          species={character.species}
          status={character.status}
          image={character.image}
        />
      );
    });
    setCharactersCards(_charactersCards);
  };

  useEffect(() => {
    createCharacters();
  }, [results]);

  useEffect(() => {
    createCharactersCards();
  }, [characters]);
  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-3/4 max-w-3xl">
      {characters && characters.length > 0 && (
        <>
          <Pagination
            count={count}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          <div className="flex flex-wrap w-full h-auto pl-5 mb-5 mt-5 justify-center">
            {charactersCards}
          </div>
          <Pagination
            count={count}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}
      {characters.length === 0 && (
        <div className="h-auto mx-auto">No found any characters</div>
      )}
    </div>
  );
};

export default Characters;
