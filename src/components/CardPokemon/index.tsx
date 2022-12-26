import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  CardConainer,
  CardContentText,
  CardText,
  IdPokemon,
  TypeName,
} from "./style";

interface PokemonProps {
  name: string;
  id: number;
  image: string;
  type: TypeName;
}

export function CardPokemon({ name, id, image, type }: PokemonProps) {
  return (
    <CardConainer type={type}>
      <CardActionArea>
        <IdPokemon type={type}>#{id}</IdPokemon>
        <CardMedia component="img" height="250" image={image} alt={name} />
        <CardContentText type={type}>
          <CardText>{name}</CardText>
        </CardContentText>
      </CardActionArea>
    </CardConainer>
  );
}
