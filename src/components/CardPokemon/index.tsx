import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import { TouchableOpacityProps } from "react-native";

interface PokemonProps {
  name: string;
  id: number;
  image: string;
}

export function CardPokemon({ name, id, image }: PokemonProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        #{id}
        <CardMedia component="img" image={image} alt={name} />
        <CardContent>
          <Typography variant="h5" component="div" key={id}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
