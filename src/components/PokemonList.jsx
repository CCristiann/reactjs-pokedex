import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import LoadMoreButton from "./LoadMoreButton";

import Loader from "./Loader";

function PokemonList() {
  const { limitedPokemons, filteredPokemons, loader } =
    useContext(PokemonContext);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div
            key={"pokemon-list"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20 my-12"
          >
            {filteredPokemons.length ? (
              <>
                {filteredPokemons.map((pokemon) => (
                  <PokemonCard
                    pokemon={pokemon}
                    key={`filtered/${pokemon.id}`}
                  />
                ))}
              </>
            ) : (
              <>
                {limitedPokemons.map((pokemon) => (
                  <PokemonCard
                    pokemon={pokemon}
                    key={`limited/${pokemon.id}`}
                  />
                ))}
              </>
            )}
          </div>
          <LoadMoreButton />
        </>
      )}
    </>
  );
}

export default PokemonList;
