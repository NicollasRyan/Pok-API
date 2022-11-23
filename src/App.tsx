import { Box, Grid, TextField } from "@mui/material";

import { Container, Header, BoxIntem, InputBox } from "./styles";
import pokeball from "./assets/pokeball.png";
import vector from "./assets/vector.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface PokemonProps {
  name?: string;
  url?: string;
}

export default function App() {
  const [pokemon, setPokemon] = useState<PokemonProps>({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => setPokemon(response.data));
  }, []);

  return (
    <Container>
      <Header>
        <h1>
          <img src={pokeball} alt="" />
          Pokédex
        </h1>
        <button></button>
      </Header>

      <BoxIntem>
        <InputBox>
          <TextField variant="outlined" label="Buscar Pokemon" type="text" />
        </InputBox>

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
      </BoxIntem>
    </Container>
  );
}
