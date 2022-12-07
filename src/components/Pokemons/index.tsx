import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { CardPokemon } from "../CardPokemon/index";
import { GridContainer } from "./style";
import { api } from "../../services/api";
import { FlatList } from "react-native";

export type PokemonType = {
  type: {
    name: string;
  };
};

export interface PokemonProps {
  name: string;
  id: number;
}

export function Pokemons() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    api
      .get(`/pokemon?limit=10&offset=0`)
      .then((response) => setPokemons(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <GridContainer container spacing={3}>
      {pokemons.map((pokemon, key) => (
        <Grid item xs={3} key={key}>
          <CardPokemon name={pokemon.name} id={pokemon.id} />
        </Grid>
      ))}
    </GridContainer>
  );
}
