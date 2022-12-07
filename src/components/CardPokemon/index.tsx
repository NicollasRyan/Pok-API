import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import { TouchableOpacityProps } from "react-native";
import { PokemonProps } from "../Pokemons";

export function CardPokemon({ name, id }: PokemonProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        #{id}
        <CardMedia component="img" height="140" image="" alt={name} />
        <CardContent>
          <Typography variant="h5" component="div" key={id}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
