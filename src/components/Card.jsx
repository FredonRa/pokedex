import styled from "styled-components";
import { typesIcons } from "../icons";

const CardStyledComponent = styled.div`
  width: 220px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(186, 186, 186);
  background: linear-gradient(
    0deg,
    rgba(186, 186, 186, 1) 0%,
    rgba(241, 242, 243, 1) 66%
  );
  border-radius: 4px;
  filter: drop-shadow(4px 6px 8px rgba(0, 0, 0, 0.2));
  overflow: hidden;
`;

const CardImageStyledComponent = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
`;

const CardDescriptionStyledComponent = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  text-align: left;
  position: absolute;
  background-color: #2e2e2e;
  color: #ffffff;
  padding: 5px 15px;
  border-radius: 15px;
  height: 20px;
  bottom: 6px;
  left: 6px;
`;

const CardTypeStyledComponent = styled.img`
  width: 20px;
  height: 20px;
  background-color: #2e2e2e;
  padding: 5px;
  border-radius: 50%;
`;

const ContainerTypes = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 2px;
`;

const CardPokemonWeightStyledComponent = styled.span`
  position: absolute;
  bottom: 6px;
  right: 6px;
  display: flex;
`;

const CardComponent = ({ children }) => {
  return <CardStyledComponent>{children}</CardStyledComponent>;
};

const CardPokemonImageComponent = ({ url }) => {
  return <CardImageStyledComponent src={url} alt="Card Image" />;
};

const CardPokemonNameComponent = ({ description }) => {
  return (
    <CardDescriptionStyledComponent>
      {description}
    </CardDescriptionStyledComponent>
  );
};

const CardPokemondTypeComponent = ({ types }) => {
  return (
    <ContainerTypes>
      {types.map((type, index) => (
        <CardTypeStyledComponent title={type} key={index} src={typesIcons[type]} />
      ))}
    </ContainerTypes>
  );
};

const CardPokemondWeightComponent = ({ children }) => {
  const weight = (children * 0.1).toFixed(1)
  return <CardPokemonWeightStyledComponent>{weight} kg</CardPokemonWeightStyledComponent>;
};

CardComponent.Image = CardPokemonImageComponent;
CardComponent.Description = CardPokemonNameComponent;
CardComponent.Type = CardPokemondTypeComponent;
CardComponent.Weight = CardPokemondWeightComponent;

export default CardComponent;
