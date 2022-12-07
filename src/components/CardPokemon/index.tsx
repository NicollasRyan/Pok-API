import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { CardConainer, CardContentText, CardText, IdPokemon } from "./style";

interface PokemonProps {
  name: string;
  id: number;
  image: string;
}

export function CardPokemon({ name, id, image }: PokemonProps) {
  return (
    <CardConainer sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <IdPokemon>#{id}</IdPokemon>
        <CardMedia component="img" image={image} alt={name} />
        <CardContentText>
          <CardText>{name}</CardText>
        </CardContentText>
      </CardActionArea>
    </CardConainer>
  );
}
