import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardPokemon } from "../../components/CardPokemon";
import { Search } from "../../components/Search";
import { GridContainer, LinkGrid } from "./style";
import { Container } from "@mui/system";
import { TypeName } from "../../components/CardPokemon/style";

export type Sprites = {
  front_default: string;
};

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
    for (var i = 1; i < 100; i++) {
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
    <>
      <Search pokemonFilter={PokemonFilter} />

      <Container>
        <GridContainer container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <LinkGrid to={`/pokemon/${pokemon.data.id}`}>
                <CardPokemon
                  name={pokemon.data.name}
                  id={pokemon.data.id}
                  image={pokemon.data.sprites.front_default}
                  type={pokemon.data.types[0].type.name}
                />
              </LinkGrid>
            </Grid>
          ))}
        </GridContainer>
      </Container>
    </>
  );
}
