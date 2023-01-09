import { Container, Skeleton } from "@mui/material";
import styled from "styled-components";

export const SkeletonContainer = styled(Container)`
  display: flex;
  justify-items: center;
  flex-direction: row;
`;

export const SkeletonCard = styled(Skeleton)`
  margin: 0 10px 10px 10px;
`;
