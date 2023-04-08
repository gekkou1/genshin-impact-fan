
import { useEffect, useState } from "react";
import api, { CHARACTERS } from "../api/axiosConfigRoute";
import Character from "../model/Character";

//-------------Get one Character
export const useOneCharCall = (characterNames: any) => {
  const [characters, setCharacters] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    // Get Info Character
    const callCharacter = async () => {
      const newCharacters: Character[] = [];
      for (let index = 0; index < characterNames.length; index++) {
        //const element = character[index];
        const response = await api
          .get(`${CHARACTERS}/${characterNames[index]}`)
        const characterData: Character = response.data
        newCharacters.push(characterData);
      }
      setCharacters(newCharacters);
    };
    // Get Icon Character
    const callIconCharacter = async () => {
      const newIconCharacters = [];
      for (let index = 0; index < characterNames.length; index++) {
        const response = await api
          .get(`${CHARACTERS}/${characterNames[index]}/icon-big`, {
            responseType: "arraybuffer",
          })
        //const chacracterIconData = response.data
        const base64 = btoa(
          new Uint8Array(response?.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const imageSrc = "data:image/png;base64," + base64;
        // Aquí puedes hacer lo que quieras con la imagen, como agregarla a un estado o mostrarla en un elemento de imagen
        newIconCharacters.push(imageSrc)

        setIcon(newIconCharacters)
        //console.log(imageSrc);
        // setIcon(response?.data);
      };
      //  callIconCharacter();
    }

    callCharacter();
    callIconCharacter();
  }, []);

  return [icon, characters];
};