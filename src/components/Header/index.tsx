import pokeball from "../../assets/pokeball.png";
import vector from "../../assets/vector.png";
import hastag from "../../assets/hastag.png";
import {
  TitleHeader,
  HederBox,
  ButtonImage,
  VectorImg,
  HastagImg,
} from "./style";

export function Header() {
  return (
    <HederBox>
      <TitleHeader>
        <img src={pokeball} alt="" />
        Pokédex
      </TitleHeader>
      <ButtonImage>
        <HastagImg src={hastag} alt="" />
        <VectorImg src={vector} alt="" />
      </ButtonImage>
    </HederBox>
  );
}
