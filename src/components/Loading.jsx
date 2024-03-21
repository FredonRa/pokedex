import styled from "styled-components";
import pokeball from "../../assets/logos/pokeball.png";

const LoadingStyledComponent = styled.img`
  animation: spin 1s linear infinite;
  width: 40px;
  height: 40px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ContainerLoadingStyledComponent = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4;
`;

const Loading = () => {
  return (
    <ContainerLoadingStyledComponent>
      <LoadingStyledComponent src={pokeball} />;
    </ContainerLoadingStyledComponent>
  );
};

export default Loading;
