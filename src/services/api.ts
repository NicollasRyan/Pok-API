import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

// var endpoints = [];
//     for (var i = 1; i < 10; i++) {
//       endpoints.push(`${api}/pokemon?limit=${i}&offset=0`);
//     }
//     var response = axios
//       .all(endpoints.map((endpoint) => axios.get(endpoint)))
//       .then((res) => setPokemons(res));
// api
//   .get(`/pokemon?limit=10&offset=0`)
//   .then((response) => setPokemon(response.data.results))
//   .catch((err) => console.log(err));
