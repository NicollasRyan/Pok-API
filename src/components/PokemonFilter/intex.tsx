import { useState } from "react";
import { PokemonProps } from "../Dashbord";

export const PokemonFilter = (name: PokemonProps) => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  var filteredPokemons = [];
  for (var i in pokemons) {
    console.log(pokemons[i].data);
    if (pokemons[i].data.name.includes(name)) {
      filteredPokemons.push(pokemons[i]);
    }
  }
  console.log(filteredPokemons);
  // setPokemons(filteredPokemons);
};
