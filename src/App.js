import GlobalStyle from "./styles/global";
import { useState, useEffect } from "react";
import API from "./api";

import { Container } from "@mui/material";
import Header from "./components/Header";

import Router from "./Router";

function App(props) {
  const [games, setGames] = useState([]);

  async function pegarDados() {
    const response = await API.get(
      `games?key=16e1774f77054c039ecafbbc8eb94ea7&ordering=-added`
    );

    setGames(response.data.results);
  }

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <>
      <Header name={"Games"} />
      <GlobalStyle />
      <Container
        sx={{
          justifyContent: "center",
          bgcolor: "secundary.main",
        }}
        maxWidth="xl"
      >
        <Router games={games}></Router>
      </Container>
    </>
  );
}

export default App;
