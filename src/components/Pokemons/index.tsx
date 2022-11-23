import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

interface PokemonProps {
  name?: string;
  url?: string;
}

export function Pokemons() {
  const [pokemon, setPokemon] = useState<PokemonProps>({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => setPokemon(response.data));
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Box>
          <p>{pokemon.name}</p>
        </Box>
      </Grid>
      <Grid item xs={4}>
        2
      </Grid>
      <Grid item xs={4}>
        4
      </Grid>
      <Grid item xs={4}>
        4
      </Grid>
      <Grid item xs={4}>
        5
      </Grid>
      <Grid item xs={4}>
        6
      </Grid>
    </Grid>
  );
}
