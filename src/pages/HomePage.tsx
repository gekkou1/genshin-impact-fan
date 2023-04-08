import { FC, useEffect, useState } from "react";
import { Head } from "../layout/Head";
import { listAllCharacters, showAllCharactersInfo, useOneCharCall } from "../hooks";
import Card from "../components/Card";

export const HomePage = () => {
  // Call Character info + icon
  const charNames = listAllCharacters();
  const showCharInfo = showAllCharactersInfo();

  const [characterNames, setCharacterNames] = useState([]);
  const [hasCharNames, setHasCharNames] = useState(false);

  const arraChar = []

  useEffect(() => {
    arraChar.push(charNames)
    setCharacterNames(...[arraChar[0]])
    console.log(arraChar[0].slice(0))
  }, [])

  const testChars = useOneCharCall(arraChar)
  //console.log(characterNames)
  return (
    <>
      <Head />
      <h1>Genshin api fan</h1>
      {/*characterCardView*/}
      <h3>Cards</h3>
      {
        (testChars[0].length < 0)
          ?
          <p>Esta Vacio</p>
          :
          testChars[0].map((icon) => (
            <img src={icon} alt="avatar" />
          ))}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }} >
        {showCharInfo.map((char) => (
          <>
            <Card {...char} />
          </>
        ))
        }

      </div>
      <h3>Characters</h3>
      {
        <ul>
          {charNames.slice(0).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      }
      {/*JSON.stringify(charNames)*/}
    </>
  );
};
