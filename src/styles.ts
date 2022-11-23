import { Box, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  margin: 0;
  padding: 0;

  background: #f7f7f7;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
`;

export const BoxIntem = styled(Box)`
  gap: 50px;
`;

export const InputBox = styled.div``;

export const Search = styled(TextField)``;
