import { Card, CardContent } from "@mui/material";
import styled, { css } from "styled-components";

export type TypeName =
  | "grass"
  | "fire"
  | "ice"
  | "water"
  | "dark"
  | "poison"
  | "psychic"
  | "normal"
  | "steel"
  | "bug"
  | "flying"
  | "fairy"
  | "electric"
  | "fighting"
  | "dragon"
  | "rock"
  | "ghost"
  | "ground";

type TypeProps = {
  type: TypeName;
};

export const CardConainer = styled(Card)<TypeProps>`
  ${({ theme, type }) => css`
    border-radius: 8px;
    max-width: 325px;
    border: 1px solid ${theme.colors.backgroundCard[type]};
  `}
`;

export const CardContentText = styled(CardContent)<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const CardText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 20px;

  text-align: center;

  color: #ffffff;
`;

export const IdPokemon = styled.p<TypeProps>`
  ${({ theme, type }) => css`
    padding: 8px;

    font-family: "Poppins";
    font-weight: 400;
    font-size: 20px;
    text-align: right;

    color: ${theme.colors.backgroundCard[type]};
  `}
`;
