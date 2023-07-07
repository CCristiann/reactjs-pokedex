import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();

  const { allPokemons } = useContext(PokemonContext);

  const searchedPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div
      key={"pokemon-list"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20 my-12 w-full"
    >
      {searchedPokemons.map((pokemon) => (
        <Link to={`pokemon/${pokemon.id}`} key={pokemon.id}>
          <div className="min-w-[calc(100%/3)] min-h-[200px] w-full h-full card shadow-lg rounded-2xl cursor-pointer relative bg-white">
            <img
              className="max-w-[65px] max-h-[65px] mx-auto absolute -top-[30px] left-[50%] translate-x-[-50%]"
              src={pokemon.sprites.other.dream_world.front_default}
            ></img>

            <div className="flex flex-col justify-end items-center gap-2 font-poppins font-bold h-full pb-2">
              <span className="text-[#949fad] text-lg">N°{pokemon.id}</span>
              <h4 className="text-[#192943] text-2xl">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h4>
              <div className="flex gap-4 py-4">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`${type.type.name} py-1 px-2 rounded-lg text-sm`}
                  >
                    {type.type.name.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
