import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function FilterWeight() {

  const [weightOpen, setWeightOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:max-w-[250px] w-full bg-white rounded-xl shadow-lg cursor-pointer">
        <div
          onClick={() => setWeightOpen(!weightOpen)}
          className="py-2 px-4 flex gap-4 justify-between items-center font-bold text-lg"
        >
          Weight
          <BiChevronDown size={25} />
        </div>
        <div>
          <ul
            className={`bg-white max-w-[280px] w-full mt-2 rounded-lg overflow-y-auto flex flex-col gap-2 absolute z-20 shadow-xl 
                      ${weightOpen ? "max-h-[200px] p-3" : "max-h-0"}`}
          >
            <li className="flex items-center font-semibold">
              <AiOutlineSearch size={25} />
              <input
                type="number"
                placeholder="Type the weight (es: 69)"
                className="p-2 text-md rounded-lg w-full outline-0"
              ></input>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilterWeight;
