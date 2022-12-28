import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header/index";
import { Dashbord } from "./pages/Dashbord";
import { Pokemon } from "./pages/Pokemon";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}
