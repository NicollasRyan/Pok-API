import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { CardPokemon } from "../CardPokemon/index";
import { GridContainer } from "./style";
import { api } from "../../services/api";
import { FlatList } from "react-native";
import axios from "axios";

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Sprites = {
  front_default: string;
};

export interface PokemonProps {
  data: {
    sprites: Sprites;
    name: string;
    id: number;
    image: string;
    endpoint: string;
  };
}

export function Pokemons() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    getPokemon();
    // api
    //   .get(`/pokemon?limit=10&offset=0`)
    //   .then((response) => setPokemons(response.data.results))
    //   .catch((err) => console.log(err));
  }, []);

  const getPokemon = () => {
    var endpoints = [];
    for (var i = 1; i < 10; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    console.log(endpoints);
    var response = axios
      .all(endpoints.map((endpoint) => api.get(endpoint)))
      .then((res: any) => setPokemons(res));
    return response;
  };

  return (
    <GridContainer container spacing={3}>
      {pokemons.map((pokemon, key) => (
        <Grid item xs={3} key={key}>
          <CardPokemon
            name={pokemon.data.name}
            id={pokemon.data.id}
            image={pokemon.data.sprites.front_default}
          />
        </Grid>
      ))}
    </GridContainer>
  );
}
