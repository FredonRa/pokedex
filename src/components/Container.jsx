import styled from "styled-components";

const ContainerStyledComponent = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;
  margin: 0 auto;
`;

const ContainerComponent = ({ children }) => {
  return <ContainerStyledComponent>{children}</ContainerStyledComponent>;
};

export default ContainerComponent;
