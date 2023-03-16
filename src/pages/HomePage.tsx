import { Head } from "../layout/Head";
import { useAllCharacterCall, useOneCharacterCall } from "../api/ApiCalls";
import { Cards } from "../components/Cards";
import { useState } from "react";

export const HomePage = () => {
  // Call Character info + icon
  const [character, icon] = useOneCharacterCall("qiqi");

  const prueba = useAllCharacterCall();
  console.log(prueba);

  const [characterNames, setCharacterNames] = useState();

  return (
    <>
      <Head />
      <h1>Genshin api fan</h1>
      <h3>Characters</h3>
      <img src={icon} alt="pj" />
      <p><b>Name: </b>{character.name}</p>
      <p><b>Title: </b>{character.title}</p>
      <p><b>Nation: </b>{character.nation}</p>
      {
      <ul>
        {prueba.slice(0).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      }
      {/*JSON.stringify(prueba)*/}
    </>
  );
};