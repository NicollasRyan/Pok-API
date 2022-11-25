import { InputSearch, BoxInput } from "./style";

export function Search() {
  return (
    <BoxInput>
      <InputSearch variant="outlined" label="Buscar Pokemon" type="text" />
    </BoxInput>
  );
}
