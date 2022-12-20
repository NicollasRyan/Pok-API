import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Header } from "./components/Header";
import ErrorPage from "./error-page";
import { Dashbord } from "./pages/Dashbord";
import { Pokemon } from "./pages/Pokemon";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);

reportWebVitals();
