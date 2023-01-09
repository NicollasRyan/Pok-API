import { Container, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
import {
  Attributes,
  AttributeValue,
  BaseStats,
  BaseStatsPokemon,
  BoxImg,
  ContainerPokemon,
  ContentBar,
  Header,
  PokemonBody,
  PokemonContentType,
  PokemonImg,
  PokemonType,
  PorgressBar,
  StatsBar,
  TypeText,
  Vector,
} from "./style";
import vector from "../../assets/vector.png";

type Stats = {
  base_stat: number;
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

type MoveType = {
  move: {
    name: string;
  };
};

interface PokemonProps {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Ability[];
  color: string;
  types: PokemonType[];
  moves: MoveType[];
  weight: number;
  height: number;
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
        const { stats, abilities, id, name, types, moves, weight, height } =
          response.data;
        // console.log(response.data);

        const currentType: TypeName = types[0].type.name;
        const color = colors.backgroundCard[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
          moves,
          weight,
          height,
        });
      } catch (err) {
        console.log("ops correu algum error");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetail();
  }, []);

  const max = (base_stat: number) => ((base_stat - 0) * 100) / (100 - 0);

  return (
    <>
      {load ? (
        <Typography style={{ marginTop: 200 }}>Carregando...</Typography>
      ) : (
        <PokemonBody type={pokemon.types[0].type.name} key={pokemon.id}>
          <Header>
            <h1>
              <Link to="/">
                <Vector src={vector} alt="" />
              </Link>

              {pokemon.name}
            </h1>
            <strong>#{pokemon.id}</strong>
          </Header>
          {/* <PokeBallImg src={ballpoke} /> */}
          <ContainerPokemon>
            <BoxImg>
              <PokemonImg
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
              />
            </BoxImg>
            <PokemonContentType>
              {pokemon.types.map(({ type }) => (
                <PokemonType type={type.name}>
                  <TypeText key={type.name}>{type.name}</TypeText>
                </PokemonType>
              ))}
            </PokemonContentType>
            <Container>
              <BaseStatsPokemon>
                <BaseStats type={pokemon.types[0].type.name}>
                  Base Stats
                </BaseStats>
              </BaseStatsPokemon>

              {pokemon.stats.map((attribute) => (
                <StatsBar key={attribute.stat.name}>
                  <Attributes type={pokemon.types[0].type.name}>
                    {attribute.stat.name}
                  </Attributes>
                  <AttributeValue>{attribute.base_stat}</AttributeValue>
                  <ContentBar>
                    <PorgressBar
                      variant="determinate"
                      type={pokemon.types[0].type.name}
                      value={attribute.base_stat}
                    />
                  </ContentBar>
                </StatsBar>
              ))}
            </Container>
          </ContainerPokemon>
        </PokemonBody>
      )}
    </>
  );
}
