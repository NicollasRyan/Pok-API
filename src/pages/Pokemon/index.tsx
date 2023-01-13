import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
import {
  About,
  AboutPokemon,
  Attributes,
  AttributeValue,
  BaseStats,
  BaseStatsPokemon,
  BoxImg,
  ContainerPokemon,
  ContentBar,
  Header,
  Height,
  InfoPokemon,
  Moves,
  PDiv,
  PMove,
  PokemonContentType,
  PokemonImg,
  PokemonType,
  PorgressBar,
  PWight,
  StatsBar,
  TextMove,
  TypeText,
  Vector,
  Weight,
  WeightText,
} from "./style";
import vector from "../../assets/vector.png";
import weight from "../../assets/weight.png";
import height from "../../assets/height.png";

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
    console.log(setPokemon);

    getPokemonDetail();
  }, []);

  const max = (base_stat: number) => ((base_stat - 0) * 100) / (200 - 0);

  return (
    <>
      {load ? (
        <Typography style={{ marginTop: 200 }}>Carregando...</Typography>
      ) : (
        <>
          <Header type={pokemon.types[0].type.name}>
            <h1>
              <Link to="/">
                <Vector src={vector} alt="" />
              </Link>

              {pokemon.name}
            </h1>
            <strong>#{pokemon.id}</strong>
          </Header>

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
            <AboutPokemon>
              <About type={pokemon.types[0].type.name}>About</About>
            </AboutPokemon>

            <InfoPokemon>
              <Weight>
                <WeightText>
                  <img src={weight} alt="" />
                  {pokemon.weight}
                  <PDiv>
                    <PWight>Weight</PWight>
                  </PDiv>
                </WeightText>
              </Weight>

              <Height>
                <WeightText>
                  <img src={height} alt="" />
                  {pokemon.height}
                  <PDiv>
                    <PWight>Height</PWight>
                  </PDiv>
                </WeightText>
              </Height>

              <Moves>
                <WeightText>
                  <TextMove>{pokemon.moves[0].move.name}</TextMove>
                  <p>{pokemon.moves[1].move.name}</p>
                  <PDiv>
                    <PMove>Moves</PMove>
                  </PDiv>
                </WeightText>
              </Moves>
            </InfoPokemon>

            <Container>
              <BaseStatsPokemon>
                <BaseStats type={pokemon.types[0].type.name}>
                  Base Stats
                </BaseStats>
              </BaseStatsPokemon>

              {pokemon.stats.map((attribute) => (
                <StatsBar key={attribute.stat.name}>
                  <Grid container>
                    <Grid item md={2}>
                      <Attributes type={pokemon.types[0].type.name}>
                        {attribute.stat.name}
                      </Attributes>
                    </Grid>
                    <Grid item md={1}>
                      <AttributeValue>{attribute.base_stat}</AttributeValue>
                    </Grid>
                    <Grid item md={9} display="flex" alignItems="center">
                      <ContentBar>
                        <PorgressBar
                          variant="determinate"
                          type={pokemon.types[0].type.name}
                          value={max(attribute.base_stat)}
                        />
                      </ContentBar>
                    </Grid>
                  </Grid>
                </StatsBar>
              ))}
            </Container>
          </ContainerPokemon>
        </>
      )}
    </>
  );
}
