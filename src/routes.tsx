import { Routes as Routers, Route } from "react-router-dom";

import { Dashbord } from "./pages/Dashbord";
import { Pokemon } from "./pages/Pokemon";

export default function MainRoutes() {
  <Routers>
    <Route path="/" element={<Dashbord />} />
    <Route path="/pokemon" element={<Pokemon />} />
  </Routers>;
}
