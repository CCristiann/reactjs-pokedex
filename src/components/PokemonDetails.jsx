import React from "react";
import { checkObjEmpty } from "../helper-scripts/checkObjEmpty";
function PokemonDetails({ pokemon }) {
  const isObjEmpty = checkObjEmpty(pokemon);

  if (isObjEmpty == true) {
    return;
  } else {
    let tot = 0;
    pokemon.stats.map((stat) => {
      tot += stat.base_stat;
    });

    return (
      <section className="mt-[100px] w-full h-[650px] mb-6">
        <div className="bg-white shadow-lg rounded-3xl h-full w-full relative p-4">
          <header>
            <img
              className="max-w-[190px] max-h-[190px] w-full h-full mx-auto absolute -top-[100px] drop-shadow-2xl left-[50%] translate-x-[-50%]"
              src={
                pokemon.sprites
                  ? pokemon.sprites.other.dream_world.front_default
                  : ""
              }
              alt={pokemon.name}
            ></img>
          </header>

          <div className="flex flex-col justify-end items-center gap-4 font-poppins font-bold h-full pb-8">
            <span className="text-[#949fad] text-8xl">#{pokemon.id}</span>
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

            <div className="flex gap-4 justify-center w-full my-4 text-[#192943]">
              <div className="height flex flex-col items-center gap-2 max-w-[200px] w-full">
                <h4 className="text-[16.5px] tracking-[1.5px] text-md">
                  HEIGHT
                </h4>
                <span className="p-2 bg-slate-100 rounded-full w-full text-center">
                  {pokemon.height}m
                </span>
              </div>
              <div className="weight flex flex-col items-center gap-2 max-w-[200px] w-full">
                <h4 className="text-[16.5px] tracking-[1.5px] text-md">
                  WEIGHT
                </h4>
                <span className="p-2 bg-slate-100 rounded-full w-full text-center">
                  {pokemon.weight}Kg
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16.5px] tracking-[1.5px] text-[#192943] text-md text-center">
                STATS
              </h4>
              <div className="flex gap-4">
                {pokemon.stats.map((stat) => (
                  <div
                    key={stat.stat.name}
                    className="flex flex-col gap-[5px] bg-slate-100 rounded-full pt-1 pb-2 px-1"
                  >
                    <div
                      key={stat.stat.name}
                      className={`${stat.stat.name} h-[30px] w-[30px] rounded-full flex items-center justify-center font-bold text-white text-xs`}
                    >
                      <span>
                        {stat.stat.name === "hp"
                          ? "HP"
                          : stat.stat.name === "attack"
                          ? "ATK"
                          : stat.stat.name === "defense"
                          ? "DEF"
                          : stat.stat.name === "special-attack"
                          ? "SpA"
                          : stat.stat.name === "special-defense"
                          ? "SpD"
                          : stat.stat.name === "speed"
                          ? "SPD"
                          : ""}
                      </span>
                    </div>
                    <span className="flex items-center justify-center font-bold text-[#192943] text-sm">
                      {stat.base_stat}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col gap-[5px] items-center bg-slate-100 rounded-full pt-1 pb-2 px-1">
                  <div className="tot h-[30px] w-[30px] rounded-full flex items-center justify-center font-bold text-white text-sm">
                    <span>{tot}</span>
                  </div>
                  <span className="flex items-center justify-center font-bold text-[#192943] text-sm">
                    {tot}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PokemonDetails;
