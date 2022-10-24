import React from "react";
import { useGlobalContext } from "../context";
import Character from "./Character";
import Loading from "./Loading";

const Characters = () => {
  const { characters, isLoading } = useGlobalContext();

  if (isLoading || characters.length == 0) {
    return <Loading />;
  }

  return (
    <div className="p-3 grid sm:grid-cols-3 lg:grid-cols-4">
      {characters.map((character) => {
        return <Character key={character.char_id} {...character} />;
      })}
    </div>
  );
};

export default Characters;
