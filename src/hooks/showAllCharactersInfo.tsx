import { useEffect, useState } from "react";
import api, { CHARACTERS } from "../api/axiosConfigRoute";

//------------- Get all Characters
export const showAllCharactersInfo = () => {
  const [allCharacters, setAllCharacters] = useState<string[]>([]);

  const callCharacters = async () => {
    try {
      const response = await api.get(`${CHARACTERS}/all`)
      setAllCharacters(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void (async () => {
      await callCharacters();
    })();
  }, []);

  return allCharacters;
};