
import { useEffect, useState } from "react";
import api, { CHARACATERS } from "../api/axiosConfigRoute";
import Character from "../model/Character";

//-------------Get one Character
export const useOneCharCall = (characterNames: string[]): Character[] => {
    const [characters, setCharacters] = useState<Character[]>([]);
    //const [icon, setIcon] = useState(name);

    //    console.log(character)
    // Get Info Character
    const callCharacter = async () => {
        const newCharacters: Character[] = [];
        for (let index = 0; index < characterNames.length; index++) {
            //const element = character[index];
            const response = await api
                .get(`${CHARACATERS}/${characterNames[index]}`)
            const characterData: Character = response.data
            newCharacters.push(characterData);
        }
        setCharacters(newCharacters);
    };

    // Get Icon Character
    /*
    const callIconCharacter = async () => {
      try {
        const response = await api
          .get(`${CHARACATERS}/${character}/icon`, {
            responseType: "arraybuffer",
          })
          .then((response) => {
            const base64 = btoa(
              new Uint8Array(response?.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            const imageSrc = "data:image/png;base64," + base64;
            // Aquí puedes hacer lo que quieras con la imagen, como agregarla a un estado o mostrarla en un elemento de imagen
  
            setIcon(imageSrc)
            // console.log(response.data);
            // setIcon(response?.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
  */
    useEffect(() => {
        (async () => {
            await callCharacter();
        })();
        //  callIconCharacter();
    }, []);

    //console.log(character)
    return characters;
};