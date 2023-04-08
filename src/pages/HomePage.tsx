import { FC, useEffect, useState } from "react";
import { Head } from "../layout/Head";
import { listAllCharacters, showAllCharactersInfo, useOneCharCall } from "../hooks";
import Card from "../components/Card/Card";
import useCharacters from "../hooks/useCharacters";

export const HomePage = () => {
  // Call Character info + icon
  const allCharacters = listAllCharacters();
  const characters = useCharacters(allCharacters);

  const cardView = characters.map(character => {
    return <Card {...character} />;
  });

  //console.log(characterNames)
  return (
    <>
      <Head />
      <h1>Genshin api fan</h1>
      <h3>Cards</h3>
      {cardView}
    </>
  );
};
