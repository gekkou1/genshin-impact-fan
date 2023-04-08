import { useEffect, useState } from "react";
import api, { CHARACTERS } from "../api/axiosConfigRoute";
import Character from "../model/Character";

const useCharacters = (characterNames: string[]): Character[] => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const newCharacters: Character[] = [];

    const getCharacterData = async () => {
      for (let i = 0; i < characterNames.length; ++i) {
        const result = await api.get(`${CHARACTERS}/${characterNames[i]}`);
        const character: Character = result.data
        character.iconUrl = `${api.getUri()}${CHARACTERS}/${characterNames[i]}/icon`;
        if (character) {
          newCharacters.push(character);
        }
      }

      setCharacters(newCharacters);
    };

    getCharacterData();
  }, [characterNames]);

  return characters;
};

export default useCharacters;