import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Pokemons } from "../Pokemons";
import { Search } from "../Search";

export function Dashbord() {
  return (
    <ThemeProvider theme={theme}>
      <Search />

      <Pokemons />
    </ThemeProvider>
  );
}
