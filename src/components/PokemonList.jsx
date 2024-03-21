import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { selectPokemon } from "../store/features/pokemon";
import Loading from "./Loading";

const ContainerStyledComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: calc(100% - 20px);
  height: 100%;
  gap: 10px;
`;

const PokemonList = () => {
  const { data: pokemon, isLoading } = useSelector(selectPokemon);

  const renderPokemon = pokemon?.map((pokemon, index) => (
    <Card key={index}>
      <Card.Type types={pokemon.types} />
      <Card.Image url={pokemon.image} />
      <Card.Description description={pokemon.name} />
      <Card.Weight>{pokemon.weight}</Card.Weight>
    </Card>
  ));
  return (
    <>
      {isLoading && <Loading />}
      <ContainerStyledComponent>{renderPokemon}</ContainerStyledComponent>;
    </>
  );
};

export default PokemonList;
