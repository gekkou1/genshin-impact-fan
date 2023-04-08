import { useEffect, useState } from "react";
import api, { CHARACTERS } from "../api/axiosConfigRoute";

//------------- Get all Characters
export const listAllCharacters = () => {
  const [allCharacters, setAllCharacters] = useState<string[]>([]);

  const callCharacters = async () => {
    try {
      const response = await api.get(CHARACTERS)
      setAllCharacters(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callCharacters();
  }, []);

  return allCharacters;
};