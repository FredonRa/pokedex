import Container from "./components/Container";
import Pagination from "./components/Pagination";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <Container>
      <PokemonList />
      <Pagination />
    </Container>
  );
}

export default App;
