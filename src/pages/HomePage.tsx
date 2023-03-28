import { FC, useState } from "react";
import { Head } from "../layout/Head";
import { Cards } from "../components/Cards";
import { useOneCharCall, useAllCharCall } from "../hooks";
import Character from "../model/Character";


const Card: FC<Character> = ({ name, title, nation }) => {
  return (
    <div style={{ padding: "10px 20px", border: "1px solid gray", borderRadius: "10px" }}>
      {/*
      <img src={icon} alt="pj" />
      */}
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Title: </b>
        {title}
      </p>
      <p>
        <b>Nation: </b>
        {nation}
      </p>
    </div>
  )
};

export const HomePage = () => {
  // Call Character info + icon
  const charNames = useAllCharCall();
  const character = useOneCharCall(charNames);

  //console.log(charNames);
  console.log(character);

  const [characterNames, setCharacterNames] = useState();

  const characterCardView = character.map( character => {
    return <Card
      {...character}
    />;
  });

  return (
    <>
      <Head />
      <h1>Genshin api fan</h1>
      {characterCardView}
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
