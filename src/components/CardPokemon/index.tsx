import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { CardConainer, CardContentText, CardText, IdPokemon } from "./style";

type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";

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
