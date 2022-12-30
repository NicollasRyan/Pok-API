import styled, { css } from "styled-components";
import { TypeName } from "../../components/CardPokemon/style";

type TypeProps = {
  type: TypeName;
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;

  font-family: "Poppins";
  color: white;
`;

export const Content = styled.div<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    height: 1300px;
  `}
`;

export const ContainerPokemon = styled.div`
  margin: 250px 10px 0 10px;
  border-radius: 8px;
  height: 940px;
  background-color: white;
`;

export const PokemonContentType = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const PokemonType = styled.div<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    padding: 10px;
    height: 30px;
    border-radius: 15px;
    margin-left: 5px;
    margin-top: 5px;

    display: flex;
    align-items: center;
    justify-items: center;
  `}
`;
export const PokeBallImg = styled.img`
  position: absolute;
  width: 550px;
  height: 550px;
  left: 150vh;
  top: 8px;

  /* opacity: 0.1; */
`;

export const TypeText = styled.p`
  font-family: "Poppins";
  color: white;

  font-weight: 500;
  font-size: 15px;
  text-transform: capitalize;
`;

export const Vector = styled.img`
  margin-right: 10px;
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const PokemonImg = styled.img`
  margin-top: -220px;
`;

export const AboutPokemon = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

export const About = styled.p<TypeProps>`
  ${({ theme, type }) => css`
    color: ${theme.colors.backgroundCard[type]};
    font-family: "Poppins";
    font-size: 30px;
    font-weight: 700;
  `}
`;

export const InfoPokemon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 45px;
`;

export const Weight = styled.div`
  padding: 30px 50px 30px 50px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const WeightText = styled.div`
  font-family: "Poopins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
`;

export const Height = styled.div`
  padding: 30px 50px 30px 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-left: 0.5px solid #e0e0e0;
  border-right: 0.5px solid #e0e0e0;

  img {
    margin-right: 10px;
    width: 10px;
    height: 20px;
  }
`;

export const TextMove = styled.p`
  margin-bottom: 5px;
`;

export const Moves = styled.div`
  padding: 30px 50px 30px 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PWight = styled.p`
  margin-top: 15px;

  color: #666666;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;

export const PDiv = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 15px;
`;

export const PMove = styled.p`
  margin-bottom: 10px;

  color: #666666;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;
