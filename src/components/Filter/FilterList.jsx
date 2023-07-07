import React, { useContext } from "react";

import FilterType from "./FilterType";
import FilterWeight from "./FilterWeight";
import { PokemonContext } from "../../context/PokemonContext";

function Filterbar() {
  const { filtersReset } = useContext(PokemonContext);

  return (
    <section className="flex flex-wrap gap-6 text-[#949fad]">
      <FilterType />
      <FilterWeight />
      <button
        className="bg-white rounded-xl py-2 px-4 font-bold text-lg shadow-lg"
        onClick={filtersReset}
      >
        Reset Filters
      </button>
    </section>
  );
}

export default Filterbar;
