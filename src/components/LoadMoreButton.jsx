import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Loader from "../components/Loader";

function LoadMoreButton() {
  const { loadMorePokemons, loader } = useContext(PokemonContext);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex justify-center">
          <button
            className="rounded-lg py-2 px-4 bg-white font-bold text-lg"
            onClick={loadMorePokemons}
            id="load-more-pokemons"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default LoadMoreButton;
