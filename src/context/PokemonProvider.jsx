import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { DotSpinner } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";
import { useForm } from "../custom-hooks/useForm";

<DotSpinner size={40} speed={0.9} color="black" />;

function PokemonProvider({ children }) {
  
  const [offset, setOffset] = useState(0);
  const [limitedPokemons, setLimitedPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loader, setLoader] = useState(true);

  const { searchValue, onInputChange, onResetForm, formState } = useForm({
    searchValue: "",
  });

  const getLimitedPokemons = async (limit = 30) => {
    const apiURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${apiURL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setLimitedPokemons([...limitedPokemons, ...results]);
    setLoader(false);
  };

  const getAllPokemons = async () => {
    const apiURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${apiURL}pokemon?limit=100000$offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setAllPokemons(results);
    setLoader(false);
  };

  const getPokemonById = async (id) => {
    const apiURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${apiURL}pokemon/${id}`);
    const data = await res.json();

    return data;
  };

  function loadMorePokemons() {
    setOffset(offset + 30);
  }

  useEffect(() => {
    getLimitedPokemons();
  }, [offset]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const [typeSelected, setTypeSelected] = useState({
    fire: false,
    grass: false,
    steel: false,
    water: false,
    psychic: false,
    ground: false,
    ice: false,
    flying: false,
    ghost: false,
    normal: false,
    poison: false,
    rock: false,
    fighting: false,
    dark: false,
    bug: false,
    dragon: false,
    electric: false,
    fairy: false,
    shadow: false,
    unknow: false,
  });
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  function handleFilter(e) {
    setTypeSelected({
      ...typeSelected,
      [e.target.id]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.id)
      );

      setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    } else {
      const filteredResults = filteredPokemons.filter(
        (pokemon) =>
          !pokemon.types.map((type) => type.type.name).includes(!e.target.id)
      );
      setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    }
  }

  const navigate = useNavigate();

  function filtersReset() {
    setFilteredPokemons([]);
    navigate("/");
  }

  return (
    <PokemonContext.Provider
      value={{
        formState,
        searchValue,
        onInputChange,
        onResetForm,

        limitedPokemons,
        allPokemons,
        getPokemonById,

        handleFilter,
        filteredPokemons,

        loadMorePokemons,

        loader,
        setLoader,

        filtersReset,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
