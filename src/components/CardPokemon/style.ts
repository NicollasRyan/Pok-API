import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";

export const CardConainer = styled(Card)`
  border: 1px solid green;
  border-radius: 10px;
`;

export const CardContentText = styled(CardContent)`
  background-color: green;
`;

export const CardText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 20px;

  text-align: center;

  color: #ffffff;
`;

export const IdPokemon = styled.p`
  padding: 8px;

  font-family: "Poppins";
  font-weight: 400;
  font-size: 20px;

  text-align: right;

  color: green;
`;
