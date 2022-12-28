import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
import { HeaderApi } from "./style";

type Stats = {
  base_stat: 62;
  stat: {
    name: string;
  };
};

type Ability = {
  ability: {
    name: string;
  };
};

type TypeName =
  | "grass"
  | "fire"
  | "ice"
  | "water"
  | "dark"
  | "poison"
  | "psychic"
  | "normal"
  | "steel"
  | "bug"
  | "flying"
  | "fairy"
  | "electric"
  | "fighting"
  | "dragon"
  | "rock"
  | "ghost"
  | "ground";

type PokemonType = {
  type: {
    name: TypeName;
  };
};

interface PokemonProps {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Ability[];
  color: string;
  types: PokemonType[];
}

export function Pokemon() {
  const { pokemonId } = useParams();
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        const { stats, abilities, id, name, types } = response.data;

        const currentType: TypeName = types[0].type.name;
        const color = colors.backgroundCard[currentType];
        console.log(color);

        setPokemon({ stats, abilities, id, name, types, color });
      } catch (err) {
        Alert.alert("ops correu algum error");
      }
    }

    getPokemonDetail();
  }, []);

  return (
    <div>
      <HeaderApi type="fire">
        <h1>PokemonID: {pokemonId}</h1>
      </HeaderApi>
      <Link to={`/`}>Dashbord</Link>
    </div>
  );
}
