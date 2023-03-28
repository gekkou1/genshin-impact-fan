import { useEffect, useState } from "react";
import api, { CHARACATERS } from "../api/axiosConfigRoute";

//------------- Get all Characters
export const useAllCharCall = () => {
  const [allCharacters, setAllCharacters] = useState<string[]>([]);

  const callCharacters = async () => {
    try {
      const response = await api.get(CHARACATERS)
      setAllCharacters(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void (async() => {
        await callCharacters();
    })();
  }, []);

  return allCharacters;
};