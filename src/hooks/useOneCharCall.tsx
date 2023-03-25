
import { useEffect, useState } from "react";
import api, { CHARACATERS } from "../api/axiosConfigRoute";

//-------------Get one Character
export const useOneCharCall = (name) => {
  const [character, setCharacter] = useState(name);
  const [icon, setIcon] = useState(name);

  // Get Info Character
  const callCharacter = async () => {
    try {
      const response = await api
        .get(`${CHARACATERS}/${character}`)
        .then((response) => {
          //console.log(response.data);
          setCharacter(response?.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // Get Icon Character
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

  useEffect(() => {
    callCharacter();
    callIconCharacter();
  }, []);

  return [character, icon];
};