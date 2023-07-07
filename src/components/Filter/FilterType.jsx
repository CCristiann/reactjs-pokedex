import React, { useState, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { PokemonContext } from "../../context/PokemonContext";
function FilterType() {
  const [typeOpen, setTypeOpen] = useState(false);

  const { handleFilter } = useContext(PokemonContext);

  return (
    <>
      <div className="flex flex-col md:max-w-[180px] w-full bg-white rounded-xl shadow-lg cursor-pointer">
        <div
          onClick={() => setTypeOpen(!typeOpen)}
          className=" py-2 px-4 flex gap-4 justify-between items-center font-bold text-lg"
        >
          Type
          <BiChevronDown size={25} />
        </div>
        <div>
          <ul
            className={`filter-type bg-white max-w-[180px] w-full mt-2 overflow-y-auto flex flex-col gap-2 absolute z-20 shadow-xl ${
              typeOpen ? "max-h-[200px] p-3" : "max-h-0"
            }`}
          >
            <li>
              <input onChange={handleFilter} type="checkbox" id="fire" />
              <label htmlFor="fire">Fire</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="grass" />
              <label htmlFor="grass">Grass</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="steel" />
              <label htmlFor="steel">Steel</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="water" />
              <label htmlFor="water">Water</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="psychic" />
              <label htmlFor="psychic">Psychic</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="ground" />
              <label htmlFor="ground">Ground</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="ice" />
              <label htmlFor="ice">Ice</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="flying" />
              <label htmlFor="flying">Flying</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="ghost" />
              <label htmlFor="ghost">Ghost</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="normal" />
              <label htmlFor="normal">Normal</label>
            </li>

            <li>
              <input onChange={handleFilter} type="checkbox" id="poison" />
              <label htmlFor="poison">Poison</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="rock" />
              <label htmlFor="rock">Rock</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="fighting" />
              <label htmlFor="fighting">Fighting</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="dark" />
              <label htmlFor="dark">Dark</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="bug" />
              <label htmlFor="bug">Bug</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="dragon" />
              <label htmlFor="dragon">Dragon</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="electric" />
              <label htmlFor="electric">Electric</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="fairy" />
              <label htmlFor="fairy">Fairy</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="shadow" />
              <label htmlFor="shadow">Shadow</label>
            </li>
            <li>
              <input onChange={handleFilter} type="checkbox" id="unknow" />
              <label htmlFor="unknow">Unknow</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilterType;
