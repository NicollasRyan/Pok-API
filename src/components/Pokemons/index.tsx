import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { CardPokemon } from "../CardPokemon/index";
import { GridContainer } from "./style";
import { api } from "../../services/api";
import axios from "axios";

export type Sprites = {
  front_default: string;
};

type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";

type TypesProps = {
  type: { name: TypeName };
};

export interface PokemonProps {
  data: {
    types: TypesProps[];
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
    for (var i = 1; i < 13; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
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
            type={pokemon.data.types[0].type.name}
          />
        </Grid>
      ))}
    </GridContainer>
  );
}
