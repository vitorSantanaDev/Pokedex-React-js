import React from "react";
import Boxpoke from "./Components/Boxpoke/Boxpoke";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import LoadingModal from "./Components/Loading/LoadingModal.jsx";

function App() {
  const pokemonsUrl = (name) => `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [typed, setTyped] = React.useState(null);
  const [Loading, setLoading] = React.useState(null);
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleChange = ({ target }) => {
    setTyped(target.value);
    setDados(null)
    setLoading(false)
    console.log(typed);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!typed) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(pokemonsUrl(typed));
      const responseJson = await response.json();
      setDados(responseJson);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError("Pokemon não encontrado");
      setLoading(false);
      setDados(null);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Input
          value={typed}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {Loading && <LoadingModal children="Buscando pokemon..." />}
        {dados && <Boxpoke dados={dados} />}
        {!dados && <LoadingModal children={error} />}
      </Container>
    </React.Fragment>
  );
}

export default App;
