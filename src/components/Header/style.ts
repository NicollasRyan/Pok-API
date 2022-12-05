import styled from "styled-components";

export const HederBox = styled.header`
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 60px black;
`;

export const TitleHeader = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  margin-bottom: 20px;

  img {
    margin-right: 5px;
  }
`;

export const ButtonImage = styled.button`
  display: flex;
  align-items: center;

  border: none;
`;

export const VectorImg = styled.img`
  width: 10px;
  height: 17px;
`;

export const HastagImg = styled.img`
  width: 10px;
  height: 10px;
`;
