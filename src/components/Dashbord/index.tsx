import { Box, Grid, TextField } from "@mui/material";
import { Pokemons } from "../Pokemons";

export function Dashbord() {
  return (
    <div>
      <div>
        <TextField variant="outlined" label="Buscar Pokemon" type="text" />

        <Pokemons />
      </div>
    </div>
  );
}
