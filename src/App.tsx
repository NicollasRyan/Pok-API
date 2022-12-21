import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/index";
import { Dashbord } from "./pages/Dashbord";
import { Pokemon } from "./pages/Pokemon";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}
