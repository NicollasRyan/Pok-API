import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
import {
  About,
  AboutPokemon,
  BoxImg,
  ContainerPokemon,
  Content,
  Header,
  PokeBallImg,
  PokemonContentType,
  PokemonImg,
  PokemonType,
  TypeText,
  Vector,
} from "./style";
import vector from "../../assets/vector.png";
import ballpoke from "../../assets/ballpoke.png";

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
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        const { stats, abilities, id, name, types } = response.data;

        const currentType: TypeName = types[0].type.name;
        const color = colors.backgroundCard[currentType];

        setPokemon({ stats, abilities, id, name, types, color });
      } catch (err) {
        Alert.alert("ops correu algum error");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetail();
  }, []);

  return (
    <>
      {load ? (
        <Typography style={{ marginTop: 200 }}>Carregando...</Typography>
      ) : (
        <Content type={pokemon.types[0].type.name}>
          <Header>
            <h1>
              <Link to="/">
                <Vector src={vector} alt="" />
              </Link>

              {pokemon.name}
            </h1>
            <strong>#{pokemon.id}</strong>
          </Header>
          <PokeBallImg src={ballpoke} />
          <ContainerPokemon>
            <BoxImg>
              <PokemonImg
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
              />
            </BoxImg>
            <PokemonContentType>
              {pokemon.types.map((pokemonTypes) => (
                <PokemonType type={pokemonTypes.type.name}>
                  <TypeText type={pokemonTypes.type.name}>
                    {pokemonTypes.type.name}
                  </TypeText>
                </PokemonType>
              ))}
            </PokemonContentType>
            <AboutPokemon>
              <About type={pokemon.types[0].type.name}>About</About>
            </AboutPokemon>
          </ContainerPokemon>
        </Content>
      )}
    </>
  );
}
