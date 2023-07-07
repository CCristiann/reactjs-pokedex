import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import logo from "../assets/pokemon-logo.png";
import pokeball from "../assets/pokeball.png";

import FilterList from "./Filter/FilterList";

import { PokemonContext } from "../context/PokemonContext";

import { Link } from "react-router-dom";

import { AiOutlineMenu  , AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const { onInputChange, onResetForm, formState } = useContext(PokemonContext);
  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate("/search", {
      state: formState.searchValue,
    });

    onResetForm();
  };

  const [nav, setNav] = useState(false);

  return (
    <>
      <section className="max-w-[1300px] mx-auto p-6">
        <header className="flex flex-col gap-10">
          <nav className="bg-white flex gap-10 max-w-full items-center justify-between shadow-lg rounded-xl py-2 px-6 text-[#192943]">
            <div>
              <Link to="/">
                <img
                  src={logo}
                  className="max-w-[180px] max-h-[80px] w-full h-full"
                ></img>
              </Link>
            </div>
            <ul
              className={
                nav
                  ? "p-6 lg:p-0 z-[2] absolute bg-white left-0 duration-300 top-0 w-screen h-screen lg:w-auto lg:h-auto lg:static lg:flex lg:z-auto gap-8 font-semibold text-lg md:text-xl"
                  : "z-[2] absolute bg-white left-[-100vw] duration-300 top-0 w-screen h-screen lg:w-auto lg:h-auto lg:static lg:flex lg:z-auto gap-8 font-semibold text-lg md:text-xl"
              }
            >
              <div className="flex justify-between items-center mb-12 lg:hidden">
                <Link to="/">
                  <img
                    src={logo}
                    className="max-w-[180px] max-h-[80px] w-full h-full"
                  ></img>
                </Link>
                <AiOutlineClose color="#192943" size={30} onClick={() => setNav(!nav)} />
              </div>
              <li className="py-2 px-4 hover:bg-slate-100 duration-300 rounded-xl lg:my-0 my-4">
                <Link to='/'>
                Home
                </Link>
              </li>
              <li className="py-2 px-4 hover:bg-slate-100 duration-300 rounded-xl lg:my-0 my-4">
                Pokedex
              </li>
              <li className="py-2 px-4 hover:bg-slate-100 duration-300 rounded-xl lg:my-0 my-4">
                News
              </li>
            </ul>
            <div className="block lg:hidden font-bold">
              <AiOutlineMenu color="#192943" size={30} onClick={() => setNav(!nav)} />
            </div>
          </nav>
          <form
            onSubmit={onSearchSubmit}
            className="bg-white flex justify-between xl:max-w-[900px] w-full items-center shadow-lg rounded-xl"
          >
            <div className="flex gap-4 justify-between w-full items-center rounded-xl py-2 px-4">
              <input
                value={formState.searchValue}
                onChange={onInputChange}
                className="rounded-xl outline-0 border-none font-semibold text-xl w-full h-full py-4 text-[#192943]"
                type="text"
                placeholder="Search your Pokemon"
              ></input>
              <img
                src={pokeball}
                className="max-w-[40px] max-h-[40px] w-full h-full"
              ></img>
            </div>
          </form>
          <FilterList />
        </header>

        <main
          className={`xl:justify-between xl:items-start my-10 flex flex-col items-center`}
        >
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default Navigation;
