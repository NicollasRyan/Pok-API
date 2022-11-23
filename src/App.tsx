import { Container, BoxIntem, InputBox } from "./styles";
import { Header } from "./components/Header/index";

import { GlobalStyle } from "./styles/global";
import { Dashbord } from "./components/Dashbord";

export default function App() {
  return (
    <Container>
      <Header />
      <Dashbord />
      <GlobalStyle />
    </Container>
  );
}
