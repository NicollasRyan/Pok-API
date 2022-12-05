import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardPokemon } from "../CardPokemon/index";
import { GridContainer } from "./style";
import { api } from "../../services/api";

type PokemonType = {
  type: string;
};

interface PokemonProps {
  name: string;
  id: number;
  url: string;
  types: PokemonType[];
}

type Resquest = {
  id: number;
  types: PokemonType[];
};

export function Pokemons() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get("/pokemon?limit=10&offset=0");
      const { results } = response.data;

      const payloadPokemon = await Promise.all(
        results.map(async (pokemon: PokemonProps) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );

      setPokemons(payloadPokemon);
    }

    getPokemon();
  }, []);

  async function getMoreInfo(url: string): Promise<Resquest> {
    const response = await api.get(url);
    const { id, types } = response.data;

    return {
      id,
      types,
    };
  }

  return (
    <GridContainer container spacing={3}>
      {pokemons.map((pokemon) => {
        return (
          <Grid item xs={3}>
            <CardPokemon name={pokemon.name} />
          </Grid>
        );
      })}
    </GridContainer>
  );
}
