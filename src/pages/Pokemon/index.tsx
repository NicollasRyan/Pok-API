import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

interface ResponseType {
  id: number;
}

export function Pokemon() {
  const { id } = useParams();

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${id}`);
        const { stats, abilities, name, types } = response.data;
        console.log({ stats, abilities, name, types });
      } catch (err) {
        console.log(err);
      }
    }

    getPokemonDetail();
  }, []);

  return (
    <div>
      <h1>PokemonID: {id}</h1>
      <Link to={`/`}>Dashbord</Link>
    </div>
  );
}
