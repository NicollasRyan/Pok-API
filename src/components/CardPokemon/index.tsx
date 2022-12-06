import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import { TouchableOpacityProps } from "react-native";
import { PokemonProps } from "../Pokemons";

interface CardProps {
  data: PokemonProps;
}
export function CardPokemon({ data, ...rest }: CardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} {...rest}>
      <CardActionArea>
        #{data.id}
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div" key={data.id}>
            {data.name}
          </Typography>
          <Typography>{data.types[0].type.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
