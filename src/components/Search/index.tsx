import { InputSearch, BoxInput } from "./style";

interface PokemonProps {
  pokemonFilter: (name: any) => void;
}

export function Search({ pokemonFilter }: PokemonProps) {
  return (
    <BoxInput>
      <InputSearch
        onChange={(e) => pokemonFilter(e.target.value.toLocaleLowerCase())}
        variant="outlined"
        label="Buscar Pokemon"
        type="text"
      />
    </BoxInput>
  );
}
