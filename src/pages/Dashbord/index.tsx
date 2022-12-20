import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { api } from "../../services/api";
import theme from "../../styles/theme";
import { CardPokemon } from "../../components/CardPokemon";
import { Search } from "../../components/Search";
import { GridContainer } from "./style";
import { Link } from "react-router-dom";

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
  name: string;
  pokemonFilter: (name: any) => void;
  data: {
    types: TypesProps[];
    sprites: Sprites;
    name: any;
    id: number;
    image: string;
    endpoint: string;
  };
}

export function Dashbord() {
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

  const PokemonFilter = (name: string) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemon();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <ThemeProvider theme={theme}>
      <Search pokemonFilter={PokemonFilter} />
      <Link to={`/pokemon`}>Pokemon</Link>

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
    </ThemeProvider>
  );
}
