import { Header } from "./components/Header/index";

import { GlobalStyle } from "./styles/global";
import { Dashbord } from "./components/Dashbord";

export default function App() {
  return (
    <>
      <Header />
      <Dashbord />
      <GlobalStyle />
    </>
  );
}
