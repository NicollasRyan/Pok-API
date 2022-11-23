import pokeball from "../../assets/pokeball.png";
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
