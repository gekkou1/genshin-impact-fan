import { useEffect, useState } from "react";
import api, { CHARACATERS } from "../api/axiosConfigRoute";

//------------- Get all Characters
export const useAllCharCall = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  const callCharacters = async () => {
    try {
      const response = await api.get(CHARACATERS).then((response) => {
        //console.log(response.data);
        setAllCharacters(response?.data);
        //console.log(characters);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callCharacters();
  }, []);

  return allCharacters;
};