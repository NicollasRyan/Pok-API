import { InputSearch, BoxInput } from "./style";

interface PokemonProps {
  pokemonFilter: (name: any) => void;
}

export function Search({ pokemonFilter }: PokemonProps) {
  return (
    <BoxInput>
      <InputSearch
        onChange={(e) => pokemonFilter(e.target.value.toLowerCase())}
        variant="outlined"
        label="Buscar Pokemon"
        type="text"
      />
    </BoxInput>
  );
}
