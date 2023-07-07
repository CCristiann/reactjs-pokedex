import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function PokemonCard({ pokemon }) {
  return (
    <Link to={`pokemon/${pokemon.id}`}>
      <div className="min-h-[200px] w-full h-full card shadow-lg rounded-3xl cursor-pointer relative bg-white hover:scale-[1.02] duration-300">
        <img
          className="max-w-[65px] max-h-[65px] mx-auto absolute -top-[30px] left-[50%] translate-x-[-50%] drop-shadow-lg"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
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
  );
}

export default PokemonCard;
