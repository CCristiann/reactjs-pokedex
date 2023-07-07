import React, { useContext, useEffect, useState } from "react";
import HomePage from "./HomePage";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails";

import Loader from "../components/Loader";

function PokemonPage() {
  const { getPokemonById } = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState({});
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);

    setPokemon(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  });

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <PokemonDetails pokemon={pokemon} />
          <HomePage />
        </>
      )}
    </>
  );
}

export default PokemonPage;
