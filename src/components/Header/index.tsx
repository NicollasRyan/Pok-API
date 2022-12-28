import pokeball from "../../assets/pokeball.png";
import vector from "../../assets/vector.png";
import hastag from "../../assets/hastag.png";
import { TitleHeader, HederBox } from "./style";

export function Header() {
  return (
    <HederBox>
      <TitleHeader>
        <img src={pokeball} alt="" />
        Pokédex
      </TitleHeader>
    </HederBox>
  );
}
