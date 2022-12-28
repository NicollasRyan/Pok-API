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
    height: 100%;
  `}
`;

export const ContainerPokemon = styled.div`
  margin: 250px 10px 0 10px;
  border-radius: 8px;
  height: 750px;
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
  width: 400px;
  height: 400px;
  left: 80vh;
  top: 8px;

  /* opacity: 0.1; */
`;

export const TypeText = styled.p<TypeProps>`
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
  `}
`;
