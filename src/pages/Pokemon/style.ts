import styled, { css } from "styled-components";
import { TypeName } from "../../components/CardPokemon/style";

type TypeProps = {
  type: TypeName;
};

export const HeaderApi = styled.div<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;
