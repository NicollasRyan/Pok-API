import { Routes, Route } from "react-router-dom";

import { Dashbord } from "../pages/Dashbord";
import { Pokemon } from "../pages/Pokemon";

export default function MainRoutes() {
  <Routes>
    <Route path="/" element={<Dashbord />} />
    <Route path="/pokemon" element={<Pokemon />} />
  </Routes>;
}
