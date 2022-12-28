import pokeball from "../../assets/pokeball.png";
import vector from "../../assets/vector.png";
import hastag from "../../assets/hastag.png";
import { TitleHeader, HederBox, PokeBall } from "./style";

export function Header() {
  return (
    <HederBox>
      <TitleHeader>
        <PokeBall src={pokeball} alt="" />
        Pokédex
      </TitleHeader>
    </HederBox>
  );
}
